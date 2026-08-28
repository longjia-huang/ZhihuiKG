(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q2_2xinzengtishi_atlas_P_", frames: [[0,0,800,486],[0,488,239,79],[241,488,239,79],[482,488,110,113],[0,569,2,21]]}
];


// symbols:



(lib._1提示 = function() {
	this.spriteSheet = ss["Q2_2xinzengtishi_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1304,744);


(lib.haode = function() {
	this.spriteSheet = ss["Q2_2xinzengtishi_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.haode_dj = function() {
	this.spriteSheet = ss["Q2_2xinzengtishi_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_12_zz = function() {
	this.initialize(img.Q4_5_12_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.时间 = function() {
	this.spriteSheet = ss["Q2_2xinzengtishi_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.时间执政 = function() {
	this.spriteSheet = ss["Q2_2xinzengtishi_atlas_P_"];
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


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.haode();
	this.instance.parent = this;
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.haode_dj();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.时间执政();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1.4,14), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(36.1,36.6,1,1,0,0,0,0.7,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},26).wait(1));

	// 图层_1
	this.instance_1 = new lib.时间();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73.4,75.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		_this.end.mouseChildren = false;
		_this.end.addEventListener("click", function () {
			playSound('click');
			window.parent.trivNextPage();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.end = new lib.元件4();
	this.end.name = "end";
	this.end.parent = this;
	this.end.setTransform(275.6,263,0.67,0.67);
	new cjs.ButtonHelper(this.end, 0, 1, 2, false, new lib.元件4(), 3);

	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(97.7,160.5,1,1,0,0,0,36.6,37.6);

	this.instance_1 = new lib._1提示();
	this.instance_1.parent = this;
	this.instance_1.setTransform(9.8,2.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.end}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(9.8,2.5,533.6,324.2), null);


(lib.综合 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_5 = function() {
		window.parent['audio58092' + 'Object'].actionPlay();
		window.parent['audio86213' + 'Object'].actionPlay();
	}
	this.frame_17 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(5).call(this.frame_5).wait(12).call(this.frame_17).wait(1));

	// 图层_2
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(636.1,345.5,1,1,0,0,0,266.8,162.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:360.2,alpha:1},5).to({y:352.9},7).wait(6));

	// 图层_8
	this.instance_1 = new lib.Q4_5_12_zz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18));

	// 图层_4
	this.instance_2 = new lib.Bitmap2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-10,-10);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,1304,744);


// stage content:
(lib.Q2_2xinzengtishi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.综合();
	this.instance.parent = this;
	this.instance.setTransform(421.3,275.7,1,1,0,0,0,421.3,275.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(630,350,1304,744);
// library properties:
lib.properties = {
	id: '04C41341A85F44449B6A861AF6CC8B52',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap2.png?1686556226590", id:"Bitmap2"},
		{src:"images/Q4_5_12_zz.png?1686556226590", id:"Q4_5_12_zz"},
		{src:"images/Q2_2xinzengtishi_atlas_P_.png?1686556226582", id:"Q2_2xinzengtishi_atlas_P_"},
		{src:"sounds/click.mp3?1686556226590", id:"click"}
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
an.compositions['04C41341A85F44449B6A861AF6CC8B52'] = {
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