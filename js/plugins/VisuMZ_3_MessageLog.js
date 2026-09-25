//=============================================================================
// VisuStella MZ - Message Log
// VisuMZ_3_MessageLog.js
//=============================================================================

var Imported = Imported || {};
Imported.VisuMZ_3_MessageLog = true;

var VisuMZ = VisuMZ || {};
VisuMZ.MessageLog = VisuMZ.MessageLog || {};
VisuMZ.MessageLog.version = 1.04;

//=============================================================================
 /*:
 * @target MZ
 * @plugindesc [RPG Maker MZ] [Tier 3] [Version 1.04] [MessageLog]
 * @author VisuStella
 * @url http://www.yanfly.moe/wiki/Message_Log_VisuStella_MZ
 * @base VisuMZ_1_MessageCore
 * @orderAfter VisuMZ_1_MessageCore
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * The Message Log plugin will take and record any Show Message entries played
 * on the map screen so that players can go back to them and review them at a
 * later point in time when needed. This is helpful for players who may have
 * missed important information that would have been displayed or those who
 * would like to review what was said previously. The Message Log will not
 * record any of the text displayed in the battle scene in order to preserve
 * the data to one specific scene.
 *
 * Features include all (but not limited to) the following:
 * 
 * * Record messages written out in the "Show Text" command while the player is
 *   on the map screen.
 * * Players can access the Message Log through either the Main Menu or by a
 *   shortcut key whenever the Message Window is open.
 * * Faces and speaker names will also be recorded.
 * * Choice List selections, Number Inputs, and selected Event Items will also
 *   be recorded.
 * * Those using the Extended Message Functionality plugin can also bind this
 *   effect to the Button Console.
 *
 * ============================================================================
 * Requirements
 * ============================================================================
 *
 * This plugin is made for RPG Maker MZ. This will not work in other iterations
 * of RPG Maker.
 *
 * ------ Required Plugin List ------
 *
 * * VisuMZ_1_MessageCore
 *
 * This plugin requires the above listed plugins to be installed inside your
 * game's Plugin Manager list in order to work. You cannot start your game with
 * this plugin enabled without the listed plugins.
 *
 * ------ Tier 3 ------
 *
 * This plugin is a Tier 3 plugin. Place it under other plugins of lower tier
 * value on your Plugin Manager list (ie: 0, 1, 2, 3, 4, 5). This is to ensure
 * that your plugins will have the best compatibility with the rest of the
 * VisuStella MZ library.
 *
 * ============================================================================
 * Major Changes
 * ============================================================================
 *
 * This plugin adds some new hard-coded features to RPG Maker MZ's functions.
 * The following is a list of them.
 *
 * ---
 *
 * Replaced Message Text Codes
 * 
 * Some text codes are not compatible with the Message Log when viewed such as
 * wait commands, showing the gold window, etc. When that happens, those text
 * codes will be removed from visibility in the Message Log in order to prevent
 * any problems. The following is a list of the Message Text Codes that will
 * not appear in the Message Log:
 * 
 *   --------------------
 *   Default RPG Maker MZ
 *   --------------------
 *   \$
 *   \.
 *   \|
 *   \!
 *   \>
 *   \<
 *   \^
 * 
 *   --------------------
 *   VisuMZ_1_MessageCore
 *   --------------------
 *   \Picture<x>
 *   \CenterPicture<x>
 *   \CommonEvent[x]
 *   \Wait[x]
 *   \NormalBG
 *   \DimBG
 *   \TransparentBG
 *   \WindowMoveTo: ?>
 *   \WindowMoveBy: ?>
 *   \WindowReset
 *   \TroopMember[x]
 *   \TroopNameMember[x]
 *   \ChangeFace<?>
 *   \FaceIndex[x]
 *   <Auto>
 *   <Auto Width>
 *   <Auto Height>
 *   <Auto Actor: x>
 *   <Auto Party: x>
 *   <Auto Enemy: x>
 *   <Auto Event: x>
 *   <Auto Player>
 *   <Show>
 *   <Show Switch: x>
 *   <Show All Switches: x,x,x>
 *   <Show Any Switches: x,x,x>
 *   <Hide>
 *   <Hide Switch: x>
 *   <Hide All Switches: x,x,x>
 *   <Hide Any Switches: x,x,x>
 *   <Enable>
 *   <Enable Switch: x>
 *   <Enable All Switches: x,x,x>
 *   <Enable Any Switches: x,x,x>
 *   <Disable>
 *   <Disable Switch: x>
 *   <Disable All Switches: x,x,x>
 *   <Disable Any Switches: x,x,x>
 *   <Position: ?>
 *   <Coordinates: ?>
 *   <Dimensions: ?>
 * 
 *   -----------------------
 *   VisuMZ_2_ExtMessageFunc
 *   -----------------------
 *   <Hide Buttons>
 * 
 *   -----------------------
 *   VisuMZ_2_PictureChoices
 *   -----------------------
 *   <Bind Picture: id>
 *   <Hide Choice Window>
 * 
 *   ----------------------
 *   VisuMZ_3_ChoiceCmnEvts
 *   ----------------------
 *   <Choice Common Event: id>
 * 
 *   -------------------
 *   VisuMZ_3_MessageLog
 *   -------------------
 *   <Bypass Message Log>
 * 
 *   ----------------------
 *   VisuMZ_3_MessageSounds
 *   ----------------------
 *   <Letter Sound On>
 *   <Letter Sound Off>
 *   \LetterSoundName<filename>
 *   \LetterSoundVolume[x]
 *   \LetterSoundPitch[x]
 *   \LetterSoundPan[x]
 *   \LetterSoundVolumeVar[x]
 *   \LetterSoundPitchVar[x]
 *   \LetterSoundPanVar[x]
 *   \LSON
 *   \LSOFF
 *   \LSN<filename>
 *   \LSV[x]
 *   \LSPI[x]
 *   \LSPA[x]
 *   \LSVV[x]
 *   \LSPIV[x]
 *   \LSPAV[x]
 * 
 *   ------------------------
 *   VisuMZ_4_EventTitleScene
 *   ------------------------
 *   <Continue>
 *
 * ---
 *
 * ============================================================================
 * VisuStella MZ Compatibility
 * ============================================================================
 *
 * While this plugin is compatible with the majority of the VisuStella MZ
 * plugin library, it is not compatible with specific plugins or specific
 * features. This section will highlight the main plugins/features that will
 * not be compatible with this plugin or put focus on how the make certain
 * features compatible.
 *
 * ---
 * 
 * VisuMZ_2_ExtMessageFunc
 * 
 * The Extended Message Functionality plugin enables the "Log" button found in
 * the Button Console to let the player go and review the text that has been
 * displayed in the map scene. This does not include the text found in battle
 * to avoid conflicting logged messages across different situations.
 * 
 * ---
 *
 * ============================================================================
 * Available Text Codes
 * ============================================================================
 *
 * The following are text codes that you may use with this plugin. 
 *
 * === Log-Related Text Codes ===
 * 
 * ---
 *
 * --------------------   -----------------------------------------------------
 * Text Code              Effect
 * --------------------   -----------------------------------------------------
 * 
 * <Bypass Message Log>   Prevents the specific "Show Text" window from being
 *                        recorded into the Message Log.
 * 
 * ---
 *
 * ============================================================================
 * Plugin Commands
 * ============================================================================
 *
 * The following are Plugin Commands that come with this plugin. They can be
 * accessed through the Plugin Command event command.
 *
 * ---
 * 
 * === Bypass Plugin Commands ===
 * 
 * ---
 *
 * Bypass: Message Logging?
 * - Bypass message logging until turned off.
 *
 *   Bypass?:
 *   - Bypasses Message Logging until turned off.
 *
 * ---
 * 
 * === System Plugin Commands ===
 * 
 * ---
 *
 * System: Enable Message Log in Menu?
 * - Enables/disables Message Log menu inside the main menu.
 *
 *   Enable/Disable?:
 *   - Enables/disables Message Log menu inside the main menu.
 *
 * ---
 *
 * System: Show Message Log in Menu?
 * - Shows/hides Message Log menu inside the main menu.
 *
 *   Show/Hide?:
 *   - Shows/hides Message Log menu inside the main menu.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: General Settings
 * ============================================================================
 *
 * General Settings for the Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Entry Limit:
 *   - How many message entries will be stored before the game will start
 *     trimming them?
 * 
 *   Shortcut Key:
 *   - This is the key used for opening the Message Log scene.
 *   - Does not work in battle!
 * 
 *   Show Faces?
 *   - Show face graphics in the Message Log?
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Main Menu Settings
 * ============================================================================
 *
 * Main Menu settings for Message Log.
 *
 * ---
 *
 * Settings
 * 
 *   Command Name:
 *   - Name of the 'Message Log' option in the Main Menu.
 * 
 *   Show in Main Menu?:
 *   - Add the 'Message Log' option to the Main Menu by default?
 * 
 *   Enable in Main Menu?:
 *   - Enable the 'Message Log' option to the Main Menu by default?
 *   - This will be automatically disabled if there are no entries available.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Background Settings
 * ============================================================================
 *
 * Background settings for Scene_MessageLog.
 *
 * ---
 *
 * Settings
 * 
 *   Snapshop Opacity:
 *   - Snapshot opacity for the scene.
 * 
 *   Background 1:
 *   - Filename used for the bottom background image.
 *   - Leave empty if you don't wish to use one.
 * 
 *   Background 2:
 *   - Filename used for the upper background image.
 *   - Leave empty if you don't wish to use one.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Vocabulary Settings
 * ============================================================================
 *
 * These settings let you adjust the text displayed for this plugin.
 *
 * ---
 *
 * ExtMessageFunc
 * 
 *   Button Name:
 *   - How is this option's text displayed in-game?
 *   - Requires VisuMZ_2_ExtMessageFunc!
 *
 * ---
 *
 * Button Assist Window
 * 
 *   Slow Scroll:
 *   - Text used for slow scrolling.
 * 
 *   Fast Scroll:
 *   - Text used for fast scrolling.
 *
 * ---
 *
 * Choice Window Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected choice text.
 *   - %1 - Selected Choice Text
 * 
 *   Cancel:
 *   - Text used when cancel branch is selected.
 *
 * ---
 *
 * Number Input Logging
 * 
 *   Text Format:
 *   - Text format for logging the inputted number value.
 *   - %1 - Number Value
 *
 * ---
 *
 * Event Item Logging
 * 
 *   Text Format:
 *   - Text format for logging the selected event Item.
 *   - %1 - Selected Event Item Text
 * 
 *   Name Format:
 *   - Text format for how item names are displayed.
 *   - %1 - Item Icon, %2 - Item Name
 * 
 *   No Item:
 *   - Text used when no item is selected.
 *
 * ---
 *
 * ============================================================================
 * Plugin Parameters: Window Settings
 * ============================================================================
 *
 * Window settings for Scene_MessageLog.
 *
 * ---
 *
 * Message Log Window
 * 
 *   Background Type:
 *   - Select background type for this window.
 * 
 *   JS: X, Y, W, H:
 *   - Code used to determine the dimensions for this window.
 *
 * ---
 *
 * Appearance
 * 
 *   Speaker Name X:
 *   - What X coordinate do you want the speaker name to appear at?
 *
 * ---
 *
 * Color Lock
 * 
 *   Choices:
 *   - Color lock the logged choices?
 * 
 *   Number Inputs:
 *   - Color lock the logged Number Inputs?
 * 
 *   Event Item:
 *   - Color lock the logged selected Event Item?
 *
 * ---
 *
 * Scrolling > Slow
 * 
 *   Scroll Speed:
 *   - What speed will Up/Down scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will Up/Down scrolling make sounds?
 *   - Lower is quicker. Higher is later.
 *
 * ---
 *
 * Scrolling > Fast
 * 
 *   Scroll Speed:
 *   - What speed will PageUp/PageDn scroll the window at?
 *   - Lower is slower. Higher is faster.
 * 
 *   Sound Frequency:
 *   - How frequent will PageUp/PageDn scrolling make sounds?
 *   - Lower is quicker. Higher is later.
 *
 * ---
 *
 * ============================================================================
 * Terms of Use
 * ============================================================================
 *
 * 1. These plugins may be used in free or commercial games provided that they
 * have been acquired through legitimate means at VisuStella.com and/or any
 * other official approved VisuStella sources. Exceptions and special
 * circumstances that may prohibit usage will be listed on VisuStella.com.
 * 
 * 2. All of the listed coders found in the Credits section of this plugin must
 * be given credit in your games or credited as a collective under the name:
 * "VisuStella".
 * 
 * 3. You may edit the source code to suit your needs, so long as you do not
 * claim the source code belongs to you. VisuStella also does not take
 * responsibility for the plugin if any changes have been made to the plugin's
 * code, nor does VisuStella take responsibility for user-provided custom code
 * used for custom control effects including advanced JavaScript notetags
 * and/or plugin parameters that allow custom JavaScript code.
 * 
 * 4. You may NOT redistribute these plugins nor take code from this plugin to
 * use as your own. These plugins and their code are only to be downloaded from
 * VisuStella.com and other official/approved VisuStella sources. A list of
 * official/approved sources can also be found on VisuStella.com.
 *
 * 5. VisuStella is not responsible for problems found in your game due to
 * unintended usage, incompatibility problems with plugins outside of the
 * VisuStella MZ library, plugin versions that aren't up to date, nor
 * responsible for the proper working of compatibility patches made by any
 * third parties. VisuStella is not responsible for errors caused by any
 * user-provided custom code used for custom control effects including advanced
 * JavaScript notetags and/or plugin parameters that allow JavaScript code.
 *
 * 6. If a compatibility patch needs to be made through a third party that is
 * unaffiliated with VisuStella that involves using code from the VisuStella MZ
 * library, contact must be made with a member from VisuStella and have it
 * approved. The patch would be placed on VisuStella.com as a free download
 * to the public. Such patches cannot be sold for monetary gain, including
 * commissions, crowdfunding, and/or donations.
 * 
 * 7. If this VisuStella MZ plugin is a paid product, all project team members
 * must purchase their own individual copies of the paid product if they are to
 * use it. Usage includes working on related game mechanics, managing related
 * code, and/or using related Plugin Commands and features. Redistribution of
 * the plugin and/or its code to other members of the team is NOT allowed
 * unless they own the plugin itself as that conflicts with Article 4.
 * 
 * 8. Any extensions and/or addendums made to this plugin's Terms of Use can be
 * found on VisuStella.com and must be followed.
 *
 * ============================================================================
 * Credits
 * ============================================================================
 * 
 * If you are using this plugin, credit the following people in your game:
 * 
 * Team VisuStella
 * * Irina
 * * Trihan
 * * Arisu
 * * Olivia
 * * Yanfly
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 * 
 * Version 1.04: March 16, 2023
 * * Compatibility Update!
 * ** Added compatibility for the recent Message Core additions.
 * ** Added compatibility functionality for future plugins.
 * 
 * Version 1.03: October 7, 2021
 * * Bug Fixes!
 * ** Message Log should now work with automatic word wrap. Fix by Irina.
 * 
 * Version 1.02: September 3, 2021
 * * Bug Fixes!
 * ** Fixed a crash pertaining to specific message windows that haven't
 *    declared a speaker name from an older RPG Maker version. Fix by Irina.
 * 
 * Version 1.01: August 6, 2021
 * * Documentation Update!
 * ** Plugin URL now updated to most recent one.
 *
 * Version 1.00 Official Release Date: August 4, 2021
 * * Finished Plugin!
 *
 * ============================================================================
 * End of Helpfile
 * ============================================================================
 *
 * @ --------------------------------------------------------------------------
 *
 * @command BypassMessageLogging
 * @text Bypass: Message Logging?
 * @desc Bypass message logging until turned off.
 *
 * @arg Bypass:eval
 * @text Bypass?
 * @type boolean
 * @on Bypass
 * @off Enable
 * @desc Bypasses Message Logging until turned off.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemEnableMessageLogMenu
 * @text System: Enable Message Log in Menu?
 * @desc Enables/disables Message Log menu inside the main menu.
 *
 * @arg Enable:eval
 * @text Enable/Disable?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enables/disables Message Log menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @command SystemShowMessageLogMenu
 * @text System: Show Message Log in Menu?
 * @desc Shows/hides Message Log menu inside the main menu.
 *
 * @arg Show:eval
 * @text Show/Hide?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Shows/hides Message Log menu inside the main menu.
 * @default true
 *
 * @ --------------------------------------------------------------------------
 *
 * @ ==========================================================================
 * @ Plugin Parameters
 * @ ==========================================================================
 *
 * @param BreakHead
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param MessageLog
 * @default Plugin Parameters
 *
 * @param ATTENTION
 * @default READ THE HELP FILE
 *
 * @param BreakSettings
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param General:struct
 * @text General Settings
 * @type struct<General>
 * @desc General Settings for the Message Log.
 * @default {"EntryLimit:num":"50","ShortcutKey:str":"pageup","ShowFaces:eval":"true"}
 *
 * @param MainMenu:struct
 * @text Main Menu Settings
 * @type struct<MainMenu>
 * @desc Main Menu settings for Message Log.
 * @default {"Name:str":"Message Log","ShowMainMenu:eval":"true","EnableMainMenu:eval":"true"}
 *
 * @param BgSettings:struct
 * @text Background Settings
 * @type struct<BgSettings>
 * @desc Background settings for Scene_MessageLog.
 * @default {"SnapshotOpacity:num":"192","BgFilename1:str":"","BgFilename2:str":""}
 *
 * @param Vocab:struct
 * @text Vocabulary Settings
 * @type struct<Vocab>
 * @desc These settings let you adjust the text displayed for this plugin.
 * @default {"ExtMessageFunc":"","ButtonName:str":"LOG","ButtonAssist":"","SlowScroll:str":"Scroll","FastScroll:str":"Fast Scroll","ChoiceLogging":"","ChoiceFmt:str":"\\C[4]Choice >\\C[0] %1","ChoiceCancel:str":"Cancel","NumberLogging":"","NumberFmt:str":"\\C[4]Amount >\\C[0] %1","EventItemLogging":"","ItemFmt:str":"\\C[4]Choice >\\C[0] %1","ItemNameFmt:str":"%1%2","NoItem:str":"Nothing"}
 *
 * @param Window:struct
 * @text Window Settings
 * @type struct<Window>
 * @desc Window settings for Scene_MessageLog.
 * @default {"MessageLogWindow":"","MessageLogMenu_BgType:num":"0","MessageLogMenu_RectJS:func":"\"const wx = 0;\\nconst wy = this.mainAreaTop();\\nconst ww = Graphics.boxWidth;\\nconst wh = this.mainAreaHeight();\\n\\nreturn new Rectangle(wx, wy, ww, wh);\"","Appearance":"","SpeakerNameX:num":"128","ColorLock":"","ColorLockChoice:eval":"false","ColorLockNumber:eval":"true","ColorLockItem:eval":"true","Scrolling":"","Slow":"","SlowScrollSpeed:num":"8","SlowSoundFreq:num":"8","Fast":"","FastScrollSpeed:num":"32","FastSoundFreq:num":"4"}
 *
 * @param BreakEnd1
 * @text --------------------------
 * @default ----------------------------------
 *
 * @param End Of
 * @default Plugin Parameters
 *
 * @param BreakEnd2
 * @text --------------------------
 * @default ----------------------------------
 *
 */
/* ----------------------------------------------------------------------------
 * General Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~General:
 *
 * @param EntryLimit:num
 * @text Entry Limit
 * @parent General
 * @type number
 * @min 1
 * @max 999
 * @desc How many message entries will be stored before the game
 * will start trimming them?
 * @default 50
 *
 * @param ShortcutKey:str
 * @text Shortcut Key
 * @parent General
 * @type combo
 * @option none
 * @option tab
 * @option shift
 * @option control
 * @option pageup
 * @option pagedown
 * @desc This is the key used for opening the Message Log scene.
 * Does not work in battle!
 * @default pageup
 *
 * @param ShowFaces:eval
 * @text Show Faces?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Show face graphics in the Message Log?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * MainMenu Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~MainMenu:
 *
 * @param Name:str
 * @text Command Name
 * @parent Options
 * @desc Name of the 'Message Log' option in the Main Menu.
 * @default Message Log
 *
 * @param ShowMainMenu:eval
 * @text Show in Main Menu?
 * @type boolean
 * @on Show
 * @off Hide
 * @desc Add the 'Message Log' option to the Main Menu by default?
 * @default true
 *
 * @param EnableMainMenu:eval
 * @text Enable in Main Menu?
 * @type boolean
 * @on Enable
 * @off Disable
 * @desc Enable the 'Message Log' option to the Main Menu by default?
 * @default true
 *
 */
/* ----------------------------------------------------------------------------
 * Background Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~BgSettings:
 *
 * @param SnapshotOpacity:num
 * @text Snapshop Opacity
 * @type number
 * @min 0
 * @max 255
 * @desc Snapshot opacity for the scene.
 * @default 192
 *
 * @param BgFilename1:str
 * @text Background 1
 * @type file
 * @dir img/titles1/
 * @require 1
 * @desc Filename used for the bottom background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 * @param BgFilename2:str
 * @text Background 2
 * @type file
 * @dir img/titles2/
 * @require 1
 * @desc Filename used for the upper background image.
 * Leave empty if you don't wish to use one.
 * @default 
 *
 */
/* ----------------------------------------------------------------------------
 * Vocabulary Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Vocab:
 * 
 * @param ExtMessageFunc
 *
 * @param ButtonName:str
 * @text Button Name
 * @parent ExtMessageFunc
 * @desc How is this option's text displayed in-game?
 * Requires VisuMZ_2_ExtMessageFunc!
 * @default LOG
 *
 * @param ButtonAssist
 * @text Button Assist Window
 *
 * @param SlowScroll:str
 * @text Slow Scroll
 * @parent ButtonAssist
 * @desc Text used for slow scrolling.
 * @default Scroll
 *
 * @param FastScroll:str
 * @text Fast Scroll
 * @parent ButtonAssist
 * @desc Text used for fast scrolling.
 * @default Fast Scroll
 *
 * @param ChoiceLogging
 * @text Choice Window Logging
 *
 * @param ChoiceFmt:str
 * @text Text Format
 * @parent ChoiceLogging
 * @desc Text format for logging the selected choice text.
 * %1 - Selected Choice Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ChoiceCancel:str
 * @text Cancel
 * @parent ChoiceLogging
 * @desc Text used when cancel branch is selected.
 * @default Cancel
 *
 * @param NumberLogging
 * @text Number Input Logging
 *
 * @param NumberFmt:str
 * @text Text Format
 * @parent NumberLogging
 * @desc Text format for logging the inputted number value.
 * %1 - Number Value
 * @default \C[4]Amount >\C[0] %1
 *
 * @param EventItemLogging
 * @text Event Item Logging
 *
 * @param ItemFmt:str
 * @text Text Format
 * @parent EventItemLogging
 * @desc Text format for logging the selected event Item.
 * %1 - Selected Event Item Text
 * @default \C[4]Choice >\C[0] %1
 *
 * @param ItemNameFmt:str
 * @text Name Format
 * @parent EventItemLogging
 * @desc Text format for how item names are displayed.
 * %1 - Item Icon, %2 - Item Name
 * @default %1%2
 *
 * @param NoItem:str
 * @text No Item
 * @parent EventItemLogging
 * @desc Text used when no item is selected.
 * @default Nothing
 *
 */
/* ----------------------------------------------------------------------------
 * Window Settings
 * ----------------------------------------------------------------------------
 */
/*~struct~Window:
 * 
 * @param MessageLogWindow
 * @text Message Log Window
 *
 * @param MessageLogMenu_BgType:num
 * @text Background Type
 * @parent MessageLogWindow
 * @type select
 * @option 0 - Window
 * @value 0
 * @option 1 - Dim
 * @value 1
 * @option 2 - Transparent
 * @value 2
 * @desc Select background type for this window.
 * @default 0
 *
 * @param MessageLogMenu_RectJS:func
 * @text JS: X, Y, W, H
 * @parent MessageLogWindow
 * @type note
 * @desc Code used to determine the dimensions for this window.
 * @default "const wx = 0;\nconst wy = this.mainAreaTop();\nconst ww = Graphics.boxWidth;\nconst wh = this.mainAreaHeight();\n\nreturn new Rectangle(wx, wy, ww, wh);"
 *
 * @param Appearance
 *
 * @param SpeakerNameX:num
 * @text Speaker Name X
 * @parent Appearance
 * @type number
 * @min 0
 * @desc What X coordinate do you want the speaker name to appear at?
 * @default 128
 *
 * @param ColorLock
 * @text Color Lock
 *
 * @param ColorLockChoice:eval
 * @text Choices
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged choices?
 * @default false
 *
 * @param ColorLockNumber:eval
 * @text Number Inputs
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged Number Inputs?
 * @default true
 *
 * @param ColorLockItem:eval
 * @text Event Item
 * @parent ColorLock
 * @type boolean
 * @on Color Lock
 * @off Don't Color Lock
 * @desc Color lock the logged selected Event Item?
 * @default true
 *
 * @param Scrolling
 *
 * @param Slow
 * @parent Scrolling
 *
 * @param SlowScrollSpeed:num
 * @text Scroll Speed
 * @parent Slow
 * @type number
 * @min 1
 * @desc What speed will Up/Down scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 8
 *
 * @param SlowSoundFreq:num
 * @text Sound Frequency
 * @parent Slow
 * @type number
 * @min 1
 * @desc How frequent will Up/Down scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 8
 *
 * @param Fast
 * @parent Scrolling
 *
 * @param FastScrollSpeed:num
 * @text Scroll Speed
 * @parent Fast
 * @type number
 * @min 1
 * @desc What speed will PageUp/PageDn scroll the window at?
 * Lower is slower. Higher is faster.
 * @default 32
 *
 * @param FastSoundFreq:num
 * @text Sound Frequency
 * @parent Fast
 * @type number
 * @min 1
 * @desc How frequent will PageUp/PageDn scrolling make sounds?
 * Lower is quicker. Higher is later.
 * @default 4
 *
 */
//=============================================================================

const _0xbc5f00=_0x4c8e;function _0x4c8e(_0x38214b,_0x8a2c2e){const _0x30fa56=_0x30fa();return _0x4c8e=function(_0x4c8ef2,_0x215f58){_0x4c8ef2=_0x4c8ef2-0xcf;let _0x1cdef9=_0x30fa56[_0x4c8ef2];return _0x1cdef9;},_0x4c8e(_0x38214b,_0x8a2c2e);}(function(_0x350702,_0x50f78a){const _0x46f9a5=_0x4c8e,_0x1366be=_0x350702();while(!![]){try{const _0x99d81b=-parseInt(_0x46f9a5(0x12c))/0x1+-parseInt(_0x46f9a5(0xe4))/0x2*(-parseInt(_0x46f9a5(0x1b3))/0x3)+-parseInt(_0x46f9a5(0x16d))/0x4*(-parseInt(_0x46f9a5(0x15c))/0x5)+parseInt(_0x46f9a5(0x193))/0x6*(parseInt(_0x46f9a5(0xe2))/0x7)+parseInt(_0x46f9a5(0x180))/0x8*(-parseInt(_0x46f9a5(0x129))/0x9)+parseInt(_0x46f9a5(0x1c8))/0xa*(-parseInt(_0x46f9a5(0x19a))/0xb)+parseInt(_0x46f9a5(0x183))/0xc*(parseInt(_0x46f9a5(0x18a))/0xd);if(_0x99d81b===_0x50f78a)break;else _0x1366be['push'](_0x1366be['shift']());}catch(_0x40a1ab){_0x1366be['push'](_0x1366be['shift']());}}}(_0x30fa,0x8cff2));var label=_0xbc5f00(0x1a7),tier=tier||0x0,dependencies=[],pluginData=$plugins[_0xbc5f00(0xd2)](function(_0x48f9f4){const _0xd478fc=_0xbc5f00;return _0x48f9f4[_0xd478fc(0x1b0)]&&_0x48f9f4['description'][_0xd478fc(0x1e9)]('['+label+']');})[0x0];VisuMZ[label][_0xbc5f00(0x1a8)]=VisuMZ[label][_0xbc5f00(0x1a8)]||{},VisuMZ[_0xbc5f00(0x1e4)]=function(_0x542ad4,_0x5dd495){const _0x54dd6d=_0xbc5f00;for(const _0x437933 in _0x5dd495){if(_0x437933[_0x54dd6d(0x1b8)](/(.*):(.*)/i)){const _0xce7ee9=String(RegExp['$1']),_0x45f42e=String(RegExp['$2'])[_0x54dd6d(0x1c7)]()[_0x54dd6d(0x11b)]();let _0x5f3275,_0x24d1e5,_0x5305cc;switch(_0x45f42e){case _0x54dd6d(0x10e):_0x5f3275=_0x5dd495[_0x437933]!==''?Number(_0x5dd495[_0x437933]):0x0;break;case _0x54dd6d(0x1db):_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5['map'](_0x1f2940=>Number(_0x1f2940));break;case'EVAL':_0x5f3275=_0x5dd495[_0x437933]!==''?eval(_0x5dd495[_0x437933]):null;break;case _0x54dd6d(0x1a4):_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5[_0x54dd6d(0x115)](_0x4ad6e4=>eval(_0x4ad6e4));break;case _0x54dd6d(0xdb):_0x5f3275=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):'';break;case'ARRAYJSON':_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5['map'](_0x379ec4=>JSON[_0x54dd6d(0x171)](_0x379ec4));break;case _0x54dd6d(0x18d):_0x5f3275=_0x5dd495[_0x437933]!==''?new Function(JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933])):new Function(_0x54dd6d(0x1c6));break;case _0x54dd6d(0xf1):_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5[_0x54dd6d(0x115)](_0x2545fd=>new Function(JSON[_0x54dd6d(0x171)](_0x2545fd)));break;case'STR':_0x5f3275=_0x5dd495[_0x437933]!==''?String(_0x5dd495[_0x437933]):'';break;case _0x54dd6d(0x104):_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5[_0x54dd6d(0x115)](_0x43a633=>String(_0x43a633));break;case _0x54dd6d(0x1c0):_0x5305cc=_0x5dd495[_0x437933]!==''?JSON[_0x54dd6d(0x171)](_0x5dd495[_0x437933]):{},_0x5f3275=VisuMZ[_0x54dd6d(0x1e4)]({},_0x5305cc);break;case _0x54dd6d(0x1a9):_0x24d1e5=_0x5dd495[_0x437933]!==''?JSON['parse'](_0x5dd495[_0x437933]):[],_0x5f3275=_0x24d1e5[_0x54dd6d(0x115)](_0xb33d0c=>VisuMZ['ConvertParams']({},JSON[_0x54dd6d(0x171)](_0xb33d0c)));break;default:continue;}_0x542ad4[_0xce7ee9]=_0x5f3275;}}return _0x542ad4;},(_0xb349e9=>{const _0x435dbe=_0xbc5f00,_0x18ee67=_0xb349e9[_0x435dbe(0x1aa)];for(const _0x4fb7e2 of dependencies){if(!Imported[_0x4fb7e2]){alert(_0x435dbe(0xd9)[_0x435dbe(0x1dc)](_0x18ee67,_0x4fb7e2)),SceneManager['exit']();break;}}const _0x3bc714=_0xb349e9[_0x435dbe(0x10f)];if(_0x3bc714[_0x435dbe(0x1b8)](/\[Version[ ](.*?)\]/i)){const _0x2b067f=Number(RegExp['$1']);_0x2b067f!==VisuMZ[label][_0x435dbe(0xf6)]&&(alert(_0x435dbe(0x1ab)[_0x435dbe(0x1dc)](_0x18ee67,_0x2b067f)),SceneManager[_0x435dbe(0x144)]());}if(_0x3bc714[_0x435dbe(0x1b8)](/\[Tier[ ](\d+)\]/i)){const _0xe382c0=Number(RegExp['$1']);_0xe382c0<tier?(alert(_0x435dbe(0x14e)[_0x435dbe(0x1dc)](_0x18ee67,_0xe382c0,tier)),SceneManager[_0x435dbe(0x144)]()):tier=Math[_0x435dbe(0x16a)](_0xe382c0,tier);}VisuMZ[_0x435dbe(0x1e4)](VisuMZ[label][_0x435dbe(0x1a8)],_0xb349e9['parameters']);})(pluginData),PluginManager[_0xbc5f00(0x1e8)](pluginData[_0xbc5f00(0x1aa)],'BypassMessageLogging',_0x3033df=>{const _0x3e4058=_0xbc5f00;VisuMZ[_0x3e4058(0x1e4)](_0x3033df,_0x3033df),$gameSystem['setBypassMessageLogging'](_0x3033df['Bypass']);}),PluginManager[_0xbc5f00(0x1e8)](pluginData[_0xbc5f00(0x1aa)],_0xbc5f00(0xe7),_0x17f954=>{const _0x3c0c7d=_0xbc5f00;VisuMZ[_0x3c0c7d(0x1e4)](_0x17f954,_0x17f954),$gameSystem[_0x3c0c7d(0xf8)](_0x17f954[_0x3c0c7d(0x138)]);}),PluginManager[_0xbc5f00(0x1e8)](pluginData[_0xbc5f00(0x1aa)],_0xbc5f00(0xef),_0x5d14a5=>{const _0x4054bf=_0xbc5f00;VisuMZ[_0x4054bf(0x1e4)](_0x5d14a5,_0x5d14a5),$gameSystem[_0x4054bf(0x164)](_0x5d14a5['Show']);}),TextManager['MessageLogMenuCommand']=VisuMZ['MessageLog'][_0xbc5f00(0x1a8)][_0xbc5f00(0x198)][_0xbc5f00(0xe9)],TextManager[_0xbc5f00(0x1c4)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)]['Vocab'][_0xbc5f00(0x1af)],TextManager[_0xbc5f00(0x116)]=VisuMZ['MessageLog'][_0xbc5f00(0x1a8)]['Vocab'][_0xbc5f00(0x179)],TextManager['MessageLogFastScroll']=VisuMZ[_0xbc5f00(0x1a7)]['Settings'][_0xbc5f00(0x1d2)][_0xbc5f00(0x191)],TextManager[_0xbc5f00(0x1d5)]=VisuMZ[_0xbc5f00(0x1a7)]['Settings'][_0xbc5f00(0x1d2)][_0xbc5f00(0x1ac)],TextManager[_0xbc5f00(0x18e)]=VisuMZ[_0xbc5f00(0x1a7)]['Settings'][_0xbc5f00(0x1d2)][_0xbc5f00(0x118)],TextManager[_0xbc5f00(0x15d)]=VisuMZ[_0xbc5f00(0x1a7)]['Settings'][_0xbc5f00(0x1d2)]['NumberFmt'],TextManager[_0xbc5f00(0xf7)]=VisuMZ['MessageLog'][_0xbc5f00(0x1a8)][_0xbc5f00(0x1d2)][_0xbc5f00(0x170)],TextManager[_0xbc5f00(0x148)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x1d2)][_0xbc5f00(0x157)],TextManager['MessageLogItemNothing']=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x1d2)]['NoItem'];TextManager[_0xbc5f00(0x12e)]&&(VisuMZ['MessageLog'][_0xbc5f00(0x1ad)]=TextManager[_0xbc5f00(0x12e)],TextManager[_0xbc5f00(0x12e)]=function(_0x42bbeb){const _0x5a509e=_0xbc5f00;if([_0x5a509e(0x107),_0x5a509e(0x143)][_0x5a509e(0x1e9)](_0x42bbeb))return TextManager[_0x5a509e(0x1c4)];return VisuMZ[_0x5a509e(0x1a7)][_0x5a509e(0x1ad)][_0x5a509e(0x197)](this,_0x42bbeb);});;SceneManager[_0xbc5f00(0x156)]=function(){const _0x306d71=_0xbc5f00;return this['_scene']&&this['_scene'][_0x306d71(0x1da)]===Scene_Map;},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x137)]=SceneManager[_0xbc5f00(0x17f)],SceneManager['push']=function(_0x48ad53){const _0x39d242=_0xbc5f00;_0x48ad53===Scene_MessageLog&&this[_0x39d242(0x112)](),VisuMZ[_0x39d242(0x1a7)][_0x39d242(0x137)][_0x39d242(0x197)](this,_0x48ad53);},SceneManager[_0xbc5f00(0x112)]=function(){const _0x19f4bc=$gameSystem['getLoggedMessages']();for(const _0x3c039b of _0x19f4bc){if(!_0x3c039b)continue;const _0x5b4ea4=_0x3c039b['faceName'];_0x5b4ea4!==''&&ImageManager['loadFace'](_0x5b4ea4);}},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x136)]=Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x14b)],Game_System['prototype']['initialize']=function(){const _0x5c1acd=_0xbc5f00;VisuMZ[_0x5c1acd(0x1a7)]['Game_System_initialize'][_0x5c1acd(0x197)](this),this[_0x5c1acd(0x16b)](),this[_0x5c1acd(0x100)]();},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x16b)]=function(){const _0x51dff0=_0xbc5f00;this[_0x51dff0(0x105)]={'shown':VisuMZ[_0x51dff0(0x1a7)][_0x51dff0(0x1a8)][_0x51dff0(0x198)][_0x51dff0(0xf3)],'enabled':VisuMZ['MessageLog']['Settings'][_0x51dff0(0x198)][_0x51dff0(0xf0)]},this[_0x51dff0(0x10b)]=![];},Game_System['prototype'][_0xbc5f00(0x188)]=function(){const _0x3d6f16=_0xbc5f00;if(this[_0x3d6f16(0x105)]===undefined)this[_0x3d6f16(0x16b)]();return this[_0x3d6f16(0x105)]['shown'];},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x164)]=function(_0x1547b1){const _0x222e85=_0xbc5f00;if(this[_0x222e85(0x105)]===undefined)this[_0x222e85(0x16b)]();this[_0x222e85(0x105)][_0x222e85(0x192)]=_0x1547b1;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x15b)]=function(){const _0x2851e8=_0xbc5f00;if(this[_0x2851e8(0x105)]===undefined)this[_0x2851e8(0x16b)]();if(this['getLoggedMessages']()[_0x2851e8(0xdc)]<=0x0)return![];return this[_0x2851e8(0x105)][_0x2851e8(0xf9)];},Game_System[_0xbc5f00(0x160)]['setMainMenuMessageLogEnabled']=function(_0x38f448){const _0x54a232=_0xbc5f00;if(this['_MessageLog_MainMenu']===undefined)this[_0x54a232(0x16b)]();this[_0x54a232(0x105)][_0x54a232(0xf9)]=_0x38f448;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x119)]=function(){const _0x20a711=_0xbc5f00;if(this[_0x20a711(0x10b)]===undefined)this['initMessageLogMainMenu']();return this[_0x20a711(0x10b)];},Game_System[_0xbc5f00(0x160)]['setBypassMessageLogging']=function(_0xce76c5){const _0x303d0a=_0xbc5f00;if(this[_0x303d0a(0x10b)]===undefined)this['initMessageLogMainMenu']();this['_MessageLog_Bypass']=_0xce76c5;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x100)]=function(){const _0x26af1b=_0xbc5f00;this['_loggedMessages']=[],this[_0x26af1b(0x11a)]();},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x13e)]=function(){const _0x567dcd=_0xbc5f00;return this[_0x567dcd(0xf2)]===undefined&&this[_0x567dcd(0x100)](),this[_0x567dcd(0xf2)];},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x11a)]=function(){const _0x1046c3=_0xbc5f00;this[_0x1046c3(0x1e5)]={'speaker':'','faceName':'','faceIndex':0x0,'messageBody':''};},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x1ca)]=function(){const _0x28abf8=_0xbc5f00,_0x451930=this[_0x28abf8(0x13e)](),_0xde9b01=this[_0x28abf8(0xfb)]();if(this['isBypassMessageLogging']())return;_0xde9b01[_0x28abf8(0x1b9)]=_0xde9b01[_0x28abf8(0x1b9)]||'';if(_0xde9b01[_0x28abf8(0x1b9)][_0x28abf8(0x1b8)](/<BYPASS MESSAGE LOG>/i))return;if(_0xde9b01['messageBody'][_0x28abf8(0x11b)]()['length']<=0x0)return;const _0x95f16e=_0x451930[_0x451930[_0x28abf8(0xdc)]-0x1];if(JSON[_0x28abf8(0x142)](_0xde9b01)===JSON['stringify'](_0x95f16e))return;_0x451930[_0x28abf8(0x17f)](_0xde9b01);while(_0x451930['length']>Window_MessageLog[_0x28abf8(0x145)]){_0x451930[_0x28abf8(0x10d)]();}},Game_System['prototype'][_0xbc5f00(0xfb)]=function(){const _0xe98620=_0xbc5f00;return this[_0xe98620(0x1e5)]===undefined&&this['createNewLoggedMessageEntry'](),this[_0xe98620(0x1e5)];},Game_System['prototype'][_0xbc5f00(0x13b)]=function(_0x582312){const _0x1316f6=_0xbc5f00,_0x4a43ad=this['getLatestMessageLogEntry']();this[_0x1316f6(0xed)]()&&(_0x582312=_0x1316f6(0x1e6)+_0x582312);_0x582312=this[_0x1316f6(0xd5)](_0x582312);Imported[_0x1316f6(0x1a1)]&&(_0x582312=this[_0x1316f6(0x1c5)](_0x582312,_0x4a43ad));if(_0x4a43ad[_0x1316f6(0x1b9)][_0x1316f6(0xdc)]>0x0)_0x4a43ad[_0x1316f6(0x1b9)]+='\x0a';_0x4a43ad[_0x1316f6(0x1b9)]+=_0x582312;},Game_System['prototype'][_0xbc5f00(0xd5)]=function(_0x3706e7){const _0x1967be=_0xbc5f00;return _0x3706e7=this[_0x1967be(0x103)](_0x3706e7),_0x3706e7=this['convertMessageLogTextReplacement'](_0x3706e7),_0x3706e7=this[_0x1967be(0x1ba)](_0x3706e7),_0x3706e7=this[_0x1967be(0x103)](_0x3706e7),_0x3706e7;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x103)]=function(_0x31e9ad){const _0x392050=_0xbc5f00;while(_0x31e9ad[_0x392050(0x1b8)](/\\V\[(\d+)\]/gi)){_0x31e9ad=_0x31e9ad[_0x392050(0x14d)](/\\V\[(\d+)\]/gi,(_0x574485,_0x485ea5)=>$gameVariables['value'](parseInt(_0x485ea5)));}return _0x31e9ad;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0xfd)]=function(_0x9cd083){const _0x2a9a3f=_0xbc5f00,_0x15f7f6=this['getLatestMessageLogEntry']();return _0x9cd083=_0x9cd083['replace'](/\\ItemQuantity\[(\d+)\]/gi,(_0x5da66e,_0x2cff8c)=>$gameParty[_0x2a9a3f(0x184)]($dataItems[Number(_0x2cff8c)])||0x0),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\WeaponQuantity\[(\d+)\]/gi,(_0x14e8d1,_0x3752d5)=>$gameParty['numItems']($dataWeapons[Number(_0x3752d5)])||0x0),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\ArmorQuantity\[(\d+)\]/gi,(_0xe5e78a,_0x181452)=>$gameParty[_0x2a9a3f(0x184)]($dataArmors[Number(_0x181452)])||0x0),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\ArmorQuantity\[(\d+)\]/gi,(_0x5cfd1b,_0x5d80c6)=>$gameParty[_0x2a9a3f(0x184)]($dataArmors[Number(_0x5d80c6)])||0x0),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\LastGainObjQuantity/gi,Window_Base['prototype'][_0x2a9a3f(0x1a3)]()),_0x9cd083=_0x9cd083['replace'](/\\LastGainObjName/gi,Window_Base[_0x2a9a3f(0x160)][_0x2a9a3f(0x134)](![])),_0x9cd083=_0x9cd083['replace'](/\\LastGainObj/gi,Window_Base['prototype'][_0x2a9a3f(0x134)](!![])),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\ActorFace\[(\d+)\]/gi,(_0x2cb8ca,_0x3cdb20)=>{const _0x291763=_0x2a9a3f,_0x4665ec=$gameActors[_0x291763(0x1d6)](Number(_0x3cdb20));return _0x4665ec&&(_0x15f7f6[_0x291763(0x11d)]=_0x4665ec[_0x291763(0x11d)](),_0x15f7f6['faceIndex']=_0x4665ec['faceIndex']()),'';}),_0x9cd083=_0x9cd083[_0x2a9a3f(0x14d)](/\\PartyFace\[(\d+)\]/gi,(_0xd5e0e9,_0x3f18b9)=>{const _0x3a90b0=_0x2a9a3f,_0x1ef866=$gameParty[_0x3a90b0(0x139)]()[Number(_0x3f18b9)-0x1];return _0x1ef866&&(_0x15f7f6[_0x3a90b0(0x11d)]=_0x1ef866[_0x3a90b0(0x11d)](),_0x15f7f6['faceIndex']=_0x1ef866[_0x3a90b0(0x174)]()),'';}),_0x9cd083;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x1ba)]=function(_0x639458){const _0x4aacf3=_0xbc5f00,_0x29c412=this[_0x4aacf3(0x14a)]();for(const _0x49545d of _0x29c412){_0x639458=_0x639458[_0x4aacf3(0x14d)](_0x49545d,'');}return _0x639458;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x14a)]=function(){const _0x2d5d51=_0xbc5f00;let _0x5074b4=[];return _0x5074b4[_0x2d5d51(0x17f)](/\\$/gi,/\\\./gi,/\\\|/gi,/\\\!/gi),_0x5074b4['push'](/\\>/gi,/\\</gi,/\\\^/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:Picture|CenterPicture)<(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\COMMONEVENT\[(\d+)\]>/gi,/\\WAIT\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:AUTO|AUTOSIZE|AUTO SIZE)>/gi,/<(?:AUTOWIDTH|AUTO WIDTH)>/gi,/<(?:AUTOHEIGHT|AUTO HEIGHT)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:AUTOACTOR|AUTO ACTOR):[ ](.*?)>/gi,/<(?:AUTOPARTY|AUTO PARTY):[ ](.*?)>/gi,/<(?:AUTOENEMY|AUTO ENEMY):[ ](.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:AUTOPLAYER|AUTO PLAYER)>/gi,/<(?:AUTOEVENT|AUTO EVENT):[ ](.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<SHOW>/gi,/<SHOW[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<SHOW ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<HIDE>/gi,/<HIDE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<HIDE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<ENABLE>/gi,/<ENABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<ENABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<DISABLE>/gi,/<DISABLE[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ALL[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi,/<DISABLE ANY[ ](?:SW|SWITCH|SWITCHES):[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\NormalBG/gi,/\\DimBG/gi,/\\TransparentBG/gi),_0x5074b4[_0x2d5d51(0x17f)](/<POSITION:[ ]*(.*?)>/gi,/<COORDINATES:[ ]*(.*?)>/gi,/<DIMENSIONS:[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:WindowMoveTo|WindowMoveBy):[ ]*(.*?)/gi,/\\WindowReset/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:TroopMember|TroopNameMember)\[(\d+)\]/gi),_0x5074b4['push'](/\\ChangeFace<(.*?)>/gi,/\\FaceIndex\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:BGCOLOR|BG COLOR):[ ](.*?)>/gi),_0x5074b4['push'](/<OFFSET:[ ]*(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:HELP|HELP DESCRIPTION|DESCRIPTION)>\s*([\s\S]*)\s*<\/(?:HELP|HELP DESCRIPTION|DESCRIPTION)>/i),_0x5074b4[_0x2d5d51(0x17f)](/<ENABLE IF CAN CREATE CHARACTER>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<ENABLE IF CAN DISMISS CHARACTERS>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<ENABLE IF CAN RETRAIN CHARACTERS>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<ENABLE IF HAVE CREATED CHARACTERS>/gi),_0x5074b4['push'](/<HIDE (?:BUTTON CONSOLE|CONSOLE|BUTTONS)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<HIDE CHOICE WINDOW>/gi,/<BIND (?:PICTURE|PICTURES):[ ](\d+)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/<(?:CHOICE|SELECT) (?:COMMON EVENT|EVENT|COMMONEVENT):[ ](\d+)>/gi),_0x5074b4['push'](/\\(?:LSON|LSOFF|LETTER SOUND ON|LETTERSOUNDON|LETTER SOUND OFF|LETTERSOUNDOFF)/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDNAME|LSN)<(.*?)>/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDINTERVAL|LSI)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDVOLUME|LSV)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDPITCH|LSPI)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDPAN|LSPA)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDVOLUMEVARIANCE|LETTERSOUNDVOLUMEVAR|LSVV)\[(\d+)\]/gi),_0x5074b4['push'](/\\(?:LETTERSOUNDPITCHVARIANCE|LETTERSOUNDPITCHVAR|LSPIV)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/\\(?:LETTERSOUNDPANVARIANCE|LETTERSOUNDPANVAR|LSPAV)\[(\d+)\]/gi),_0x5074b4[_0x2d5d51(0x17f)](/<CONTINUE>/gi),_0x5074b4;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x1c5)]=function(_0x501cb5,_0x291c6d){const _0x31673f=_0xbc5f00,_0x3375c9=VisuMZ['VoiceActControl'][_0x31673f(0xfa)];return _0x501cb5=_0x501cb5[_0x31673f(0x14d)](_0x3375c9[_0x31673f(0x1a0)],(_0x2997a6,_0x332865)=>{const _0x2366b0=_0x31673f;_0x332865=_0x332865[_0x2366b0(0x14d)](/\x1bWrapBreak\[0\]/gi,'\x20');const _0x4a0401=_0x332865[_0x2366b0(0x124)](',')[_0x2366b0(0x115)](_0x171b38=>_0x171b38[_0x2366b0(0x11b)]()),_0x51394f={'name':String(_0x4a0401[0x0]??''),'volume':Number(_0x4a0401[0x1]??0x64)['clamp'](0x0,0x64),'pitch':Number(_0x4a0401[0x2]??0x64)['clamp'](0x0,0x64),'pan':Number(_0x4a0401[0x3]??0x0)[_0x2366b0(0x185)](-0x64,0x64)};return _0x291c6d[_0x2366b0(0x178)]=_0x51394f,'';}),_0x501cb5;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x114)]=function(_0x49405b){const _0x48ffa3=_0xbc5f00,_0x2b36d0=this['getLatestMessageLogEntry']();_0x49405b=this[_0x48ffa3(0x154)](_0x49405b),_0x49405b=this[_0x48ffa3(0xd5)](_0x49405b),_0x2b36d0['speaker']=_0x49405b||'';},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0x154)]=function(_0x25bae8){const _0x1f88b7=_0xbc5f00;if(!_0x25bae8)return'';const _0x4dbf6d=[/<LEFT>/gi,/<CENTER>/gi,/<RIGHT>/gi,/<\/LEFT>/gi,/<\/CENTER>/gi,/<\/RIGHT>/gi,/<POSITION:[ ](\d+)>/gi];for(const _0x3e9f42 of _0x4dbf6d){_0x25bae8=_0x25bae8[_0x1f88b7(0x14d)](_0x3e9f42,'');}return _0x25bae8;},Game_System[_0xbc5f00(0x160)][_0xbc5f00(0xda)]=function(_0x3ea991,_0x320e5b){const _0x45783e=_0xbc5f00,_0x2851f5=this[_0x45783e(0xfb)]();_0x2851f5[_0x45783e(0x11d)]=_0x3ea991||'',_0x2851f5[_0x45783e(0x174)]=_0x320e5b||0x0;},VisuMZ['MessageLog'][_0xbc5f00(0x1b2)]=Game_Message['prototype'][_0xbc5f00(0xdf)],Game_Message[_0xbc5f00(0x160)][_0xbc5f00(0xdf)]=function(_0x2bd465){const _0x82c56c=_0xbc5f00;VisuMZ[_0x82c56c(0x1a7)][_0x82c56c(0x1b2)][_0x82c56c(0x197)](this,_0x2bd465),$gameSystem[_0x82c56c(0x13b)](_0x2bd465);},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x182)]=Game_Message[_0xbc5f00(0x160)][_0xbc5f00(0xe3)],Game_Message[_0xbc5f00(0x160)][_0xbc5f00(0xe3)]=function(_0x340aec){const _0x46eba6=_0xbc5f00;VisuMZ[_0x46eba6(0x1a7)]['Game_Message_setSpeakerName'][_0x46eba6(0x197)](this,_0x340aec),$gameSystem['setSpeakerToMessageLog'](_0x340aec);},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0xe5)]=Game_Message[_0xbc5f00(0x160)][_0xbc5f00(0x120)],Game_Message[_0xbc5f00(0x160)][_0xbc5f00(0x120)]=function(_0x15f927,_0x490939){const _0x36f3ec=_0xbc5f00;VisuMZ[_0x36f3ec(0x1a7)][_0x36f3ec(0xe5)][_0x36f3ec(0x197)](this,_0x15f927,_0x490939),$gameSystem[_0x36f3ec(0xda)](_0x15f927,_0x490939);},VisuMZ[_0xbc5f00(0x1a7)]['Game_Interpreter_command101']=Game_Interpreter[_0xbc5f00(0x160)][_0xbc5f00(0x190)],Game_Interpreter[_0xbc5f00(0x160)][_0xbc5f00(0x190)]=function(_0x4642c0){const _0x3eba60=_0xbc5f00;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x3eba60(0x102)])&&$gameSystem[_0x3eba60(0x11a)]();let _0x35a107=VisuMZ[_0x3eba60(0x1a7)]['Game_Interpreter_command101'][_0x3eba60(0x197)](this,_0x4642c0);return(SceneManager[_0x3eba60(0x156)]()||!Window_MessageLog[_0x3eba60(0x102)])&&$gameSystem[_0x3eba60(0x1ca)](),_0x35a107;},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0xd7)]=Scene_Menu[_0xbc5f00(0x160)][_0xbc5f00(0x19d)],Scene_Menu[_0xbc5f00(0x160)][_0xbc5f00(0x19d)]=function(){const _0x37805d=_0xbc5f00;VisuMZ[_0x37805d(0x1a7)]['Scene_Menu_createCommandWindow'][_0x37805d(0x197)](this);const _0x700ce7=this[_0x37805d(0xd8)];_0x700ce7[_0x37805d(0x121)](_0x37805d(0x146),this[_0x37805d(0x1ce)][_0x37805d(0x181)](this));},Scene_Menu['prototype'][_0xbc5f00(0x1ce)]=function(){const _0x940520=_0xbc5f00;SceneManager[_0x940520(0x17f)](Scene_MessageLog);};function Scene_MessageLog(){this['initialize'](...arguments);}Scene_MessageLog[_0xbc5f00(0x160)]=Object['create'](Scene_MenuBase[_0xbc5f00(0x160)]),Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x1da)]=Scene_MessageLog,Scene_MessageLog['prototype'][_0xbc5f00(0x14b)]=function(){const _0x2dc6f3=_0xbc5f00;Scene_MenuBase['prototype']['initialize'][_0x2dc6f3(0x197)](this);},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x1e1)]=function(){return 0x0;},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x11c)]=function(){const _0x3fad23=_0xbc5f00;Scene_MenuBase['prototype'][_0x3fad23(0x11c)][_0x3fad23(0x197)](this),this['createMessageLogWindow']();},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x1d7)]=function(){const _0x4ec583=_0xbc5f00,_0x168a10=this[_0x4ec583(0xd6)]();this['_messageLogWindow']=new Window_MessageLog(_0x168a10),this[_0x4ec583(0x147)](this[_0x4ec583(0xec)]),this[_0x4ec583(0xec)]['setHandler']('cancel',this[_0x4ec583(0x17b)][_0x4ec583(0x181)](this)),this[_0x4ec583(0xec)]['setBackgroundType'](VisuMZ[_0x4ec583(0x1a7)][_0x4ec583(0x1a8)][_0x4ec583(0x109)][_0x4ec583(0x17e)]);},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0xd6)]=function(){const _0x1aa00a=_0xbc5f00,_0x4215ef=VisuMZ[_0x1aa00a(0x1a7)][_0x1aa00a(0x1a8)][_0x1aa00a(0x109)]['MessageLogMenu_RectJS'];if(_0x4215ef)return _0x4215ef[_0x1aa00a(0x197)](this);const _0x429e6c=0x0,_0x18096d=this[_0x1aa00a(0x12a)](),_0x1f9774=Graphics[_0x1aa00a(0x149)],_0x3c2061=this[_0x1aa00a(0x17d)]();return new Rectangle(_0x429e6c,_0x18096d,_0x1f9774,_0x3c2061);},Scene_MessageLog['prototype']['createBackground']=function(){const _0x31f3d5=_0xbc5f00;Scene_MenuBase['prototype'][_0x31f3d5(0x166)][_0x31f3d5(0x197)](this),this[_0x31f3d5(0x153)](this[_0x31f3d5(0xf5)]()),this[_0x31f3d5(0x16c)]();},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0xf5)]=function(){const _0x422c52=_0xbc5f00;return VisuMZ[_0x422c52(0x1a7)][_0x422c52(0x1a8)][_0x422c52(0x177)]['SnapshotOpacity'];},Scene_MessageLog[_0xbc5f00(0x160)]['createCustomBackgroundImages']=function(){const _0x52c12a=_0xbc5f00,_0x197d35=VisuMZ[_0x52c12a(0x1a7)][_0x52c12a(0x1a8)][_0x52c12a(0x177)];_0x197d35&&(_0x197d35[_0x52c12a(0x194)]!==''||_0x197d35[_0x52c12a(0x173)]!=='')&&(this[_0x52c12a(0x1d4)]=new Sprite(ImageManager[_0x52c12a(0x15f)](_0x197d35[_0x52c12a(0x194)])),this[_0x52c12a(0xdd)]=new Sprite(ImageManager[_0x52c12a(0x1be)](_0x197d35[_0x52c12a(0x173)])),this[_0x52c12a(0x1de)](this[_0x52c12a(0x1d4)]),this[_0x52c12a(0x1de)](this[_0x52c12a(0xdd)]),this[_0x52c12a(0x1d4)]['bitmap'][_0x52c12a(0x172)](this[_0x52c12a(0x1e2)][_0x52c12a(0x181)](this,this[_0x52c12a(0x1d4)])),this[_0x52c12a(0xdd)][_0x52c12a(0x186)][_0x52c12a(0x172)](this[_0x52c12a(0x1e2)][_0x52c12a(0x181)](this,this[_0x52c12a(0xdd)])));},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x1e2)]=function(_0x108088){const _0x4ab3ee=_0xbc5f00;this[_0x4ab3ee(0x1dd)](_0x108088),this[_0x4ab3ee(0xd4)](_0x108088);},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x150)]=function(){const _0x271efb=_0xbc5f00;return TextManager['getInputMultiButtonStrings'](_0x271efb(0x101),'pagedown');},Scene_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x12d)]=function(){const _0x11de7c=_0xbc5f00;return TextManager[_0x11de7c(0x1e7)]('up',_0x11de7c(0x189));},Scene_MessageLog['prototype'][_0xbc5f00(0x128)]=function(){return'';},Scene_MessageLog['prototype']['buttonAssistText1']=function(){const _0x2cff21=_0xbc5f00;return TextManager[_0x2cff21(0x1cb)];},Scene_MessageLog['prototype'][_0xbc5f00(0xe1)]=function(){const _0x35cdf0=_0xbc5f00;return TextManager[_0x35cdf0(0x116)];},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x169)]=Window_MenuCommand['prototype'][_0xbc5f00(0x1d1)],Window_MenuCommand[_0xbc5f00(0x160)][_0xbc5f00(0x1d1)]=function(){const _0x41d8f7=_0xbc5f00;VisuMZ[_0x41d8f7(0x1a7)][_0x41d8f7(0x169)][_0x41d8f7(0x197)](this),this['addMessageLogCommand']();},Window_MenuCommand[_0xbc5f00(0x160)][_0xbc5f00(0x1a2)]=function(){const _0x378858=_0xbc5f00;if(!this['addMessageLogCommandAutomatically']())return;if(!this['isMessageLogCommandVisible']())return;const _0xa32a85=TextManager[_0x378858(0x187)],_0xf50dc1=this[_0x378858(0x1a5)]();this['addCommand'](_0xa32a85,_0x378858(0x146),_0xf50dc1);},Window_MenuCommand[_0xbc5f00(0x160)][_0xbc5f00(0x10c)]=function(){return Imported['VisuMZ_1_MainMenuCore']?![]:!![];},Window_MenuCommand[_0xbc5f00(0x160)][_0xbc5f00(0x161)]=function(){const _0x2ace6f=_0xbc5f00;return $gameSystem[_0x2ace6f(0x188)]();},Window_MenuCommand[_0xbc5f00(0x160)][_0xbc5f00(0x1a5)]=function(){const _0xc547fd=_0xbc5f00;return $gameSystem[_0xc547fd(0x15b)]();},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0xe8)]=Window_ChoiceList[_0xbc5f00(0x160)][_0xbc5f00(0xff)],Window_ChoiceList[_0xbc5f00(0x160)][_0xbc5f00(0xff)]=function(){const _0x569037=_0xbc5f00;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x569037(0x102)])&&this['addMessageLogEntry'](!![]),VisuMZ[_0x569037(0x1a7)][_0x569037(0xe8)][_0x569037(0x197)](this);},VisuMZ[_0xbc5f00(0x1a7)]['Window_ChoiceList_callCancelHandler']=Window_ChoiceList[_0xbc5f00(0x160)][_0xbc5f00(0x196)],Window_ChoiceList[_0xbc5f00(0x160)][_0xbc5f00(0x196)]=function(){const _0x30a67c=_0xbc5f00;(SceneManager[_0x30a67c(0x156)]()||!Window_MessageLog[_0x30a67c(0x102)])&&this['addMessageLogEntry'](![]),VisuMZ['MessageLog']['Window_ChoiceList_callCancelHandler'][_0x30a67c(0x197)](this);},Window_ChoiceList[_0xbc5f00(0x160)][_0xbc5f00(0x1d8)]=function(_0x2fc4a9){const _0x3eef7a=_0xbc5f00;$gameSystem[_0x3eef7a(0x11a)]();const _0x42ab81=TextManager[_0x3eef7a(0x1d5)];let _0xb9028a='';if(_0x2fc4a9){let _0x54066d=this[_0x3eef7a(0x140)](),_0x47b6d6=$gameMessage[_0x3eef7a(0x1bc)]()[_0x54066d];Window_MessageLog[_0x3eef7a(0x15a)]&&(_0x47b6d6=_0x3eef7a(0xfe)[_0x3eef7a(0x1dc)](_0x47b6d6)),_0xb9028a=_0x42ab81[_0x3eef7a(0x1dc)](_0x47b6d6);}else{if(!_0x2fc4a9&&!this[_0x3eef7a(0x17c)]()){let _0x2f6b84=$gameMessage[_0x3eef7a(0x1bb)](),_0x6e928=$gameMessage[_0x3eef7a(0x1bc)]()[_0x2f6b84];Window_MessageLog['COLOR_LOCK_CHOICE']&&(_0x6e928='<ColorLock>%1</ColorLock>'['format'](_0x6e928)),_0xb9028a=_0x42ab81[_0x3eef7a(0x1dc)](_0x6e928);}else _0xb9028a=_0x42ab81[_0x3eef7a(0x1dc)](TextManager[_0x3eef7a(0x18e)]);}$gameSystem[_0x3eef7a(0x13b)](_0xb9028a),$gameSystem['addNewLoggedMessageEntry']();},VisuMZ[_0xbc5f00(0x1a7)]['Window_NumberInput_processOk']=Window_NumberInput[_0xbc5f00(0x160)][_0xbc5f00(0xfc)],Window_NumberInput[_0xbc5f00(0x160)][_0xbc5f00(0xfc)]=function(){const _0x480c7d=_0xbc5f00;(SceneManager['isSceneMap']()||!Window_MessageLog[_0x480c7d(0x102)])&&this[_0x480c7d(0x1d8)](),VisuMZ[_0x480c7d(0x1a7)]['Window_NumberInput_processOk'][_0x480c7d(0x197)](this);},Window_NumberInput[_0xbc5f00(0x160)][_0xbc5f00(0x1d8)]=function(){const _0x344326=_0xbc5f00;$gameSystem[_0x344326(0x11a)]();const _0x1c06d5=TextManager[_0x344326(0x15d)];let _0x2de4b9=this[_0x344326(0x110)];Window_MessageLog[_0x344326(0x1cc)]&&(_0x2de4b9='<ColorLock>%1</ColorLock>'[_0x344326(0x1dc)](_0x2de4b9));let _0x54fbfe=_0x1c06d5[_0x344326(0x1dc)](_0x2de4b9);$gameSystem[_0x344326(0x13b)](_0x54fbfe),$gameSystem['addNewLoggedMessageEntry']();},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1bd)]=Window_EventItem[_0xbc5f00(0x160)]['onOk'],Window_EventItem[_0xbc5f00(0x160)][_0xbc5f00(0x10a)]=function(){const _0x1db95b=_0xbc5f00;(SceneManager[_0x1db95b(0x156)]()||!Window_MessageLog['SCENE_MAP_ONLY'])&&this['addMessageLogEntry'](this[_0x1db95b(0xcf)]()),VisuMZ['MessageLog'][_0x1db95b(0x1bd)][_0x1db95b(0x197)](this);},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1e0)]=Window_EventItem['prototype'][_0xbc5f00(0x151)],Window_EventItem['prototype'][_0xbc5f00(0x151)]=function(){const _0x16b564=_0xbc5f00;(SceneManager[_0x16b564(0x156)]()||!Window_MessageLog[_0x16b564(0x102)])&&this[_0x16b564(0x1d8)](![]),VisuMZ[_0x16b564(0x1a7)][_0x16b564(0x1e0)][_0x16b564(0x197)](this);},Window_EventItem['prototype'][_0xbc5f00(0x1d8)]=function(_0x354d5e){const _0x32f3e6=_0xbc5f00;$gameSystem['createNewLoggedMessageEntry']();const _0x164349=TextManager['MessageLogEventItemFmt'];let _0x16aad0='';if(_0x354d5e){let _0x13c26b=TextManager[_0x32f3e6(0x148)],_0x306469=_0x13c26b[_0x32f3e6(0x1dc)]('\x5cI[%1]'[_0x32f3e6(0x1dc)](_0x354d5e[_0x32f3e6(0x1bf)]),_0x354d5e[_0x32f3e6(0x1aa)]);Window_MessageLog['COLOR_LOCK_ITEM']&&(_0x306469=_0x32f3e6(0xfe)[_0x32f3e6(0x1dc)](_0x306469)),_0x16aad0=_0x164349['format'](_0x306469);}else _0x16aad0=_0x164349['format'](TextManager[_0x32f3e6(0x162)]);$gameSystem['addTextToMessageLog'](_0x16aad0),$gameSystem['addNewLoggedMessageEntry']();},VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x11e)]=Window_Base[_0xbc5f00(0x160)]['preConvertEscapeCharacters'],Window_Base['prototype'][_0xbc5f00(0x141)]=function(_0x563d1c){return _0x563d1c=VisuMZ['MessageLog']['Window_Base_preConvertEscapeCharacters']['call'](this,_0x563d1c),_0x563d1c=_0x563d1c['replace'](/<BYPASS MESSAGE LOG>/i,''),_0x563d1c;},VisuMZ[_0xbc5f00(0x1a7)]['Window_Message_isTriggered']=Window_Message[_0xbc5f00(0x160)]['isTriggered'],Window_Message['prototype']['isTriggered']=function(){const _0x6e9e90=_0xbc5f00;let _0x237d4d=VisuMZ[_0x6e9e90(0x1a7)][_0x6e9e90(0x159)][_0x6e9e90(0x197)](this);return this[_0x6e9e90(0xeb)]()&&Input[_0x6e9e90(0x1ae)](Window_MessageLog[_0x6e9e90(0x18c)])?(this[_0x6e9e90(0x165)](),![]):_0x237d4d;},Window_Message[_0xbc5f00(0x160)][_0xbc5f00(0xeb)]=function(){return SceneManager['isSceneMap']()&&$gameSystem['isMainMenuMessageLogEnabled']();},Window_Message[_0xbc5f00(0x160)][_0xbc5f00(0x165)]=function(){const _0xba7afb=_0xbc5f00;this['playOkSound'](),SceneManager[_0xba7afb(0x17f)](Scene_MessageLog);};function Window_MessageLog(){const _0x5f04fe=_0xbc5f00;this[_0x5f04fe(0x14b)](...arguments);}Window_MessageLog[_0xbc5f00(0x160)]=Object['create'](Window_Selectable[_0xbc5f00(0x160)]),Window_MessageLog[_0xbc5f00(0x160)]['constructor']=Window_MessageLog,Window_MessageLog[_0xbc5f00(0x102)]=!![],Window_MessageLog[_0xbc5f00(0x145)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x13d)]['EntryLimit'],Window_MessageLog['SHORTCUT_KEY']=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x13d)][_0xbc5f00(0xf4)],Window_MessageLog[_0xbc5f00(0x163)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)]['General'][_0xbc5f00(0x11f)]??!![],Window_MessageLog[_0xbc5f00(0x106)]=0x4,Window_MessageLog[_0xbc5f00(0x14f)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)][_0xbc5f00(0xd0)],Window_MessageLog[_0xbc5f00(0x15a)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)]['ColorLockChoice'],Window_MessageLog['COLOR_LOCK_NUMBER']=VisuMZ['MessageLog'][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)]['ColorLockNumber'],Window_MessageLog[_0xbc5f00(0xde)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)]['Window'][_0xbc5f00(0x117)],Window_MessageLog[_0xbc5f00(0x18f)]=VisuMZ['MessageLog']['Settings'][_0xbc5f00(0x109)][_0xbc5f00(0x19c)],Window_MessageLog['FAST_SCROLL_SPEED']=VisuMZ['MessageLog'][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)][_0xbc5f00(0x1c2)],Window_MessageLog[_0xbc5f00(0x1cf)]=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)][_0xbc5f00(0x1b5)],Window_MessageLog['FAST_SOUND_FREQUENCY']=VisuMZ[_0xbc5f00(0x1a7)][_0xbc5f00(0x1a8)][_0xbc5f00(0x109)][_0xbc5f00(0x1d0)],Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x14b)]=function(_0x6b3272){const _0xb89dc3=_0xbc5f00;this[_0xb89dc3(0x111)]=Input[_0xb89dc3(0x1d3)](Window_MessageLog[_0xb89dc3(0x18c)]),Window_Selectable['prototype'][_0xb89dc3(0x14b)][_0xb89dc3(0x197)](this,_0x6b3272),this[_0xb89dc3(0x123)]=0x0,this[_0xb89dc3(0x16f)](),this[_0xb89dc3(0x1c3)]();},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x108)]=function(){return!![];},Window_MessageLog['prototype'][_0xbc5f00(0x16f)]=function(){const _0x5816e5=_0xbc5f00;this[_0x5816e5(0x13a)](),this[_0x5816e5(0x12b)](),this[_0x5816e5(0xe0)](),this[_0x5816e5(0x19b)]();},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x13a)]=function(){const _0x3ae756=_0xbc5f00;if(!Imported[_0x3ae756(0x1a1)])return;this[_0x3ae756(0x1eb)]=this[_0x3ae756(0x1eb)]||[];const _0x5dec83=[];for(const _0x52af74 of this[_0x3ae756(0x1eb)]){this[_0x3ae756(0x152)]['remove'](_0x52af74),this['_clientArea'][_0x3ae756(0x1b1)](_0x52af74),_0x5dec83['push'](_0x52af74);}for(const _0x4ef26e of _0x5dec83){this[_0x3ae756(0x1eb)][_0x3ae756(0x122)](_0x4ef26e);}},Window_MessageLog[_0xbc5f00(0x160)]['calculateTextHeight']=function(){const _0x36baea=_0xbc5f00,_0x4dd48e=this[_0x36baea(0x1d9)](),_0x33dd49=$gameSystem[_0x36baea(0x13e)]();this[_0x36baea(0x123)]=_0x4dd48e;for(const _0x4f26ce of _0x33dd49){if(!_0x4f26ce)continue;if(_0x4f26ce[_0x36baea(0x175)]!=='')this[_0x36baea(0x123)]+=this['textSizeEx'](_0x4f26ce[_0x36baea(0x175)])[_0x36baea(0x130)];let _0x3ed5fa=_0x4f26ce['faceName']!==''&&Window_MessageLog[_0x36baea(0x163)]?ImageManager[_0x36baea(0x15e)]:0x0,_0x315964=this['textSizeEx'](_0x4f26ce[_0x36baea(0x1b9)])[_0x36baea(0x130)];this['_allTextHeight']+=Math[_0x36baea(0x16a)](_0x3ed5fa,_0x315964),this['_allTextHeight']+=_0x4dd48e;}},Window_MessageLog['prototype']['contentsHeight']=function(){const _0x10caa4=_0xbc5f00;return Math[_0x10caa4(0x16a)](this[_0x10caa4(0x123)],0x1);},Window_MessageLog['prototype'][_0xbc5f00(0x19b)]=function(){const _0x14526f=_0xbc5f00;this['_lineY']=0x0,this['drawHorzLine']();const _0x4a9b8e=$gameSystem['getLoggedMessages']();for(const _0x5c226e of _0x4a9b8e){if(!_0x5c226e)continue;this['resetFontSettings'](),this[_0x14526f(0x19f)](_0x5c226e),this[_0x14526f(0x19e)]();}this[_0x14526f(0x125)]();},Window_MessageLog['prototype']['drawHorzLine']=function(){const _0x3434e6=_0xbc5f00,_0x3a0d88=new Rectangle(0x4,this['_lineY'],this[_0x3434e6(0xd3)]-0x8,this[_0x3434e6(0x1d9)]());this[_0x3434e6(0x1b4)]();const _0x401ba8=Window_MessageLog['HORZ_LINE_THICKNESS'],_0x35998b=_0x3a0d88['y']+(_0x3a0d88[_0x3434e6(0x130)]-_0x401ba8)/0x2;this[_0x3434e6(0x1a6)](_0x3a0d88['x'],_0x35998b,_0x3a0d88['width'],_0x401ba8),this[_0x3434e6(0x135)]+=this['lineHeight']();},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x155)]=function(_0x1a357c){const _0x44ba42=_0xbc5f00;let _0x1914b0=this[_0x44ba42(0xd3)]-(ImageManager[_0x44ba42(0x168)]+0x18)*0x2;Graphics[_0x44ba42(0x149)]<=0x330&&(_0x1914b0=this[_0x44ba42(0xd3)]-0x8);this[_0x44ba42(0x1b4)](),this['resetWordWrap']();const _0x5979fa=this[_0x44ba42(0x131)](_0x1a357c,0x0,0x0,_0x1914b0);return _0x5979fa[_0x44ba42(0x1b7)]=![],this[_0x44ba42(0x12f)](_0x5979fa),this[_0x44ba42(0x19e)](),{'width':_0x5979fa[_0x44ba42(0x13c)],'height':_0x5979fa[_0x44ba42(0x1b6)]};},Window_MessageLog['prototype'][_0xbc5f00(0x19f)]=function(_0x2a31f9){const _0x6dbee1=_0xbc5f00;let _0x3b515e=0x4,_0x2a0207=ImageManager[_0x6dbee1(0x168)]+0x14,_0xa73d80=this[_0x6dbee1(0xd3)]-(_0x2a0207+0x4)*0x2;_0x2a31f9[_0x6dbee1(0x175)]!==''&&(this[_0x6dbee1(0xea)](),this[_0x6dbee1(0x1df)](_0x2a31f9['speaker'],Window_MessageLog['SPEAKER_NAME_X'],this[_0x6dbee1(0x135)],_0xa73d80),this[_0x6dbee1(0x135)]+=this[_0x6dbee1(0x155)](_0x2a31f9[_0x6dbee1(0x175)])[_0x6dbee1(0x130)],this[_0x6dbee1(0x16e)]());this[_0x6dbee1(0x1b4)](),this[_0x6dbee1(0x19e)]();if(Window_MessageLog['SHOW_FACES']&&_0x2a31f9[_0x6dbee1(0x11d)]){let _0x431197=_0x3b515e,_0x514eba=this[_0x6dbee1(0x135)],_0x115b3d=ImageManager[_0x6dbee1(0x168)],_0xec8936=ImageManager['faceHeight'];this['drawFace'](_0x2a31f9[_0x6dbee1(0x11d)],_0x2a31f9['faceIndex'],_0x431197,_0x514eba,_0x115b3d,_0xec8936),Graphics[_0x6dbee1(0x149)]<=0x330&&(_0xa73d80=this[_0x6dbee1(0xd3)]-(_0x2a0207+0x4));}else Graphics[_0x6dbee1(0x149)]<=0x330&&(_0x2a0207=0x4,_0xa73d80=this[_0x6dbee1(0xd3)]-0x8,Imported[_0x6dbee1(0x1a1)]&&(_0x2a31f9[_0x6dbee1(0x178)]&&(_0x2a0207+=ImageManager['iconWidth']+0x4,_0xa73d80-=ImageManager['iconWidth']+0x4)));this[_0x6dbee1(0x1df)](_0x2a31f9[_0x6dbee1(0x1b9)],_0x2a0207,this['_lineY'],_0xa73d80);let _0x14cc08=this['textSizeEx'](_0x2a31f9[_0x6dbee1(0x1b9)])[_0x6dbee1(0x130)],_0x1d0221=_0x2a31f9[_0x6dbee1(0x11d)]!==''&&Window_MessageLog[_0x6dbee1(0x163)]?ImageManager['faceHeight']:0x0;Imported[_0x6dbee1(0x1a1)]&&this['addReplayVoiceSprite'](_0x2a31f9,_0x3b515e,this[_0x6dbee1(0x135)]),this[_0x6dbee1(0x135)]+=Math[_0x6dbee1(0x16a)](_0x1d0221,_0x14cc08),this['resetFontSettings'](),this[_0x6dbee1(0x19e)](),this[_0x6dbee1(0x1cd)]();},Window_MessageLog[_0xbc5f00(0x160)]['forceNameColor']=function(){const _0x4fb9e1=_0xbc5f00,_0x29abd5=VisuMZ[_0x4fb9e1(0x127)][_0x4fb9e1(0x1a8)][_0x4fb9e1(0x13d)][_0x4fb9e1(0x195)];this[_0x4fb9e1(0x113)]=ColorManager[_0x4fb9e1(0x18b)](_0x29abd5);},Window_MessageLog['prototype']['clearNameColor']=function(){const _0x1973ac=_0xbc5f00;this[_0x1973ac(0x113)]=undefined;},Window_MessageLog['prototype']['resetTextColor']=function(){const _0x227489=_0xbc5f00;Window_Selectable[_0x227489(0x160)]['resetTextColor'][_0x227489(0x197)](this),this[_0x227489(0x113)]&&this['changeTextColor'](this['_forcedNameColor']);},Window_MessageLog['prototype']['addReplayVoiceSprite']=function(_0x2f7b18,_0x56e3e1,_0x3590f0){const _0x5b0734=_0xbc5f00;if(!_0x2f7b18[_0x5b0734(0x178)])return;this['_replayVoiceSprites']=this[_0x5b0734(0x1eb)]||[];(Window_MessageLog['SHOW_FACES']&&_0x2f7b18[_0x5b0734(0x11d)]||Graphics[_0x5b0734(0x149)]>0x330)&&(_0x56e3e1+=ImageManager[_0x5b0734(0x168)]-ImageManager['iconWidth']);const _0xb1fcdb=new Sprite_ReplayVoiceLine();_0xb1fcdb[_0x5b0734(0x1ea)](_0x2f7b18[_0x5b0734(0x178)]),_0xb1fcdb[_0x5b0734(0xe6)](_0x56e3e1,_0x3590f0),this[_0x5b0734(0x1eb)]['push'](_0xb1fcdb),this[_0x5b0734(0x126)](_0xb1fcdb);},Window_MessageLog['prototype'][_0xbc5f00(0x176)]=function(){},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x1c9)]=function(){const _0x21b274=_0xbc5f00;if(Input['isPressed'](Window_MessageLog[_0x21b274(0x18c)])&&this[_0x21b274(0x111)])return;this[_0x21b274(0x111)]=![];if(Input[_0x21b274(0x1d3)]('down'))this[_0x21b274(0x132)](!![]);else{if(Input[_0x21b274(0x1d3)]('up'))this['processSlowScroll'](![]);else{if(Input['isPressed'](_0x21b274(0x14c)))this['processFastScroll'](!![]);else{if(Input[_0x21b274(0x1d3)]('pageup'))this['processFastScroll'](![]);else{if(Input[_0x21b274(0x1ae)]('home'))this[_0x21b274(0xee)](!![]);else Input['isTriggered'](_0x21b274(0x1e3))&&this[_0x21b274(0x125)](!![]);}}}}},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x132)]=function(_0x1a3bc5){const _0x3db0cc=_0xbc5f00;let _0xf1a725=this[_0x3db0cc(0x167)]['y'];this[_0x3db0cc(0x167)]['y']+=(_0x1a3bc5?0x1:-0x1)*Window_MessageLog[_0x3db0cc(0x18f)];let _0x55f399=Math[_0x3db0cc(0x16a)](0x0,this[_0x3db0cc(0x123)]-this[_0x3db0cc(0x199)]);this['origin']['y']=this[_0x3db0cc(0x167)]['y'][_0x3db0cc(0x185)](0x0,_0x55f399);if(_0xf1a725!==this['origin']['y']&&Graphics['frameCount']%Window_MessageLog[_0x3db0cc(0x1cf)]===0x0)this[_0x3db0cc(0x158)]();},Window_MessageLog[_0xbc5f00(0x160)][_0xbc5f00(0x13f)]=function(_0x398911){const _0x20ed3b=_0xbc5f00;let _0x400875=this[_0x20ed3b(0x167)]['y'];this['origin']['y']+=(_0x398911?0x1:-0x1)*Window_MessageLog[_0x20ed3b(0x1c1)];let _0x2654f0=Math[_0x20ed3b(0x16a)](0x0,this[_0x20ed3b(0x123)]-this['innerHeight']);this['origin']['y']=this['origin']['y'][_0x20ed3b(0x185)](0x0,_0x2654f0);if(_0x400875!==this[_0x20ed3b(0x167)]['y']&&Graphics[_0x20ed3b(0xd1)]%Window_MessageLog[_0x20ed3b(0x133)]===0x0)this['playCursorSound']();},Window_MessageLog['prototype'][_0xbc5f00(0xee)]=function(_0x3636a9){const _0x505a82=_0xbc5f00;let _0x8a3163=this['origin']['y'];this['origin']['y']=0x0;if(_0x3636a9&&_0x8a3163!==this[_0x505a82(0x167)]['y'])this[_0x505a82(0x158)]();},Window_MessageLog['prototype'][_0xbc5f00(0x125)]=function(_0x30ba59){const _0x4883bd=_0xbc5f00;let _0x2fbea7=this[_0x4883bd(0x167)]['y'],_0x2374af=Math[_0x4883bd(0x16a)](0x0,this['_allTextHeight']-this['innerHeight']);this[_0x4883bd(0x167)]['y']=_0x2374af;if(_0x30ba59&&_0x2fbea7!==this[_0x4883bd(0x167)]['y'])this[_0x4883bd(0x158)]();},Window_MessageLog['prototype'][_0xbc5f00(0x17a)]=function(_0x517a48,_0x51cd60){const _0x3c4428=_0xbc5f00;this['origin']['y']+=_0x51cd60;let _0x5a4597=Math[_0x3c4428(0x16a)](0x0,this[_0x3c4428(0x123)]-this['innerHeight']);this['origin']['y']=this[_0x3c4428(0x167)]['y'][_0x3c4428(0x185)](0x0,_0x5a4597);},Window_MessageLog[_0xbc5f00(0x160)]['setScrollAccel']=function(_0x3a111a,_0x3484ff){const _0x371c11=_0xbc5f00;this[_0x371c11(0x167)]['y']+=_0x3484ff;let _0xcebe3=Math[_0x371c11(0x16a)](0x0,this['_allTextHeight']-this['innerHeight']);this[_0x371c11(0x167)]['y']=this['origin']['y'][_0x371c11(0x185)](0x0,_0xcebe3);};function _0x30fa(){const _0x289969=['buttonAssistKey3','msgButtonConsole','processAllText','height','createTextState','processSlowScroll','FAST_SOUND_FREQUENCY','lastGainedObjectName','_lineY','Game_System_initialize','SceneManager_push','Enable','members','removeAllReplayVoiceSprites','addTextToMessageLog','outputWidth','General','getLoggedMessages','processFastScroll','currentExt','preConvertEscapeCharacters','stringify','log','exit','ENTRY_LIMIT','messageLog','addWindow','MessageLogItemNameFmt','boxWidth','getRemovedMessageLogTextCodes','initialize','pagedown','replace','%1\x20is\x20incorrectly\x20placed\x20on\x20the\x20plugin\x20list.\x0aIt\x20is\x20a\x20Tier\x20%2\x20plugin\x20placed\x20over\x20other\x20Tier\x20%3\x20plugins.\x0aPlease\x20reorder\x20the\x20plugin\x20list\x20from\x20smallest\x20to\x20largest\x20tier\x20numbers.','SPEAKER_NAME_X','buttonAssistKey1','onCancel','_innerChildren','setBackgroundOpacity','convertMessageLogNameRemoval','textSizeEx','isSceneMap','ItemNameFmt','playCursorSound','Window_Message_isTriggered','COLOR_LOCK_CHOICE','isMainMenuMessageLogEnabled','150gGIRbA','MessageLogNumberInputFmt','faceHeight','loadTitle1','prototype','isMessageLogCommandVisible','MessageLogItemNothing','SHOW_FACES','setMainMenuMessageLogVisible','callMessageLog','createBackground','origin','faceWidth','Window_MenuCommand_addOriginalCommands','max','initMessageLogMainMenu','createCustomBackgroundImages','145708drZzkm','clearNameColor','refresh','ItemFmt','parse','addLoadListener','BgFilename2','faceIndex','speaker','updateOrigin','BgSettings','replayVoiceSound','SlowScroll','smoothScrollBy','popScene','needsCancelButton','mainAreaHeight','MessageLogMenu_BgType','push','50296GrAfwA','bind','Game_Message_setSpeakerName','28716qAfSKl','numItems','clamp','bitmap','MessageLogMenuCommand','isMainMenuMessageLogVisible','down','4082XbxQAj','textColor','SHORTCUT_KEY','FUNC','MessageLogChoiceCancel','SLOW_SCROLL_SPEED','command101','FastScroll','shown','106806udKXrr','BgFilename1','NameBoxWindowDefaultColor','callCancelHandler','call','MainMenu','innerHeight','151679NusTlc','drawAllText','SlowScrollSpeed','createCommandWindow','resetWordWrap','drawMessageText','MsgVoiceSfx','VisuMZ_2_VoiceActControl','addMessageLogCommand','lastGainedObjectQuantity','ARRAYEVAL','isMessageLogCommandEnabled','drawRect','MessageLog','Settings','ARRAYSTRUCT','name','%1\x27s\x20version\x20does\x20not\x20match\x20plugin\x27s.\x20Please\x20update\x20it\x20in\x20the\x20Plugin\x20Manager.','ChoiceFmt','TextManager_msgButtonConsole','isTriggered','ButtonName','status','removeChild','Game_Message_add','3BSFqcs','resetFontSettings','SlowSoundFreq','outputHeight','drawing','match','messageBody','convertMessageLogTextRemoval','choiceCancelType','choices','Window_EventItem_onOk','loadTitle2','iconIndex','STRUCT','FAST_SCROLL_SPEED','FastScrollSpeed','activate','MessageLogButtonName','convertVoiceActControlLines','return\x200','toUpperCase','20EwTcpy','processCursorMove','addNewLoggedMessageEntry','MessageLogFastScroll','COLOR_LOCK_NUMBER','drawHorzLine','commandMessageLog','SLOW_SOUND_FREQUENCY','FastSoundFreq','addOriginalCommands','Vocab','isPressed','_backSprite1','MessageLogChoiceListFmt','actor','createMessageLogWindow','addMessageLogEntry','lineHeight','constructor','ARRAYNUM','format','scaleSprite','addChild','drawTextEx','Window_EventItem_onCancel','helpAreaHeight','adjustSprite','end','ConvertParams','_newMessageLogEntry','<WORDWRAP>','getInputMultiButtonStrings','registerCommand','includes','setSound','_replayVoiceSprites','item','SpeakerNameX','frameCount','filter','innerWidth','centerSprite','convertMessageLogTextCodes','messageLogWindowRect','Scene_Menu_createCommandWindow','_commandWindow','%1\x20is\x20missing\x20a\x20required\x20plugin.\x0aPlease\x20install\x20%2\x20into\x20the\x20Plugin\x20Manager.','setFaceToMessageLog','JSON','length','_backSprite2','COLOR_LOCK_ITEM','add','createContents','buttonAssistText3','238vvCDTt','setSpeakerName','461102BvnGiw','Game_Message_setFaceImage','setXyPosition','SystemEnableMessageLogMenu','Window_ChoiceList_callOkHandler','Name','forceNameColor','canCallMessageLog','_messageLogWindow','isMessageWindowWordWrap','scrollToTop','SystemShowMessageLogMenu','EnableMainMenu','ARRAYFUNC','_loggedMessages','ShowMainMenu','ShortcutKey','getBackgroundOpacity','version','MessageLogEventItemFmt','setMainMenuMessageLogEnabled','enabled','RegExp','getLatestMessageLogEntry','processOk','convertMessageLogTextReplacement','<ColorLock>%1</ColorLock>','callOkHandler','initMessageLogSettings','pageup','SCENE_MAP_ONLY','convertMessageLogVariableTextCodes','ARRAYSTR','_MessageLog_MainMenu','HORZ_LINE_THICKNESS','backlog','isAutoColorAffected','Window','onOk','_MessageLog_Bypass','addMessageLogCommandAutomatically','shift','NUM','description','_number','_isHotKeyPressed','prepareMessageLogFaces','_forcedNameColor','setSpeakerToMessageLog','map','MessageLogScroll','ColorLockItem','ChoiceCancel','isBypassMessageLogging','createNewLoggedMessageEntry','trim','create','faceName','Window_Base_preConvertEscapeCharacters','ShowFaces','setFaceImage','setHandler','remove','_allTextHeight','split','scrollToBottom','addInnerChild','MessageCore','buttonAssistKey4','1503OMBmYT','mainAreaTop','calculateTextHeight','1024968XeZwsF'];_0x30fa=function(){return _0x289969;};return _0x30fa();}