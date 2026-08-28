(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q3_3_atlas_P_", frames: [[0,0,590,752]]},
		{name:"Q3_3_atlas_P_2", frames: [[0,757,979,89],[0,848,979,89],[585,456,290,291],[0,0,583,755],[585,0,352,454]]},
		{name:"Q3_3_atlas_P_3", frames: [[241,330,11,21],[292,562,57,57],[0,0,290,291],[241,293,37,35],[292,0,57,560],[292,621,57,30],[0,293,239,79],[0,374,239,79],[0,455,71,170],[73,455,71,170],[146,455,71,170],[219,455,71,170]]}
];


// symbols:



(lib.标题png复制 = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.标题2 = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.A = function() {
	this.initialize(img.A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.形状623拷贝 = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.dianji_xs = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q2_2_cw = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q2_2_zq = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q3_3_BG = function() {
	this.initialize(img.Q3_3_BG);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1427,938);


(lib.Q3_3_gongzuozhunbei = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q3_3_gouxuan = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q3_3_wuneirongTIS = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q3_3_zqxs = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q3_3_ZZ = function() {
	this.initialize(img.Q3_3_ZZ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1079);


(lib.Q3_3jiexi_zz = function() {
	this.initialize(img.Q3_3jiexi_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1078);


(lib.Q4_4_6JIANT = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.shipinjiexi_bg = function() {
	this.initialize(img.shipinjiexi_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1335,870);


(lib.yiliaojie = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie_dj = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.youce_dj = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.youce_jiexi = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.youce_tijiao = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.youce_xiayibu = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_3"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.护理问题右边 = function() {
	this.spriteSheet = ss["Q3_3_atlas_P_2"];
	this.gotoAndStop(4);
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


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.yiliaojie();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.yiliaojie_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.元件43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.youce_jiexi();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-85);

	this.instance_1 = new lib.youce_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-34.8,-83.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-85,71,170);


(lib.元件42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.dianji_xs();
	this.instance.parent = this;
	this.instance.setTransform(-19,-19,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件42, new cjs.Rectangle(-19,-19,38,38), null);


(lib.元件41 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyZEOIAAobMAkzAAAIAAIbg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件41, new cjs.Rectangle(-117.7,-27,235.6,54.1), null);


(lib.元件40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_3_gouxuan();
	this.instance.parent = this;
	this.instance.setTransform(-12.3,-11.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件40, new cjs.Rectangle(-12.3,-11.6,24.7,23.4), null);


(lib.元件39 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_6JIANT();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件39, new cjs.Rectangle(0,0,38,20), null);


(lib.元件37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.形状623拷贝();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件37, new cjs.Rectangle(0,0,7.4,14), null);


(lib.元件34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A9xECIAAoDMA7jAAAIAAIDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件34, new cjs.Rectangle(-190.6,-25.8,381.3,51.7), null);


(lib.元件23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_3_BG();
	this.instance.parent = this;
	this.instance.setTransform(132.4,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(132.4,0,951.8,625.7);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape.setTransform(27.1,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_1.setTransform(27.3,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_2.setTransform(27.4,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_3.setTransform(27.6,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]},1).wait(6));

	// 图层_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape_4.setTransform(27.1,31);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_5.setTransform(27.3,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_6.setTransform(27.4,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_7.setTransform(27.6,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]},5).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_4,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]},1).wait(4));

	// 图层_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape_8.setTransform(27.1,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_9.setTransform(27.3,37.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_10.setTransform(27.4,37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_11.setTransform(27.6,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]},7).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_8,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]},1).wait(2));

	// 图层_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgSgSIAlAAIAAAkIglAAg");
	this.shape_12.setTransform(18.2,37.2,0.878,0.878);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAjAAIAAAng");
	this.shape_13.setTransform(18.1,30.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAjAAIAAAng");
	this.shape_14.setTransform(18.1,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(17));

	// 图层_1
	this.instance = new lib.标题png复制();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653,59.4);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.youce_xiayibu();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-85);

	this.instance_1 = new lib.youce_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.5,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-85,71,170);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.youce_tijiao();
	this.instance.parent = this;
	this.instance.setTransform(-35.5,-85);

	this.instance_1 = new lib.youce_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-35.5,-85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.5,-85,71,170);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// 图层_3
	this.instance = new lib.Q3_3_zqxs();
	this.instance.parent = this;
	this.instance.setTransform(715.6,-511.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// 图层_1
	this.instance_1 = new lib.Q2_2_zq();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-130,-145.5);

	this.instance_2 = new lib.Q2_2_cw();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-135.6,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130,-145.5,290,291);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,1280,720), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_3_ZZ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1280.7,719.7), null);


(lib.标题2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape.setTransform(27.1,23.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_1.setTransform(27.3,23.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_2.setTransform(27.4,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_3.setTransform(27.6,23.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{scaleX:1,x:27.1}}]},1).wait(6));

	// 图层_4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape_4.setTransform(27.1,31);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_5.setTransform(27.3,31);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_6.setTransform(27.4,31);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_7.setTransform(27.6,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]},5).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_4,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4,p:{scaleX:1,x:27.1}}]},1).wait(4));

	// 图层_5
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgnAAIBPAA");
	this.shape_8.setTransform(27.1,37.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgpAAIBTAA");
	this.shape_9.setTransform(27.3,37.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgrAAIBXAA");
	this.shape_10.setTransform(27.4,37.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(2,2,1).p("AgtAAIBaAA");
	this.shape_11.setTransform(27.6,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]}).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]},7).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_8,p:{scaleX:1.174,x:27.8}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8,p:{scaleX:1,x:27.1}}]},1).wait(2));

	// 图层_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(1,1,1).p("AgSgSIAlAAIAAAkIglAAg");
	this.shape_12.setTransform(18.2,37.2,0.878,0.878);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAjAAIAAAng");
	this.shape_13.setTransform(18.1,30.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgRAUIAAgnIAjAAIAAAng");
	this.shape_14.setTransform(18.1,23.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(17));

	// 图层_1
	this.instance = new lib.标题2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,653,59.4);


(lib.元件44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_3
	this.end = new lib.元件2();
	this.end.name = "end";
	this.end.parent = this;
	this.end.setTransform(0,461.5);
	new cjs.ButtonHelper(this.end, 0, 1, 2, false, new lib.元件2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.end).wait(2));

	// 图层_2
	this.instance = new lib.an_Video({'id': '', 'src':'videos/解析视频_x264.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance.setTransform(-2.7,35.5,3.13,2.347,0,0,0,199.8,150);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// 图层_1
	this.instance_1 = new lib.shipinjiexi_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-667.5,-435);

	this.instance_2 = new lib.Q3_3jiexi_zz();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-969.6,-544.3,1.01,1.01);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(2));

	// 图层_5
	this.instance_3 = new lib.元件7("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-10.2,-4.2,1.5,1.5,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-970.2,-544.3,1939.8,1088.8);


(lib.元件38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件39();
	this.instance.parent = this;
	this.instance.setTransform(119.2,213.6,1,1,0,0,0,19,10);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:118},7).to({x:119.2},7).wait(1));

	// 图层_1
	this.instance_1 = new lib.Q3_3_wuneirongTIS();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,393.6,501.6);


(lib.元件36 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件37();
	this.instance.parent = this;
	this.instance.setTransform(3,12.8,1,1,0,0,0,3,12.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:13.4,x:2.9,y:12.9},8).to({rotation:0,x:3,y:12.8},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,7.4,14);


(lib.元件35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件36();
	this.instance.parent = this;
	this.instance.setTransform(82.5,28.8,1,1,0,0,0,3.6,7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.护理问题右边();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件35, new cjs.Rectangle(0,0,234.8,302.8), null);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件14();
	this.instance.parent = this;
	this.instance.setTransform(450.1,29.7,1,1,0,0,0,446.6,29.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:444.3,alpha:1},7).to({x:447.8},6).to({x:451.2},5).to({_off:true},8).wait(83));

	// 图层_8
	this.instance_1 = new lib.元件35();
	this.instance_1.parent = this;
	this.instance_1.setTransform(129.9,224.1,1,1,0,0,0,117.4,151.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({x:135.9,alpha:1},7).to({x:133.9},6).to({_off:true},2).wait(83));

	// 图层_4
	this.instance_2 = new lib.元件38();
	this.instance_2.parent = this;
	this.instance_2.setTransform(456.6,321.3,1,1,0,0,0,196.8,250.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({x:450.6,alpha:1},7).to({x:452.6},6).to({_off:true},2).wait(83));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3.5,0,653,59.4);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio14040' + 'Object'].actionPlay();
	}
	this.frame_40 = function() {
		var _this = this;
		_this.stop();
		//多选题 
		var arr1 = [];
		var arr2 = [];
		
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		_this.jiexi.visible = false;
		_this.tishi.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		for (var i = 1; i <= 8; i++) {
			_this['anniu_' + i].mouseChildren = false;
			_this['myClick_' + i].visible = false;
		}
		setTimeout(function () {}, 1);
		
		var Array1 = ['未回答'];
		var Array2 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0014 === undefined) {
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
		
		var answerArr = {
			1: '止血无效',
			2: '血容量不足',
			3: '机体氧供不足',
			4: '潜在并发症：心跳呼吸骤停、MODS、感染'
		}
		var answerArr2 = {
			1: '血标本采集用物准备',
			2: '止血用物准备',
			3: '心电监护准备',
			4: '吸氧用物准备',
			5: '建立静脉通路准备',
			6: '抢救车准备',
			7: '创伤单元准备',
			8: '准备轮椅'
		}
		var flag = true;
		var flag2 = true;
		var count = 1;
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
		
					if (count == 1) {
						flag = false;
						arr1.sort(function (a, b) {
							return a - b;
						});
						_this.daan.visible = true;
						if (arr1.toString() == '1,2,3,4') {
							playSound('correct');
							_this.daan.gotoAndStop(0);
						} else {
							_this.daan.gotoAndStop(1);
							playSound('error');
						}
		
		
						if (arr1.length == 0) {
							arr1 = ['未回答'];
						} else {
							Array1.length = 0;
							for (var i = 1; i <= arr1.length; i++) {
								Array1.push(answerArr[arr1[i - 1]]);
							}
						}
		
						_this.play();
						count = 2;
						console.log(Array1.join('、'))
						window.parent['audio14040' + 'Object'].actionStop();
						window.parent['audio125350' + 'Object'].actionPlay();
					} else {
						flag2 = false;
						arr2.sort(function (a, b) {
							return a - b;
						});
						_this.daan.visible = true;
						_this.jiexi.visible = true;
						if (arr2.toString() == '1,2,3,4,5,6,7') {
							playSound('correct');
							_this.daan.gotoAndStop(2);
						} else {
							_this.daan.gotoAndStop(3);
							playSound('error');
						}
		
		
						if (arr2.length == 0) {
							arr2 = ['未回答'];
						} else {
							Array2.length = 0;
							for (var i = 1; i <= arr2.length; i++) {
								Array2.push(answerArr2[arr2[i - 1]]);
							}
						}
		
					}
					//			console.log('护理问题选项：'+Array1.join('、')+'。准备工作选项：'+Array2.join('、'));
		
					win.VarQuestion_0014.set('护理问题选项：' + Array1.join('、') + '。准备工作选项：' + Array2.join('、'));
		
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					_this.play();
		
					_this.daan.visible = false;
					_this.jixu.visible = false;
					flag = true;
				} else if (e.target.name.indexOf("end") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				} else if (e.target.name.indexOf("jiexi") >= 0) {
					playSound('click');
					_this.jiexi.visible = false;
					_this.queding.visible = false;
					_this.tishi.visible = true;
					_this.tishi.gotoAndStop(1);
					window.parent['audio125350' + 'Object'].actionStop();
				} else if (e.target.name.indexOf("anniu_") >= 0 && flag2) {
		
					var anniu_Num = Number(e.target.name.substring(6));
					//console.log(curNum)
		
		
					var index = arr2.indexOf(anniu_Num);
					if (index == -1) {
						arr2.push(anniu_Num);
						_this['myClick_' + anniu_Num].visible = true;
					} else {
						arr2.splice(index, 1);
						_this['myClick_' + anniu_Num].visible = false;
					}
					playSound('click');
				}
			}
		});
	}
	this.frame_41 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(1).call(this.frame_41).wait(1));

	// 图层_8
	this.jiexi = new lib.元件43();
	this.jiexi.name = "jiexi";
	this.jiexi.parent = this;
	this.jiexi.setTransform(1149.9,383.9,0.667,0.667);
	new cjs.ButtonHelper(this.jiexi, 0, 1, 2, false, new lib.元件43(), 3);

	this.jixu = new lib.元件13();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1149.9,383.9,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.元件13(), 3);

	this.queding = new lib.元件12();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1149.9,383.9,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.元件12(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.jiexi}]},40).wait(2));

	// 图层_14
	this.tishi = new lib.元件44();
	this.tishi.name = "tishi";
	this.tishi.parent = this;
	this.tishi.setTransform(646.7,363.1,0.667,0.667);
	this.tishi._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tishi).wait(40).to({_off:false},0).wait(2));

	// 图层_9
	this.btn_4 = new lib.元件41();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(587.7,432.9);

	this.btn_3 = new lib.元件41();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(587.7,371.3);

	this.btn_2 = new lib.元件41();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(587.2,309);

	this.btn_1 = new lib.元件41();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(587.2,246.4);

	this.anniu_8 = new lib.元件34();
	this.anniu_8.name = "anniu_8";
	this.anniu_8.parent = this;
	this.anniu_8.setTransform(902.6,633.5);

	this.anniu_7 = new lib.元件34();
	this.anniu_7.name = "anniu_7";
	this.anniu_7.parent = this;
	this.anniu_7.setTransform(902.6,577.7);

	this.anniu_6 = new lib.元件34();
	this.anniu_6.name = "anniu_6";
	this.anniu_6.parent = this;
	this.anniu_6.setTransform(902.6,521.8);

	this.anniu_5 = new lib.元件34();
	this.anniu_5.name = "anniu_5";
	this.anniu_5.parent = this;
	this.anniu_5.setTransform(902.6,466);

	this.anniu_4 = new lib.元件34();
	this.anniu_4.name = "anniu_4";
	this.anniu_4.parent = this;
	this.anniu_4.setTransform(902.6,410.3);

	this.anniu_3 = new lib.元件34();
	this.anniu_3.name = "anniu_3";
	this.anniu_3.parent = this;
	this.anniu_3.setTransform(902.6,354.6);

	this.anniu_2 = new lib.元件34();
	this.anniu_2.name = "anniu_2";
	this.anniu_2.parent = this;
	this.anniu_2.setTransform(902.6,298.6);

	this.anniu_1 = new lib.元件34();
	this.anniu_1.name = "anniu_1";
	this.anniu_1.parent = this;
	this.anniu_1.setTransform(902.6,241.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4}]},40).to({state:[{t:this.anniu_1},{t:this.anniu_2},{t:this.anniu_3},{t:this.anniu_4},{t:this.anniu_5},{t:this.anniu_6},{t:this.anniu_7},{t:this.anniu_8}]},1).wait(1));

	// 图层_10
	this.show4 = new lib.元件40();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(492.4,433.7);

	this.show3 = new lib.元件40();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(492.4,371.1);

	this.show2 = new lib.元件40();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(492.4,309.4);

	this.show1 = new lib.元件40();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(492.4,247.1);

	this.instance = new lib.元件40("single",0);
	this.instance.parent = this;
	this.instance.setTransform(492.4,433.7);

	this.instance_1 = new lib.元件40("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(492.4,371.1);

	this.instance_2 = new lib.元件40("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(492.4,309.4);

	this.instance_3 = new lib.元件40("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(492.4,247.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},40).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).wait(1));

	// 图层_12
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(578.6,565.1,0.667,0.667);
	this.daan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.daan).wait(40).to({_off:false},0).wait(2));

	// 图层_13
	this.myClick_8 = new lib.元件42();
	this.myClick_8.name = "myClick_8";
	this.myClick_8.parent = this;
	this.myClick_8.setTransform(1074.7,634.1);

	this.myClick_7 = new lib.元件42();
	this.myClick_7.name = "myClick_7";
	this.myClick_7.parent = this;
	this.myClick_7.setTransform(1074.7,578.1);

	this.myClick_6 = new lib.元件42();
	this.myClick_6.name = "myClick_6";
	this.myClick_6.parent = this;
	this.myClick_6.setTransform(1074.7,522);

	this.myClick_5 = new lib.元件42();
	this.myClick_5.name = "myClick_5";
	this.myClick_5.parent = this;
	this.myClick_5.setTransform(1074.7,466.8);

	this.myClick_4 = new lib.元件42();
	this.myClick_4.name = "myClick_4";
	this.myClick_4.parent = this;
	this.myClick_4.setTransform(1074.7,410.6);

	this.myClick_3 = new lib.元件42();
	this.myClick_3.name = "myClick_3";
	this.myClick_3.parent = this;
	this.myClick_3.setTransform(1074.7,354.3);

	this.myClick_2 = new lib.元件42();
	this.myClick_2.name = "myClick_2";
	this.myClick_2.parent = this;
	this.myClick_2.setTransform(1074.7,298.7);

	this.myClick_1 = new lib.元件42();
	this.myClick_1.name = "myClick_1";
	this.myClick_1.parent = this;
	this.myClick_1.setTransform(1074.7,242.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.myClick_1},{t:this.myClick_2},{t:this.myClick_3},{t:this.myClick_4},{t:this.myClick_5},{t:this.myClick_6},{t:this.myClick_7},{t:this.myClick_8}]},41).wait(1));

	// 图层_11
	this.instance_4 = new lib.标题2_1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(905.5,115.4,1,1,0,0,0,446.6,29.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(41).to({_off:false},0).wait(1));

	// 图层_6
	this.instance_5 = new lib.元件17("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(901,368.8,1,1,0,0,0,446.6,283.1);

	this.instance_6 = new lib.元件14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(905.5,115.4,1,1,0,0,0,446.6,29.7);

	this.instance_7 = new lib.元件35();
	this.instance_7.parent = this;
	this.instance_7.setTransform(588.3,309.8,1,1,0,0,0,117.4,151.4);

	this.instance_8 = new lib.元件38();
	this.instance_8.parent = this;
	this.instance_8.setTransform(906.9,407,1,1,0,0,0,196.8,250.8);

	this.instance_9 = new lib.Q3_3_gongzuozhunbei();
	this.instance_9.parent = this;
	this.instance_9.setTransform(710.1,156.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},14).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},26).to({state:[{t:this.instance_9},{t:this.instance_7},{t:this.instance_6}]},1).wait(1));

	// 图层_2
	this.instance_10 = new lib.元件23("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(638.8,354.3,1,1,0,0,0,586.3,312.8);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({y:377.3,alpha:1},8).to({y:373},6).wait(26).to({startPosition:0},0).wait(2));

	// 图层_3
	this.instance_11 = new lib.元件1();
	this.instance_11.parent = this;
	this.instance_11.setTransform(640.3,359.9,1,1,0,0,0,640.3,359.9);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({alpha:1},8).wait(34));

	// 图层_1
	this.instance_12 = new lib.元件7("single",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720);


// stage content:
(lib.Q3_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(548.4,310.9,1,1,0,0,0,548.4,310.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.7,720);
// library properties:
lib.properties = {
	id: '51247178E00FD649A196293697E4DAC5',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A.jpg?1695779093075", id:"A"},
		{src:"images/Q3_3_BG.png?1695779093075", id:"Q3_3_BG"},
		{src:"images/Q3_3_ZZ.png?1695779093075", id:"Q3_3_ZZ"},
		{src:"images/Q3_3jiexi_zz.png?1695779093075", id:"Q3_3jiexi_zz"},
		{src:"images/shipinjiexi_bg.png?1695779093075", id:"shipinjiexi_bg"},
		{src:"images/Q3_3_atlas_P_.png?1695779093032", id:"Q3_3_atlas_P_"},
		{src:"images/Q3_3_atlas_P_2.png?1695779093032", id:"Q3_3_atlas_P_2"},
		{src:"images/Q3_3_atlas_P_3.png?1695779093032", id:"Q3_3_atlas_P_3"},
		{src:"sounds/click.mp3?1695779093075", id:"click"},
		{src:"sounds/correct.mp3?1695779093075", id:"correct"},
		{src:"sounds/error.mp3?1695779093075", id:"error"},
		{src:"components/lib/jquery-2.2.4.min.js?1695779093075", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1695779093075", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1695779093075", id:"an.Video"}
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
an.compositions['51247178E00FD649A196293697E4DAC5'] = {
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

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;