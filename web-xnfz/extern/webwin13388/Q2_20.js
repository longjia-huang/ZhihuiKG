(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q2_20_atlas_P_", frames: [[0,555,747,158],[0,395,747,158],[0,715,747,158],[0,0,404,393]]},
		{name:"Q2_20_atlas_P_2", frames: [[533,293,239,79],[292,162,239,79],[292,243,239,79],[292,324,239,79],[0,162,290,291],[0,0,622,160],[624,0,290,291]]}
];


// symbols:



(lib.jixu = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q2_17_4_b = function() {
	this.initialize(img.Q2_17_4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q2_20_A = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_B = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_C = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_cw = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_DJ = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_ZJ = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q2_20_ZQ = function() {
	this.spriteSheet = ss["Q2_20_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.继续 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.jixu();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.jixu_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.确定 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ok();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.ok_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q2_20_ZQ();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145.5);

	this.instance_1 = new lib.Q2_20_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145.5,290,291);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_20_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-311,-80);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-311,-80,622,160), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("A8jH9QjHAAgBjIIAAppQABjIDHAAMA5HAAAQDHAAABDIIAAJpQgBDIjHAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-202.7,-50.9,405.5,101.8), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_20_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,269.5,262.2);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_20_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498.3,105.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_20_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498.3,105.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_20_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,498.3,105.4);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(435,94.8,1,1,7.9,0,0,249.2,52.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:249.1,regY:52.7,rotation:-0.7,x:421.2,y:49.2,alpha:1},8).to({rotation:0,x:422.6,y:52.7},4).wait(56));

	// 图层_3
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(496.9,224,1,1,7.9,0,0,249.2,52.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({regX:249.1,rotation:-0.7,x:501.8,y:167.6,alpha:1},8).to({regY:52.7,rotation:0,y:172.1},4).wait(51));

	// 图层_4
	this.instance_2 = new lib.元件2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(412.1,331.2,1,1,7.9,0,0,249.2,52.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).to({regX:249.1,regY:52.8,rotation:-0.7,x:434.1,y:286.5,alpha:1},8).to({regY:52.7,rotation:0,x:432.6,y:290.1},4).wait(45));

	// 图层_1
	this.instance_3 = new lib.元件5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(134.7,171,0.732,0.732,0,0,0,134.7,131.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.03,scaleY:1.03,alpha:1},8).to({scaleX:1,scaleY:1},4).wait(65));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(36.1,75,197.4,192);


(lib.ZONG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent.document.getElementsByTagName('iframe')[0].contentWindow.audio13362.actionPlay();
	}
	this.frame_32 = function() {
		var _this = this;
		_this.stop();
		//多选题 
		var arr1 = [];
		
		createjs.Touch.enable(stage);
		var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 3
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0013 === undefined) {
			win = win.parent;
		}
		
		
		var answerArr = {
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D',
			5: 'E',
			6: 'F',
			7: 'G'
		}
		/*
		var answerArr = {
			1: '风险识别',
			2: '风险分析',
			3: '风险评价',
			4: '风险评估',
			5: '提出管理建议',
			6: '风险评估',
			7: '提出管理建议'
		}*/
		
		var flag = true;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flag) {
		
					var curNum = Number(e.target.name.substring(4))
					//console.log(curNum)
		
		
					var index = arr1.indexOf(curNum);
					if (index == -1) {
						arr1.push(curNum);
						_this['show' + curNum].visible = true;
					} else {
						arr1.splice(index, 1);
						_this['show' + curNum].visible = false;
					}
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
					flag = false;
					arr1.sort(function (a, b) {
						return a - b;
					});
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (arr1.toString() == '1,2,3') {
						playSound('correct');
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
					}
		
		
					if (arr1.length == 0) {
		
						win.VarQuestion_0013.set(Array1.toString());
					} else {
						Array1.length = 0;
						for (var i = 1; i <= arr1.length; i++) {
		
							Array1.push(answerArr[arr1[i - 1]]);
						}
					}
		
					//console.log(Array1.toString())
		
					win.VarQuestion_0013.set(Array1.join('、'));
		
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
		
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(31).call(this.frame_32).wait(1));

	// 图层_5
	this.daan = new lib.元件24();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(284.9,349.8,0.67,0.67);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1170.4,672.9,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1170.4,672.9,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.btn_3 = new lib.元件6();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(934,512.7);

	this.btn_2 = new lib.元件6();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(1001.3,392.2);

	this.btn_1 = new lib.元件6();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(923,274.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.queding},{t:this.jixu},{t:this.daan}]},32).wait(1));

	// 图层_6
	this.show3 = new lib.元件7();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(932.2,512.1,0.667,0.667);

	this.show2 = new lib.元件7();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(1001.5,394.7,0.667,0.667);

	this.show1 = new lib.元件7();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(921.9,274.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3}]},32).wait(1));

	// 图层_3
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(832.3,393.6,1,1,0,0,0,375.4,171.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(33));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C3D9B1","#88B354","#C9E5A8"],[0,0.463,1],-2.1,-0.2,2.1,-0.2).s().p("AgQAqIgOgwIAPgVIAQAhIADg3IAbADIgLBaQgMAGgIAAQgKAAgGgIg");
	this.shape.setTransform(442.1,456,0.794,0.794);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(33));

	// 图层_7
	this.instance_1 = new lib.Q2_17_4_b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Q2_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ZONG();
	this.instance.parent = this;
	this.instance.setTransform(472.4,205.5,1,1,0,0,0,472.4,205.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: 'F5AEB29047B3F14A9CB2E4CFB0ED9674',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q2_17_4_b.jpg?1667808751853", id:"Q2_17_4_b"},
		{src:"images/Q2_20_atlas_P_.png?1667808751830", id:"Q2_20_atlas_P_"},
		{src:"images/Q2_20_atlas_P_2.png?1667808751830", id:"Q2_20_atlas_P_2"},
		{src:"sounds/click.mp3?1667808751853", id:"click"},
		{src:"sounds/correct.mp3?1667808751853", id:"correct"},
		{src:"sounds/error.mp3?1667808751853", id:"error"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['F5AEB29047B3F14A9CB2E4CFB0ED9674'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;