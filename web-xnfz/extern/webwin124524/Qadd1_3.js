(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Qadd1_3_atlas_P_", frames: [[0,0,365,694],[367,0,486,486]]},
		{name:"Qadd1_3_atlas_P_2", frames: [[0,0,269,545],[271,148,290,291],[0,547,273,417],[275,554,205,252],[563,148,290,291],[275,808,623,81],[275,441,625,111],[275,891,626,72],[275,0,704,146]]},
		{name:"Qadd1_3_atlas_P_3", frames: [[241,74,239,79],[627,0,239,79],[482,81,239,79],[0,74,239,79],[0,0,625,72]]}
];


// symbols:



(lib.外面箭头 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1296,736);


(lib.jixu = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.数字 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Q2_2_cw = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_7_jiantou = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_7_ZJ = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_7shou = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3_zqts = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3wenzi1 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3wenzi2 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3wenzi3 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3wenzi4 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Qxz_1_3ZZ = function() {
	this.initialize(img.Qxz_1_3ZZ);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib.矩形2493拷贝12 = function() {
	this.spriteSheet = ss["Qadd1_3_atlas_P_2"];
	this.gotoAndStop(8);
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


(lib.元件27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_7shou();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件27, new cjs.Rectangle(0,0,136.8,168.1), null);


(lib.元件19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// 图层_1
	this.instance = new lib.Qxz_1_3_zqts();
	this.instance.parent = this;
	this.instance.setTransform(-79.1,-232.4);

	this.instance_1 = new lib.Q2_2_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-78.1,-234.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-232.4,290,291);


(lib.元件12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egh/AGJIAAsRMBD/AAAIAAMRg");
	this.shape.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi1();
	this.instance.parent = this;
	this.instance.setTransform(-207.7,-27,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件12, new cjs.Rectangle(-217.9,-39.6,435.1,78.7), null);


(lib.元件11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egh/AGJIAAsRMBD/AAAIAAMRg");
	this.shape.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi4();
	this.instance.parent = this;
	this.instance.setTransform(-208.7,-24,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件11, new cjs.Rectangle(-217.9,-39.6,435.1,78.7), null);


(lib.元件10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egh/AGJIAAsRMBD/AAAIAAMRg");
	this.shape.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi3();
	this.instance.parent = this;
	this.instance.setTransform(-208.4,-24,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件10, new cjs.Rectangle(-217.9,-39.6,435.1,78.7), null);


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("Egh/AGJIAAsRMBD/AAAIAAMRg");
	this.shape.setTransform(-0.4,-0.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi2();
	this.instance.parent = this;
	this.instance.setTransform(-208.4,-37,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件9, new cjs.Rectangle(-217.9,-39.6,435.1,78.7), null);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.数字();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,179.4,363.5);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q4_4_7_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,324.2,324.2);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi1();
	this.instance.parent = this;
	this.instance.setTransform(27,21.7,0.667,0.667);

	this.instance_1 = new lib.矩形2493拷贝12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.6,97.4);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi4();
	this.instance.parent = this;
	this.instance.setTransform(26,24.7,0.667,0.667);

	this.instance_1 = new lib.矩形2493拷贝12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.6,97.4);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi3();
	this.instance.parent = this;
	this.instance.setTransform(26.4,24.7,0.667,0.667);

	this.instance_1 = new lib.矩形2493拷贝12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.6,97.4);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Qxz_1_3wenzi2();
	this.instance.parent = this;
	this.instance.setTransform(26.4,11.7,0.667,0.667);

	this.instance_1 = new lib.矩形2493拷贝12();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,469.6,97.4);


(lib.元件26 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件27();
	this.instance.parent = this;
	this.instance.setTransform(27.1,146.3,1,1,0,0,0,18.1,18.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:70.9},17).to({y:217},30).to({y:146.3},15).wait(1));

	// 图层_1
	this.instance_1 = new lib.Q4_4_7_jiantou();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,182.1,296.3);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件8("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(231.9,273,1,1,0,0,0,89.7,181.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({_off:false},0).to({alpha:1},7).to({_off:true},24).wait(67));

	// 图层_7
	this.instance_1 = new lib.元件7("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(160.5,271.7,0.857,0.857,0,0,0,162.1,162.1);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1.04,scaleY:1.04,alpha:1},6).to({scaleX:1,scaleY:1},6).to({_off:true},25).wait(67));

	// 图层_3
	this.instance_2 = new lib.元件3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(650.5,48.7,1,1,0,0,0,234.8,48.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({x:641.4,alpha:1},6).to({x:643.4},6).to({x:642.4},5).to({_off:true},9).wait(67));

	// 图层_4
	this.instance_3 = new lib.元件4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(650.5,195.5,1,1,0,0,0,234.8,48.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).to({x:641.4,alpha:1},6).to({x:643.4},6).to({x:642.4},5).to({_off:true},6).wait(67));

	// 图层_5
	this.instance_4 = new lib.元件5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(650.5,343.2,1,1,0,0,0,234.8,48.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(17).to({_off:false},0).to({x:641.4,alpha:1},6).to({x:643.4},6).to({x:642.4},5).to({_off:true},3).wait(67));

	// 图层_6
	this.instance_5 = new lib.元件6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(650.5,494,1,1,0,0,0,234.8,48.7);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(20).to({_off:false},0).to({x:641.4,alpha:1},6).to({x:643.4},6).to({_off:true},5).wait(67));

	// 图层_8 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_1 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_2 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_3 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_4 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_5 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_6 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_7 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_8 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_9 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_10 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_11 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_12 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_13 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_14 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_15 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_16 = new cjs.Graphics().p("Egf8A0XMAAAhotMA/5AAAMAAABotg");
	var mask_graphics_17 = new cjs.Graphics().p("EgaSA0XMAAAhotMA/5AAAMAAABotg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-70.8,y:314.7}).wait(1).to({graphics:mask_graphics_1,x:-50.3,y:314.7}).wait(1).to({graphics:mask_graphics_2,x:-29.9,y:314.7}).wait(1).to({graphics:mask_graphics_3,x:-9.4,y:314.7}).wait(1).to({graphics:mask_graphics_4,x:11,y:314.7}).wait(1).to({graphics:mask_graphics_5,x:31.5,y:314.7}).wait(1).to({graphics:mask_graphics_6,x:51.9,y:314.7}).wait(1).to({graphics:mask_graphics_7,x:72.4,y:314.7}).wait(1).to({graphics:mask_graphics_8,x:92.8,y:314.7}).wait(1).to({graphics:mask_graphics_9,x:113.3,y:314.7}).wait(1).to({graphics:mask_graphics_10,x:133.8,y:314.7}).wait(1).to({graphics:mask_graphics_11,x:154.2,y:314.7}).wait(1).to({graphics:mask_graphics_12,x:174.7,y:314.7}).wait(1).to({graphics:mask_graphics_13,x:195.1,y:314.7}).wait(1).to({graphics:mask_graphics_14,x:215.6,y:314.7}).wait(1).to({graphics:mask_graphics_15,x:236,y:314.7}).wait(1).to({graphics:mask_graphics_16,x:256.5,y:314.7}).wait(1).to({graphics:mask_graphics_17,x:240.7,y:314.7}).wait(1).to({graphics:null,x:0,y:0}).wait(86));

	// 图层_2
	this.instance_6 = new lib.外面箭头();
	this.instance_6.parent = this;
	this.instance_6.setTransform(166.4,42.3,0.667,0.667);

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},37).wait(67));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(21.5,132.7,277.9,277.9);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_8 = function() {
		window.parent['audio109721'+'Object'].actionPlay();
	}
	this.frame_37 = function() {
		var s = this;
		s.stop();
		var i, j;
		var trace = console.log;
		createjs.Touch.enable(stage);
		//s.mc_koufen.visible=false;//初始化隐藏
		s.mc_fankui.visible = false;
		s.bt_next.visible = false;
		s.bt_ok.mouseChildren = false;
		
		var Array1 = [];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0010 === undefined) {
			win = win.parent;
		}
		
		var answerArr = {
			1: '1',
			2: '2',
			3: '3',
			4: '4'
		}
		
		setTimeout(function (e) {
			//获取初始坐标
			for (i = 1; i <= 4; i++) {
				s['mc_' + i].mouseChildren = false;
				s['x_' + i] = s['mc_' + i].x;
				s['y_' + i] = s['mc_' + i].y;
				//trace(s['x_'+i],s['y_'+i]);
			}
		
			new_num = ([1, 2, 3, 4].sort(function () {
		
				return Math.random() - 0.5
		
		
			})); //如 [3,1,2,4]
			//按新顺序排列
			//fw();
			setTimeout(function (e) {
				isUp = true;
			}, 1)
			console.log(new_num)
		}, 1);
		
		var new_num;
		//该题碰撞
		function fun_hitTest(obj1, obj2) {
			return (Math.abs(obj1.x - obj2.x) <= 220 && Math.abs(obj1.y - obj2.y) <= 40);
		}
		var currentDrag = '';
		s.addEventListener('pressmove', function (e) {
			if (flag) {
				if (
					e.target.name === 'mc_1' || e.target.name === 'mc_2' || e.target.name === 'mc_3' || e.target.name === 'mc_4'
				) {
					isUp = false; //
					currentDrag = e.target;
					console.log('name   ' + currentDrag.name)
					//currentDrag.scaleX = currentDrag.scaleY = 1.1;
					currentDrag.x = e.localX;
					currentDrag.y = e.localY;
					s.addChild(currentDrag);
				}
			}
		
		});
		var flag = true;
		var isUp = false;
		createjs.Ticker.setFPS(60);
		createjs.Ticker.addEventListener('tick', fw);
		//s.addEventListener("tick",fw));
		function fw() {
			if (isUp) {
				for (i = 1; i <= 4; i++) {
					s['mc_' + new_num[i - 1]].x += (s['x_' + i] - s['mc_' + new_num[i - 1]].x) / 4;
					s['mc_' + new_num[i - 1]].y += (s['y_' + i] - s['mc_' + new_num[i - 1]].y) / 4;
				}
			}
		}
		
		s.addEventListener('pressup', function (e) {
			isUp = true;
			if (currentDrag) {
				s.tishi.visible =false;
				//currentDrag.stopDrag();
				//currentDrag.scaleX = currentDrag.scaleY = 1;
				var _num = Number(currentDrag.name.substring(3));
				//trace(_num);
				for (i = 1; i <= 4; i++) {
					if (_num != i) {
						if (fun_hitTest(currentDrag, s['mc_' + i])) {
							//trace(_num + ' hit ' + i);
							var num1 = new_num.indexOf(_num);
							var num2 = new_num.indexOf(i);
							var tmd = new_num[num1]; //选中id
		
							new_num.splice(num1, 1, new_num[num2]); //[3,2,1,4]
							new_num.splice(num2, 1, tmd);
							break;
						}
					}
				}
				console.log(new_num)
				fw();
				currentDrag = '';
			}
			//判定
			switch (e.target.name) {
				case 'bt_ok':
					flag = false;
					s.mc_fankui.visible = true;
					console.log(new_num)
					for (var i = 0; i < new_num.length; i++) {
		
						Array1.push(answerArr[new_num[i]]);
					}
					console.log(Array1.join('、'))
					win.VarQuestion_0010.set(Array1.join('、'));
		
					if (new_num.join() === '4,1,2,3') {
						//正确
						s.mc_fankui.gotoAndStop(0);
						playSound('correct');
					} else {
						//错误
						s.mc_fankui.gotoAndStop(1);
							new_num = [4,1,2,3];
						playSound('error');
					}
		
		
					//s.bt_ok.visible = false;
					s.bt_next.visible = true;
					s.addChild(s.mc_fankui);
					break;
				case 'bt_next':
					//sound_click.play(); //点击声
					playSound('click');
					window.parent.trivNextPage();
					break;
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8).call(this.frame_8).wait(29).call(this.frame_37).wait(1));

	// 图层_4
	this.mc_fankui = new lib.元件19();
	this.mc_fankui.name = "mc_fankui";
	this.mc_fankui.parent = this;
	this.mc_fankui.setTransform(1130.3,602.6,0.67,0.67);

	this.bt_next = new lib.继续();
	this.bt_next.name = "bt_next";
	this.bt_next.parent = this;
	this.bt_next.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.bt_next, 0, 1, 2, false, new lib.继续(), 3);

	this.bt_ok = new lib.确定();
	this.bt_ok.name = "bt_ok";
	this.bt_ok.parent = this;
	this.bt_ok.setTransform(1178.8,672.2,0.667,0.667);
	new cjs.ButtonHelper(this.bt_ok, 0, 1, 2, false, new lib.确定(), 3);

	this.mc_1 = new lib.元件12();
	this.mc_1.name = "mc_1";
	this.mc_1.parent = this;
	this.mc_1.setTransform(768.5,602.9);

	this.mc_4 = new lib.元件11();
	this.mc_4.name = "mc_4";
	this.mc_4.parent = this;
	this.mc_4.setTransform(768.5,452.2);

	this.mc_3 = new lib.元件10();
	this.mc_3.name = "mc_3";
	this.mc_3.parent = this;
	this.mc_3.setTransform(768.5,304.4);

	this.mc_2 = new lib.元件9();
	this.mc_2.name = "mc_2";
	this.mc_2.parent = this;
	this.mc_2.setTransform(768.5,157.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_2},{t:this.mc_3},{t:this.mc_4},{t:this.mc_1},{t:this.bt_ok},{t:this.bt_next},{t:this.mc_fankui}]},37).wait(1));

	// 图层_3
	this.tishi = new lib.元件26();
	this.tishi.name = "tishi";
	this.tishi.parent = this;
	this.tishi.setTransform(1115.1,356.8,1,1,0,0,0,91,139.1);
	this.tishi._off = true;

	this.timeline.addTween(cjs.Tween.get(this.tishi).wait(31).to({_off:false},0).wait(7));

	// 图层_8
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(564.8,380.3,1,1,0,0,0,438.6,271.3);

	this.instance_1 = new lib.元件8("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(358,381.9,1,1,0,0,0,89.7,181.8);

	this.instance_2 = new lib.元件7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(286.6,380.6,1,1,0,0,0,162.1,162.1);

	this.instance_3 = new lib.矩形2493拷贝12();
	this.instance_3.parent = this;
	this.instance_3.setTransform(533.8,109,0.667,0.667);

	this.instance_4 = new lib.矩形2493拷贝12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(533.8,255.7,0.667,0.667);

	this.instance_5 = new lib.矩形2493拷贝12();
	this.instance_5.parent = this;
	this.instance_5.setTransform(533.8,403.5,0.667,0.667);

	this.instance_6 = new lib.矩形2493拷贝12();
	this.instance_6.parent = this;
	this.instance_6.setTransform(533.8,554.2,0.667,0.667);

	this.instance_7 = new lib.外面箭头();
	this.instance_7.parent = this;
	this.instance_7.setTransform(292.6,151.2,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},37).wait(1));

	// 图层_6
	this.instance_8 = new lib.Qxz_1_3ZZ();
	this.instance_8.parent = this;
	this.instance_8.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38));

	// 图层_1
	this.instance_9 = new lib.Bitmap1();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-6,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-6,-6,1296,736);


// stage content:
(lib.Qadd1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(490.9,354,1439.2,764.7);
// library properties:
lib.properties = {
	id: '363CB15CA123E441BD43D5AAAA65FF0D',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Bitmap1.png?1690352946504", id:"Bitmap1"},
		{src:"images/Qxz_1_3ZZ.png?1690352946504", id:"Qxz_1_3ZZ"},
		{src:"images/Qadd1_3_atlas_P_.png?1690352946478", id:"Qadd1_3_atlas_P_"},
		{src:"images/Qadd1_3_atlas_P_2.png?1690352946479", id:"Qadd1_3_atlas_P_2"},
		{src:"images/Qadd1_3_atlas_P_3.png?1690352946479", id:"Qadd1_3_atlas_P_3"},
		{src:"sounds/click.mp3?1690352946504", id:"click"},
		{src:"sounds/error.mp3?1690352946504", id:"error"},
		{src:"sounds/correct.mp3?1690352946504", id:"correct"}
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
an.compositions['363CB15CA123E441BD43D5AAAA65FF0D'] = {
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