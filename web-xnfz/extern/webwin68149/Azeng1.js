(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Azeng1_atlas_P_", frames: [[576,32,61,29],[0,530,206,93],[0,0,574,528],[208,530,239,79],[449,530,239,79],[576,0,63,30]]}
];


// symbols:



(lib.医生 = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A = function() {
	this.initialize(img.A);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.A2_2a1 = function() {
	this.initialize(img.A2_2a1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.A2_2a_1 = function() {
	this.initialize(img.A2_2a_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jijiuxiang = function() {
	this.initialize(img.jijiuxiang);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.kkxinz = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q2_16_00 = function() {
	this.initialize(img.Q2_16_00);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Qzhuyi_tips = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.xueyejia = function() {
	this.initialize(img.xueyejia);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,946,720);


(lib.yiliaojie = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.yiliaojie_dj = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.护士 = function() {
	this.spriteSheet = ss["Azeng1_atlas_P_"];
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


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.医生();
	this.instance.parent = this;
	this.instance.setTransform(301.5,505.9,0.667,0.667);

	this.instance_1 = new lib.kkxinz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(247,484.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_1
	this.instance_2 = new lib.A();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,1280,720), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.A2_2a_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(0,0,1280,720), null);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.护士();
	this.instance.parent = this;
	this.instance.setTransform(400.4,311.9,0.667,0.667);

	this.instance_1 = new lib.kkxinz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(494.1,292.9,0.667,0.667,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_1
	this.instance_2 = new lib.A2_2a1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,1280,720), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q2_16_00();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(0,0,1280,720), null);


(lib.血液天价 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeWXIg/g8Iifj+IqhtCIiRjzQClAACcAmQA8AhBcgzQDxApBHAwQFDA3CyAwQJ9FBGngQIB/APQhFArgaDSQhjgKiPhnQgSAbh5gRQBiBZiYAkQBAAFgfAbQhWBLAIBFIAmgYIgUBEIgJAeIhIDzQhVApAaAoQiNAtgGAaQhfgUgeAWQBzBFAJANQhEAygPAdQhFAjgxgkQhIgJgyguQgHByglgPQgVAEgTAAQiqAAgLkPgAHiQlIgvgTQALAZAkgGgAEVorQgNgJhEgfQjDhejjgTQnSkzhmgNInFjPIEhi9QgZkMCvAyQBWhOBuAZQAYB4DAhUQDeAGBEgrIEbBaIEmBtIFuC/QFDEghtAsQjoDcEwCbIgeAkIBHgRQAxAWA9AVQAHgjADgcQAXCKAUBmQrcjJk+AGg");
	mask.setTransform(771.8,456.9);

	// 图层_1
	this.instance = new lib.xueyejia();
	this.instance.parent = this;
	this.instance.setTransform(15.4,38.9,1.035,1.035,-3);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.血液天价, new cjs.Rectangle(639.1,286.7,265.5,340.4), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AukL2ICTs+IAwm7IC1GXQGZIqEiE/IIIIgI3+CsgAGtFKIk0nPImDnuQhGjzipjyQiArASsKDQKAZEnUAAQh2AAi8hlg");
	mask.setTransform(741.6,352.3);

	// 图层_2
	this.instance = new lib.血液天价();
	this.instance.parent = this;
	this.instance.setTransform(696.5,331.4,0.46,0.445,42.2,0,0,733,460.9);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.jijiuxiang();
	this.instance_1.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1280,720), null);


(lib.zong = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		
		setTimeout(function(){
			window.parent['audio170643'+'Object'].actionPlay();
		},1);
		
		createjs.Touch.enable(stage);
		_this.btn.mouseChildren = false;
		_this.btn.addEventListener("click", function () {
			playSound('click');
			_this.play();
			window.parent['audio170643'+'Object'].actionStop();
		});
	}
	this.frame_1 = function() {
		window.parent['audio68119'+'Object'].actionPlay();
	}
	this.frame_133 = function() {
		this.stop(); 
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(132).call(this.frame_133).wait(1));

	// 图层_11
	this.btn = new lib.元件7();
	this.btn.name = "btn";
	this.btn.parent = this;
	this.btn.setTransform(1063.8,431.3,0.67,0.67);
	new cjs.ButtonHelper(this.btn, 0, 1, 2, false, new lib.元件7(), 3);

	this.timeline.addTween(cjs.Tween.get(this.btn).to({_off:true},1).wait(133));

	// 图层_9
	this.instance = new lib.Qzhuyi_tips();
	this.instance.parent = this;
	this.instance.setTransform(865.4,126.5,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(133));

	// 图层_8
	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(75).to({_off:false},0).to({alpha:1},11).wait(48));

	// 图层_7
	this.instance_2 = new lib.元件4();
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(39).to({_off:false},0).to({alpha:1},12).to({_off:true},39).wait(44));

	// 图层_6
	this.instance_3 = new lib.元件3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,360,1,1,0,0,0,640,360);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},15).wait(58).to({_off:true},5).wait(56));

	// 图层_5
	this.instance_4 = new lib.元件1();
	this.instance_4.parent = this;
	this.instance_4.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},39).wait(95));

	// 图层_1
	this.instance_5 = new lib.元件2();
	this.instance_5.parent = this;
	this.instance_5.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},39).wait(95));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-46.4,1280,766.5);


// stage content:
(lib.Azeng1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.zong();
	this.instance.parent = this;
	this.instance.setTransform(350.9,281.4,1,1,0,0,0,350.9,281.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,313.6,1280,766.5);
// library properties:
lib.properties = {
	id: '64B82CFA67C95A41A428BF0840D069BD',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A.jpg?1695371832404", id:"A"},
		{src:"images/A2_2a1.jpg?1695371832404", id:"A2_2a1"},
		{src:"images/A2_2a_1.jpg?1695371832404", id:"A2_2a_1"},
		{src:"images/jijiuxiang.png?1695371832404", id:"jijiuxiang"},
		{src:"images/Q2_16_00.jpg?1695371832404", id:"Q2_16_00"},
		{src:"images/xueyejia.jpg?1695371832404", id:"xueyejia"},
		{src:"images/Azeng1_atlas_P_.png?1695371832376", id:"Azeng1_atlas_P_"},
		{src:"sounds/click.mp3?1695371832404", id:"click"}
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
an.compositions['64B82CFA67C95A41A428BF0840D069BD'] = {
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