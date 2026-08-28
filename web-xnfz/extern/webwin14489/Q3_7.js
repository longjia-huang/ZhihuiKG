(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q3_7_atlas_P_", frames: [[0,0,861,703]]},
		{name:"Q3_7_atlas_P_2", frames: [[0,0,768,691]]},
		{name:"Q3_7_atlas_P_3", frames: [[0,0,472,906],[474,0,353,818]]},
		{name:"Q3_7_atlas_P_4", frames: [[572,0,239,79],[572,81,239,79],[813,0,101,66],[813,68,101,66],[0,0,290,321],[292,0,278,261],[292,263,452,156]]}
];


// symbols:



(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1878,1062);


(lib.jixu = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_1 = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_2 = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_bg1 = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_bxsf = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_cw = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_DJ = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_dsttips = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_4"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7_stds = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7点击排序 = function() {
	this.spriteSheet = ss["Q3_7_atlas_P_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q3_7背景底图 = function() {
	this.initialize(img.Q3_7背景底图);
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


(lib.TISHITUT = function(mode,startPosition,loop) {
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

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(38.9,35.5,19.1,25.7);


(lib.元件15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap4();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1878,1062);


(lib.元件14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_7背景底图();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_7_cw();
	this.instance.parent = this;
	this.instance.setTransform(-145,-160.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(-145,-160.5,290,321), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q3_7_bxsf();
	this.instance.parent = this;
	this.instance.setTransform(-518.9,-286.2,0.667,0.667);

	this.instance_1 = new lib.Q3_7_stds();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-303.3,-140.3,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-518.9,-286.2,314.8,604.3);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(47,59,75,0.02)").s().p("Au3NdIAA65IdvAAIAAa5g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-86,190.4,172.1);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Q3_7_1();
	this.instance.parent = this;
	this.instance.setTransform(-50.5,-33);

	this.instance_1 = new lib.Q3_7_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50.5,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50.5,-33,101,66);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_7_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-92.7,-87,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-92.7,-87,185.4,174.1), null);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_7点击排序();
	this.instance.parent = this;
	this.instance.setTransform(-35.1,-0.5,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(-35.1,-0.5,235.5,545.6), null);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q3_7_bg1();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,512.3,460.9), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.TISHITUT();
	this.instance.parent = this;
	this.instance.setTransform(-165.5,-45.3);

	this.instance_1 = new lib.Q3_7_dsttips();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-157.4,-52,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-157.4,-52,301.5,104.1), null);


(lib.Z = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio125534' + 'Object'].actionPlay();
	}
	this.frame_123 = function() {
		var _this = this;
		_this.stop();
		
		var arr1 = [];
		
		createjs.Touch.enable(stage);
		var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		_this.tishi1.visible = false;
		_this.tishi2.visible = false;
		_this.tishi3.visible = false;
		_this.tishi4.visible = false;
		var btnNum = 2
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		//先七步洗手法洗手再戴手套
		var flag = true;
		function stopSound(id, loop) {
			return createjs.Sound.stop(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
		}
		
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				window.parent['audio125534' + 'Object'].actionStop();
				stopSound('music1');
				stopSound('chooseError');
				stopSound('over');
				playSound('click');
				if (e.target.name.indexOf("btn_") >= 0) {
		
					var curNum = Number(e.target.name.substring(4));
					//console.log(curNum)
		
					for (var i = 1; i <= btnNum; i++) {
						_this['show' + i].visible = false;
					}
					_this['show' + curNum].visible = true;
					_this['tishi' + curNum].visible = true;
					_this.tishi3.visible = true;
					_this.tishi3.gotoAndStop(curNum - 1);
		
					var index = arr1.indexOf(curNum);
					if (index == -1) {
						arr1.push(curNum);
					}
					_this['tishi' + curNum].gotoAndStop(arr1.length - 1);
		
					if (curNum == 1) {
						console.log(curNum);
						playSound('musci1');
						_this.daan.visible= false;
					}
					if ( arr1[0] == 2) {
						_this.daan.visible = true;
						_this.tishi1.visible = false;
						_this.tishi2.visible = false;
						playSound('error');
						playSound('chooseError');
						arr1.length = 0;
					}
					if ( arr1[1] == 2) {
						
						playSound('over');
						
						
						_this.tishi3.gotoAndStop(1);
						_this.tishi4.visible = true;
						
						_this.btn_1.visible = false;
						_this.btn_2.visible = false;
						
						_this.jixu.visible = true;
					}
				}else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
		
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(122).call(this.frame_123).wait(2));

	// 图层_4
	this.tishi4 = new lib.元件8();
	this.tishi4.name = "tishi4";
	this.tishi4.parent = this;
	this.tishi4.setTransform(203.8,374.8);

	this.daan = new lib.元件11();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(873.9,609.3,0.67,0.67);

	this.tishi3 = new lib.元件10();
	this.tishi3.name = "tishi3";
	this.tishi3.parent = this;
	this.tishi3.setTransform(556.4,391.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.tishi3},{t:this.daan},{t:this.tishi4}]},123).wait(2));

	// 图层_7
	this.btn_1 = new lib.元件9();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(1158.8,542.9);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件9(), 3);

	this.btn_2 = new lib.元件9();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(1158.8,353.5);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件9(), 3);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.parent = this;
	this.jixu.setTransform(1159.3,677.7,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.jixu},{t:this.btn_2},{t:this.btn_1}]},123).wait(2));

	// 图层_6
	this.tishi2 = new lib.元件7();
	this.tishi2.name = "tishi2";
	this.tishi2.parent = this;
	this.tishi2.setTransform(1009.3,368.4);

	this.tishi1 = new lib.元件7();
	this.tishi1.name = "tishi1";
	this.tishi1.parent = this;
	this.tishi1.setTransform(1009.3,561.6);

	this.show2 = new lib.元件6();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(1160.3,354.9);

	this.show1 = new lib.元件6();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(1160.3,544);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.tishi1},{t:this.tishi2}]},123).wait(2));

	// 图层_5
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(1202.7,368.2,1,1,0,0,0,100,272.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(109).to({_off:false},0).to({x:1157.5,alpha:1},8).to({x:1160},6).wait(2));

	// 图层_1
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(546,759.3,1,1,0,0,0,256.1,230.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(105).to({_off:false},0).to({y:485,alpha:1},8).to({y:489.9},6).wait(6));

	// 图层_9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAXCWQgDgCgBgFIAAAAQAAgEACgDQADgDAEgBQAdgEAYgPQAEgCAEABQAEABACADIAAAAQACAEgBAEQgBAEgDACQgcASgiAEIgBAAQgDAAgDgCgAgfCUQgegJgagWQgDgDAAgEQAAgEACgDIABAAQADgDADAAQAEgBADADQAWATAbAHQAEACACADQACAEgBADIgBABQgBAEgDACIgFABIgDAAgAB8BZIAAAAQgDgCgBgEQAAgFADgDQAUgYAHgYIAAgCIABgDQACgDADgCQAEgCADABIABAAQAEABACAEQACAEgCAEIgBADIAAABQgIAcgXAbQgCADgFABIgBAAQgDAAgDgDgAh5BJQgEAAgCgEQgQgYgOggQgCgEACgDQABgEAEgCIAAAAQAEgBADABQAEABACAEQAOAeAPAXQACAEgBAEQgBAEgDACIAAAAQgDACgCAAIgDgBgACrgYIAAAAQgEgBgDgDQgCgDAAgEIAJg7QABgEADgDQADgCAEAAQAEABADADQADADgBAEIgJA8QAAAEgEACQgCACgDAAIgCAAgAiughQgEgCgBgEQgOgpADgUQABgEADgDQAEgCAEAAIAAAAQAEABACADQADADgBAEQgCASAMAjQABAEgCAEQgBADgEABIgBABIgDAAIgEgBgAiJhyQgDgCgBgEIAAgBQgBgDACgEQADgDAEgBQAfgHAbgEQAEAAADACQAEADAAAEQABAEgDADQgCAEgEAAQgbAEgeAGIgCABQgDAAgDgCgACgh2QgbgBghgEQgEAAgDgEQgCgDAAgEIAAgBQABgDADgDQADgCAEAAQAgAEAbABQAEAAADADQADAEgBAEIAAAAQAAAEgDADQgDACgDAAIgBAAgAgViEQgDgDAAgEQAAgEACgDQADgEAEAAQAigCAbACQAEAAACADQADADAAAEQAAAEgEADQgDADgEAAQgZgCggACIgBAAQgEAAgDgCg");
	this.shape.setTransform(1012.8,214.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(102,102,255,0.2)").s().p("AgWCLQABgEgCgDQgCgEgEgBQgagHgWgTQgDgDgEAAQgEABgCACQgOgNgMgSQADgCABgEQABgEgDgDQgPgXgNgeQgCgEgEAAQgEgCgEACIAAAAIgGgQIgHgSQADgBACgEQACgDgCgEQgLgjACgSQABgEgDgDQgCgDgEgBIADgEIAigIIAAAAQABAFADACQADACAFgBQAegGAagEQAFgBACgDQADgDgBgFIAogEQAAAEADACQADADAEAAQAggDAaACQAEABADgDQADgDAAgEIAGABIAeAEIAAABQAAAEADADQACADAEABQAhADAbACQAFAAADgDQADgCAAgEIAPAAIgDAYQgEgBgDADQgEACgBAFIgIA6QgBAEADAEQACADAEABIgIAoQgDgBgDABQgEACgBAEIgBADIgBACQgHAYgUAYQgCADAAAEQAAAEADADIgQAQIgNALQgCgDgEgBQgEgBgDACQgYAPgeAEQgEABgCADQgDADAAAEIgJAAQgOAAgOgDg");
	this.shape_1.setTransform(1013.2,214.6);

	this.instance_2 = new lib.元件15("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(366.8,361.3,1,1,0,0,0,939,531);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},56).to({state:[]},7).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[]},7).to({state:[{t:this.shape_1},{t:this.shape}]},4).to({state:[]},7).to({state:[{t:this.shape_1},{t:this.shape}]},3).to({state:[]},7).to({state:[{t:this.instance_2}]},11).to({state:[{t:this.instance_2}]},8).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(105).to({_off:false},0).to({alpha:1},8).wait(12));

	// 图层_10
	this.instance_3 = new lib.元件14("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(95).to({startPosition:0},0).to({regX:639.9,scaleX:1.46,scaleY:1.46,x:364.9,y:360.2},10).wait(1).to({startPosition:0},0).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Q3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Z();
	this.instance.parent = this;
	this.instance.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: '4FCA76424BFF9D4A84BFFBC9E9956E9A',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap4.png?1690515663058", id:"Bitmap4"},
		{src:"images/Q3_7背景底图.jpg?1690515663058", id:"Q3_7背景底图"},
		{src:"images/Q3_7_atlas_P_.png?1690515663009", id:"Q3_7_atlas_P_"},
		{src:"images/Q3_7_atlas_P_2.png?1690515663009", id:"Q3_7_atlas_P_2"},
		{src:"images/Q3_7_atlas_P_3.png?1690515663009", id:"Q3_7_atlas_P_3"},
		{src:"images/Q3_7_atlas_P_4.png?1690515663009", id:"Q3_7_atlas_P_4"},
		{src:"sounds/click.mp3?1690515663058", id:"click"},
		{src:"sounds/correct.mp3?1690515663058", id:"correct"},
		{src:"sounds/error.mp3?1690515663058", id:"error"},
		{src:"sounds/musci1.mp3?1690515663058", id:"musci1"},
		{src:"sounds/chooseError.mp3?1690515663058", id:"chooseError"},
		{src:"sounds/over.mp3?1690515663058", id:"over"}
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
an.compositions['4FCA76424BFF9D4A84BFFBC9E9956E9A'] = {
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