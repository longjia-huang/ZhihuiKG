(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_5_11_atlas_P_", frames: [[490,467,401,87],[482,556,239,79],[0,554,239,79],[723,556,239,79],[241,554,239,79],[388,293,488,85],[0,467,488,85],[388,380,488,85],[680,0,290,291],[0,0,386,393],[388,0,290,291]]}
];


// symbols:



(lib.A4_4_3xjt_DJ = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_A = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_B = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_C = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_cw = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_ZJ = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_11_zq = function() {
	this.spriteSheet = ss["Q4_5_11_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12_zz = function() {
	this.initialize(img.Q4_5_12_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1925,1086);


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


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q4_5_11_zq();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145.5);

	this.instance_1 = new lib.Q4_5_11_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145.5,290,291);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("A05EjIAApFMApzAAAIAAJFg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件17, new cjs.Rectangle(-133.8,-29,267.7,58.2), null);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A4_4_3xjt_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-133.7,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件16, new cjs.Rectangle(-133.7,-29,267.5,58.1), null);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_11_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.5,262.2);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_11_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_11_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_11_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


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


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(258.1,46.8,1,1,-1.2,0,0,12.6,28.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({regX:12.5,rotation:0.4,x:260.5,y:49.9,alpha:1},5).to({rotation:0,x:259.9,y:49},5).wait(91));

	// 图层_3
	this.instance_1 = new lib.元件12("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(289,133.2,1,1,-1.2,0,0,12.6,28.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regX:12.5,regY:28.4,rotation:0.4,x:288.9,y:137.3,alpha:1},5).to({rotation:0,y:136.2},5).wait(88));

	// 图层_2
	this.instance_2 = new lib.元件14("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.7,218,1,1,-1.2,0,0,13.5,30.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:13.6,rotation:0.4,x:257.3,y:221.1,alpha:1},5).to({regX:13.5,regY:30.3,rotation:0,x:257.9,y:220.2},5).wait(84));

	// 图层_1
	this.instance_3 = new lib.元件15("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(162.7,131.1,0.946,0.946,0,0,0,128.7,131.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1,scaleY:1,alpha:1},5).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(41,7.2,243.5,247.9);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio22369'+'Object'].actionPlay();
	}
	this.frame_20 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		var arr1 = [];
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 3;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0037 === undefined && win.VarNurseB4 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D'
		}
		var flag = true;
		var curNum = 0;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flag) {
		
		
					curNum = Number(e.target.name.substring(4));
					//console.log(curNum)
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
					flag = false;
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (curNum == 2) {
						playSound('correct');
						_this.daan.gotoAndStop(0);
						win.VarNurseB4.set(3); //设置护士B4题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseB4.set(0); //设置护士B4题变量的得分
					}
		
					win.VarQuestion_0037.set(answerArr[curNum]);
		
					window.parent['audio70696' + 'Object'].actionStop();
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(19).call(this.frame_20).wait(1));

	// 图层_11
	this.btn_3 = new lib.元件17();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(738.4,500.3);

	this.btn_2 = new lib.元件17();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(769.5,417);

	this.btn_1 = new lib.元件17();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(741.5,329.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3}]},20).wait(1));

	// 图层_10
	this.show3 = new lib.元件16();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(739.1,500.7);

	this.show2 = new lib.元件16();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(770.9,418);

	this.show1 = new lib.元件16();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(742.7,331.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3}]},20).wait(1));

	// 图层_9
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu}]},20).wait(1));

	// 图层_8
	this.daan = new lib.元件18();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(994.6,613.5,0.67,0.67);
	this.daan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.daan).wait(20).to({_off:false},0).wait(1));

	// 图层_3
	this.instance = new lib.元件11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(466.1,413.3,1,1,0,0,0,162.8,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21));

	// 图层_6
	this.instance_1 = new lib.元件20();
	this.instance_1.parent = this;
	this.instance_1.setTransform(760.3,434.5,1,1,0,0,0,760.3,434.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,1283.9,724.8);


// stage content:
(lib.Q4_5_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639.9,360,1283.9,724.8);
// library properties:
lib.properties = {
	id: '0C7D63E57E870445ABA2B248EC8283E4',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q4_5_12_zz.png?1686303708586", id:"Q4_5_12_zz"},
		{src:"images/左侧考题背景_.jpg?1686303708586", id:"左侧考题背景"},
		{src:"images/Q4_5_11_atlas_P_.png?1686303708568", id:"Q4_5_11_atlas_P_"},
		{src:"sounds/click.mp3?1686303708586", id:"click"},
		{src:"sounds/correct.mp3?1686303708586", id:"correct"},
		{src:"sounds/error.mp3?1686303708586", id:"error"}
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
an.compositions['0C7D63E57E870445ABA2B248EC8283E4'] = {
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