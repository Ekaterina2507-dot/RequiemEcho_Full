(() => {
    const _Window_Base_lineHeight = Window_Base.prototype.lineResist;
    Window_Base.prototype.lineHeight = function() {
        return 30; // You can change "36" to any other number to increase or decrease the space between lines
    };
})();
