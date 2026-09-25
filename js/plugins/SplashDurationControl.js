(() => {
    const originalSceneTitleStart = Scene_Title.prototype.start;
    
    Scene_Title.prototype.start = function() {
        this._startTime = performance.now();
        originalSceneTitleStart.call(this);
    };

    Scene_Title.prototype.update = function() {
        if (performance.now() - this._startTime >= 3000) { // Adjust 3000 to your desired time in milliseconds
            SceneManager.goto(Scene_Map);
        }
    };
})();
