(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q2_15_1_atlas_P_", frames: [[624,554,239,79],[624,635,239,79],[383,554,239,79],[383,635,239,79],[388,380,468,85],[388,293,468,85],[0,467,468,85],[388,0,290,291],[470,467,468,85],[0,554,381,87],[0,0,386,393],[680,0,290,291]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1299,740);


(lib.jixu = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_A = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_B = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_C = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_cw = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_D = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_DJ = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_ZJ = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q2_15_ZQ = function() {
	this.spriteSheet = ss["Q2_15_1_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12houxj_zz = function() {
	this.initialize(img.Q4_5_12houxj_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-127,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(-127,-29,254.1,58.1), null);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.5,262.2);


(lib.元件25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.2,56.7);


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.2,56.7);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.2,56.7);


(lib.元件22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_15_D();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,312.2,56.7);


(lib.元件20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(254,254,254,0.008)").s().p("AzjEIIAAoPMAnHAAAIAAIPg");
	this.shape.setTransform(92.8,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件20, new cjs.Rectangle(-32.3,-26.4,250.4,52.8), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q2_15_ZQ();
	this.instance.parent = this;
	this.instance.setTransform(-83,-229.1);

	this.instance_1 = new lib.Q2_15_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-81.8,-229);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-229.1,290,291);


(lib.元件21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件25("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(180.3,27.9,1,1,-1,0,0,10.6,28.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:10.7,rotation:0.4,x:183.3,y:29.3,alpha:1},6).to({regX:10.6,rotation:0,x:182.2,y:28.8},5).wait(75));

	// 图层_3
	this.instance_1 = new lib.元件24("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(246.2,98.7,1,1,-1,0,0,10.7,28.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({rotation:0.4,x:247.2,y:101.8,alpha:1},6).to({rotation:0,x:246.8,y:100.8},5).wait(72));

	// 图层_4
	this.instance_2 = new lib.元件23("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(247.5,174,1,1,-1,0,0,10.7,27.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({rotation:0.4,x:246.6,y:177.1,alpha:1},6).to({rotation:0,x:246.8,y:176.1},5).wait(68));

	// 图层_5
	this.instance_3 = new lib.元件22("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(183.9,249.4,1,1,-1,0,0,10.3,28.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({rotation:0.4,x:181.2,y:250.9,alpha:1},6).to({rotation:0,x:181.9,y:250.4},5).wait(64));

	// 图层_1
	this.instance_4 = new lib.元件26("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(128.7,139.4,0.876,0.876,0,0,0,128.7,131.1);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({scaleX:1,scaleY:1,alpha:1},6).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(16,24.6,225.5,229.6);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		window.parent['audio11852'+'Object'].actionPlay();
	}
	this.frame_25 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['anniu_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0019 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D'
		}
		
		var curNum = 0;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("anniu_") >= 0) {
		
					curNum = Number(e.target.name.substring(6));
					//console.log(curNum)
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
		
		
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (curNum == 4) {
						playSound('correct');
						_this.daan.gotoAndStop(0);
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
					}
					for (var i = 1; i <= btnNum; i++) {
						_this['anniu_' + i].visible = false;
					}
		
					if (curNum == 0) {
		
						win.VarQuestion_0019.set(Array1.toString());
					} else {
						win.VarQuestion_0019.set(answerArr[curNum]);
					}
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(15).call(this.frame_25).wait(1));

	// 图层_7
	this.daan = new lib.元件19();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(945.2,663.8,0.67,0.67);
	this.daan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.daan).wait(25).to({_off:false},0).wait(1));

	// 图层_6
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu}]},25).wait(1));

	// 图层_8
	this.anniu_4 = new lib.元件20();
	this.anniu_4.name = "anniu_4";
	this.anniu_4.parent = this;
	this.anniu_4.setTransform(689.9,471.4);

	this.anniu_3 = new lib.元件20();
	this.anniu_3.name = "anniu_3";
	this.anniu_3.parent = this;
	this.anniu_3.setTransform(752,397.9);

	this.anniu_2 = new lib.元件20();
	this.anniu_2.name = "anniu_2";
	this.anniu_2.parent = this;
	this.anniu_2.setTransform(752,319.4);

	this.anniu_1 = new lib.元件20();
	this.anniu_1.name = "anniu_1";
	this.anniu_1.parent = this;
	this.anniu_1.setTransform(690.9,247.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.anniu_1},{t:this.anniu_2},{t:this.anniu_3},{t:this.anniu_4}]},25).wait(1));

	// 图层_5
	this.show4 = new lib.元件27();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(781.9,470.8);

	this.show3 = new lib.元件27();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(846.4,398.2);

	this.show2 = new lib.元件27();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(846.4,321.1);

	this.show1 = new lib.元件27();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(781.6,248.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},25).wait(1));

	// 图层_2
	this.instance = new lib.元件21("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(698.8,360,1,1,0,0,0,274.1,139.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

	// 图层_9
	this.instance_1 = new lib.Q4_5_12houxj_zz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(26));

	// 图层_3
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-7.8,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,-7,1299,740);


// stage content:
(lib.Q2_15_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(358.3,177.6,1,1,0,0,0,358.3,177.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(632.2,353,1299,740);
// library properties:
lib.properties = {
	id: 'C070D38B342F3042B82CC9C1B9B6BF0E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap2.png?1686556348880", id:"Bitmap2"},
		{src:"images/Q4_5_12houxj_zz.png?1686556348880", id:"Q4_5_12houxj_zz"},
		{src:"images/Q2_15_1_atlas_P_.png?1686556348842", id:"Q2_15_1_atlas_P_"},
		{src:"sounds/error.mp3?1686556348880", id:"error"},
		{src:"sounds/correct.mp3?1686556348880", id:"correct"},
		{src:"sounds/click.mp3?1686556348880", id:"click"}
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
an.compositions['C070D38B342F3042B82CC9C1B9B6BF0E'] = {
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