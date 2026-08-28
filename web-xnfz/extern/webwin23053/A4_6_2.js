(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"A4_6_2_atlas_P_", frames: [[316,0,153,158],[0,0,314,279]]}
];


// symbols:



(lib.A4_5_2_1 = function() {
	this.initialize(img.A4_5_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.A4_6_2修改 = function() {
	this.initialize(img.A4_6_2修改);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap2 = function() {
	this.spriteSheet = ss["A4_6_2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["A4_6_2_atlas_P_"];
	this.gotoAndStop(1);
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


(lib.liuxue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgkzATbIGHqrQFuA3BTgyQYqEGR9AkIlMP/gEgoEgSfMAkOgGQQE0GOOTC5QHkDADHEKIpSA1Q22Ar2ICpgAdEmhQhZhkgkgKQnqo2sbiQQoIiUkIn0MAh8AAxILXTOQnKDWimAAQg6AAgXgZg");
	mask.setTransform(193.2,277.6);

	// 图层_2
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(532.6,159.2,1.487,1.487,118.6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62130D").s().p("AgsEgQgog5AXgfQAWgfgOgVQgOgUAAgYIADgeIAHggQAGgZARgmIAAAAQgUAEgUgGQgagIgPgVQgUgbAAgzQABgiAJgSQAIgPAWgWQAZgYAMgIQARgKADgEIAMgRQAMgRASgJQAdA+BQAqQgDALgGAKQANAEAFAMQAGAMgMAYQgLAYAUAXQAVAXgUAPQAKAYgUARQgVAPgMAVQgLAWAOALQAOALgDATQgDAUgGATQgGASgrBhQgcA9gZAAQgPAAgPgVg");
	this.shape.setTransform(309,218.9,1.374,1.374,110.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.liuxue, new cjs.Rectangle(-55.4,89.1,505.1,377.2), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A4_6_2修改();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(569.4,209.1,0.531,0.531,-109.8);

	this.instance_1 = new lib.liuxue();
	this.instance_1.parent = this;
	this.instance_1.setTransform(695.6,151.3,0.475,0.475,165.1,0,0,253.9,268.2);

	this.instance_2 = new lib.A4_5_2_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-24.4,1280,744.4);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio23021' + 'Object'].actionPlay();
	}
	this.frame_58 = function() {
		window.parent['audio23024' + 'Object'].actionPlay();
	}
	this.frame_155 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(57).call(this.frame_58).wait(97).call(this.frame_155).wait(1));

	// 图层_5
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({_off:false},0).to({alpha:1},13).wait(85));

	// 图层_4
	this.instance_1 = new lib.元件5("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(156));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.A4_6_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(318.9,221.2,1,1,0,0,0,318.9,221.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '317A21CB2EDB7047B776C94F3722D9C5',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_5_2_1.jpg?1678341621640", id:"A4_5_2_1"},
		{src:"images/A4_6_2修改.jpg?1678341621640", id:"A4_6_2修改"},
		{src:"images/A4_6_2_atlas_P_.png?1678341621628", id:"A4_6_2_atlas_P_"}
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
an.compositions['317A21CB2EDB7047B776C94F3722D9C5'] = {
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