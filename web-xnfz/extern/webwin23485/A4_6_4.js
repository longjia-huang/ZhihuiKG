(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"A4_6_4_atlas_P_", frames: [[833,205,5,5],[0,0,614,464],[833,162,64,34],[616,81,239,79],[616,0,239,79],[833,198,16,5],[616,162,215,60],[616,224,334,7]]}
];


// symbols:



(lib.椭圆1142拷贝2 = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A4_6_4Jpg_other0356 = function() {
	this.initialize(img.A4_6_4Jpg_other0356);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.caijian2_00000 = function() {
	this.initialize(img.caijian2_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,436,584);


(lib.Q4_6_11tihuan_tips = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_6_11tihuan_zz = function() {
	this.initialize(img.Q4_6_11tihuan_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.TISIWENZ = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie_dj = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.矩形1136拷贝2 = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.矩形1136拷贝4 = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.矩形1136拷贝 = function() {
	this.spriteSheet = ss["A4_6_4_atlas_P_"];
	this.gotoAndStop(7);
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


(lib.珠子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.矩形1136拷贝2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.珠子, new cjs.Rectangle(0,0,10.7,3.4), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgfHAtYMAAAhavMA+PAAAMAAABavg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:216.8,y:300}).wait(1).to({graphics:null,x:0,y:0}).wait(208));

	// 图层_1
	this.instance = new lib.caijian2_00000();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(208));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(17.6,9.6,398.4,574.4);


(lib.小竹子 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆1142拷贝2();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.小竹子, new cjs.Rectangle(0,0,3.4,3.4), null);


(lib.提示头头 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.TISIWENZ();
	this.instance.parent = this;
	this.instance.setTransform(104,9.9,0.667,0.667);

	this.instance_1 = new lib.矩形1136拷贝4();
	this.instance_1.parent = this;
	this.instance_1.setTransform(55.3,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(38));

	// 图层_2
	this.instance_2 = new lib.矩形1136拷贝();
	this.instance_2.parent = this;
	this.instance_2.setTransform(15.6,16.8,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(38));

	// 图层_10 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AKyAZIAAgxIGGAAQAKAAAHAHQAIAIAAAJQAAAKgIAIQgHAHgKAAgAw3AZQgKAAgIgHQgHgIAAgKQAAgJAHgIQAIgHAKAAIGRAAIAAAxg");
	mask.setTransform(126.7,19.2);

	// 图层_9
	this.instance_3 = new lib.珠子();
	this.instance_3.parent = this;
	this.instance_3.setTransform(189.9,19.2,1,1,0,0,0,5.3,1.7);

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:221.6},14).to({x:232.5},7).to({x:240.7},8).to({_off:true},1).wait(8));

	// 图层_4
	this.instance_4 = new lib.珠子();
	this.instance_4.parent = this;
	this.instance_4.setTransform(63.7,19.2,1,1,0,0,0,5.3,1.7);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:29.5},14).to({x:21.3},7).to({x:12},8).to({_off:true},1).wait(8));

	// 图层_5
	this.instance_5 = new lib.小竹子();
	this.instance_5.parent = this;
	this.instance_5.setTransform(9.5,19.4,1,1,0,0,0,1.7,1.7);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({_off:true},8).wait(9));

	// 图层_3
	this.instance_6 = new lib.小竹子();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.9,19.4,1,1,0,0,0,1.7,1.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(29).to({_off:false},0).to({_off:true},8).wait(1));

	// 图层_8
	this.instance_7 = new lib.小竹子();
	this.instance_7.parent = this;
	this.instance_7.setTransform(243.6,19.4,1,1,0,0,0,1.7,1.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(21).to({_off:false},0).to({_off:true},8).wait(9));

	// 图层_7
	this.instance_8 = new lib.小竹子();
	this.instance_8.parent = this;
	this.instance_8.setTransform(251.2,19.4,1,1,0,0,0,1.7,1.7);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(29).to({_off:false},0).to({_off:true},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.6,0,222.8,40);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.提示头头();
	this.instance.parent = this;
	this.instance.setTransform(196.5,37.6,1,1,0,0,0,119.2,20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.Q4_6_11tihuan_tips();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,409.6,309.5), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(897.1,446.4,1,1,0,0,0,205.4,310.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(369));

	// 图层_1
	this.instance_1 = new lib.A4_6_4Jpg_other0356();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(369));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio23438' + 'Object'].actionPlay();
	}
	this.frame_10 = function() {
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		_this.btn.mouseChildren = false;
		_this.btn.addEventListener("click", function () {
			playSound('click');
		window.parent.trivNextPage();
		});
	}
	this.frame_11 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(1).call(this.frame_11).wait(1));

	// 图层_8
	this.btn = new lib.元件2();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(623.6,413.8,0.667,0.667);
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.元件2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(10).to({_off:false},0).to({_off:true},1).wait(1));

	// 图层_4
	this.instance = new lib.元件9();
	this.instance.parent = this;
	this.instance.setTransform(620.9,319.4,1,1,0,0,0,204.8,154.8);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:335.6,alpha:1},5).to({y:334.4},4).to({_off:true},2).wait(1));

	// 图层_3
	this.instance_1 = new lib.Q4_6_11tihuan_zz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},10).wait(1));

	// 图层_7
	this.instance_2 = new lib.元件4("single",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.A4_6_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,726.2);
// library properties:
lib.properties = {
	id: 'F827865B03754D4EAA40F1286A0451D8',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/A4_6_4Jpg_other0356.jpg?1667629103835", id:"A4_6_4Jpg_other0356"},
		{src:"images/caijian2_00000.jpg?1667629103835", id:"caijian2_00000"},
		{src:"images/Q4_6_11tihuan_zz.png?1667629103835", id:"Q4_6_11tihuan_zz"},
		{src:"images/A4_6_4_atlas_P_.png?1667629103817", id:"A4_6_4_atlas_P_"},
		{src:"sounds/click.mp3?1667629103835", id:"click"}
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
an.compositions['F827865B03754D4EAA40F1286A0451D8'] = {
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