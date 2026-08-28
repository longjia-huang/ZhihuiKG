(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q2_17_atlas_P_", frames: [[0,0,924,887]]},
		{name:"Q2_17_atlas_P_2", frames: [[548,638,239,79],[548,719,239,79],[0,800,239,79],[241,800,239,79],[580,0,399,520],[548,522,262,114],[0,425,546,373],[0,0,578,423],[723,800,239,79],[482,800,239,79]]}
];


// symbols:



(lib.A2_5_2_camBeauty_other392 = function() {
	this.initialize(img.A2_5_2_camBeauty_other392);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jixu = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q2_17_bg = function() {
	this.initialize(img.Q2_17_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1710,521);


(lib.Q2_17_biaoti = function() {
	this.initialize(img.Q2_17_biaoti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1417,138);


(lib.Q2_17_dj_ = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q2_17_zq = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q2_17_zz = function() {
	this.initialize(img.Q2_17_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Q2_17jiexi_bg = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q2_17jiexi_zz = function() {
	this.initialize(img.Q2_17jiexi_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Q2_18_texiekuang = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_6_3_3 = function() {
	this.initialize(img.Q4_6_3_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.提示01 = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.返回_点击 = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.返回默认 = function() {
	this.spriteSheet = ss["Q2_17_atlas_P_2"];
	this.gotoAndStop(9);
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


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.返回默认();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.返回_点击();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AwjU0Qg4AAAAg4MAAAgi5QAAg4A4AAMAx7AAAQA4AAAAA4MAAAAi5QAAA4g4AAg");
	mask.setTransform(219.2,133.2);

	// 图层_1
	this.instance = new lib.Q4_6_3_3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.47,0.47);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件13, new cjs.Rectangle(107.7,31.8,330.8,234.6), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.instance = new lib.Q2_17_zq();
	this.instance.parent = this;
	this.instance.setTransform(-196,-57);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-196,-57,262,114), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(158,158,163,0.02)").s().p("A0zbjMAAAg3FMApnAAAMAAAA3Fg");
	this.shape.setTransform(-0.7,147.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133.9,-29.1,266.4,352.6);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_17_dj_();
	this.instance.parent = this;
	this.instance.setTransform(-199.5,-260);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-199.5,-260,399,520), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_17jiexi_bg();
	this.instance.parent = this;
	this.instance.setTransform(-459.6,-568.5);

	this.instance_1 = new lib.Q2_17jiexi_zz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-642.7,-779.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-642.7,-779.7,1920,1098.2), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_17_zz();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4gf4MAAAg/vMAxBAAAMAAAA/vg");
	var mask_graphics_1 = new cjs.Graphics().p("A21f4MAAAg/vMAtrAAAMAAAA/vg");
	var mask_graphics_2 = new cjs.Graphics().p("A21f4MAAAg/vMAtrAAAMAAAA/vg");
	var mask_graphics_3 = new cjs.Graphics().p("A21f4MAAAg/vMAtrAAAMAAAA/vg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:119.2,y:168.8}).wait(1).to({graphics:mask_graphics_1,x:421.1,y:168.8}).wait(1).to({graphics:mask_graphics_2,x:714.8,y:168.8}).wait(1).to({graphics:mask_graphics_3,x:1008.5,y:168.8}).wait(1));

	// 图层_1
	this.instance = new lib.Q2_17_bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,276.1,347.5);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_17_biaoti();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,945.2,92.1), null);


(lib.水滴2复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.62)").s().p("AgYA7QgLgTAKgbIAUg0IAMgiQAEgJAJAZQAKAaAAAjQAAAkgIASQgJASgNABIgBAAQgNAAgKgSg");
	this.shape.setTransform(4.2,-0.4,0.415,0.418,0,-6,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.62)").s().p("AgIAaQgGgIADgNIAGgWQADgLACgDQAAgEAFALQAGALABAPQACAQgDAIQgDAGgFABIgBABQgFAAgFgIg");
	this.shape_1.setTransform(4.4,0.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.62)").s().p("AgJAbQgGgIAEgNIAGgXIAFgQQAAgEAFAMQAGALACAQQABARgCAIQgDAIgHAAIAAAAQgFAAgGgIg");
	this.shape_2.setTransform(4.5,0.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.62)").s().p("AgJAcQgGgJADgNIAHgZIAFgQQAAgEAGAMQAGAMACARQABARgDAJQgDAIgGABIgBAAQgFAAgGgJg");
	this.shape_3.setTransform(4.5,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.62)").s().p("AgJAdQgHgJAEgOIAGgaIAGgQQAAgFAGANQAGANACARQACASgDAJQgEAJgGAAIgBAAQgGAAgFgJg");
	this.shape_4.setTransform(4.6,1.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.62)").s().p("AgKAfQgHgKAEgOIAHgbIAGgSQAAgFAGAOQAHANACASQABATgDAJQgDAJgHABIgBAAQgFAAgHgJg");
	this.shape_5.setTransform(4.7,2.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(255,255,255,0.62)").s().p("AgLAgQgHgKAEgPIAIgcIAFgTQABgFAGAOQAHAOACATQACAUgDAKQgEAJgIABIAAAAQgGAAgHgKg");
	this.shape_6.setTransform(4.8,3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(255,255,255,0.62)").s().p("AgLAhQgHgKAEgQIAIgdIAGgTQAAgFAHAOQAHAPACATQACAVgDAKQgEAKgIABIgBAAQgGAAgHgLg");
	this.shape_7.setTransform(4.9,3.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(255,255,255,0.62)").s().p("AgLAjQgIgLAEgQIAIgfIAGgUQABgFAHAPQAHAPACAUQADAWgEAKQgEALgIAAIgBAAQgGAAgHgKg");
	this.shape_8.setTransform(5,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(255,255,255,0.62)").s().p("AgLAkQgJgMAFgQIAIggIAHgVQAAgFAIAPQAHAQACAVQADAWgEALQgFALgIABIgBAAQgGAAgHgLg");
	this.shape_9.setTransform(5,4.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.62)").s().p("AgMAlQgJgMAFgRIAJggIAGgWQABgGAIAQQAHARADAWQACAWgEAMQgEALgJABIgBAAQgGAAgIgMg");
	this.shape_10.setTransform(5.1,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(255,255,255,0.62)").s().p("AgNAmQgJgMAFgSIAJgiIAHgWQABgGAIARQAIARACAWQADAYgEAMQgFALgJABIgBAAQgGAAgJgMg");
	this.shape_11.setTransform(5.3,7);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(255,255,255,0.62)").s().p("AgUAiQgLgLAFgQQAFgPAHgPQAIgPAFgEQAEgFANAOQANAPAAAUQAAAVgHAKQgHAKgNABIgBAAQgKAAgLgKg");
	this.shape_12.setTransform(5.8,21.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(255,255,255,0.62)").s().p("AgcAeQgPgKAGgOQAFgOALgMQALgMAIgEQAHgEASAMQASAMgCASQgDATgKAIQgKAIgQABIgCAAQgOAAgMgIg");
	this.shape_13.setTransform(5.9,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.62)").s().p("AgkAZQgRgIAGgNQAGgLANgLQAOgKALgCQAKgEAYAKQAXAKgFAPQgFARgNAHQgNAGgTABIgEAAQgRAAgOgHg");
	this.shape_14.setTransform(5.9,22.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(255,255,255,0.62)").s().p("AgtAUQgTgHAGgLQAHgJAQgIQAQgIAPgCQANgCAdAHQAcAHgIAOQgHAOgPAFQgQAFgXABIgFAAQgUAAgRgGg");
	this.shape_15.setTransform(5.9,23.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.62)").s().p("Ag1AQQgWgGAHgJQAHgIATgFQATgGATgBQAQgBAhAFQAhAEgKAMQgKAMgSADQgSADgaABIgMAAQgUAAgRgEg");
	this.shape_16.setTransform(5.9,24.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(255,255,255,0.62)").s().p("Ag9AVQgYgHAGgOQAHgNAXgHQAWgGAVgBQAUAAAmAFQAmAFgMARQgMASgWAEQgVADgeACIgMABQgXAAgTgHg");
	this.shape_17.setTransform(5.9,24.8,1,0.527);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(255,255,255,0.494)").s().p("Ag9AOQgZgFAHgJQAHgIAXgEQAWgEAVAAQAUAAAmADQAmADgMAKQgNALgVADQgVACgeABIgPAAQgVAAgSgDg");
	this.shape_18.setTransform(6,25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(255,255,255,0.373)").s().p("Ag9AQQgZgGAHgKQAHgJAXgFQAWgEAVAAQAUgBAmAEQAmADgMAMQgNANgVADQgVACgeABIgQABQgVAAgRgEg");
	this.shape_19.setTransform(6.1,25.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(255,255,255,0.247)").s().p("Ag9ASQgZgHAHgLQAHgKAXgGQAWgFAVAAQAUgBAmAFQAmADgMAOQgNAPgVADIgzAEIgMAAQgXAAgTgEg");
	this.shape_20.setTransform(6.3,25.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(255,255,255,0.125)").s().p("Ag9AUQgZgIAHgMQAHgMAXgGQAWgGAVAAQAUAAAmAEQAmAEgMAQQgNARgVADQgVADgeACIgNAAQgXAAgSgFg");
	this.shape_21.setTransform(6.4,25.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(255,255,255,0)").s().p("Ag9AVQgYgHAGgOQAHgNAXgHQAWgGAVgBQAUAAAmAFQAmAFgMARQgMASgWAEQgVADgeACIgMABQgXAAgTgHg");
	this.shape_22.setTransform(6.4,25.6,0.999,0.999);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape,p:{scaleX:0.415,scaleY:0.418,x:4.2,y:-0.4}}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape,p:{scaleX:0.656,scaleY:0.659,x:5,y:5.8}}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape,p:{scaleX:0.656,scaleY:0.659,x:5.7,y:20.7}}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(13).to({_off:false},0).wait(1).to({y:8.3},0).wait(1).to({x:5.4,y:9.5},0).wait(1).to({x:5.5,y:10.8},0).wait(1).to({y:12},0).wait(1).to({x:5.6,y:13.3},0).wait(1).to({y:14.5},0).wait(1).to({x:5.7,y:15.7},0).wait(1).to({x:5.8,y:17},0).wait(1).to({y:18.2},0).wait(1).to({x:5.9,y:19.5},0).to({_off:true},1).wait(12));

	// 图层_2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(255,255,255,0.267)").s().p("AhFALQgdgEAAgHQAAgGAdgFQAdgEAoAAQApAAAdAEQAdAFAAAGQAAAHgdAEQgdAFgpABQgogBgdgFg");
	this.shape_23.setTransform(5.6,25.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(36));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.3,23.8,19.8,3.3);


(lib.动画1复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_4
	this.go1 = new lib.元件15();
	this.go1.name = "go1";
	this.go1.parent = this;
	this.go1.setTransform(347.1,618.6,0.67,0.67);
	new cjs.ButtonHelper(this.go1, 0, 1, 2, false, new lib.元件15(), 3);

	this.instance = new lib.提示01();
	this.instance.parent = this;
	this.instance.setTransform(156.8,395.1,0.67,0.67);

	this.instance_1 = new lib.水滴2复制3();
	this.instance_1.parent = this;
	this.instance_1.setTransform(762.2,510.3,2.163,2.163,0,0,0,3.4,8.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.go1}]}).wait(1));

	// 图层_2
	this.instance_2 = new lib.元件13();
	this.instance_2.parent = this;
	this.instance_2.setTransform(818.9,557.9,1.21,1.21,0,0,0,300.7,169.2);

	this.instance_3 = new lib.Q2_18_texiekuang();
	this.instance_3.parent = this;
	this.instance_3.setTransform(553.5,382.7,0.807,0.807);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	// 图层_1
	this.instance_4 = new lib.A2_5_2_camBeauty_other392();
	this.instance_4.parent = this;
	this.instance_4.setTransform(4.1,126.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(4.1,126.2,1280,720);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件2("single",0);
	this.instance.parent = this;
	this.instance.setTransform(126.3,173.6,1,1,0,0,0,126.3,161.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:159.5,alpha:1},7).to({y:161.5},5).wait(79));

	// 图层_2
	this.instance_1 = new lib.元件2("single",1);
	this.instance_1.parent = this;
	this.instance_1.setTransform(126.3,173.6,1,1,0,0,0,126.3,161.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(4).to({_off:false},0).to({y:159.5,alpha:1},7).to({y:161.5},5).wait(75));

	// 图层_4
	this.instance_2 = new lib.元件2("single",2);
	this.instance_2.parent = this;
	this.instance_2.setTransform(126.3,173.6,1,1,0,0,0,126.3,161.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({y:159.5,alpha:1},7).to({y:161.5},5).wait(71));

	// 图层_3
	this.instance_3 = new lib.元件2("single",3);
	this.instance_3.parent = this;
	this.instance_3.setTransform(126.3,173.6,1,1,0,0,0,126.3,161.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).to({y:159.5,alpha:1},7).to({y:161.5},5).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,12.1,276.1,347.5);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_17 = function() {
		window.parent['audio12167' + 'Object'].actionPlay();
	}
	this.frame_32 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		_this.jiexi.visible = false;
		_this.mc.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0007 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			0: '未回答',
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D'
		}
		
		var curNum = 0;
		var flag = true;
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
					window.parent['audio12167' + 'Object'].actionStop();
					stopSound('music1');
					if (curNum == 1) {
						_this.daan.visible = true;
						_this.jiexi.visible = true;
						_this.jixu.visible = true;
						_this.queding.visible = false;
						playSound('correct');
						playSound('music2');
						for (var i = 1; i <= btnNum; i++) {
							_this['btn_' + i].visible = false;
						}
					} else {
						playSound('music1');
						_this.mc.visible = true;
					}
					if (flag) {
						win.VarQuestion_0007.set(answerArr[curNum]);
						flag = false;
					}
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				} else if (e.target.name.indexOf("go1") >= 0) {
					stopSound('music1');
					playSound('click');
					_this.mc.visible = false;
				}
			}
		});
		
		function stopSound(id, loop) {
			return createjs.Sound.stop(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(17).call(this.frame_17).wait(15).call(this.frame_32).wait(1));

	// 图层_11
	this.mc = new lib.动画1复制();
	this.mc.name = "mc";
	this.mc.parent = this;
	this.mc.setTransform(309.9,98.7,1,1,0,0,0,313.9,224.9);
	this.mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(32).to({_off:false},0).wait(1));

	// 图层_9
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(858.4,665.9,0.667,0.667);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(422.5,665.9,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.jixu},{t:this.daan}]},32).wait(1));

	// 图层_10
	this.jiexi = new lib.元件6();
	this.jiexi.name = "jiexi";
	this.jiexi.parent = this;
	this.jiexi.setTransform(428,520.3,0.667,0.667);
	this.jiexi._off = true;

	this.timeline.addTween(cjs.Tween.get(this.jiexi).wait(32).to({_off:false},0).wait(1));

	// 图层_6
	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.btn_4 = new lib.元件8();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(1077.4,243.7);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_3 = new lib.元件8();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(790.6,243.7);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_2 = new lib.元件8();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(486.6,243.7);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_1 = new lib.元件8();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(204.5,243.7);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件8(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.queding}]},32).wait(1));

	// 图层_7
	this.show1 = new lib.元件7();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(204.5,391.7,0.667,0.667,0,0,0,0.1,0.1);

	this.show2 = new lib.元件7();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(487,391.8,0.667,0.667,0,0,0,0.1,0.1);

	this.show3 = new lib.元件7();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(787.4,391.8,0.667,0.667,0,0,0,0.1,0.1);

	this.show4 = new lib.元件7();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(1078.1,391.7,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show4},{t:this.show3},{t:this.show2},{t:this.show1}]},32).wait(1));

	// 图层_5
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(662.3,123.4,1,1,0,0,0,472.6,46);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:132.2,alpha:1},7).to({y:130.6},5).wait(21));

	// 图层_4
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(622.6,387,1,1,0,0,0,551.5,168.8);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).wait(26));

	// 图层_2
	this.instance_2 = new lib.元件4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},12).wait(21));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


// stage content:
(lib.Q2_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.7,720.4);
// library properties:
lib.properties = {
	id: '432F8B650891FD4CA10E19623246B413',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A2_5_2_camBeauty_other392.jpg?1724211771236", id:"A2_5_2_camBeauty_other392"},
		{src:"images/Q2_17_bg.png?1724211771236", id:"Q2_17_bg"},
		{src:"images/Q2_17_biaoti.png?1724211771236", id:"Q2_17_biaoti"},
		{src:"images/Q2_17_zz.png?1724211771236", id:"Q2_17_zz"},
		{src:"images/Q2_17jiexi_zz.png?1724211771236", id:"Q2_17jiexi_zz"},
		{src:"images/Q4_6_3_3.jpg?1724211771236", id:"Q4_6_3_3"},
		{src:"images/Q2_17_atlas_P_.png?1724211771200", id:"Q2_17_atlas_P_"},
		{src:"images/Q2_17_atlas_P_2.png?1724211771201", id:"Q2_17_atlas_P_2"},
		{src:"sounds/click.mp3?1724211771236", id:"click"},
		{src:"sounds/correct.mp3?1724211771236", id:"correct"},
		{src:"sounds/music1.mp3?1724211771236", id:"music1"},
		{src:"sounds/music2.mp3?1724211771236", id:"music2"}
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
an.compositions['432F8B650891FD4CA10E19623246B413'] = {
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