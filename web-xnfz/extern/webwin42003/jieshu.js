(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"jieshu_atlas_P_", frames: [[796,0,204,205],[507,0,287,286],[760,288,232,231],[760,521,188,187],[0,597,139,142],[0,540,719,55],[623,597,103,50],[141,597,239,79],[382,597,239,79],[0,0,505,505],[969,207,15,19],[969,228,13,17],[950,207,17,21],[929,207,19,23],[507,288,251,250],[796,207,131,75]]}
];


// symbols:



(lib.分百分比 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.椭圆2441拷贝6 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.椭圆2441拷贝8 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.椭圆803 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.A4_4_16jpg_other0520 = function() {
	this.initialize(img.A4_4_16jpg_other0520);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1300,740);


(lib.jieshudi = function() {
	this.initialize(img.jieshudi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.手 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.wenzi = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.xx = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.zhiaol_dj = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.zhidaol = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.矩形6476拷贝4 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.箭头2818拷贝2 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.箭头2818拷贝3 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.箭头2818拷贝 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.箭头2818 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.组2758 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.组57 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(15);
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


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.zhidaol();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.zhiaol_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆803();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,124.8);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.分百分比();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.1,136.8);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.wenzi();
	this.instance.parent = this;
	this.instance.setTransform(0.4,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,479.6,36.7);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆2441拷贝6();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件14, new cjs.Rectangle(0,0,191.5,190.8), null);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.组2758();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(0,0,167.4,166.8), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.矩形6476拷贝4();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.9,336.9);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.手();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,94.7);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AheBeIAAi8IC8AAIAAC8g");
	var mask_graphics_1 = new cjs.Graphics().p("AhdBeIAAi8IC8AAIAAC8g");
	var mask_graphics_2 = new cjs.Graphics().p("AheBeIAAi8IC8AAIAAC8g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:26.8,y:2.9}).wait(1).to({graphics:mask_graphics_1,x:9.1,y:25.5}).wait(1).to({graphics:mask_graphics_2,x:60.4,y:26.3}).wait(1));

	// 图层_1
	this.instance = new lib.xx();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.3,0,18.9,12.4);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆2441拷贝8();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,154.8,154.1), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.组57();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,87.4,50), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.箭头2818();
	this.instance.parent = this;
	this.instance.setTransform(39.9,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},22).wait(11));

	// 图层_3
	this.instance_1 = new lib.箭头2818拷贝();
	this.instance_1.parent = this;
	this.instance_1.setTransform(25.6,0.7,0.667,0.667);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({_off:true},21).wait(8));

	// 图层_4
	this.instance_2 = new lib.箭头2818拷贝2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.5,1.7,0.667,0.667);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({_off:true},21).wait(4));

	// 图层_1
	this.instance_3 = new lib.箭头2818拷贝3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,2,0.667,0.667);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(12).to({_off:false},0).to({_off:true},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(39.9,0,12.6,15.4);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.jieshudi();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_2
	this.instance_1 = new lib.Bitmap1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(-8,-8,1300,740), null);


(lib.内圈圈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件17("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(68,68.4,1,1,0,0,0,68,68.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(139));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,136.1,136.8);


(lib.内圈 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件18("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(62.7,62.4,1,1,0,0,0,62.7,62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.99,scaleY:0.99},14).to({scaleX:1,scaleY:1},15).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,125.4,124.8);


(lib.waiquan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件14();
	this.instance.parent = this;
	this.instance.setTransform(95.7,95.4,1,1,0,0,0,95.7,95.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(330));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,191.5,190.8);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(33.8,24.4,1,1,0,0,180,26.3,7.7);

	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.7,25,1,1,0,0,180,43.7,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(0,0,87.4,50), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(53.7,24.4,1,1,0,0,0,26.3,7.7);

	this.instance_1 = new lib.元件4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(43.7,25,1,1,0,0,0,43.7,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,87.4,50), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件11();
	this.instance.parent = this;
	this.instance.setTransform(37.3,25,1,1,0,0,0,43.7,25);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:45,alpha:1},10).to({x:43.7},6).wait(108));

	// 图层_1
	this.instance_1 = new lib.元件12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(346,25.7,1,1,0,0,0,43.7,25);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:340.2,alpha:1},10).to({x:341.5},6).wait(108));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.4,0,396.1,50.7);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件9("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168.4,168.4,1,1,0,0,0,168.4,168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.93,scaleY:0.93},8).to({scaleX:1,scaleY:1},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.9,336.9);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件13();
	this.instance.parent = this;
	this.instance.setTransform(83.7,82.9,1,1,0,0,0,83.7,83.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-360},163).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,167.4,166.8);


(lib.星星 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件6("single",1);
	this.instance.parent = this;
	this.instance.setTransform(29.2,28.7,1,1,0,0,0,8.4,27.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({x:13.4,y:0.4},6).to({x:-0.1,y:-15.8},23).to({x:-3.4,y:-19.1,alpha:0},12).to({_off:true},2).wait(2));

	// 图层_3
	this.instance_1 = new lib.元件6("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(47.5,29.3,1,1,0,0,0,60.6,27.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({x:65.6,y:0.3},6).to({x:69.4,y:-11.4},23).to({x:74.5,y:-13,alpha:0},12).wait(2));

	// 图层_1
	this.instance_2 = new lib.元件6("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(39.4,26.3,1,1,0,0,0,27.4,7.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:32.4,y:-19.8},6).to({x:35.4,y:-40.3},23).to({y:-42.1,alpha:0},12).to({_off:true},2).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(29.3,19.1,18.9,12.3);


(lib.手_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件7("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(23.4,74.9,1,1,0,0,0,23.4,74.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:23.3,rotation:-11.7,y:75},8).to({regX:23.4,regY:74.8,rotation:1.5,y:74.8},4).to({regY:74.9,rotation:0,y:74.9},7).wait(32));

	// 图层_2
	this.instance_1 = new lib.星星("synched",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.2,45.6,1,1,0,0,0,34.4,16.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).wait(43));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,92.7,94.7);


(lib.光 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(168.4,168.4,1,1,0,0,0,168.4,168.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360,startPosition:12},173).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,336.9,336.9);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5
	this.instance = new lib.手_1();
	this.instance.parent = this;
	this.instance.setTransform(78.2,49.7,1,1,0,0,0,46.4,49);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleY:0.96,y:90.6,alpha:1},10).to({scaleY:1,y:86.9},4).wait(65));

	// 图层_4
	this.instance_1 = new lib.内圈();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.4,77.1,0.26,0.26,0,0,0,62.8,62.4);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,x:77.5},8).to({regX:62.7,scaleX:1,scaleY:1,x:77.4},9).wait(76));

	// 图层_2
	this.instance_2 = new lib.内圈圈();
	this.instance_2.parent = this;
	this.instance_2.setTransform(77.4,77.1,0.26,0.26,0,0,0,68.2,68.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({regX:68,scaleX:1.09,scaleY:1.09},8).to({scaleX:1,scaleY:1},9).wait(81));

	// 图层_3
	this.instance_3 = new lib.元件5();
	this.instance_3.parent = this;
	this.instance_3.setTransform(77.4,77.1,0.26,0.26,0,0,0,77.4,77);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({scaleX:1.09,scaleY:1.09,x:77.5,y:77,alpha:1},8).to({scaleX:1,scaleY:1,x:77.4},9).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57.3,57.1,40.2,40);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_58 = function() {
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		_this.btn.mouseChildren = false;
		_this.btn.addEventListener("click", function () {
			playSound('click');
			window.parent.trivNextPage();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(58).call(this.frame_58).wait(1));

	// 图层_12
	this.btn = new lib.元件19();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(640.7,569.9,0.67,0.67);
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.元件19(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(58).to({_off:false},0).wait(1));

	// 图层_7
	this.instance = new lib.元件16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(639.5,446.9,1.332,1.332,0,0,0,239.7,18.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({regX:239.8,scaleX:0.96,scaleY:0.96,x:639.6,alpha:1},4).to({scaleX:1,scaleY:1},10).wait(1));

	// 图层_5
	this.instance_1 = new lib.元件10("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(639.9,300.3,1,1,0,0,0,192.6,25.3);

	this.instance_2 = new lib.元件11();
	this.instance_2.parent = this;
	this.instance_2.setTransform(491,300,1,1,0,0,0,43.7,25);

	this.instance_3 = new lib.元件12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(788.8,300.7,1,1,0,0,0,43.7,25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},28).to({state:[{t:this.instance_3},{t:this.instance_2}]},23).wait(8));

	// 图层_8
	this.instance_4 = new lib.光();
	this.instance_4.parent = this;
	this.instance_4.setTransform(639.4,300.2,1,1,0,0,0,168.4,168.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({alpha:1},13).wait(21));

	// 图层_4
	this.instance_5 = new lib.元件15("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(639.5,300.1,1,1,0,0,0,77.4,77);

	this.instance_6 = new lib.手_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(640.3,310,1,1,0,0,0,46.4,49);

	this.instance_7 = new lib.内圈();
	this.instance_7.parent = this;
	this.instance_7.setTransform(639.4,300.2,1,1,0,0,0,62.7,62.4);

	this.instance_8 = new lib.内圈圈();
	this.instance_8.parent = this;
	this.instance_8.setTransform(639.4,300.2,1,1,0,0,0,68,68.4);

	this.instance_9 = new lib.元件5();
	this.instance_9.parent = this;
	this.instance_9.setTransform(639.5,300.1,1,1,0,0,0,77.4,77);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},42).wait(17));

	// 图层_6
	this.instance_10 = new lib.元件3();
	this.instance_10.parent = this;
	this.instance_10.setTransform(639.3,299.9,0.594,0.594,0,0,0,83.8,83.4);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(6).to({_off:false},0).to({regX:83.7,scaleX:1.02,scaleY:1.02,x:639.4,y:300.3,alpha:1},15).to({scaleX:1,scaleY:1,y:300.2},8).wait(30));

	// 图层_3
	this.instance_11 = new lib.waiquan();
	this.instance_11.parent = this;
	this.instance_11.setTransform(639.1,299.4,0.594,0.594,0,0,0,95.8,95.4);
	this.instance_11.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({regX:95.7,scaleX:1.02,scaleY:1.02,x:639,alpha:1},15).to({scaleX:1,scaleY:1},8).wait(36));

	// 图层_2
	this.instance_12 = new lib.元件1();
	this.instance_12.parent = this;
	this.instance_12.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},8).wait(51));

	// 图层_10
	this.instance_13 = new lib.A4_4_16jpg_other0520();
	this.instance_13.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(59));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,1300,740);


// stage content:
(lib.jieshu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(632,352,1300,740);
// library properties:
lib.properties = {
	id: '15F80713058BCD4CAB6AFD1E87989D7D',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_16jpg_other0520.jpg?1678872053509", id:"A4_4_16jpg_other0520"},
		{src:"images/Bitmap1.png?1678872053509", id:"Bitmap1"},
		{src:"images/jieshudi.png?1678872053509", id:"jieshudi"},
		{src:"images/jieshu_atlas_P_.png?1678872053469", id:"jieshu_atlas_P_"},
		{src:"sounds/click.mp3?1678872053509", id:"click"}
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
an.compositions['15F80713058BCD4CAB6AFD1E87989D7D'] = {
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