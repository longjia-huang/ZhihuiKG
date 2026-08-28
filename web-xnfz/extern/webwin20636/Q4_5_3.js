(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_5_3_atlas_P_", frames: [[0,0,750,381],[0,766,791,159],[0,383,750,381]]},
		{name:"Q4_5_3_atlas_P_2", frames: [[861,162,44,74],[482,146,114,122],[689,216,51,51],[683,0,239,79],[0,135,239,79],[924,0,52,258],[241,135,239,79],[683,81,239,79],[531,0,150,144],[0,0,529,133],[598,162,89,120],[689,162,170,52],[742,216,38,36]]}
];


// symbols:



(lib.血液 = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A4_4_9_2 = function() {
	this.initialize(img.A4_4_9_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.anniu = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.kedu = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_cw = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_sd = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_tips = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_ts = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_tuodong = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_tuodongts = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_3_zq = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.qiu = function() {
	this.spriteSheet = ss["Q4_5_3_atlas_P_2"];
	this.gotoAndStop(12);
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

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q4_5_3_zq();
	this.instance.parent = this;
	this.instance.setTransform(-375,-190.5);

	this.instance_1 = new lib.Q4_5_3_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-375,-190.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-375,-190.5,750,381);


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


(lib.tbb21_569_88670 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAPQgFgHAAgIQAAgIAFgFQAGgHAIAAQAIAAAHAHQAFAFAAAIQAAAIgFAHQgHAFgIABQgIgBgGgFg");
	this.shape.setTransform(31.1,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgZAaQgLgLAAgPQAAgOALgLQALgLAOAAQAPAAALALQALALAAAOQAAAPgLALQgLAKgPAAQgOAAgLgKg");
	this.shape_1.setTransform(27.7,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("ACiihQBDBDAABeQAABfhDBDQhDBDhfAAQheAAhDhDQhDhDAAhfQAAheBDhDQBDhDBeAAQBfAABDBDg");
	this.shape_2.setTransform(22.9,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(163,254,244,0.302)").s().p("AihCiQhDhDAAhfQAAheBDhDQBDhDBeAAQBfAABDBDQBDBDAABeQAABfhDBDQhDBDhfAAQheAAhDhDg");
	this.shape_3.setTransform(22.9,22.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,47.8,47.8);


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


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.qiu();
	this.instance.parent = this;
	this.instance.setTransform(656.1,241.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(656.1,241.2,38,36), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.anniu();
	this.instance.parent = this;
	this.instance.setTransform(-58.3,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-58.3,-60,114,122), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_3_sd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(0,0,100.1,96.1), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_3_ts();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(0,0,352.9,88.7), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_5_3_tuodong();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(0,0,59.4,80.1), null);


(lib.血滴 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.血液();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.4,49.4);


(lib.左下角提示3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AjeDfQhdhdAAiCQAAiCBdhcQBdhdCBAAQCDAABcBdQBcBcAACCQAACChcBdIgLALIgBABQhZBQh6AAQiBAAhdhcg");
	mask.setTransform(42.5,52.5);

	// 图层_2
	this.instance = new lib.血滴("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(43.1,53.3,1,1,0,0,0,14.7,24.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},6).wait(15).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},6).wait(16).to({startPosition:0},0).to({scaleX:1.1,scaleY:1.1},9).to({scaleX:1,scaleY:1},6).wait(9));

	// 图层_7
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,88,80,0)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,9.5).s().p("AhCBDQgbgbgBgoQABgmAbgbQAcgcAmAAQAnAAAcAcQAbAbABAmQgBAogbAbQgcAcgnAAQgmAAgcgcg");
	this.shape.setTransform(42.3,53.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(255,100,93,0.051)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,11.4).s().p("AhPBQQggghgBgvQABguAgghQAiggAtAAQAvAAAhAgQAgAhAAAuQAAAvggAhQghAhgvAAQgtAAgighg");
	this.shape_1.setTransform(42.3,53.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,112,106,0.102)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,13.2).s().p("AhcBcQgmglAAg3QAAg1AmgmQAngnA1AAQA2AAAnAnQAmAmAAA1QAAA3gmAlQgnAng2AAQg1AAgngng");
	this.shape_2.setTransform(42.3,53.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["rgba(255,125,118,0.157)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,15).s().p("AhoBqQgsgsAAg+QAAg8AsgtQArgrA9AAQA+AAArArQAsAtAAA8QAAA+gsAsQgrArg+AAQg9AAgrgrg");
	this.shape_3.setTransform(42.3,53.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["rgba(255,137,131,0.208)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,16.9).s().p("Ah2B2QgwgwAAhGQAAhEAwgyQAygxBEABQBFgBAyAxQAwAyAABEQAABGgwAwQgyAyhFAAQhEAAgygyg");
	this.shape_4.setTransform(42.3,53.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["rgba(255,149,144,0.259)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,18.7).s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA3A2gBBMQABBNg3A2Qg2A2hNABQhMgBg2g2g");
	this.shape_5.setTransform(42.3,53.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.rf(["rgba(255,161,157,0.31)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,20.5).s().p("AiQCQQg7g8AAhUQAAhUA7g7QA9g8BTAAQBVAAA7A8QA8A7AABUQAABUg8A8Qg7A8hVAAQhTAAg9g8g");
	this.shape_6.setTransform(42.3,53.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.rf(["rgba(255,174,169,0.365)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,22.4).s().p("AicCdQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbQAABchBBBQhBBBhcAAQhbAAhBhBg");
	this.shape_7.setTransform(42.3,53.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["rgba(255,186,182,0.416)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,24.2).s().p("AipCpQhGhFAAhkQAAhjBGhGQBHhGBigBQBjABBGBGQBIBGgBBjQABBkhIBFQhGBHhjABQhigBhHhHg");
	this.shape_8.setTransform(42.3,53.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.rf(["rgba(255,198,195,0.467)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,26).s().p("Ai2C2QhMhLABhrQgBhqBMhMQBMhLBqgBQBrABBMBLQBLBMAABqQAABrhLBLQhMBNhrAAQhqAAhMhNg");
	this.shape_9.setTransform(42.3,53.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.rf(["rgba(255,180,176,0.388)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,27.5).s().p("AjBDBQhQhQAAhxQAAhwBQhQQBRhQBwAAQByAABPBQQBQBQABBwQgBBxhQBQQhPBRhyAAQhwAAhRhRg");
	this.shape_10.setTransform(42.3,53.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.rf(["rgba(255,161,157,0.31)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,29).s().p("AjLDMQhVhUAAh4QAAh3BVhUQBVhUB2gBQB3ABBVBUQBVBUAAB3QAAB4hVBUQhVBVh3gBQh2ABhVhVg");
	this.shape_11.setTransform(42.3,53.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.rf(["rgba(255,143,138,0.235)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,30.5).s().p("AjWDWQhZhYAAh+QAAh9BZhZQBZhYB9gBQB+ABBYBYQBaBZAAB9QAAB+haBYQhYBah+gBQh9ABhZhag");
	this.shape_12.setTransform(42.4,53.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.rf(["rgba(255,125,118,0.157)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,32.1).s().p("AjhDhQhchdAAiEQAAiDBcheQBehdCDAAQCDAABdBdQBeBeAACDQAACEheBdQhdBeiDgBQiDABheheg");
	this.shape_13.setTransform(42.4,53.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["rgba(255,106,99,0.078)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,33.6).s().p("AjrDsQhhhigBiKQABiJBhhjQBhhgCKAAQCKAABhBgQBiBjAACJQAACKhiBiQhhBhiKABQiKgBhhhhg");
	this.shape_14.setTransform(42.4,53.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["rgba(255,88,80,0)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,35.1).s().p("Aj2D2QhlhmgBiQQABiPBlhnQBnhmCPAAQCQAABmBmQBmBnABCPQgBCQhmBmQhmBmiQAAQiPAAhnhmg");
	this.shape_15.setTransform(42.4,53.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.rf(["rgba(255,107,99,0.051)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,11.4).s().p("AhPBQQggghgBgvQABguAgghQAiggAtAAQAvAAAhAgQAgAhAAAuQAAAvggAhQghAhgvAAQgtAAgighg");
	this.shape_16.setTransform(42.3,53.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.rf(["rgba(255,125,119,0.102)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,13.2).s().p("AhcBcQgmglAAg3QAAg1AmgmQAngnA1AAQA2AAAnAnQAmAmAAA1QAAA3gmAlQgnAng2AAQg1AAgngng");
	this.shape_17.setTransform(42.3,53.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["rgba(255,144,138,0.157)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,15).s().p("AhoBqQgsgsAAg+QAAg8AsgtQArgrA9AAQA+AAArArQAsAtAAA8QAAA+gsAsQgrArg+AAQg9AAgrgrg");
	this.shape_18.setTransform(42.3,53.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.rf(["rgba(255,162,158,0.208)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,16.9).s().p("Ah2B2QgwgwAAhGQAAhEAwgyQAygxBEABQBFgBAyAxQAwAyAABEQAABGgwAwQgyAyhFAAQhEAAgygyg");
	this.shape_19.setTransform(42.3,53.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.rf(["rgba(255,181,177,0.259)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,18.7).s().p("AiCCDQg2g2AAhNQAAhMA2g2QA2g2BMAAQBNAAA2A2QA3A2gBBMQABBNg3A2Qg2A2hNABQhMgBg2g2g");
	this.shape_20.setTransform(42.3,53.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["rgba(255,199,197,0.31)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,20.5).s().p("AiQCQQg7g8AAhUQAAhUA7g7QA9g8BTAAQBVAAA7A8QA8A7AABUQAABUg8A8Qg7A8hVAAQhTAAg9g8g");
	this.shape_21.setTransform(42.3,53.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.rf(["rgba(255,218,216,0.365)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,22.4).s().p("AicCdQhBhBAAhcQAAhbBBhBQBBhBBbAAQBcAABBBBQBBBBAABbQAABchBBBQhBBBhcAAQhbAAhBhBg");
	this.shape_22.setTransform(42.3,53.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.rf(["rgba(255,236,236,0.416)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,24.2).s().p("AipCpQhGhFAAhkQAAhjBGhGQBHhGBigBQBjABBGBGQBIBGgBBjQABBkhIBFQhGBHhjABQhigBhHhHg");
	this.shape_23.setTransform(42.3,53.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.rf(["rgba(255,255,255,0.467)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,26).s().p("Ai2C2QhMhLABhrQgBhqBMhMQBMhLBqgBQBrABBMBLQBLBMAABqQAABrhLBLQhMBNhrAAQhqAAhMhNg");
	this.shape_24.setTransform(42.3,53.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.rf(["rgba(255,227,226,0.388)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,27.5).s().p("AjBDBQhQhQAAhxQAAhwBQhQQBRhQBwAAQByAABPBQQBQBQABBwQgBBxhQBQQhPBRhyAAQhwAAhRhRg");
	this.shape_25.setTransform(42.3,53.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.rf(["rgba(255,199,197,0.31)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,29).s().p("AjLDMQhVhUAAh4QAAh3BVhUQBVhUB2gBQB3ABBVBUQBVBUAAB3QAAB4hVBUQhVBVh3gBQh2ABhVhVg");
	this.shape_26.setTransform(42.3,53.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.rf(["rgba(255,172,168,0.235)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,30.5).s().p("AjWDWQhZhYAAh+QAAh9BZhZQBZhYB9gBQB+ABBYBYQBaBZAAB9QAAB+haBYQhYBah+gBQh9ABhZhag");
	this.shape_27.setTransform(42.4,53.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.rf(["rgba(255,144,138,0.157)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,32.1).s().p("AjhDhQhchdAAiEQAAiDBcheQBehdCDAAQCDAABdBdQBeBeAACDQAACEheBdQhdBeiDgBQiDABheheg");
	this.shape_28.setTransform(42.4,53.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.rf(["rgba(255,116,109,0.078)","rgba(255,88,80,0)"],[0,1],0,0,0,0,0,33.6).s().p("AjrDsQhhhigBiKQABiJBhhjQBhhgCKAAQCKAABhBgQBiBjAACJQAACKhiBiQhhBhiKABQiKgBhhhhg");
	this.shape_29.setTransform(42.4,53.3);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14,this.shape_15,this.shape_16,this.shape_17,this.shape_18,this.shape_19,this.shape_20,this.shape_21,this.shape_22,this.shape_23,this.shape_24,this.shape_25,this.shape_26,this.shape_27,this.shape_28,this.shape_29];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape}]},14).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).to({state:[{t:this.shape}]},15).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_15}]},1).to({state:[]},1).wait(5));

	// 图层_1
	this.instance_1 = new lib.Q4_5_3_tips();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,527.6,106.1);


(lib.tbb21_570_88943 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(69,109,124,0.173)").s().p("Ah1B/QgSggAUgTQATgUAogBQApgCArgaQAsgaARglQARgnAChOQAfBbgWBIQgWBJg0AjQgyAjgyAAIgCABQgwAAgKgbg");
	this.shape.setTransform(9.3,11.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],-5.6,-4.9,0,-5.6,-4.9,25.7).s().p("Ag2BkQgwgBgRgeQgRgeAXgoQAXgqAxgcQAxgdAvABQAwABARAeQARAegXAoQgWAqgyAcQgwAcguAAIgCAAg");
	this.shape_1.setTransform(-6.8,-7.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["rgba(255,255,255,0.8)","rgba(255,255,255,0)"],[0,1],-2.5,0.9,0,-2.5,0.9,9.3).s().p("AgUAjQgJgOAAgVQAAgUAJgPQAJgOALAAQANAAAIAOQAJAPAAAUQAAAVgJAOQgJAPgMAAIAAAAQgMAAgIgPg");
	this.shape_2.setTransform(-18.7,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_2
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-25.1,-22);

	this.instance_1 = new lib.tbb21_569_88670("single",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-54.4,-37.3,0.635,0.635,0,0,0,21.7,21.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-69.2,-52.1,95.1,81.1);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.Q4_5_3_tuodongts();
	this.instance.parent = this;
	this.instance.setTransform(-28.1,90,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(30));

	// 图层_1
	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(30.4,65.7,1,1,0,0,0,30.4,65.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:6.4},7).to({x:50.5},16).to({x:30.4},6).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.1,0,113.4,124.7);


(lib.tbb21_571_2387 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.tbb21_570_88943("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-88.1,-51.6,0.604,0.604,60,0,0,0.5,3.8);
	this.instance.alpha = 0.441;

	this.instance_1 = new lib.tbb21_570_88943("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-7.5,-43.7,0.652,0.652,15,0,0,0.4,3.7);
	this.instance_1.alpha = 0.441;

	this.instance_2 = new lib.tbb21_570_88943("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-26.4,68.2,0.127,0.127,105,0,0,0.6,3.6);

	this.instance_3 = new lib.tbb21_570_88943("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-40.4,71.5,0.079,0.079,60,0,0,1,3.5);

	this.instance_4 = new lib.tbb21_570_88943("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-45.4,71.5,0.079,0.079,60,0,0,1,3.5);

	this.instance_5 = new lib.tbb21_570_88943("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-16.1,23.9,0.278,0.278,-90,0,0,0.4,3.8);

	this.instance_6 = new lib.tbb21_570_88943("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(-47.8,-13.3,0.387,0.387,0,0,0,0.4,3.8);
	this.instance_6.alpha = 0.672;

	this.instance_7 = new lib.tbb21_570_88943("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-38.8,76.7,0.079,0.079,60,0,0,1,3.5);
	this.instance_7.alpha = 0.32;

	this.instance_8 = new lib.tbb21_570_88943("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(-75.5,21.4,0.24,0.24,0,0,0,0.4,3.8);

	this.instance_9 = new lib.tbb21_570_88943("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(-32.8,65.3,0.123,0.123,0,0,0,0.4,3.6);

	this.instance_10 = new lib.tbb21_570_88943("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(-34.3,35.4,0.226,0.226,60,0,0,0.3,4);

	this.instance_11 = new lib.tbb21_570_88943("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(-63.7,43,0.123,0.123,0,0,0,0.4,3.6);

	this.instance_12 = new lib.tbb21_570_88943("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(-45.8,61,0.123,0.123,0,0,0,0.4,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{regY:3.6,scaleX:0.123,scaleY:0.123,x:-45.8,y:61,regX:0.4,rotation:0}},{t:this.instance_11,p:{regY:3.6,scaleX:0.123,scaleY:0.123,x:-63.7,y:43,regX:0.4}},{t:this.instance_10,p:{regX:0.3,regY:4,scaleX:0.226,scaleY:0.226,rotation:60,x:-34.3,y:35.4}},{t:this.instance_9,p:{regX:0.4,regY:3.6,scaleX:0.123,scaleY:0.123,x:-32.8,y:65.3,rotation:0}},{t:this.instance_8,p:{regX:0.4,regY:3.8,scaleX:0.24,scaleY:0.24,rotation:0,x:-75.5,y:21.4}},{t:this.instance_7,p:{regX:1,regY:3.5,scaleX:0.079,scaleY:0.079,x:-38.8,y:76.7,alpha:0.32,rotation:60}},{t:this.instance_6,p:{regX:0.4,scaleX:0.387,scaleY:0.387,rotation:0,x:-47.8,y:-13.3,regY:3.8,alpha:0.672}},{t:this.instance_5,p:{regX:0.4,scaleX:0.278,scaleY:0.278,rotation:-90,x:-16.1,y:23.9,regY:3.8,alpha:1}},{t:this.instance_4,p:{regX:1,regY:3.5,scaleX:0.079,scaleY:0.079,x:-45.4,y:71.5,rotation:60}},{t:this.instance_3,p:{regX:1,regY:3.5,scaleX:0.079,scaleY:0.079,x:-40.4,y:71.5,rotation:60}},{t:this.instance_2,p:{regY:3.6,scaleX:0.127,scaleY:0.127,x:-26.4,y:68.2,regX:0.6,rotation:105,alpha:1}},{t:this.instance_1,p:{x:-7.5,y:-43.7,alpha:0.441,regX:0.4,rotation:15,regY:3.7,scaleX:0.652,scaleY:0.652}},{t:this.instance,p:{regX:0.5,regY:3.8,scaleX:0.604,scaleY:0.604,rotation:60,x:-88.1,y:-51.6,alpha:0.441}}]}).to({state:[{t:this.instance_12,p:{regY:3.9,scaleX:0.129,scaleY:0.129,x:-46.5,y:54.5,regX:0.4,rotation:0}},{t:this.instance_11,p:{regY:3.7,scaleX:0.149,scaleY:0.149,x:-69.1,y:40.3,regX:0.4}},{t:this.instance_10,p:{regX:0.7,regY:4.1,scaleX:0.26,scaleY:0.26,rotation:126.7,x:-30.2,y:32.1}},{t:this.instance_9,p:{regX:0.3,regY:3.8,scaleX:0.158,scaleY:0.158,x:-32,y:60.3,rotation:0}},{t:this.instance_8,p:{regX:0.5,regY:4,scaleX:0.262,scaleY:0.262,rotation:15,x:-70.5,y:14.7}},{t:this.instance_7,p:{regX:0.8,regY:3.1,scaleX:0.087,scaleY:0.087,x:-35.4,y:75.9,alpha:0.512,rotation:60}},{t:this.instance_6,p:{regX:0.5,scaleX:0.403,scaleY:0.403,rotation:30,x:-55.3,y:-24.2,regY:3.8,alpha:0.672}},{t:this.instance_5,p:{regX:0.3,scaleX:0.373,scaleY:0.373,rotation:-30,x:-12.2,y:11.4,regY:3.8,alpha:1}},{t:this.instance_4,p:{regX:0.8,regY:3.2,scaleX:0.085,scaleY:0.085,x:-46.9,y:69.4,rotation:60}},{t:this.instance_3,p:{regX:0.5,regY:3.4,scaleX:0.093,scaleY:0.093,x:-38.2,y:70.6,rotation:60}},{t:this.instance_2,p:{regY:3.4,scaleX:0.147,scaleY:0.147,x:-21.6,y:64.2,regX:0.6,rotation:105,alpha:1}},{t:this.instance_1,p:{x:-4.7,y:-64.7,alpha:0.32,regX:0.4,rotation:15,regY:3.7,scaleX:0.652,scaleY:0.652}},{t:this.instance,p:{regX:0.4,regY:3.9,scaleX:0.662,scaleY:0.662,rotation:75,x:-91.4,y:-65.1,alpha:0.441}}]},4).to({state:[{t:this.instance_12,p:{regY:3.4,scaleX:0.123,scaleY:0.123,x:-50.8,y:49.4,regX:0.1,rotation:15}},{t:this.instance_11,p:{regY:3.6,scaleX:0.178,scaleY:0.178,x:-72.5,y:35.2,regX:0.3}},{t:this.instance_10,p:{regX:0.4,regY:4,scaleX:0.277,scaleY:0.277,rotation:-172.4,x:-25.9,y:29.9}},{t:this.instance_9,p:{regX:0.6,regY:3.6,scaleX:0.168,scaleY:0.168,x:-32.8,y:52.8,rotation:0}},{t:this.instance_8,p:{regX:0.6,regY:3.7,scaleX:0.285,scaleY:0.285,rotation:0,x:-62.2,y:6.5}},{t:this.instance_7,p:{regX:1,regY:3.8,scaleX:0.106,scaleY:0.106,x:-32.4,y:73.7,alpha:0.512,rotation:90}},{t:this.instance_6,p:{regX:0.3,scaleX:0.425,scaleY:0.425,rotation:60,x:-65.5,y:-30,regY:3.7,alpha:0.48}},{t:this.instance_5,p:{regX:0.3,scaleX:0.496,scaleY:0.496,rotation:0,x:-6.4,y:-2.8,regY:3.9,alpha:0.559}},{t:this.instance_4,p:{regX:0.8,regY:3.8,scaleX:0.093,scaleY:0.093,x:-47.2,y:66.9,rotation:45}},{t:this.instance_3,p:{regX:1.1,regY:3.1,scaleX:0.101,scaleY:0.101,x:-36.1,y:69,rotation:45}},{t:this.instance_2,p:{regY:3.1,scaleX:0.173,scaleY:0.173,x:-17.7,y:59.2,regX:0.7,rotation:165,alpha:0.66}},{t:this.instance_1,p:{x:2.2,y:-88.6,alpha:0.23,regX:0.5,rotation:60,regY:3.7,scaleX:0.652,scaleY:0.652}},{t:this.instance,p:{regX:0.5,regY:3.7,scaleX:0.762,scaleY:0.762,rotation:135,x:-96.3,y:-83.6,alpha:0.18}}]},4).to({state:[{t:this.instance_12,p:{regY:3.4,scaleX:0.123,scaleY:0.123,x:-56.8,y:45.3,regX:0.1,rotation:15}},{t:this.instance_11,p:{regY:3.6,scaleX:0.221,scaleY:0.221,x:-75.8,y:29.1,regX:0.3}},{t:this.instance_10,p:{regX:0.4,regY:4,scaleX:0.277,scaleY:0.277,rotation:-172.4,x:-19.9,y:26.3}},{t:this.instance_9,p:{regX:0.7,regY:3.5,scaleX:0.199,scaleY:0.199,x:-36.3,y:45.9,rotation:15}},{t:this.instance_8,p:{regX:0.5,regY:3.7,scaleX:0.327,scaleY:0.327,rotation:0,x:-54,y:-1.7}},{t:this.instance_7,p:{regX:1.2,regY:3.5,scaleX:0.128,scaleY:0.128,x:-28.5,y:71.4,alpha:0.75,rotation:90}},{t:this.instance_6,p:{regX:0.4,scaleX:0.482,scaleY:0.482,rotation:60,x:-77.3,y:-43.7,regY:3.7,alpha:0.48}},{t:this.instance_5,p:{regX:0.3,scaleX:0.62,scaleY:0.62,rotation:0,x:-6.1,y:-22.2,regY:3.9,alpha:0.559}},{t:this.instance_4,p:{regX:0.7,regY:3.9,scaleX:0.111,scaleY:0.111,x:-46.5,y:64.2,rotation:45}},{t:this.instance_3,p:{regX:1.1,regY:2.8,scaleX:0.118,scaleY:0.118,x:-34.3,y:67.2,rotation:30}},{t:this.instance_2,p:{regY:3.1,scaleX:0.2,scaleY:0.2,x:-5.8,y:51.5,regX:0.8,rotation:165,alpha:0.34}},{t:this.instance_1,p:{x:-44.1,y:75,alpha:1,regX:0.7,rotation:15,regY:2.5,scaleX:0.059,scaleY:0.059}},{t:this.instance,p:{regX:0.7,regY:2.5,scaleX:0.059,scaleY:0.059,rotation:15,x:-39.3,y:80,alpha:1}}]},4).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.9,-101.9,121.9,181.3);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3
	this.instance = new lib.tbb21_571_2387("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(51.2,44.5,0.524,0.524,0,0,0,-49.1,-15.1);
	this.instance.alpha = 0.559;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).wait(21));

	// 图层_2
	this.instance_1 = new lib.tbb21_571_2387("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(84.6,47.7,0.524,0.524,0,0,0,-49.1,-15.1);
	this.instance_1.alpha = 0.559;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(27));

	// 图层_4
	this.instance_2 = new lib.tbb21_571_2387("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(120,68.7,0.192,0.192,0,0,0,-49.1,-14.6);
	this.instance_2.alpha = 0.559;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).wait(34));

	// 图层_1
	this.instance_3 = new lib.tbb21_571_2387("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(28.1,58.1,0.385,0.385,0,0,0,-49.1,-15.1);
	this.instance_3.alpha = 0.559;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5,24,46.9,70.5);


(lib.元件9_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance_2 = new lib.元件6();
	this.instance_2.parent = this;
	this.instance_2.setTransform(51.8,151.9,1,1,0,0,0,29.7,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(30));

	// 图层_1
	this.instance_3 = new lib.元件8();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,48,1,1,0,0,0,50,48);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:1},9).wait(10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6.1,0,113.4,236.6);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio20613' + 'Object'].actionPlay();
	}
	this.frame_21 = function() {
		this.stop();
		
		var s = this;
		createjs.Touch.enable(stage);
		s.jixu.visible = false;
		s.qipao.visible = false;
		s.qipao.gotoAndStop(0);
		s.daan.visible = false;
		var last_jiao, last_xie, Num_jiao = 0;
		var xie, jiao, cha_xie, cha_jiao;
		
		
		var Array1 = ['未回答'];
		
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0034 === undefined && win.VarNurseB1 === undefined) {
			win = win.parent;
		}
		
		
		s.addEventListener('mousedown', function (e) {
		
			s.tishi.visible = false;
			var XX = e.localX - s.mc1.x;
			var YY = e.localY - s.mc1.y;
		
			last_xie = Math.atan2(YY, XX);
			last_jiao = last_xie * 180 / Math.PI;
			if (last_jiao < 0) {
				last_jiao = 180 + (180 - Math.abs(last_jiao));
			}
			last_jiao = last_jiao >> 0;
		});
		
		s.addEventListener('pressmove', function (e) {
			var XX = e.localX - s.mc1.x;
			var YY = e.localY - s.mc1.y;
			xie = Math.atan2(YY, XX);
			jiao = xie * 180 / Math.PI;
			if (jiao < 0) {
				jiao = 180 + (180 - Math.abs(jiao));
			}
			jiao = jiao >> 0;
		
			cha_xie = xie - last_xie;
			cha_jiao = jiao - last_jiao;
		
			if (cha_xie > 0) {
				Num_jiao -= cha_jiao > 0 ? cha_jiao : 0;
			} else {
				Num_jiao -= cha_jiao < 0 ? cha_jiao : 0;
			}
		
			if (Num_jiao > 0) {
				s.qipao.visible = true;
				s.qipao.play();
			} else {
				s.qipao.visible = false;
			}
			if (Num_jiao >= 360) {
				Num_jiao = 360;
			} else if (Num_jiao <= 0) {
				Num_jiao = 0;
			}
		
			s.mc1.rotation = -Num_jiao;
			s.wenben.text = parseInt(Num_jiao / 360 * 10);
			s.mc2.y = -(Num_jiao / 360 * 194) >> 0;
			//s.mc2.gotoAndStop(parseInt(Num_jiao))
			//s.mc2.y = (Num_jiao / 360 * 500) >> 0;
			last_jiao = jiao;
			last_xie = xie;
		
		
		});
		s.queding.addEventListener('click', function (e) {
			if (parseInt(Num_jiao / 360 * 10) >= 4 && parseInt(Num_jiao / 360 * 10) <= 6) {
				s.daan.visible = true;
				s.daan.gotoAndStop(0)
				playSound('correct');
				s.removeAllEventListeners("pressmove"); //移除事件
				win.VarNurseB1.set('3'); //护士B 题1得分
				win.VarQuestion_0034.set('4-6L/min');
		
			} else {
				s.daan.visible = true;
				s.daan.gotoAndStop(1)
				playSound('error');
				s.wenben.text = '4-6'
				s.removeAllEventListeners("pressmove"); //移除事件
		
		
				win.VarNurseB1.set('0'); //护士B 题1得分
				win.VarQuestion_0034.set(parseInt(Num_jiao / 360 * 10) + 'L/min');
		
			}
		
		
		
		
		
			s.jixu.visible = true;
			window.parent['audio20613' + 'Object'].actionStop();
			window.parent['audio20622' + 'Object'].actionPlay();
		});
		s.jixu.addEventListener('click', function (e) {
			playSound('click');
			window.parent.trivNextPage()
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(20).call(this.frame_21).wait(2));

	// 图层_11
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(290.7,480.7,0.667,0.667);

	this.wenben = new cjs.Text("0", "26px 'Times New Roman'", "#FFFFFF");
	this.wenben.name = "wenben";
	this.wenben.textAlign = "center";
	this.wenben.lineHeight = 31;
	this.wenben.lineWidth = 14;
	this.wenben.parent = this;
	this.wenben.setTransform(948.4,238.9);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.wenben},{t:this.daan}]},21).wait(2));

	// 图层_6
	this.instance = new lib.kedu();
	this.instance.parent = this;
	this.instance.setTransform(645.6,22.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23));

	// 图层_8
	this.tishi = new lib.元件9_1();
	this.tishi.name = "tishi";
	this.tishi.parent = this;
	this.tishi.setTransform(674.8,323,1,1,0,0,0,50,48);

	this.timeline.addTween(cjs.Tween.get(this.tishi).wait(23));

	// 图层_7
	this.instance_1 = new lib.元件7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(717.6,254.2,0.55,0.55,0,0,0,-2.5,46.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_2 = new lib.Q4_5_3_ts();
	this.instance_2.parent = this;
	this.instance_2.setTransform(720.1,207.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,alpha:1},7).to({scaleX:1,scaleY:1,y:254.1},4).to({_off:true},1).wait(1));

	// 图层_10
	this.mc2 = new lib.元件11();
	this.mc2.name = "mc2";
	this.mc2.parent = this;
	this.mc2.setTransform(0.1,-0.3);

	this.mc1 = new lib.元件10();
	this.mc1.name = "mc1";
	this.mc1.parent = this;
	this.mc1.setTransform(675.4,326.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc1},{t:this.mc2}]}).wait(23));

	// 图层_13
	this.qipao = new lib.元件12();
	this.qipao.name = "qipao";
	this.qipao.parent = this;
	this.qipao.setTransform(667.4,566.7,1,1,0,0,0,66.4,48);
	this.qipao._off = true;

	this.timeline.addTween(cjs.Tween.get(this.qipao).wait(21).to({_off:false},0).wait(2));

	// 图层_2
	this.instance_3 = new lib.左下角提示3();
	this.instance_3.parent = this;
	this.instance_3.setTransform(215.3,667.2,1,1,0,0,0,213.8,52.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:233.4,alpha:1},7).to({x:231.4},4).wait(12));

	// 图层_1
	this.instance_4 = new lib.A4_4_9_2();
	this.instance_4.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720.6);


// stage content:
(lib.Q4_5_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(321.9,209,1,1,0,0,0,321.9,209);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720.6);
// library properties:
lib.properties = {
	id: 'B0A1AE143F9EB94D8A85BC3CA4F9008B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_9_2.jpg?1690612418920", id:"A4_4_9_2"},
		{src:"images/Q4_5_3_atlas_P_.png?1690612418881", id:"Q4_5_3_atlas_P_"},
		{src:"images/Q4_5_3_atlas_P_2.png?1690612418881", id:"Q4_5_3_atlas_P_2"},
		{src:"sounds/click.mp3?1690612418920", id:"click"},
		{src:"sounds/correct.mp3?1690612418920", id:"correct"},
		{src:"sounds/error.mp3?1690612418920", id:"error"}
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
an.compositions['B0A1AE143F9EB94D8A85BC3CA4F9008B'] = {
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