// 将实验报告问题数据格式化
var formatQuestionList = []
function getAndDealData() {
  // 上传数据到平台
  function get_coursewareInfo() {
    let value = {}
    if (typeof parent.Variable !== 'function') {
      return value
    }
    var AICC_Score = new parent.Variable('AICC_Score', '', 0, 0, 'scorm');
    var VarTest_Score = new parent.Variable('VarTest_Score', '0', 0, 0, 'scorm');
    var titleMgr = parent.getTitleMgrHandle();
    var topic = []
    var allQuestion = []
    if (titleMgr && titleMgr.arTests && titleMgr.arTests.length) {
      var s = [];
      var name, score = 0, all = 0, complete = 0, progress = 0;
      for (var i = 0; i < titleMgr.arTests.length; i++) {
        var arr = []
        name = titleMgr.arTests[i].strLoadedName || '';
        VarTest_Score.set(titleMgr.GetTestScore(name));
        score += parseInt(VarTest_Score.getValue());
        s.push(score);
        autoCommit = true;
        titleMgr.processTest(name);

        // localStorage.setItem(i+'.试卷标记：'+name,'试卷成绩：'+score);
        for (var o = 0; o < titleMgr.arTests[i].arRTPages.length; o++) {
          for (var j = 0; j < titleMgr.arTests[i].arRTPages[o].arQues.length; j++) {
            all++;
            if (titleMgr.arTests[i].arRTPages[o].arQues[j].strOurAns/* && titleMgr.arTests[i].arRTPages[o].arQues[j].strOurAns !== "~~~null~~~"*/) {
              complete++;
            }

            var t = titleMgr.arTests[i].arRTPages[o].arQues[j];
            arr.push({
              title: t.text || '',
              myAnswer: (t.strOurAns && t.strOurAns !== "~~~null~~~") ? t.strOurAns : '',
              rightAnswer: (function () {
                var an = t.arCorrAns;
                if (Object.prototype.toString.call(an) === '[object Array]') {
                  an = an.concat([]);
                  for (var j = 0; j < an.length; j++) {
                    if (Object.prototype.toString.call(an[j]) === '[object Array]') {
                      an[j] = an[j].join('-');
                    }
                  }
                  an = an.join(',');
                } else {
                  an = [an];
                }
                return an;
              })()
            });
          }
        }
        topic.push(arr)
      }

      AICC_Score.set(parseInt(score / s.length));
      parent.LMSCommit();

      if (all === 0) {
        console.log('没有考题');
        progress = 100;
      } else {
        progress = ((complete * 10000 / all) >> 0) / 100;
      }
      if (parent.parent.API_20140512) {
        parent.parent.API_20140512.setProgress(progress);
        parent.parent.API_20140512.commit();
        console.log('学习进度发送成功');
      } else {
        console.log('未找到平台API');
      }

    }
    allQuestion = []
    for (var n = 0; n < topic.length; n++) {
      allQuestion = allQuestion.concat(topic[n])
    }

    value = {
      score: parseInt(score / s.length),
      progress: ((complete * 10000 / all) >> 0) / 100,
      topic: topic,
      allQuestion: allQuestion,
    }
    return value
  }
  // 获取数据后对数据格式化，加了用户的答案选项
  var coursewareInfo =  get_coursewareInfo()
  console.log("课件原始数据",coursewareInfo);
  if (coursewareInfo.allQuestion?.length) {
    // 遍历课件问题数据覆盖本地默认数据
    coursewareInfo.allQuestion.forEach(item => {
      const target = defaultQuestionList.find(question => {
        return ((question.title.includes(item.title))||(item.title.includes(question.title)))
      })
      let newQuestion = null
      if (target) {
        newQuestion =Object.assign(target,item)
      } else {
        newQuestion = {
          ...item
        }
      }
      formatQuestionList.push(newQuestion)
    })
  } else {
    formatQuestionList = defaultQuestionList
  }
}
getAndDealData()