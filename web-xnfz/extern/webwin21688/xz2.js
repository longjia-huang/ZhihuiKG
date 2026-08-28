(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"xz2_atlas_P_", frames: [[0,0,530,631]]},
		{name:"xz2_atlas_P_2", frames: [[857,0,44,74],[325,854,239,79],[336,773,239,79],[577,775,239,79],[566,856,239,79],[532,599,326,85],[532,0,323,172],[336,686,326,85],[0,810,323,172],[532,512,329,85],[532,174,323,172],[0,633,334,175],[532,348,323,162],[664,686,231,87],[818,775,52,53],[0,0,530,631]]}
];


// symbols:



(lib.血液 = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q4_5_6_bg = function() {
	this.initialize(img.Q4_5_6_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.Qxz2_A = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_A_wenzi = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_B = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_B_wenzi = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_C = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_C_wenzi = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_cw1 = function() {
	this.spriteSheet = ss["xz2_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_D = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_D_wenzi = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_DJ = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_tips = function() {
	this.initialize(img.Qxz2_tips);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1040,159);


(lib.Qxz2_yuanquan = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Qxz2_zq1 = function() {
	this.spriteSheet = ss["xz2_atlas_P_2"];
	this.gotoAndStop(15);
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
	this.instance = new lib.Qxz2_zq1();
	this.instance.parent = this;
	this.instance.setTransform(-225,-225.5);

	this.instance_1 = new lib.Qxz2_cw1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-225,-225.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-225,-225.5,530,631);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("ApyDxQgtABgfg7Qghg7AAhTIAAhRQAAhTAhg7QAfg7AtABITlAAQAtgBAgA7QAgA7AABTIAABRQAABTggA7QggA7gtgBg");
	this.shape.setTransform(-62.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-24.1,147.1,48.3);


(lib.元件7复制3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_A_wenzi();
	this.instance.parent = this;
	this.instance.setTransform(-171.1,40.5);

	this.instance_1 = new lib.Qxz2_DJ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115.5,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7复制3, new cjs.Rectangle(-171.1,-43.5,323,256), null);


(lib.元件7复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_B_wenzi();
	this.instance.parent = this;
	this.instance.setTransform(-162.4,40.6);

	this.instance_1 = new lib.Qxz2_DJ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115.5,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7复制2, new cjs.Rectangle(-162.4,-43.5,323,256.1), null);


(lib.元件7复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_D_wenzi();
	this.instance.parent = this;
	this.instance.setTransform(-159.9,42.3);

	this.instance_1 = new lib.Qxz2_DJ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115.5,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7复制, new cjs.Rectangle(-159.9,-43.5,323,247.8), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_C_wenzi();
	this.instance.parent = this;
	this.instance.setTransform(-161.8,41.3);

	this.instance_1 = new lib.Qxz2_DJ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-115.5,-43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-161.8,-43.5,323,256.8), null);


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


(lib.元件7_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance_2 = new lib.Qxz2_D();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,222.8,116.7);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_C();
	this.instance.parent = this;
	this.instance.setTransform(-38.9,-24,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.9,-24,219.5,56.7);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_B();
	this.instance.parent = this;
	this.instance.setTransform(20,-84,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20,-84,217.5,56.7);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,217.5,56.7);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz2_yuanquan();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,34.7,35.4), null);


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
	this.instance_1 = new lib.Qxz2_tips();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,693.7,106.1);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件4("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(261.5,83.1,0.648,0.648,0,0,0,218.3,29.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.03,scaleY:1.03,alpha:1},6).to({scaleX:1,scaleY:1},5).to({_off:true},11).wait(94));

	// 图层_3
	this.instance_1 = new lib.元件6("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(702.8,40.7,0.677,0.677,0,0,0,1.4,28.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({scaleX:1.05,scaleY:1.05,x:702.7,y:40.6,alpha:1},6).to({scaleX:1,scaleY:1},5).to({_off:true},3).wait(94));

	// 图层_4
	this.instance_2 = new lib.元件5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(475.2,160.5,0.595,0.595,0,0,0,236.1,-54.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3).to({_off:false},0).to({scaleX:1.09,scaleY:1.09,y:160.4,alpha:1},6).to({regX:236,scaleX:1,scaleY:1,x:475.1,y:160.5},5).to({_off:true},8).wait(94));

	// 图层_5
	this.instance_3 = new lib.元件7_1("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(580.6,538.9,0.675,0.675,0,0,0,3.3,114.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(11).to({_off:false},0).to({scaleX:1.03,scaleY:1.03,alpha:1},6).to({scaleX:1.01,scaleY:1.01,x:580.5},3).to({_off:true},2).wait(94));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(120.1,63.9,140.8,36.7);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(17.4,17.7,1,1,0,0,0,17.4,17.7);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,35.4);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio21636' + 'Object'].actionPlay();
	}
	this.frame_22 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
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
		while (win !== win.parent && win.VarQuestion_0035 === undefined && win.VarNurseB2 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			1: '桡动脉',
			2: '股动脉',
			3: '肱动脉',
			4: '足背动脉'
		}
		var flag = true;
		var curNum = 0;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0 && flag) {
		
					curNum = Number(e.target.name.substring(4));
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
					if (curNum == 4) {
						playSound('correct');
						win.VarNurseB2.set('3'); //护士B 题2得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseB2.set('0'); //护士B 题2得分
					}
					for (var i = 1; i <= btnNum; i++) {
						_this['btn_' + i].visible = false;
					}
		
					if (curNum == 0) {
		
						win.VarQuestion_0035.set(Array1.toString());
					} else {
						win.VarQuestion_0035.set(answerArr[curNum]);
					}
		
					window.parent['audio21636' + 'Object'].actionStop();
					window.parent['audio75495' + 'Object'].actionPlay();
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(21).call(this.frame_22).wait(1));

	// 图层_6
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(1067.9,282.5,0.667,0.667);

	this.btn_4 = new lib.元件8();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(948.5,566);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_2 = new lib.元件8();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(561.6,273.3);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_3 = new lib.元件8();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(1030.1,130.5);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_1 = new lib.元件8();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(345.4,195.7);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件8(), 3);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.btn_1},{t:this.btn_3},{t:this.btn_2},{t:this.btn_4},{t:this.daan}]},22).wait(1));

	// 图层_8
	this.show4 = new lib.元件7复制();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(886.4,566.8,0.667,0.667,0,0,0,0.1,0.1);

	this.show3 = new lib.元件7();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(969.9,129.8,0.667,0.667,0,0,0,0.1,0.1);

	this.show2 = new lib.元件7复制2();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(500,273.3,0.667,0.667,0,0,0,0.1,0.1);

	this.show1 = new lib.元件7复制3();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(283.1,196.3,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},22).wait(1));

	// 图层_5
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(739.8,665.5,1,1,0,0,0,17.4,17.7);

	this.instance_1 = new lib.元件2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(653.6,273.7,1,1,0,0,0,17.4,17.7);

	this.instance_2 = new lib.元件2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(809,129.6,1,1,0,0,0,17.4,17.7);

	this.instance_3 = new lib.元件2();
	this.instance_3.parent = this;
	this.instance_3.setTransform(438,197.5,1,1,0,0,0,17.4,17.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},11).wait(12));

	// 图层_4
	this.instance_4 = new lib.元件3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(592.5,398.6,1,1,0,0,0,429,284.6);

	this.instance_5 = new lib.Qxz2_A();
	this.instance_5.parent = this;
	this.instance_5.setTransform(206.6,167.3,0.667,0.667);

	this.instance_6 = new lib.Qxz2_C();
	this.instance_6.parent = this;
	this.instance_6.setTransform(825.8,102.2,0.667,0.667);

	this.instance_7 = new lib.Qxz2_B();
	this.instance_7.parent = this;
	this.instance_7.setTransform(422.5,244.8,0.667,0.667);

	this.instance_8 = new lib.Qxz2_D();
	this.instance_8.parent = this;
	this.instance_8.setTransform(740.7,538.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]},22).wait(1));

	// 图层_2
	this.instance_9 = new lib.左下角提示3();
	this.instance_9.parent = this;
	this.instance_9.setTransform(227.8,664.7,1,1,0,0,0,213.8,52.7);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({x:239.1,alpha:1},6).to({x:236.6},4).wait(13));

	// 图层_1
	this.instance_10 = new lib.Q4_5_6_bg();
	this.instance_10.parent = this;
	this.instance_10.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


// stage content:
(lib.xz2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280.7,720.4);
// library properties:
lib.properties = {
	id: '461A4458EBB9E643B7341E761DE5A7F7',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q4_5_6_bg.jpg?1686303300017", id:"Q4_5_6_bg"},
		{src:"images/Qxz2_tips.png?1686303300017", id:"Qxz2_tips"},
		{src:"images/xz2_atlas_P_.png?1686303299976", id:"xz2_atlas_P_"},
		{src:"images/xz2_atlas_P_2.png?1686303299976", id:"xz2_atlas_P_2"},
		{src:"sounds/click.mp3?1686303300017", id:"click"},
		{src:"sounds/correct.mp3?1686303300017", id:"correct"},
		{src:"sounds/error.mp3?1686303300017", id:"error"}
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
an.compositions['461A4458EBB9E643B7341E761DE5A7F7'] = {
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