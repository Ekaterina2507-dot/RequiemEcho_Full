/*:
 * @target MZ
 * @plugindesc Makes the menu button UI visible during message events.
 * @help This plugin ensures that the menu button UI remains visible during message events.
 */

(() => {
    const alias_Scene_Map_createDisplayObjects = Scene_Map.prototype.createDisplayObjects;
    Scene_Map.prototype.createDisplayObjects = function() {
        alias_Scene_Map_createDisplayObjects.call(this);
        this.createMenuButton();
    };

    Scene_Map.prototype.createMenuButton = function() {
        if (this._menuButton) {
            this.removeChild(this._menuButton);
        }
        this._menuButton = new Sprite_Button('menu');
        this._menuButton.bitmap = ImageManager.loadSystem('ButtonSet');
        this._menuButton.setColdFrame(0, 0, 48, 48);
        this._menuButton.setHotFrame(0, 48, 48, 48);
        this._menuButton.x = Graphics.boxWidth - this._menuButton.width - 20;
        this._menuButton.y = 20;
        this._menuButton.setClickHandler(this.onMenuButtonClick.bind(this));
        this.addWindow(this._menuButton);
    };

    Scene_Map.prototype.onMenuButtonClick = function() {
        SceneManager.push(Scene_Menu);
        Window_MenuCommand.initCommandPosition();
    };

    const alias_Scene_Map_update = Scene_Map.prototype.update;
    Scene_Map.prototype.update = function() {
        alias_Scene_Map_update.call(this);
        if (this._menuButton) {
            this._menuButton.visible = true;
        }
    };
})();
