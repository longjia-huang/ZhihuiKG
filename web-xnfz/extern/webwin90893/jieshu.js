(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"jieshu_atlas_P_", frames: [[0,0,167,193],[153,423,62,25],[0,423,151,64],[0,195,220,115],[153,450,29,23],[0,312,199,109]]}
];


// symbols:



(lib.圆柱 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.椭圆2501拷贝3 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.椭圆2501拷贝 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.A4_1_9心电界面 = function() {
	this.initialize(img.A4_1_9心电界面);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,546);


(lib.恭喜你完成院前急救前用物和仪器设备的准备 = function() {
	this.initialize(img.恭喜你完成院前急救前用物和仪器设备的准备);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1361,54);


(lib.Q3_5 = function() {
	this.initialize(img.Q3_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q3_5_wc_zz = function() {
	this.initialize(img.Q3_5_wc_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.底部圆圈 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.箭头 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.组2775 = function() {
	this.spriteSheet = ss["jieshu_atlas_P_"];
	this.gotoAndStop(5);
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


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.恭喜你完成院前急救前用物和仪器设备的准备();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(0,0,907.8,36), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.底部圆圈();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(0,0,146.8,76.7), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆2501拷贝();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,100.7,42.7), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.椭圆2501拷贝3();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,41.4,16.7), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.圆柱();
	this.instance.parent = this;
	this.instance.setTransform(0,9.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,9.5,111.4,128.8), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.组2775();
	this.instance.parent = this;
	this.instance.setTransform(0.5,12.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0.5,12.5,132.8,72.7), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.箭头();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,19.4,15.4), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件5();
	this.instance.parent = this;
	this.instance.setTransform(65.3,71.8,1,1,0,0,0,65.3,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:0.96,y:71.9},7).to({scaleY:1,y:71.8},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,12.5,132.8,72.7);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(9.7,7.7,1,1,0,0,0,9.7,7.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:5.8},7).to({y:7.7},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,15.4);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(65.8,71.8,1,1,0,0,0,65.8,71.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:72.8,startPosition:7},7).to({y:71.8,startPosition:14},7).wait(1));

	// 图层_1
	this.instance_1 = new lib.元件6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(67.7,101,1,1,0,0,0,55.7,64.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:102},7).to({y:101},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.5,12.5,132.8,162.4);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(71.2,50.6,1,1,0,0,0,9.7,7.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26).to({_off:false},0).wait(55));

	// 图层_8
	this.instance_1 = new lib.元件4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(68.4,71.8,0.524,0.524,0,0,0,65.8,71.8);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({_off:false},0).to({scaleX:1,scaleY:1,x:68.3,alpha:1,startPosition:9},9).to({_off:true},1).wait(51));

	// 图层_1
	this.instance_2 = new lib.元件6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(72.3,167.9,0.588,0.588,0,0,0,57.8,121.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_3 = new lib.元件10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(68.8,82.7,1,1,0,0,0,66.3,82.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},6).to({state:[{t:this.instance_2}]},7).to({state:[{t:this.instance_3}]},3).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({regY:121.5,scaleX:1.02,scaleY:1.02,y:158.2,alpha:1},4).to({regY:121.4,scaleX:0.95,scaleY:0.95,y:158.1},6).to({scaleX:1,scaleY:1},7).to({_off:true},3).wait(51));

	// 图层_5
	this.instance_4 = new lib.元件7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(73.4,170.1,0.614,0.614,0,0,0,20.7,8.3);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(6).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,x:73.5,y:166.1,alpha:1},4).to({scaleX:1,scaleY:1,x:73.4,y:166.4},6).wait(65));

	// 图层_6
	this.instance_5 = new lib.元件8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(73.4,170.1,0.614,0.614,0,0,0,50.4,21.4);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(3).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,y:166.1,alpha:1},4).to({scaleX:1,scaleY:1,y:166.4},6).wait(68));

	// 图层_4
	this.instance_6 = new lib.元件9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(73.4,176.1,0.614,0.614,0,0,0,73.3,38.4);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:73.4,scaleX:1.03,scaleY:1.03,x:73.5,alpha:1},4).to({scaleX:1,scaleY:1,x:73.4},6).wait(71));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.3,152.5,90.2,47.2);


(lib.zong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio90884'+'Object'].actionPlay();
	}
	this.frame_117 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(116).call(this.frame_117).wait(1));

	// 图层_3
	this.instance = new lib.元件11();
	this.instance.parent = this;
	this.instance.setTransform(652.9,238.7,1,1,0,0,0,453.9,18);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({_off:false},0).to({y:256.3,alpha:1},8).to({y:253.8},7).wait(83));

	// 图层_2
	this.instance_1 = new lib.元件1("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(638.7,442.1,1,1,0,0,0,73.4,107.2);

	this.instance_2 = new lib.元件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(636.5,385.4,1,1,0,0,0,9.7,7.7);

	this.instance_3 = new lib.元件10();
	this.instance_3.parent = this;
	this.instance_3.setTransform(634.1,417.6,1,1,0,0,0,66.3,82.7);

	this.instance_4 = new lib.元件7();
	this.instance_4.parent = this;
	this.instance_4.setTransform(638.7,501.2,1,1,0,0,0,20.7,8.3);

	this.instance_5 = new lib.元件8();
	this.instance_5.parent = this;
	this.instance_5.setTransform(638.7,501.3,1,1,0,0,0,50.4,21.4);

	this.instance_6 = new lib.元件9();
	this.instance_6.parent = this;
	this.instance_6.setTransform(638.7,510.9,1,1,0,0,0,73.4,38.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},31).wait(87));

	// 图层_1
	this.instance_7 = new lib.Q3_5_wc_zz();
	this.instance_7.parent = this;
	this.instance_7.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(118));

	// 图层_6
	this.instance_8 = new lib.A4_1_9心电界面();
	this.instance_8.parent = this;
	this.instance_8.setTransform(899.4,166.5,0.054,0.054,0,1.1,-3.3);

	this.instance_9 = new lib.Q3_5();
	this.instance_9.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8}]}).wait(118));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


// stage content:
(lib.jieshu = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.zong();
	this.instance.parent = this;
	this.instance.setTransform(524.5,320.5,1,1,0,0,0,524.5,320.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.7,720.4);
// library properties:
lib.properties = {
	id: '03C1A97D8438034E9F63809CF2DC47A9',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_1_9心电界面.jpg?1667531806463", id:"A4_1_9心电界面"},
		{src:"images/恭喜你完成院前急救前用物和仪器设备的准备_.png?1667531806463", id:"恭喜你完成院前急救前用物和仪器设备的准备"},
		{src:"images/Q3_5.jpg?1667531806463", id:"Q3_5"},
		{src:"images/Q3_5_wc_zz.png?1667531806463", id:"Q3_5_wc_zz"},
		{src:"images/jieshu_atlas_P_.png?1667531806438", id:"jieshu_atlas_P_"}
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
an.compositions['03C1A97D8438034E9F63809CF2DC47A9'] = {
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