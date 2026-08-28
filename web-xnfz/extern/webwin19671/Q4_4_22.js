(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_4_22_atlas_P_", frames: [[0,318,535,47],[475,0,165,132],[0,0,473,144],[0,268,535,48],[0,207,533,59],[0,146,535,59]]}
];


// symbols:



(lib.血氧 = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.A4_1_1心电界面 = function() {
	this.initialize(img.A4_1_1心电界面);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,727,549);


(lib.A4_4_12Jpg_other0431 = function() {
	this.initialize(img.A4_4_12Jpg_other0431);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q4_4_22_sd = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_22tips = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.呼吸波形 = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.心电波形1 = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.心电波形 = function() {
	this.spriteSheet = ss["Q4_4_22_atlas_P_"];
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


(lib.波形3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AxsFXIAAqtMApQAAAIAAKtgA3jFXIAAqtIF3AAIAAKtg");
	mask.setTransform(506.7,12.5);

	// 图层_3
	this.instance = new lib.呼吸波形();
	this.instance.parent = this;
	this.instance.setTransform(298.4,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.instance_1 = new lib.呼吸波形();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,655.3,32);


(lib.波形2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.血氧();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#61C1B5").ss(1,1,1).p("AgJAAIATAA");
	this.shape.setTransform(357.1,29.7);

	this.instance_1 = new lib.血氧();
	this.instance_1.parent = this;
	this.instance_1.setTransform(357.5,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,714.3,31.4);


(lib.波形1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.心电波形1();
	this.instance.parent = this;
	this.instance.setTransform(355.4,0.4,0.667,0.667);

	this.instance_1 = new lib.心电波形();
	this.instance_1.parent = this;
	this.instance_1.setTransform(356.6,49,0.667,0.667);

	this.instance_2 = new lib.心电波形1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.667,0.667);

	this.instance_3 = new lib.心电波形();
	this.instance_3.parent = this;
	this.instance_3.setTransform(0,48.6,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.8,820.3,89.1);


(lib.提示2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape.setTransform(36.4,49.7,1,1,-65.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_1.setTransform(36.3,48.5,1,1,-65.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_2.setTransform(36.3,41.6,1,1,-35);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_3.setTransform(36.2,40.4,1,1,-35);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_4.setTransform(40.6,35.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_5.setTransform(40.5,33.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_6.setTransform(40.6,35.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_7.setTransform(40.5,33.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_8.setTransform(40.6,35.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_9.setTransform(40.5,33.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_10.setTransform(40.6,35.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_11.setTransform(40.5,33.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgFgFIALAL");
	this.shape_12.setTransform(40.6,35.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B0652F").ss(2,1,1).p("AgFgFIALAL");
	this.shape_13.setTransform(40.5,33.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape,p:{rotation:-65.2,x:36.4,y:49.7}}]},4).to({state:[{t:this.shape_3,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_1,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_2,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape,p:{rotation:-65.2,x:36.4,y:49.7}}]},3).to({state:[{t:this.shape_5,p:{rotation:0,x:40.5,y:33.9}},{t:this.shape_3,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_1,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_4,p:{rotation:0,x:40.6,y:35.1}},{t:this.shape_2,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape,p:{rotation:-65.2,x:36.4,y:49.7}}]},3).to({state:[{t:this.shape_7,p:{rotation:0,x:40.5,y:33.9}},{t:this.shape_5,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_3,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_1,p:{rotation:44.3,x:47.8,y:31.3}},{t:this.shape_6,p:{rotation:0,x:40.6,y:35.1}},{t:this.shape_4,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape_2,p:{rotation:-65.2,x:36.4,y:49.7}},{t:this.shape,p:{rotation:44.3,x:47.9,y:32.5}}]},3).to({state:[{t:this.shape_9,p:{rotation:0,x:40.5,y:33.9}},{t:this.shape_7,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_5,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_3,p:{rotation:44.3,x:47.8,y:31.3}},{t:this.shape_1,p:{rotation:75,x:56.5,y:34.1}},{t:this.shape_8,p:{rotation:0,x:40.6,y:35.1}},{t:this.shape_6,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape_4,p:{rotation:-65.2,x:36.4,y:49.7}},{t:this.shape_2,p:{rotation:44.3,x:47.9,y:32.5}},{t:this.shape,p:{rotation:75,x:56.6,y:35.3}}]},3).to({state:[{t:this.shape_11,p:{rotation:0,x:40.5,y:33.9}},{t:this.shape_9,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_7,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_5,p:{rotation:44.3,x:47.8,y:31.3}},{t:this.shape_3,p:{rotation:75,x:56.5,y:34.1}},{t:this.shape_1,p:{rotation:114.2,x:61.6,y:40.2}},{t:this.shape_10,p:{rotation:0,x:40.6,y:35.1}},{t:this.shape_8,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape_6,p:{rotation:-65.2,x:36.4,y:49.7}},{t:this.shape_4,p:{rotation:44.3,x:47.9,y:32.5}},{t:this.shape_2,p:{rotation:75,x:56.6,y:35.3}},{t:this.shape,p:{rotation:114.2,x:61.7,y:41.4}}]},3).to({state:[{t:this.shape_13},{t:this.shape_11,p:{rotation:-35,x:36.2,y:40.4}},{t:this.shape_9,p:{rotation:-65.2,x:36.3,y:48.5}},{t:this.shape_7,p:{rotation:44.3,x:47.8,y:31.3}},{t:this.shape_5,p:{rotation:75,x:56.5,y:34.1}},{t:this.shape_3,p:{rotation:114.2,x:61.6,y:40.2}},{t:this.shape_1,p:{rotation:148.4,x:61.5,y:48.4}},{t:this.shape_12},{t:this.shape_10,p:{rotation:-35,x:36.3,y:41.6}},{t:this.shape_8,p:{rotation:-65.2,x:36.4,y:49.7}},{t:this.shape_6,p:{rotation:44.3,x:47.9,y:32.5}},{t:this.shape_4,p:{rotation:75,x:56.6,y:35.3}},{t:this.shape_2,p:{rotation:114.2,x:61.7,y:41.4}},{t:this.shape,p:{rotation:148.4,x:61.6,y:49.6}}]},3).wait(4));

	// 图层_3
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(2,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_14.setTransform(48.5,46.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgeAAIA9AA");
	this.shape_15.setTransform(48.3,57.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(2,1,1).p("AgOAAIAdAA");
	this.shape_16.setTransform(48.3,60.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#B0652F").ss(2,1,1).p("ABVAAQAAAjgZAZQgZAZgjAAQgiAAgZgZQgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAig");
	this.shape_17.setTransform(48.4,45);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#B0652F").ss(2,1,1).p("AgeAAIA9AA");
	this.shape_18.setTransform(48.2,56.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#B0652F").ss(2,1,1).p("AgOAAIAdAA");
	this.shape_19.setTransform(48.2,59);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(26));

	// 图层_1
	this.instance = new lib.Q4_4_22tips();
	this.instance.parent = this;
	this.instance.setTransform(-1,-3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-3,315.5,96.1);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_22_sd();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件3, new cjs.Rectangle(0,0,110.1,88.1), null);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFB00").s().p("ABSCaQgXgKgOgUQgNgTAAgYQAAgWAIgQQAIgQANgMQANgNAPgGIAAgCQgSgNgMgTQgNgSAAgZQAAgZAMgTQAMgSAUgKQAVgKAagBQAcABAUAKQAUALALATQALATAAAZQAAAQgGAPQgGAOgKALQgKAMgKAHIAAACQAPAHAMAMQAMALAHAQQAIAQAAAWQAAAYgNASQgNATgXALQgXALgfAAQgeAAgYgLgABWAmQgKARAAAVQAAAQAIAMQAIAMAOAGQANAHASAAQAYAAAPgNQAPgNABgWQgBgUgKgMQgKgNgSgJQgSgKgWgIQgRALgKASgABohzQgNAMAAAWQAAARAJAMQAJAMAPAIQAPAJASAGQAOgNAHgPQAHgPAAgQQAAgXgNgOQgMgOgYgBQgUABgMAMgAjrCgIAAgdQBHg+AjgxQAkgvAAgnQAAgagNgQQgOgQgbgBQgTABgPAKQgQAKgNAPIgcgcQAUgWAXgNQAYgMAeAAQAeAAAVAMQAWAMAMAVQALAVABAdQgBAfgPAgQgPAegaAgQgaAggiAgIAagCIAagBIBQAAIAAArg");
	this.shape.setTransform(52.3,209);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(11));

	// 图层_3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6FC7D5").s().p("Ai/DYQglAAgagNQgZgMgTgTIAjgoQANAOASAIQASAJAUAAQAaAAAVgPQAVgPAOgkQAOgjACg7QgSAXgZANQgYANgZAAQgjAAgagPQgagOgPgcQgPgeAAgrQABgqAQgfQASgeAbgRQAdgRAhAAQApAAAgAVQAhAWATAtQAUAtAABFQgBBRgVAzQgWAzgjAXQgjAXgnAAIgCAAgAjiiOQgRAXgBApQAAAoARAWQARAUAiABQATAAAUgLQAVgMATgbQgFg+gWgdQgWgdgiAAQgbAAgTAXgABrDQQgZgIgUgMQgTgNgPgOIAggrQARASAYANQAYANAgABQAYAAATgLQASgLALgTQALgUAAgcQgBgqgVgXQgVgVglgBQgTAAgPAGQgPAGgRALIghgUIANjFIDTAAIAAA3IiaAAIgKBrQANgHAOgEQANgEARAAQAkAAAcAOQAdAOARAdQARAdAAAtQAAAvgUAgQgTAgggARQggARglAAQghAAgZgIg");
	this.shape_1.setTransform(52.6,136.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).to({_off:true},1).wait(11));

	// 图层_4
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0CCA69").s().p("Ag1CRQgWgTgNgkQgMgkAAg2QAAg3AMgjQANgkAWgSQAXgSAeAAQAfAAAXASQAWASANAkQAMAkAAA2QAAA2gMAkQgNAkgWATQgXASgfAAQgeAAgXgSgAgchvQgMAMgGAbQgIAbAAAtQAAAsAIAcQAGAcAMAMQANAMAPAAQAQAAAMgMQANgMAGgcQAIgcAAgsQAAgtgIgbQgGgbgNgMQgMgMgQAAQgPAAgNAMg");
	this.shape_2.setTransform(62.3,32.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0CCA69").s().p("Ag+CWQgZgMgQgSIAYggQAOAPASAJQASAKAZABQAZgBARgNQAQgOAAgYQAAgSgIgNQgJgNgUgHQgUgHgjAAIAAgjQAfAAARgIQASgHAIgMQAIgMgBgQQAAgWgMgMQgNgMgWAAQgSAAgPAIQgQAJgNANIgagfQATgRAWgKQAWgLAbAAQAbAAAWAJQAWAKAMASQAMASAAAaQAAAbgOATQgPATgZAJIAAACQASAFAPAJQAOALAJAQQAJAQAAAVQgBAcgOAUQgOAUgXALQgYALgcAAQglgBgZgMg");
	this.shape_3.setTransform(37.3,32.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0CCA69").s().p("AhZCdIAAgpIBFAAIAAjZIg4AAIAAgfQAWgFAQgFQARgGANgIIAkAAIAAEQIA+AAIAAApg");
	this.shape_4.setTransform(14,32.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[]},1).wait(11));

	// 图层_1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FBFB00").s().p("ACuDsQgKgEgGgIQgGgJAAgKQAAgJAEgIQADgHAGgFQAGgFAGgDIAAgBQgIgGgFgIQgFgIAAgKQAAgLAFgIQAFgIAIgEQAJgFAMAAQAMAAAIAFQAJAEAFAIQAEAJABAKQgBAIgCAGQgDAGgEAFIgJAIIAAABQAHADAFAFQAFAFADAHQAEAHAAAJQAAAKgGAJQgGAIgKAEQgKAFgNAAQgNAAgKgFgACwC6QgFAIAAAJQAAAGAEAGQADAFAGADQAGADAIAAQAKAAAHgGQAGgGAAgJQAAgJgEgFQgFgGgIgEIgRgHQgHAFgEAHgAC3B4QgFAFAAAKQAAAHAEAFQAEAFAGAEIAOAGQAGgFADgHQADgGAAgHQAAgKgFgGQgGgGgKAAQgIAAgGAFgABKDvQABgZAEgUQAEgUAHgSQAIgSAOgTIhBAAIAAgSIBYAAIAAANQgMAPgHAOQgIAOgEAPQgEAOgCAQIgCAlgAieBiQgKgIgGgQQgFgQAAgYQAAgXAFgPQAGgQAKgIQAKgHAOAAQANAAAKAIQAKAHAFAQQAGAPAAAXQAAAYgGAQQgFAQgKAIQgKAIgNAAQgOAAgKgIgAiTgNQgFAFgDALQgDAMAAATQAAAUADAMQADAMAFAGQAFAFAIAAQAHAAAFgFQAFgGADgMQADgMAAgUQAAgTgDgMQgDgLgFgFQgFgFgHAAQgIAAgFAFgAkHBlQgLgEgFgIQgGgJAAgKQAAgJADgIQAEgHAFgFQAGgFAHgDIAAgBQgIgGgGgIQgFgIAAgKQAAgKAFgIQAFgIAJgEQAJgFALAAQAMAAAJAFQAJAEAEAIQAFAJAAAJQAAAIgDAGQgCAGgEAFIgJAIIAAABQAGADAFAFQAGAFADAHQADAHAAAJQAAAKgGAJQgFAIgKAEQgKAFgNAAQgNAAgKgFgAkGAzQgEAIAAAJQAAAGADAGQAEAFAGADQAGADAHAAQALAAAGgGQAHgGAAgJQAAgJgFgFQgEgGgIgEIgRgHQgHAFgFAHgAj+gOQgGAFAAAJQAAAHAEAFQAEAFAGAEIAPAGQAGgFADgHQADgGAAgHQAAgJgGgGQgFgGgKAAQgJAAgFAFgADahqQgKgIgFgQQgFgQAAgYQAAgXAFgQQAFgQAKgIQAKgHAOAAQANAAAKAIQAKAHAGAQQAFAQAAAXQAAAYgFAQQgGAQgKAIQgKAIgNAAQgOAAgKgIgADmjaQgGAFgDAMQgDAMAAATQAAAUADAMQADAMAGAGQAFAFAHAAQAHAAAFgFQAGgGADgMQADgMAAgUQAAgTgDgMQgDgMgGgFQgFgFgHAAQgHAAgFAFgABihkIAAgSIAeAAIAAhgIgYAAIAAgNIARgFIANgGIAQAAIAAB4IAbAAIAAASgAgHhkIAAgSIAdAAIAAhgIgYAAIAAgNIAQgFIANgGIAQAAIAAB4IAbAAIAAASg");
	this.shape_5.setTransform(56.3,272.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgbBTQgNgGgHgKQgIgLAAgNQAAgLAEgJQAFgJAHgGQAHgHAIgDIAAgBQgKgHgHgKQgGgKAAgOQAAgNAGgKQAHgKAKgFQAMgGANAAQAPAAALAGQAKAGAHAKQAFAKABAOQAAAIgEAIQgEAIgFAGQgEAGgGAEIAAABQAIAEAGAGQAGAGAFAJQAEAIAAAMQAAANgIAKQgGAKgNAGQgMAGgRAAQgPAAgMgGgAgaAUQgFAJAAALQAAAJAFAHQADAGAIAEQAHADAJAAQANAAAIgHQAIgHAAgMQAAgKgFgHQgGgHgKgFIgUgKQgJAHgGAJgAgQg+QgHAHAAALQAAAKAFAGQAFAHAIAEQAHAFAJADQAIgHAEgIQAEgIAAgJQAAgMgHgIQgHgHgNAAQgJAAgHAGg");
	this.shape_6.setTransform(73.4,84.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgMAOQgFgGAAgHQAAgIAFgGQAFgFAHAAQAIAAAEAFQAGAGAAAIQAAAHgGAGQgEAFgIAAQgHAAgFgFg");
	this.shape_7.setTransform(63.3,91.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYBUQgKgDgIgFQgIgGgGgFIANgSQAHAIAKAFQAJAFAOAAQAIAAAIgEQAIgEAFgJQAEgHAAgMQgBgRgIgKQgJgIgOAAQgIAAgGACIgOAHIgMgIIAEhSIBXAAIAAAYIg/AAIgEArIALgEQAGgCAFABQAPgBAMAGQAMAGAHAMQAHAMAAASQAAATgJANQgHANgNAIQgOAGgOAAQgOAAgKgDg");
	this.shape_8.setTransform(52.9,84.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgiBSQgNgHgJgKIANgRQAIAIAKAGQAKAFANAAQAOAAAJgHQAIgIABgOQAAgJgFgHQgFgHgLgEQgKgEgTAAIAAgSQARgBAJgEQAJgDAFgHQAEgHAAgJQAAgMgHgGQgHgHgLAAQgKAAgJAFQgJAEgHAHIgOgRQAKgIAMgGQANgGAOAAQAPAAAMAFQAMAFAGAKQAHAKAAAOQAAAPgIALQgIAJgOAGIAAABQAKACAIAFQAIAGAFAIQAFAJAAAMQAAAQgIAKQgIALgNAGQgNAGgPAAQgUgBgOgGg");
	this.shape_9.setTransform(39.5,84.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[]},1).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,84.9,296.3);


(lib.呼吸波形_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A8KE9IAAp5MA4VAAAIAAJ5g");
	mask.setTransform(178.7,9.2);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C0802").ss(2,1,1).p("AAAkvIAAJf");
	this.shape.setTransform(-1.2,19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0802").ss(2,1,1).p("AAAEwIAApf");
	this.shape_1.setTransform(-0.1,19.6);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-1.2}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:359.1}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:1},0).wait(1).to({x:2.1},0).wait(1).to({x:3.2},0).wait(1).to({x:4.3},0).wait(1).to({x:5.5},0).wait(1).to({x:6.6},0).wait(1).to({x:7.7},0).wait(1).to({x:8.8},0).wait(1).to({x:9.9},0).wait(1).to({x:11},0).wait(1).to({x:12.1},0).wait(1).to({x:13.2},0).wait(1).to({x:14.3},0).wait(1).to({x:15.5},0).wait(1).to({x:16.6},0).wait(1).to({x:17.7},0).wait(1).to({x:18.8},0).wait(1).to({x:19.9},0).wait(1).to({x:21},0).wait(1).to({x:22.1},0).wait(1).to({x:23.2},0).wait(1).to({x:24.4},0).wait(1).to({x:25.5},0).wait(1).to({x:26.6},0).wait(1).to({x:27.7},0).wait(1).to({x:28.8},0).wait(1).to({x:29.9},0).wait(1).to({x:31},0).wait(1).to({x:32.1},0).wait(1).to({x:33.3},0).wait(1).to({x:34.4},0).wait(1).to({x:35.5},0).wait(1).to({x:36.6},0).wait(1).to({x:37.7},0).wait(1).to({x:38.8},0).wait(1).to({x:39.9},0).wait(1).to({x:41},0).wait(1).to({x:42.2},0).wait(1).to({x:43.3},0).wait(1).to({x:44.4},0).wait(1).to({x:45.5},0).wait(1).to({x:46.6},0).wait(1).to({x:47.7},0).wait(1).to({x:48.8},0).wait(1).to({x:49.9},0).wait(1).to({x:51},0).wait(1).to({x:52.2},0).wait(1).to({x:53.3},0).wait(1).to({x:54.4},0).wait(1).to({x:55.5},0).wait(1).to({x:56.6},0).wait(1).to({x:57.7},0).wait(1).to({x:58.8},0).wait(1).to({x:59.9},0).wait(1).to({x:61.1},0).wait(1).to({x:62.2},0).wait(1).to({x:63.3},0).wait(1).to({x:64.4},0).wait(1).to({x:65.5},0).wait(1).to({x:66.6},0).wait(1).to({x:67.7},0).wait(1).to({x:68.8},0).wait(1).to({x:70},0).wait(1).to({x:71.1},0).wait(1).to({x:72.2},0).wait(1).to({x:73.3},0).wait(1).to({x:74.4},0).wait(1).to({x:75.5},0).wait(1).to({x:76.6},0).wait(1).to({x:77.7},0).wait(1).to({x:78.9},0).wait(1).to({x:80},0).wait(1).to({x:81.1},0).wait(1).to({x:82.2},0).wait(1).to({x:83.3},0).wait(1).to({x:84.4},0).wait(1).to({x:85.5},0).wait(1).to({x:86.6},0).wait(1).to({x:87.8},0).wait(1).to({x:88.9},0).wait(1).to({x:90},0).wait(1).to({x:91.1},0).wait(1).to({x:92.2},0).wait(1).to({x:93.3},0).wait(1).to({x:94.4},0).wait(1).to({x:95.5},0).wait(1).to({x:96.6},0).wait(1).to({x:97.8},0).wait(1).to({x:98.9},0).wait(1).to({x:100},0).wait(1).to({x:101.1},0).wait(1).to({x:102.2},0).wait(1).to({x:103.3},0).wait(1).to({x:104.4},0).wait(1).to({x:105.5},0).wait(1).to({x:106.7},0).wait(1).to({x:107.8},0).wait(1).to({x:108.9},0).wait(1).to({x:110},0).wait(1).to({x:111.1},0).wait(1).to({x:112.2},0).wait(1).to({x:113.3},0).wait(1).to({x:114.4},0).wait(1).to({x:115.6},0).wait(1).to({x:116.7},0).wait(1).to({x:117.8},0).wait(1).to({x:118.9},0).wait(1).to({x:120},0).wait(1).to({x:121.1},0).wait(1).to({x:122.2},0).wait(1).to({x:123.3},0).wait(1).to({x:124.5},0).wait(1).to({x:125.6},0).wait(1).to({x:126.7},0).wait(1).to({x:127.8},0).wait(1).to({x:128.9},0).wait(1).to({x:130},0).wait(1).to({x:131.1},0).wait(1).to({x:132.2},0).wait(1).to({x:133.4},0).wait(1).to({x:134.5},0).wait(1).to({x:135.6},0).wait(1).to({x:136.7},0).wait(1).to({x:137.8},0).wait(1).to({x:138.9},0).wait(1).to({x:140},0).wait(1).to({x:141.1},0).wait(1).to({x:142.2},0).wait(1).to({x:143.4},0).wait(1).to({x:144.5},0).wait(1).to({x:145.6},0).wait(1).to({x:146.7},0).wait(1).to({x:147.8},0).wait(1).to({x:148.9},0).wait(1).to({x:150},0).wait(1).to({x:151.1},0).wait(1).to({x:152.3},0).wait(1).to({x:153.4},0).wait(1).to({x:154.5},0).wait(1).to({x:155.6},0).wait(1).to({x:156.7},0).wait(1).to({x:157.8},0).wait(1).to({x:158.9},0).wait(1).to({x:160},0).wait(1).to({x:161.2},0).wait(1).to({x:162.3},0).wait(1).to({x:163.4},0).wait(1).to({x:164.5},0).wait(1).to({x:165.6},0).wait(1).to({x:166.7},0).wait(1).to({x:167.8},0).wait(1).to({x:168.9},0).wait(1).to({x:170.1},0).wait(1).to({x:171.2},0).wait(1).to({x:172.3},0).wait(1).to({x:173.4},0).wait(1).to({x:174.5},0).wait(1).to({x:175.6},0).wait(1).to({x:176.7},0).wait(1).to({x:177.8},0).wait(1).to({x:179},0).wait(1).to({x:180.1},0).wait(1).to({x:181.2},0).wait(1).to({x:182.3},0).wait(1).to({x:183.4},0).wait(1).to({x:184.5},0).wait(1).to({x:185.6},0).wait(1).to({x:186.7},0).wait(1).to({x:187.8},0).wait(1).to({x:189},0).wait(1).to({x:190.1},0).wait(1).to({x:191.2},0).wait(1).to({x:192.3},0).wait(1).to({x:193.4},0).wait(1).to({x:194.5},0).wait(1).to({x:195.6},0).wait(1).to({x:196.7},0).wait(1).to({x:197.9},0).wait(1).to({x:199},0).wait(1).to({x:200.1},0).wait(1).to({x:201.2},0).wait(1).to({x:202.3},0).wait(1).to({x:203.4},0).wait(1).to({x:204.5},0).wait(1).to({x:205.6},0).wait(1).to({x:206.8},0).wait(1).to({x:207.9},0).wait(1).to({x:209},0).wait(1).to({x:210.1},0).wait(1).to({x:211.2},0).wait(1).to({x:212.3},0).wait(1).to({x:213.4},0).wait(1).to({x:214.5},0).wait(1).to({x:215.7},0).wait(1).to({x:216.8},0).wait(1).to({x:217.9},0).wait(1).to({x:219},0).wait(1).to({x:220.1},0).wait(1).to({x:221.2},0).wait(1).to({x:222.3},0).wait(1).to({x:223.4},0).wait(1).to({x:224.5},0).wait(1).to({x:225.7},0).wait(1).to({x:226.8},0).wait(1).to({x:227.9},0).wait(1).to({x:229},0).wait(1).to({x:230.1},0).wait(1).to({x:231.2},0).wait(1).to({x:232.3},0).wait(1).to({x:233.4},0).wait(1).to({x:234.6},0).wait(1).to({x:235.7},0).wait(1).to({x:236.8},0).wait(1).to({x:237.9},0).wait(1).to({x:239},0).wait(1).to({x:240.1},0).wait(1).to({x:241.2},0).wait(1).to({x:242.3},0).wait(1).to({x:243.5},0).wait(1).to({x:244.6},0).wait(1).to({x:245.7},0).wait(1).to({x:246.8},0).wait(1).to({x:247.9},0).wait(1).to({x:249},0).wait(1).to({x:250.1},0).wait(1).to({x:251.2},0).wait(1).to({x:252.4},0).wait(1).to({x:253.5},0).wait(1).to({x:254.6},0).wait(1).to({x:255.7},0).wait(1).to({x:256.8},0).wait(1).to({x:257.9},0).wait(1).to({x:259},0).wait(1).to({x:260.1},0).wait(1).to({x:261.3},0).wait(1).to({x:262.4},0).wait(1).to({x:263.5},0).wait(1).to({x:264.6},0).wait(1).to({x:265.7},0).wait(1).to({x:266.8},0).wait(1).to({x:267.9},0).wait(1).to({x:269},0).wait(1).to({x:270.1},0).wait(1).to({x:271.3},0).wait(1).to({x:272.4},0).wait(1).to({x:273.5},0).wait(1).to({x:274.6},0).wait(1).to({x:275.7},0).wait(1).to({x:276.8},0).wait(1).to({x:277.9},0).wait(1).to({x:279},0).wait(1).to({x:280.2},0).wait(1).to({x:281.3},0).wait(1).to({x:282.4},0).wait(1).to({x:283.5},0).wait(1).to({x:284.6},0).wait(1).to({x:285.7},0).wait(1).to({x:286.8},0).wait(1).to({x:287.9},0).wait(1).to({x:289.1},0).wait(1).to({x:290.2},0).wait(1).to({x:291.3},0).wait(1).to({x:292.4},0).wait(1).to({x:293.5},0).wait(1).to({x:294.6},0).wait(1).to({x:295.7},0).wait(1).to({x:296.8},0).wait(1).to({x:298},0).wait(1).to({x:299.1},0).wait(1).to({x:300.2},0).wait(1).to({x:301.3},0).wait(1).to({x:302.4},0).wait(1).to({x:303.5},0).wait(1).to({x:304.6},0).wait(1).to({x:305.7},0).wait(1).to({x:306.9},0).wait(1).to({x:308},0).wait(1).to({x:309.1},0).wait(1).to({x:310.2},0).wait(1).to({x:311.3},0).wait(1).to({x:312.4},0).wait(1).to({x:313.5},0).wait(1).to({x:314.6},0).wait(1).to({x:315.7},0).wait(1).to({x:316.9},0).wait(1).to({x:318},0).wait(1).to({x:319.1},0).wait(1).to({x:320.2},0).wait(1).to({x:321.3},0).wait(1).to({x:322.4},0).wait(1).to({x:323.5},0).wait(1).to({x:324.6},0).wait(1).to({x:325.8},0).wait(1).to({x:326.9},0).wait(1).to({x:328},0).wait(1).to({x:329.1},0).wait(1).to({x:330.2},0).wait(1).to({x:331.3},0).wait(1).to({x:332.4},0).wait(1).to({x:333.5},0).wait(1).to({x:334.7},0).wait(1).to({x:335.8},0).wait(1).to({x:336.9},0).wait(1).to({x:338},0).wait(1).to({x:339.1},0).wait(1).to({x:340.2},0).wait(1).to({x:341.3},0).wait(1).to({x:342.4},0).wait(1).to({x:343.6},0).wait(1).to({x:344.7},0).wait(1).to({x:345.8},0).wait(1).to({x:346.9},0).wait(1).to({x:348},0).wait(1).to({x:349.1},0).wait(1).to({x:350.2},0).wait(1).to({x:351.3},0).wait(1).to({x:352.4},0).wait(1).to({x:353.6},0).wait(1).to({x:354.7},0).wait(1).to({x:355.8},0).wait(1).to({x:356.9},0).wait(1).to({x:358},0).to({_off:true},1).wait(1));

	// 图层_1
	this.instance = new lib.波形3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(178.4,16,1,1,0,0,0,178.4,16);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(325));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.6,-11.8,360.7,52.8);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件3();
	this.instance.parent = this;
	this.instance.setTransform(55,44,1,1,0,0,0,55,44);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(10).to({alpha:0},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110.1,88.1);


(lib.血压波形 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A73H2IAAvrMA3vAAAIAAPrg");
	mask.setTransform(178.4,49);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C0802").ss(2,1,1).p("AAAq/IAAV/");
	this.shape.setTransform(-3.1,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0802").ss(2,1,1).p("AAALAIAA1/");
	this.shape_1.setTransform(-1,26.9);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-3.1}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:359.8}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:1.2},0).wait(1).to({x:3.4},0).wait(1).to({x:5.6},0).wait(1).to({x:7.7},0).wait(1).to({x:9.9},0).wait(1).to({x:12.1},0).wait(1).to({x:14.3},0).wait(1).to({x:16.4},0).wait(1).to({x:18.6},0).wait(1).to({x:20.8},0).wait(1).to({x:23},0).wait(1).to({x:25.1},0).wait(1).to({x:27.3},0).wait(1).to({x:29.5},0).wait(1).to({x:31.6},0).wait(1).to({x:33.8},0).wait(1).to({x:36},0).wait(1).to({x:38.2},0).wait(1).to({x:40.3},0).wait(1).to({x:42.5},0).wait(1).to({x:44.7},0).wait(1).to({x:46.9},0).wait(1).to({x:49},0).wait(1).to({x:51.2},0).wait(1).to({x:53.4},0).wait(1).to({x:55.5},0).wait(1).to({x:57.7},0).wait(1).to({x:59.9},0).wait(1).to({x:62.1},0).wait(1).to({x:64.2},0).wait(1).to({x:66.4},0).wait(1).to({x:68.6},0).wait(1).to({x:70.8},0).wait(1).to({x:72.9},0).wait(1).to({x:75.1},0).wait(1).to({x:77.3},0).wait(1).to({x:79.4},0).wait(1).to({x:81.6},0).wait(1).to({x:83.8},0).wait(1).to({x:86},0).wait(1).to({x:88.1},0).wait(1).to({x:90.3},0).wait(1).to({x:92.5},0).wait(1).to({x:94.7},0).wait(1).to({x:96.8},0).wait(1).to({x:99},0).wait(1).to({x:101.2},0).wait(1).to({x:103.4},0).wait(1).to({x:105.5},0).wait(1).to({x:107.7},0).wait(1).to({x:109.9},0).wait(1).to({x:112},0).wait(1).to({x:114.2},0).wait(1).to({x:116.4},0).wait(1).to({x:118.6},0).wait(1).to({x:120.7},0).wait(1).to({x:122.9},0).wait(1).to({x:125.1},0).wait(1).to({x:127.3},0).wait(1).to({x:129.4},0).wait(1).to({x:131.6},0).wait(1).to({x:133.8},0).wait(1).to({x:136},0).wait(1).to({x:138.1},0).wait(1).to({x:140.3},0).wait(1).to({x:142.5},0).wait(1).to({x:144.6},0).wait(1).to({x:146.8},0).wait(1).to({x:149},0).wait(1).to({x:151.2},0).wait(1).to({x:153.3},0).wait(1).to({x:155.5},0).wait(1).to({x:157.7},0).wait(1).to({x:159.9},0).wait(1).to({x:162},0).wait(1).to({x:164.2},0).wait(1).to({x:166.4},0).wait(1).to({x:168.5},0).wait(1).to({x:170.7},0).wait(1).to({x:172.9},0).wait(1).to({x:175.1},0).wait(1).to({x:177.2},0).wait(1).to({x:179.4},0).wait(1).to({x:181.6},0).wait(1).to({x:183.8},0).wait(1).to({x:185.9},0).wait(1).to({x:188.1},0).wait(1).to({x:190.3},0).wait(1).to({x:192.5},0).wait(1).to({x:194.6},0).wait(1).to({x:196.8},0).wait(1).to({x:199},0).wait(1).to({x:201.1},0).wait(1).to({x:203.3},0).wait(1).to({x:205.5},0).wait(1).to({x:207.7},0).wait(1).to({x:209.8},0).wait(1).to({x:212},0).wait(1).to({x:214.2},0).wait(1).to({x:216.4},0).wait(1).to({x:218.5},0).wait(1).to({x:220.7},0).wait(1).to({x:222.9},0).wait(1).to({x:225},0).wait(1).to({x:227.2},0).wait(1).to({x:229.4},0).wait(1).to({x:231.6},0).wait(1).to({x:233.7},0).wait(1).to({x:235.9},0).wait(1).to({x:238.1},0).wait(1).to({x:240.3},0).wait(1).to({x:242.4},0).wait(1).to({x:244.6},0).wait(1).to({x:246.8},0).wait(1).to({x:248.9},0).wait(1).to({x:251.1},0).wait(1).to({x:253.3},0).wait(1).to({x:255.5},0).wait(1).to({x:257.6},0).wait(1).to({x:259.8},0).wait(1).to({x:262},0).wait(1).to({x:264.2},0).wait(1).to({x:266.3},0).wait(1).to({x:268.5},0).wait(1).to({x:270.7},0).wait(1).to({x:272.9},0).wait(1).to({x:275},0).wait(1).to({x:277.2},0).wait(1).to({x:279.4},0).wait(1).to({x:281.5},0).wait(1).to({x:283.7},0).wait(1).to({x:285.9},0).wait(1).to({x:288.1},0).wait(1).to({x:290.2},0).wait(1).to({x:292.4},0).wait(1).to({x:294.6},0).wait(1).to({x:296.8},0).wait(1).to({x:298.9},0).wait(1).to({x:301.1},0).wait(1).to({x:303.3},0).wait(1).to({x:305.4},0).wait(1).to({x:307.6},0).wait(1).to({x:309.8},0).wait(1).to({x:312},0).wait(1).to({x:314.1},0).wait(1).to({x:316.3},0).wait(1).to({x:318.5},0).wait(1).to({x:320.7},0).wait(1).to({x:322.8},0).wait(1).to({x:325},0).wait(1).to({x:327.2},0).wait(1).to({x:329.4},0).wait(1).to({x:331.5},0).wait(1).to({x:333.7},0).wait(1).to({x:335.9},0).wait(1).to({x:338},0).wait(1).to({x:340.2},0).wait(1).to({x:342.4},0).wait(1).to({x:344.6},0).wait(1).to({x:346.7},0).wait(1).to({x:348.9},0).wait(1).to({x:351.1},0).wait(1).to({x:353.3},0).wait(1).to({x:355.4},0).wait(1).to({x:357.6},0).to({_off:true},1).wait(1));

	// 图层_1
	this.instance = new lib.波形1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(356.7,44.1,1,1,0,0,0,356.7,44.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.8,88.4);


(lib.血氧波形 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A76CwIAAlfMA31AAAIAAFfg");
	mask.setTransform(178.1,17.2);

	// 图层_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#0C0802").ss(2,1,1).p("AAAkVIAAIr");
	this.shape.setTransform(-1.9,16.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#0C0802").ss(2,1,1).p("AAAEWIAAor");
	this.shape_1.setTransform(-0.1,16.3);
	this.shape_1._off = true;

	var maskedShapeInstanceList = [this.shape,this.shape_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-1.9}}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape,p:{x:359.1}}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1).to({_off:false},0).wait(1).to({x:1.6},0).wait(1).to({x:3.3},0).wait(1).to({x:5},0).wait(1).to({x:6.8},0).wait(1).to({x:8.5},0).wait(1).to({x:10.2},0).wait(1).to({x:11.9},0).wait(1).to({x:13.7},0).wait(1).to({x:15.4},0).wait(1).to({x:17.1},0).wait(1).to({x:18.9},0).wait(1).to({x:20.6},0).wait(1).to({x:22.3},0).wait(1).to({x:24},0).wait(1).to({x:25.8},0).wait(1).to({x:27.5},0).wait(1).to({x:29.2},0).wait(1).to({x:30.9},0).wait(1).to({x:32.7},0).wait(1).to({x:34.4},0).wait(1).to({x:36.1},0).wait(1).to({x:37.8},0).wait(1).to({x:39.6},0).wait(1).to({x:41.3},0).wait(1).to({x:43},0).wait(1).to({x:44.8},0).wait(1).to({x:46.5},0).wait(1).to({x:48.2},0).wait(1).to({x:49.9},0).wait(1).to({x:51.7},0).wait(1).to({x:53.4},0).wait(1).to({x:55.1},0).wait(1).to({x:56.8},0).wait(1).to({x:58.6},0).wait(1).to({x:60.3},0).wait(1).to({x:62},0).wait(1).to({x:63.8},0).wait(1).to({x:65.5},0).wait(1).to({x:67.2},0).wait(1).to({x:68.9},0).wait(1).to({x:70.7},0).wait(1).to({x:72.4},0).wait(1).to({x:74.1},0).wait(1).to({x:75.8},0).wait(1).to({x:77.6},0).wait(1).to({x:79.3},0).wait(1).to({x:81},0).wait(1).to({x:82.8},0).wait(1).to({x:84.5},0).wait(1).to({x:86.2},0).wait(1).to({x:87.9},0).wait(1).to({x:89.7},0).wait(1).to({x:91.4},0).wait(1).to({x:93.1},0).wait(1).to({x:94.8},0).wait(1).to({x:96.6},0).wait(1).to({x:98.3},0).wait(1).to({x:100},0).wait(1).to({x:101.7},0).wait(1).to({x:103.5},0).wait(1).to({x:105.2},0).wait(1).to({x:106.9},0).wait(1).to({x:108.7},0).wait(1).to({x:110.4},0).wait(1).to({x:112.1},0).wait(1).to({x:113.8},0).wait(1).to({x:115.6},0).wait(1).to({x:117.3},0).wait(1).to({x:119},0).wait(1).to({x:120.7},0).wait(1).to({x:122.5},0).wait(1).to({x:124.2},0).wait(1).to({x:125.9},0).wait(1).to({x:127.7},0).wait(1).to({x:129.4},0).wait(1).to({x:131.1},0).wait(1).to({x:132.8},0).wait(1).to({x:134.6},0).wait(1).to({x:136.3},0).wait(1).to({x:138},0).wait(1).to({x:139.7},0).wait(1).to({x:141.5},0).wait(1).to({x:143.2},0).wait(1).to({x:144.9},0).wait(1).to({x:146.7},0).wait(1).to({x:148.4},0).wait(1).to({x:150.1},0).wait(1).to({x:151.8},0).wait(1).to({x:153.6},0).wait(1).to({x:155.3},0).wait(1).to({x:157},0).wait(1).to({x:158.7},0).wait(1).to({x:160.5},0).wait(1).to({x:162.2},0).wait(1).to({x:163.9},0).wait(1).to({x:165.6},0).wait(1).to({x:167.4},0).wait(1).to({x:169.1},0).wait(1).to({x:170.8},0).wait(1).to({x:172.6},0).wait(1).to({x:174.3},0).wait(1).to({x:176},0).wait(1).to({x:177.7},0).wait(1).to({x:179.5},0).wait(1).to({x:181.2},0).wait(1).to({x:182.9},0).wait(1).to({x:184.6},0).wait(1).to({x:186.4},0).wait(1).to({x:188.1},0).wait(1).to({x:189.8},0).wait(1).to({x:191.6},0).wait(1).to({x:193.3},0).wait(1).to({x:195},0).wait(1).to({x:196.7},0).wait(1).to({x:198.5},0).wait(1).to({x:200.2},0).wait(1).to({x:201.9},0).wait(1).to({x:203.6},0).wait(1).to({x:205.4},0).wait(1).to({x:207.1},0).wait(1).to({x:208.8},0).wait(1).to({x:210.5},0).wait(1).to({x:212.3},0).wait(1).to({x:214},0).wait(1).to({x:215.7},0).wait(1).to({x:217.5},0).wait(1).to({x:219.2},0).wait(1).to({x:220.9},0).wait(1).to({x:222.6},0).wait(1).to({x:224.4},0).wait(1).to({x:226.1},0).wait(1).to({x:227.8},0).wait(1).to({x:229.5},0).wait(1).to({x:231.3},0).wait(1).to({x:233},0).wait(1).to({x:234.7},0).wait(1).to({x:236.5},0).wait(1).to({x:238.2},0).wait(1).to({x:239.9},0).wait(1).to({x:241.6},0).wait(1).to({x:243.4},0).wait(1).to({x:245.1},0).wait(1).to({x:246.8},0).wait(1).to({x:248.5},0).wait(1).to({x:250.3},0).wait(1).to({x:252},0).wait(1).to({x:253.7},0).wait(1).to({x:255.5},0).wait(1).to({x:257.2},0).wait(1).to({x:258.9},0).wait(1).to({x:260.6},0).wait(1).to({x:262.4},0).wait(1).to({x:264.1},0).wait(1).to({x:265.8},0).wait(1).to({x:267.5},0).wait(1).to({x:269.3},0).wait(1).to({x:271},0).wait(1).to({x:272.7},0).wait(1).to({x:274.4},0).wait(1).to({x:276.2},0).wait(1).to({x:277.9},0).wait(1).to({x:279.6},0).wait(1).to({x:281.4},0).wait(1).to({x:283.1},0).wait(1).to({x:284.8},0).wait(1).to({x:286.5},0).wait(1).to({x:288.3},0).wait(1).to({x:290},0).wait(1).to({x:291.7},0).wait(1).to({x:293.4},0).wait(1).to({x:295.2},0).wait(1).to({x:296.9},0).wait(1).to({x:298.6},0).wait(1).to({x:300.4},0).wait(1).to({x:302.1},0).wait(1).to({x:303.8},0).wait(1).to({x:305.5},0).wait(1).to({x:307.3},0).wait(1).to({x:309},0).wait(1).to({x:310.7},0).wait(1).to({x:312.4},0).wait(1).to({x:314.2},0).wait(1).to({x:315.9},0).wait(1).to({x:317.6},0).wait(1).to({x:319.4},0).wait(1).to({x:321.1},0).wait(1).to({x:322.8},0).wait(1).to({x:324.5},0).wait(1).to({x:326.3},0).wait(1).to({x:328},0).wait(1).to({x:329.7},0).wait(1).to({x:331.4},0).wait(1).to({x:333.2},0).wait(1).to({x:334.9},0).wait(1).to({x:336.6},0).wait(1).to({x:338.3},0).wait(1).to({x:340.1},0).wait(1).to({x:341.8},0).wait(1).to({x:343.5},0).wait(1).to({x:345.3},0).wait(1).to({x:347},0).wait(1).to({x:348.7},0).wait(1).to({x:350.4},0).wait(1).to({x:352.2},0).wait(1).to({x:353.9},0).wait(1).to({x:355.6},0).wait(1).to({x:357.3},0).to({_off:true},1).wait(1));

	// 图层_1
	this.instance = new lib.波形2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(178.4,15.7,1,1,0,0,0,178.4,15.7);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(210));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,356.8,31.4);


(lib.动画2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.呼吸波形_1();
	this.instance.parent = this;
	this.instance.setTransform(617.3,407.1,0.984,0.984,0,0,0,178.5,16.1);

	this.instance_1 = new lib.血压波形();
	this.instance_1.parent = this;
	this.instance_1.setTransform(617.3,256.5,0.984,0.984,0,0,0,178.5,44);

	this.instance_2 = new lib.血氧波形();
	this.instance_2.parent = this;
	this.instance_2.setTransform(617.3,344.1,0.984,0.984,0,0,0,178.5,15.7);

	this.instance_3 = new lib.元件2("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(851.7,341.5,0.984,0.984,0,0,0,44.9,152.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// 图层_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EBEBEB").s().p("AiGUqQgFgEgCgHQgCgIgBgMQABgLACgIQACgHAFgEQAFgEAHAAQAGAAAFAEQAFAEADAHQACAIAAALQAAAMgCAIQgDAHgFAEQgFAEgGAAQgHAAgFgEgAiAT0QgDACgCAGQgBAGAAAJQAAAKABAGQACAGADACQACADAEAAQADAAACgDQADgCACgGIACgQIgCgPQgCgGgDgCQgCgDgDAAQgEAAgCADgAjaUsQgCgCAAgDQAAgEACgCQACgCADAAQADAAACACQACACAAAEQAAADgCACQgCACgDAAQgDAAgCgCgAk7UqQgFgEgDgHQgCgIgBgMQABgLACgIQADgHAFgEQAEgEAHAAQAGAAAGAEQAEAEADAHQACAIABALQgBAMgCAIQgDAHgEAEQgGAEgGAAQgHAAgEgEgAk2T0QgCACgCAGQgBAGgBAJQABAKABAGQACAGACACQADADADAAQADAAADgDQADgCACgGIABgQIgBgPQgCgGgDgCQgDgDgDAAQgDAAgDADgAi/UtIAAgJIAOAAIAAguIgMAAIAAgHIAIgCIAHgDIAHAAIAAA6IANAAIAAAJgAkFUtQABgMACgKQACgKADgIQAEgJAGgJIgeAAIAAgJIAqAAIAAAHIgKAOQgDAGgCAHQgCAHAAAIIgCASgAjaUIQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCgACXzyIARg7IAGAAIgRA7gAA8zyIARg7IAEAAIgRA7gAACzyIARg7IAFAAIgRA7gAEwz/QgCgCgCgFQgCgFAAgIQAAgIACgFQACgFACgCQADgDAFAAQAFAAADADQADACABAFQACAFABAIQgBAIgCAFQgBAFgDACQgDADgFAAQgFAAgDgDgAE00jIgDAGIgBAKIABAKQABAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgEIABgKIgBgKQgBgEgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABgAD4z9IgBgEIABgDQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAAAgAC4z/QgEgCgCgFQgBgFAAgIQAAgIABgFQACgFAEgCQADgDAEAAQAEAAADADQAEACACAFQABAFAAAIQAAAIgBAFQgCAFgEACQgDADgEAAQgEAAgDgDgAC70jQgCACAAAEIgBAKIABAKQAAAEACACQABAAAAABQABAAAAAAQABABAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgEIABgKIgBgKQgBgEgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABgAB+z9QgDgCgCgDQgBgCAAgEIABgFIACgEIAEgDIgEgEQgCgDABgDQgBgEACgCQACgDACgBQADgCAEAAQAEAAADACQACABACADIACAGIgCAEIgCAEIgCACIAAABIADACIADAEIABAFQAAAEgCACQgBADgEABQgDACgFAAQgDAAgEgBgAB/0OQgBADgBADIABADIAEADIAEABQAEAAACgCQABgCABgDQAAAAgBgBQAAgBAAAAQAAgBAAAAQgBgBAAAAIgEgDIgFgDQgDACgBACgACB0jQgCACAAADIACAEIADADIAEACIAEgEIABgFQgBgDgBgCQgCgCgDAAQgDAAgCACgAAkz+QgDgDgCgFQgCgFgBgHQABgJACgFQACgFADgCQAEgDAFAAQAEAAADACIAEADIgEAEIgDgCIgEgBQgDAAgCABQgDACgBAEQgBADgBAHIAFgEIAFgBQAEAAADABQADACABADQACADAAAFQAAAEgCADIgFAFQgDACgEAAQgEAAgDgCgAAn0SQgDABgCADQABAGACAEQADADADAAQADAAADgDQABgCAAgEQAAgFgBgCQgDgCgDAAIgEABgAhbz/QgCgCgCgFQgCgFAAgIQAAgIACgFQACgFACgCQADgDAFAAQAFAAADADQADACABAFQACAFABAIQgBAIgCAFQgBAFgDACQgDADgFAAQgFAAgDgDgAhX0jIgDAGIgBAKIABAKQABAEACACQAAAAABABQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAQACgCABgEIABgKIgBgKQgBgEgCgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgEABgAEKz9IAAgFIAKAAIAAgfIgJAAIAAgFIAGgBIAEgCIAGAAIAAAnIAIAAIAAAFgADcz9IACgOIADgMQADgGAEgGIgUAAIAAgGIAcAAIAAAEIgHAKIgDAJIgCAKIgBALgABXz9IAAgFIAKAAIAAgfIgIAAIAAgFIAGgBIAEgCIAGAAIAAAnIAIAAIAAAFgAgdz9IAAgEQAKgIAFgHQAFgHAAgFQAAgEgCgCQgCgCgEAAIgEABIgFAEIgDgEIAGgFQADgCAEAAQAFAAACACQADABACADQABADABAEQAAAFgCAEIgGAJIgJAJIAEgBIAEAAIAKAAIAAAGgAg/z9IAAgEQAKgIAFgHQAFgHAAgFQAAgEgCgCQgCgCgDAAIgGABIgDAEIgEgEIAGgFQADgCAFAAQADAAADACQAEABABADQACADgBAEQAAAFgBAEIgGAJIgJAJIAEgBIADAAIALAAIAAAGgAiDz9IAAgEQAJgIAFgHQAGgHAAgFQAAgEgCgCQgDgCgDAAIgFABIgEAEIgDgEIAFgFQADgCAFAAQAEAAADACQADABABADQACADAAAEQAAAFgCAEIgFAJIgJAJIADgBIAEAAIALAAIAAAGgAD40VIgBgDIABgEQAAAAABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABAAAAIgEABIgDgBg");
	this.shape.setTransform(868.3,305.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#959598").s().p("Aj0ArIAAhVIHoAAIAABVg");
	this.shape_1.setTransform(878.7,176.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 图层_7
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C0704").s().p("Ai1BGIAAiLIFrAAIAACLg");
	this.shape_2.setTransform(850.8,434.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// 图层_5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egk/AbcMAAAg23MBJ/AAAMAAAA23g");
	mask.setTransform(667.2,346.8);

	// 图层_3
	this.instance_4 = new lib.A4_1_1心电界面();
	this.instance_4.parent = this;
	this.instance_4.setTransform(429.7,168.7,0.656,0.656);

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// 图层_1
	this.instance_5 = new lib.A4_4_12Jpg_other0431();
	this.instance_5.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio19664' + 'Object'].actionPlay();
	}
	this.frame_131 = function() {
		this.stop();
		window.parent.trivNextPage();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(130).call(this.frame_131).wait(1));

	// 图层_4
	this.instance = new lib.提示2();
	this.instance.parent = this;
	this.instance.setTransform(921.9,328.1,1,1,0,0,0,3.9,47.1);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:910.6,alpha:1},7).to({x:913.1},5).wait(120));

	// 图层_3
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(853.5,330.5,1,1,0,0,0,55,44);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132));

	// 图层_1
	this.instance_2 = new lib.动画2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(132));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Q4_4_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(319.4,251,1,1,0,0,0,319.4,251);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '44DAA294BF66A049AE7C3A017BD9672E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_1_1心电界面.jpg?1695374003694", id:"A4_1_1心电界面"},
		{src:"images/A4_4_12Jpg_other0431.jpg?1695374003694", id:"A4_4_12Jpg_other0431"},
		{src:"images/Q4_4_22_atlas_P_.png?1695374003591", id:"Q4_4_22_atlas_P_"}
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
an.compositions['44DAA294BF66A049AE7C3A017BD9672E'] = {
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