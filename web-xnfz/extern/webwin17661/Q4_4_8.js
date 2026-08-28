(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_4_8_atlas_P_1", frames: [[479,888,239,79],[720,888,239,79],[698,400,239,79],[698,481,239,79],[477,622,473,88],[477,712,477,85],[0,799,477,85],[0,886,477,85],[479,799,390,87],[0,622,475,104],[502,0,388,398],[0,0,500,411],[0,413,696,207]]},
		{name:"Q4_4_8_atlas_P_2", frames: [[0,0,239,79],[0,81,239,79]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.A4_4_16_08 = function() {
	this.initialize(img.A4_4_16_08);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.A4_4_3Jpg_other0215 = function() {
	this.initialize(img.A4_4_3Jpg_other0215);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.jixu = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_A = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_B = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_C = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_D = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_DJ = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_E = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_ZJ = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8_zq = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_8error = function() {
	this.initialize(ss["Q4_4_8_atlas_P_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.返回_点击 = function() {
	this.initialize(ss["Q4_4_8_atlas_P_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.返回默认 = function() {
	this.initialize(ss["Q4_4_8_atlas_P_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.元件9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 图层_1
	this.instance = new lib.Q4_4_8_zq();
	this.instance.setTransform(-230,-190.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-230,-190.5,500,411), null);


(lib.继续 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.jixu();
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.jixu_dj();
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.动画1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.A4_4_3Jpg_other0215();
	this.instance.setTransform(-64.85,-0.15);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(36).to({_off:true},1).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.8,-0.1,1280,720);


(lib.确定 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.ok();
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.ok_dj();
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.返回默认();
	this.instance.setTransform(-119.5,-39.5);

	this.instance_1 = new lib.返回_点击();
	this.instance_1.setTransform(-119.5,-39.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-119.5,-39.5,239,79);


(lib.元件9_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance_1 = new lib.Q4_4_8_DJ();
	this.instance_1.setTransform(-195,-43.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件9_1, new cjs.Rectangle(-195,-43.5,390,87), null);


(lib.元件8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.02)").s().p("Aw8DxQhOABg3g7Qg3g7AAhTIAAhRQAAhTA3g7QA3g7BOABMAh5AAAQBNgBA4A7QA2A7AABTIAABRQAABTg2A7Qg4A7hNgBg");
	this.shape.setTransform(-8.45,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-135.7,-24.1,254.5,48.3);


(lib.元件7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_ZJ();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,258.8,265.5);


(lib.元件6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_E();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,316.8,69.4);


(lib.元件5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_D();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.2,56.7);


(lib.元件4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_C();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.2,56.7);


(lib.元件3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_B();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,318.2,56.7);


(lib.元件2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.Q4_4_8_A();
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,315.5,58.7);


(lib.元件10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.go1 = new lib.元件11();
	this.go1.name = "go1";
	this.go1.setTransform(549.45,290.6,0.67,0.67);
	new cjs.ButtonHelper(this.go1, 0, 1, 2, false, new lib.元件11(), 3);

	this.instance = new lib.Q4_4_8error();
	this.instance.setTransform(10.2,214.45,0.67,0.67);

	this.instance_1 = new lib.A4_4_16_08();
	this.instance_1.setTransform(-640,-360);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.go1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-640,-360,1280,720), null);


(lib.元件1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_2
	this.instance = new lib.元件2("synched",0);
	this.instance.setTransform(347.65,61.7,1,1,4.7062,0,0,157.8,29.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({regX:157.7,rotation:-0.7746,x:336.05,y:39.4,alpha:1},7).to({regX:157.8,rotation:0,x:337.85,y:42.4},4).wait(16).to({startPosition:0},0).to({_off:true},1).wait(47));

	// 图层_3
	this.instance_1 = new lib.元件3("synched",0);
	this.instance_1.setTransform(390,130.75,1,1,4.7062,0,0,159.1,28.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({rotation:-0.7746,x:384.95,y:104.1,alpha:1},7).to({rotation:0,x:385.75,y:107.75},4).wait(12).to({startPosition:0},0).to({_off:true},1).wait(47));

	// 图层_4
	this.instance_2 = new lib.元件4("synched",0);
	this.instance_2.setTransform(403.85,196.15,1,1,4.7062,0,0,159.1,28.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({rotation:-0.7746,x:404.95,y:167.9,alpha:1},7).to({rotation:0,x:404.9,y:171.8},4).wait(8).to({startPosition:0},0).to({_off:true},1).wait(47));

	// 图层_5
	this.instance_3 = new lib.元件5("synched",0);
	this.instance_3.setTransform(375.85,260.15,1,1,4.7062,0,0,159.1,28.4);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({_off:false},0).to({rotation:-0.7746,x:383.2,y:234.25,alpha:1},7).to({rotation:0,x:382.25,y:237.85},4).wait(4).to({startPosition:0},0).to({_off:true},1).wait(47));

	// 图层_6
	this.instance_4 = new lib.元件6("synched",0);
	this.instance_4.setTransform(331.25,323.45,1,1,4.7062,0,0,158.5,34.6);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(25).to({_off:false},0).to({regX:158.4,rotation:-0.7746,x:344.7,y:301.5,alpha:1},7).to({rotation:0,x:342.9,y:304.6},4).to({_off:true},1).wait(47));

	// 图层_1
	this.instance_5 = new lib.元件7("synched",0);
	this.instance_5.setTransform(129.45,172.05,0.6341,0.6341,0,0,0,129.4,132.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({scaleX:1.0607,scaleY:1.0607,x:129.4,y:172,alpha:1},7).to({scaleX:1,scaleY:1},4).wait(25).to({startPosition:0},0).to({_off:true},1).wait(47));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,7.9,572.5999999999999,363.20000000000005);


(lib.总 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_7 = function() {
		window.parent['audio17652' + 'Object'].actionPlay();
	}
	this.frame_36 = function() {
		var _this = this;
		_this.stop();
		//单选题 
		
		createjs.Touch.enable(stage);
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		_this.mc.visible = false;
		var btnNum = 5;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0024 === undefined && win.VarNurseA4 === undefined) {
			win = win.parent;
		}
		var answerArr = {
			0: '未回答',
			1: 'A',
			2: 'B',
			3: 'C',
			4: 'D',
			5: 'E'
		}
		
		var flag = true;
		var curNum = 0;
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
		
					window.parent['audio17652' + 'Object'].actionStop();
		
					if (curNum == 2) {
						_this.daan.visible = true;
						_this.jixu.visible = true;
						playSound('correct');
						playSound('music1');
		
						if (flag) {
							win.VarNurseA4.set(2); //设置护士A 1题变量的得分
						}
		
						for (var i = 1; i <= btnNum; i++) {
							_this['btn_' + i].visible = false;
						}
		
					} else {
						_this.mc.visible = true;
						playSound('error');
						playSound('music2');
		
						if (flag) {
							win.VarNurseA4.set(0); //设置护士A 1题变量的得分
						}
					}
					if (flag) {
						flag = false;
						win.VarQuestion_0024.set(answerArr[curNum]);
					}
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
				} else if (e.target.name.indexOf("go1") >= 0) {
					stopSound('music2');
					playSound('click');
					_this.mc.visible = false;
				}
			}
		});
		function stopSound(id, loop) {
			return createjs.Sound.stop(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(7).call(this.frame_7).wait(29).call(this.frame_36).wait(1));

	// 图层_8
	this.mc = new lib.元件10();
	this.mc.name = "mc";
	this.mc.setTransform(640.05,360.05);
	this.mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc).wait(36).to({_off:false},0).wait(1));

	// 图层_6
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.setTransform(261.45,366.95,0.667,0.667);

	this.btn_5 = new lib.元件8();
	this.btn_5.name = "btn_5";
	this.btn_5.setTransform(865.35,527.7);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_4 = new lib.元件8();
	this.btn_4.name = "btn_4";
	this.btn_4.setTransform(905.4,454.6);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_3 = new lib.元件8();
	this.btn_3.name = "btn_3";
	this.btn_3.setTransform(930.45,389.5);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_2 = new lib.元件8();
	this.btn_2.name = "btn_2";
	this.btn_2.setTransform(909.45,325.4);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2, false, new lib.元件8(), 3);

	this.btn_1 = new lib.元件8();
	this.btn_1.name = "btn_1";
	this.btn_1.setTransform(860.4,258.3);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2, false, new lib.元件8(), 3);

	this.jixu = new lib.继续();
	this.jixu.name = "jixu";
	this.jixu.setTransform(1178.8,672.15,0.667,0.667);
	new cjs.ButtonHelper(this.jixu, 0, 1, 2, false, new lib.继续(), 3);

	this.queding = new lib.确定();
	this.queding.name = "queding";
	this.queding.setTransform(1178.8,672.15,0.667,0.667);
	new cjs.ButtonHelper(this.queding, 0, 1, 2, false, new lib.确定(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4},{t:this.btn_5},{t:this.daan}]},36).wait(1));

	// 图层_7
	this.show5 = new lib.元件9_1();
	this.show5.name = "show5";
	this.show5.setTransform(857.85,528.2,0.667,0.667);

	this.show4 = new lib.元件9_1();
	this.show4.name = "show4";
	this.show4.setTransform(897.35,455.35,0.667,0.667);

	this.show3 = new lib.元件9_1();
	this.show3.name = "show3";
	this.show3.setTransform(920.45,389.2,0.667,0.667);

	this.show2 = new lib.元件9_1();
	this.show2.name = "show2";
	this.show2.setTransform(901,325.1,0.667,0.667);

	this.show1 = new lib.元件9_1();
	this.show1.name = "show1";
	this.show1.setTransform(851.75,258.9,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4},{t:this.show5}]},36).wait(1));

	// 图层_3
	this.instance = new lib.元件1("synched",0);
	this.instance.setTransform(767.9,383.25,1,1,0,0,0,281.4,166.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(37));

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ehl9A6RMAAAh0hMDL7AAAMAAAB0hg");
	this.shape.setTransform(640.425,357.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.031)").s().p("Ehl6A6RMgABh0hMDL3AAAMAAAB0hg");
	this.shape_1.setTransform(640.425,357.675);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.063)").s().p("Ehl4A6RMAAAh0hMDLxAAAMAAAB0hg");
	this.shape_2.setTransform(640.425,357.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.09)").s().p("Ehl1A6RMgABh0hMDLtAAAMAAAB0hg");
	this.shape_3.setTransform(640.425,357.675);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.118)").s().p("EhlzA6RMAAAh0hMDLnAAAMAAAB0hg");
	this.shape_4.setTransform(640.4,357.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.149)").s().p("EhlwA6RMgABh0hMDLjAAAMAAAB0hg");
	this.shape_5.setTransform(640.4,357.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.176)").s().p("EhluA6RMAAAh0hMDLdAAAMAAAB0hg");
	this.shape_6.setTransform(640.425,357.675);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.204)").s().p("EhlrA6RMAAAh0hMDLXAAAMAAAB0hg");
	this.shape_7.setTransform(640.425,357.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.235)").s().p("EhlpA6RMAAAh0hMDLTAAAMAAAB0hg");
	this.shape_8.setTransform(640.425,357.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.263)").s().p("EhlmA6RMAAAh0hMDLNAAAMAAAB0hg");
	this.shape_9.setTransform(640.425,357.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.29)").s().p("EhljA6RMAAAh0hMDLHAAAMAAAB0hg");
	this.shape_10.setTransform(640.4,357.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.322)").s().p("EhlhA6RMAAAh0hMDLDAAAMAAAB0hg");
	this.shape_11.setTransform(640.4,357.675);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.349)").s().p("EhlfA6RMAAAh0hMDK+AAAMAABB0hg");
	this.shape_12.setTransform(640.4,357.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).wait(25));

	// 图层_1
	this.instance_1 = new lib.动画1("synched",0,false);
	this.instance_1.setTransform(317.9,162.2,1,1,0,0,0,253,162);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(37));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.2,-15.2,1305.3,745.8000000000001);


// stage content:
(lib.Q4_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 图层_1
	this.instance = new lib.总();
	this.instance.setTransform(477.1,286.4,1,1,0,0,0,477.1,286.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(627.8,344.8,665.3,385.8);
// library properties:
lib.properties = {
	id: 'EED15374D72D5748B842F162084F0EAA',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/A4_4_16_08.jpg?1746501413573", id:"A4_4_16_08"},
		{src:"images/A4_4_3Jpg_other0215.jpg?1746501413573", id:"A4_4_3Jpg_other0215"},
		{src:"images/Q4_4_8_atlas_P_1.png?1746501413497", id:"Q4_4_8_atlas_P_1"},
		{src:"images/Q4_4_8_atlas_P_2.png?1746501413498", id:"Q4_4_8_atlas_P_2"},
		{src:"sounds/click.mp3?1746501413573", id:"click"},
		{src:"sounds/correct.mp3?1746501413573", id:"correct"},
		{src:"sounds/error.mp3?1746501413573", id:"error"},
		{src:"sounds/music2.mp3?1746501413574", id:"music2"},
		{src:"sounds/music1.mp3?1746501413574", id:"music1"}
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
an.compositions['EED15374D72D5748B842F162084F0EAA'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;