/*
 * @Description: 
 * @version: 
 * @Author: liaokangmei
 * @Date: 2023-03-28 15:12:37
 * @LastEditors: tangchen 190854524@qq.com
 * @LastEditTime: 2023-07-05 10:19:56
 */
// 从scorm课件获取问题数据list
function getTopic() {
	try {
		var targetNode = document.getElementsByTagName('iframe')[0]
		// var titleMgr = parent.getTitleMgrHandle ? parent.getTitleMgrHandle() : window.getTitleMgrHandle();
		var titleMgr = null
		if (parent.getTitleMgrHandle) {
			titleMgr = parent.getTitleMgrHandle();
		}
		var topic = [], num = 0;
		if (titleMgr && titleMgr.arTests && titleMgr.arTests.length) {
			var name;
			for (var i = 0; i < titleMgr.arTests.length; i++) {
				var arr = [];
				name = titleMgr.arTests[i].strLoadedName || '';
				titleMgr.GetTestScore(name)

				for (var o = 0; o < titleMgr.arTests[i].arRTPages.length; o++) {
					for (var j = 0; j < titleMgr.arTests[i].arRTPages[o].arQues.length; j++) {
						var t = titleMgr.arTests[i].arRTPages[o].arQues[j];
						arr.push({
							id: ++num,
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
				topic.push(arr);
			}
		}
		var all = [];
		for (var n = 0; n < topic.length; n++) {
			all = all.concat(topic[n])
		}
		return {
			topic: topic,
			all: all
		};
	} catch (e) {
		console.dir(e, '--出错了')
		return {
			topic: [],
			all: []
		};
	}
}
