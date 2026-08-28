(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q2_22_atlas_P_", frames: [[0,0,964,837],[0,839,239,79],[241,839,239,79]]}
];


// symbols:



(lib.Q2_17_4_b = function() {
	this.initialize(img.Q2_17_4_b);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q2_22_TIPS = function() {
	this.spriteSheet = ss["Q2_22_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie = function() {
	this.spriteSheet = ss["Q2_22_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie_dj = function() {
	this.spriteSheet = ss["Q2_22_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_22_TIPS();
	this.instance.parent = this;
	this.instance.setTransform(-78.4,45.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-78.4,45.2,643,558.3);


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


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3("single",0);
	this.instance.parent = this;
	this.instance.setTransform(368.9,278.5,1,1,0,0,0,383.5,279.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:386.5,alpha:1},6).to({x:384},7).to({_off:true},1).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.1,44.6,998.4,558.3);


(lib.ZONG = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio13643' + 'Object'].actionPlay();
	}
	this.frame_13 = function() {
		this.stop();
		
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		_this.jixu.addEventListener('click', function () {
			playSound('click');
			window.parent.trivNextPage();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(12).call(this.frame_13).wait(1));

	// 图层_2
	this.jixu = new lib.元件2();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(640,580.3,0.67,0.67);
	this.jixu._off = true;
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.元件2(), 3);

	this.timeline.addTween(cjs.Tween.get(this.jixu).wait(13).to({_off:false},0).wait(1));

	// 图层_5
	this.instance = new lib.元件1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(1164.3,187.7,1,1,0,0,0,761.5,147.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(14));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94FF6C","#D2F3C6","#66A767"],[0,0.412,1],-1.9,0.5,3.6,1.1).s().p("AgIAlIAAgfIgPgSQAEgBAEgPIALAJIABgUIAbADIgKBMg");
	this.shape.setTransform(443.3,456.9);

	this.instance_1 = new lib.Q2_17_4_b();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Q2_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ZONG();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '8A0D7680B0FF504F8489EEACA7432EFA',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q2_17_4_b.jpg?1686281922243", id:"Q2_17_4_b"},
		{src:"images/Q2_22_atlas_P_.png?1686281922236", id:"Q2_22_atlas_P_"},
		{src:"sounds/click.mp3?1686281922243", id:"click"}
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
an.compositions['8A0D7680B0FF504F8489EEACA7432EFA'] = {
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