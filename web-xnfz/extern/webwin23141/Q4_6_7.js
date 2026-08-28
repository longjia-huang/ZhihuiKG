(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_6_7_atlas_P_", frames: [[524,672,44,74],[524,510,239,79],[524,429,239,79],[524,348,239,79],[524,591,239,79],[524,0,298,85],[524,174,298,85],[524,87,298,85],[0,0,522,384],[524,261,298,85],[653,672,211,87],[0,772,651,158],[0,386,522,384]]}
];


// symbols:



(lib.血液 = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A4_5_2_1 = function() {
	this.initialize(img.A4_5_2_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jixu = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_A = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_B = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_C = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_cw = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_D = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_DJ = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_tips = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_11_zq = function() {
	this.spriteSheet = ss["Q4_6_7_atlas_P_"];
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


(lib.元件24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_zq();
	this.instance.parent = this;
	this.instance.setTransform(-261,-192);

	this.instance_1 = new lib.Q_XZ_1_11_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-261,-192);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-261,-192,522,384);


(lib.元件17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.8,56.7);


(lib.元件16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.8,56.7);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.8,56.7);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_D();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198.8,56.7);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_11_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-70.3,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-70.3,-29,140.8,58.1), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("AnhD7QhKAAg0hJQg0hKAAhoQAAhnA0hKQA0hJBKAAIPDAAQBKAAA0BJQA0BKAABnQAABog0BKQg0BJhKAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(-65.9,-25.1,131.9,50.3), null);


(lib.血滴 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.血液();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.4,49.4);


(lib.左下角提示 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.Q_XZ_1_11_tips();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,434.2,105.4);


(lib.元件13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件16("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(49.5,-220.5,1,1,0,0,0,99.4,28.4);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:43.5,alpha:1},6).to({x:44.5},6).wait(88));

	// 图层_3
	this.instance_1 = new lib.元件17("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(49.5,159.7,1,1,0,0,0,99.4,28.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({_off:false},0).to({x:43.5,alpha:1},6).to({x:44.5},6).wait(85));

	// 图层_4
	this.instance_2 = new lib.元件15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(524.8,-138.5,1,1,0,0,0,99.4,28.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:518.8,alpha:1},6).to({x:519.8},6).wait(82));

	// 图层_1
	this.instance_3 = new lib.元件14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(524.8,43.6,1,1,0,0,0,99.4,28.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(9).to({_off:false},0).to({x:518.8,alpha:1},6).to({x:519.8},6).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.9,-248.9,198.8,56.7);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio23110' + 'Object'].actionPlay();
	}
	this.frame_32 = function() {
		var _this = this;
		_this.stop();
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0044 === undefined && win.VarNurseC6 === undefined) {
			win = win.parent;
		}
		
		
		var answerArr = {
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D',
			5: 'E',
			6: 'F',
			7: 'G'
		}
		
		var curNum = 0;
		var flag = true;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flag) {
		
					curNum = Number(e.target.name.substring(4))
					//console.log(curNum)
		
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
					flag = false;
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (curNum == 2) {
						playSound('correct');
						_this.daan.gotoAndStop(0);
						win.VarNurseC6.set(3); //设置护士C6题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseC6.set(0); //设置护士C6题变量的得分
					}
					//console.log(Array1.toString())
		
					win.VarQuestion_0044.set(answerArr[curNum]);
		
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
		
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(31).call(this.frame_32).wait(1));

	// 图层_5
	this.daan = new lib.元件24();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(910,572.3,0.67,0.67);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1170.4,672.9,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.parent = this;
	this.queding.setTransform(1170.4,672.9,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.daan}]},32).wait(1));

	// 图层_7
	this.btn_4 = new lib.元件11();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(1141.6,432.6);

	this.btn_1 = new lib.元件11();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(663.4,166.8);

	this.btn_2 = new lib.元件11();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(665.4,547.9);

	this.btn_3 = new lib.元件11();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(1138.6,251.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_3},{t:this.btn_2},{t:this.btn_1},{t:this.btn_4}]},32).wait(1));

	// 图层_8
	this.show4 = new lib.元件12();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(1141,432);

	this.show3 = new lib.元件12();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(1141,249.8);

	this.show2 = new lib.元件12();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(665.8,548.1);

	this.show1 = new lib.元件12();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(664.9,167.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},32).wait(1));

	// 图层_4
	this.instance = new lib.元件13("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(741.1,430.7,1,1,0,0,0,149,42.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({_off:false},0).wait(22));

	// 图层_3
	this.instance_1 = new lib.左下角提示();
	this.instance_1.parent = this;
	this.instance_1.setTransform(226.4,667.2,1,1,0,0,0,213.8,52.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:233.4,alpha:1},7).to({x:231.4},4).wait(22));

	// 图层_1
	this.instance_2 = new lib.A4_5_2_1();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(33));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Q4_6_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '195E6A58C2F4224B95578A7BB9B3E43B',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_5_2_1.jpg?1678937133879", id:"A4_5_2_1"},
		{src:"images/Q4_6_7_atlas_P_.png?1678937133845", id:"Q4_6_7_atlas_P_"},
		{src:"sounds/click.mp3?1678937133879", id:"click"},
		{src:"sounds/correct.mp3?1678937133879", id:"correct"},
		{src:"sounds/error.mp3?1678937133879", id:"error"}
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
an.compositions['195E6A58C2F4224B95578A7BB9B3E43B'] = {
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