gdjs.Level_321Code = {};
gdjs.Level_321Code.localVariables = [];
gdjs.Level_321Code.GDFallMarkerObjects2_1final = [];

gdjs.Level_321Code.GDMonarchObjects2_1final = [];

gdjs.Level_321Code.GDMonarchObjects1= [];
gdjs.Level_321Code.GDMonarchObjects2= [];
gdjs.Level_321Code.GDMonarchObjects3= [];
gdjs.Level_321Code.GDSignObjects1= [];
gdjs.Level_321Code.GDSignObjects2= [];
gdjs.Level_321Code.GDSignObjects3= [];
gdjs.Level_321Code.GDshelfObjects1= [];
gdjs.Level_321Code.GDshelfObjects2= [];
gdjs.Level_321Code.GDshelfObjects3= [];
gdjs.Level_321Code.GDWallObjects1= [];
gdjs.Level_321Code.GDWallObjects2= [];
gdjs.Level_321Code.GDWallObjects3= [];
gdjs.Level_321Code.GDFallMarkerObjects1= [];
gdjs.Level_321Code.GDFallMarkerObjects2= [];
gdjs.Level_321Code.GDFallMarkerObjects3= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects1= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects2= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects3= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects1= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects2= [];
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects3= [];
gdjs.Level_321Code.GDBoxesObjects1= [];
gdjs.Level_321Code.GDBoxesObjects2= [];
gdjs.Level_321Code.GDBoxesObjects3= [];
gdjs.Level_321Code.GDAssistantObjects1= [];
gdjs.Level_321Code.GDAssistantObjects2= [];
gdjs.Level_321Code.GDAssistantObjects3= [];
gdjs.Level_321Code.GDReceiptObjects1= [];
gdjs.Level_321Code.GDReceiptObjects2= [];
gdjs.Level_321Code.GDReceiptObjects3= [];
gdjs.Level_321Code.GDArrowObjects1= [];
gdjs.Level_321Code.GDArrowObjects2= [];
gdjs.Level_321Code.GDArrowObjects3= [];
gdjs.Level_321Code.GDJump_9595ButtonObjects1= [];
gdjs.Level_321Code.GDJump_9595ButtonObjects2= [];
gdjs.Level_321Code.GDJump_9595ButtonObjects3= [];
gdjs.Level_321Code.GDScoreObjects1= [];
gdjs.Level_321Code.GDScoreObjects2= [];
gdjs.Level_321Code.GDScoreObjects3= [];
gdjs.Level_321Code.GDFlatDarkJoystickObjects1= [];
gdjs.Level_321Code.GDFlatDarkJoystickObjects2= [];
gdjs.Level_321Code.GDFlatDarkJoystickObjects3= [];
gdjs.Level_321Code.GDNewSpriteObjects1= [];
gdjs.Level_321Code.GDNewSpriteObjects2= [];
gdjs.Level_321Code.GDNewSpriteObjects3= [];
gdjs.Level_321Code.GDOld_9595GramsObjects1= [];
gdjs.Level_321Code.GDOld_9595GramsObjects2= [];
gdjs.Level_321Code.GDOld_9595GramsObjects3= [];
gdjs.Level_321Code.GDOld_9595GrumpsObjects1= [];
gdjs.Level_321Code.GDOld_9595GrumpsObjects2= [];
gdjs.Level_321Code.GDOld_9595GrumpsObjects3= [];


gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FlatDarkJoystick"), gdjs.Level_321Code.GDFlatDarkJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Level_321Code.GDJump_9595ButtonObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDFlatDarkJoystickObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFlatDarkJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDJump_9595ButtonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDJump_9595ButtonObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDReceiptObjects2Objects = Hashtable.newFrom({"Receipt": gdjs.Level_321Code.GDReceiptObjects2});
gdjs.Level_321Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Receipt"), gdjs.Level_321Code.GDReceiptObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDReceiptObjects2Objects, false, runtimeScene, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDReceiptObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{runtimeScene.getScene().getVariables().getFromIndex(1).add(gdjs.randomFloatInRange(0.025, 0.05));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PitchScaling");
}{gdjs.evtTools.sound.playSound(runtimeScene, "Price Tag Collect.wav", false, 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) - 0.1);
}{for(var i = 0, len = gdjs.Level_321Code.GDReceiptObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDReceiptObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects2[i].setString("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
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


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GrumpsObjects2Objects = Hashtable.newFrom({"Old_Grumps": gdjs.Level_321Code.GDOld_9595GrumpsObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GramsObjects2Objects = Hashtable.newFrom({"Old_Grams": gdjs.Level_321Code.GDOld_9595GramsObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBoxesObjects2Objects = Hashtable.newFrom({"Boxes": gdjs.Level_321Code.GDBoxesObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects1Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAssistantObjects1Objects = Hashtable.newFrom({"Assistant": gdjs.Level_321Code.GDAssistantObjects1});
gdjs.Level_321Code.eventsList2 = function(runtimeScene) {

{

gdjs.Level_321Code.GDFallMarkerObjects2.length = 0;

gdjs.Level_321Code.GDMonarchObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Level_321Code.GDFallMarkerObjects2_1final.length = 0;
gdjs.Level_321Code.GDMonarchObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Level_321Code.GDFallMarkerObjects3);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects3);
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDMonarchObjects3.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDMonarchObjects3[i].getY() > (( gdjs.Level_321Code.GDFallMarkerObjects3.length === 0 ) ? 0 :gdjs.Level_321Code.GDFallMarkerObjects3[0].getY()) ) {
        isConditionTrue_1 = true;
        gdjs.Level_321Code.GDMonarchObjects3[k] = gdjs.Level_321Code.GDMonarchObjects3[i];
        ++k;
    }
}
gdjs.Level_321Code.GDMonarchObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Level_321Code.GDFallMarkerObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDFallMarkerObjects2_1final.indexOf(gdjs.Level_321Code.GDFallMarkerObjects3[j]) === -1 )
            gdjs.Level_321Code.GDFallMarkerObjects2_1final.push(gdjs.Level_321Code.GDFallMarkerObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.Level_321Code.GDMonarchObjects3.length; j < jLen ; ++j) {
        if ( gdjs.Level_321Code.GDMonarchObjects2_1final.indexOf(gdjs.Level_321Code.GDMonarchObjects3[j]) === -1 )
            gdjs.Level_321Code.GDMonarchObjects2_1final.push(gdjs.Level_321Code.GDMonarchObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Level_321Code.GDFallMarkerObjects2_1final, gdjs.Level_321Code.GDFallMarkerObjects2);
gdjs.copyArray(gdjs.Level_321Code.GDMonarchObjects2_1final, gdjs.Level_321Code.GDMonarchObjects2);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Gun 1.aac", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Level_321Code.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GrumpsObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grumps Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Level_321Code.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GramsObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Old Grams Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Boxes"), gdjs.Level_321Code.GDBoxesObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDBoxesObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Pallet Collision.wav", false, 50, 0.8);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Level_321Code.GDAssistantObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAssistantObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 1", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Shopping Cart Collision.wav", false, 50, 0.8);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects1Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects1});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSignObjects1Objects = Hashtable.newFrom({"Sign": gdjs.Level_321Code.GDSignObjects1});
gdjs.Level_321Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Sign"), gdjs.Level_321Code.GDSignObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDSignObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15484556);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Undocking_Chime.wav", false, 50, 1);
}}

}


};gdjs.Level_321Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15486140);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "MobileControls");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jump_Button"), gdjs.Level_321Code.GDJump_9595ButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDJump_9595ButtonObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDJump_9595ButtonObjects1[i].getBehavior("MultitouchButton").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDJump_9595ButtonObjects1[k] = gdjs.Level_321Code.GDJump_9595ButtonObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDJump_9595ButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDMonarchObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonarchObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.Level_321Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_321Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level_321Code.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Left"), gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("CameraBoundarysMarker_Right"), gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects1);
{gdjs.evtTools.camera.clampCamera(runtimeScene, (( gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects1[0].getAABBRight()), (( gdjs.Level_321Code.GDMonarchObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMonarchObjects1[0].getPointY("")) - 500, (( gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects1[0].getAABBLeft()), (( gdjs.Level_321Code.GDMonarchObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDMonarchObjects1[0].getPointY("")) + 500, "", 0);
}}

}


};gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAssistantObjects2Objects = Hashtable.newFrom({"Assistant": gdjs.Level_321Code.GDAssistantObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GrumpsObjects2Objects = Hashtable.newFrom({"Old_Grumps": gdjs.Level_321Code.GDOld_9595GrumpsObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects = Hashtable.newFrom({"Monarch": gdjs.Level_321Code.GDMonarchObjects2});
gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GramsObjects2Objects = Hashtable.newFrom({"Old_Grams": gdjs.Level_321Code.GDOld_9595GramsObjects2});
gdjs.Level_321Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Level_321Code.GDAssistantObjects2);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDAssistantObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAssistantObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDAssistantObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAssistantObjects2[k] = gdjs.Level_321Code.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAssistantObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAssistantObjects2[i].setVariableBoolean(gdjs.Level_321Code.GDAssistantObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Level_321Code.GDAssistantObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAssistantObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDAssistantObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAssistantObjects2[k] = gdjs.Level_321Code.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAssistantObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAssistantObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Assistant"), gdjs.Level_321Code.GDAssistantObjects2);
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Level_321Code.GDFallMarkerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDAssistantObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDAssistantObjects2[i].getY() > (( gdjs.Level_321Code.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDAssistantObjects2[k] = gdjs.Level_321Code.GDAssistantObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDAssistantObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDAssistantObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDAssistantObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDAssistantObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Level_321Code.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GrumpsObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GrumpsObjects2[k] = gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].setVariableBoolean(gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Level_321Code.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GrumpsObjects2[k] = gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Level_321Code.GDFallMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grumps"), gdjs.Level_321Code.GDOld_9595GrumpsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].getY() > (( gdjs.Level_321Code.GDFallMarkerObjects2.length === 0 ) ? 0 :gdjs.Level_321Code.GDFallMarkerObjects2[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GrumpsObjects2[k] = gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GrumpsObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GrumpsObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects2);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Level_321Code.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDMonarchObjects2Objects, gdjs.Level_321Code.mapOfGDgdjs_9546Level_9595321Code_9546GDOld_95959595GramsObjects2Objects, 700, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GramsObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GramsObjects2[k] = gdjs.Level_321Code.GDOld_9595GramsObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GramsObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GramsObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GramsObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GramsObjects2[i].setVariableBoolean(gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Level_321Code.GDOld_9595GramsObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GramsObjects2.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getVariableBoolean(gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getVariables().getFromIndex(0), true) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GramsObjects2[k] = gdjs.Level_321Code.GDOld_9595GramsObjects2[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GramsObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GramsObjects2 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GramsObjects2.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GramsObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Level_321Code.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Old_Grams"), gdjs.Level_321Code.GDOld_9595GramsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_321Code.GDOld_9595GramsObjects1.length;i<l;++i) {
    if ( gdjs.Level_321Code.GDOld_9595GramsObjects1[i].getY() > (( gdjs.Level_321Code.GDFallMarkerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDFallMarkerObjects1[0].getY()) ) {
        isConditionTrue_0 = true;
        gdjs.Level_321Code.GDOld_9595GramsObjects1[k] = gdjs.Level_321Code.GDOld_9595GramsObjects1[i];
        ++k;
    }
}
gdjs.Level_321Code.GDOld_9595GramsObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_321Code.GDOld_9595GramsObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDOld_9595GramsObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDOld_9595GramsObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_321Code.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FallMarker"), gdjs.Level_321Code.GDFallMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Monarch"), gdjs.Level_321Code.GDMonarchObjects1);
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level_321Code.GDScoreObjects1);
gdjs.copyArray(runtimeScene.getObjects("shelf"), gdjs.Level_321Code.GDshelfObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDshelfObjects1.length !== 0 ? gdjs.Level_321Code.GDshelfObjects1[0] : null), true, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Level_321Code.GDMonarchObjects1.length !== 0 ? gdjs.Level_321Code.GDMonarchObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Level_321Code.GDMonarchObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDMonarchObjects1[i].setZOrder(1000);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDFallMarkerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDFallMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDScoreObjects1[i].getBehavior("Text").setText("Score: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}
{ //Subevents
gdjs.Level_321Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("shelf"), gdjs.Level_321Code.GDshelfObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDshelfObjects1[i].setWidth(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) + 50);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDshelfObjects1[i].setXOffset(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 3);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDshelfObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDshelfObjects1[i].setYOffset(gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 3);
}
}}

}


{


gdjs.Level_321Code.eventsList1(runtimeScene);
}


{


gdjs.Level_321Code.eventsList2(runtimeScene);
}


{


gdjs.Level_321Code.eventsList3(runtimeScene);
}


{


gdjs.Level_321Code.eventsList5(runtimeScene);
}


{


gdjs.Level_321Code.eventsList6(runtimeScene);
}


{


gdjs.Level_321Code.eventsList7(runtimeScene);
}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDMonarchObjects1.length = 0;
gdjs.Level_321Code.GDMonarchObjects2.length = 0;
gdjs.Level_321Code.GDMonarchObjects3.length = 0;
gdjs.Level_321Code.GDSignObjects1.length = 0;
gdjs.Level_321Code.GDSignObjects2.length = 0;
gdjs.Level_321Code.GDSignObjects3.length = 0;
gdjs.Level_321Code.GDshelfObjects1.length = 0;
gdjs.Level_321Code.GDshelfObjects2.length = 0;
gdjs.Level_321Code.GDshelfObjects3.length = 0;
gdjs.Level_321Code.GDWallObjects1.length = 0;
gdjs.Level_321Code.GDWallObjects2.length = 0;
gdjs.Level_321Code.GDWallObjects3.length = 0;
gdjs.Level_321Code.GDFallMarkerObjects1.length = 0;
gdjs.Level_321Code.GDFallMarkerObjects2.length = 0;
gdjs.Level_321Code.GDFallMarkerObjects3.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects1.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects2.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595LeftObjects3.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects1.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects2.length = 0;
gdjs.Level_321Code.GDCameraBoundarysMarker_9595RightObjects3.length = 0;
gdjs.Level_321Code.GDBoxesObjects1.length = 0;
gdjs.Level_321Code.GDBoxesObjects2.length = 0;
gdjs.Level_321Code.GDBoxesObjects3.length = 0;
gdjs.Level_321Code.GDAssistantObjects1.length = 0;
gdjs.Level_321Code.GDAssistantObjects2.length = 0;
gdjs.Level_321Code.GDAssistantObjects3.length = 0;
gdjs.Level_321Code.GDReceiptObjects1.length = 0;
gdjs.Level_321Code.GDReceiptObjects2.length = 0;
gdjs.Level_321Code.GDReceiptObjects3.length = 0;
gdjs.Level_321Code.GDArrowObjects1.length = 0;
gdjs.Level_321Code.GDArrowObjects2.length = 0;
gdjs.Level_321Code.GDArrowObjects3.length = 0;
gdjs.Level_321Code.GDJump_9595ButtonObjects1.length = 0;
gdjs.Level_321Code.GDJump_9595ButtonObjects2.length = 0;
gdjs.Level_321Code.GDJump_9595ButtonObjects3.length = 0;
gdjs.Level_321Code.GDScoreObjects1.length = 0;
gdjs.Level_321Code.GDScoreObjects2.length = 0;
gdjs.Level_321Code.GDScoreObjects3.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects1.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects2.length = 0;
gdjs.Level_321Code.GDFlatDarkJoystickObjects3.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects1.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects2.length = 0;
gdjs.Level_321Code.GDNewSpriteObjects3.length = 0;
gdjs.Level_321Code.GDOld_9595GramsObjects1.length = 0;
gdjs.Level_321Code.GDOld_9595GramsObjects2.length = 0;
gdjs.Level_321Code.GDOld_9595GramsObjects3.length = 0;
gdjs.Level_321Code.GDOld_9595GrumpsObjects1.length = 0;
gdjs.Level_321Code.GDOld_9595GrumpsObjects2.length = 0;
gdjs.Level_321Code.GDOld_9595GrumpsObjects3.length = 0;

gdjs.Level_321Code.eventsList8(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;
