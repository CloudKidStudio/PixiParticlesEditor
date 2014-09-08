!function($){var EditorInterface=function(a){this.spawnTypes=a;for(var b=["alphaStart","alphaEnd","scaleStart","scaleEnd","colorStart","colorEnd","speedStart","speedEnd","startRotationMin","startRotationMax","rotationSpeedMin","rotationSpeedMax","lifeMin","lifeMax","customEase","emitFrequency","emitLifetime","emitMaxParticles","emitSpawnPosX","emitSpawnPosY","emitAddAtBack","emitSpawnType","emitRectX","emitRectY","emitRectW","emitRectH","emitCircleX","emitCircleY","emitCircleR","emitParticlesPerWave","emitParticleSpacing","emitAngleStart"],c=0;c<b.length;c++)this[b[c]]=$("#"+b[c]);$("#downloadConfig").click(this.download.bind(this)),this.init()},p=EditorInterface.prototype;p.init=function(){$("#refresh").button({icons:{primary:"ui-icon-arrowrefresh-1-s"}}),$("#loadConfig").button({icons:{primary:"ui-icon-folder-open"}}),$("#downloadConfig").button({icons:{primary:"ui-icon-arrowthickstop-1-s"}}),$(".unitSlider").slider({animate:"fast",min:0,max:1,step:.01});var a=$(".slider");a.on("slide slidechange",function(a,b){$(this).children("input").val(b.value)}),$(".slider input").change(function(){$(this).parent().slider("value",$(this).val().replace(/[^0-9.]+/,""))}),$(".positiveSpinner").spinner({min:0,numberFormat:"n",step:.01}),$(".frequencySpinner").spinner({min:0,numberFormat:"n",step:.001}),$(".generalSpinner").spinner({numberFormat:"n",step:.1}),$(".posIntSpinner").spinner({min:1,step:1}),$(".colorPicker").colorpicker({parts:["header","map","bar","hsv","rgb","hex","preview","footer"],showOn:"both",buttonColorize:!0,revert:!0,mode:"h",buttonImage:"assets/js/colorpicker/images/ui-colorpicker.png"}),$("#addImage").button(),$("#addImage").click(function(a){$("#defaultImageSelector").find("option:contains('-Default Images-')").prop("selected",!0),$("#defaultImageSelector").selectmenu("refresh"),$("#imageUpload").wrap("<form>").parent("form").trigger("reset"),$("#imageUpload").unwrap(),$("#imageDialog").dialog("open"),a.preventDefault()}),$("#imageDialog").dialog({autoOpen:!1,width:400,buttons:[{text:"Cancel",click:function(){$(this).dialog("close")}}]}),$("#defaultImageSelector").selectmenu(),$("#loadConfig").click(function(a){$("#defaultConfigSelector").find("option:contains('-Default Emitters-')").prop("selected",!0),$("#defaultConfigSelector").selectmenu("refresh"),$("#configUpload").wrap("<form>").parent("form").trigger("reset"),$("#configUpload").unwrap(),$("#configPaste").val(""),$("#configDialog").dialog("open"),a.preventDefault()}),$("#configDialog").dialog({autoOpen:!1,width:400,buttons:[{text:"Cancel",click:function(){$(this).dialog("close")}}]}),$("#defaultConfigSelector").selectmenu();var b=this.spawnTypes;$("#emitSpawnType").selectmenu({select:function(){for(var a=$("#emitSpawnType").val(),c=0;c<b.length;++c)b[c]==a?$(".settings-"+b[c]).show():$(".settings-"+b[c]).hide()}})},p.set=function(a){this.alphaStart.slider("value",a.alpha?a.alpha.start:1),this.alphaEnd.slider("value",a.alpha?a.alpha.end:1),this.scaleStart.spinner("value",a.scale?a.scale.start:1),this.scaleEnd.spinner("value",a.scale?a.scale.end:1),this.colorStart.colorpicker("setColor",a.color?a.color.start:"FFFFFF"),this.colorEnd.colorpicker("setColor",a.color?a.color.end:"FFFFFF"),this.speedStart.spinner("value",a.speed?a.speed.start:0),this.speedEnd.spinner("value",a.speed?a.speed.end:0),this.startRotationMin.spinner("value",a.startRotation?a.startRotation.min:0),this.startRotationMax.spinner("value",a.startRotation?a.startRotation.max:0),this.rotationSpeedMin.spinner("value",a.rotationSpeed?a.rotationSpeed.min:0),this.rotationSpeedMax.spinner("value",a.rotationSpeed?a.rotationSpeed.max:0),this.lifeMin.spinner("value",a.lifetime?a.lifetime.min:1),this.lifeMax.spinner("value",a.lifetime?a.lifetime.max:1),this.customEase.val(a.ease?JSON.stringify(a.ease):""),this.emitFrequency.spinner("value",a.frequency||.5),this.emitLifetime.spinner("value",a.emitterLifetime||-1),this.emitMaxParticles.spinner("value",a.maxParticles||1e3),this.emitSpawnPosX.spinner("value",a.pos?a.pos.x:0),this.emitSpawnPosY.spinner("value",a.pos?a.pos.y:0),this.emitAddAtBack.prop("checked",!!a.addAtBack);var b=a.spawnType,c=this.spawnTypes;-1==c.indexOf(b)&&(b=c[0]),this.emitSpawnType.val(b),this.emitSpawnType.selectmenu("refresh");for(var d=0;d<c.length;++d)c[d]==b?$(".settings-"+c[d]).show():$(".settings-"+c[d]).hide();this.emitRectX.spinner("value",a.spawnRect?a.spawnRect.x:0),this.emitRectY.spinner("value",a.spawnRect?a.spawnRect.y:0),this.emitRectW.spinner("value",a.spawnRect?a.spawnRect.w:0),this.emitRectH.spinner("value",a.spawnRect?a.spawnRect.h:0),this.emitCircleX.spinner("value",a.spawnCircle?a.spawnCircle.x:0),this.emitCircleY.spinner("value",a.spawnCircle?a.spawnCircle.y:0),this.emitCircleR.spinner("value",a.spawnCircle?a.spawnCircle.R:0),this.emitParticlesPerWave.spinner("value",a.particlesPerWave>0?a.particlesPerWave:1),this.emitParticleSpacing.spinner("value",a.particleSpacing?a.particleSpacing:0),this.emitAngleStart.spinner("value",a.angleStart?a.angleStart:0)},p.get=function(){var output={};output.alpha={start:this.alphaStart.slider("value"),end:this.alphaEnd.slider("value")},output.scale={start:this.scaleStart.spinner("value"),end:this.scaleEnd.spinner("value")},output.color={start:this.colorStart.val(),end:this.colorEnd.val()},output.speed={start:this.speedStart.spinner("value"),end:this.speedEnd.spinner("value")},output.startRotation={min:this.startRotationMin.spinner("value"),max:this.startRotationMax.spinner("value")},output.rotationSpeed={min:this.rotationSpeedMin.spinner("value"),max:this.rotationSpeedMax.spinner("value")},output.lifetime={min:this.lifeMin.spinner("value"),max:this.lifeMax.spinner("value")};var val=this.customEase.val();if(val)try{eval("val = "+val+";"),val&&"string"!=typeof val&&(output.ease=val)}catch(e){}output.frequency=this.emitFrequency.spinner("value"),output.emitterLifetime=this.emitLifetime.spinner("value"),output.maxParticles=this.emitMaxParticles.spinner("value"),output.pos={x:this.emitSpawnPosX.spinner("value"),y:this.emitSpawnPosY.spinner("value")},output.addAtBack=this.emitAddAtBack.prop("checked");var spawnType=output.spawnType=this.emitSpawnType.val();return"rect"==spawnType?output.spawnRect={x:this.emitRectX.spinner("value"),y:this.emitRectY.spinner("value"),w:this.emitRectW.spinner("value"),h:this.emitRectH.spinner("value")}:"circle"==spawnType?output.spawnCircle={x:this.emitCircleX.spinner("value"),y:this.emitCircleY.spinner("value"),r:this.emitCircleR.spinner("value")}:"burst"==spawnType&&(output.particlesPerWave=this.emitParticlesPerWave.spinner("value"),output.particleSpacing=this.emitParticleSpacing.spinner("value"),output.angleStart=this.emitAngleStart.spinner("value")),output},p.download=function(){var a=JSON.stringify(this.get(),null,"	"),b="data:application/json;charset=utf-8",c=!1;try{c=!!new Blob}catch(d){}c?window.saveAs(new Blob([a],{type:b}),"emitter.json"):window.open(encodeURI(b+","+a))},namespace("cloudkid").EditorInterface=EditorInterface}(jQuery),function(){var Texture=PIXI.Texture,Sprite=PIXI.Sprite,Point=PIXI.Point,Graphics=PIXI.Graphics,PixiTask=cloudkid.PixiTask,LoadTask=cloudkid.LoadTask,TaskManager=cloudkid.TaskManager,Emitter=cloudkid.Emitter,Application=cloudkid.Application,EditorInterface=cloudkid.EditorInterface,Editor=function(a){Application.call(this,a)},p=Editor.prototype=Object.create(Application.prototype),stage,emitter,emitterEnableTimer=0,particleDefaults={},particleDefaultImages={},particleDefaultImageUrls={},jqImageDiv=null;p.init=function(){this.ui=new EditorInterface(["point","circle","rect","burst"]),this.onMouseIn=this.onMouseIn.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onMouseMove=this.onMouseMove.bind(this),this.onMouseUp=this.onMouseUp.bind(this),jqImageDiv=$(".particleImage"),jqImageDiv.remove(),stage=this.display.stage;var a=[new LoadTask("trail","assets/config/defaultTrail.json",this.onConfigLoaded),new LoadTask("flame","assets/config/defaultFlame.json",this.onConfigLoaded),new LoadTask("gas","assets/config/defaultGas.json",this.onConfigLoaded),new LoadTask("explosion","assets/config/explosion.json",this.onConfigLoaded),new LoadTask("explosion2","assets/config/explosion2.json",this.onConfigLoaded),new LoadTask("megamanDeath","assets/config/megamanDeath.json",this.onConfigLoaded),new LoadTask("rain","assets/config/rain.json",this.onConfigLoaded),new LoadTask("pixieDust","assets/config/pixieDust.json",this.onConfigLoaded),new PixiTask("particle",["assets/images/particle.png","assets/images/smokeparticle.png","assets/images/rain.png"],this.onTexturesLoaded)];TaskManager.process(a,this._onCompletedLoad.bind(this))},p.onConfigLoaded=function(a,b){particleDefaults[b.id]=a.content},p.onTexturesLoaded=function(){particleDefaultImageUrls.trail=["assets/images/particle.png"],particleDefaultImages.trail=[PIXI.Texture.fromImage("particle")],particleDefaultImageUrls.flame=["assets/images/particle.png"],particleDefaultImages.flame=[PIXI.Texture.fromImage("particle")],particleDefaultImageUrls.gas=["assets/images/smokeparticle.png"],particleDefaultImages.gas=[PIXI.Texture.fromImage("smokeparticle")],particleDefaultImageUrls.explosion=["assets/images/particle.png"],particleDefaultImages.explosion=[PIXI.Texture.fromImage("particle")],particleDefaultImageUrls.explosion2=["assets/images/particle.png"],particleDefaultImages.explosion2=[PIXI.Texture.fromImage("particle")],particleDefaultImageUrls.megamanDeath=["assets/images/particle.png"],particleDefaultImages.megamanDeath=[PIXI.Texture.fromImage("particle")],particleDefaultImageUrls.rain=["assets/images/rain.png"],particleDefaultImages.rain=[PIXI.Texture.fromImage("rain")],particleDefaultImageUrls.pixieDust=["assets/images/particle.png"],particleDefaultImages.pixieDust=[PIXI.Texture.fromImage("particle")]},p._onCompletedLoad=function(){stage.interactionManager.stageIn=this.onMouseIn,stage.interactionManager.stageOut=this.onMouseOut,stage.mouseup=this.onMouseUp,this.on("update",this.update.bind(this)),$("#refresh").click(this.loadFromUI.bind(this)),$("#defaultImageSelector").on("selectmenuselect",this.loadImage.bind(this,"select")),$("#imageUpload").change(this.loadImage.bind(this,"upload")),$("#defaultConfigSelector").on("selectmenuselect",this.loadConfig.bind(this,"default")),$("#configUpload").change(this.loadConfig.bind(this,"upload")),$("#configPaste").on("paste",this.loadConfig.bind(this,"paste")),emitter=new Emitter(stage),this.loadDefault("trail"),this.on("resize",this._centerEmitter.bind(this))},p.loadDefault=function(a){a||(a=trail),$("#imageList").children().remove();for(var b=particleDefaultImageUrls[a],c=0;c<b.length;++c)this.addImage(b[c]);this.loadSettings(particleDefaultImages[a],particleDefaults[a]),this.ui.set(particleDefaults[a])},p.loadConfig=function(type,event,ui){if("default"==type){var value=$("#defaultConfigSelector").val();if("-Default Emitters-"==value)return;this.loadDefault(value),$("#configDialog").dialog("close")}else if("paste"==type){var elem=$("#configPaste");setTimeout(function(){try{eval("var obj = "+elem.val()+";"),this.ui.set(obj)}catch(e){}$("#configDialog").dialog("close")}.bind(this),10)}else if("upload"==type){for(var files=event.originalEvent.target.files,onloadend=function(readerObj){try{eval("var obj = "+readerObj.result+";"),this.ui.set(obj)}catch(e){}},i=0;i<files.length;i++){var file=files[i],reader=new FileReader;reader.onloadend=onloadend.bind(this,reader),reader.readAsText(file)}$("#configDialog").dialog("close")}},p.loadImage=function(a,b){if("select"==a){var c=$("#defaultImageSelector").val();if("-Default Images-"==c)return;this.addImage(c)}else if("upload"==a)for(var d=b.originalEvent.target.files,e=function(a){this.addImage(a.result)},f=0;f<d.length;f++){var g=d[f],h=new FileReader;h.onloadend=e.bind(this,h),h.readAsDataURL(g)}$("#imageDialog").dialog("close")},p.addImage=function(a){if(!PIXI.Texture.fromFrame(a,!0)){var b=[new PixiTask("image",[a],this.onTexturesLoaded)];TaskManager.process(b,function(){})}var c=jqImageDiv.clone();c.children("img").prop("src",a),$("#imageList").append(c),c.children(".remove").button({icons:{primary:"ui-icon-close"},text:!1}).click(removeImage),c.children(".download").button({icons:{primary:"ui-icon-arrowthickstop-1-s"},text:!1}).click(downloadImage)};var downloadImage=function(a){var b=$(a.delegateTarget).siblings("img").prop("src");window.open(b)},removeImage=function(a){$(a.delegateTarget).parent().remove()};p.loadFromUI=function(){this.loadSettings(this.getTexturesFromImageList(),this.ui.get())},p.getTexturesFromImageList=function(){var a=[],b=$("#imageList").find("img");if(0===b.length)return null;b.each(function(){a.push($(this).prop("src"))});for(var c=0;c<a.length;++c)a[c]=PIXI.Texture.fromImage(a[c]);return a},p.loadSettings=function(a,b){emitter.init(a,b),this._centerEmitter(),emitterEnableTimer=0},p.update=function(a){emitter.update(.001*a),!emitter.emit&&0>=emitterEnableTimer?emitterEnableTimer=1e3+1e3*emitter.maxLifetime:emitterEnableTimer>0&&(emitterEnableTimer-=a,0>=emitterEnableTimer&&(emitter.emit=!0))},p.onMouseUp=function(){emitter.resetPositionTracking(),emitter.emit=!0,emitterEnableTimer=0},p.onMouseIn=function(){stage.mousemove=this.onMouseMove,emitter.resetPositionTracking()},p._centerEmitter=function(){emitter.updateOwnerPos(this.display.canvas.width/2,this.display.canvas.height/2)},p.onMouseOut=function(){stage.mousemove=null,this._centerEmitter(),emitter.resetPositionTracking()},p.onMouseMove=function(a){emitter.updateOwnerPos(a.global.x,a.global.y)},namespace("cloudkid").Editor=Editor}(),function(){new cloudkid.Editor({framerate:"framerate",fps:60,raf:!0,resizeElement:"content",uniformResize:!1,canvasId:"stage",display:cloudkid.PixiDisplay,displayOptions:{clearView:!0,transparent:!1,backgroundColor:10066329}})}();