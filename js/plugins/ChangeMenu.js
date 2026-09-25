//=============================================================================
// SimplestMainMenu.js
//=============================================================================
/*:
* @target MZ
* @plugindesc v0.0.1 Simplest Main Menu
* @author MechPen
* @help SimplestMainMenu.js
*
* Removes everything except for the command window.
* You can remove Items, Skill, etc from the System 2 tab in the database.
*
*
*/

(() => {
//
const pluginName = "SimplestMainMenu";

Scene_Menu.prototype.start = function() {
    Scene_MenuBase.prototype.start.call(this);
    this._statusWindow.hide();
    this._goldWindow.hide();
};
 
})();

// patch by caethyril - resize/reposition command window
(alias => {
  Scene_Menu.prototype.commandWindowRect = function() {
    const rect = alias.apply(this, arguments);        // calculate as normal
    rect.height = this.calcWindowHeight(3, true);     // height = 4 commands
    rect.x = (Graphics.boxWidth - rect.width) / 2;    // centre x
    rect.y = (Graphics.boxHeight - rect.height) / 2;  // centre y
    return rect;
  };
})(Scene_Menu.prototype.commandWindowRect);

// end of file