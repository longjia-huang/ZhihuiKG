(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"QAdd2_1_atlas_P_", frames: [[0,722,168,165],[704,386,177,174],[952,0,44,74],[716,562,177,174],[0,0,508,354],[652,738,239,79],[411,738,239,79],[170,803,239,79],[170,722,239,79],[510,0,440,384],[358,546,177,174],[537,562,177,174],[0,386,702,158],[0,546,177,174],[179,546,177,174]]},
		{name:"QAdd2_1_atlas_NP_", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_2", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_3", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_4", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_5", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_6", frames: [[0,0,574,504]]},
		{name:"QAdd2_1_atlas_NP_7", frames: [[0,0,574,504]]}
];


// symbols:



(lib.按钮点击 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.气道开放与颈椎保护 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.血液 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.神经系统能力 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00000 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00001 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00002 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00003 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00004 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00005 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_caijian2_00006 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_NP_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A2_2_2_camBeauty_other235 = function() {
	this.initialize(img.A2_2_2_camBeauty_other235);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.cw = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.zq = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.呼吸 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.出血控制 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.左下角提示 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.循环 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.暴露与环境 = function() {
	this.spriteSheet = ss["QAdd2_1_atlas_P_"];
	this.gotoAndStop(14);
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


(lib.动画2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egslgm9MBZPgAGMgAaBN9MhY4AAKg");
	mask.setTransform(561.1,563.6);

	// 图层_4
	this.instance = new lib.A2_2_2_caijian2_00006();
	this.instance.parent = this;
	this.instance.setTransform(274.3,313);

	this.instance_1 = new lib.A2_2_2_caijian2_00005();
	this.instance_1.parent = this;
	this.instance_1.setTransform(274.3,313);

	this.instance_2 = new lib.A2_2_2_caijian2_00004();
	this.instance_2.parent = this;
	this.instance_2.setTransform(274.3,313);

	this.instance_3 = new lib.A2_2_2_caijian2_00003();
	this.instance_3.parent = this;
	this.instance_3.setTransform(274.3,313);

	this.instance_4 = new lib.A2_2_2_caijian2_00002();
	this.instance_4.parent = this;
	this.instance_4.setTransform(274.3,313);

	this.instance_5 = new lib.A2_2_2_caijian2_00001();
	this.instance_5.parent = this;
	this.instance_5.setTransform(274.3,313);

	this.instance_6 = new lib.A2_2_2_caijian2_00000();
	this.instance_6.parent = this;
	this.instance_6.setTransform(274.3,313);

	var maskedShapeInstanceList = [this.instance,this.instance_1,this.instance_2,this.instance_3,this.instance_4,this.instance_5,this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_2}]},3).to({state:[{t:this.instance_3}]},3).to({state:[{t:this.instance_4}]},3).to({state:[{t:this.instance_5}]},3).to({state:[{t:this.instance_6}]},3).wait(3));

	// 图层_3
	this.instance_7 = new lib.A2_2_2_caijian2_00000();
	this.instance_7.parent = this;
	this.instance_7.setTransform(274.3,313);

	this.instance_8 = new lib.A2_2_2_caijian2_00001();
	this.instance_8.parent = this;
	this.instance_8.setTransform(274.3,313);

	this.instance_9 = new lib.A2_2_2_caijian2_00002();
	this.instance_9.parent = this;
	this.instance_9.setTransform(274.3,313);

	this.instance_10 = new lib.A2_2_2_caijian2_00003();
	this.instance_10.parent = this;
	this.instance_10.setTransform(274.3,313);

	this.instance_11 = new lib.A2_2_2_caijian2_00004();
	this.instance_11.parent = this;
	this.instance_11.setTransform(274.3,313);

	this.instance_12 = new lib.A2_2_2_caijian2_00005();
	this.instance_12.parent = this;
	this.instance_12.setTransform(274.3,313);

	this.instance_13 = new lib.A2_2_2_caijian2_00006();
	this.instance_13.parent = this;
	this.instance_13.setTransform(274.3,313);

	var maskedShapeInstanceList = [this.instance_7,this.instance_8,this.instance_9,this.instance_10,this.instance_11,this.instance_12,this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7}]}).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},3).to({state:[{t:this.instance_10}]},3).to({state:[{t:this.instance_11}]},3).to({state:[{t:this.instance_12}]},3).to({state:[{t:this.instance_13}]},3).to({state:[]},3).wait(21));

	// 图层_2
	this.instance_14 = new lib.A2_2_2_camBeauty_other235();
	this.instance_14.parent = this;
	this.instance_14.setTransform(6.9,274.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.9,274.6,1280,720);


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


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.zq();
	this.instance.parent = this;
	this.instance.setTransform(-187.1,-210.7);

	this.instance_1 = new lib.cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-254,-180.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187.1,-210.7,440,384);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.出血控制();
	this.instance.parent = this;
	this.instance.setTransform(-59.2,-58.2,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-58.2,118.6,116.6);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.按钮点击();
	this.instance.parent = this;
	this.instance.setTransform(-84,-82.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-84,-82.5,168,165), null);


(lib.血滴 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.血液();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.4,49.4);


(lib.左下角提示2 = function(mode,startPosition,loop) {
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
	this.instance_1 = new lib.左下角提示();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(85));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,468.3,105.4);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 6;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		setTimeout(function () {
			window.parent['audio176962' + 'Object'].actionPlay();
		}, 1);
		
		var win = window;
		while (win !== win.parent && win.VarQadd_2_1 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			0: '未回答',
			1: '暴露与环境',
			2: '气道开放与颈椎保护',
			3: '循环',
			4: '出血控制',
			5: '呼吸',
			6: '神经系统能力'
		}
		
		var curNum = 0;
		var flag = true;
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0) {
		
					curNum = Number(e.target.name.substring(4));
					//console.log(curNum)
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
		
					window.parent['audio176962' + 'Object'].actionStop();
					stopSound('music2');
		
					_this.daan.visible = true;
					if (curNum == 4) {
						playSound('correct');
						playSound('music1');
						_this.daan.gotoAndStop(0);
						for (var i = 1; i <= btnNum; i++) {
							_this['btn_' + i].visible = false;
						}
						_this.jixu.visible = true;
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						playSound('music2');
					}
					if (flag) {
						flag = false;
						win.VarQadd_2_1.set(curNum);
					}
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				}
			}
		});
		
		function stopSound(id, loop) {
			return createjs.Sound.stop(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_8
	this.btn_6 = new lib.元件8();
	this.btn_6.name = "btn_6";
	this.btn_6.parent = this;
	this.btn_6.setTransform(468.1,570.2);
	this.btn_6.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_6, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_5 = new lib.元件8();
	this.btn_5.name = "btn_5";
	this.btn_5.parent = this;
	this.btn_5.setTransform(602.8,518.7);
	this.btn_5.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_4 = new lib.元件8();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(326.6,518.7);
	this.btn_4.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_3 = new lib.元件8();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(598.8,389.6);
	this.btn_3.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_2 = new lib.元件8();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(331.5,389.6);
	this.btn_2.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_1 = new lib.元件8();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(466.8,323);
	this.btn_1.alpha = 0.012;
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件8(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.btn_5},{t:this.btn_6}]}).wait(1));

	// 图层_5
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.queding},{t:this.jixu}]}).wait(1));

	// 图层_3
	this.show6 = new lib.元件7();
	this.show6.name = "show6";
	this.show6.parent = this;
	this.show6.setTransform(466.9,570.1,0.667,0.667,0,0,0,0.1,0.1);

	this.show5 = new lib.元件7();
	this.show5.name = "show5";
	this.show5.parent = this;
	this.show5.setTransform(603.1,518.6,0.667,0.667,0,0,0,0.1,0.1);

	this.show4 = new lib.元件7();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(327.4,518.6,0.667,0.667,0,0,0,0.1,0.1);

	this.show3 = new lib.元件7();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(598.7,389.9,0.667,0.667,0,0,0,0.1,0.1);

	this.show2 = new lib.元件7();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(331.9,389.4,0.667,0.667,0,0,0,0.1,0.1);

	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(916.3,595.1,0.667,0.667);

	this.show1 = new lib.元件7();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(466.7,322.8,0.667,0.667,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.show1},{t:this.daan},{t:this.show2},{t:this.show3},{t:this.show4},{t:this.show5},{t:this.show6}]}).wait(1));

	// 图层_6
	this.instance = new lib.左下角提示2();
	this.instance.parent = this;
	this.instance.setTransform(221.6,667.2,1,1,0,0,0,213.8,52.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_7
	this.instance_1 = new lib.循环();
	this.instance_1.parent = this;
	this.instance_1.setTransform(539.6,331.3,0.67,0.67);

	this.instance_2 = new lib.神经系统能力();
	this.instance_2.parent = this;
	this.instance_2.setTransform(408.8,512,0.67,0.67);

	this.instance_3 = new lib.气道开放与颈椎保护();
	this.instance_3.parent = this;
	this.instance_3.setTransform(272.3,331.3,0.67,0.67);

	this.instance_4 = new lib.呼吸();
	this.instance_4.parent = this;
	this.instance_4.setTransform(543.5,460.5,0.67,0.67);

	this.instance_5 = new lib.出血控制();
	this.instance_5.parent = this;
	this.instance_5.setTransform(267.3,460.5,0.67,0.67);

	this.instance_6 = new lib.暴露与环境();
	this.instance_6.parent = this;
	this.instance_6.setTransform(407.6,264.7,0.67,0.67);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// 图层_1
	this.instance_7 = new lib.动画2();
	this.instance_7.parent = this;
	this.instance_7.setTransform(273,-53.1,1,1,0,0,0,279.7,221.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.总, new cjs.Rectangle(0.2,0.1,1280,720), null);


// stage content:
(lib.QAdd2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(511.3,341.2,1,1,0,0,0,511.3,341.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640.2,360.1,1280,720);
// library properties:
lib.properties = {
	id: '3D78CAAA44E13A49B5015CBA93BEF4E7',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A2_2_2_camBeauty_other235.jpg?1724035743223", id:"A2_2_2_camBeauty_other235"},
		{src:"images/QAdd2_1_atlas_P_.png?1724035743192", id:"QAdd2_1_atlas_P_"},
		{src:"images/QAdd2_1_atlas_NP_.jpg?1724035743192", id:"QAdd2_1_atlas_NP_"},
		{src:"images/QAdd2_1_atlas_NP_2.jpg?1724035743192", id:"QAdd2_1_atlas_NP_2"},
		{src:"images/QAdd2_1_atlas_NP_3.jpg?1724035743192", id:"QAdd2_1_atlas_NP_3"},
		{src:"images/QAdd2_1_atlas_NP_4.jpg?1724035743192", id:"QAdd2_1_atlas_NP_4"},
		{src:"images/QAdd2_1_atlas_NP_5.jpg?1724035743192", id:"QAdd2_1_atlas_NP_5"},
		{src:"images/QAdd2_1_atlas_NP_6.jpg?1724035743192", id:"QAdd2_1_atlas_NP_6"},
		{src:"images/QAdd2_1_atlas_NP_7.jpg?1724035743192", id:"QAdd2_1_atlas_NP_7"},
		{src:"sounds/click.mp3?1724035743223", id:"click"},
		{src:"sounds/correct.mp3?1724035743223", id:"correct"},
		{src:"sounds/error.mp3?1724035743223", id:"error"},
		{src:"sounds/music1.mp3?1724035743223", id:"music1"},
		{src:"sounds/music2.mp3?1724035743223", id:"music2"}
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
an.compositions['3D78CAAA44E13A49B5015CBA93BEF4E7'] = {
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