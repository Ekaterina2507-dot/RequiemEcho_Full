Window_ChoiceList.prototype.windowY = function() {
    const messageY = this._messageWindow.y -20;
    if (messageY >= Graphics.boxHeight / 2) {
        return messageY - this.windowHeight();
    } else {
        return messageY + this._messageWindow.height;
    }
};