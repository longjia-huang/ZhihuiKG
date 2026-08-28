/*******************************************************************************
**
** Filename: SCOFunctions.js
**
** File Description: This file contains several JavaScript functions that are
**                   used by the Sample SCOs contained in the Sample Course.
**                   These functions encapsulate actions that are taken when the
**                   user navigates between SCOs, or exits the Lesson.
**
** Author: ADL Technical Team
**
** Contract Number:
** Company Name: CTC
**
** Design Issues:
**
** Implementation Issues:
** Known Problems:
** Side Effects:
**
** References: ADL SCORM
**
********************************************************************************
**
** Concurrent Technologies Corporation (CTC) grants you ("Licensee") a non-
** exclusive, royalty free, license to use, modify and redistribute this
** software in source and binary code form, provided that i) this copyright
** notice and license appear on all copies of the software; and ii) Licensee
** does not utilize the software in a manner which is disparaging to CTC.
**
** This software is provided "AS IS," without a warranty of any kind.  ALL
** EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY
** IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-
** INFRINGEMENT, ARE HEREBY EXCLUDED.  CTC AND ITS LICENSORS SHALL NOT BE LIABLE
** FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
** DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL CTC  OR ITS
** LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT,
** INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER
** CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF
** OR INABILITY TO USE SOFTWARE, EVEN IF CTC  HAS BEEN ADVISED OF THE
** POSSIBILITY OF SUCH DAMAGES.
**
*******************************************************************************/
var finishCalled = false;
var autoCommit = false;

function MySetValue( lmsVar, lmsVal ) {
  var titleMgr = getTitleMgrHandle();
  if( titleMgr ) titleMgr.setVariable(lmsVar,lmsVal,0)
  LMSSetValue( lmsVar, lmsVal )
}

function loadPage() {
  var startDate = readVariable( 'TrivantisSCORMTimer', 0 );
  if( startDate == 0 || !LMSIsInitialized() ) {
    var result = LMSInitialize();
    var status = new String( LMSGetValue( "cmi.core.lesson_status" ) );
    status = status.toLowerCase();
    if (status == "not attempted")
    {
        MySetValue( "cmi.core.lesson_status", "incomplete" );
        LMSCommit();
    }
    startTimer();
    return true;
  }
  else return false;
}

function startTimer() {
  var startDate = new Date().getTime();
  saveVariable('TrivantisSCORMTimer',startDate)
}

function computeTime() {
  var startDate = readVariable( 'TrivantisSCORMTimer', 0 )
  if ( startDate != 0 ) {
    var currentDate = new Date().getTime();
    var elapsedMills = currentDate - startDate;
    var formattedTime = convertTotalMills( elapsedMills );
  }
  else formattedTime = "00:00:00.0";
  MySetValue( "cmi.core.session_time", formattedTime );
}

function doBack() {
  MySetValue( "cmi.core.exit", "suspend" );
  computeTime();
  saveVariable( 'TrivantisEPS', 'T' );
  var result;
  result = LMSCommit();
  finishCalled = true;
  result = LMSFinish();
  saveVariable( 'TrivantisSCORMTimer', 0 );
}

function doContinue( status ) {
  MySetValue( "cmi.core.exit", "" );
  var mode = new String( LMSGetValue( "cmi.core.lesson_mode" ) );
  mode = mode.toLowerCase()
  if ( mode != "review"  &&  mode != "browse" ) MySetValue( "cmi.core.lesson_status", status );
  computeTime();
  saveVariable( 'TrivantisEPS', 'T' );
  var result;
  result = LMSCommit();
  finishCalled = true;
  result = LMSFinish();
  saveVariable( 'TrivantisSCORMTimer', 0 );
}

function doQuit(bForce){
  //MySetValue( "cmi.core.exit", "logout" );
  computeTime();
  saveVariable( 'TrivantisEPS', 'T' );
  var result;
  result = LMSCommit();
  finishCalled = true;
  result = LMSFinish();
  saveVariable( 'TrivantisSCORMTimer', 0 );
  if( bForce && window.myTop ) window.myTop.close()
}

function unloadPage(bForce, titleName) {
  var exitPageStatus = readVariable( 'TrivantisEPS', 'F' );
  if (exitPageStatus != 'T') {
    if( window.name.length > 0 && window.name.indexOf( 'Trivantis_' ) == -1 )
      trivScormQuit(bForce, titleName, false);
  }
  else if( finishCalled != true && autoCommit == true ) {
    computeTime();
    LMSCommit();
  }
  window.saveVariable && window.saveVariable('TrivantisEPS', 'F');
  
}

function convertTotalMills(ts) {
  var Sec  = 0;
  var Min  = 0;
  var Hour = 0;
  while( ts >= 3600000 ) {
    Hour += 1;
    ts -= 3600000;
  }
  while( ts >= 60000 ){
    Min += 1;
    ts -= 60000;
  }
  while ( ts >= 1000 ){
    Sec += 1;
    ts -= 1000;
  }
  if (Hour < 10) Hour = "0"+Hour;
  if (Min < 10) Min = "0"+Min;
  if (Sec < 10) Sec = "0"+Sec;
  var rtnVal = Hour+":"+Min+":"+Sec;
  return rtnVal;
}

function putSCORMInteractions(id,obj,tim,typ,crsp,wgt,srsp,res,lat,txt) {
  var nextInt = parseInt( LMSGetValue( 'cmi.interactions._count' ), 10 )
  var root    = 'cmi.interactions.' + nextInt
  if(id)   LMSSetValue( root + '.id', id )
  if(obj)  LMSSetValue( root + '.objectives.0.id', obj )
  if(tim)  LMSSetValue( root + '.time', tim )
  if(typ)  LMSSetValue( root + '.type', typ )
  if(crsp) LMSSetValue( root + '.correct_responses.0.pattern', crsp )
  LMSSetValue( root + '.weighting', wgt )
  if(srsp) LMSSetValue( root + '.student_response', srsp )
  if(res)  LMSSetValue( root + '.result', res )
  if(lat)  LMSSetValue( root + '.latency', lat )
  if(txt)  LMSSetValue( root + '.text', txt )
}
// zzl
if (window.parent.Variable) {
	console.log('---------- 子页面 ----------');
	function pushHistory() {
		var state = { title: "title",url: "#" };
		window.history.pushState(state, "title", "#");
	}

	setTimeout(function() {
		window.history.forward(1);
		pushHistory();
	}, 200)

	window.addEventListener("popstate", function(e) {
		pushHistory();
	}, false);
	var isResultPage = !!window.ObjResult;
	if (document.title.indexOf('测试结果') !== -1 || (isResultPage && getTitleMgrHandle().arTests.length === 1)) {
		setTimeout(function() {
			parent.postMessage('提交', '*');
		},500);
	}
	function getHtmlDocName() {
        var str = window.location.pathname;
        str = str.split('?')[0].split('/');
        str = str[str.length-1];
        return decodeURIComponent(str);
    }
	var htmlDocName = getHtmlDocName();
	if (htmlDocName.indexOf('.html') !== -1) {
        parent.postMessage({
        	type: 'location',
        	value: htmlDocName
        }, '*');
		console.log('当前页面名称：' + htmlDocName);
    }
} else {
	console.log('---------- 父页面 ----------');
	var win = window;
	while ((win.API_20140512 == null) && (win.parent != null) && (win.parent != win)) {
		win = win.parent;
	}
	if (win.API_20140512) {
		win.API_20140512.begin();
	} else {
		console.log('未找到平台API');
	}
	function set_Score(check) {
		var AICC_Score = new Variable( 'AICC_Score', '', 0, 0, 'scorm');
		var Vartest_Score = new Variable( 'Vartest_Score', '0', 0, 0, 'scorm');
		var titleMgr = getTitleMgrHandle();
		var s = [], progress = 0, topic = [];
		if ( titleMgr && titleMgr.arTests && titleMgr.arTests.length ) {
			var name, scoreAll = 0, all = 0, complete = 0, score;
			for (var i = 0; i < titleMgr.arTests.length; i++) {
				name = titleMgr.arTests[i].strLoadedName || '';
				Vartest_Score.set( titleMgr.GetTestScore( name ) );
				score = parseInt( Vartest_Score.getValue() );
				if (score < 0) { score = 0 }
				scoreAll += score;
				s.push(score);
				if (!check) {
					autoCommit = true;
					titleMgr.processTest( name );
				}
				
				// localStorage.setItem(i+'.试卷标记：'+name,'试卷成绩：'+score);
				for (var o = 0; o<titleMgr.arTests[i].arRTPages.length; o++) {
					for (var j = 0; j<titleMgr.arTests[i].arRTPages[o].arQues.length; j++) {
						topic.push(titleMgr.arTests[i].arRTPages[o].arQues[j]);
						all ++;
						if (titleMgr.arTests[i].arRTPages[o].arQues[j].strOurAns/* && titleMgr.arTests[i].arRTPages[o].arQues[j].strOurAns !== "~~~null~~~"*/) {
							complete ++;
						}
					}
				}
			}

			if (typeof window.Varprogress === 'object') {
				window.Varprogress.set( progress )
			}

			if (!check) {
				AICC_Score.set(parseInt(scoreAll/s.length));
				LMSCommit();

				if (all === 0) {
					console.log('没有考题');
					progress = 100;
				} else {
					progress = ((complete*10000/all)>>0)/100;
				}
				console.log('学习进度：'+progress+'%');
				if (win.API_20140512) {
					win.API_20140512.setProgress(progress);
					win.API_20140512.commit();
					console.log('学习进度发送成功');
				} else {
					console.log('未找到平台API');
				}
			}
		}
		return {
			score: s,
			topic: topic,
			progress: progress
		};
	}
	window.addEventListener("message", function(e) { 
		if (e.data === '提交') {
			set_Score();
      return
		}
    
    // 比赛平台提交
    if (typeof e.data === 'string') {
      try {
        var msg = JSON.parse(e.data);
        if (typeof msg === 'object' && msg.key === 'scorm_oss' && msg.funName === 'scorm_submit') {
          set_Score();
          return
        }
      } catch(e) {}
    }
	}, false); 
	window._isFinish = false;
	window.addEventListener('beforeunload', function () {
		window._isFinish = true;
		set_Score();
	});
	window.addEventListener('unload', function () {
		if (typeof window._isFinish === 'undefined' || !window._isFinish) {
			set_Score();
		}
	});
	
	window.downloadPDF = function(c_name, headline){
		c_name = c_name || ' ';
		headline = headline || '虚拟课程实验报告';

		var myData = set_Score(true);
		var topic = myData.topic, data = [], score = myData.score;
		for (var i = 0; i<topic.length; i++) {
			data.push({
				"type":"topic",
				"title": (i + 1) + "、" + (topic[i].text || ""),
				"img":[],
				"option":[],
				"myAnswer":"您的答案：" + ((topic[i].strOurAns && topic[i].strOurAns !== "~~~null~~~") ? topic[i].strOurAns : '未回答' ),
				"rightAnswer":(function(){
					var an = topic[i].arCorrAns || '';
					if (Object.prototype.toString.call(an)==='[object Array]') {
						an = an.concat([]);
						for (var j = 0; j<an.length; j++) {
							if (Object.prototype.toString.call(an[j])==='[object Array]') {
								an[j] = an[j].join('-');
							}
						}
						an = an.join(',');
						return an ? '参考答案：' + an : '';
					}
					return '';
				})()
			});
		}
		var pdf_data = {
			"version":"1.0",
			"header":{
				"headline": headline,
				"courseName": c_name,
				"time":(function(fmt) {
					var _this = new Date();
					var o = {
						"M+": _this.getMonth() + 1, //月份
						"d+": _this.getDate(), //日
						"h+": _this.getHours(), //小时
						"m+": _this.getMinutes(), //分
						"s+": _this.getSeconds(), //秒
						"q+": Math.floor((_this.getMonth() + 3) / 3), //季度
						"S": _this.getMilliseconds() //毫秒
					};
					if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (_this.getFullYear() + "").substr(4 - RegExp.$1.length));
					for (var k in o)
						if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
					return "时间：" + fmt;
				})('yyyy-MM-dd hh:mm:ss'),
				"progress":"进度：" + myData.progress + "%",
				"name": win.$user && win.$user.name ? win.$user.name : " ",
				"stuId":" ",
				"result":(function(score) {
					if (score.length) {
						return '成绩：' + score.join('分、') + '分'
					} else {
						return " "
					}
				})(score)
			},
			"data": data
		};
		console.log(pdf_data);
		if (win.API_20140512 && win.API_20140512.setPDFData) {
			win.API_20140512.setPDFData(pdf_data);
			win.API_20140512.commit();
			console.log('发送报告数据成功');
		} else {
			console.log('未找到平台API');
		}
	}
}
