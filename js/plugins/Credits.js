/*:
 * @target MZ
 * @plugindesc Adds a credits scene to the game as a popup with clickable links.
 * @help This plugin adds a credits scene that can be accessed from the main menu or via events.
 */

(() => {
    class Scene_Credits extends Scene_MenuBase {
        create() {
            super.create();
            this.createCreditsWindow();
        }

        createCreditsWindow() {
            const rect = this.creditsWindowRect();
            this._creditsWindow = new Window_Credits(rect);
            this._creditsWindow.setHandler('cancel', this.popScene.bind(this));
            this.addWindow(this._creditsWindow);
        }

        creditsWindowRect() {
            const ww = Graphics.boxWidth - 100;
            const wh = Graphics.boxHeight - 100;
            const wx = (Graphics.boxWidth - ww) / 2;
            const wy = (Graphics.boxHeight - wh) / 2;
            return new Rectangle(wx, wy, ww, wh);
        }
    }

    class Window_Credits extends Window_Selectable {
        initialize(rect) {
            super.initialize(rect);
            this.refresh();
            this.activate();
        }

        maxItems() {
            return 1;
        }

        refresh() {
            this.contents.clear();
            const credits = `
                Game Title
                Developed by Your Name

                Special Thanks:
                - Person 1
                - Person 2
                - Person 3

                Resources:
                - RPG Maker MZ
                - Asset Creator 1
                - Asset Creator 2

                Music:
                - Composer 1
                - Composer 2

                Thank you for playing!

                Follow us:
                @YourTwitterHandle
                yourwebsite.com
            `;

            this.drawTextEx(credits, 0, 0);
        }

        drawTextEx(text, x, y) {
            if (text) {
                const textState = this.createTextState(text, x, y, this.contents.width);
                this.processAllText(textState);
                return textState.outputHeight;
            } else {
                return 0;
            }
        }

        processAllText(textState) {
            while (textState.index < textState.text.length) {
                this.processCharacter(textState);
            }
        }

        processEscapeCharacter(code, textState) {
            switch (code) {
                case 'L': // Link escape character
                    this.processLink(textState);
                    break;
                default:
                    super.processEscapeCharacter(code, textState);
                    break;
            }
        }

        processLink(textState) {
            const url = this.obtainEscapeParam(textState);
            this.changeTextColor(this.linkColor());
            this.drawUnderline(textState);
            this.contents.drawText(url, textState.x, textState.y, this.contentsWidth(), this.lineHeight(), 'left');
            textState.index += url.length;
            this.resetTextColor();
        }

        linkColor() {
            return '#00aaff';
        }

        drawUnderline(textState) {
            const color = this.linkColor();
            const x = textState.x;
            const y = textState.y + this.lineHeight() - 2;
            const width = this.textWidth(this.obtainEscapeParam(textState));
            this.contents.paintOpacity = 160;
            this.contents.fillRect(x, y, width, 1, color);
            this.contents.paintOpacity = 255;
        }
    }

    window.Scene_Credits = Scene_Credits;

    // Add Credits to the Title Command Window
    const _Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;
    Window_TitleCommand.prototype.makeCommandList = function() {
        _Window_TitleCommand_makeCommandList.call(this);
        this.addCommand("Credits", 'credits');
    };

    // Handle Credits Command in the Title Scene
    const _Scene_Title_createCommandWindow = Scene_Title.prototype.createCommandWindow;
    Scene_Title.prototype.createCommandWindow = function() {
        _Scene_Title_createCommandWindow.call(this);
        this._commandWindow.setHandler('credits', this.commandCredits.bind(this));
    };

    Scene_Title.prototype.commandCredits = function() {
        SceneManager.push(Scene_Credits);
    };
})();
