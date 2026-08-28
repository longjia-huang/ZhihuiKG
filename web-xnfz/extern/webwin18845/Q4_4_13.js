(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_4_13_atlas_P_", frames: [[0,423,790,421],[0,0,790,421]]},
		{name:"Q4_4_13_atlas_P_2", frames: [[888,161,44,74],[642,161,153,158],[326,161,314,279],[642,402,239,79],[642,321,239,79],[452,483,239,79],[0,340,239,79],[797,161,89,120],[0,0,324,338],[0,442,450,154],[693,483,170,52],[326,0,641,159]]}
];


// symbols:



(lib.血液 = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A4_4_6_303 = function() {
	this.initialize(img.A4_4_6_303);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_12_tuodong = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_13_cw = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_13_SD = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_13_ts = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_13_zq = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.QA4_4_12_tuodongts = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.TISHI = function() {
	this.spriteSheet = ss["Q4_4_13_atlas_P_2"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.ZhiXueDai = function() {
	this.initialize(img.ZhiXueDai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);// helper functions:

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


(lib.答案 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q4_4_13_zq();
	this.instance.parent = this;
	this.instance.setTransform(-395,-210.5);

	this.instance_1 = new lib.Q4_4_13_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-395,-210.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-395,-210.5,790,421);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(218,219,219,0.02)").s().p("EhXcAajMAAAg1FMCu5AAAMAAAA1Fg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-559.7,-169.8,1119.4,339.8), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A/ITDIGIqrQazEBXUBMIlrPggEgiZgS3MBEygKNInTUEQ8ZAQ1WEDg");
	mask.setTransform(156.8,280.1);

	// 图层_2
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(486.9,143.9,1.374,1.374,110.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62130D").s().p("AgxFSQgog5AXgfQAXgfgPgVQgOgUAAgYIADgeIAHggQAGgZARgnIAAAAQgTAEgVgGQgagIgPgUQgUgbAAgzQACgiAIgSQAIgPAXgWQAYgYANgIQAQgKAEgEIALgRQAMgRATgJIAHgDIAGgSIAHgTQAFgMAEgHQAMgWAYgLQAXgLAYAEQAQADAMAIQhBgCg3CqQg1CqCOiSQgEALgFAKQANAEAFAMQAFAMgMAYQgLAYAUAXQAVAXgTAOQAJAYgUARQgUAQgMAVQgMAWAOALQAPALgEATQgDAUgGATQgGASgrBhQgbA9gZAAQgQAAgPgVg");
	this.shape.setTransform(298.1,219.6,1.374,1.374,110.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-21.5,94,398.5,372.3), null);


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


(lib.元件8_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.ZhiXueDai();
	this.instance.parent = this;
	this.instance.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-360,1280,720);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_12_tuodong();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(0,0,59.4,80.1), null);


(lib.元件5_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance_1 = new lib.Q4_4_13_SD();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5_1, new cjs.Rectangle(0,0,216.1,225.5), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_13_ts();
	this.instance.parent = this;
	this.instance.setTransform(-53.8,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件2, new cjs.Rectangle(-53.8,0,300.2,102.7), null);


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
	this.instance_1 = new lib.TISHI();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,427.6,106.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件6();
	this.instance.parent = this;
	this.instance.setTransform(29.7,40,1,1,0,0,0,29.7,40);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:59.5},7).to({x:11.4},13).to({x:29.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59.4,80.1);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件7();
	this.instance.parent = this;
	this.instance.setTransform(108.9,256,1,1,0,0,0,29.7,40);

	this.instance_1 = new lib.QA4_4_12_tuodongts();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.2,298.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(30));

	// 图层_1
	this.instance_2 = new lib.元件5_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(108,112.7,1,1,0,0,0,108,112.7);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9).wait(10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,333.3);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(33));

	// 图层_1
	this.instance = new lib.元件8_1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(682.7,368.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:739.6,y:379.3},20).to({x:805.7,y:383.8},12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(42.7,8.3,1280,720);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(901.8,251.6,1.171,1.171,70.2);

	this.instance_1 = new lib.元件5();
	this.instance_1.parent = this;
	this.instance_1.setTransform(611.8,360.4,1,1,0,0,0,254.2,268.6);

	this.instance_2 = new lib.A4_4_6_303();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio18350' + 'Object'].actionPlay();
	}
	this.frame_11 = function() {
		createjs.Touch.enable(stage);
		var _this = this;
		var tishenFrame;
		var OldX = 0;
		var OldY = 0;
		_this.stop();
		_this.daan.visible = false;
		_this.jixu.visible = false;
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0028 === undefined && win.VarNurseA8 === undefined) {
			win = win.parent;
		}
		var count = 0;
		
		//旋转模型
		_this.rotating.addEventListener('mousedown', function (e) {
			OldX = e.localX;
			_this.tishi.visible = false;
		});
		
		_this.rotating.addEventListener('pressmove', function (e) {
			tishenFrame = _this.yangben1.currentFrame;
			var juliNum = Math.abs(parseInt((e.localX - OldX) / 6));
			//var juliNum = Math.round((e.localX - OldX).toFixed(2) * 100)
			//console.log(juliNum);
		
			if (juliNum > 0) {
				if (e.localX - OldX > 0) {
		
					if (tishenFrame + juliNum < 33) {
						_this.yangben1.gotoAndStop(tishenFrame + juliNum);
						
						count+=0.1;
					}
				} else {
					_this.yangben1.gotoAndStop(tishenFrame - juliNum);
					if(count>0){
							count-=0.1;
						}
						
				}
				OldX = e.localX;
		
				_this.wenben.text = Math.abs(count.toFixed(1));
			}
		});
		
		_this.queding.addEventListener('click', function (e) {
		
			window.parent['audio18350'+'Object'].actionStop();
			_this.daan.visible = true;
			_this.jixu.visible = true;
			console.log(Math.abs(count.toFixed(1)))
			if (Math.abs(count.toFixed(1)) >=1&&Math.abs(count.toFixed(1))<=2) {
				playSound('correct');
				win.VarNurseA8.set(1); //设置护士A 8题变量的得分
				win.VarQuestion_0028.set('止血带使其边缘距离棉垫边缘1-2cm');
			} else {
				_this.daan.gotoAndStop(1);
				_this.yangben1.gotoAndStop(20);
				_this.wenben.text = 2;
				playSound('error');
				win.VarNurseA8.set(0); //设置护士A 8题变量的得分
				win.VarQuestion_0028.set('止血带使其边缘距离棉垫边缘'+count+'cm');
			}
			
			window.parent['audio18353'+'Object'].actionPlay();
		
		});
		_this.jixu.addEventListener('click', function (e) {
			playSound('click');
			window.parent.trivNextPage();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(10).call(this.frame_11).wait(1));

	// 图层_7
	this.rotating = new lib.元件8();
	this.rotating.name = "rotating";
	this.rotating.parent = this;
	this.rotating.setTransform(713,404.2);
	this.rotating._off = true;

	this.timeline.addTween(cjs.Tween.get(this.rotating).wait(11).to({_off:false},0).wait(1));

	// 图层_11
	this.wenben = new cjs.Text("0", "28px 'Times New Roman'", "#FFFFFF");
	this.wenben.name = "wenben";
	this.wenben.textAlign = "center";
	this.wenben.lineHeight = 33;
	this.wenben.lineWidth = 100;
	this.wenben.parent = this;
	this.wenben.setTransform(1069.6,213.5);

	this.daan = new lib.答案();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(356.9,467.4,0.667,0.667);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.daan},{t:this.wenben}]},11).wait(1));

	// 图层_6
	this.tishi = new lib.元件4();
	this.tishi.name = "tishi";
	this.tishi.parent = this;
	this.tishi.setTransform(1047.2,395.9,1,1,0,0,0,108,112.7);

	this.timeline.addTween(cjs.Tween.get(this.tishi).wait(12));

	// 图层_5
	this.instance = new lib.元件2();
	this.instance.parent = this;
	this.instance.setTransform(1013.2,280,0.607,0.607,0,0,0,103.2,99.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:103.3,regY:99.1,scaleX:1.09,scaleY:1.09,x:1013.3,alpha:1},7).to({regX:103.2,scaleX:1,scaleY:1,x:1013.2},4).wait(1));

	// 图层_4
	this.instance_1 = new lib.左下角提示();
	this.instance_1.parent = this;
	this.instance_1.setTransform(222.6,667.2,1,1,0,0,0,213.8,52.7);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:232.9,alpha:1},7).to({x:231.4},4).wait(1));

	// 图层_1
	this.yangben1 = new lib.元件3();
	this.yangben1.name = "yangben1";
	this.yangben1.parent = this;
	this.yangben1.setTransform(563.4,345.6,1,1,0,0,0,640,360);

	this.instance_2 = new lib.元件1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,360.1,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.yangben1}]}).wait(12));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33.9,-6.1,1314,726.7);


// stage content:
(lib.Q4_4_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(678.3,367.2,1,1,0,0,0,678.3,367.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(606.1,353.9,1314,726.7);
// library properties:
lib.properties = {
	id: 'B2E7310A8CB43240A189189E3CB16ED8',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_6_303.jpg?1678934675666", id:"A4_4_6_303"},
		{src:"images/ZhiXueDai.png?1678934675666", id:"ZhiXueDai"},
		{src:"images/Q4_4_13_atlas_P_.png?1678934675624", id:"Q4_4_13_atlas_P_"},
		{src:"images/Q4_4_13_atlas_P_2.png?1678934675624", id:"Q4_4_13_atlas_P_2"},
		{src:"sounds/click.mp3?1678934675666", id:"click"},
		{src:"sounds/correct.mp3?1678934675666", id:"correct"},
		{src:"sounds/error.mp3?1678934675666", id:"error"}
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
an.compositions['B2E7310A8CB43240A189189E3CB16ED8'] = {
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