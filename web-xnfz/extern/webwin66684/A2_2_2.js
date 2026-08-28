(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.A2_2_2_cam01 = function() {
	this.initialize(img.A2_2_2_cam01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam02 = function() {
	this.initialize(img.A2_2_2_cam02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam03 = function() {
	this.initialize(img.A2_2_2_cam03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam04 = function() {
	this.initialize(img.A2_2_2_cam04);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam05 = function() {
	this.initialize(img.A2_2_2_cam05);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam06 = function() {
	this.initialize(img.A2_2_2_cam06);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam07 = function() {
	this.initialize(img.A2_2_2_cam07);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam08 = function() {
	this.initialize(img.A2_2_2_cam08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam09 = function() {
	this.initialize(img.A2_2_2_cam09);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam10 = function() {
	this.initialize(img.A2_2_2_cam10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.A2_2_2_cam11 = function() {
	this.initialize(img.A2_2_2_cam11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Q2_2 = function() {
	this.initialize(img.Q2_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.纱布 = function() {
	this.initialize(img.纱布);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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

	// 图层_1
	this.instance = new lib.Q2_2();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A4KWYMAAAgsvMAwVAAAMAAAAsvg");
	mask.setTransform(417.1,116.9);

	// 图层_1
	this.instance = new lib.纱布();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(262.4,0,309.4,260.1), null);


(lib.jianchaqid = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(536.8,515.3,0.688,0.688,2.7,0,0,376.6,62.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({x:538.4,y:500.8},0).wait(3).to({regX:376.7,scaleX:0.72,scaleY:0.72,x:538.5,y:480.7},0).wait(3).to({regX:376.8,regY:62.3,scaleX:0.75,scaleY:0.75,x:537.7,y:457.5},0).wait(3).to({regX:376.9,regY:62.4,scaleX:0.78,scaleY:0.78,x:540.2,y:437.5},0).wait(3).to({regX:377.1,regY:62.5,scaleX:0.81,scaleY:0.81,x:541.9,y:418.3},0).wait(3).to({regX:377.2,regY:62.6,scaleX:0.88,scaleY:0.88,x:543.5,y:403.9},0).wait(3).to({regY:62.7,scaleX:0.94,scaleY:0.94,x:539.5,y:391.2},0).wait(3).to({x:545.2,y:387.1},0).wait(3).to({regX:377.3,regY:62.8,scaleX:0.97,scaleY:0.97,x:547.7,y:384.7},0).wait(3).to({y:386.3},0).to({_off:true},44).wait(19));

	// 图层_1
	this.instance_1 = new lib.A2_2_2_cam01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(174.5,334.1,0.667,0.667);

	this.instance_2 = new lib.A2_2_2_cam02();
	this.instance_2.parent = this;
	this.instance_2.setTransform(174.5,334.1,0.667,0.667);

	this.instance_3 = new lib.A2_2_2_cam03();
	this.instance_3.parent = this;
	this.instance_3.setTransform(174.5,334.1,0.667,0.667);

	this.instance_4 = new lib.A2_2_2_cam04();
	this.instance_4.parent = this;
	this.instance_4.setTransform(174.5,334.1,0.667,0.667);

	this.instance_5 = new lib.A2_2_2_cam05();
	this.instance_5.parent = this;
	this.instance_5.setTransform(174.5,334.1,0.667,0.667);

	this.instance_6 = new lib.A2_2_2_cam06();
	this.instance_6.parent = this;
	this.instance_6.setTransform(174.5,334.1,0.667,0.667);

	this.instance_7 = new lib.A2_2_2_cam07();
	this.instance_7.parent = this;
	this.instance_7.setTransform(174.5,334.1,0.667,0.667);

	this.instance_8 = new lib.A2_2_2_cam08();
	this.instance_8.parent = this;
	this.instance_8.setTransform(174.5,334.1,0.667,0.667);

	this.instance_9 = new lib.A2_2_2_cam09();
	this.instance_9.parent = this;
	this.instance_9.setTransform(174.5,334.1,0.667,0.667);

	this.instance_10 = new lib.A2_2_2_cam10();
	this.instance_10.parent = this;
	this.instance_10.setTransform(174.5,334.1,0.667,0.667);

	this.instance_11 = new lib.A2_2_2_cam11();
	this.instance_11.parent = this;
	this.instance_11.setTransform(174.5,334.1,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[]},44).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(174.5,334.1,1280.7,720.4);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio4900'+'Object'].actionPlay();
	}
	this.frame_77 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(76).call(this.frame_77).wait(1));

	// 图层_7
	this.instance = new lib.jianchaqid("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(649.2,178.2,1,1,0,0,0,823.8,512);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({startPosition:60},0).to({alpha:0,startPosition:73},13).to({_off:true},1).wait(4));

	// 图层_9
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60).to({_off:false},0).wait(18));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0.3,1280.7,720.4);


// stage content:
(lib.A2_2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(339.2,251.2,1,1,0,0,0,339.2,251.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(639.9,360.3,1280.7,720.4);
// library properties:
lib.properties = {
	id: 'B7E7B191B6302242A76F4DB46D1C2FA3',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A2_2_2_cam01.jpg?1695369619729", id:"A2_2_2_cam01"},
		{src:"images/A2_2_2_cam02.jpg?1695369619729", id:"A2_2_2_cam02"},
		{src:"images/A2_2_2_cam03.jpg?1695369619729", id:"A2_2_2_cam03"},
		{src:"images/A2_2_2_cam04.jpg?1695369619729", id:"A2_2_2_cam04"},
		{src:"images/A2_2_2_cam05.jpg?1695369619729", id:"A2_2_2_cam05"},
		{src:"images/A2_2_2_cam06.jpg?1695369619729", id:"A2_2_2_cam06"},
		{src:"images/A2_2_2_cam07.jpg?1695369619729", id:"A2_2_2_cam07"},
		{src:"images/A2_2_2_cam08.jpg?1695369619729", id:"A2_2_2_cam08"},
		{src:"images/A2_2_2_cam09.jpg?1695369619729", id:"A2_2_2_cam09"},
		{src:"images/A2_2_2_cam10.jpg?1695369619729", id:"A2_2_2_cam10"},
		{src:"images/A2_2_2_cam11.jpg?1695369619729", id:"A2_2_2_cam11"},
		{src:"images/Q2_2.jpg?1695369619729", id:"Q2_2"},
		{src:"images/纱布_.png?1695369619729", id:"纱布"}
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
an.compositions['B7E7B191B6302242A76F4DB46D1C2FA3'] = {
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