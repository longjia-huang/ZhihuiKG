(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Qadd1_13_atlas_P_", frames: [[620,544,239,79],[620,625,239,79],[620,463,239,79],[620,382,239,79],[0,482,618,85],[0,743,618,85],[0,569,618,85],[680,0,290,291],[0,656,618,85],[388,293,531,87],[0,395,618,85],[0,0,386,393],[388,0,290,291]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1298,738);


(lib.jixu = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_A = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_B = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_C = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_cw = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_D = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_DJ = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_E = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_ZJ = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_13_zq = function() {
	this.spriteSheet = ss["Qadd1_13_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Qzeng4_6_1_zz = function() {
	this.initialize(img.Qzeng4_6_1_zz);
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


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.Qzeng4_6_1_zz();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-7,-7,1298,738), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_zq();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145.5);

	this.instance_1 = new lib.Q_XZ_1_13_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145.5,290,291);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(223,201,209,0.008)").s().p("A9fEHIAAoNMA6/AAAIAAINg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-188.7,-26.3,377.6,52.7), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-190.4,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-190.4,-29,354.2,58.1), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.5,262.2);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_E();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412.2,56.7);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_D();
	this.instance.parent = this;
	this.instance.setTransform(0.8,0.8,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.8,0.8,412.2,56.7);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_C();
	this.instance.parent = this;
	this.instance.setTransform(0,3.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,3.2,412.2,56.7);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_B();
	this.instance.parent = this;
	this.instance.setTransform(2.4,2.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.4,2.4,412.2,56.7);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_13_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,412.2,56.7);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_6
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(244.7,-186.3,1,1,-0.7,0,0,10.2,28.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).to({rotation:0.4,x:247.2,y:-185.7,alpha:1},6).to({regY:28.4,rotation:0,x:246.2,y:-185.8},5).wait(87));

	// 图层_5
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(335.6,-125.2,1,1,-0.7,0,0,11.2,30.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({regY:30.3,rotation:0.4,x:336.9,y:-122.9,alpha:1},6).to({regY:30.4,rotation:0,x:336.4,y:-123.7},5).wait(84));

	// 图层_4
	this.instance_2 = new lib.元件4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(359.4,-62.4,1,1,-0.7,0,0,11.2,31.3);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({_off:false},0).to({rotation:0.4,y:-59.5,alpha:1},6).to({regY:31.4,rotation:0,y:-60.6},5).wait(81));

	// 图层_3
	this.instance_3 = new lib.元件5("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(346.1,0.8,1,1,-0.7,0,0,12.2,29.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({rotation:0.4,x:344.9,y:3.4,alpha:1},6).to({rotation:0,x:345.4,y:2.4},5).wait(77));

	// 图层_2
	this.instance_4 = new lib.元件6("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(271.8,64.8,1,1,-0.7,0,0,9.2,29.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({rotation:0.4,x:269.3,y:65.9,alpha:1},6).to({rotation:0,x:270.3,y:65.5},5).wait(73));

	// 图层_1
	this.instance_5 = new lib.元件7("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(235.1,-55.7,0.876,0.876,0,0,0,128.7,131);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regY:131.1,scaleX:1,scaleY:1,y:-55.6,alpha:1},6).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(122.4,-170.4,225.5,229.6);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		window.parent['audio115883'+'Object'].actionPlay();
	}
	this.frame_28 = function() {
		var _this = this;
		_this.stop();
		//多选题 
		var arr1 = [];
		
		createjs.Touch.enable(stage);
		var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 5;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0056 === undefined && win.VarNurseC17 === undefined) {
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
		var flagA = true;
		
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flagA) {
		
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
					flagA = false;
					arr1.sort(function (a, b) {
						return a - b;
					});
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (arr1.toString() == '1,2,3,4,5') {
						playSound('correct');
						_this.daan.gotoAndStop(0);
						win.VarNurseC17.set(3); //设置护士c8题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseC17.set(0); //设置护士c8题变量的得分
					}
		
		
					if (arr1.length == 0) {
		
						win.VarQuestion_0056.set(Array1.toString());
					} else {
						Array1.length = 0;
						for (var i = 1; i <= arr1.length; i++) {
		
							Array1.push(answerArr[arr1[i - 1]]);
						}
		
						//console.log(Array1.toString())
		
						win.VarQuestion_0056.set(Array1.join('、'));
					}
		
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(14).call(this.frame_28).wait(1));

	// 图层_5
	this.daan = new lib.元件10();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(976.6,611,0.67,0.67);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.daan}]},28).wait(1));

	// 图层_7
	this.btn_5 = new lib.元件9();
	this.btn_5.name = "btn_5";
	this.btn_5.parent = this;
	this.btn_5.setTransform(861.7,472);

	this.btn_4 = new lib.元件9();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(931.7,409.7);

	this.btn_3 = new lib.元件9();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(945.2,347.4);

	this.btn_2 = new lib.元件9();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(925.3,283.8);

	this.btn_1 = new lib.元件9();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(835.4,221.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.btn_5}]},28).wait(1));

	// 图层_6
	this.show5 = new lib.元件8();
	this.show5.name = "show5";
	this.show5.parent = this;
	this.show5.setTransform(859.6,472.3);

	this.show4 = new lib.元件8();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(932.2,409.9);

	this.show3 = new lib.元件8();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(946.4,347.1);

	this.show2 = new lib.元件8();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(926,284);

	this.show1 = new lib.元件8();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(835.7,221.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4},{t:this.show5}]},28).wait(1));

	// 图层_2
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(679.2,604.4,1,1,0,0,0,329,196.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29));

	// 图层_1
	this.instance_1 = new lib.元件12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,1298,738);


// stage content:
(lib.Qadd1_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(649,369,1,1,0,0,0,649,369);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(633,353,1298,738);
// library properties:
lib.properties = {
	id: '11D53868459B5E49814018BA7AA59188',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap2.png?1690438378381", id:"Bitmap2"},
		{src:"images/Qzeng4_6_1_zz.png?1690438378381", id:"Qzeng4_6_1_zz"},
		{src:"images/Qadd1_13_atlas_P_.png?1690438378361", id:"Qadd1_13_atlas_P_"},
		{src:"sounds/click.mp3?1690438378381", id:"click"},
		{src:"sounds/correct.mp3?1690438378381", id:"correct"},
		{src:"sounds/error.mp3?1690438378381", id:"error"}
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
an.compositions['11D53868459B5E49814018BA7AA59188'] = {
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