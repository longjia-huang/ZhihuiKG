(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"A4_4_5_atlas_P_", frames: [[0,281,153,158],[0,0,314,279],[155,281,219,94]]}
];


// symbols:



(lib.A4_4_4_2Jpg_other0301 = function() {
	this.initialize(img.A4_4_4_2Jpg_other0301);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap2 = function() {
	this.spriteSheet = ss["A4_4_5_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["A4_4_5_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_12_302_1 = function() {
	this.initialize(img.Q4_4_12_302_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q4_4_12_302_4 = function() {
	this.initialize(img.Q4_4_12_302_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.zuo_wzk = function() {
	this.spriteSheet = ss["A4_4_5_atlas_P_"];
	this.gotoAndStop(2);
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


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/ITDIGIqrQazEBXUBMIlrPggEgiZgS3MBEygKNInTUEQ8ZAQ1WEDg");
	mask.setTransform(156.8,280.1);

	// 图层_2
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(486.9,143.9,1.374,1.374,110.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62130D").s().p("AgxFSQgog5AXgfQAXgfgPgVQgOgUAAgYIADgeIAHggQAGgZARgnIAAAAQgTAEgVgGQgagIgPgUQgUgbAAgzQACgiAIgSQAIgPAXgWQAYgYANgIQAQgKAEgEIALgRQAMgRATgJIAHgDIAGgSIAHgTQAFgMAEgHQAMgWAYgLQAXgLAYAEQAQADAMAIQhBgCg3CqQg1CqCOiSQgEALgFAKQANAEAFAMQAFAMgMAYQgLAYAUAXQAVAXgTAOQAJAYgUARQgUAQgMAVQgMAWAOALQAPALgEATQgDAUgGATQgGASgrBhQgbA9gZAAQgQAAgPgVg");
	this.shape.setTransform(298.1,219.6,1.374,1.374,110.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-21.5,94,398.5,372.3), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.zuo_wzk();
	this.instance.parent = this;
	this.instance.setTransform(11.3,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11.3,0,146,62.7);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A46U8MAAAgp3MAx1AAAMAAAAp3g");
	mask.setTransform(433.5,384);

	// 图层_1
	this.instance = new lib.Q4_4_12_302_4();
	this.instance.parent = this;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(274,250.1,319,268);


(lib.血迹 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_7
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62130D").s().p("AgsEPQgog5AXgeQAWgfgOgVQgOgVAAgYIADgdIAHggQAGgZARgmIAAgBQgUAEgUgGQgagIgPgUQgUgbAAgzQABgjAJgSQAIgPAWgVQAZgZAMgHQARgLADgEIAHgJQAiC3BuhxQgDALgGAKQANAEAFANQAGAMgMAYQgLAYAUAWQAVAXgUAPQAKAYgUARQgVAQgMAVQgLAVAOALQAOAMgDATQgDATgGATQgGASgrBhQgcA9gZAAQgPAAgPgVg");
	this.shape.setTransform(59.1,57);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3hotQETmECaFVQB6A/CUB8IGmTPIBmF3IrbCWgAg6xFIDyAuQHgj3CFgsILFU9Ir4NHQh6nYqq23g");
	mask.setTransform(140.2,96.4);

	// 图层_5
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(-52.9,-71.4);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-52.9,-71.4,314.2,279);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(901.8,251.6,1.171,1.171,70.2);

	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(611.8,360.4,1,1,0,0,0,254.2,268.6);

	this.instance_2 = new lib.Q4_4_12_302_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio18139' + 'Object'].actionPlay();
	}
	this.frame_85 = function() {
		window.parent['audio18142' + 'Object'].actionPlay();
	}
	this.frame_215 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(84).call(this.frame_85).wait(130).call(this.frame_215).wait(1));

	// 图层_3
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(760.7,162.8,1,1,0,0,0,73,31.4);
	this.instance.alpha = 0;

	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(441,378.9,1.559,1.559,0,0,0,441,378.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:769.4,alpha:1},7).to({x:766.9},4).wait(64).to({startPosition:0},0).to({x:754.4,alpha:0},8).to({_off:true},1).wait(132));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(116).to({_off:false},0).to({regX:441.1,regY:379,scaleX:1,scaleY:1,x:441.1,y:379,alpha:1},13).wait(87));

	// 图层_1
	this.instance_2 = new lib.元件2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(85).to({_off:false},0).to({alpha:1},12).wait(119));

	// 图层_2
	this.instance_3 = new lib.Bitmap2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(473.3,101.9,1.387,1.387,25.4);

	this.instance_4 = new lib.血迹("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(351.5,452.1,1.595,1.595,71.7,0,0,77.1,65.3);

	this.instance_5 = new lib.A4_4_4_2Jpg_other0301();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).to({state:[]},101).wait(115));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,791.5);


// stage content:
(lib.A4_4_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(322.9,201.5,1,1,0,0,0,322.9,201.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,858.5);
// library properties:
lib.properties = {
	id: 'E36E6D5CC9639E438688B4BD8F6F6852',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_4_2Jpg_other0301.jpg?1677820334607", id:"A4_4_4_2Jpg_other0301"},
		{src:"images/Q4_4_12_302_1.jpg?1677820334607", id:"Q4_4_12_302_1"},
		{src:"images/Q4_4_12_302_4.png?1677820334607", id:"Q4_4_12_302_4"},
		{src:"images/A4_4_5_atlas_P_.png?1677820334593", id:"A4_4_5_atlas_P_"}
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
an.compositions['E36E6D5CC9639E438688B4BD8F6F6852'] = {
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