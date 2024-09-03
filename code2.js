gdjs.Win_32PageCode = {};
gdjs.Win_32PageCode.localVariables = [];
gdjs.Win_32PageCode.GDFallMarkerObjects2_1final = [];

gdjs.Win_32PageCode.GDMonarchObjects2_1final = [];

gdjs.Win_32PageCode.GDMonarchObjects1= [];
gdjs.Win_32PageCode.GDMonarchObjects2= [];
gdjs.Win_32PageCode.GDMonarchObjects3= [];
gdjs.Win_32PageCode.GDSignObjects1= [];
gdjs.Win_32PageCode.GDSignObjects2= [];
gdjs.Win_32PageCode.GDSignObjects3= [];
gdjs.Win_32PageCode.GDshelfObjects1= [];
gdjs.Win_32PageCode.GDshelfObjects2= [];
gdjs.Win_32PageCode.GDshelfObjects3= [];
gdjs.Win_32PageCode.GDWallObjects1= [];
gdjs.Win_32PageCode.GDWallObjects2= [];
gdjs.Win_32PageCode.GDWallObjects3= [];
gdjs.Win_32PageCode.GDFallMarkerObjects1= [];
gdjs.Win_32PageCode.GDFallMarkerObjects2= [];
gdjs.Win_32PageCode.GDFallMarkerObjects3= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.Win_32PageCode.GDBoxesObjects1= [];
gdjs.Win_32PageCode.GDBoxesObjects2= [];
gdjs.Win_32PageCode.GDBoxesObjects3= [];
gdjs.Win_32PageCode.GDAssistantObjects1= [];
gdjs.Win_32PageCode.GDAssistantObjects2= [];
gdjs.Win_32PageCode.GDAssistantObjects3= [];
gdjs.Win_32PageCode.GDReceiptObjects1= [];
gdjs.Win_32PageCode.GDReceiptObjects2= [];
gdjs.Win_32PageCode.GDReceiptObjects3= [];
gdjs.Win_32PageCode.GDArrowObjects1= [];
gdjs.Win_32PageCode.GDArrowObjects2= [];
gdjs.Win_32PageCode.GDArrowObjects3= [];
gdjs.Win_32PageCode.GDJump_9595ButtonObjects1= [];
gdjs.Win_32PageCode.GDJump_9595ButtonObjects2= [];
gdjs.Win_32PageCode.GDJump_9595ButtonObjects3= [];
gdjs.Win_32PageCode.GDScoreObjects1= [];
gdjs.Win_32PageCode.GDScoreObjects2= [];
gdjs.Win_32PageCode.GDScoreObjects3= [];
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects1= [];
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2= [];
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects3= [];
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects1= [];
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects2= [];
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects3= [];
gdjs.Win_32PageCode.GDNewSpriteObjects1= [];
gdjs.Win_32PageCode.GDNewSpriteObjects2= [];
gdjs.Win_32PageCode.GDNewSpriteObjects3= [];
gdjs.Win_32PageCode.GDOld_9595GramsObjects1= [];
gdjs.Win_32PageCode.GDOld_9595GramsObjects2= [];
gdjs.Win_32PageCode.GDOld_9595GramsObjects3= [];
gdjs.Win_32PageCode.GDYou_9595WinObjects1= [];
gdjs.Win_32PageCode.GDYou_9595WinObjects2= [];
gdjs.Win_32PageCode.GDYou_9595WinObjects3= [];


gdjs.Win_32PageCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Win_32PageCode.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Win_32PageCode.GDJump_9595ButtonObjects1);
{for(var i = 0, len = gdjs.Win_32PageCode.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDFlatDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDJump_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDJump_9595ButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDReceiptObjects2Objects = Hashtable.newFrom({"Receipt": gdjs.Win_32PageCode.GDReceiptObjects2});
gdjs.Win_32PageCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Receipt"), gdjs.Win_32PageCode.GDReceiptObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDReceiptObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDReceiptObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Win_32PageCode.GDScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Price Tag Collect.wav", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - 0.1);
}{for(var i = 0, len = gdjs.Win_32PageCode.GDReceiptObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDReceiptObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "PitchScaling") > 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GrumpsObjects2Objects = Hashtable.newFrom({"Old_Grumps": gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GramsObjects2Objects = Hashtable.newFrom({"Old_Grams": gdjs.Win_32PageCode.GDOld_9595GramsObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDBoxesObjects2Objects = Hashtable.newFrom({"Boxes": gdjs.Win_32PageCode.GDBoxesObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects1Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects1});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDAssistantObjects1Objects = Hashtable.newFrom({"Assistant": gdjs.Win_32PageCode.GDAssistantObjects1});
gdjs.Win_32PageCode.eventsList2 = function(runtimeScene) {

{

gdjs.Win_32PageCode.GDFallMarkerObjects2.length = 0;

gdjs.Win_32PageCode.GDMonarchObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Win_32PageCode.GDFallMarkerObjects2_1final.length = 0;
gdjs.Win_32PageCode.GDMonarchObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Win_32PageCode.GDFallMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects3);
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDMonarchObjects3.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDMonarchObjects3[i].getY() > (( gdjs.Win_32PageCode.GDFallMarkerObjects3.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDFallMarkerObjects3[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.Win_32PageCode.GDMonarchObjects3[k] = gdjs.Win_32PageCode.GDMonarchObjects3[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDMonarchObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Win_32PageCode.GDFallMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Win_32PageCode.GDFallMarkerObjects2_1final.indexOf(gdjs.Win_32PageCode.GDFallMarkerObjects3[j]) === -1 )
            gdjs.Win_32PageCode.GDFallMarkerObjects2_1final.push(gdjs.Win_32PageCode.GDFallMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Win_32PageCode.GDMonarchObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Win_32PageCode.GDMonarchObjects2_1final.indexOf(gdjs.Win_32PageCode.GDMonarchObjects3[j]) === -1 )
            gdjs.Win_32PageCode.GDMonarchObjects2_1final.push(gdjs.Win_32PageCode.GDMonarchObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Win_32PageCode.GDFallMarkerObjects2_1final, gdjs.Win_32PageCode.GDFallMarkerObjects2);
gdjs.copyArray(gdjs.Win_32PageCode.GDMonarchObjects2_1final, gdjs.Win_32PageCode.GDMonarchObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Gun 1.aac", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GrumpsObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grumps Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Win_32PageCode.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GramsObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grams Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boxes"), gdjs.Win_32PageCode.GDBoxesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDBoxesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Pallet Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Win_32PageCode.GDAssistantObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects1Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDAssistantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Shopping Cart Collision.wav", false, 50, 0.8);
}}

}


};gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects1Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects1});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.Win_32PageCode.GDSignObjects1});
gdjs.Win_32PageCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.Win_32PageCode.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects1Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDSignObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15802276);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "particular set of skills.mp3", false, 50, 1);
}{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.Win_32PageCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15803820);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Win_32PageCode.GDJump_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDJump_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDJump_9595ButtonObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDJump_9595ButtonObjects1[k] = gdjs.Win_32PageCode.GDJump_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDJump_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects1);
{for(var i = 0, len = gdjs.Win_32PageCode.GDMonarchObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDMonarchObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Win_32PageCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Win_32PageCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Win_32PageCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.Win_32PageCode.GDMonarchObjects1.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDMonarchObjects1[0].getPointY("")) - 500, (( gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.Win_32PageCode.GDMonarchObjects1.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDMonarchObjects1[0].getPointY("")) + 500, "", 0);
}}

}


};gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDAssistantObjects2Objects = Hashtable.newFrom({"Assistant": gdjs.Win_32PageCode.GDAssistantObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GrumpsObjects2Objects = Hashtable.newFrom({"Old_Grumps": gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Win_32PageCode.GDMonarchObjects2});
gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GramsObjects2Objects = Hashtable.newFrom({"Old_Grams": gdjs.Win_32PageCode.GDOld_9595GramsObjects2});
gdjs.Win_32PageCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Win_32PageCode.GDAssistantObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDAssistantObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDAssistantObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDAssistantObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDAssistantObjects2[k] = gdjs.Win_32PageCode.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDAssistantObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDAssistantObjects2[i].setVariableBoolean(gdjs.Win_32PageCode.GDAssistantObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Win_32PageCode.GDAssistantObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDAssistantObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDAssistantObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDAssistantObjects2[k] = gdjs.Win_32PageCode.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDAssistantObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDAssistantObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Win_32PageCode.GDAssistantObjects2);
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Win_32PageCode.GDFallMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDAssistantObjects2[i].getY() > (( gdjs.Win_32PageCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDAssistantObjects2[k] = gdjs.Win_32PageCode.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDAssistantObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDAssistantObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Shopping Cart Collision.wav", false, 50, 0.8);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Price Tag Collect.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GrumpsObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[k] = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].setVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[k] = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Win_32PageCode.GDFallMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].getY() > (( gdjs.Win_32PageCode.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[k] = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grumps Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Win_32PageCode.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDMonarchObjects2Objects, gdjs.Win_32PageCode.mapOfGDgdjs_9546Win_959532PageCode_9546GDOld_95959595GramsObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GramsObjects2[k] = gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GramsObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].setVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Win_32PageCode.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getVariableBoolean(gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GramsObjects2[k] = gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GramsObjects2 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GramsObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Win_32PageCode.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Win_32PageCode.GDOld_9595GramsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Win_32PageCode.GDOld_9595GramsObjects1.length;i<l;++i) {
    if ( gdjs.Win_32PageCode.GDOld_9595GramsObjects1[i].getY() > (( gdjs.Win_32PageCode.GDFallMarkerObjects1.length === 0 ) ? 0 :gdjs.Win_32PageCode.GDFallMarkerObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Win_32PageCode.GDOld_9595GramsObjects1[k] = gdjs.Win_32PageCode.GDOld_9595GramsObjects1[i];
        ++k;
    }
}
gdjs.Win_32PageCode.GDOld_9595GramsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Win_32PageCode.GDOld_9595GramsObjects1 */
{for(var i = 0, len = gdjs.Win_32PageCode.GDOld_9595GramsObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDOld_9595GramsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grams Collision.wav", false, 50, 0.8);
}}

}


};gdjs.Win_32PageCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Win_32PageCode.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Win_32PageCode.GDMonarchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Win_32PageCode.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("You_Win"), gdjs.Win_32PageCode.GDYou_9595WinObjects1);
gdjs.copyArray(runtimeScene.getObjects("shelf"), gdjs.Win_32PageCode.GDshelfObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Win_32PageCode.GDshelfObjects1.length !== 0 ? gdjs.Win_32PageCode.GDshelfObjects1[0] : null), true, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Win_32PageCode.GDMonarchObjects1.length !== 0 ? gdjs.Win_32PageCode.GDMonarchObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Win_32PageCode.GDMonarchObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDMonarchObjects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDFallMarkerObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDFallMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDYou_9595WinObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDYou_9595WinObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDScoreObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Win_32PageCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("shelf"), gdjs.Win_32PageCode.GDshelfObjects1);
{for(var i = 0, len = gdjs.Win_32PageCode.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDshelfObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 50);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDshelfObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}{for(var i = 0, len = gdjs.Win_32PageCode.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Win_32PageCode.GDshelfObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 3);
}
}}

}


{


gdjs.Win_32PageCode.eventsList1(runtimeScene);
}


{


gdjs.Win_32PageCode.eventsList2(runtimeScene);
}


{


gdjs.Win_32PageCode.eventsList3(runtimeScene);
}


{


gdjs.Win_32PageCode.eventsList5(runtimeScene);
}


{


gdjs.Win_32PageCode.eventsList6(runtimeScene);
}


{


gdjs.Win_32PageCode.eventsList7(runtimeScene);
}


};

gdjs.Win_32PageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Win_32PageCode.GDMonarchObjects1.length = 0;
gdjs.Win_32PageCode.GDMonarchObjects2.length = 0;
gdjs.Win_32PageCode.GDMonarchObjects3.length = 0;
gdjs.Win_32PageCode.GDSignObjects1.length = 0;
gdjs.Win_32PageCode.GDSignObjects2.length = 0;
gdjs.Win_32PageCode.GDSignObjects3.length = 0;
gdjs.Win_32PageCode.GDshelfObjects1.length = 0;
gdjs.Win_32PageCode.GDshelfObjects2.length = 0;
gdjs.Win_32PageCode.GDshelfObjects3.length = 0;
gdjs.Win_32PageCode.GDWallObjects1.length = 0;
gdjs.Win_32PageCode.GDWallObjects2.length = 0;
gdjs.Win_32PageCode.GDWallObjects3.length = 0;
gdjs.Win_32PageCode.GDFallMarkerObjects1.length = 0;
gdjs.Win_32PageCode.GDFallMarkerObjects2.length = 0;
gdjs.Win_32PageCode.GDFallMarkerObjects3.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.Win_32PageCode.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.Win_32PageCode.GDBoxesObjects1.length = 0;
gdjs.Win_32PageCode.GDBoxesObjects2.length = 0;
gdjs.Win_32PageCode.GDBoxesObjects3.length = 0;
gdjs.Win_32PageCode.GDAssistantObjects1.length = 0;
gdjs.Win_32PageCode.GDAssistantObjects2.length = 0;
gdjs.Win_32PageCode.GDAssistantObjects3.length = 0;
gdjs.Win_32PageCode.GDReceiptObjects1.length = 0;
gdjs.Win_32PageCode.GDReceiptObjects2.length = 0;
gdjs.Win_32PageCode.GDReceiptObjects3.length = 0;
gdjs.Win_32PageCode.GDArrowObjects1.length = 0;
gdjs.Win_32PageCode.GDArrowObjects2.length = 0;
gdjs.Win_32PageCode.GDArrowObjects3.length = 0;
gdjs.Win_32PageCode.GDJump_9595ButtonObjects1.length = 0;
gdjs.Win_32PageCode.GDJump_9595ButtonObjects2.length = 0;
gdjs.Win_32PageCode.GDJump_9595ButtonObjects3.length = 0;
gdjs.Win_32PageCode.GDScoreObjects1.length = 0;
gdjs.Win_32PageCode.GDScoreObjects2.length = 0;
gdjs.Win_32PageCode.GDScoreObjects3.length = 0;
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects1.length = 0;
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects2.length = 0;
gdjs.Win_32PageCode.GDOld_9595GrumpsObjects3.length = 0;
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Win_32PageCode.GDFlatDarkJoystickObjects3.length = 0;
gdjs.Win_32PageCode.GDNewSpriteObjects1.length = 0;
gdjs.Win_32PageCode.GDNewSpriteObjects2.length = 0;
gdjs.Win_32PageCode.GDNewSpriteObjects3.length = 0;
gdjs.Win_32PageCode.GDOld_9595GramsObjects1.length = 0;
gdjs.Win_32PageCode.GDOld_9595GramsObjects2.length = 0;
gdjs.Win_32PageCode.GDOld_9595GramsObjects3.length = 0;
gdjs.Win_32PageCode.GDYou_9595WinObjects1.length = 0;
gdjs.Win_32PageCode.GDYou_9595WinObjects2.length = 0;
gdjs.Win_32PageCode.GDYou_9595WinObjects3.length = 0;

gdjs.Win_32PageCode.eventsList8(runtimeScene);

return;

}

gdjs['Win_32PageCode'] = gdjs.Win_32PageCode;
