(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Q4_4_17_atlas_P_", frames: [[717,0,153,158],[401,0,314,279],[717,160,239,79],[401,281,239,79],[642,322,239,79],[717,241,239,79],[0,0,399,431]]}
];


// symbols:



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_16Jpg_other0330 = function() {
	this.initialize(img.Q4_4_16Jpg_other0330);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q4_4_17_bg = function() {
	this.initialize(img.Q4_4_17_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1710,431);


(lib.Q4_4_17_biaoti = function() {
	this.initialize(img.Q4_4_17_biaoti);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1417,138);


(lib.Q4_4_17_cw = function() {
	this.initialize(img.Q4_4_17_cw);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1039,351);


(lib.Q4_4_17_dj_ = function() {
	this.spriteSheet = ss["Q4_4_17_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_17_zq = function() {
	this.initialize(img.Q4_4_17_zq);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1039,351);


(lib.Q4_4_17_zz = function() {
	this.initialize(img.Q4_4_17_zz);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#62130D").s().p("AgxFSQgog5AXgfQAXgfgPgVQgOgUAAgYIADgeIAHggQAGgZARgnIAAAAQgTAEgVgGQgagIgPgUQgUgbAAgzQACgiAIgSQAIgPAXgWQAYgYANgIQAQgKAEgEIALgRQAMgRATgJIAHgDIAGgSIAHgTQAFgMAEgHQAMgWAYgLQAXgLAYAEQAQADAMAIQhBgCg3CqQg1CqCOiSQgEALgFAKQANAEAFAMQAFAMgMAYQgLAYAUAXQAVAXgTAOQAJAYgUARQgUAQgMAVQgMAWAOALQAPALgEATQgDAUgGATQgGASgrBhQgbA9gZAAQgQAAgPgVg");
	this.shape.setTransform(414.5,258.3,1.769,1.769,110.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiTAcdIIAvOQELBTEXBDQHoGxKkBjQKjBkJygbQAFAQigFpQgrCellKDQk4AxkpAAQ08AAv7vwgAuiQDQT5EaWOhaIlyCpQgCASgLBKQjsAOjZAAQztAApWnTgEgehgsMMA9BAQpICZK3IwkAKQ/+gfm9LGIk0BMgEAiKgO9IAKEHQpLhTgjDYMgtPACmUAE6gJzAx5ABBg");
	mask.setTransform(306.3,324.6);

	// 图层_1
	this.instance = new lib.Bitmap7();
	this.instance.parent = this;
	this.instance.setTransform(654.9,170.2,1.769,1.769,110.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件4, new cjs.Rectangle(86.8,41.8,439.2,565.8), null);


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
	this.instance = new lib.Q4_4_17_zq();
	this.instance.parent = this;
	this.instance.setTransform(-519.5,-175.5);

	this.instance_1 = new lib.Q4_4_17_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-519.5,-175.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-519.5,-175.5,1039,351);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_17_dj_();
	this.instance.parent = this;
	this.instance.setTransform(-133,-143.7,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件6, new cjs.Rectangle(-133,-143.7,266.2,287.5), null);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(218,219,219,0.02)").s().p("A0xWLMAAAgsVMApjAAAMAAAAsVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件5, new cjs.Rectangle(-133,-141.8,266.1,283.8), null);


(lib.元件4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance_1 = new lib.Q4_4_17_zz();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280.7,720.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A2PaaMAAAg00MAsfAAAMAAAA00g");
	var mask_graphics_1 = new cjs.Graphics().p("A2PaaMAAAg00MAsfAAAMAAAA00g");
	var mask_graphics_2 = new cjs.Graphics().p("A2PaaMAAAg00MAsfAAAMAAAA00g");
	var mask_graphics_3 = new cjs.Graphics().p("A2PaaMAAAg00MAsfAAAMAAAA00g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:131.4,y:147}).wait(1).to({graphics:mask_graphics_1,x:416.2,y:147}).wait(1).to({graphics:mask_graphics_2,x:716.1,y:147}).wait(1).to({graphics:mask_graphics_3,x:1011,y:147}).wait(1));

	// 图层_1
	this.instance = new lib.Q4_4_17_bg();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,273.8,287.5);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_17_biaoti();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,945.2,92.1), null);


(lib.动画1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件4();
	this.instance.parent = this;
	this.instance.setTransform(116.9,335.7,1.562,1.562,0,0,0,327.4,345.8);

	this.instance_1 = new lib.Bitmap2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(840.6,145.6,2.612,2.612,96.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(77));

	// 图层_1
	this.instance_2 = new lib.Q4_4_16Jpg_other0330();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-98.1,-9.6,1.169,1.169);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(77));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-394.5,-204.4,1792.5,1080.4);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_4
	this.instance = new lib.元件3("single",3);
	this.instance.parent = this;
	this.instance.setTransform(570.3,156.7,1,1,0,0,0,570.3,143.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(17).to({_off:false},0).to({y:141.7,alpha:1},9).to({y:143.7},5).wait(105));

	// 图层_3
	this.instance_1 = new lib.元件3("single",2);
	this.instance_1.parent = this;
	this.instance_1.setTransform(570.3,156.7,1,1,0,0,0,570.3,143.7);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({y:141.7,alpha:1},9).to({y:143.7},5).wait(111));

	// 图层_2
	this.instance_2 = new lib.元件3("single",1);
	this.instance_2.parent = this;
	this.instance_2.setTransform(570.3,156.7,1,1,0,0,0,570.3,143.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({y:141.7,alpha:1},9).to({y:143.7},5).wait(117));

	// 图层_1
	this.instance_3 = new lib.元件3("single",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(570.3,156.7,1,1,0,0,0,570.3,143.7);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({y:141.7,alpha:1},9).to({y:143.7},5).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,13,273.8,287.5);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		window.parent['audio18736' + 'Object'].actionPlay();
	}
	this.frame_40 = function() {
		var _this = this;
		_this.stop();
		//多选题 
		var arr1 = [];
		
		createjs.Touch.enable(stage);
		var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 4;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0031 === undefined && win.VarNurseA11 === undefined) {
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
		}/*
		var answerArr = {
			1: '风险识别',
			2: '风险分析',
			3: '风险评价',
			4: '风险评估',
			5: '提出管理建议',
			6: '风险评估',
			7: '提出管理建议'
		}*/
		
		
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0) {
		
					var curNum = Number(e.target.name.substring(4))
					//console.log(curNum)
		
		
					var index = arr1.indexOf(curNum);
					if (index == -1) {
						arr1.push(curNum);
						_this['show' + curNum].visible = true;
					} else {
						arr1.splice(index, 1);
						_this['show' + curNum].visible = false;
					}
					playSound('click');
				} else if (e.target.name.indexOf("queding") >= 0) {
		
					arr1.sort(function (a, b) {
						return a - b;
					});
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (arr1.toString() == '1,2') {
						playSound('correct');
						win.VarNurseA11.set(1);//设置护士A 11题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
						win.VarNurseA11.set(0);//设置护士A 11题变量的得分
					}
		
		
					if (arr1.length == 0) {
		
						win.VarQuestion_0031.set(Array1.toString());
					} else {
						Array1.length = 0;
						for (var i = 1; i <= arr1.length; i++) {
		
							Array1.push(answerArr[arr1[i - 1]]);
						}
					}
		
					//console.log(Array1.toString())
					
					win.VarQuestion_0031.set(Array1.join('、'));
					window.parent['audio18736'+'Object'].actionStop();
					window.parent['audio72211'+'Object'].actionPlay();
					
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
		
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(39).call(this.frame_40).wait(1));

	// 图层_9
	this.daan = new lib.元件24();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(638.9,600.4,0.67,0.67);
	this.daan._off = true;

	this.timeline.addTween(cjs.Tween.get(this.daan).wait(40).to({_off:false},0).wait(1));

	// 图层_4
	this.btn_4 = new lib.元件5();
	this.btn_4.name = "btn_4";
	this.btn_4.parent = this;
	this.btn_4.setTransform(1079,368.8);

	this.btn_3 = new lib.元件5();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(789.3,368.8);

	this.btn_2 = new lib.元件5();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(485.4,368.8);

	this.btn_1 = new lib.元件5();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(203.5,368.8);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu},{t:this.btn_1},{t:this.btn_2},{t:this.btn_3},{t:this.btn_4}]},40).wait(1));

	// 图层_8
	this.show4 = new lib.元件6();
	this.show4.name = "show4";
	this.show4.parent = this;
	this.show4.setTransform(1077.5,370.9);

	this.show3 = new lib.元件6();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(787.4,370.9);

	this.show2 = new lib.元件6();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(486.8,370.9);

	this.show1 = new lib.元件6();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(203.9,370.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.show4}]},40).wait(1));

	// 图层_5
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(625,133.6,1,1,0,0,0,472.6,46);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:151.7,alpha:1},9).to({y:149.7},6).wait(26));

	// 图层_2
	this.instance_1 = new lib.元件2("synched",0,false);
	this.instance_1.parent = this;
	this.instance_1.setTransform(640.8,370.6,1,1,0,0,0,570.3,143.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(32));

	// 图层_7
	this.instance_2 = new lib.元件4_1("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(640.3,360.2,1,1,0,0,0,640.3,360.2);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},9).wait(32));

	// 图层_1
	this.instance_3 = new lib.动画1("synched",20,false);
	this.instance_3.parent = this;
	this.instance_3.setTransform(264.2,222,1,1,0,0,0,264.2,222);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(41));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259,-139.2,1657,971.1);


// stage content:
(lib.Q4_4_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(292.2,182.2,1,1,0,0,0,292.2,182.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(245.5,155.6,1792.5,1080.4);
// library properties:
lib.properties = {
	id: 'D940891FF5CCDD4F9B37F9946501026E',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q4_4_16Jpg_other0330.jpg?1690425738553", id:"Q4_4_16Jpg_other0330"},
		{src:"images/Q4_4_17_bg.png?1690425738553", id:"Q4_4_17_bg"},
		{src:"images/Q4_4_17_biaoti.png?1690425738553", id:"Q4_4_17_biaoti"},
		{src:"images/Q4_4_17_cw.png?1690425738553", id:"Q4_4_17_cw"},
		{src:"images/Q4_4_17_zq.png?1690425738553", id:"Q4_4_17_zq"},
		{src:"images/Q4_4_17_zz.png?1690425738553", id:"Q4_4_17_zz"},
		{src:"images/Q4_4_17_atlas_P_.png?1690425738528", id:"Q4_4_17_atlas_P_"},
		{src:"sounds/click.mp3?1690425738553", id:"click"},
		{src:"sounds/correct.mp3?1690425738553", id:"correct"},
		{src:"sounds/error.mp3?1690425738553", id:"error"}
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
an.compositions['D940891FF5CCDD4F9B37F9946501026E'] = {
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