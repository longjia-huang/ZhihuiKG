(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Azeng2_atlas_P_", frames: [[0,0,206,93],[0,95,63,30]]}
];


// symbols:



(lib.A2_5_2_camBeauty_other398 = function() {
	this.initialize(img.A2_5_2_camBeauty_other398);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jijiuxiang = function() {
	this.initialize(img.jijiuxiang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.kkxinz = function() {
	this.spriteSheet = ss["Azeng2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q2_16_4Beauty_other401 = function() {
	this.initialize(img.Q2_16_4Beauty_other401);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q2_17_2 = function() {
	this.initialize(img.Q2_17_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.护士 = function() {
	this.spriteSheet = ss["Azeng2_atlas_P_"];
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


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C3D9B1","#88B354","#C9E5A8"],[0,0.463,1],-2.1,-0.2,2.1,-0.2).s().p("AgQAqIgOgwIAPgVIAQAhIADg3IAbADIgLBaQgMAGgIAAQgKAAgGgIg");
	this.shape.setTransform(374.9,539.1);

	this.instance = new lib.Q2_17_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,-46.4,1280,766.5), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.护士();
	this.instance.parent = this;
	this.instance.setTransform(104.9,37.1,0.667,0.667);

	this.instance_1 = new lib.kkxinz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(197.1,16.3,0.667,0.667,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(59.7,16.3,137.4,62.1);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_16_4Beauty_other401();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.zong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio68508'+'Object'].actionPlay();
	}
	this.frame_144 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(143).call(this.frame_144).wait(1));

	// 图层_6
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(466,580.6,0.839,0.839,0,0,0,185.5,31);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:1.07,scaleY:1.07,y:580.7,alpha:1},5).to({scaleX:1,scaleY:1,y:580.6},8).wait(60).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(39));

	// 图层_2
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).to({alpha:1},12).wait(77).to({startPosition:0},0).to({alpha:0},7).to({_off:true},1).wait(39));

	// 图层_5
	this.instance_2 = new lib.jijiuxiang();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(98).to({_off:false},0).wait(47));

	// 图层_1
	this.instance_3 = new lib.A2_5_2_camBeauty_other398();
	this.instance_3.parent = this;

	this.instance_4 = new lib.元件3();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,360,1,1,0,0,0,640,360);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#94FF6C","#D2F3C6","#66A767"],[0,0.412,1],-2.1,0.8,2.5,0.8).s().p("AgLgGIgJgHIAHgXIALAUIACgiIAVACIgMBjIgXAAg");
	this.shape.setTransform(374.7,539);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.shape},{t:this.instance_4}]},98).wait(47));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Azeng2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.zong();
	this.instance.parent = this;
	this.instance.setTransform(350.9,281.4,1,1,0,0,0,350.9,281.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '14EE7B3B9CB6314EB1EEEAADAE106BC6',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A2_5_2_camBeauty_other398.jpg?1690350881737", id:"A2_5_2_camBeauty_other398"},
		{src:"images/jijiuxiang.png?1690350881737", id:"jijiuxiang"},
		{src:"images/Q2_16_4Beauty_other401.jpg?1690350881737", id:"Q2_16_4Beauty_other401"},
		{src:"images/Q2_17_2.jpg?1690350881737", id:"Q2_17_2"},
		{src:"images/Azeng2_atlas_P_.png?1690350881727", id:"Azeng2_atlas_P_"}
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
an.compositions['14EE7B3B9CB6314EB1EEEAADAE106BC6'] = {
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