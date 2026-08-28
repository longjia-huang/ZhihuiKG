(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Qz1_5_atlas_P_", frames: [[388,281,314,279],[0,395,153,158],[388,0,314,279],[0,736,239,79],[723,762,239,79],[241,736,239,79],[482,762,239,79],[490,673,401,87],[0,562,488,85],[490,586,488,85],[0,649,488,85],[704,293,290,291],[0,0,386,393],[704,0,290,291]]}
];


// symbols:



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.jixu = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.jixu_dj = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.ok = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.ok_dj = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Q4_4_21_00 = function() {
	this.initialize(img.Q4_4_21_00);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


(lib.Q_XZ_1_4_DJ = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_A = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_B = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_C = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_cw = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_ZJ = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Q_XZ_1_5_ZQ = function() {
	this.spriteSheet = ss["Qz1_5_atlas_P_"];
	this.gotoAndStop(13);
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


(lib.元件9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_5_ZQ();
	this.instance.parent = this;
	this.instance.setTransform(-145,-145.5);

	this.instance_1 = new lib.Q_XZ_1_5_cw();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-145,-145.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-145,-145.5,290,291);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_4_DJ();
	this.instance.parent = this;
	this.instance.setTransform(-133.7,-29,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件8, new cjs.Rectangle(-133.7,-29,267.5,58.1), null);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A0zELIAAoVMApnAAAIAAIVg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件7, new cjs.Rectangle(-133.2,-26.6,266.4,53.4), null);


(lib.元件6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_5_ZJ();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257.5,262.2);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_5_C();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_5_B();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


(lib.元件3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Q_XZ_1_5_A();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.667,0.667);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,325.5,56.7);


(lib.血迹 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("Al3YCQkxgoB7lbIAAAAQCcroDWhOIAAAAIG5OaIm5EfgAyuOtIgRllMAFBghJICjAhQGCYhCbDBIAAAAQhQASh6CQIAAAAQiaDkglEkIAAAAIhmFCgAA7K9QhgkTiMk9IAAAAQl7wBg6mXIAAAAIDuKvQDuF4B2H/IAAAAICiGBIBIFUgAKs30IGbAaQAtFLgfHSIAAAAIBrLIIh1A0QDAmRpfyig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:44.1,y:-10.8}).wait(1).to({graphics:null,x:0,y:0}).wait(3));

	// 图层_5
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-94.6,-182.6);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-155.9,-211.6,1.381,1.381);

	var maskedShapeInstanceList = [this.instance,this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-164.6,338.8,371.8);


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.元件3("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(203.1,30.3,1,1,-0.9,0,0,11.8,28.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2).to({_off:false},0).to({rotation:0.7,x:206,y:32.6,alpha:1},5).to({rotation:0,x:204.8,y:31.6},5).wait(91));

	// 图层_3
	this.instance_1 = new lib.元件4("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(251.2,123.1,1,1,-0.9,0,0,11.3,29.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(5).to({_off:false},0).to({rotation:0.7,x:251.4,y:126.8,alpha:1},5).to({rotation:0,y:125.2},5).wait(88));

	// 图层_4
	this.instance_2 = new lib.元件5("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(219.7,220,1,1,-0.9,0,0,11.3,30.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(8).to({_off:false},0).to({rotation:0.7,x:217.1,y:222.8,alpha:1},5).to({rotation:0,x:218.3,y:221.6},5).wait(85));

	// 图层_1
	this.instance_3 = new lib.元件6("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(128.8,131.2,0.95,0.95,0,0,0,128.8,131.1);
	this.instance_3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:128.7,scaleX:1,scaleY:1,x:128.7,y:131.1,alpha:1},5).wait(98));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.5,6.6,244.6,249);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(847,393.2,0.766,0.766);

	this.instance_1 = new lib.血迹("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(907.6,532.5,0.766,0.766,0,0,0,76.9,65.5);

	this.instance_2 = new lib.Q4_4_21_00();
	this.instance_2.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,1280,720), null);


(lib.总 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		window.parent['audio113080'+'Object'].actionPlay();
	}
	this.frame_18 = function() {
		var _this = this;
		_this.stop();
		//多选题 
		var arr1 = [];
		
		createjs.Touch.enable(stage);
		var arr = ['A', 'B', 'C', 'D', 'E', 'F'];
		
		_this.daan.visible = false;
		_this.jixu.visible = false;
		var btnNum = 3;
		for (var i = 1; i <= btnNum; i++) {
			_this['btn_' + i].mouseChildren = false;
			_this['show' + i].visible = false;
		}
		
		var Array1 = ['未回答'];
		
		
		var win = window;
		while (win !== win.parent && win.VarQuestion_0045 === undefined && win.VarNurseA15 === undefined) {
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
		var flag=  true;
		
		_this.addEventListener("click", function (e) {
			if (e.target.name) {
				if (e.target.name.indexOf("btn_") >= 0&&flag) {
		
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
		flag = false;
					arr1.sort(function (a, b) {
						return a - b;
					});
					_this.queding.visible = false;
					_this.daan.visible = true;
					_this.jixu.visible = true;
					if (arr1.toString() == '1,2,3') {
						playSound('correct');
		
						_this.daan.gotoAndStop(0);
						win.VarNurseA15.set(2); //设置护士A 1题变量的得分
					} else {
						_this.daan.gotoAndStop(1);
						playSound('error');
		
						win.VarNurseA15.set(0); //设置护士A 1题变量的得分
					}
		
		
					if (arr1.length == 0) {
		
						win.VarQuestion_0045.set(Array1.toString());
					} else {
						Array1.length = 0;
						for (var i = 1; i <= arr1.length; i++) {
		
							Array1.push(answerArr[arr1[i - 1]]);
						}
						win.VarQuestion_0045.set(Array1.join('、'));
					}
		
					//console.log(Array1.toString())
		
				} else if (e.target.name.indexOf("jixu") >= 0) {
					playSound('click');
					window.parent.trivNextPage();
		
				}
			}
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(12).call(this.frame_18).wait(1));

	// 图层_7
	this.btn_3 = new lib.元件7();
	this.btn_3.name = "btn_3";
	this.btn_3.parent = this;
	this.btn_3.setTransform(920,441.7);

	this.btn_2 = new lib.元件7();
	this.btn_2.name = "btn_2";
	this.btn_2.parent = this;
	this.btn_2.setTransform(953.8,348.1);

	this.btn_1 = new lib.元件7();
	this.btn_1.name = "btn_1";
	this.btn_1.parent = this;
	this.btn_1.setTransform(901.9,251.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_1},{t:this.btn_2},{t:this.btn_3}]},18).wait(1));

	// 图层_8
	this.daan = new lib.元件9();
	this.daan.name = "daan";
	this.daan.parent = this;
	this.daan.setTransform(983.3,616.2,0.667,0.667);

	this.show3 = new lib.元件8();
	this.show3.name = "show3";
	this.show3.parent = this;
	this.show3.setTransform(913,440.3);

	this.show2 = new lib.元件8();
	this.show2.name = "show2";
	this.show2.parent = this;
	this.show2.setTransform(946.8,345.5);

	this.show1 = new lib.元件8();
	this.show1.name = "show1";
	this.show1.parent = this;
	this.show1.setTransform(899.1,251.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.show1},{t:this.show2},{t:this.show3},{t:this.daan}]},18).wait(1));

	// 图层_6
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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.queding},{t:this.jixu}]},18).wait(1));

	// 图层_2
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(797.5,352.3,1,1,0,0,0,282.8,131.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19));

	// 图层_1
	this.instance_1 = new lib.元件1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,360,1,1,0,0,0,640,360);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1280,720);


// stage content:
(lib.Qz1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.总();
	this.instance.parent = this;
	this.instance.setTransform(225.5,134.9,1,1,0,0,0,225.5,134.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: 'FE35AD0D981E604CABB825DD39C21EF2',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/Q4_4_21_00.jpg?1678935315225", id:"Q4_4_21_00"},
		{src:"images/Qz1_5_atlas_P_.png?1678935315175", id:"Qz1_5_atlas_P_"},
		{src:"sounds/click.mp3?1678935315225", id:"click"},
		{src:"sounds/correct.mp3?1678935315225", id:"correct"},
		{src:"sounds/error.mp3?1678935315225", id:"error"}
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
an.compositions['FE35AD0D981E604CABB825DD39C21EF2'] = {
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