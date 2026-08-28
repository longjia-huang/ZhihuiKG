(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Qadd1_9_atlas_P_", frames: [[323,554,239,79],[323,635,239,79],[564,554,239,79],[564,635,239,79],[388,0,290,291],[680,0,290,291],[388,380,408,85],[0,467,408,85],[410,467,408,85],[388,293,408,85],[0,554,321,87],[0,0,386,393]]}
];


// symbols:



(lib.jixu = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12_cw = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12_zq = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12_zz = function() {
	this.initialize(img.Q4_5_12_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1925,1086);


(lib.Q_XZ_1_9_A = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_9_B = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_9_C = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_9_D = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_9_DJ = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_9_ZJ = function() {
	this.spriteSheet = ss["Qadd1_9_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.左侧考题背景 = function() {
	this.initialize(img.左侧考题背景);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);// helper functions:

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


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q4_5_12_zq();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145.5);

	this.instance_1 = new lib.Q4_5_12_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145.5,290,291);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.Q4_5_12_zz();
	this.instance.parent = this;
	this.instance.setTransform(-0.1,0.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(-0.1,0.4,1283.9,724.4), null);


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


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.5,262.2);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.2,56.7);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.2,56.7);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.2,56.7);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_D();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.2,56.7);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AwXD7IAAn1MAgvAAAIAAH1g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件22, new cjs.Rectangle(-104.8,-25.1,209.7,50.2), null);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_9_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-108,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件21, new cjs.Rectangle(-108,-29,214.1,58.1), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件38("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(186.9,15.5,1,1,-1.2,0,0,9.8,29.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({regY:29.4,rotation:0.9,x:190.8,y:18,alpha:1},6).to({rotation:0,x:189.2,y:16.9},5).wait(81));

	// 图层_3
	this.instance_1 = new lib.元件37("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(253,90.1,1,1,-1.2,0,0,10.8,29.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({rotation:0.9,x:253.9,y:95.1,alpha:1},6).to({rotation:0,x:253.6,y:92.9},5).wait(79));

	// 图层_4
	this.instance_2 = new lib.元件36("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(253.7,170.3,1,1,-1.2,0,0,10.8,29.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:0.9,x:251.6,y:175.2,alpha:1},6).to({rotation:0,x:252.6,y:173},5).wait(76));

	// 图层_5
	this.instance_3 = new lib.元件35("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(193.2,245.6,1,1,-1.2,0,0,9.8,30.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({rotation:0.9,x:188.3,y:248.1,alpha:1},6).to({rotation:0,x:190.5,y:247},5).wait(73));

	// 图层_1
	this.instance_4 = new lib.元件39("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(136.1,131.1,0.836,0.836,0,0,0,128.7,131);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regY:131.1,scaleX:1,scaleY:1,alpha:1},6).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.4,21.5,215.4,219.3);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_3
	this.instance_1 = new lib.左侧考题背景();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(-0.1,0,1283.9,724.8), null);


// stage content:
(lib.Qadd1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_12 = function() {
		window.parent['audio114857'+'Object'].actionPlay();
	}
	this.frame_23 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		var arr1 = [];
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0051 === undefined && win.VarNurseB8 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D'
		}
		var flag = true;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flag) {
		
		
					var curNum = Number(e.target.name.substring(4));
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
					_this.daan.visible = true;
					_this.jixu.visible = true;
					arr1.sort(function (a, b) {
						return a - b;
					});
					if (arr1.toString() == '1,2,3') {
						playSound('correct');
						_this.daan.gotoAndStop(0);
						win.VarNurseB8.set(3); //设置护士b8题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseB8.set(0); //设置护士b8题变量的得分
					}
		
		
					if (arr1.length == 0) {
		
						win.VarQuestion_0051.set(Array1.toString());
					} else {
						Array1.length = 0;
						for (var i = 1; i <= arr1.length; i++) {
		
							Array1.push(answerArr[arr1[i - 1]]);
						}
		
						//console.log(Array1.toString())
		
						win.VarQuestion_0051.set(Array1.join('、'));
					}
		
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(12).call(this.frame_12).wait(11).call(this.frame_23).wait(1));

	// 图层_2
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(977.3,610.3,0.667,0.667);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.daan}]},23).wait(1));

	// 图层_1
	this.btn_4 = new lib.元件22();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(767,476.2);

	this.btn_3 = new lib.元件22();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(827.5,404.6);

	this.btn_2 = new lib.元件22();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(827.5,323);

	this.btn_1 = new lib.元件22();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(764.9,248.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4}]},23).wait(1));

	// 图层_13
	this.show4 = new lib.元件21();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(768,476.7);

	this.show3 = new lib.元件21();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(829,403.7);

	this.show2 = new lib.元件21();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(830.7,323.8);

	this.show1 = new lib.元件21();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(765.7,248.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},23).wait(1));

	// 图层_12
	this.instance = new lib.元件34("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(557.3,363.2,1,1,0,0,0,136.1,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	// 图层_4
	this.instance_1 = new lib.元件20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,434.5,1,1,0,0,0,760.3,434.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639.9,360,1283.9,724.8);
// library properties:
lib.properties = {
	id: 'A7E7C5D4EEB4F9419B97DBF0F5DF5257',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q4_5_12_zz.png?1686304043169", id:"Q4_5_12_zz"},
		{src:"images/左侧考题背景_.jpg?1686304043169", id:"左侧考题背景"},
		{src:"images/Qadd1_9_atlas_P_.png?1686304043147", id:"Qadd1_9_atlas_P_"},
		{src:"sounds/click.mp3?1686304043169", id:"click"},
		{src:"sounds/correct.mp3?1686304043169", id:"correct"},
		{src:"sounds/error.mp3?1686304043169", id:"error"}
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
an.compositions['A7E7C5D4EEB4F9419B97DBF0F5DF5257'] = {
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