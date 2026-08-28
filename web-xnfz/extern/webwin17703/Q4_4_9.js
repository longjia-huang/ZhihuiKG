(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_4_9_atlas_P_", frames: [[0,383,239,79],[401,81,239,79],[241,383,239,79],[401,0,239,79],[0,0,399,381]]}
];


// symbols:



(lib.A4_4_3Jpg_other0215 = function() {
	this.initialize(img.A4_4_3Jpg_other0215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jixu = function() {
	this.spriteSheet = ss["Q4_4_9_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_4_9_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_4_9_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_4_9_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_9_bg = function() {
	this.initialize(img.Q4_4_9_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1710,381);


(lib.Q4_4_9_biaoti = function() {
	this.initialize(img.Q4_4_9_biaoti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1417,138);


(lib.Q4_4_9_cw = function() {
	this.initialize(img.Q4_4_9_cw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1039,321);


(lib.Q4_4_9_dj_ = function() {
	this.spriteSheet = ss["Q4_4_9_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_9_zq = function() {
	this.initialize(img.Q4_4_9_zq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1039,321);


(lib.Q4_4_9_zz = function() {
	this.initialize(img.Q4_4_9_zz);
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


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q4_4_9_zq();
	this.instance.parent = this;
	this.instance.setTransform(-519.5,-160.5);

	this.instance_1 = new lib.Q4_4_9_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-519.5,-160.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.5,-160.5,1039,321);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("Ax2UBQhSAAg6k3Qg6k2AAm4IAAm3QAAm4A6k2QAKg2ALgrIEuAAIAAjWIc7AAIAAD2IF6AAIANBBQA6E2AAG4IAAG3QAAG4g6E2Qg6E3hSAAg");
	this.shape.setTransform(-1.6,103.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.6,-24.2,268.2,256.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_9_dj_();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,-190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-199.5,-190.5,399,381), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_9_biaoti();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,945.2,92.1);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2iWcMAAAgs3MAtFAAAMAAAAs3g");
	var mask_graphics_1 = new cjs.Graphics().p("A2iWcMAAAgs3MAtEAAAMAAAAs3g");
	var mask_graphics_2 = new cjs.Graphics().p("A2iWcMAAAgs3MAtFAAAMAAAAs3g");
	var mask_graphics_3 = new cjs.Graphics().p("EAtGAWcMAAAgs3MAtFAAAMAAAAs3g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:128,y:122.3}).wait(1).to({graphics:mask_graphics_1,x:417.8,y:122.3}).wait(1).to({graphics:mask_graphics_2,x:716.4,y:122.3}).wait(1).to({graphics:mask_graphics_3,x:577.1,y:122.3}).wait(1));

	// 图层_1
	this.instance = new lib.Q4_4_9_bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,272.3,254.1);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_9_zz();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1280.7,720.4), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件3("single",3);
	this.instance.parent = this;
	this.instance.setTransform(570.3,138.3,1,1,0,0,0,570.3,127);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(16).to({_off:false},0).to({y:124.5,alpha:1},9).to({y:127},5).wait(68));

	// 图层_3
	this.instance_1 = new lib.元件3("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(570.3,138.3,1,1,0,0,0,570.3,127);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({y:124.5,alpha:1},9).to({y:127},5).wait(74));

	// 图层_2
	this.instance_2 = new lib.元件3("single",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(570.3,138.3,1,1,0,0,0,570.3,127);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:124.5,alpha:1},9).to({y:127},5).wait(79));

	// 图层_1
	this.instance_3 = new lib.元件3("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(570.3,138.3,1,1,0,0,0,570.3,127);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:124.5,alpha:1},9).to({y:127},5).wait(84));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,11.3,272.3,254.1);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio17687' + 'Object'].actionPlay();
	}
	this.frame_49 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
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
		while (win !== win.parent && win.VarQuestion_0025 === undefined && win.VarNurseA5 === undefined) {
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
				if (e.target.name.indexOf("btn_") >= 0) {
		
					curNum = Number(e.target.name.substring(4));
					//console.log(curNum)
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
		
		
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (curNum == 3) {
						playSound('correct');
						_this.daan.gotoAndStop(0);
						win.VarNurseA5.set(2); //设置护士A 5题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseA5.set(0); //设置护士A 5题变量的得分
					}
					for (var i = 1; i <= btnNum; i++) {
						_this['btn_' + i].visible = false;
					}
		
					if (curNum == 0) {
		
						win.VarQuestion_0025.set(Array1.toString());
					} else {
						win.VarQuestion_0025.set(answerArr[curNum]);
					}
					window.parent['audio17687' + 'Object'].actionStop();
					window.parent['audio70649' + 'Object'].actionPlay();
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(48).call(this.frame_49).wait(1));

	// 图层_7
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(639.3,612.4,0.667,0.667);
	this.daan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.daan).wait(49).to({_off:false},0).wait(1));

	// 图层_8
	this.btn_4 = new lib.元件8();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(1084.8,303.6);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_3 = new lib.元件8();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(793.7,303.6);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_2 = new lib.元件8();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(493,303.6);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_1 = new lib.元件8();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(210,303.6);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件8(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4}]},49).wait(1));

	// 图层_9
	this.show1 = new lib.元件7();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(207.9,408.3,0.667,0.667,0,0,0,0.1,0.1);

	this.show2 = new lib.元件7();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(491,408.3,0.667,0.667,0,0,0,0.1,0.1);

	this.show4 = new lib.元件7();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(1081.5,408.6,0.667,0.667,0,0,0,0.1,0.1);

	this.show3 = new lib.元件7();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(791.9,408.5,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show3},{t:this.show4},{t:this.show2},{t:this.show1}]},49).wait(1));

	// 图层_3
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(643.1,136.8,1,1,0,0,0,472.6,46);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:157.7,alpha:1},9).to({y:156.1},6).wait(35));

	// 图层_2
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(645.1,408.3,1,1,0,0,0,570.3,127);

	this.instance_2 = new lib.元件3("single",3);
	this.instance_2.parent = this;
	this.instance_2.setTransform(645.1,408.3,1,1,0,0,0,570.3,127);

	this.instance_3 = new lib.元件3("single",2);
	this.instance_3.parent = this;
	this.instance_3.setTransform(645.1,408.3,1,1,0,0,0,570.3,127);

	this.instance_4 = new lib.元件3("single",1);
	this.instance_4.parent = this;
	this.instance_4.setTransform(645.1,408.3,1,1,0,0,0,570.3,127);

	this.instance_5 = new lib.元件3("single",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(645.1,408.3,1,1,0,0,0,570.3,127);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},16).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},33).wait(1));

	// 图层_5
	this.instance_6 = new lib.元件1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({alpha:1},9).wait(41));

	// 图层_1
	this.instance_7 = new lib.A4_4_3Jpg_other0215();
	this.instance_7.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(50));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


// stage content:
(lib.Q4_4_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(457.5,278.6,1,1,0,0,0,457.5,278.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.7,720.4);
// library properties:
lib.properties = {
	id: '0EA121AAD4D76943B446F0F81FF6197B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_3Jpg_other0215.jpg?1686709759735", id:"A4_4_3Jpg_other0215"},
		{src:"images/Q4_4_9_bg.png?1686709759735", id:"Q4_4_9_bg"},
		{src:"images/Q4_4_9_biaoti.png?1686709759735", id:"Q4_4_9_biaoti"},
		{src:"images/Q4_4_9_cw.png?1686709759735", id:"Q4_4_9_cw"},
		{src:"images/Q4_4_9_zq.png?1686709759735", id:"Q4_4_9_zq"},
		{src:"images/Q4_4_9_zz.png?1686709759735", id:"Q4_4_9_zz"},
		{src:"images/Q4_4_9_atlas_P_.png?1686709759710", id:"Q4_4_9_atlas_P_"},
		{src:"sounds/click.mp3?1686709759735", id:"click"},
		{src:"sounds/correct.mp3?1686709759735", id:"correct"},
		{src:"sounds/error.mp3?1686709759735", id:"error"}
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
an.compositions['0EA121AAD4D76943B446F0F81FF6197B'] = {
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