(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"NurseA_tishi_new_atlas_P_", frames: [[0,0,784,872]]},
		{name:"NurseA_tishi_new_atlas_P_2", frames: [[369,209,251,200],[388,0,251,200],[641,0,239,79],[622,202,239,79],[0,411,669,31],[0,209,367,188],[0,0,386,207]]}
];


// symbols:



(lib.A3_4_1qian_tishibgc = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1298,738);


(lib.HUSHIB = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HUSHIC = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie_dj = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.患者入院后护理组长根据患者病情进行人员人工_ = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.组822 = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.组846 = function() {
	this.spriteSheet = ss["NurseA_tishi_new_atlas_P_2"];
	this.gotoAndStop(6);
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


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-7,-7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-7,-7,1298,738), null);


(lib.元件7 = function(mode,startPosition,loop) {
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


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A3_4_1qian_tishibgc();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,522.9,581.6);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.患者入院后护理组长根据患者病情进行人员人工_();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,446.2,20.7);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.HUSHIC();
	this.instance.parent = this;
	this.instance.setTransform(0,-6.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-6.6,167.4,133.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.HUSHIB();
	this.instance.parent = this;
	this.instance.setTransform(0,-4.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-4.7,167.4,133.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.组846();
	this.instance.parent = this;
	this.instance.setTransform(-81,5.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-81,5.5,257.5,138.1);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.元件5("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(263.4,94.1,1,1,0,0,0,223.1,10.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({y:99.7,alpha:1},7).to({y:98.1},4).to({_off:true},32).wait(38));

	// 图层_5
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(140.3,387.7,1,1,0,0,0,83.7,66.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(32).to({_off:false},0).to({y:382.9,alpha:1},7).to({y:383.7},4).to({_off:true},9).wait(38));

	// 图层_6
	this.instance_2 = new lib.元件4("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(380.7,387.7,1,1,0,0,0,83.7,66.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(37).to({_off:false},0).to({y:382.9,alpha:1},7).to({y:383.7},4).to({_off:true},4).wait(38));

	// 图层_1
	this.instance_3 = new lib.元件2("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(261.5,174.3,0.614,0.614,0,0,0,50,49.3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({regY:49.4,scaleX:1.11,scaleY:1.11,y:174.4,alpha:1},7).to({scaleX:1,scaleY:1,y:174.3},4).to({_off:true},26).wait(38));

	// 图层_7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_22 = new cjs.Graphics().p("APyQKMAAAggTIGKAAMAAAAgTg");
	var mask_graphics_23 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_24 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_25 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_26 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_27 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_28 = new cjs.Graphics().p("AjEQKMAAAggTIGJAAMAAAAgTg");
	var mask_graphics_29 = new cjs.Graphics().p("AmUQKMAAAggTIMpAAMAAAAgTg");
	var mask_graphics_30 = new cjs.Graphics().p("ApkQKMAAAggTITJAAMAAAAgTg");
	var mask_graphics_31 = new cjs.Graphics().p("As0QKMAAAggTIZpAAMAAAAgTg");
	var mask_graphics_32 = new cjs.Graphics().p("AwEQKMAAAggTMAgJAAAMAAAAgTg");
	var mask_graphics_33 = new cjs.Graphics().p("AzUQKMAAAggTMAmoAAAMAAAAgTg");
	var mask_graphics_34 = new cjs.Graphics().p("AtcV0MAAAggTMAtIAAAMAAAAgTg");
	var mask_graphics_35 = new cjs.Graphics().p("A2kQKMAAAggTMAtIAAAMAAAAgTg");
	var mask_graphics_36 = new cjs.Graphics().p("A2kQKMAAAggTMAtIAAAMAAAAgTg");
	var mask_graphics_37 = new cjs.Graphics().p("A2kQKMAAAggTMAtIAAAMAAAAgTg");
	var mask_graphics_38 = new cjs.Graphics().p("A2kQKMAAAggTMAtIAAAMAAAAgTg");
	var mask_graphics_39 = new cjs.Graphics().p("AtceLMAAAggTMAtIAAAMAAAAgTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(22).to({graphics:mask_graphics_22,x:140.4,y:100.2}).wait(1).to({graphics:mask_graphics_23,x:261.2,y:112.8}).wait(1).to({graphics:mask_graphics_24,x:261.2,y:125.4}).wait(1).to({graphics:mask_graphics_25,x:261.2,y:138}).wait(1).to({graphics:mask_graphics_26,x:261.2,y:150.6}).wait(1).to({graphics:mask_graphics_27,x:261.2,y:163.2}).wait(1).to({graphics:mask_graphics_28,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_29,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_30,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_31,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_32,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_33,x:261.2,y:175.8}).wait(1).to({graphics:mask_graphics_34,x:202.8,y:139.6}).wait(1).to({graphics:mask_graphics_35,x:261.2,y:197.2}).wait(1).to({graphics:mask_graphics_36,x:261.2,y:218.6}).wait(1).to({graphics:mask_graphics_37,x:261.2,y:240}).wait(1).to({graphics:mask_graphics_38,x:261.2,y:261.4}).wait(1).to({graphics:mask_graphics_39,x:202.8,y:193.1}).wait(13).to({graphics:null,x:0,y:0}).wait(38));

	// 图层_4
	this.instance_4 = new lib.组822();
	this.instance_4.parent = this;
	this.instance_4.setTransform(139.1,221.3,0.667,0.667);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(22).to({_off:false},0).to({_off:true},30).wait(38));

	// 图层_2
	this.instance_5 = new lib.元件6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(261.4,262.1,1,1,0,0,0,261.4,257.4);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:254.3,alpha:1},6).to({y:257.4},6).to({_off:true},40).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,4.7,522.9,581.6);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio104410' + 'Object'].actionPlay();
	}
	this.frame_51 = function() {
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		_this.btn.mouseChildren = false;
		_this.btn.addEventListener("click", function () {
			playSound('click');
			window.parent.trivNextPage();
		
		});
	}
	this.frame_54 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(50).call(this.frame_51).wait(3).call(this.frame_54).wait(1));

	// 图层_3
	this.btn = new lib.元件7();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(665.8,591.6,0.67,0.67);
	this.btn._off = true;
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.元件7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(51).to({_off:false},0).wait(4));

	// 图层_2
	this.instance = new lib.元件1("synched",0,false);
	this.instance.parent = this;
	this.instance.setTransform(662.6,343.7,1,1,0,0,0,261.4,257.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51).to({mode:"single",startPosition:51},0).wait(4));

	// 图层_6
	this.instance_1 = new lib.元件9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7,-7,1298,738);


// stage content:
(lib.NurseA_tishi_new = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(462.8,331.4,1,1,0,0,0,462.8,331.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(633,353,1298,738);
// library properties:
lib.properties = {
	id: '2EC1AA0F88A14948B4CFDA9C0B0F9D17',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1677747922770", id:"Bitmap1"},
		{src:"images/NurseA_tishi_new_atlas_P_.png?1677747922751", id:"NurseA_tishi_new_atlas_P_"},
		{src:"images/NurseA_tishi_new_atlas_P_2.png?1677747922751", id:"NurseA_tishi_new_atlas_P_2"},
		{src:"sounds/click.mp3?1677747922770", id:"click"}
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
an.compositions['2EC1AA0F88A14948B4CFDA9C0B0F9D17'] = {
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