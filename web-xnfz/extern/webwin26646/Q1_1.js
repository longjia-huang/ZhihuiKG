(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q1_1_atlas_P_", frames: [[572,0,412,411],[404,413,402,333],[0,354,402,333],[0,0,570,352]]},
		{name:"Q1_1_atlas_P_2", frames: [[404,0,433,245],[350,959,101,19],[541,919,239,79],[541,838,239,79],[0,0,402,333],[839,0,86,86],[350,838,189,119],[0,335,401,332],[732,688,38,37],[0,669,348,159],[403,403,347,117],[404,247,350,154],[0,830,348,159],[839,88,38,37],[350,761,348,75],[403,615,380,71],[756,247,30,95],[403,522,384,91],[350,688,380,71],[0,991,166,6],[168,991,128,6]]}
];


// symbols:



(lib.三角形801 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.椭圆556 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.椭圆804 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._2tu = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._3yut = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.dingbu_bg = function() {
	this.initialize(img.dingbu_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,149);


(lib.dizuo拷贝 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_01 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_02 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_03 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_DJ = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_ywc = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_zjwz = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_zjwz1 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_zjwz2 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_zjwzwancehnghou = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Q1_1_zzbg = function() {
	this.initialize(img.Q1_1_zzbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Q1_1weijiesuo2 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Q_TIPS_jia = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.YOU = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.ZHONG = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.ZIDIZI = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.ZUO = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.矩形1622拷贝11 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.矩形1622拷贝12 = function() {
	this.spriteSheet = ss["Q1_1_atlas_P_2"];
	this.gotoAndStop(20);
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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// 图层_3
	this.instance = new lib.Q1_1_zzbg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


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


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q1_1weijiesuo2();
	this.instance.parent = this;
	this.instance.setTransform(-12.6,-12.3,0.667,0.667);

	this.instance_1 = new lib.Q1_1_ywc();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-12.6,-12.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.6,-12.3,25.4,24.7);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(21,123,215,0.008)").s().p("A02RBMAAAgiBMAptAAAMAAAAiBg");
	this.shape.setTransform(-1,-11.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层_1
	this.instance = new lib.Q1_1_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-134,-123,0.667,0.667);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-134.5,-120.5,267,217.8);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆804();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,67.4,12.7);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// 图层_2
	this.instance = new lib.Q1_1_zjwz();
	this.instance.parent = this;
	this.instance.setTransform(28.1,20.6,0.667,0.667);

	this.instance_1 = new lib.Q1_1_zjwz1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(28.1,34.7,0.667,0.667);

	this.instance_2 = new lib.Q1_1_zjwz2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(28.1,22.3,0.667,0.667);

	this.instance_3 = new lib.Q1_1_zjwzwancehnghou();
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.1,20.6,0.667,0.667);

	this.instance_4 = new lib.Q_TIPS_jia();
	this.instance_4.parent = this;
	this.instance_4.setTransform(29.4,44,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	// 图层_1
	this.instance_5 = new lib.三角形801();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,288.8,163.4);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AhJAjIAAhKIBWAAIA9BPg");
	var mask_graphics_6 = new cjs.Graphics().p("Ah0AiIAAhKIClAAIBEBRg");
	var mask_graphics_11 = new cjs.Graphics().p("AibAjIAAhKIDngBIBQBRg");
	var mask_graphics_16 = new cjs.Graphics().p("AjJAgIAAhKIE5gBIBZBXg");
	var mask_graphics_21 = new cjs.Graphics().p("AjsAhIAAhJIGKgBIBPBTg");
	var mask_graphics_27 = new cjs.Graphics().p("AkQAfIAAhJIHcADIBFBSg");
	var mask_graphics_33 = new cjs.Graphics().p("ApJAaIAAhJIQfADIB0Bcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:4.2,y:1.5}).wait(6).to({graphics:mask_graphics_6,x:8.5,y:1.6}).wait(5).to({graphics:mask_graphics_11,x:12.4,y:1.5}).wait(5).to({graphics:mask_graphics_16,x:17,y:1.8}).wait(5).to({graphics:mask_graphics_21,x:20.5,y:1.6}).wait(6).to({graphics:mask_graphics_27,x:24.1,y:1.8}).wait(6).to({graphics:mask_graphics_33,x:55.4,y:2.3}).wait(26));

	// 图层_1
	this.instance = new lib.矩形1622拷贝11();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},48).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11.6,4);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgMgnIBWAAIAABKIiTAFg");
	var mask_graphics_5 = new cjs.Graphics().p("AgwgoIClAAIAABKIjpAHg");
	var mask_graphics_10 = new cjs.Graphics().p("AhLgoIDnABIAABKIk3AGg");
	var mask_graphics_15 = new cjs.Graphics().p("AhvgrIE4ABIAABKImSAMg");
	var mask_graphics_20 = new cjs.Graphics().p("AidgpIGKABIAABJInZAJg");
	var mask_graphics_25 = new cjs.Graphics().p("AjMgnIHdgDIAABJIohAMg");
	var mask_graphics_31 = new cjs.Graphics().p("ApJAaIAAhJIQfADIB0Bcg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:81.6,y:1.5}).wait(5).to({graphics:mask_graphics_5,x:77.1,y:1.6}).wait(5).to({graphics:mask_graphics_10,x:72.9,y:1.5}).wait(5).to({graphics:mask_graphics_15,x:68.6,y:1.8}).wait(5).to({graphics:mask_graphics_20,x:64.5,y:1.6}).wait(5).to({graphics:mask_graphics_25,x:60.7,y:1.8}).wait(6).to({graphics:mask_graphics_31,x:55.4,y:2.3}).wait(28));

	// 图层_1
	this.instance = new lib.矩形1622拷贝12();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},46).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(74.2,0,11.2,4);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.Q1_1weijiesuo2();
	this.instance.parent = this;
	this.instance.setTransform(15.3,5.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.Q1_1_02();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57.4,57.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q1_1_03();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.1,79.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆556();
	this.instance.parent = this;
	this.instance.setTransform(-0.5,1.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-0.5,1.7,274.8,274.2), null);


(lib.图 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(151.7,183.8);

	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(70.5,186.2,1,1,0,0,0,42.7,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:186.2}},{t:this.instance,p:{y:183.8}}]}).to({state:[{t:this.instance_1,p:{y:188.7}},{t:this.instance,p:{y:186.3}}]},1).to({state:[{t:this.instance_1,p:{y:188.7}},{t:this.instance,p:{y:186.3}}]},1).wait(1));

	// 图层_1
	this.instance_2 = new lib.Q1_1_01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,-27.9,0.667,0.667);

	this.instance_3 = new lib.ZIDIZI();
	this.instance_3.parent = this;
	this.instance_3.setTransform(5,-19.3,0.667,0.667);

	this.instance_4 = new lib._2tu();
	this.instance_4.parent = this;
	this.instance_4.setTransform(0,-25.4,0.667,0.667);

	this.instance_5 = new lib._3yut();
	this.instance_5.parent = this;
	this.instance_5.setTransform(0,-25.4,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-27.9,268.2,222.1);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(252.4,166.3,1.187,1.187,0,0,0,28.7,28.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({scaleX:1,scaleY:0.95,y:213.1,alpha:1},6).to({scaleY:1,y:211.2},4).to({_off:true},42).wait(62));

	// 图层_2
	this.instance_1 = new lib.图("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(253.2,178.6,0.524,0.524,0,0,0,134.1,97.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(65).to({_off:false},0).to({regY:97.7,scaleX:0.9,scaleY:0.9,x:253.1,y:116.1,alpha:1},10).to({scaleX:1,scaleY:1,x:252.9,y:97.7},9).to({_off:true},26).wait(62));

	// 图层_4
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(252.4,249.1,0.524,0.524,0,0,0,63.1,39.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(16).to({_off:false},0).to({scaleX:0.9,scaleY:0.9,x:251.8,y:236.5,alpha:1},10).to({regX:63,regY:39.6,scaleX:1,scaleY:1,x:251.4,y:232.2},9).to({_off:true},75).wait(62));

	// 图层_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4RExIAApgMAwjAAAIAAJgg");
	var mask_graphics_1 = new cjs.Graphics().p("A4REwIAApgMAwjAAAIAAJgg");
	var mask_graphics_2 = new cjs.Graphics().p("A4RExIAApgMAwjAAAIAAJgg");
	var mask_graphics_3 = new cjs.Graphics().p("A4RExIAApgMAwjAAAIAAJgg");
	var mask_graphics_4 = new cjs.Graphics().p("A4REwIAApgMAwjAAAIAAJgg");
	var mask_graphics_5 = new cjs.Graphics().p("A4REwIAApfMAwjAAAIAAJfg");
	var mask_graphics_6 = new cjs.Graphics().p("A4RExIAAphMAwjAAAIAAJhg");
	var mask_graphics_7 = new cjs.Graphics().p("A4REwIAApfMAwjAAAIAAJfg");
	var mask_graphics_8 = new cjs.Graphics().p("A4REwIAApfMAwjAAAIAAJfg");
	var mask_graphics_9 = new cjs.Graphics().p("A4RExIAAphMAwjAAAIAAJhg");
	var mask_graphics_10 = new cjs.Graphics().p("A4REwIAApfMAwjAAAIAAJfg");
	var mask_graphics_11 = new cjs.Graphics().p("A51EwIAApfMAwiAAAIDJF7IjJDkg");
	var mask_graphics_12 = new cjs.Graphics().p("A59E9IAApfMAwZgAaIDiFUIjZElg");
	var mask_graphics_13 = new cjs.Graphics().p("A6GFKIAApgMAwQgAzID9EuIjqFlg");
	var mask_graphics_14 = new cjs.Graphics().p("A6OFXIAApgMAwHgBNIEWEHIj7Gmg");
	var mask_graphics_15 = new cjs.Graphics().p("A6WFkIAApgMAv9gBnIEwDhIkLHmg");
	var mask_graphics_16 = new cjs.Graphics().p("A6eFxIAApgMAv0gCBIFJC5IkbIog");
	var mask_graphics_17 = new cjs.Graphics().p("A6nF+IAApgMAvrgCbIFkCSIksJpg");
	var mask_graphics_18 = new cjs.Graphics().p("A6vGLIAApgMAvigC1IF9BsIk9Kpg");
	var mask_graphics_19 = new cjs.Graphics().p("A63GYIAApgMAvYgDPIGXBFIlNLqg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-160.5,y:293.7}).wait(1).to({graphics:mask_graphics_1,x:-135.8,y:295.5}).wait(1).to({graphics:mask_graphics_2,x:-111.1,y:297.2}).wait(1).to({graphics:mask_graphics_3,x:-86.5,y:299}).wait(1).to({graphics:mask_graphics_4,x:-61.8,y:300.8}).wait(1).to({graphics:mask_graphics_5,x:-37.1,y:302.5}).wait(1).to({graphics:mask_graphics_6,x:-12.5,y:304.3}).wait(1).to({graphics:mask_graphics_7,x:12.2,y:306}).wait(1).to({graphics:mask_graphics_8,x:36.9,y:307.8}).wait(1).to({graphics:mask_graphics_9,x:61.6,y:309.6}).wait(1).to({graphics:mask_graphics_10,x:86.2,y:311.3}).wait(1).to({graphics:mask_graphics_11,x:96.3,y:311.3}).wait(1).to({graphics:mask_graphics_12,x:97.1,y:310}).wait(1).to({graphics:mask_graphics_13,x:97.9,y:308.7}).wait(1).to({graphics:mask_graphics_14,x:98.8,y:307.4}).wait(1).to({graphics:mask_graphics_15,x:99.6,y:306.2}).wait(1).to({graphics:mask_graphics_16,x:100.4,y:304.9}).wait(1).to({graphics:mask_graphics_17,x:101.2,y:303.6}).wait(1).to({graphics:mask_graphics_18,x:102.1,y:302.3}).wait(1).to({graphics:mask_graphics_19,x:102.9,y:301}).wait(91).to({graphics:null,x:0,y:0}).wait(62));

	// 图层_1
	this.instance_3 = new lib.YOU();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,266.7,0.667,0.667);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},110).wait(62));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.图("single",1);
	this.instance.parent = this;
	this.instance.setTransform(134.2,135.2,0.782,0.782,0,0,0,134,97.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).to({regX:134.1,scaleX:0.96,scaleY:0.96,x:134.1,y:105.4,alpha:1},8).to({scaleX:1,scaleY:1,y:97.7},9).to({_off:true},42).wait(54));

	// 图层_3
	this.instance_1 = new lib.元件4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(132.6,198.4,1.24,1.24,0,0,0,27.7,47.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({regX:27.6,regY:47.3,scaleX:1,scaleY:0.95,x:132.4,y:229,alpha:1},6).to({regY:47.2,scaleY:1,y:228.6},5).to({_off:true},55).wait(54));

	// 图层_4
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(133,239.5,0.782,0.782,0,0,0,63,39.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleX:0.96,scaleY:0.96,x:132.5,y:232.9,alpha:1},10).to({regY:39.6,scaleX:1,scaleY:1,y:231.1},9).to({_off:true},79).wait(54));

	// 图层_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EABtAhJIAAukILQAAIAAOkg");
	var mask_graphics_1 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_2 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_3 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_4 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_5 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_6 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_7 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_8 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_9 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");
	var mask_graphics_10 = new cjs.Graphics().p("AlnHSIAAujILPAAIAAOjg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:82.9,y:212.1}).wait(1).to({graphics:mask_graphics_1,x:129.8,y:370.2}).wait(1).to({graphics:mask_graphics_2,x:129.8,y:362.8}).wait(1).to({graphics:mask_graphics_3,x:129.8,y:355.4}).wait(1).to({graphics:mask_graphics_4,x:129.8,y:348}).wait(1).to({graphics:mask_graphics_5,x:129.8,y:340.6}).wait(1).to({graphics:mask_graphics_6,x:129.8,y:333.2}).wait(1).to({graphics:mask_graphics_7,x:129.8,y:325.8}).wait(1).to({graphics:mask_graphics_8,x:129.8,y:318.4}).wait(1).to({graphics:mask_graphics_9,x:129.8,y:311}).wait(1).to({graphics:mask_graphics_10,x:129.8,y:303.6}).wait(88).to({graphics:null,x:0,y:0}).wait(54));

	// 图层_1
	this.instance_3 = new lib.ZHONG();
	this.instance_3.parent = this;
	this.instance_3.setTransform(122,264.4,0.667,0.667);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},98).wait(54));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(83.7,208.5,98.6,62.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("An5G7Ii/v5IVxAUIAARpg");
	var mask_graphics_1 = new cjs.Graphics().p("AtBmYIUNhWIF2PVIwtAJg");
	var mask_graphics_2 = new cjs.Graphics().p("AvKkqISnjBILuNDIuoCUg");
	var mask_graphics_3 = new cjs.Graphics().p("AxTi8IREksIRjKwIsjEhg");
	var mask_graphics_4 = new cjs.Graphics().p("AzchPIPemWIXbIeIqdGtg");
	var mask_graphics_5 = new cjs.Graphics().p("A1kAfIN5oBIdRGNIoYI4g");
	var mask_graphics_6 = new cjs.Graphics().p("A3tCMIMUprMAjHAD7ImRLEg");
	var mask_graphics_7 = new cjs.Graphics().p("A52D6IKvrVMAo+ABnIkLNQg");
	var mask_graphics_8 = new cjs.Graphics().p("A7/F9IJKtAMAu1gAqIiFPcg");
	var mask_graphics_9 = new cjs.Graphics().p("A+II1IHlusMA0sgC9IAARpg");
	var mask_graphics_10 = new cjs.Graphics().p("A8hI1IjOhUIKztYMA0sgC9IAARpg");
	var mask_graphics_11 = new cjs.Graphics().p("A8OI1Ij0ilILZsHMA0sgC9IAARpg");
	var mask_graphics_12 = new cjs.Graphics().p("A77I1Ikaj0IL/q4MA0sgC9IAARpg");
	var mask_graphics_13 = new cjs.Graphics().p("A7oI1IlAlFIMlpnMA0sgC9IAARpg");
	var mask_graphics_14 = new cjs.Graphics().p("A7VI1IlmmVINLoXMA0sgC9IAARpg");
	var mask_graphics_15 = new cjs.Graphics().p("A7BI1ImNnlINynHMA0rgC9IAARpg");
	var mask_graphics_16 = new cjs.Graphics().p("A6uI1Imzo1IOYl3MA0rgC9IAARpg");
	var mask_graphics_17 = new cjs.Graphics().p("A6bI1InZqFIO+knMA0rgC9IAARpg");
	var mask_graphics_18 = new cjs.Graphics().p("A6II1In/rWIPkjWMA0rgC9IAARpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:440.9,y:292.8}).wait(1).to({graphics:mask_graphics_1,x:427.3,y:289}).wait(1).to({graphics:mask_graphics_2,x:413.6,y:290.8}).wait(1).to({graphics:mask_graphics_3,x:399.9,y:292.6}).wait(1).to({graphics:mask_graphics_4,x:386.2,y:294.4}).wait(1).to({graphics:mask_graphics_5,x:372.5,y:296.1}).wait(1).to({graphics:mask_graphics_6,x:358.8,y:297.9}).wait(1).to({graphics:mask_graphics_7,x:345.2,y:299.7}).wait(1).to({graphics:mask_graphics_8,x:331.5,y:299.4}).wait(1).to({graphics:mask_graphics_9,x:317.8,y:293.8}).wait(1).to({graphics:mask_graphics_10,x:307.5,y:293.8}).wait(1).to({graphics:mask_graphics_11,x:305.6,y:293.8}).wait(1).to({graphics:mask_graphics_12,x:303.7,y:293.8}).wait(1).to({graphics:mask_graphics_13,x:301.8,y:293.8}).wait(1).to({graphics:mask_graphics_14,x:299.9,y:293.8}).wait(1).to({graphics:mask_graphics_15,x:298,y:293.8}).wait(1).to({graphics:mask_graphics_16,x:296.1,y:293.8}).wait(1).to({graphics:mask_graphics_17,x:294.1,y:293.8}).wait(1).to({graphics:mask_graphics_18,x:292.2,y:293.8}).wait(92).to({graphics:null,x:0,y:0}).wait(15));

	// 图层_2
	this.instance = new lib.ZUO();
	this.instance.parent = this;
	this.instance.setTransform(130.2,267.7,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},110).wait(15));

	// 图层_5
	this.instance_1 = new lib.元件4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(134,207.7,1.184,1.184,0,0,0,29.4,47.1);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({regX:29.3,scaleX:1,scaleY:0.96,x:133.9,y:226.3,alpha:1},7).to({scaleY:1},4).to({_off:true},67).wait(15));

	// 图层_1
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(132.6,268.8,0.651,0.651,0,0,0,63.6,79.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regX:63.7,regY:79,scaleX:0.89,scaleY:0.89,x:133.2,y:268.5,alpha:1},8).to({regX:63.6,scaleX:1,scaleY:1,x:132.8,y:268.3},9).to({_off:true},83).wait(15));

	// 图层_4
	this.instance_3 = new lib.图("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(131.5,189.8,0.678,0.678,0,0,0,131.4,189.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(39).to({_off:false},0).to({regX:131.5,scaleX:0.92,scaleY:0.92,x:131.6,alpha:1},9).to({regX:131.4,scaleX:1,scaleY:1,x:131.4},5).to({_off:true},57).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(371.2,267.7,12.4,47.4);


(lib.中圈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(145.1,141.7,1,1,0,0,0,137.4,137.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).wait(1));

	// 图层_1
	this.instance_1 = new lib.dizuo拷贝();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-41,56.9,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(176));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41,56.9,380.2,234.8);


(lib.目录 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件7("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(-190.1,152.7,1,1,0,0,0,191.8,157.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(21).to({_off:false},0).to({_off:true},85).wait(119));

	// 图层_4
	this.instance_1 = new lib.元件11("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(508.9,152.2,1,1,0,0,0,193.5,157);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({_off:false},0).to({_off:true},85).wait(119));

	// 图层_3
	this.instance_2 = new lib.中圈();
	this.instance_2.parent = this;
	this.instance_2.setTransform(156.7,243.4,0.556,0.556,0,0,0,144.4,142.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regX:144.5,regY:142.8,scaleX:1.04,scaleY:1.04,y:243.5,alpha:1},11).to({regX:144.4,regY:142.7,scaleX:1,scaleY:1,y:243.4},9).to({_off:true},86).wait(119));

	// 图层_1
	this.instance_3 = new lib.元件10("synched",0,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(156.6,-51.4,1,1,0,0,0,134.1,163.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(33).to({_off:false},0).to({_off:true},73).wait(119));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(53.7,195.7,211.3,130.5);


(lib.总动画 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{A:106});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		var win = window;
		while (win !== win.parent && win.VarQ1_1erji_1 === undefined && win.VarP8Q1_1_tiaozhuan === undefined) {
			win = win.parent;
		}
		setTimeout(function () {
			getFlag1();
		}, 1);
		function getFlag1() {
		
			//console.log(win.VarQ1_1erji_1.value, win.VarQ1_1erji_2.value, win.VarQ1_1erji_3.value)
			/*if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value != 1) {
				//第1部完成，该学第2步
				_this.BigMc.gotoAndStop(1);
				_this.BigMc.mc2.gotoAndPlay(1);
				_this.BG.gotoAndStop(1);
				_this.gotoAndStop('A');
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				//第二部完成，该学第三步
				_this.BigMc.gotoAndStop(2);
				_this.BigMc.mc3.gotoAndPlay(1);
				_this.BG.gotoAndStop(2);
				_this.gotoAndStop('A');
		
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				//第二部完成
				_this.BigMc.gotoAndStop(2);
				_this.BigMc.mc3.gotoAndPlay(1);
				_this.BG.gotoAndStop(2);
				_this.gotoAndStop('A');
		
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value == 1) {
				//三部全完成
				_this.BigMc.gotoAndStop(2);
				_this.BigMc.mc3.gotoAndPlay(1);
				_this.BG.gotoAndStop(2);
				_this.gotoAndStop('A');
		
			}else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value == 1) {
				//第三部全完成
				_this.BigMc.gotoAndStop(2);
				_this.BigMc.mc3.gotoAndPlay(1);
				_this.BG.gotoAndStop(2);
				_this.gotoAndStop('A');
		
			} else */
			if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value != 1) {
				//刚开始学习		
				_this.play();
			} else {
				_this.gotoAndStop('A');
			}
		}
	}
	this.frame_106 = function() {
		var _this = this;
		_this.stop();
		_this.jixu.visible = false;
		
		var win = window;
		while (win !== win.parent && win.VarQ1_1erji_1 === undefined && win.VarP8Q1_1_tiaozhuan === undefined) {
			win = win.parent;
		}
		setTimeout(function () {
			getFlag2();
		}, 1);
		function getFlag2() {
			console.log(win.VarQ1_1erji_1.value, win.VarQ1_1erji_2.value, win.VarQ1_1erji_3.value)
			if (win.VarQ1_1erji_1.value == 1) {
				_this.jindu1.gotoAndStop(1);
			}
			if (win.VarQ1_1erji_2.value == 1) {
				_this.jindu2.gotoAndStop(1);
			}
			if (win.VarQ1_1erji_3.value == 1) {
				_this.jindu3.gotoAndStop(1);
			}
			if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(1);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43861' + 'Object'].actionPlay();
		
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(2);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionPlay();
		
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(2);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionPlay();
		
		
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value == 1) {
				_this.tishi.gotoAndStop(3);
				_this.jixu.visible = true;
				
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value == 1) {
				_this.tishi.gotoAndStop(4); //只学完第3步
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value == 1) {
				_this.tishi.gotoAndStop(4); //只学完第1 3步
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value == 1) {
				_this.tishi.gotoAndStop(4); //只学完第2 3步
			}
		
		/*
			if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(1);
		
				_this.shanguang.gotoAndStop(1);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43861' + 'Object'].actionPlay();
		
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(2);
				_this.shanguang.gotoAndStop(2);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionPlay();
		
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value != 1) {
				_this.tishi.gotoAndStop(2);
				_this.shanguang.gotoAndStop(2);
		
		
				window.parent['audio43861' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionStop();
				window.parent['audio43870' + 'Object'].actionPlay();
		
			} else if (win.VarQ1_1erji_1.value == 1 && win.VarQ1_1erji_2.value == 1 && win.VarQ1_1erji_3.value == 1) {
		
				_this.tishi.gotoAndStop(3);
				_this.shanguang.gotoAndStop(3);
			} else if (win.VarQ1_1erji_1.value != 1 && win.VarQ1_1erji_2.value != 1 && win.VarQ1_1erji_3.value == 1) {
				//单独完成第三步
				_this.tishi.gotoAndStop(3);
				_this.shanguang.gotoAndStop(3);
			}*/
		}
		
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0) {
					playSound('click');
					var curNum = Number(e.target.name.substring(4))
					//console.log(curNum)
					window.parent.trivNextPage();
					win.VarP8Q1_1_tiaozhuan.set(curNum);
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(106).call(this.frame_106).wait(1));

	// 图层_9
	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.btn_3 = new lib.元件18();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(1060.2,398.5);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件18(), 3);

	this.btn_2 = new lib.元件18();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(648.2,187.5);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件18(), 3);

	this.btn_1 = new lib.元件18();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(244.2,395.3);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件18(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.jixu}]},106).wait(1));

	// 图层_8
	this.jindu1 = new lib.元件19();
	this.jindu1.name = "jindu1";
	this.jindu1.parent = this;
	this.jindu1.setTransform(242.2,497.4);

	this.jindu3 = new lib.元件19();
	this.jindu3.name = "jindu3";
	this.jindu3.parent = this;
	this.jindu3.setTransform(1058.7,501.2);

	this.jindu2 = new lib.元件19();
	this.jindu2.name = "jindu2";
	this.jindu2.parent = this;
	this.jindu2.setTransform(647,289.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.jindu2},{t:this.jindu3},{t:this.jindu1}]},106).wait(1));

	// 图层_3
	this.tishi = new lib.元件14();
	this.tishi.name = "tishi";
	this.tishi.parent = this;
	this.tishi.setTransform(650.3,583.4,1,1,0,0,0,144.4,164.7);
	this.tishi._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tishi).wait(106).to({_off:false},0).wait(1));

	// 图层_4
	this.instance = new lib.目录("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(636.1,447.7,1,1,0,0,0,144.4,142.7);

	this.instance_1 = new lib.ZUO();
	this.instance_1.parent = this;
	this.instance_1.setTransform(240,567.8,0.667,0.667);

	this.instance_2 = new lib.Q1_1_02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(214.3,479.4,0.667,0.667);

	this.instance_3 = new lib.元件3("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(242.6,568.5,1,1,0,0,0,63.6,79);

	this.instance_4 = new lib.图("single",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(241.2,490,1,1,0,0,0,131.4,189.8);

	this.instance_5 = new lib.Q1_1_02();
	this.instance_5.parent = this;
	this.instance_5.setTransform(1030.8,482.6,0.667,0.667);

	this.instance_6 = new lib.图("single",2);
	this.instance_6.parent = this;
	this.instance_6.setTransform(1060,397.9,1,1,0,0,0,134.1,97.7);

	this.instance_7 = new lib.元件3("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(1058.4,532.3,1,1,0,0,0,63,39.6);

	this.instance_8 = new lib.YOU();
	this.instance_8.parent = this;
	this.instance_8.setTransform(807.1,566.8,0.667,0.667);

	this.instance_9 = new lib.元件15("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(650.1,583.4,1,1,0,0,0,33.6,6.3);

	this.instance_10 = new lib.中圈();
	this.instance_10.parent = this;
	this.instance_10.setTransform(648.4,548.4,1,1,0,0,0,144.4,142.7);

	this.instance_11 = new lib.图("single",1);
	this.instance_11.parent = this;
	this.instance_11.setTransform(648.3,187.5,1,1,0,0,0,134.1,97.7);

	this.instance_12 = new lib.Q1_1_02();
	this.instance_12.parent = this;
	this.instance_12.setTransform(619,271.1,0.667,0.667);

	this.instance_13 = new lib.元件3("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(646.7,320.8,1,1,0,0,0,63,39.6);

	this.instance_14 = new lib.ZHONG();
	this.instance_14.parent = this;
	this.instance_14.setTransform(636.2,354.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},106).wait(1));

	// 图层_12
	this.instance_15 = new lib.dingbu_bg();
	this.instance_15.parent = this;
	this.instance_15.setTransform(0,-1,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(107));

	// 图层_11
	this.BG = new lib.元件1();
	this.BG.name = "BG";
	this.BG.parent = this;
	this.BG.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.BG).wait(107));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-4.1,1298,738);


// stage content:
(lib.Q1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总动画();
	this.instance.parent = this;
	this.instance.setTransform(487.6,324,1,1,0,0,0,487.6,324);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,359,1280,721);
// library properties:
lib.properties = {
	id: 'C90E61558BFD67478D1D7D8440909C4F',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/dingbu_bg.png?1686725635228", id:"dingbu_bg"},
		{src:"images/Q1_1_zzbg.jpg?1686725635228", id:"Q1_1_zzbg"},
		{src:"images/Q1_1_atlas_P_.png?1686725635177", id:"Q1_1_atlas_P_"},
		{src:"images/Q1_1_atlas_P_2.png?1686725635178", id:"Q1_1_atlas_P_2"},
		{src:"sounds/click.mp3?1686725635228", id:"click"}
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
an.compositions['C90E61558BFD67478D1D7D8440909C4F'] = {
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