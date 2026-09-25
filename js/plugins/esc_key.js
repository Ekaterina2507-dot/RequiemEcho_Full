/*:
 * @target MZ
 * @plugindesc Change ESC key functionality to always open the main menu, even during dialogue, without affecting choices.
 * @help This plugin changes the functionality of the ESC key to always open the main menu (save, load, options, etc.), even if a dialogue is happening, and ensures proper handling of menu sounds and closing.
 */

(() => {
    const alias_SceneManager_onKeyDown = SceneManager.onKeyDown;

    SceneManager.onKeyDown = function(event) {
        if (event.key === "Escape" || event.key === "Esc" || event.keyCode === 27) {
            // Prevent ESC from opening the menu on the title screen
            if (SceneManager._scene instanceof Scene_Title) {
                return;
            // Handle Scene_Options
            } else if (SceneManager._scene instanceof Scene_Options) {
                SceneManager.pop();
                SoundManager.playCancel();
            // Handle Scene_Save
            } else if (SceneManager._scene instanceof Scene_Save) {
                SceneManager.pop();
                SoundManager.playCancel();
            // Handle Scene_Load
            } else if (SceneManager._scene instanceof Scene_Load) {
                SceneManager.pop();
                SoundManager.playCancel();
            // Handle Scene_Debug
            } else if (SceneManager._scene instanceof Scene_Debug) {
                SceneManager.pop();
                SoundManager.playCancel();
            // Handle Scene_Menu
            } else if (SceneManager._scene instanceof Scene_Menu) {
                SceneManager.pop();
                SoundManager.playCancel();
            // Open the main menu from any other scene
            } else {
                SceneManager.push(Scene_Menu);
                SoundManager.playOk();
            }
        } else {
            alias_SceneManager_onKeyDown.call(this, event);
        }
    };

    // Ensure choices are not disabled or deleted
    const alias_Game_Interpreter_setupChoices = Game_Interpreter.prototype.setupChoices;
    Game_Interpreter.prototype.setupChoices = function(params) {
        alias_Game_Interpreter_setupChoices.call(this, params);
        if ($gameMessage.isBusy()) {
            $gameMessage._choices = this._choices.slice(); // Keep choices intact
            $gameMessage._choiceCancelType = this._choiceCancelType;
            $gameMessage._choiceBackground = this._choiceBackground;
            $gameMessage._choicePositionType = this._choicePositionType;
        }
    };
})();
