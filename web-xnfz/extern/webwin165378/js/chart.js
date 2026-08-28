function createChart() {
  function get_coursewareInfo() {
    let value = {};
    if (typeof parent.Variable !== "function") {
      return value;
    }
    var AICC_Score = new parent.Variable("AICC_Score", "", 0, 0, "scorm");
    var VarTest_Score = new parent.Variable(
      "VarTest_Score",
      "0",
      0,
      0,
      "scorm"
    );
    var titleMgr = parent.getTitleMgrHandle();
    var topic = [];
    var allQuestion = [];
    if (titleMgr && titleMgr.arTests && titleMgr.arTests.length) {
      var s = [];
      var name,
        score = 0,
        all = 0,
        complete = 0,
        progress = 0;
      for (var i = 0; i < titleMgr.arTests.length; i++) {
        var arr = [];
        name = titleMgr.arTests[i].strLoadedName || "";
        VarTest_Score.set(titleMgr.GetTestScore(name));
        score += parseInt(VarTest_Score.getValue());
        s.push(score);
        autoCommit = true;
        titleMgr.processTest(name);

        // localStorage.setItem(i+'.试卷标记：'+name,'试卷成绩：'+score);
        for (var o = 0; o < titleMgr.arTests[i].arRTPages.length; o++) {
          for (
            var j = 0;
            j < titleMgr.arTests[i].arRTPages[o].arQues.length;
            j++
          ) {
            all++;
            if (
              titleMgr.arTests[i].arRTPages[o].arQues[j]
                .strOurAns /* && titleMgr.arTests[i].arRTPages[o].arQues[j].strOurAns !== "~~~null~~~"*/
            ) {
              complete++;
            }

            var t = titleMgr.arTests[i].arRTPages[o].arQues[j];
            arr.push({
              title: t.text || "",
              myAnswer:
                t.strOurAns && t.strOurAns !== "~~~null~~~" ? t.strOurAns : "",
              rightAnswer: (function () {
                var an = t.arCorrAns;
                if (Object.prototype.toString.call(an) === "[object Array]") {
                  an = an.concat([]);
                  for (var j = 0; j < an.length; j++) {
                    if (
                      Object.prototype.toString.call(an[j]) === "[object Array]"
                    ) {
                      an[j] = an[j].join("-");
                    }
                  }
                  an = an.join(",");
                } else {
                  an = [an];
                }
                return an;
              })(),
            });
          }
        }
        topic.push(arr);
      }

      AICC_Score.set(parseInt(score / s.length));
      parent.LMSCommit();

      if (all === 0) {
        console.log("没有考题");
        progress = 100;
      } else {
        progress = (((complete * 10000) / all) >> 0) / 100;
      }
      console.log("学习进度：" + progress + "%");
      if (parent.parent.API_20140512) {
        // parent.parent.API_20140512.setProgress(progress);
        // parent.parent.API_20140512.commit();
        console.log("学习进度发送成功");
      } else {
        console.log("未找到平台API");
      }
    }
    allQuestion = [];
    for (var n = 0; n < topic.length; n++) {
      allQuestion = allQuestion.concat(topic[n]);
    }

    value = {
      score: parseInt(score / s.length),
      progress: (((complete * 10000) / all) >> 0) / 100,
      topic: topic,
      allQuestion: allQuestion,
    };
    return value;
  }

  var coursewareInfo = get_coursewareInfo();
  let formatQuestionList = [];
  if (coursewareInfo.allQuestion?.length) {
    coursewareInfo.allQuestion.forEach((item) => {
      const target = defaultQuestionList.find((question) => {
        return ((question.title.includes(item.title))||(item.title.includes(question.title)))
      });
      let newQuestion = null;
      if (target) {
        newQuestion = {
          ...target,
          rightAnswer: item.rightAnswer,
        };
      } else {
        newQuestion = {
          ...item,
        };
      }
      formatQuestionList.push(newQuestion);
    });
  } else {
    formatQuestionList = defaultQuestionList;
  }

  
  function getResult(myAnswer, rightAnswer, question) {
    let myArray = null;
    let rightArray = null;
    let result = false;

    if (myAnswer.includes("、")) {
      myArray = myAnswer.split("、");
    } else if (myAnswer.includes("，")) {
      myArray = myAnswer.split("，");
    } else if (myAnswer.includes(",")) {
      myArray = myAnswer.split(",");
    } else {
      myArray = myAnswer.split("");
    }

    if (rightAnswer.includes("、")) {
      rightArray = rightAnswer.split("、");
    } else if (rightAnswer.includes("，")) {
      rightArray = rightAnswer.split("，");
    } else if (rightAnswer.includes(",")) {
      rightArray = rightAnswer.split(",");
    } else {
      rightArray = rightAnswer.split("");
    }
    if (question.isForbidSort) {
      result = myArray.toString() === rightArray.toString();
    } else {
      result = myArray.sort().toString() === rightArray.sort().toString();
    }
    return result;
  }
  var classifyInfo = [];
  formatQuestionList.forEach((item, index) => {
    // 约束当前项是疾病诊断模块
    if (Array.isArray(item.classify)) {
      item.classify.forEach((classify) => {
        const targetIndex = classifyInfo.findIndex((opt) => {
          return opt.name === classify.name;
        });
        if (targetIndex === -1) {
          const newOpt = {
            name: classify.name,
            total: classify.score || 0,
            value: 0,
          };
          if (getResult(item.myAnswer, item.rightAnswer, item)) {
            newOpt.value = classify.score || 0;
          }
          classifyInfo.push(newOpt);
        } else {
          const newOpt = {
            ...classifyInfo[targetIndex],
          };
          newOpt.total = newOpt.total + (classify.score || 0);
          if (getResult(item.myAnswer, item.rightAnswer, item)) {
            newOpt.value = newOpt.value + (classify.score || 0);
          }
          classifyInfo.splice(targetIndex, 1, newOpt);
        }
      });
    }
  });

  // 计算echarts图表内的大小
  function getFontSize(size) {
    var w = document.body.clientWidth,
      h = document.body.clientHeight,
      ratio = 16 / 9,
      r = w / h;
    var setW, setH, fontSize;
    if (r >= ratio) {
      // 高度撑满
      setW = h * ratio;
      fontSize = (size * setW) / 1920;
    } else {
      // 宽度撑满
      setH = w / ratio;
      fontSize = (size * setH) / 1080;
    }
    return fontSize;
  }
  function getOption() {
    return {
      title: {
        // 图标标题
        show: false,
      },
      grid: {
        left: "0",
        right: "0",
        bottom: "0",
        top: "0",
        width: "auto",
        height: "auto",
        borderColor: "red",
      },
      legend: {
        // 图例组件
        show: false,
      },
      radar: [
        {
          //中心点
          // center: ["50%", "50%"],
          // 图形大小
          radius: getFontSize(150),
          show: false,
          axisLabel: {
            show: false,
          },
          axisName: {
            show: false,
          },
          // startAngle: -72,
          // 区域分割段
          splitNumber: 7,
          // 分割线形状
          shape: "polygon",
          // 图形中几条直线分割线
          axisLine: {
            symbol: ["none", "arrow"],
            // 起始、末端箭头
            // symbolOffset: [0, 40],
            //箭头偏移量
            // (圆内的几条直线)坐标轴轴线相关设置
            lineStyle: {
              color: "#5abfff",
              width: 1,
              // 坐标轴线线宽。
              type: "solid",
              // 坐标轴线线的类型。
            },
            show: false,
          },
          splitLine: {
            // (这里是指所有圆环)坐标轴在 grid 区域中的分隔线。
            lineStyle: {
              // color: "#fff",
              color: "#23a4d6",
              // 分隔线颜色
              width: 1,
              // 分隔线线宽
            },
          },
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
          },
          splitLine: {
            show: false,
          },
          splitArea: {
            // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: false,
          },
          indicator: classifyData.map((item) => {
            return {
              name: "",
              min: 0,
              max: 100,
            };
          }),
        },
      ],
      series: [
        {
          name: "",
          type: "radar",
          data: [
            {
              name: "",
              // 数据项名称
              // value: [100, 100, 100, 100, 100],
              value: classifyData.map((item) => {
                return 100;
              }),
              symbol: "none",
              // 单个数据标记的图形。
              symbolSize: getFontSize(5),
              // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
              label: {
                show: false,
              },
              itemStyle: {
                // 单个拐点标志的样式设置。
                color: "#0E688B",
                // borderColor: "#6ED6FF",
                borderColor: "#289dee",
                // // 拐点的描边颜色。[ default: '#000' ]
                borderWidth: getFontSize(5),
                // // 拐点的描边宽度，默认不描边。[ default: 0 ]
              },
              lineStyle: {
                // 单项线条样式。
                // color: "#00C7B7",
                color: "rgba(255, 255, 255, 0)",
                width: getFontSize(3),
              },
              areaStyle: {
                // 单项区域填充样式
                color: "rgba(255, 255, 255, 0)",
              },
            },
            {
              // 雷达图的数据是多变量（维度）的
              name: "女",
              // 数据项名称
              // value: [100, 100, 100, 100, 100],
              value: classifyData.map((item) => {
                return item.value;
              }),
              // 其中的value项数组是具体的数据，每个值跟 radar.indicator 一一对应。
              symbol: "none",
              // 单个数据标记的图形。
              symbolSize: getFontSize(5),
              // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
              label: {
                show: false,
              },
              lineStyle: {
                // 单项线条样式--填充区域边缘。
                color: "#5357FF",
                width: getFontSize(3),
              },
              areaStyle: {
                // 区域填充样式
                color: "#9191f8",
              },
            },
          ],
        },
      ],
    };
  }

  
  var classifyData = [];
  var classifyInfoData = classifyInfo.map((item) => {
    if (item.total === 0) {
      return {
        name: item.name,
        value: 0,
      };
    }
    return {
      name: item.name,
      value: parseInt((item.value / item.total) * 100),
    };
  });
  // 按UI设计图定义分类得分的顺序
  var keyWordOrder = ['思维判断', '知识技能', '人文素养', '熟练程度', '团队意识'];
  keyWordOrder.forEach(item => { 
    const targetItem = classifyInfoData.find(classifyInfoItem => { 
      return classifyInfoItem.name === item
    })
    if (targetItem) {
      classifyData.push(targetItem);
    } else { 
      console.warn(`无法检查到${item}分类的得分情况，请联系开发人员！`)
    }
  })
  // var classifyData = [
  //   {
  //     name: "沟通协调能力",
  //     value: 45,
  //   },
  //   {
  //     name: "护理临床思维",
  //     value: 20,
  //   },

  //   {
  //     name: "基础知识",
  //     value: 39,
  //   },
  //   {
  //     name: "护理技能",
  //     value: 60,
  //   },
  //   {
  //     name: "职业防护能力",
  //     value: 74,
  //   },
  // ];

  // 分数结果提示
  var $chartInfoContainer = $(".chart-info-container");
  classifyData.forEach((item, index) => {
    let $newClassify = null;
      $newClassify = $(`
      <span class="classify-item-container animated flipInY">
        <span class="classify-info">
          
            <span class="classify-value-container bottom-value  ${
              item.value < 60 ? "warn-value" : ""
            }">
                <span class="value">
                ${item.value}<span class="percent-sign">%</span>
                </span>
                
            </span>
            <span class="classify-name">
              ${item.name}
            </span>
        </span>
      </span>
      `);
    
    $chartInfoContainer.append($newClassify);
  });

  var chartOption = getOption();
  var radarChart = echarts.init(document.getElementById("chartContainer"));
  var chartTimeId = null;
  radarChart.setOption(chartOption);
  window.addEventListener("resize", function () {
    clearTimeout(chartTimeId);
    chartTimeId = setTimeout(() => {
      chartOption = getOption();
      radarChart.setOption(chartOption);
      radarChart.resize();
    }, 200);
  });

  // 显示和统计总分\
  let classifyArray = classifyInfo;
  var checkDiseaseTotalScore = 0;
  classifyArray.forEach(function (item) {
    checkDiseaseTotalScore += item.value;
  });
  var scoreValueContainer = document.getElementsByClassName("score-value")[0];
  scoreValueContainer.innerHTML = checkDiseaseTotalScore;

  /**
   * 根据得分情况更改雷达图下方结果提示
   */

  /**
   * 模拟分数
   */
  // var classifyData = [
  //   {
  //     name: "沟通协调能力",
  //     value: 10,
  //   },
  //   {
  //     name: "护理临床思维",
  //     value: 40,
  //   },

  //   {
  //     name: "基础知识",
  //     value: 79,
  //   },
  //   {
  //     name: "护理技能",
  //     value: 40,
  //   },
  //   {
  //     name: "职业防护能力",
  //     value: 30,
  //   },
  // ];
  classifyData.forEach(function (item) {
    switch (item.name) {
      case "护理技能":
        if (item.value < 80) {
          let skillDom = $("<div></div>");
          skillDom.addClass("practice-advice-item");
          let skillString = `
        <div class="advice-detail-title">护理技能</div>
        <div class="advice-detail-content">
        还需要结合理论知识，线下技能训练、线上虚拟仿真实训等方式进行反复练习哦！
        </div>
        `;
          skillDom.html(skillString);
          skillDom.appendTo($(".practice-advice-detail"));
        }
        break;
      case "护理临床思维":
        if (item.value < 80) {
          let mindDom = $("<div></div>");
          mindDom.addClass("practice-advice-item");
          let mindString = `
        <div class="advice-detail-title">护理临床思维</div>
        <div class="advice-detail-content">
        还需巩固理论知识，结合线下护理查房、疑难病例讨论及线上实验等方式进行反复练习！
        </div>
        `;
          mindDom.html(mindString);
          mindDom.appendTo($(".practice-advice-detail"));
        }
        break;
      case "基础知识":
        if (item.value < 80) {
          let konwledgeDom = $("<div></div>");
          konwledgeDom.addClass("practice-advice-item");
          let konwledgeString = `
          <div class="advice-detail-title">基础知识</div>
          <div class="advice-detail-content">
          请再复习巩固下基础知识吧！
          </div>
        
          `;
          konwledgeDom.html(konwledgeString);
          konwledgeDom.appendTo($(".practice-advice-detail"));
        }
        break;
      case "沟通协调能力":
        if (item.value < 80) {
          let communicateDom = $("<div></div>");
          communicateDom.addClass("practice-advice-item");
          let communicateString = `
            <div class="advice-detail-title">沟通协调能力</div>
            <div class="advice-detail-content">
            还需要多学习沟通技巧和沟通的注意事项反复练习哦！
            </div>
          `;
          communicateDom.html(communicateString);
          communicateDom.appendTo($(".practice-advice-detail"));
        }

        break;
      case "职业防护能力":
        if (item.value < 80) {
          let preventDom = $("<div></div>");
          preventDom.addClass("practice-advice-item");
          let preventString = `
          <div class="advice-detail-title">职业防护能力</div>
          <div class="advice-detail-content">
          职业防护能力不足，可能导致院内交叉感染的风险，还需结合理论知识、线下技能训练、线上虚拟仿真实训等方式进行反复练习哦！
          </div>
          `;
          preventDom.html(preventString);
          preventDom.appendTo($(".practice-advice-detail"));
        }
        break;
    }
  });
};
createChart()