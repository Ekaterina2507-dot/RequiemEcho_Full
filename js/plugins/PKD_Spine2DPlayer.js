/*
 * Copyright (c) 2024 Vladimir Skrypnikov (Pheonix KageDesu)
 * <http://kdworkshop.net/>
 *

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 */

/*:
 * @plugindesc (v.1.0)[BASIC] Spine animations for RPG Maker
 * @author Pheonix KageDesu
 * @target MZ
 * @url https://kdworkshop.net/plugins/spine-player/
 *
 * @help
 *
 * Spine software:
 * https://esotericsoftware.com/    
 *
 * ======================================
 * ======================================
 * 
 * GUIDE:
 * See file guide.txt or guide.url
 *
 * ======================================
 * ======================================
 *
 * Brief list of script calls and methods
 * (read Guide for understand how they works and how use)
 * 
 * Script calls:
 * ------------------------------------------
 * CreateSAnim(id, filename, x = 0, y = 0)   //-> animation
 * SAnim(id)   //-> animation
 * RemoveSAnim(id, mapId = 0)
 *
 * Methods: (can be chained)
 * -------------------------------------------
 * .keep()
 * .remove()
 * .bindToScreen()
 * .bindBelowPictures()
 * .bindBelowWindows()
 * .bindToMap(z)
 * .setScriptOnComplete(script, animationName = "")
 * .setScriptOnEnd(script, animationName = "")
 * .setScriptOnStart(script, animationName = "")
 * .setScriptOnEvent(eventName, script)
 * .clearAllEvents()
 * .setPosition(x = 0, y = 0)
 * .moveTo(x = 0, y = 0, duration = 30)
 * .moveBy(dx = 0, dy = 0, duration = 30)
 * .setScale(x = 1.0, y = x)
 * .setTimeScale(timeScale = 1.0)
 * .setAlpha(alpha = 1)
 * .fadeIn(duration = 60)
 * .fadeOut(duration = 60, isDeleteAfter = false)
 * .setAnimation(name = "", isLoop = false, mixDuration = 0, trackIndex = 0)
 * .addAnimation(name = "", isLoop = false, delay = 0, mixDuration = 0, trackIndex = 0)
 * .stopAnimation(mixDuration = 0, trackIndex = 0)
 * .addEndOfAnimation(delay = 0, mixDuration = 0, trackIndex = 0)
 * .bindToMessageByFace(faceName = "", faceIndex = -1, isHighlight = false)
 * .bindToMessageByName(speakerName = "", isHighlight = false)
 * .setMessageTalkAnimation(talkAnimationName = "", mixDuration = 0)
 * .setMessageIdleAnimation(idleAnimationName = "", mixDuration = 0)
 * .unbindFromMessage()
 *
 * Inside event (script call):
 * -------------------------------------------
 * this.waitSAnimComplete(id, animationName = "")
 *
 * ---------------------------------------------------------------------------
 
 * This is BASIC plugin version and have some restrictions:
 *    - No plugin updates (with new features)
 *    - Obfuscated code
 *    - Plugin usage allowed only in Non-Commercial project
 * 
 *  PRO version of plugin don't have this restrictions!
 
 * ===========================================================================
 * If you like my Plugins, want more and offten updates,
 * please support me on Boosty or Patreon!
 * 
 * Boosty Page:
 *      https://boosty.to/kagedesu
 * Patreon Page:
 *      https://www.patreon.com/KageDesu
 * YouTube Channel:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 * You can use this plugin in your game thanks to all who supports me!
 *
 * Contains resources designed and drawn
 * by Ekaterina N. Stadnikova (MOSCOW RUSSIA)
 * https://stadnikova-ekaterina.itch.io/ 
 *

 * License: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 *
 * 
 * @param PKD_Spine2DPlayer
 * @text 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 */
/*:ru
 * @plugindesc (v.1.0)[BASIC] Spine animations for RPG Maker
 * @author Pheonix KageDesu
 * @target MZ
 * @url https://kdworkshop.net/plugins/spine-player/
 *
 * @help
 * ---------------------------------------------------------------------------
 * Программа Spine:
 * https://esotericsoftware.com/    
 *
 * ======================================
 * ======================================
 * 
 * Как пользоваться:
 * Ссылка на инструкцию в файле guide.txt или guide.url
 *
 * ======================================
 * ======================================
 *
 * Список всех скриптов и методов
 * (прочитайте инструкцию Guide.pdf, чтобы понять как ими пользоваться)
 * 
 * Вызовы скриптов:
 * ------------------------------------------
 * CreateSAnim(id, filename, x = 0, y = 0)   //-> animation
 * SAnim(id)   //-> animation
 * RemoveSAnim(id, mapId = 0)
 *
 * Methods: (can be chained)
 * -------------------------------------------
 * .keep()
 * .remove()
 * .bindToScreen()
 * .bindBelowPictures()
 * .bindBelowWindows()
 * .bindToMap(z)
 * .setScriptOnComplete(script, animationName = "")
 * .setScriptOnEnd(script, animationName = "")
 * .setScriptOnStart(script, animationName = "")
 * .setScriptOnEvent(eventName, script)
 * .clearAllEvents()
 * .setPosition(x = 0, y = 0)
 * .moveTo(x = 0, y = 0, duration = 30)
 * .moveBy(dx = 0, dy = 0, duration = 30)
 * .setScale(x = 1.0, y = x)
 * .setTimeScale(timeScale = 1.0)
 * .setAlpha(alpha = 1)
 * .fadeIn(duration = 60)
 * .fadeOut(duration = 60, isDeleteAfter = false)
 * .setAnimation(name = "", isLoop = false, mixDuration = 0, trackIndex = 0)
 * .addAnimation(name = "", isLoop = false, delay = 0, mixDuration = 0, trackIndex = 0)
 * .stopAnimation(mixDuration = 0, trackIndex = 0)
 * .addEndOfAnimation(delay = 0, mixDuration = 0, trackIndex = 0)
 * .bindToMessageByFace(faceName = "", faceIndex = -1, isHighlight = false)
 * .bindToMessageByName(speakerName = "", isHighlight = false)
 * .setMessageTalkAnimation(talkAnimationName = "", mixDuration = 0)
 * .setMessageIdleAnimation(idleAnimationName = "", mixDuration = 0)
 * .unbindFromMessage()
 *
 * В теле события (вызов скрипта):
 * -------------------------------------------
 * this.waitSAnimComplete(id, animationName = "")
 *
 * ---------------------------------------------------------------------------
 
 * Это [BASIC] (базовая) версия плагина и имеет некоторые ограничения:
 *    - Нет обновлений (с новыми функциями)
 *    - Обфусцированный код
 *    - ЗАПРЕЩЕНО использовать плагин в коммерческих проектах
 * 
 *  [PRO] версия плагина не имеет данных ограничений!
 
 * ===========================================================================
 * Если Вам нравятся мои плагины, поддержите меня на Boosty!
 * 
 * Boosty:
 *      https://boosty.to/kagedesu
 * Patreon:
 *      https://www.patreon.com/KageDesu
 * YouTube:
 *      https://www.youtube.com/channel/UCA3R61ojF5vp5tGwJ1YqdgQ?
 *
 *
 * Плагин содержит графику от Екатерины Стадниковой
 * https://stadnikova-ekaterina.itch.io/
 *

 * Лицензия: Creative Commons 4.0 Attribution, Share Alike, Non-Commercial

 *
 * 
 * @param PKD_Spine2DPlayer
 * @text 
 * 
 * @param spacer|endHolder @text‏‏‎ ‎@desc ===============================================
 * 
 */



var Imported = Imported || {};
Imported.PKD_Spine2DPlayer = true;

var PKD_Spine2DPlayer = {};
PKD_Spine2DPlayer.Version = 100;

//?VERSION
PKD_Spine2DPlayer.isPro = function() { return false; };

PKD_Spine2DPlayer.PP = {};
PKD_Spine2DPlayer.Utils = {};

// * Загрзука параметров
PKD_Spine2DPlayer.LoadPluginSettings = () => {
    PKD_Spine2DPlayer.PP._loader = new KDCore.ParamLoader('PKD_Spine2DPlayer');
};


/*
# ==========================================================================
# ==========================================================================
#
#   EMBEDDED PHEONIX KAGEDESU PLUGINS CORE LIBRARY
#   (This plugin may not use the entire code of this library)
#
# ==========================================================================
# ==========================================================================
 * 
 * 
 */



/*!
 * pixi-filters - v4.2.0
 * Compiled Fri, 05 Aug 2022 19:51:27 UTC
 *
 * pixi-filters is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var __filters=function(e,n,t,r,o,i,l,a){"use strict";var s=function(e,n){return(s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])})(e,n)};function u(e,n){function t(){this.constructor=e}s(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var f=function(){return(f=Object.assign||function(e){for(var n,t=arguments,r=1,o=arguments.length;r<o;r++)for(var i in n=t[r])Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i]);return e}).apply(this,arguments)};Object.create;Object.create;var c="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",m=function(e){function n(n){var t=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n")||this;return t.gamma=1,t.saturation=1,t.contrast=1,t.brightness=1,t.red=1,t.green=1,t.blue=1,t.alpha=1,Object.assign(t,n),t}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,t,r)},n}(n.Filter),p=function(e){function n(n){void 0===n&&(n=.5);var t=e.call(this,c,"\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n")||this;return t.threshold=n,t}return u(n,e),Object.defineProperty(n.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(e){this.uniforms.threshold=e},enumerable:!1,configurable:!0}),n}(n.Filter),d=function(e){function n(n,r,o){void 0===n&&(n=4),void 0===r&&(r=3),void 0===o&&(o=!1);var i=e.call(this,c,o?"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n":"\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}")||this;return i._kernels=[],i._blur=4,i._quality=3,i.uniforms.uOffset=new Float32Array(2),i._pixelSize=new t.Point,i.pixelSize=1,i._clamp=o,Array.isArray(n)?i.kernels=n:(i._blur=n,i.quality=r),i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i=this._pixelSize.x/n._frame.width,l=this._pixelSize.y/n._frame.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,n,t,r);else{for(var a=e.getFilterTexture(),s=n,u=a,f=void 0,c=this._quality-1,m=0;m<c;m++)o=this._kernels[m]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,s,u,1),f=s,s=u,u=f;o=this._kernels[c]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,s,t,r),e.returnFilterTexture(a)}},n.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce((function(e,n){return e+n+.5}),0))},n.prototype._generateKernels=function(){var e=this._blur,n=this._quality,t=[e];if(e>0)for(var r=e,o=e/n,i=1;i<n;i++)r-=o,t.push(r);this._kernels=t,this._updatePadding()},Object.defineProperty(n.prototype,"kernels",{get:function(){return this._kernels},set:function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof t.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"quality",{get:function(){return this._quality},set:function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blur",{get:function(){return this._blur},set:function(e){this._blur=e,this._generateKernels()},enumerable:!1,configurable:!0}),n}(n.Filter),h=function(e){function n(t){var o=e.call(this,c,"uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n")||this;o.bloomScale=1,o.brightness=1,o._resolution=r.settings.FILTER_RESOLUTION,"number"==typeof t&&(t={threshold:t});var i=Object.assign(n.defaults,t);o.bloomScale=i.bloomScale,o.brightness=i.brightness;var l=i.kernels,a=i.blur,s=i.quality,u=i.pixelSize,f=i.resolution;return o._extractFilter=new p(i.threshold),o._extractFilter.resolution=f,o._blurFilter=l?new d(l):new d(a,s),o.pixelSize=u,o.resolution=f,o}return u(n,e),n.prototype.apply=function(e,n,t,r,o){var i=e.getFilterTexture();this._extractFilter.apply(e,n,i,1,o);var l=e.getFilterTexture();this._blurFilter.apply(e,i,l,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,n,t,r),e.returnFilterTexture(l),e.returnFilterTexture(i)},Object.defineProperty(n.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(e){this._extractFilter.threshold=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),n.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:r.settings.FILTER_RESOLUTION},n}(n.Filter),g=function(e){function n(n){void 0===n&&(n=8);var t=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n")||this;return t.size=n,t}return u(n,e),Object.defineProperty(n.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(e){this.uniforms.pixelSize=e},enumerable:!1,configurable:!0}),n}(n.Filter),v=function(e){function n(n){var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n")||this;return t._thickness=2,t._angle=0,t.uniforms.lightColor=new Float32Array(3),t.uniforms.shadowColor=new Float32Array(3),Object.assign(t,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},n),t.padding=1,t}return u(n,e),n.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(n.prototype,"rotation",{get:function(){return this._angle/t.DEG_TO_RAD},set:function(e){this._angle=e*t.DEG_TO_RAD,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lightColor",{get:function(){return o.rgb2hex(this.uniforms.lightColor)},set:function(e){o.hex2rgb(e,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(e){this.uniforms.lightAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowColor",{get:function(){return o.rgb2hex(this.uniforms.shadowColor)},set:function(e){o.hex2rgb(e,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(e){this.uniforms.shadowAlpha=e},enumerable:!1,configurable:!0}),n}(n.Filter),y=function(e){function n(n,o,s,u){void 0===n&&(n=2),void 0===o&&(o=4),void 0===s&&(s=r.settings.FILTER_RESOLUTION),void 0===u&&(u=5);var f,c,m=e.call(this)||this;return"number"==typeof n?(f=n,c=n):n instanceof t.Point?(f=n.x,c=n.y):Array.isArray(n)&&(f=n[0],c=n[1]),m.blurXFilter=new a.BlurFilterPass(!0,f,o,s,u),m.blurYFilter=new a.BlurFilterPass(!1,c,o,s,u),m.blurYFilter.blendMode=i.BLEND_MODES.SCREEN,m.defaultFilter=new l.AlphaFilter,m}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this.defaultFilter.apply(e,n,t,r),this.blurXFilter.apply(e,n,o,1),this.blurYFilter.apply(e,o,t,0),e.returnFilterTexture(o)},Object.defineProperty(n.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(e){this.blurXFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(e){this.blurYFilter.blur=e},enumerable:!1,configurable:!0}),n}(n.Filter),b=function(e){function n(t){var r=e.call(this,c,"uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n")||this;return r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),n.defaults={center:[.5,.5],radius:100,strength:1},n}(n.Filter),x=function(e){function t(n,t,r){void 0===t&&(t=!1),void 0===r&&(r=1);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}")||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=t,o.mix=r,o.colorMap=n,o}return u(t,e),t.prototype.apply=function(e,n,t,r){this.uniforms._mix=this.mix,e.applyFilter(this,n,t,r)},Object.defineProperty(t.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"colorMap",{get:function(){return this._colorMap},set:function(e){var t;e&&(e instanceof n.Texture||(e=n.Texture.from(e)),(null===(t=e)||void 0===t?void 0:t.baseTexture)&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=i.MIPMAP_MODES.OFF,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nearest",{get:function(){return this._nearest},set:function(e){this._nearest=e,this._scaleMode=e?i.SCALE_MODES.NEAREST:i.SCALE_MODES.LINEAR;var n=this._colorMap;n&&n.baseTexture&&(n.baseTexture._glTextures={},n.baseTexture.scaleMode=this._scaleMode,n.baseTexture.mipmap=i.MIPMAP_MODES.OFF,n._updateID++,n.baseTexture.emit("update",n.baseTexture))},enumerable:!1,configurable:!0}),t.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},t.prototype.destroy=function(n){void 0===n&&(n=!1),this._colorMap&&this._colorMap.destroy(n),e.prototype.destroy.call(this)},t}(n.Filter),_=function(e){function n(n,t){void 0===n&&(n=0),void 0===t&&(t=1);var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nuniform float alpha;\n\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);\n}\n")||this;return r._color=0,r._alpha=1,r.uniforms.color=new Float32Array(3),r.color=n,r.alpha=t,r}return u(n,e),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.color;"number"==typeof e?(o.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._color=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this._alpha},set:function(e){this.uniforms.alpha=e,this._alpha=e},enumerable:!1,configurable:!0}),n}(n.Filter),C=function(e){function n(n,t,r){void 0===n&&(n=16711680),void 0===t&&(t=0),void 0===r&&(r=.4);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n")||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=n,o.newColor=t,o.epsilon=r,o}return u(n,e),Object.defineProperty(n.prototype,"originalColor",{get:function(){return this._originalColor},set:function(e){var n=this.uniforms.originalColor;"number"==typeof e?(o.hex2rgb(e,n),this._originalColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._originalColor=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"newColor",{get:function(){return this._newColor},set:function(e){var n=this.uniforms.newColor;"number"==typeof e?(o.hex2rgb(e,n),this._newColor=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],this._newColor=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),n}(n.Filter),S=function(e){function n(n,t,r){void 0===t&&(t=200),void 0===r&&(r=200);var o=e.call(this,c,"precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n")||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),void 0!==n&&(o.matrix=n),o.width=t,o.height=r,o}return u(n,e),Object.defineProperty(n.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(e){var n=this;e.forEach((function(e,t){n.uniforms.matrix[t]=e}))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(e){this.uniforms.texelSize[0]=1/e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(e){this.uniforms.texelSize[1]=1/e},enumerable:!1,configurable:!0}),n}(n.Filter),F=function(e){function n(){return e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n")||this}return u(n,e),n}(n.Filter),z=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));\n    \n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0)\n    {\n        float _c = curvature > 0. ? curvature : 1.;\n        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n        vec2 uv = dir * k;\n\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n")||this;return r.time=0,r.seed=0,r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(e){this.uniforms.curvature=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(e){this.uniforms.lineWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(e){this.uniforms.lineContrast=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(e){this.uniforms.verticalLine=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),n.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},n}(n.Filter),O=function(e){function n(n,t){void 0===n&&(n=1),void 0===t&&(t=5);var r=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n")||this;return r.scale=n,r.angle=t,r}return u(n,e),Object.defineProperty(n.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(e){this.uniforms.scale=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),n}(n.Filter),P=function(e){function i(o){var l=e.call(this)||this;l.angle=45,l._distance=5,l._resolution=r.settings.FILTER_RESOLUTION;var a=o?f(f({},i.defaults),o):i.defaults,s=a.kernels,u=a.blur,m=a.quality,p=a.pixelSize,h=a.resolution;l._tintFilter=new n.Filter(c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}"),l._tintFilter.uniforms.color=new Float32Array(4),l._tintFilter.uniforms.shift=new t.Point,l._tintFilter.resolution=h,l._blurFilter=s?new d(s):new d(u,m),l.pixelSize=p,l.resolution=h;var g=a.shadowOnly,v=a.rotation,y=a.distance,b=a.alpha,x=a.color;return l.shadowOnly=g,l.rotation=v,l.distance=y,l.alpha=b,l.color=x,l._updatePadding(),l}return u(i,e),i.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this._tintFilter.apply(e,n,o,1),this._blurFilter.apply(e,o,t,r),!0!==this.shadowOnly&&e.applyFilter(this,n,t,0),e.returnFilterTexture(o)},i.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},i.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(i.prototype,"resolution",{get:function(){return this._resolution},set:function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"distance",{get:function(){return this._distance},set:function(e){this._distance=e,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"rotation",{get:function(){return this.angle/t.DEG_TO_RAD},set:function(e){this.angle=e*t.DEG_TO_RAD,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(e){this._tintFilter.uniforms.alpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"color",{get:function(){return o.rgb2hex(this._tintFilter.uniforms.color)},set:function(e){o.hex2rgb(e,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(e){this._blurFilter.kernels=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(e){this._blurFilter.blur=e,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(e){this._blurFilter.quality=e},enumerable:!1,configurable:!0}),Object.defineProperty(i.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(e){this._blurFilter.pixelSize=e},enumerable:!1,configurable:!0}),i.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:r.settings.FILTER_RESOLUTION},i}(n.Filter),A=function(e){function n(n){void 0===n&&(n=5);var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n")||this;return t.strength=n,t}return u(n,e),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(e){this.uniforms.strength=e},enumerable:!1,configurable:!0}),n}(n.Filter),T=function(e){function r(t){var o=e.call(this,c,"// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n")||this;return o.offset=100,o.fillMode=r.TRANSPARENT,o.average=!1,o.seed=0,o.minSize=8,o.sampleSize=512,o._slices=0,o._offsets=new Float32Array(1),o._sizes=new Float32Array(1),o._direction=-1,o.uniforms.dimensions=new Float32Array(2),o._canvas=document.createElement("canvas"),o._canvas.width=4,o._canvas.height=o.sampleSize,o.texture=n.Texture.from(o._canvas,{scaleMode:i.SCALE_MODES.NEAREST}),Object.assign(o,r.defaults,t),o}return u(r,e),r.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,n,t,r)},r.prototype._randomizeSizes=function(){var e=this._sizes,n=this._slices-1,t=this.sampleSize,r=Math.min(this.minSize/t,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<n;l++){var a=i/(o-l),s=Math.max(a*(1-.6*Math.random()),r);e[l]=s,i-=s}e[n]=i}else{i=1;var u=Math.sqrt(1/this._slices);for(l=0;l<n;l++){s=Math.max(u*i*Math.random(),r);e[l]=s,i-=s}e[n]=i}this.shuffle()},r.prototype.shuffle=function(){for(var e=this._sizes,n=this._slices-1;n>0;n--){var t=Math.random()*n>>0,r=e[n];e[n]=e[t],e[t]=r}},r.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var e,n=this.sampleSize,t=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,n);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*n,a=e>0?e:0,s=e<0?-e:0;r.fillStyle="rgba("+a+", "+s+", 0, 1)",r.fillRect(0,o>>0,n,l+1>>0),o+=l}t.baseTexture.update(),this.uniforms.displacementMap=t},Object.defineProperty(r.prototype,"sizes",{get:function(){return this._sizes},set:function(e){for(var n=Math.min(this._slices,e.length),t=0;t<n;t++)this._sizes[t]=e[t]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return this._offsets},set:function(e){for(var n=Math.min(this._slices,e.length),t=0;t<n;t++)this._offsets[t]=e[t]},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"slices",{get:function(){return this._slices},set:function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"direction",{get:function(){return this._direction},set:function(e){if(this._direction!==e){this._direction=e;var n=e*t.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(n),this.uniforms.cosDir=Math.cos(n)}},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),r.prototype.destroy=function(){var e;null===(e=this.texture)||void 0===e||e.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},r.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},r.TRANSPARENT=0,r.ORIGINAL=1,r.LOOP=2,r.CLAMP=3,r.MIRROR=4,r}(n.Filter),w=function(e){function n(t){var r=this,o=Object.assign({},n.defaults,t),i=o.outerStrength,l=o.innerStrength,a=o.color,s=o.knockout,u=o.quality,f=Math.round(o.distance);return(r=e.call(this,c,"varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n".replace(/__ANGLE_STEP_SIZE__/gi,""+(1/u/f).toFixed(7)).replace(/__DIST__/gi,f.toFixed(0)+".0"))||this).uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(r,{color:a,outerStrength:i,innerStrength:l,padding:f,knockout:s}),r}return u(n,e),Object.defineProperty(n.prototype,"color",{get:function(){return o.rgb2hex(this.uniforms.glowColor)},set:function(e){o.hex2rgb(e,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(e){this.uniforms.outerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(e){this.uniforms.innerStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(e){this.uniforms.knockout=e},enumerable:!1,configurable:!0}),n.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},n}(n.Filter),D=function(e){function n(r){var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\nuniform float alpha;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n    // apply user alpha\n    mist *= alpha;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n\n}\n".replace("${perlin}","vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n"))||this;o.parallel=!0,o.time=0,o._angle=0,o.uniforms.dimensions=new Float32Array(2);var i=Object.assign(n.defaults,r);return o._angleLight=new t.Point,o.angle=i.angle,o.gain=i.gain,o.lacunarity=i.lacunarity,o.alpha=i.alpha,o.parallel=i.parallel,o.center=i.center,o.time=i.time,o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=n.filterFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e;var n=e*t.DEG_TO_RAD;this._angleLight.x=Math.cos(n),this._angleLight.y=Math.sin(n)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(e){this.uniforms.gain=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(e){this.uniforms.lacunarity=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha=e},enumerable:!1,configurable:!0}),n.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},n}(n.Filter),j=function(e){function n(n,r,o){void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return i.kernelSize=5,i.uniforms.uVelocity=new Float32Array(2),i._velocity=new t.ObservablePoint(i.velocityChanged,i),i.setVelocity(n),i.kernelSize=r,i.offset=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"velocity",{get:function(){return this._velocity},set:function(e){this.setVelocity(e)},enumerable:!1,configurable:!0}),n.prototype.setVelocity=function(e){if(Array.isArray(e)){var n=e[0],t=e[1];this._velocity.set(n,t)}else this._velocity.copyFrom(e)},n.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=1+(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)},Object.defineProperty(n.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(e){this.uniforms.uOffset=e},enumerable:!1,configurable:!0}),n}(n.Filter),M=function(e){function n(n,t,r){void 0===t&&(t=.05),void 0===r&&(r=n.length);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n".replace(/%maxColors%/g,r.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=t,o._maxColors=r,o.uniforms.originalColors=new Float32Array(3*r),o.uniforms.targetColors=new Float32Array(3*r),o.replacements=n,o}return u(n,e),Object.defineProperty(n.prototype,"replacements",{get:function(){return this._replacements},set:function(e){var n=this.uniforms.originalColors,t=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw new Error("Length of replacements ("+r+") exceeds the maximum colors length ("+this._maxColors+")");n[3*r]=-1;for(var i=0;i<r;i++){var l=e[i],a=l[0];"number"==typeof a?a=o.hex2rgb(a):l[0]=o.rgb2hex(a),n[3*i]=a[0],n[3*i+1]=a[1],n[3*i+2]=a[2];var s=l[1];"number"==typeof s?s=o.hex2rgb(s):l[1]=o.rgb2hex(s),t[3*i]=s[0],t[3*i+1]=s[1],t[3*i+2]=s[2]}this._replacements=e},enumerable:!1,configurable:!0}),n.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(n.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(e){this.uniforms.epsilon=e},enumerable:!1,configurable:!0}),n}(n.Filter),R=function(e){function n(t,r){void 0===r&&(r=0);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n")||this;return o.seed=0,o.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(o.seed=t,t=void 0):o.seed=r,Object.assign(o,n.defaults,t),o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,this.uniforms.seed=this.seed,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(e){this.uniforms.sepia=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(e){this.uniforms.noise=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(e){this.uniforms.noiseSize=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(e){this.uniforms.scratch=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(e){this.uniforms.scratchDensity=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(e){this.uniforms.scratchWidth=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(e){this.uniforms.vignetting=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(e){this.uniforms.vignettingAlpha=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(e){this.uniforms.vignettingBlur=e},enumerable:!1,configurable:!0}),n.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},n}(n.Filter),E=function(e){function n(t,r,o){void 0===t&&(t=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n".replace(/\$\{angleStep\}/,n.getAngleStep(o)))||this;return i._thickness=1,i.uniforms.thickness=new Float32Array([0,0]),i.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(i,{thickness:t,color:r,quality:o}),i}return u(n,e),n.getAngleStep=function(e){var t=Math.max(e*n.MAX_SAMPLES,n.MIN_SAMPLES);return(2*Math.PI/t).toFixed(7)},n.prototype.apply=function(e,n,t,r){this.uniforms.thickness[0]=this._thickness/n._frame.width,this.uniforms.thickness[1]=this._thickness/n._frame.height,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"color",{get:function(){return o.rgb2hex(this.uniforms.outlineColor)},set:function(e){o.hex2rgb(e,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"thickness",{get:function(){return this._thickness},set:function(e){this._thickness=e,this.padding=e},enumerable:!1,configurable:!0}),n.MIN_SAMPLES=1,n.MAX_SAMPLES=100,n}(n.Filter),I=function(e){function n(n){void 0===n&&(n=10);var t=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n")||this;return t.size=n,t}return u(n,e),Object.defineProperty(n.prototype,"size",{get:function(){return this.uniforms.size},set:function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},enumerable:!1,configurable:!0}),n}(n.Filter),k=function(e){function n(n,t,r,o){void 0===n&&(n=0),void 0===t&&(t=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n")||this;return i._angle=0,i.angle=n,i.center=t,i.kernelSize=r,i.radius=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"angle",{get:function(){return this._angle},set:function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),n}(n.Filter),L=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n")||this;return r.time=0,r.uniforms.amplitude=new Float32Array(2),r.uniforms.waveLength=new Float32Array(2),r.uniforms.alpha=new Float32Array(2),r.uniforms.dimensions=new Float32Array(2),Object.assign(r,n.defaults,t),r}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(e){this.uniforms.mirror=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(e){this.uniforms.boundary=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},enumerable:!1,configurable:!0}),n.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},n}(n.Filter),N=function(e){function n(n,t,r){void 0===n&&(n=[-10,0]),void 0===t&&(t=[0,10]),void 0===r&&(r=[0,0]);var o=e.call(this,c,"precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n")||this;return o.red=n,o.green=t,o.blue=r,o}return u(n,e),Object.defineProperty(n.prototype,"red",{get:function(){return this.uniforms.red},set:function(e){this.uniforms.red=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"green",{get:function(){return this.uniforms.green},set:function(e){this.uniforms.green=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(e){this.uniforms.blue=e},enumerable:!1,configurable:!0}),n}(n.Filter),X=function(e){function n(t,r,o){void 0===t&&(t=[0,0]),void 0===o&&(o=0);var i=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n")||this;return i.center=t,Object.assign(i,n.defaults,r),i.time=o,i}return u(n,e),n.prototype.apply=function(e,n,t,r){this.uniforms.time=this.time,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.center},set:function(e){this.uniforms.center=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(e){this.uniforms.amplitude=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(e){this.uniforms.wavelength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(e){this.uniforms.brightness=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(e){this.uniforms.speed=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),n.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n}(n.Filter),B=function(e){function n(n,t,r){void 0===t&&(t=0),void 0===r&&(r=1);var o=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n")||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,r]),o.texture=n,o.color=t,o}return u(n,e),n.prototype.apply=function(e,n,t,r){var o,i;this.uniforms.dimensions[0]=null===(o=n.filterFrame)||void 0===o?void 0:o.width,this.uniforms.dimensions[1]=null===(i=n.filterFrame)||void 0===i?void 0:i.height,e.applyFilter(this,n,t,r)},Object.defineProperty(n.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(e){this.uniforms.uLightmap=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"color",{get:function(){return this._color},set:function(e){var n=this.uniforms.ambientColor;"number"==typeof e?(o.hex2rgb(e,n),this._color=e):(n[0]=e[0],n[1]=e[1],n[2]=e[2],n[3]=e[3],this._color=o.rgb2hex(n))},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(e){this.uniforms.ambientColor[3]=e},enumerable:!1,configurable:!0}),n}(n.Filter),G=function(e){function n(n,r,o,i){void 0===n&&(n=100),void 0===r&&(r=600);var l=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n")||this;return l.uniforms.blur=n,l.uniforms.gradientBlur=r,l.uniforms.start=o||new t.Point(0,window.innerHeight/2),l.uniforms.end=i||new t.Point(600,window.innerHeight/2),l.uniforms.delta=new t.Point(30,30),l.uniforms.texSize=new t.Point(window.innerWidth,window.innerHeight),l.updateDelta(),l}return u(n,e),n.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(n.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(e){this.uniforms.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(e){this.uniforms.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"start",{get:function(){return this.uniforms.start},set:function(e){this.uniforms.start=e,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"end",{get:function(){return this.uniforms.end},set:function(e){this.uniforms.end=e,this.updateDelta()},enumerable:!1,configurable:!0}),n}(n.Filter),K=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,t=Math.sqrt(e*e+n*n);this.uniforms.delta.x=e/t,this.uniforms.delta.y=n/t},n}(G),q=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return u(n,e),n.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,n=this.uniforms.end.y-this.uniforms.start.y,t=Math.sqrt(e*e+n*n);this.uniforms.delta.x=-n/t,this.uniforms.delta.y=e/t},n}(G),W=function(e){function n(n,t,r,o){void 0===n&&(n=100),void 0===t&&(t=600);var i=e.call(this)||this;return i.tiltShiftXFilter=new K(n,t,r,o),i.tiltShiftYFilter=new q(n,t,r,o),i}return u(n,e),n.prototype.apply=function(e,n,t,r){var o=e.getFilterTexture();this.tiltShiftXFilter.apply(e,n,o,1),this.tiltShiftYFilter.apply(e,o,t,r),e.returnFilterTexture(o)},Object.defineProperty(n.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},enumerable:!1,configurable:!0}),n}(n.Filter),Y=function(e){function n(t){var r=e.call(this,c,"varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n")||this;return Object.assign(r,n.defaults,t),r}return u(n,e),Object.defineProperty(n.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(e){this.uniforms.offset=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(e){this.uniforms.radius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(e){this.uniforms.angle=e},enumerable:!1,configurable:!0}),n.defaults={radius:200,angle:4,padding:20,offset:new t.Point},n}(n.Filter),Z=function(e){function n(t){var r,o=Object.assign(n.defaults,t),i=o.maxKernelSize,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}(o,["maxKernelSize"]);return r=e.call(this,c,"varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = ${maxKernelSize};\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n".replace("${maxKernelSize}",i.toFixed(1)))||this,Object.assign(r,l),r}return u(n,e),Object.defineProperty(n.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(e){this.uniforms.uCenter=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(e){this.uniforms.uStrength=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(e){this.uniforms.uInnerRadius=e},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},enumerable:!1,configurable:!0}),n.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},n}(n.Filter);return e.AdjustmentFilter=m,e.AdvancedBloomFilter=h,e.AsciiFilter=g,e.BevelFilter=v,e.BloomFilter=y,e.BulgePinchFilter=b,e.CRTFilter=z,e.ColorMapFilter=x,e.ColorOverlayFilter=_,e.ColorReplaceFilter=C,e.ConvolutionFilter=S,e.CrossHatchFilter=F,e.DotFilter=O,e.DropShadowFilter=P,e.EmbossFilter=A,e.GlitchFilter=T,e.GlowFilter=w,e.GodrayFilter=D,e.KawaseBlurFilter=d,e.MotionBlurFilter=j,e.MultiColorReplaceFilter=M,e.OldFilmFilter=R,e.OutlineFilter=E,e.PixelateFilter=I,e.RGBSplitFilter=N,e.RadialBlurFilter=k,e.ReflectionFilter=L,e.ShockwaveFilter=X,e.SimpleLightmapFilter=B,e.TiltShiftAxisFilter=G,e.TiltShiftFilter=W,e.TiltShiftXFilter=K,e.TiltShiftYFilter=q,e.TwistFilter=Y,e.ZoomBlurFilter=Z,Object.defineProperty(e,"__esModule",{value:!0}),e}({},PIXI,PIXI,PIXI,PIXI.utils,PIXI,PIXI.filters,PIXI.filters);Object.assign(PIXI.filters,__filters);
//# sourceMappingURL=pixi-filters.js.map


// Generated by CoffeeScript 2.6.1
// ==========================================================================
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ KDCore.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
// * LIBRARY WITH MZ AND MZ SUPPORT
//! {OUTER FILE}

//?rev 20.02.24
var KDCore;

window.Imported = window.Imported || {};

Imported.KDCore = true;

KDCore = KDCore || {};

// * Двузначные числа нельзя в версии, сравнение идёт по первой цифре поулчается (3.43 - нельзя, можно 3.4.3)
//%[МЕНЯТЬ ПРИ ИЗМЕНЕНИИ]
KDCore._fileVersion = '3.3.3';

// * Методы и библиотеки данной версии
KDCore._loader = 'loader_' + KDCore._fileVersion;

KDCore[KDCore._loader] = [];

// * Добавить библиотеку на загрузку
KDCore.registerLibraryToLoad = function(lib) {
  return KDCore[KDCore._loader].push(lib);
};

if ((KDCore.Version != null) && KDCore.Version >= KDCore._fileVersion) {
  // * ПРОПУСКАЕМ ЗАГРУЗКУ, так как уже загруженна более новая
  console.log('XDev KDCore ' + KDCore._fileVersion + ' skipped by new or exists version');
  KDCore._requireLoadLibrary = false;
} else {
  KDCore.Version = KDCore._fileVersion;
  KDCore.LIBS = KDCore.LIBS || {};
  KDCore.register = function(library) {
    return this.LIBS[library.name] = library;
  };
  window.KDCore = KDCore;
  // * ТРЕБУЕТСЯ ЗАГРУЗКА БИБЛИОТЕК
  KDCore._requireLoadLibrary = true;
}


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Array.prototype.delete = function() {
    var L, a, ax, what;
    what = void 0;
    a = arguments;
    L = a.length;
    ax = void 0;
    while (L && this.length) {
      what = a[--L];
      while ((ax = this.indexOf(what)) !== -1) {
        this.splice(ax, 1);
      }
    }
    return this;
  };
  Array.prototype.max = function() {
    return Math.max.apply(null, this);
  };
  Array.prototype.min = function() {
    return Math.min.apply(null, this);
  };
  Array.prototype.sample = function() {
    if (this.length === 0) {
      return [];
    }
    return this[KDCore.SDK.rand(0, this.length - 1)];
  };
  Array.prototype.first = function() {
    return this[0];
  };
  Array.prototype.last = function() {
    return this[this.length - 1];
  };
  Array.prototype.shuffle = function() {
    var k, n, v;
    n = this.length;
    while (n > 1) {
      n--;
      k = KDCore.SDK.rand(0, n + 1);
      v = this[k];
      this[k] = this[n];
      this[n] = v;
    }
  };
  Array.prototype.count = function() {
    return this.length;
  };
  Array.prototype.isEmpty = function() {
    return this.length === 0;
  };
  // * Ищет элемент, у которого поле ID == id
  Array.prototype.getById = function(id) {
    return this.getByField('id', id);
  };
  // * Ищет элемент, у которого поле FIELD (имя поля) == value
  Array.prototype.getByField = function(field, value) {
    var e;
    try {
      return this.find(function(item) {
        return item[field] === value;
      });
    } catch (error) {
      e = error;
      console.warn(e);
      return null;
    }
  };
  Object.defineProperty(Array.prototype, "delete", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "max", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "min", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "sample", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "first", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "last", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "shuffle", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "count", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "isEmpty", {
    enumerable: false
  });
  Object.defineProperty(Array.prototype, "getById", {
    enumerable: false
  });
  return Object.defineProperty(Array.prototype, "getByField", {
    enumerable: false
  });
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  Number.prototype.do = function(method) {
    return KDCore.SDK.times(this, method);
  };
  Number.prototype.clamp = function(min, max) {
    return Math.min(Math.max(this, min), max);
  };
  return Number.prototype.any = function(number) {
    return (number != null) && number > 0;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  String.prototype.toCss = function() {
    return KDCore.Color.FromHex(this).CSS;
  };
  String.prototype.toCSS = function() {
    return this.toCss();
  };
  String.prototype.isEmpty = function() {
    return this.length === 0 || !this.trim();
  };
  String.isNullOrEmpty = function(str) {
    if (str != null) {
      return str.toString().isEmpty();
    } else {
      return true;
    }
  };
  String.any = function(str) {
    return !String.isNullOrEmpty(str);
  };
  return String.prototype.replaceAll = function(search, replacement) {
    var target;
    target = this;
    return target.split(search).join(replacement);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.isMV = function() {
    return Utils.RPGMAKER_NAME.contains("MV");
  };
  KDCore.isMZ = function() {
    return !KDCore.isMV();
  };
  KDCore.warning = function(msg, error) {
    if (msg != null) {
      console.warn(msg);
    }
    if (error != null) {
      console.warn(error);
    }
  };
  KDCore.makeid = function(length) {
    var characters, charactersLength, i, result;
    result = '';
    characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    charactersLength = characters.length;
    i = 0;
    while (i < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      i++;
    }
    return result;
  };
  return KDCore.makeId = function() {
    return KDCore.makeid(...arguments);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var SDK;
  //?[DEPRECATED]
  // * SDK
  //------------------------------------------------------------------------------
  SDK = function() {
    throw new Error('This is a static class');
  };
  SDK.rand = function(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
  };
  SDK.setConstantToObject = function(object, constantName, constantValue) {
    object[constantName] = constantValue;
    if (typeof object[constantName] === 'object') {
      Object.freeze(object[constantName]);
    }
    Object.defineProperty(object, constantName, {
      writable: false
    });
  };
  SDK.convertBitmapToBase64Data = function(bitmap) {
    return bitmap._canvas.toDataURL('image/png');
  };
  SDK.times = function(times, method) {
    var i, results;
    i = 0;
    results = [];
    while (i < times) {
      method(i);
      results.push(i++);
    }
    return results;
  };
  SDK.toGlobalCoord = function(layer, coordSymbol = 'x') {
    var node, t;
    t = layer[coordSymbol];
    node = layer;
    while (node) {
      t -= node[coordSymbol];
      node = node.parent;
    }
    return (t * -1) + layer[coordSymbol];
  };
  SDK.canvasToLocalX = function(layer, x) {
    while (layer) {
      x -= layer.x;
      layer = layer.parent;
    }
    return x;
  };
  SDK.canvasToLocalY = function(layer, y) {
    while (layer) {
      y -= layer.y;
      layer = layer.parent;
    }
    return y;
  };
  SDK.isInt = function(n) {
    return Number(n) === n && n % 1 === 0;
  };
  SDK.isFloat = function(n) {
    return Number(n) === n && n % 1 !== 0;
  };
  SDK.checkSwitch = function(switchValue) {
    if (switchValue === 'A' || switchValue === 'B' || switchValue === 'C' || switchValue === 'D') {
      return true;
    }
    return false;
  };
  SDK.toNumber = function(string, none = 0) {
    var number;
    if (string == null) {
      return none;
    }
    number = Number(string);
    if (isNaN(number)) {
      return none;
    }
    return number;
  };
  SDK.isString = function(value) {
    return typeof value === "string";
  };
  SDK.isArray = function(value) {
    return Array.isArray(value);
  };
  //@[EXTEND]
  return KDCore.SDK = SDK;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var __alias_Bitmap_blt_kdCore, __alias_Bitmap_fillAll_kdCore;
  //@[ALIAS]
  __alias_Bitmap_fillAll_kdCore = Bitmap.prototype.fillAll;
  Bitmap.prototype.fillAll = function(color) {
    if (color instanceof KDCore.Color) {
      return this.fillRect(0, 0, this.width, this.height, color.CSS);
    } else {
      return __alias_Bitmap_fillAll_kdCore.call(this, color);
    }
  };
  //@[ALIAS]
  __alias_Bitmap_blt_kdCore = Bitmap.prototype.blt;
  Bitmap.prototype.blt = function(source, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (this._needModBltDWH > 0) {
      dh = dw = this._needModBltDWH;
      __alias_Bitmap_blt_kdCore.call(this, source, sx, sy, sw, sh, dx, dy, dw, dh);
      this._needModBltDWH = null;
    } else {
      __alias_Bitmap_blt_kdCore.call(this, ...arguments);
    }
  };
  Bitmap.prototype.drawIcon = function(x, y, icon, size = 32, noSmoth = false) {
    var bitmap;
    bitmap = null;
    if (icon instanceof Bitmap) {
      bitmap = icon;
    } else {
      bitmap = KDCore.BitmapSrc.LoadFromIconIndex(icon).bitmap;
    }
    this._context.imageSmoothingEnabled = !noSmoth;
    this.drawOnMe(bitmap, x, y, size, size);
    this._context.imageSmoothingEnabled = true;
  };
  Bitmap.prototype.drawOnMe = function(bitmap, x = 0, y = 0, sw = 0, sh = 0) {
    if (sw <= 0) {
      sw = bitmap.width;
    }
    if (sh <= 0) {
      sh = bitmap.height;
    }
    this.blt(bitmap, 0, 0, bitmap.width, bitmap.height, x, y, sw, sh);
  };
  Bitmap.prototype.drawInMe = function(bitmap) {
    return Bitmap.prototype.drawOnMe(bitmap, 0, 0, this.width, this.height);
  };
  return Bitmap.prototype.drawTextFull = function(text, position = 'center') {
    return this.drawText(text, 0, 0, this.width, this.height, position);
  };
});


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_CharacterBase.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_CharacterBase.prototype;
  // * Нахожусь ли Я в точке по диагонале (рядом), относительно char
  _.kdInDiagonalPointRelativeTo = function(char) {
    var e, x, y;
    try {
      if (char == null) {
        return false;
      }
      ({x, y} = char);
      if (x === this.x - 1 && ((y === this.y - 1) || (y === this.y + 1))) {
        return true; // * left up or down
      }
      if (x === this.x + 1 && (y === this.y - 1 || y === this.y + 1)) {
        return true; // * right up or down
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
})();

// ■ END Game_CharacterBase.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * В MZ нету данной функции, а она часто используется в моих плагинах
  if (!KDCore.isMZ()) {
    return;
  }
  //?[NEW] (from MV)
  return ImageManager.loadEmptyBitmap = function() {
    if (this._emptyBitmap != null) {
      return this._emptyBitmap;
    } else {
      return new Bitmap();
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var _input_onKeyDown, _input_onKeyUp, i, j, k, l;
  Input.KeyMapperPKD = {};
//Numbers
  for (i = j = 48; j <= 57; i = ++j) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i);
  }
//Letters Upper
  for (i = k = 65; k <= 90; i = ++k) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
//Letters Lower (for key code events)
  for (i = l = 97; l <= 122; i = ++l) {
    Input.KeyMapperPKD[i] = String.fromCharCode(i).toLowerCase();
  }
  
  //@[ALIAS]
  _input_onKeyDown = Input._onKeyDown;
  Input._onKeyDown = function(event) {
    _input_onKeyDown.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode);
  };
  //@[ALIAS]
  _input_onKeyUp = Input._onKeyUp;
  Input._onKeyUp = function(event) {
    _input_onKeyUp.call(this, event);
    if (Input.keyMapper[event.keyCode]) {
      return;
    }
    Input._setStateWithMapperPKD(event.keyCode, false);
  };
  //?NEW
  Input._setStateWithMapperPKD = function(keyCode, state = true) {
    var symbol;
    symbol = Input.KeyMapperPKD[keyCode];
    if (symbol != null) {
      return this._currentState[symbol] = state;
    }
  };
  //?NEW
  Input.isCancel = function() {
    return Input.isTriggered('cancel') || TouchInput.isCancelled();
  };
  //?NEW
  return TouchInput.toPoint = function() {
    return new KDCore.Point(TouchInput.x, TouchInput.y);
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  PluginManager.getPluginParametersByRoot = function(rootName) {
    var pluginParameters, property;
    for (property in this._parameters) {
      if (this._parameters.hasOwnProperty(property)) {
        pluginParameters = this._parameters[property];
        if (PluginManager.isPluginParametersContentKey(pluginParameters, rootName)) {
          return pluginParameters;
        }
      }
    }
    return PluginManager.parameters(rootName);
  };
  return PluginManager.isPluginParametersContentKey = function(pluginParameters, key) {
    return pluginParameters[key] != null;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ___Sprite_alias_Move_KDCORE_2;
  Sprite.prototype.moveToCenter = function(dx = 0, dy = 0) {
    return this.move(-this.bitmap.width / 2 + dx, -this.bitmap.height / 2 + dy);
  };
  Sprite.prototype.setStaticAnchor = function(floatX = 1, floatY = 1) {
    this.x -= Math.round(this.width * floatX);
    this.y -= Math.round(this.height * floatY);
  };
  Sprite.prototype.moveToParentCenter = function() {
    if (!this.parent) {
      return;
    }
    return this.move(this.parent.width / 2, this.parent.height / 2);
  };
  ___Sprite_alias_Move_KDCORE_2 = Sprite.prototype.move;
  Sprite.prototype.move = function(x, y) {
    if (x instanceof Array) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x[0], x[1]);
    } else if (x instanceof KDCore.Point || ((x != null ? x.x : void 0) != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x.x, x.y);
    } else if ((x != null) && (x._x != null)) {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x._x, x._y);
    } else {
      return ___Sprite_alias_Move_KDCORE_2.call(this, x, y);
    }
  };
  Sprite.prototype.isContainsPoint = function(point) {
    var rect, rx, ry;
    if (this.width === 0 || this.height === 0) {
      return false;
    }
    rx = KDCore.SDK.toGlobalCoord(this, 'x');
    ry = KDCore.SDK.toGlobalCoord(this, 'y');
    rect = this._getProperFullRect(rx, ry);
    return rect.contains(point.x, point.y);
  };
  // * Возвращает Rect с учётом Scale и Anchor спрайта
  Sprite.prototype._getProperFullRect = function(rx, ry) {
    var height, width, x, y;
    width = this.width * Math.abs(this.scale.x);
    height = this.height * Math.abs(this.scale.y);
    x = rx - this.anchor.x * width;
    y = ry - this.anchor.y * height;
    if (this.anchor.x === 0 && this.scale.x < 0) {
      x += this.width * this.scale.x;
    }
    if (this.anchor.y === 0 && this.scale.y < 0) {
      y += this.height * this.scale.y;
    }
    return new PIXI.Rectangle(x, y, width, height);
  };
  Sprite.prototype.fillAll = function(color) {
    if (color != null) {
      return this.bitmap.fillAll(color);
    } else {
      return this.fillAll(KDCore.Color.WHITE);
    }
  };
  return Sprite.prototype.removeFromParent = function() {
    if (this.parent != null) {
      return this.parent.removeChild(this);
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return TouchInput.toMapPoint = function() {
    return this.toPoint().convertToMap();
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  KDCore.Utils = KDCore.Utils || {};
  return (function() {
    var _;
    _ = KDCore.Utils;
    _.getJDataById = function(id, source) {
      var d, j, len;
      for (j = 0, len = source.length; j < len; j++) {
        d = source[j];
        if (d.id === id) {
          return d;
        }
      }
      return null;
    };
    _.hasMeta = function(symbol, obj) {
      return (obj != null) && (obj.meta != null) && (obj.meta[symbol] != null);
    };
    _.getValueFromMeta = function(symbol, obj) {
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      return obj.meta[symbol];
    };
    _.getNumberFromMeta = function(symbol, obj) {
      var value;
      if (!_.hasMeta(symbol, obj)) {
        return null;
      }
      if (obj.meta[symbol] === true) {
        return 0;
      } else {
        value = KDCore.SDK.toNumber(obj.meta[symbol], 0);
      }
      return value;
    };
    _.isSceneMap = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Map;
      } catch (error) {
        return false;
      }
    };
    _.isMapScene = function() {
      return this.isSceneMap();
    };
    _.isSceneBattle = function() {
      try {
        return !SceneManager.isSceneChanging() && SceneManager._scene instanceof Scene_Battle;
      } catch (error) {
        return false;
      }
    };
    _.isBattleScene = function() {
      return this.isSceneBattle();
    };
    _.getEventCommentValue = function(commentCode, list) {
      var comment, e, i, item;
      try {
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                return comment;
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return null;
    };
    _.getEventCommentValueArray = function(commentCode, list) {
      var comment, comments, e, i, item;
      try {
        comments = [];
        if (list && list.length > 1) {
          i = 0;
          while (i < list.length) {
            item = list[i++];
            if (!item) {
              continue;
            }
            if (item.code === 108) {
              comment = item.parameters[0];
              if (comment.contains(commentCode)) {
                comments.push(comment);
              }
            }
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
      }
      return comments;
    };
    _.getPositionPointFromJSON = function(jsonSettings) {
      return _.convertPositionPointFromJSON(jsonSettings.position);
    };
    _.convertPositionPointFromJSON = function(position) {
      var e, x, y;
      try {
        x = position[0];
        y = position[1];
        if (!KDCore.SDK.isInt(x)) {
          x = eval(x);
        }
        if (!KDCore.SDK.isInt(y)) {
          y = eval(y);
        }
        return new KDCore.Point(x, y);
      } catch (error) {
        e = error;
        console.warn('Utils.getPositionPointFromJSON', e);
        return KDCore.Point.Empty;
      }
    };
    _.jsonPos = function(jsonPosition) {
      return _.convertPositionPointFromJSON(jsonPosition);
    };
    _.jsonPosXY = function(jsonPosition) {
      var e, x, y;
      try {
        ({x, y} = jsonPosition);
        return new KDCore.Point(eval(x), eval(y));
      } catch (error) {
        e = error;
        console.warn('Utils.jsonPosXY', e);
        return KDCore.Point.Empty;
      }
    };
    _.getVar = function(id) {
      return $gameVariables.value(id);
    };
    _.setVar = function(id, value) {
      return $gameVariables.setValue(id, value);
    };
    _.addToVar = function(id, value) {
      var prevVal;
      prevVal = _.getVar(id);
      return _.setVar(id, prevVal + value);
    };
    _.playSE = function(seFileName, pitch = 100, volume = 100) {
      var sound;
      if (seFileName == null) {
        return;
      }
      if (seFileName === "") {
        return;
      }
      sound = {
        name: seFileName,
        pan: 0,
        pitch: pitch,
        volume: volume
      };
      AudioManager.playStaticSe(sound);
    };
    _.getItemTypeId = function(item) {
      if (DataManager.isWeapon(item)) {
        return 1;
      } else if (DataManager.isArmor(item)) {
        return 2;
      }
      return 0;
    };
    _.getItemByType = function(itemId, typeId) {
      var data, e;
      try {
        if ((typeId != null) && !isFinite(typeId) && KDCore.SDK.isString(typeId) && String.any(typeId)) {
          if (typeId[0] === "w") {
            typeId = 1;
          } else if (typeId[0] === "a") {
            typeId = 2;
          } else {
            typeId = 0;
          }
        }
        data = [$dataItems, $dataWeapons, $dataArmors];
        return data[typeId][itemId];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    _.loadFont = function(name) {
      if (typeof FontManager === "undefined" || FontManager === null) {
        return;
      }
      if (String.isNullOrEmpty(name)) {
        return;
      }
      if (FontManager._states[name] != null) {
        return;
      }
      FontManager.load(name, name + ".ttf");
    };
    _.convertTimeShort = function(seconds) {
      var e;
      try {
        if (seconds > 59) {
          return Math.floor(seconds / 60) + 'm';
        } else {
          return seconds;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        return seconds;
      }
    };
    _.isPointInScreen = function(point, margin = 10) {
      var maxH, maxW, screenMargin, x, y;
      ({x, y} = point);
      maxW = Graphics.width;
      maxH = Graphics.height;
      // * Граница от краёв экрана
      screenMargin = margin;
      if (x < screenMargin) {
        return false;
      }
      if (y < screenMargin) {
        return false;
      }
      if (x > (maxW - screenMargin)) {
        return false;
      }
      if (y > (maxH - screenMargin)) {
        return false;
      }
      return true;
    };
    // * Ассинхронная загрузка изображения, возвращает bitmap, когда загружен
    // * Пример использования loadImageAsync(a, b).then(метод)
    // в метод будет передан bitmap первым аргументом
    _.loadImageAsync = async function(folder, filename) {
      var promise;
      promise = new Promise(function(resolve, reject) {
        var b;
        b = ImageManager.loadBitmap("img/" + folder + "/", filename);
        return b.addLoadListener(function() {
          return resolve(b);
        });
      });
      return (await promise);
    };
    // * Преобразовать расширенное значение
    // * Значение может быть X -> X
    // * "X" -> X (цифра)
    // * "X,Y,Z,..." -> [X, Y, Z]
    // * "[X, Y, Z,...]" -> [X, Y, Z]
    // * "X|V" -> из переменной X
    // * [Y] -> случайное число из массива (рекурсивно)
    //@[2.8.1] since
    _.getEValue = function(value) {
      var e, items, randomValue, variableId;
      try {
        if (value == null) {
          return null;
        }
        if (KDCore.SDK.isString(value)) {
          if (isFinite(value)) { // * Число представленно строкой
            return Number(value);
          }
          // * Массив представлен строкой (может быть без квадратных скобок)
          if (value.contains(',') || (value.contains("[") && value.contains("]"))) {
            value = value.replace("[", "");
            value = value.replace("]", "");
            // * Преобразуем в число или строку (например если extended |V)
            items = value.split(",").map(function(item) {
              var itemT;
              itemT = item.trim();
              if (isFinite(itemT)) {
                return Number(itemT);
              } else {
                return itemT;
              }
            });
            // * Вызываем снова эту функцию, но уже с массивом
            return KDCore.Utils.getEValue(items);
          }
          if (value.contains("|V")) {
            variableId = parseInt(value);
            return $gameVariables.value(variableId);
          }
          return value; // * Просто значение в итоге
        } else if (KDCore.SDK.isArray(value)) {
          randomValue = value.sample();
          return KDCore.Utils.getEValue(randomValue);
        } else {
          return value;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return value;
      }
    };
    //@[2.8.2] since
    _.isChanceIsGood = function(chance) {
      var e;
      try {
        if (chance > 1) {
          chance /= 100;
        }
        return chance > Math.random();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[2.8.2] since
    //KEY:w:3:1:50 , KEY:i:10:2:1|V
    //OUTPUT: [GameItem, COUNT]
    _.parseItemFromConditionStr = function(conditionLine) {
      var amount, e, itemChance, itemId, parts, typeId;
      try {
        if (!conditionLine.contains(":")) {
          return null;
        }
        parts = conditionLine.split(":");
        typeId = parts[1];
        itemId = KDCore.Utils.getEValue(parts[2]);
        amount = KDCore.Utils.getEValue(parts[3]);
        if (amount <= 0) {
          return null;
        }
        try {
          itemChance = String.any(parts[4]) ? parts[4] : 100;
          itemChance = KDCore.Utils.getEValue(itemChance) / 100;
        } catch (error) {
          e = error;
          KDCore.warning(e);
          itemChance = 0;
        }
        if (itemChance <= 0) {
          return null;
        }
        if (KDCore.Utils.isChanceIsGood(itemChance)) {
          return [KDCore.Utils.getItemByType(itemId, typeId), amount];
        } else {
          return null;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    //@[3.2.1] since
    _.isValidCE = function(commonEventId) {
      var e;
      try {
        return commonEventId > 0 && ($dataCommonEvents[commonEventId] != null);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    //@[3.2.1] since
    _.startCE = function(commonEventId) {
      var e;
      try {
        if (this.isValidCE(commonEventId)) {
          return $gameTemp.reserveCommonEvent(commonEventId);
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    //@[3.2.1] since
    _.checkSwitch = function(value) {
      if (value == null) {
        return false;
      }
      if (isFinite(value)) {
        return false;
      }
      return KDCore.SDK.checkSwitch(value);
    };
    //@[3.2.1] since
    // * Вызвать с задержкой в time миллисекунд
    // * Не забываем про bind
    _.callDelayed = function(method, time = 1) {
      var e;
      try {
        if (method == null) {
          return;
        }
        setTimeout((function() {
          var e;
          try {
            return method();
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        }), time);
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
    };
    //@[3.2.1] since
    //<meta:1,2,3,4> -> [1,2,3,4]
    _.getArrayOfNumbersFromMeta = function(symbol, obj) {
      var e, values;
      try {
        values = this.getArrayOfValuesFromMeta(symbol, obj);
        return values.map(function(v) {
          return Number(v);
        });
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [];
      }
    };
    //@[3.2.1] since
    //<meta:a,b,c> -> ["a", "b", "c"]
    //<meta:a> -> ["a"]
    _.getArrayOfValuesFromMeta = function(symbol, obj) {
      var e, items, values;
      try {
        values = this.getValueFromMeta(symbol, obj);
        if (String.any(values)) {
          if (values.contains(',')) {
            items = values.split(',');
            return items || [];
          } else {
            return [values];
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [];
      }
    };
    //@[3.2.1] since
    // * Когда содержит одинаковый набор ключей
    //<meta:value1>
    //<meta:value2>
    //...
    // -> [value1,value2,...]
    _.getArrayOfValuesOfSameMeta = function(symbol, obj) {
      var e, j, len, line, lines, result;
      try {
        if (!this.hasMeta(symbol, obj)) {
          return [];
        }
        lines = obj.note.split("\n").filter(function(l) {
          return l.contains(symbol);
        });
        result = [];
        for (j = 0, len = lines.length; j < len; j++) {
          line = lines[j];
          try {
            line = line.replace("<" + symbol + ":", "");
            line = line.replace(">", "");
            result.push(line);
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }
        return result;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return [];
    };
    //@[3.2.7] since
    _.getIndexIn2DArrayByIJ = function(row, col, cols) {
      return row * cols + col;
    };
    //@[3.2.7] since
    // * row - строка
    // * col - столбец
    _.getIJByIndexIn2DArray = function(index, cols) {
      var col, e, row;
      try {
        row = Math.floor(index / cols);
        col = index % cols;
        return [row, col];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return [0, 0];
      }
    };
    //@[3.2.7] since
    _.isSwitchIsTRUE = function(switchId) {
      var e;
      if (switchId == null) {
        return true;
      }
      if (switchId <= 0) {
        return true;
      }
      try {
        return $gameSwitches.value(switchId) === true;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return false;
    };
    //@[2.9.7] since
    // * Shrink number 100000 to "100k" and ect, returns STRING
    _.formatNumberToK = function(num) {
      var e;
      try {
        if (num >= 1000000000) {
          return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
        }
        if (num >= 1000000) {
          return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
          return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return num;
      }
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return Window_Base.prototype.drawFaceWithCustomSize = function(faceName, faceIndex, x, y, finalSize) {
    this.contents._needModBltDWH = finalSize;
    this.drawFace(faceName, faceIndex, x, y);
  };
});





// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__select, _;
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    //@[ALIAS]
    ALIAS__select = _.select;
    _.select = function(index) {
      var e;
      ALIAS__select.call(this, ...arguments);
      try {
        return this._pOnSelectionChanged(index);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._pOnSelectionChanged = function(newIndex) {
      var e;
      try {
        if (this._pkdLastSelectedIndex == null) {
          this._pkdLastSelectedIndex = newIndex;
          return this.pOnSelectionChanged();
        } else {
          if (this._pkdLastSelectedIndex !== newIndex) {
            this._pkdLastSelectedIndex = newIndex;
            return this.pOnSelectionChanged();
          }
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.safeSelect = function(index = 0) {
      var e;
      try {
        if (this.maxItems() > index) {
          return this.select(index);
        } else {
          return this.select(-1);
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    
    // * Called only when new (different) index is selected
    _.pOnSelectionChanged = function() {};
  })();
});

// ■ END Window_Selectable.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return (function() {    // * Input Extension: KDGamepad
    //------------------------------------------------------------------------------
    // * Поддержка расширенного управления через геймпад (свой модуль)
    var ALIAS___updateGamepadState, _;
    //@[DEFINES]
    _ = Input;
    // * Активировать работу модуля KDGamepad
    _.activateExtendedKDGamepad = function() {
      return _._kdIsGamepadExtended = true;
    };
    //@[ALIAS]
    ALIAS___updateGamepadState = _._updateGamepadState;
    _._updateGamepadState = function(gamepad) {
      if (Input._kdIsGamepadExtended === true) {
        KDGamepad.update();
      }
      if ((typeof $gameTemp !== "undefined" && $gameTemp !== null ? $gameTemp.__kdgpStopDefaultGamepad : void 0) === true) {
        return;
      }
      // * Режим перемещения без DPad
      // * В оригинале игрок также ходит по DPad клавишам, что может быть не удобно
      // * например при работе с инвентарём
      if (KDGamepad.isNoDPadMoving()) {
        if (KDGamepad.isDPadAny()) {
          Input.clear();
          return;
        }
      }
      ALIAS___updateGamepadState.call(this, gamepad);
    };
    window.KDGamepad = function() {
      return new Error("This is static class");
    };
    window.addEventListener("gamepadconnected", function(event) {
      var e;
      try {
        return KDGamepad.refresh();
      } catch (error) {
        // * Можно напрямую
        //unless KDGamepad.isExists()
        //    if event.gamepad? and event.gamepad.mapping == 'standard'
        //        KDGamepad.init(event.gamepad)
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    window.addEventListener("gamepaddisconnected", function(event) {
      var e;
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        if ((event.gamepad != null) && event.gamepad === KDGamepad.gamepad) {
          return KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return KDGamepad.stop();
      }
    });
    KDGamepad.stopDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = true;
    };
    KDGamepad.resumeDefaultGamepad = function() {
      $gameTemp.__kdgpStopDefaultGamepad = null;
    };
    // * Ссылка на геймпад
    KDGamepad.gamepad = null;
    // * Подключён ли Gamepad ?
    KDGamepad.isExists = function() {
      return KDGamepad.gamepad != null;
    };
    // * Инициализация состояния кнопок
    // * Этот метод вызывается автоматически из Refresh или при подключении Gamepad
    KDGamepad.init = function(gamepad) {
      KDGamepad.gamepad = gamepad;
      this._isActive = true;
      this.buttonNames = [
        'A', // 0
        'B', // 1
        'X', // 2
        'Y', // 3
        'LB', // 4
        'RB', // 5
        'LTrigger', // 6
        'RTrigger', // 7
        'Back', // 8
        'Start', // 9
        'LStick', // 10
        'RStick', // 11
        'dUp', // 12
        'dDown', // 13
        'dLeft', // 14
        'dRight' // 15
      ];
      this.reset();
    };
    // * Аналог Input.clear
    KDGamepad.clear = function() {
      return KDGamepad.reset();
    };
    // * Сбросить состояние кнопок
    KDGamepad.reset = function() {
      this.leftStick = {
        x: 0,
        y: 0
      };
      this.rightStick = {
        x: 0,
        y: 0
      };
      this.buttons = {};
      this.buttonsPressed = {};
      this.prevButtons = {};
    };
    
    // * Остановить учёт геймпада
    KDGamepad.stop = function() {
      KDGamepad.reset();
      KDGamepad.gamepad = null;
    };
    // * Функция проверки что нажата кнопка на геймпаде
    KDGamepad._buttonPressed = function(gamepad, index) {
      var b, e;
      try {
        if (!gamepad || !gamepad.buttons || index >= gamepad.buttons.length) {
          return false;
        }
        b = gamepad.buttons[index];
        if (b == null) {
          return false;
        }
        if (typeof b === 'object') {
          // * Можно упростить
          return b.pressed;
        }
        return b === 1.0;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return false;
      }
    };
    // * Каждый кадр (обновление состояний)
    KDGamepad.update = function() {
      var e, gp, i, isDown, j, len, name, ref;
      if (!KDGamepad.isActive()) {
        return;
      }
      KDGamepad.refresh();
      if (!KDGamepad.isExists()) {
        return;
      }
      try {
        gp = KDGamepad.gamepad;
        ref = this.buttonNames;
        // * Проверка состояний кнопок
        for (i = j = 0, len = ref.length; j < len; i = ++j) {
          name = ref[i];
          this.buttons[name] = false;
          isDown = KDGamepad._buttonPressed(gp, i);
          if (isDown === true) {
            this.prevButtons[name] = true;
          } else {
            // * Срабатываение только при нажал - отпустил
            if (this.prevButtons[name] === true) {
              this.buttons[name] = true;
              this.prevButtons[name] = false;
            }
          }
        }
        // * Проверка стиков
        this.leftStick.x = gp.axes[0];
        this.leftStick.y = gp.axes[1];
        this.rightStick.x = gp.axes[2];
        this.rightStick.y = gp.axes[3];
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Обновить и проверить состояние Gamepad
    // * Надо каждый раз это вызывать
    KDGamepad.refresh = function() {
      var e, gamepads, gp, i, isGamepadRefreshed, j, ref;
      try {
        isGamepadRefreshed = false;
        if (navigator.getGamepads) {
          gamepads = navigator.getGamepads();
        } else if (navigator.webkitGetGamepads) {
          gamepads = navigator.webkitGetGamepads();
        }
        if (gamepads != null) {
          for (i = j = 0, ref = gamepads.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
            gp = gamepads[i];
            if ((gp != null) && gp.mapping === 'standard') {
              isGamepadRefreshed = true;
              if (KDGamepad.buttonNames != null) {
                KDGamepad.gamepad = gp;
              } else {
                KDGamepad.init(gp);
              }
              break;
            }
          }
        }
        if (!isGamepadRefreshed) {
          // * Если не был найден не один gamepad - отключаем систему
          KDGamepad.stop();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
        KDGamepad.stop();
      }
    };
    // * Любое нажатие кнопки
    KDGamepad.isKeyAny = function(name) {
      return KDGamepad.isKey(name) || KDGamepad.isKeyPressed(name);
    };
    // * Нажата ли кнопка (trigger нажал - отпустил)
    KDGamepad.isKey = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.buttons[name] === true;
    };
    // * Нажата ли кнопка (continues зажата)
    KDGamepad.isKeyPressed = function(name) {
      if (!KDGamepad.isExists()) {
        return false;
      }
      if (this.buttons == null) {
        return false;
      }
      return this.prevButtons[name] === true;
    };
    KDGamepad.isDPadAny = function() {
      return KDGamepad.isKeyAny("dLeft") || KDGamepad.isKeyAny("dRight") || KDGamepad.isKeyAny("dUp") || KDGamepad.isKeyAny("dDown");
    };
    KDGamepad.isActive = function() {
      return this._isActive === true;
    };
    // * Временно отключить обработку KDGamepad
    KDGamepad.setActive = function(_isActive) {
      this._isActive = _isActive;
      if (KDGamepad.isActive()) {
        KDGamepad.refresh();
      } else {
        KDGamepad.stop();
      }
    };
    // * Отключить перемещение игрока на DPad
    KDGamepad.setNoDPadMovingMode = function(_noDpadMoving) {
      this._noDpadMoving = _noDpadMoving;
    };
    return KDGamepad.isNoDPadMoving = function() {
      return this._noDpadMoving === true;
    };
  })();
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var BitmapSrc;
  BitmapSrc = (function() {
    //?[DEPRECATED]
    class BitmapSrc {
      constructor() {
        this.bitmap = null;
      }

      static LoadFromIconIndex(iconIndex) {
        var bs, icon_bitmap, iconset, ph, pw, sx, sy;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[iconIndex] == null) {
          iconset = ImageManager.loadSystem('IconSet');
          if (KDCore.isMV()) {
            pw = Window_Base._iconWidth;
            ph = Window_Base._iconHeight;
          } else {
            pw = ImageManager.iconWidth;
            ph = ImageManager.iconHeight;
          }
          sx = iconIndex % 16 * pw;
          sy = Math.floor(iconIndex / 16) * ph;
          icon_bitmap = new Bitmap(pw, ph);
          icon_bitmap.addLoadListener(function() {
            icon_bitmap.blt(iconset, sx, sy, pw, ph, 0, 0);
          });
          BitmapSrc.CACHE[iconIndex] = icon_bitmap;
        }
        bs.bitmap = BitmapSrc.CACHE[iconIndex];
        return bs;
      }

      static LoadFromImageFolder(filename) {
        var bs;
        bs = new BitmapSrc();
        bs.bitmap = ImageManager.loadPicture(filename);
        return bs;
      }

      static LoadFromBase64(data, name) {
        var bs;
        bs = new BitmapSrc();
        if (name != null) {
          if (BitmapSrc.CACHE[name] != null) {
            bs.bitmap = BitmapSrc.CACHE[name];
          } else {
            BitmapSrc.CACHE[name] = Bitmap.load(data);
            bs.bitmap = BitmapSrc.CACHE[name];
          }
        } else {
          bs.bitmap = Bitmap.load(data);
        }
        return bs;
      }

      static LoadFromMemory(symbol) {
        var bs;
        bs = new BitmapSrc();
        if (BitmapSrc.CACHE[symbol] != null) {
          bs.bitmap = BitmapSrc.CACHE[symbol];
        } else {
          bs.bitmap = ImageManager.loadEmptyBitmap();
        }
        return bs;
      }

    };

    BitmapSrc.CACHE = {};

    return BitmapSrc;

  }).call(this);
  //@[EXTEND]
  return KDCore.BitmapSrc = BitmapSrc;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Changer;
  // * Класс который может плавно изменять какой-либо параметр
  // * Работает в стиле chain методов

    // * ------------------ ПРИМЕР ----------------------------------

    // * Меняем прозрачность 4 раза, туда-сюда, затем выводим done в консоль

    //@changer = new AA.Changer(someSprite)
  //@changer.change('opacity').from(255)
  //            .to(0).step(5).speed(1).delay(30).repeat(4).reverse()
  //            .start().done(() -> console.log('done'))
  //@changer.update()

    // * -------------------------------------------------------------
  Changer = class Changer {
    constructor(obj) {
      this.obj = obj;
      // * Количество кадров, в которые будет обновление
      this._field = null; // * название поля
      this._speed = 1; // * frames
      this._step = 1; // * шаг изменения значения
      this._from = 0; // * Начальное значение
      this._to = 0; // * Конечное значение
      this._thread = null;
      this._orienation = true; // * Направление + или - step (true = +)
      this._delay = 0; // * Задержка старта
      this._changer = null; // * Ссылка на следующий changer
      this._isRepeat = false; // * Надо ли поторить себя снова
      this._onDoneMethod = null; // * Метод будет выполнен в конце (при завершении)
      this._isPrepared = false; // * Элемента был подготовлен (установлено значение from)
    }

    start() {
      if (this._field == null) {
        return;
      }
      if (this._from === this._to) {
        return;
      }
      if (this._delay > 0) {
        this._delayThread = new KDCore.TimedUpdate(this._delay, this._startThread.bind(this));
        this._delayThread.once();
      } else {
        this._startThread();
      }
      return this;
    }

    isStarted() {
      return (this._thread != null) || (this._delayThread != null);
    }

    from(_from) {
      this._from = _from;
      return this;
    }

    to(_to) {
      this._to = _to;
      return this;
    }

    step(_step) {
      this._step = _step;
      return this;
    }

    speed(_speed) {
      this._speed = _speed;
      return this;
    }

    change(_field) {
      this._field = _field;
      return this;
    }

    // * Снова повторить (не совместим с then)
    // * Если ничего не указать, или <= 0 -> то бескончно
    repeat(_repeatCount = 0) {
      this._repeatCount = _repeatCount;
      if (this._repeatCount <= 0) {
        this._repeatCount = null;
      }
      this._isRepeat = true;
      this._changer = null;
      return this;
    }

    // * Снова повторить, но поменять местами to и from (работает только с repeat >= 2)
    reverse() {
      this._isReverse = true;
      return this;
    }

    isDone() {
      if (!this._isPrepared) {
        // * Чтобы не было выхода пока ждёт Delay
        return false;
      }
      // * Если от 255 до 0 (например)
      if (this._orienation === false) {
        // * То может быть меньше нуля (т.к. @step динамический)
        return this.value() <= this._to;
      } else {
        return this.value() >= this._to;
      }
    }

    value() {
      return this.obj[this._field];
    }

    stop() {
      this._thread = null;
      this._delayThread = null;
      if (this._changer == null) {
        // * Если есть связанный Changer, то не выполняем метод завршения
        return this._callDoneMethod();
      }
    }

    // * При ожидании, значения устанавливаются не сразу
    delay(_delay) {
      this._delay = _delay;
      return this;
    }

    // * Выполнить другой Changer после этого
    // * Не совместим с Repeat
    // * НЕЛЬЗЯ зацикливать, не будет работать
    // * Соединённый не надо обновлять вне, он обновляется в этом
    then(_changer) {
      this._changer = _changer;
      this._isRepeat = false;
      return this;
    }

    // * Этот метод будт выполнене в конце
    done(_onDoneMethod) {
      this._onDoneMethod = _onDoneMethod;
      return this;
    }

    // * Шаг можно выполнить и в ручную
    makeStep() {
      if (!this.isStarted()) {
        this._prepare();
      }
      this._makeStep();
      return this;
    }

    update() {
      var ref;
      if (this.isStarted()) {
        if (this._delay > 0) {
          if ((ref = this._delayThread) != null) {
            ref.update();
          }
        }
        if (this._thread != null) {
          this._updateMainThread();
        }
      } else {
        // * Если хоть раз был запущен
        if (this._isBeenStarted === true) {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
        }
      }
    }

    static CreateForOpacityUp(sprite, step = 35, onDone = null, isAutoStart = true) {
      var changer;
      changer = new Changer(sprite);
      changer.change('opacity').from(0).to(255).step(step);
      changer.done(function() {
        sprite.opacity = 255;
        if (onDone != null) {
          return onDone();
        }
      });
      if (isAutoStart) {
        changer.start();
      }
      return changer;
    }

    static CreateForOpacityDown(sprite, step = 35, onDone = null, isAutoStart = true) {
      var changer;
      changer = new Changer(sprite);
      changer.change('opacity').from(sprite.opacity).to(0).step(step);
      changer.done(function() {
        sprite.opacity = 0;
        if (onDone != null) {
          return onDone();
        }
      });
      if (isAutoStart) {
        changer.start();
      }
      return changer;
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Changer.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Changer.prototype;
    _._prepare = function() {
      if (this._field == null) {
        return;
      }
      this._orienation = this._from < this._to;
      if (!this._orienation) {
        this._step *= -1;
      }
      // * Устанавливаем начальное значение
      this.obj[this._field] = this._from;
      this._isPrepared = true;
    };
    _._makeStep = function() {
      var value;
      if (this.isDone()) {
        return;
      }
      value = this.value();
      value += this._step;
      this.obj[this._field] = value;
    };
    _._startThread = function() {
      this._prepare();
      if (this.isDone()) {
        return;
      }
      this._thread = new KDCore.TimedUpdate(this._speed, this._makeStep.bind(this));
      return this._isBeenStarted = true;
    };
    _._updateChainedChanger = function() {
      if (this._changer.isStarted()) {
        this._changer.update();
        if (this._changer.isDone()) {
          this._callDoneMethod();
          this._changer.stop();
          return this._changer = null;
        }
      } else {
        return this._changer.start();
      }
    };
    _._restart = function() {
      if (!this._isCanRepeatMore()) {
        return;
      }
      if (this._repeatCount == null) {
        // * Если указано! число повторений, то onDone метод не вызываем
        this._callDoneMethod();
      }
      if (this._isReverse === true) {
        this._swapFromTo();
      }
      this._prepare();
      return this.start();
    };
    _._swapFromTo = function() {
      var t;
      t = this._from;
      this._from = this._to;
      this._to = t;
      // * Инвентируем число step
      this._step *= -1;
    };
    _._callDoneMethod = function() {
      if (this._onDoneMethod != null) {
        return this._onDoneMethod();
      }
    };
    _._isCanRepeatMore = function() {
      if (this._repeatCount == null) {
        return true;
      }
      this._repeatCount--;
      if (this._repeatCount <= 0) {
        this.stop();
        return false;
      }
      return true;
    };
    _._updateMainThread = function() {
      this._thread.update();
      if (this.isDone()) {
        if (this._isRepeat === true) {
          this._restart();
        } else {
          if (this._changer != null) {
            this._updateChainedChanger();
          }
          this.stop();
        }
      }
    };
  })();
  // ■ END Changer.coffee
  //---------------------------------------------------------------------------

  //@[EXTEND]
  return KDCore.Changer = Changer;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color;
  Color = (function() {
    class Color {
      constructor(r1 = 255, g1 = 255, b1 = 255, a1 = 255) {
        this.r = r1;
        this.g = g1;
        this.b = b1;
        this.a = a1;
      }

      getLightestColor(lightLevel) {
        var bf, newColor, p;
        bf = 0.3 * this.R + 0.59 * this.G + 0.11 * this.B;
        p = 0;
        newColor = [0, 0, 0, 0];
        if (bf - lightLevel >= 0) {
          if (bf >= 0) {
            p = Math.abs(bf - lightLevel) / lightLevel;
          }
          newColor = this.ARR.map(function(c) {
            return c - (p * c);
          });
        } else {
          if (bf >= 0) {
            p = (lightLevel - bf) / (255 - bf);
          }
          newColor = this.ARR.map(function(c) {
            return [(255 - c) * p + c, 255].min();
          });
        }
        return new Color(newColor[0], newColor[1], newColor[2], newColor[3]);
      }

      clone() {
        return this.reAlpha(this.a);
      }

      reAlpha(newAlpha) {
        return new Color(this.r, this.g, this.b, newAlpha || 255);
      }

      static AddConstantColor(name, color) {
        color.toHex();
        color.toArray();
        color.toCSS();
        KDCore.SDK.setConstantToObject(Color, name, color);
      }

      toHex() {
        var b, g, r;
        if (this._colorHex != null) {
          return this._colorHex;
        }
        r = Math.floor(this.r).toString(16).padZero(2);
        g = Math.floor(this.g).toString(16).padZero(2);
        b = Math.floor(this.b).toString(16).padZero(2);
        return this._colorHex = '#' + r + g + b;
      }

      toArray() {
        if (this._colorArray != null) {
          return this._colorArray;
        }
        return this._colorArray = [this.r, this.g, this.b, this.a];
      }

      toCSS() {
        var na, nb, ng, nr;
        if (this._colorCss != null) {
          return this._colorCss;
        }
        nr = Math.round(this.r);
        ng = Math.round(this.g);
        nb = Math.round(this.b);
        na = this.a / 255;
        return this._colorCss = `rgba(${nr},${ng},${nb},${na})`;
      }

      toNumber() {
        return Number(this.toHex().replace("#", "0x"));
      }

      static Random() {
        var a, b, c;
        a = KDCore.SDK.rand(1, 254);
        b = KDCore.SDK.rand(1, 254);
        c = KDCore.SDK.rand(1, 254);
        return new Color(a, b, c, 255);
      }

      static FromHex(hexString) {
        var color, result;
        result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexString);
        color = null;
        if (result != null) {
          color = {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
          };
        }
        if (color != null) {
          return new Color(color.r, color.g, color.b, 255);
        } else {
          return Color.NONE;
        }
      }

    };

    Object.defineProperties(Color.prototype, {
      R: {
        get: function() {
          return this.r;
        },
        configurable: true
      },
      G: {
        get: function() {
          return this.g;
        },
        configurable: true
      },
      B: {
        get: function() {
          return this.b;
        },
        configurable: true
      },
      A: {
        get: function() {
          return this.a;
        },
        configurable: true
      },
      ARR: {
        get: function() {
          return this.toArray();
        },
        configurable: true
      },
      CSS: {
        get: function() {
          return this.toCSS();
        },
        configurable: true
      },
      HEX: {
        get: function() {
          return this.toHex();
        },
        configurable: true
      },
      OX: {
        get: function() {
          return this.toNumber();
        },
        configurable: true
      }
    });

    Color.AddConstantColor('NONE', new Color(0, 0, 0, 0));

    Color.AddConstantColor('BLACK', new Color(0, 0, 0, 255));

    Color.AddConstantColor('WHITE', new Color(255, 255, 255, 255));

    Color.AddConstantColor('RED', new Color(255, 0, 0, 255));

    Color.AddConstantColor('GREEN', new Color(0, 255, 0, 255));

    Color.AddConstantColor('BLUE', new Color(0, 0, 255, 255));

    Color.AddConstantColor('AQUA', new Color(128, 255, 255, 255));

    Color.AddConstantColor('MAGENTA', new Color(128, 0, 128, 255));

    Color.AddConstantColor('YELLOW', new Color(255, 255, 0, 255));

    Color.AddConstantColor('ORANGE', new Color(255, 128, 0, 255));

    return Color;

  }).call(this);
  //@[EXTEND]
  return KDCore.Color = Color;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Color, DevLog, __TMP_LOGS__;
  Color = KDCore.Color;
  __TMP_LOGS__ = [];
  DevLog = class DevLog {
    constructor(prefix = "") {
      this.prefix = prefix;
      this._isShow = typeof DEV !== 'undefined';
      this._color = Color.BLACK;
      this._backColor = Color.WHITE;
      __TMP_LOGS__.push(this);
    }

    on() {
      this._isShow = true;
      return this;
    }

    off() {
      this._isShow = false;
      return this;
    }

    applyRandomColors() {
      this.applyRandomWithoutBackgroundColors();
      this.setBackColor(Color.Random());
      return this;
    }

    applyRandomWithoutBackgroundColors() {
      this.setColor(Color.Random());
      return this;
    }

    setColor(color) {
      this._color = color;
      return this;
    }

    setBackColor(backColor) {
      this._backColor = backColor;
      return this;
    }

    applyLibraryColors() {
      this.setColors(new Color(22, 120, 138, 0), Color.BLACK);
      return this;
    }

    setColors(color, backColor) {
      this.setColor(color);
      this.setBackColor(backColor);
      return this;
    }

    applyExtensionColors() {
      this.setColors(new Color(22, 143, 137, 0), Color.BLACK.getLightestColor(60));
      return this;
    }

    applyWarningColors() {
      this.setColors(Color.ORANGE, Color.BLACK.getLightestColor(100));
      return this;
    }

    p(text) {
      if (!this._isShow) {
        return;
      }
      if (text == null) {
        console.log("");
      }
      this._printText(text);
    }

    _printText(text) {
      text = this.prefix + " : " + text;
      if (this._isUsingColor()) {
        return this._printTextWithColors(text);
      } else {
        return console.log(text);
      }
    }

    _isUsingColor() {
      return this._color !== Color.BLACK || this._backColor !== Color.WHITE;
    }

    _printTextWithColors(text) {
      var args;
      args = ['%c' + text, `color: ${this._color.HEX} ; background: ${this._backColor.HEX};`];
      return window.console.log.apply(console, args);
    }

    static CreateForLib(library) {
      var dlog;
      dlog = new DevLog(library.name);
      dlog.applyLibraryColors();
      return dlog;
    }

    static EnableAllLogs() {
      return __TMP_LOGS__.forEach(function(log) {
        return log.on();
      });
    }

  };
  //@[EXTEND]
  return KDCore.DevLog = DevLog;
});


// Generated by CoffeeScript 2.6.1
// * Класс для глобального события игры (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.GEvent = class GEvent {
    constructor(name) {
      this.name = name;
      this.clear();
    }

    addListener(listener, isSingle = false) {
      if (listener == null) {
        return;
      }
      if (isSingle === true) {
        this.listeners = [listener];
      } else {
        this.listeners.push(listener);
      }
    }

    removeListener(listener) {
      if (listener == null) {
        return;
      }
      return this.listener.delete(listener);
    }

    call() {
      var i, l, len, ref;
      ref = this.listeners;
      for (i = 0, len = ref.length; i < len; i++) {
        l = ref[i];
        l();
      }
    }

    clear() {
      return this.listeners = [];
    }

  };
});


// Generated by CoffeeScript 2.6.1
// * Менеджер для управления глобальными событиями игры (GEvent) (НЕ события на карте)
KDCore.registerLibraryToLoad(function() {
  var GEventsManager;
  // * Данный менеджер глобальный, т.е. с ним работают ВСЕ плагины, которые его используют!
  GEventsManager = function() {};
  (function() {
    var _;
    _ = GEventsManager;
    // * Существует ли событие с данным именем
    _.isEventExists = function(gEventName) {
      return this._getEventByName(gEventName) != null;
    };
    // * Получить список всех зарегестрированных событий (имён)
    _.getAllEvents = function() {
      if (this.events == null) {
        return [];
      }
      return this.events.map(function(ev) {
        return ev.name;
      });
    };
    // * Зарегестрировать событие (используется только имя события)
    _.register = function(gEventName) {
      if (this.events == null) {
        this.events = [];
      }
      this.events.push(new KDCore.GEvent(gEventName));
    };
    // * Подписаться на событие (имя события) и слушатель
    // * если isSingle == true - то у события может быть только один исполнитель
    _.subscribeFor = function(evName, listener, isSingle = false) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.addListener(listener, isSingle) : void 0;
    };
    // * Подписаться на событие (уникально) для объекта
    // * Т.е. при вызове этого метода ещё раз, если объект
    // * уже подписан на событие, ничего не будет (без дубликатов)
    //? ВНИМАНИЕ ! Если объект подписался через subscribeForX, то
    // выполнив clear по данному evName, он уже не подпишится!
    _.subscribeForX = function(context, evName, listener) {
      var e, key;
      try {
        key = "__kdCoreGEvent_" + evName;
        if (context[key] == null) {
          this.subscribeFor(evName, listener);
          return context[key] = true;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Вызвать событие (по имени)
    _.call = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.call() : void 0;
    };
    _.clear = function(evName) {
      var ref;
      return (ref = this._getEventByName(evName)) != null ? ref.clear() : void 0;
    };
    _._getEventByName = function(name) {
      if (!this.events) {
        return null;
      }
      return this.events.find(function(ev) {
        return ev.name === name;
      });
    };
  })();
  //@[EXTEND]
  return KDCore.GEventsManager = GEventsManager;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.MapAnchorPoint = class MapAnchorPoint {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this._realX = this.x;
      this._realY = this.y;
    }

    shiftY() {
      return 0;
    }

    jumpHeight() {
      return 0;
    }

    scrolledX() {
      return Game_CharacterBase.prototype.scrolledX.call(this);
    }

    scrolledY() {
      return Game_CharacterBase.prototype.scrolledY.call(this);
    }

    screenX() {
      return Game_CharacterBase.prototype.screenX.call(this);
    }

    screenY() {
      return Game_CharacterBase.prototype.screenY.call(this);
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  //?[DEPRECATED]
  return KDCore.ParametersManager = class ParametersManager {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this._cache = {};
      this._parameters = PluginManager.getPluginParametersByRoot(this.pluginName);
    }

    isLoaded() {
      return (this._parameters != null) && this._parameters.hasOwnProperty(this.pluginName);
    }

    isHasParameter(name) {
      return this._parameters[name] != null;
    }

    getString(name) {
      return this._parameters[name];
    }

    convertField(object, fieldName) {
      var e;
      try {
        object[fieldName] = JSON.parse(object[fieldName] || 'false');
      } catch (error) {
        e = error;
        console.error('Error while convert field ' + e.name);
        object[fieldName] = false;
      }
      return object;
    }

    convertImage(object, fieldName) {
      return object[fieldName] = this.loadImage(object[fieldName]);
    }

    loadImage(filename, smooth) {
      var e, path;
      try {
        if (filename) {
          path = filename.split('/');
          filename = path.last();
          path = path.first() + '/';
          return ImageManager.loadBitmap('img/' + path, filename, 0, smooth || true);
        } else {
          return ImageManager.loadEmptyBitmap();
        }
      } catch (error) {
        e = error;
        console.error(e);
        return ImageManager.loadEmptyBitmap();
      }
    }

    getFromCacheOrInit(name, func) {
      var object;
      if (!this.isInCache(name)) {
        if (func != null) {
          object = func.call(this);
          this.putInCache(name, object);
        }
      }
      return this.getFromCache(name);
    }

    isInCache(name) {
      return this._cache.hasOwnProperty(name);
    }

    putInCache(name, object) {
      return this._cache[name] = object;
    }

    getFromCache(name) {
      return this._cache[name];
    }

    getNumber(name) {
      var number;
      number = this.getObject(name);
      if (KDCore.SDK.isInt(number)) {
        return number;
      }
      return 0;
    }

    getObject(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || '{}');
      } else {
        return {};
      }
    }

    getBoolean(name) {
      if (this.isHasParameter(name)) {
        return JSON.parse(this.getString(name) || false);
      } else {
        return false;
      }
    }

    getBooleanFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getBooleanFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getNumberFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getNumberFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getStringFromCacheWithDefault(name, defaultValue) {
      if (this.isHasParameter(name)) {
        return this.getStringFromCache(name);
      } else {
        return defaultValue;
      }
    }

    getBooleanFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getBoolean(name);
      });
    }

    getNumberFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getNumber(name);
      });
    }

    getStringFromCache(name) {
      return this.getFromCacheOrInit(name, function() {
        return this.getString(name);
      });
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.ParamLoader = class ParamLoader {
    constructor(pluginName) {
      this.pluginName = pluginName;
      this.paramsRaw = PluginManager.getPluginParametersByRoot(this.pluginName);
      this.params = this.parseParameters(this.paramsRaw);
    }

    parseParameters(paramSet) {
      var clearKey, key, params, typeKey, value;
      params = {};
      for (key in paramSet) {
        value = paramSet[key];
        KDCore.__ppNameToParseNext = key;
        clearKey = this.parseKey(key);
        typeKey = this.parseKeyType(key);
        params[clearKey] = this.parseParamItem(typeKey, value);
      }
      return params;
    }

    parseKey(keyRaw) {
      return keyRaw.split(":")[0];
    }

    parseKeyType(keyRaw) {
      return keyRaw.split(":")[1];
    }

    writeDetailedError() {
      var e;
      try {
        if (!String.any(KDCore.__ppNameToParseNext)) {
          return;
        }
        return console.warn("Please, check Plugin Parameter " + KDCore.__ppNameToParseNext + " in plugin " + this.pluginName);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    }

    // * Проверка, загружены ли параметры плагина
    isLoaded() {
      return (this.paramsRaw != null) && this.paramsRaw.hasOwnProperty(this.pluginName);
    }

    // * Имя параметра без ключа
    isHasParameter(paramName) {
      return this.params[paramName] != null;
    }

    
      // * Возвращает значение параметра (def - по умолчанию, если не найден)
    getParam(paramName, def) {
      var value;
      if (this.isHasParameter(paramName)) {
        value = this.params[paramName];
        if (value != null) {
          return value;
        }
      }
      return def;
    }

    // * Данные ключи должны идти после названия параметра через :
    // * Пример: @param ShowDelay:int, @param TestBool:bool
    // * Текстовые параметры, которые надо вернуть как есть, можно без типа (text, file, combo, ...)
    parseParamItem(type, item) {
      var e;
      if (type == null) {
        return item;
      }
      try {
        switch (type) {
          case "int":
          case "i":
            return Number(item);
          case "intA":
            return this.parseArray(item, "int");
          case "bool":
          case "b":
          case "e":
            return eval(item);
          case "struct":
          case "s":
            return this.parseStruct(item);
          case "structA":
            return this.parseStructArray(item);
          case "str":
            return item;
          case "strA":
            return this.parseArray(item, "str");
          case "note":
            return this.parseNote(item);
          case "css":
            return item.toCss();
          case "color":
            return KDCore.Color.FromHex(item);
          case "json":
          case "j":
            return this.parseJson(item);
          case "jA":
            return this.parseArray(item, 'json');
          default:
            return item;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
        return item;
      }
    }

    parseArray(items, type) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseParamItem(type, p));
          } catch (error) {
            e = error;
            console.warn(e);
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return elements;
    }

    parseStruct(item) {
      var e, parsed;
      try {
        if (item == null) {
          return null;
        }
        if (!String.any(item)) {
          return null;
        }
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return this.parseParameters(parsed);
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return null;
    }

    parseStructArray(items) {
      var e, elements, i, len, p, parsed;
      try {
        elements = [];
        parsed = JsonEx.parse(items);
        for (i = 0, len = parsed.length; i < len; i++) {
          p = parsed[i];
          try {
            elements.push(this.parseStruct(p));
          } catch (error) {
            e = error;
            console.warn(e);
            this.writeDetailedError();
          }
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return elements;
    }

    parseNote(item) {
      var e, parsed;
      try {
        parsed = JsonEx.parse(item);
        if (parsed != null) {
          return parsed;
        }
      } catch (error) {
        e = error;
        console.warn(e);
        this.writeDetailedError();
      }
      return item;
    }

    parseJson(item) {
      var cx, e, element, elements, i, json, key, len, parsed, value;
      try {
        json = {};
        parsed = JsonEx.parse(item);
        elements = parsed.split('\n');
        for (i = 0, len = elements.length; i < len; i++) {
          element = elements[i];
          cx = "{" + element + "}";
          try {
            item = JsonEx.parse(cx);
            for (key in item) {
              value = item[key];
              json[key] = value;
            }
          } catch (error) {
            e = error;
            KDCore.warning("Parameter " + element + " have syntax errors, ignored");
          }
        }
        return json;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        this.writeDetailedError();
        return null; // * Чтобы default value был возвращён
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Point;
  Point = (function() {
    class Point {
      constructor(_x = 0, _y = 0) {
        this._x = _x;
        this._y = _y;
      }

      clone() {
        return new Point(this._x, this._y);
      }

      toString() {
        return "[" + this._x + " ; " + this._y + "]";
      }

      isSame(anotherPoint) {
        return this.x === anotherPoint.x && this.y === anotherPoint.y;
      }

      convertToCanvas() {
        return new Point(Graphics.pageToCanvasX(this._x), Graphics.pageToCanvasY(this._y));
      }

      convertToMap() {
        return new Point($gameMap.canvasToMapX(this._x), $gameMap.canvasToMapY(this._y));
      }

      convertToScreen() {
        return new Point(this.screenX(), this.screenY());
      }

      screenX() {
        var t, tw;
        t = $gameMap.adjustX(this._x);
        tw = $gameMap.tileWidth();
        return Math.round(t * tw + tw / 2);
      }

      screenY() {
        var t, th;
        t = $gameMap.adjustY(this._y);
        th = $gameMap.tileHeight();
        return Math.round(t * th + th);
      }

      round() {
        return new Point(Math.round(this._x), Math.round(this._y));
      }

      floor() {
        return new Point(Math.floor(this._x), Math.floor(this._y));
      }

      mapPointOnScreen() {
        var nx, ny;
        nx = (this._x * $gameMap.tileWidth()) - ($gameMap.displayX() * $gameMap.tileWidth());
        ny = (this._y * $gameMap.tileHeight()) - ($gameMap.displayY() * $gameMap.tileHeight());
        return new Point(nx, ny);
      }

      multiplyBy(val) {
        return new Point(this._x * val, this._y * val);
      }

      simple() {
        return new PIXI.Point(this.x, this.y);
      }

      delta(point) {
        var dx, dy;
        dx = point.x - this._x;
        dy = point.y - this._y;
        return new KDCore.Point(dx, dy);
      }

      static _getEmpty() {
        if (Point._emptyPoint == null) {
          Point._emptyPoint = new Point(0, 0);
        }
        return Point._emptyPoint;
      }

    };

    Object.defineProperties(Point.prototype, {
      x: {
        get: function() {
          return this._x;
        },
        configurable: true
      },
      y: {
        get: function() {
          return this._y;
        },
        configurable: true
      }
    });

    Object.defineProperties(Point, {
      Empty: {
        get: function() {
          return Point._getEmpty();
        },
        configurable: false
      }
    });

    Array.prototype.toPoint = function() {
      return new Point(this[0], this[1]);
    };

    Object.defineProperty(Array.prototype, "toPoint", {
      enumerable: false
    });

    Sprite.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    Game_CharacterBase.prototype.toPoint = function() {
      return new Point(this.x, this.y);
    };

    return Point;

  }).call(this);
  //@[EXTEND]
  return KDCore.Point = Point;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  return KDCore.Sprite = (function(superClass) {
    //@[AUTO EXTEND]
    class Sprite extends superClass {
      constructor() {
        super(...arguments);
        this.pHandledIndex = 0;
        return;
      }

      pIsSupportKeyboardHandle() {
        return false;
      }

      appear(step, delay = 0) {
        this.opacity = 0;
        this._opChanger = KDCore.Changer.CreateForOpacityUp(this, step, () => {
          this._opChanger = null;
          return this._updateOpChanger = function() {}; // * EMPTY
        }, false); // * Not autostart for Delay
        if (delay > 0) {
          this._opChanger.delay(delay);
        }
        this._opChanger.start();
        this._updateOpChanger = () => {
          var ref;
          return (ref = this._opChanger) != null ? ref.update() : void 0;
        };
      }

      disapper(step, delay = 0) {
        this._opChanger = KDCore.Changer.CreateForOpacityDown(this, step, () => {
          this._opChanger = null;
          return this._updateOpChanger = function() {}; // * EMPTY
        }, false); // * Not autostart for Delay
        if (delay > 0) {
          this._opChanger.delay(delay);
        }
        this._opChanger.start();
        this._updateOpChanger = () => {
          var ref;
          return (ref = this._opChanger) != null ? ref.update() : void 0;
        };
      }

      moveWithAnimation(dx, dy, duration = 30, easingType = 2) {
        var e;
        try {
          this._moveAnimationItem = new Game_Picture();
          this._moveAnimationItem._x = this.x;
          this._moveAnimationItem._y = this.y;
          this._moveAnimationItem.move(0, this.x + dx, this.y + dy, 1, 1, 255, 0, duration, easingType);
          this.updateMovingAnimation = this.updateMovingAnimationBody;
        } catch (error) {
          e = error;
          KDCore.warning(e);
        }
      }

      assignTooltip(content, params) {
        if (this._tooltip != null) {
          this.removeChild(this._tooltip);
        }
        this._tooltip = new KDCore.UI.Sprite_UITooltip(params);
        this._tooltip.addContent(content);
        this.updateTooltip = this.updateTooltipBody;
      }

      destroyTooltip() {
        if (this._tooltip == null) {
          return;
        }
        this.hideTooltip();
        this.removeChild(this._tooltip);
        this._tooltip = null;
        return this.updateTooltip = function() {}; // * EMPTY
      }

      showTooltip() {
        if (this._tooltip == null) {
          return;
        }
        // * Position 0, 0, becouse cursorRelative by default
        this._tooltip.activateTooltip(0, 0, this);
      }

      hideTooltip() {
        if (this._tooltip == null) {
          return;
        }
        this._tooltip.deactivateTooltip();
      }

      //@[DYNAMIC]
      updateTooltip() {} // * EMPTY

      updateTooltipBody() {
        if (this.isUnderMouse()) {
          if (this._tooltip.isTooltipActive()) {

          } else {
            if (this.isReady() && this.visible === true && this.opacity >= 255) {
              return this.showTooltip();
            }
          }
        } else {
          if (this._tooltip.isTooltipActive()) {
            return this.hideTooltip();
          }
        }
      }

      //@[DYNAMIC]
      updateMovingAnimation() {} // * EMPTY

      updateMovingAnimationBody() {
        var e;
        try {
          if (this._moveAnimationItem == null) {
            return;
          }
          this._moveAnimationItem.update();
          this.x = this._moveAnimationItem._x;
          this.y = this._moveAnimationItem._y;
          if (this._moveAnimationItem._duration <= 0) {
            this._moveAnimationItem = null;
            this.updateMovingAnimation = function() {};
          }
        } catch (error) {
          e = error;
          KDCore.warning(e);
          this.updateMovingAnimation = function() {};
        }
      }

      update() {
        super.update();
        this._updateOpChanger();
        this.updateTooltip();
        if (this.updateMovingAnimation != null) {
          this.updateMovingAnimation();
        }
        if (this.pIsHandlerActive()) {
          this._pHandleKeyboardInputs();
        }
      }

      //@[DYNAMIC]
      _updateOpChanger() {} // * EMPTY

      b() {
        return this.bitmap;
      }

      clear() {
        return this.bitmap.clear();
      }

      add() {
        return this.addChild(...arguments);
      }

      bNew(w, h) {
        if (h == null) {
          h = w;
        }
        return this.bitmap = new Bitmap(w, h);
      }

      bImg(filename, sourceFolder) {
        var getterFunc;
        getterFunc = function(filename) {
          return ImageManager.loadPicture(filename);
        };
        if (sourceFolder != null) {
          getterFunc = function(filename) {
            return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
          };
        }
        return this.bitmap = getterFunc(filename);
      }

      onReady(method) {
        if (method != null) {
          return this.bitmap.addLoadListener(method);
        }
      }

      drawText() {
        return this.bitmap.drawText(...arguments);
      }

      drawTextFull(text, position = "center") {
        if (this.textSettingsPosition != null) {
          position = this.textSettingsPosition;
        }
        return this.bitmap.drawTextFull(text, position);
      }

      //?DEPRECATED
      drawTextWithSettings(text) {
        this.clear();
        this.drawTextFull(text, this.textSettingsPosition);
      }

      //? x, y, icon, size
      drawIcon() {
        return this.bitmap.drawIcon(...arguments);
      }

      moveByJson(settings) {
        var pos;
        pos = KDCore.Utils.getPositionPointFromJSON(settings);
        return this.move(pos.x, pos.y);
      }

      applyTextSettingsByJson(sprite, settings) {
        this.applyTextSettingsByExtraSettings(sprite, settings.text);
      }

      applyTextSettingsByExtraSettings(sprite, s) {
        sprite.move(s.marginX, s.marginY);
        sprite.b().fontSize = s.fontSize;
        sprite.b().textColor = KDCore.Color.FromHex(s.textColor).CSS;
        sprite.b().outlineWidth = s.outlineWidth;
        if (s.outlineColor != null) {
          sprite.b().outlineColor = KDCore.Color.FromHex(s.outlineColor).CSS;
        }
        if (s.fontFace != null) {
          sprite.b().fontFace = s.fontFace;
        }
        sprite.b().fontItalic = s.fontItalic;
        sprite.visible = s.visible;
      }

      isReady() {
        var i, j, ref;
        if (this.bitmap != null) {
          if (!this.bitmap.isReady()) {
            return false;
          }
        }
        for (i = j = 0, ref = this.children.length; (0 <= ref ? j < ref : j > ref); i = 0 <= ref ? ++j : --j) {
          if (!this.children[i].bitmap.isReady()) {
            return false;
          }
        }
        return true;
      }

      isCheckAlpha() {
        return false;
      }

      inPosition(point) {
        var e, gx, gy, pixel, result, x, y;
        result = this.isContainsPoint(point);
        if (result && this.isCheckAlpha()) {
          try {
            ({x, y} = point);
            gx = KDCore.SDK.toGlobalCoord(this, 'x');
            gy = KDCore.SDK.toGlobalCoord(this, 'y');
            pixel = this.bitmap.getAlphaPixel(x - gx, y - gy);
            result = pixel > 100;
          } catch (error) {
            e = error;
            KDCore.warning(e);
            result = true; // * ignor Alpha if error
          }
        }
        return result;
      }

      isUnderMouse() {
        return this.inPosition(TouchInput);
      }

      // * Из параметров плагина
      applyFontParam(font) {
        var b;
        if (font == null) {
          return;
        }
        b = this.b();
        if (font.size != null) {
          b.fontSize = font.size;
        }
        if (!String.isNullOrEmpty(font.face)) {
          b.fontFace = font.face;
        }
        if (font.italic != null) {
          b.fontItalic = font.italic;
        }
      }

      applyOutlineParam(outline) {
        var b;
        if (outline == null) {
          return;
        }
        b = this.b();
        if (outline.width != null) {
          b.outlineWidth = outline.width;
        }
        if (!String.isNullOrEmpty(outline.color)) {
          b.outlineColor = outline.color;
        }
      }

      activateHandlerManagment() {
        var e;
        try {
          this.handleUpAction = this.selectPreviousHandlerItem;
          this.handleDownAction = this.selectNextHandlerItem;
          return this._handleManagerActive = true;
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      deactivateHandlerManagment() {
        var ref;
        this._handleManagerActive = false;
        this.handleUpAction = function() {}; // * EMPTY
        this.handleDownAction = function() {}; // * EMPTY
        if ((ref = $gameTemp.__pkdActiveKeyboardHandler) != null) {
          ref.pDeactivateHandler();
        }
        $gameTemp.__pkdActiveKeyboardHandler = null;
      }

      addChild(item) {
        var c, handlers;
        c = super.addChild(...arguments);
        if (item instanceof KDCore.Sprite && (item.pIsSupportKeyboardHandle != null) && item.pIsSupportKeyboardHandle()) {
          handlers = this._pGetAllHandlers();
          item.pHandledIndex = handlers.length - 1;
        }
        return c;
      }

      pIsAnyHandlerSelected() {
        return $gameTemp.__pkdActiveKeyboardHandler != null;
      }

      selectPreviousHandlerItem() {
        var e;
        try {
          if (!this.pIsAnyHandlerSelected()) {
            return this._trySelectHandler(0);
          } else {
            return this._trySelectHandler(this._selectedHandlerIndex() - 1);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _selectedHandlerIndex() {
        return $gameTemp.__pkdActiveKeyboardHandler.pHandledIndex;
      }

      _trySelectHandler(index) {
        var e, handlerItemToSelect;
        try {
          handlerItemToSelect = this._pGetAllHandlers().find(function(i) {
            return i.pHandledIndex === index;
          });
          if (handlerItemToSelect != null) {
            handlerItemToSelect.pActivateHandler();
          }
          return this._pOnHandled();
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _pGetAllHandlers() {
        return this.children.filter(function(i) {
          return i instanceof KDCore.Sprite && (i.pIsSupportKeyboardHandle != null) && i.pIsSupportKeyboardHandle();
        });
      }

      selectNextHandlerItem() {
        var e;
        try {
          if (!this.pIsAnyHandlerSelected()) {
            return this._trySelectHandler(0);
          } else {
            return this._trySelectHandler(this._selectedHandlerIndex() + 1);
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      activeItemFilterOptions() {
        return {
          distance: 15,
          outerStrength: 4
        };
      }

      pIsHandlerActive() {
        return this._handleManagerActive === true || this._handlerActive === true;
      }

      destroy() {
        if ($gameTemp.__pkdActiveKeyboardHandler === this) {
          $gameTemp.__pkdActiveKeyboardHandler = null;
        }
        return super.destroy();
      }

      _pOnHandled() {
        return Input.clear();
      }

      _pHandleKeyL() {
        var e;
        try {
          if (this.handleLeftAction != null) {
            this.handleLeftAction();
            return this._pOnHandled();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _pHandleKeyR() {
        var e;
        try {
          if (this.handleRightAction != null) {
            this.handleRightAction();
            return this._pOnHandled();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _pHandleKeyU() {
        var e;
        try {
          if (this.handleUpAction != null) {
            this.handleUpAction();
            return this._pOnHandled();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _pHandleKeyD() {
        var e;
        try {
          if (this.handleDownAction != null) {
            this.handleDownAction();
            return this._pOnHandled();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      _pHandleKeyOK() {
        var e;
        try {
          if (this.handleOKAction != null) {
            this.handleOKAction();
            return this._pOnHandled();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      pActivateHandler() {
        if (!this.pIsSupportKeyboardHandle()) {
          return;
        }
        if (($gameTemp.__pkdActiveKeyboardHandler != null) && $gameTemp.__pkdActiveKeyboardHandler !== this) {
          $gameTemp.__pkdActiveKeyboardHandler.pDeactivateHandler();
        }
        this._handlerActive = true;
        this._activateHandlerVisually();
        $gameTemp.__pkdActiveKeyboardHandler = this;
      }

      _activateHandlerVisually() {
        var e;
        try {
          //@filters = [new PIXI.filters.OutlineFilter(0.8, 0x99ff99, 0.5)]
          //@filters = [new PIXI.filters.GlowFilter(2, 0.8, 0, 0x09f9, 0.5)]
          return this.filters = [new PIXI.filters.GlowFilter(this.activeItemFilterOptions())];
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      pDeactivateHandler() {
        if ($gameTemp.__pkdActiveKeyboardHandler === this) {
          $gameTemp.__pkdActiveKeyboardHandler = null;
        }
        this._handlerActive = false;
        this.filters = [];
      }

      _pHandleKeyboardInputs() {
        var e;
        try {
          if (Input.isTriggered('left')) {
            return this._pHandleKeyL();
          } else if (Input.isTriggered('right')) {
            return this._pHandleKeyR();
          } else if (Input.isTriggered('up')) {
            return this._pHandleKeyU();
          } else if (Input.isTriggered('down')) {
            return this._pHandleKeyD();
          } else if (Input.isTriggered('ok')) {
            return this._pHandleKeyOK();
          }
        } catch (error) {
          e = error;
          return KDCore.warning(e);
        }
      }

      static FromImg(filename, sourceFolder) {
        var s;
        s = new KDCore.Sprite();
        s.bImg(filename, sourceFolder);
        return s;
      }

      static FromBitmap(w, h) {
        var s;
        s = new KDCore.Sprite();
        s.bNew(w, h);
        return s;
      }

      static FromTextSettings(settings) {
        var s;
        s = KDCore.Sprite.FromBitmap(settings.textBoxWidth, settings.textBoxHeight);
        s.applyTextSettingsByExtraSettings(s, settings);
        s.textSettingsPosition = settings.position;
        return s;
      }

      // * Загрузчик из параметров плагина (безопасный)
      static FromParams(pluginParams) {
        var e, h, margins, s, size, w;
        try {
          size = pluginParams.size;
          ({w, h} = size);
          try {
            if (String.any(w)) {
              if (isFinite(w)) {
                w = Number(w);
              } else {
                w = eval(w);
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            w = 100;
          }
          try {
            if (String.any(h)) {
              if (isFinite(h)) {
                h = Number(h);
              } else {
                h = eval(h);
              }
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            h = 100;
          }
          s = KDCore.Sprite.FromBitmap(w, h);
          s.textSettingsPosition = pluginParams.alignment;
          margins = pluginParams.margins;
          if (margins != null) {
            s.move(margins.x, margins.y);
          }
          s.applyFontParam(pluginParams.font);
          s.applyOutlineParam(pluginParams.outline);
          if (!String.isNullOrEmpty(pluginParams.textColor)) {
            s.b().textColor = pluginParams.textColor;
          }
          if (pluginParams.visible != null) {
            s.visible = pluginParams.visible;
          }
          return s;
        } catch (error) {
          e = error;
          console.warn('Something wrong with Text Settings!', e);
          return KDCore.Sprite.FromBitmap(60, 30);
        }
      }

    };

    return Sprite;

  }).call(this, Sprite);
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  //@[AUTO EXTEND]
  return KDCore.TimedUpdate = class TimedUpdate {
    constructor(interval, method) {
      this.interval = interval;
      this.method = method;
      this._timer = 0;
      this._once = false;
    }

    update() {
      if (this.interval == null) {
        return;
      }
      if (this._timer++ >= this.interval) {
        this.call();
        this._timer = 0;
        if (this._once === true) {
          return this.stop();
        }
      }
    }

    once() {
      return this._once = true;
    }

    onUpdate(method) {
      this.method = method;
    }

    stop() {
      return this.interval = null;
    }

    isAlive() {
      return this.interval != null;
    }

    // * Рандомизировать интервал @interval (-min, +max)
    applyTimeRange(min, max) {
      var value;
      if (!this.isAlive()) {
        return;
      }
      value = KDCore.SDK.rand(min, max);
      return this.interval += value;
    }

    call() {
      if (this.method != null) {
        return this.method();
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  
    // * Button (Sprite_XButton)

    //@[AUTO EXTEND]
  //?DEPRECATED
  return KDCore.Button = class Button extends Sprite {
    constructor() {
      super();
      this._mouseIn = false;
      this._touching = false;
      this._slowUpdateActive = false;
      this._localMode = false;
      this._images = [];
      this._checkAlpha = false;
      this._textSprite = null;
      this._textPosition = 0;
      this._override = false; // * TouchClick in game messages not work anymore if TRUE
      this._clickHandlers = [];
      this._manualHided = false;
      this._manualDisabled = false;
      this._condition = null; // * Условие для Visible
      this._condition2 = null; // * Условие для Enable \ Disable
      this._disabled = false;
      this._infoData = null;
      this._isNeedShowText = false;
      return;
    }

    isMouseInButton() {
      return this._mouseIn === true;
    }

    isActive() {
      return this.visible === true;
    }

    activateSlowUpdate() {
      return this._slowUpdateActive = true;
    }

    setLocalMode() {
      this._realX = this.x;
      this._realY = this.y;
      return this._localMode = true;
    }

    setAlphaMode() {
      return this._checkAlpha = true;
    }

    // * above, below
    setTextPosition(position) {
      return this._textPosition = position;
    }

    setHelpText(text, size) {
      return this._createText(text, size);
    }

    setInfoData(data) {
      return this._infoData = data;
    }

    setOverrideMode() {
      return this._override = true;
    }

    isOverride() {
      return this._override === true && this.isActive() && this.touchInButton();
    }

    isDisabled() {
      return this._disabled === true;
    }

    isEnabled() {
      return !this.isDisabled();
    }

    isNeedShowText() {
      return this._isNeedShowText === true;
    }

    addClickHandler(method) {
      return this._clickHandlers.push(method);
    }

    clearClickHandlers() {
      return this._clickHandlers = [];
    }

    isLocalMode() {
      return this._localMode === true;
    }

    setCondition(method) {
      return this._condition = method;
    }

    setConditionForDisable(method) {
      return this._condition2 = method;
    }

    getInfoData() {
      return this._infoData;
    }

    simulateClick() { //?NEW
      return this.applyClickedState();
    }

    simulateClickManual() { //?NEW
      this.simulateClick();
      return setTimeout((() => {
        try {
          return this.applyNormalState();
        } catch (error) {

        }
      }), 50);
    }

    prepare() { //?NEW
      return this.slowUpdate();
    }

    realX() {
      if (this.isLocalMode()) {
        return this._realX;
      } else {
        return this.x;
      }
    }

    realY() {
      if (this.isLocalMode()) {
        return this._realY;
      } else {
        return this.y;
      }
    }

    show() {
      this.visible = true;
      return this._manualHided = false;
    }

    hide() {
      this.visible = false;
      return this._manualHided = true;
    }

    disable() {
      this._disabled = true;
      this._manualDisabled = true;
      this.refreshEnDisState();
      return this._mouseIn = false;
    }

    enable() {
      this._disabled = false;
      this._manualDisabled = false;
      return this.refreshEnDisState();
    }

    update() {
      super.update();
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseClick();
      this.updatePosition();
      if (!this._slowUpdateActive) {
        this.slowUpdate();
      }
      return this.updateComplexTextVisible();
    }

    slowUpdate() {
      if (this._destroyed === true) {
        return;
      }
      this.updateMouseTracking();
      this.updateConditionForVisible();
      return this.updateConditionForEnabling();
    }

    updateMouseTracking() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.cursorInButton()) {
        this._onMouseEnter();
        return this._mouseIn = true;
      } else {
        this._onMouseLeave();
        return this._mouseIn = false;
      }
    }

    // * In MZ TouchInput always have X,Y
    cursorInButton() {
      return this.touchInButton();
    }

    xyInButton(x, y) {
      var inRect, rect, rx, ry;
      rx = KDCore.SDK.toGlobalCoord(this, 'x');
      ry = KDCore.SDK.toGlobalCoord(this, 'y');
      rect = new PIXI.Rectangle(rx, ry, this._realWidth(), this._realHeight());
      inRect = rect.contains(x, y);
      if (inRect === true && this._checkAlpha === true) {
        return this._checkAlphaPixel(x - rx, y - ry);
      } else {
        return inRect;
      }
    }

    _realWidth() {
      if (this._hasImage()) {
        return this._mainImage().width;
      } else {
        return this.width;
      }
    }

    _hasImage() {
      return this._mainImage() != null;
    }

    _mainImage() {
      return this._images[0];
    }

    _realHeight() {
      if (this._hasImage()) {
        return this._mainImage().height;
      } else {
        return this.height;
      }
    }

    _checkAlphaPixel(x, y) {
      var pixel;
      pixel = this._hasImage() ? this._mainImage().bitmap.getAlphaPixel(x, y) : this.bitmap.getAlphaPixel(x, y);
      return pixel >= 200;
    }

    _onMouseEnter() {
      if (this._mouseIn === true) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyCoverState();
      }
      this._showText();
      if (this.getInfoData() != null) {
        return this._startComplexTimer();
      }
    }

    _onMouseLeave() {
      if (this._mouseIn === false) {
        return;
      }
      if (!this.isDisabled()) {
        this.applyNormalState();
      }
      this._hideText();
      return this._stopComplexTimer();
    }

    _showText() {
      if (this._textSprite == null) {
        return;
      }
      this._updateTextPosition();
      return this._textSprite.visible = true;
    }

    _hideText() {
      if (this._textSprite == null) {
        return;
      }
      return this._textSprite.visible = false;
    }

    _startComplexTimer() {
      this._stopComplexTimer();
      return this._cTimer = setTimeout((() => {
        if (this._mouseIn === true) {
          return this._isNeedShowText = true;
        }
      }), 1000);
    }

    _stopComplexTimer() {
      if (this._cTimer != null) {
        clearTimeout(this._cTimer);
      }
      return this._isNeedShowText = false;
    }

    updateMouseClick() {
      if (!this.isActive()) {
        this._unTouch();
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.touchInButton()) {
        this._touching = true;
        this.applyClickedState();
      }
      if (this._touching === true) {
        if (TouchInput.isReleased() || !this.touchInButton()) {
          this._unTouch();
          if (TouchInput.isReleased()) {
            return this.callClickHandler();
          }
        }
      }
    }

    _unTouch() {
      this._touching = false;
      if (this.touchInButton()) {
        return this.applyCoverState();
      } else {
        return this.applyNormalState();
      }
    }

    touchInButton() {
      return this.xyInButton(TouchInput.x, TouchInput.y);
    }

    callClickHandler() {
      if (this._clickHandlers.length > 0) {
        return this._clickHandlers.forEach(function(method) {
          return method();
        });
      }
    }

    updatePosition() {
      var p;
      if (!this._localMode) {
        return;
      }
      p = new KDCore.Point(this._realX, this._realY);
      return this.move(p.screenX(), p.screenY());
    }

    updateConditionForVisible() {
      var result;
      if (this._condition == null) {
        return;
      }
      if (this._manualHided === true) {
        return;
      }
      try {
        result = this._condition();
        return this.visible = !result;
      } catch (error) {
        console.warn('wrong condition in button');
        return this.visible = true;
      }
    }

    updateConditionForEnabling() {
      if (!this._condition2) {
        return;
      }
      if (this._manualDisabled === true) {
        return;
      }
      try {
        this._disabled = this._condition2();
        return this.refreshEnDisState();
      } catch (error) {
        console.warn('wrong condition in button for enable state');
        return this.disable();
      }
    }

    setButtonImages(img1, img2, img3, img4) {
      if (this._images != null) {
        this._images.forEach(function(img) {
          if (img != null) {
            return img.parent.removeChild(img);
          }
        });
      }
      this._images = [new Sprite(img1), img2 != null ? new Sprite(img2) : void 0, img3 != null ? new Sprite(img3) : void 0, img4 != null ? new Sprite(img4) : void 0];
      this._images.forEach((img) => {
        if (img != null) {
          return this.addChild(img);
        }
      });
      return this.applyNormalState();
    }

    applyNormalState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[0]) != null ? ref.visible = true : void 0;
    }

    refreshImages() {
      return this._images.forEach(function(img) {
        return img != null ? img.visible = false : void 0;
      });
    }

    applyCoverState() {
      this.refreshImages();
      if (this._images[1] != null) {
        return this._images[1].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    applyClickedState() {
      this.refreshImages();
      if (this._images[2] != null) {
        return this._images[2].visible = true;
      } else {
        return this.applyNormalState();
      }
    }

    _createText(text, size) {
      var h, w;
      if (this._textSprite) {
        this.removeChild(this._textSprite);
      }
      w = Math.round(((size / 10) + 1) * 5 * text.length);
      h = size + 4;
      this._textSprite = new Sprite(new Bitmap(w, h));
      this._textSprite.bitmap.fontSize = size;
      this._textSprite.bitmap.drawText(text, 0, h / 2, w, 1, 'center');
      this._textSprite.visible = false;
      return this.addChild(this._textSprite);
    }

    _updateTextPosition() {
      var nx, ny;
      if (!this._textSprite) {
        return;
      }
      nx = this._realWidth() / 2 - this._textSprite.width / 2;
      if (this._textPosition === 0) {
        ny = -this._textSprite.height;
      } else {
        ny = this._realHeight() + this._textSprite.height / 2;
      }
      return this._textSprite.move(nx, ny);
    }

    applyDisableState() {
      var ref;
      this.refreshImages();
      return (ref = this._images[3]) != null ? ref.visible = true : void 0;
    }

    refreshEnDisState() {
      if (this.isDisabled()) {
        this.applyDisableState();
        return this._hideText();
      } else {
        if (this._mouseIn === false) {
          return this.applyNormalState();
        }
      }
    }

    //else
    //    do @applyCoverState
    updateComplexTextVisible() {}

    applyScale(mod) {
      var i, img, len, ref;
      ref = this._images;
      for (i = 0, len = ref.length; i < len; i++) {
        img = ref[i];
        if (img != null) {
          img.scale.x = mod;
          img.scale.y = mod;
        }
      }
    }

    static FromSet(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img0, img0);
      return button;
    }

    static FromSetFull(imgName, sourceFolder = null) {
      var button, getterFunc, img0, img1, img2, img3;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder != null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap("img/" + sourceFolder + "/", filename);
        };
      }
      img0 = getterFunc(imgName + "_00");
      img1 = getterFunc(imgName + "_01");
      img2 = getterFunc(imgName + "_02");
      img3 = getterFunc(imgName + "_03");
      button = new KDCore.Button();
      button.setButtonImages(img0, img1, img2, img3);
      return button;
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroup;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)

    //rev 07.10.21
  Sprite_ButtonsGroup = class Sprite_ButtonsGroup extends KDCore.Sprite {
    // buttonsArray = [
    //       {image: NAME, position: [X,Y]}, ...
    //    ]
    constructor(buttonsArray, activeIndex, clickCallback) {
      var button, i, len;
      super();
      this.clickCallback = clickCallback;
      this._buttons = [];
      for (i = 0, len = buttonsArray.length; i < len; i++) {
        button = buttonsArray[i];
        this._createButton(button);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroup.prototype;
    _._createButton = function({image, position}) {
      var btn, index, method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      index = this._buttons.length;
      btn = new KDCore.ButtonM(image, true, "Alpha");
      btn.move(position);
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this._buttons.push(btn);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback(index);
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroup = Sprite_ButtonsGroup;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ButtonsGroupHandler;
  // * Класс для реализации набора кнопок переключателей (Tabs)
  // * Когда только одна кнопка может быть нажата (выбрана)
  // * В отличии от Sprite_ButtonsGroup, принимает массив
  // * уже созданных кнопок

    //rev 10.07.22
  Sprite_ButtonsGroupHandler = class Sprite_ButtonsGroupHandler extends KDCore.Sprite {
    // _buttons = [Button object with enable, disable, isEnable, addClickHandler methods]
    constructor(_buttons, clickCallback, activeIndex = 0) {
      var button, i, index, len, ref;
      super();
      this._buttons = _buttons;
      this.clickCallback = clickCallback;
      ref = this._buttons;
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        button = ref[index];
        this._processButton(button, index);
      }
      this._onButtonClick(activeIndex);
      return;
    }

    getSelectedIndex() {
      return this._buttons.findIndex(function(btn) {
        return !btn.isEnabled();
      });
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ButtonsGroupHandler.prototype;
    _._processButton = function(btn, index) {
      var method;
      // * Так как кнопки работают как переключатели, то 03 должен быть всегда
      method = () => {
        return this._onButtonClick(index);
      };
      btn.addClickHandler(method);
      this.add(btn);
    };
    _._onButtonClick = function(index = 0) {
      var ref;
      this._resetAllButtons();
      if ((ref = this._buttons[index]) != null) {
        ref.disable(); // * Нажата
      }
      if (this.clickCallback != null) {
        this.clickCallback(index);
      }
    };
    _._resetAllButtons = function() {
      var btn, i, len, ref;
      ref = this._buttons;
      for (i = 0, len = ref.length; i < len; i++) {
        btn = ref[i];
        if (btn != null) {
          btn.enable();
        }
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ButtonsGroupHandler = Sprite_ButtonsGroupHandler;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_ItemsList;
  // * Класс который позволяет сделать список (на основе Window_Selectable), но из Sprite элементов, а не Draw на Bitmap

    //rev 08.02.24

    //TODO: Dynamic items height, controls handlers support
  Sprite_ItemsList = class Sprite_ItemsList extends Window_Selectable {
    constructor(r) {
      if (KDCore.isMV()) {
        super(r.x, r.y, r.width, r.height);
      } else {
        super(r);
      }
      this._prevSelectedIndex = -1;
      this._createItemsContainer();
      this._createWindowContentMask();
      this._setupBackgroundType();
      return;
    }

    activate(index) {
      var e;
      try {
        this.refresh();
        if (index != null) {
          this.safeSelect(index);
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return super.activate();
    }

    maxItems() {
      return this.getAllItems().length;
    }

    getAllItems() {
      return this.itemsSet || [];
    }

    setItems(itemsSet, singleItemHeight = null) {
      this.itemsSet = itemsSet;
      this.singleItemHeight = singleItemHeight;
      this._clearPreviousItems();
      if (this.singleItemHeight == null) {
        this._adjustAutoItemsHeight(this.itemsSet[0]);
      }
      this.refresh();
      this._drawNewItems();
    }

    itemAt(index) {
      return this.getAllItems()[index];
    }

    isNeedScaleItemsW() {
      return false;
    }

    isNeedScaleItemsH() {
      return false;
    }

    lineHeight() {
      return this.singleItemHeight || 36;
    }

    isDrawWindowDefaultItemsBack() {
      return false;
    }

    //$[OVER]
    _updateCursor() {
      return this._cursorSprite.visible = false;
    }

    update() {
      super.update();
      this._itemsContainer.y = -this._scrollY;
      return this._updateItemsSelectionState();
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = Sprite_ItemsList.prototype;
    _._createItemsContainer = function() {
      if (!this.isDrawWindowDefaultItemsBack()) {
        this._contentsBackSprite.visible = false;
      }
      this._windowItemsContentLayer = new Sprite();
      this._windowItemsContentLayer.move(this._padding, this._padding);
      this.addChild(this._windowItemsContentLayer);
      this._itemsContainer = new KDCore.Sprite();
      this._windowItemsContentLayer.addChild(this._itemsContainer);
      this.addChild(this._downArrowSprite);
      return this.addChild(this._upArrowSprite);
    };
    _._setupBackgroundType = function() {
      return this.setBackgroundType(2);
    };
    _._createWindowContentMask = function() {
      var e, m, maskBitmap;
      try {
        maskBitmap = new Bitmap(this.width - this._padding * 2, this.height - this._padding * 2);
        maskBitmap.fillAll("#FFF");
        m = new Sprite(maskBitmap);
        this._windowItemsContentLayer.mask = m;
        return this._windowItemsContentLayer.addChild(m);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._adjustAutoItemsHeight = function(item) {
      var e;
      try {
        if (item == null) {
          this.singleItemHeight = 36;
          return;
        }
        if (item.realHeight != null) {
          this.singleItemHeight = item.realHeight();
        } else {
          if (item.height > 0) {
            this.singleItemHeight = item.height;
          }
        }
        if (this.singleItemHeight === 0 || !this.singleItemHeight) {
          return this.singleItemHeight = 36;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._clearPreviousItems = function() {
      var c, e, i, j, len, len1, ref, results, toRemove;
      try {
        toRemove = [];
        ref = this._itemsContainer.children;
        for (i = 0, len = ref.length; i < len; i++) {
          c = ref[i];
          toRemove.push(c);
        }
        results = [];
        for (j = 0, len1 = toRemove.length; j < len1; j++) {
          c = toRemove[j];
          results.push(c.removeFromParent());
        }
        return results;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._drawNewItems = function() {
      var e, i, index, item, len, ref, results;
      try {
        ref = this.getAllItems();
        results = [];
        for (index = i = 0, len = ref.length; i < len; index = ++i) {
          item = ref[index];
          results.push(this._addNewItemToList(item, index));
        }
        return results;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._addNewItemToList = function(item, index) {
      var e, rect;
      try {
        if (item == null) {
          return;
        }
        rect = this.itemRect(index);
        item.x = rect.x;
        item.y = rect.y;
        this._adjustItemWidthAndHeight(item);
        return this._itemsContainer.addChild(item);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._adjustItemWidthAndHeight = function(item) {
      var e, scaleFactor;
      try {
        if (item == null) {
          return;
        }
        if (this.isNeedScaleItemsW()) {
          scaleFactor = this._defaultItemWidth() / this._getItemWidth(item);
          item.scale.x = scaleFactor;
        }
        if (this.isNeedScaleItemsH()) {
          scaleFactor = this.lineHeight() / this._getItemHeight(item);
          return item.scale.y = scaleFactor;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._getItemWidth = function(item) {
      var e, v;
      v = this._defaultItemWidth();
      try {
        if (item == null) {
          return v;
        }
        if (item.realWidth != null) {
          v = item.realWidth();
        } else {
          if (item.width > 0) {
            v = item.width;
          }
        }
        if (v === 0 || !v) {
          v = this._defaultItemWidth();
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return v;
    };
    _._defaultItemWidth = function() {
      return this.width - this._padding * 2;
    };
    _._getItemHeight = function(item) {
      var e, v;
      v = 36;
      try {
        if (item == null) {
          return v;
        }
        if (item.realHeight != null) {
          v = item.realHeight();
        } else {
          if (item.height > 0) {
            v = item.height;
          }
        }
        if (v === 0 || !v) {
          v = 36;
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return v;
    };
    _._updateItemsSelectionState = function() {
      var e;
      try {
        if (!this.active || this.index() < 0 || !this.cursorVisible) {
          this._disableSelectionForAll();
          return;
        }
        return this._selectItemAtIndex(this.index());
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._disableSelectionForAll = function() {
      var e, i, item, len, ref, results;
      try {
        this._prevSelectedIndex = -1;
        ref = this.getAllItems();
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          item = ref[i];
          results.push(this._deselectItem(item));
        }
        return results;
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._selectItem = function(item) {
      var e;
      try {
        if (item == null) {
          return;
        }
        if ((this._prevSelectedIndex != null) && this._prevSelectedIndex >= 0) {
          this._deselectItem(this.itemAt(this._prevSelectedIndex));
        }
        if (item.activateInList != null) {
          return item.activateInList();
        } else {
          return this._selectItemVisually(item);
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._selectItemVisually = function(item) {
      var e;
      try {
        if (item == null) {
          return;
        }
        return item.filters = [
          new PIXI.filters.GlowFilter({
            distance: 15,
            outerStrength: 4
          })
        ];
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._deselectItem = function(item) {
      var e;
      try {
        if (item == null) {
          return;
        }
        if (item.deactivateInList != null) {
          return item.deactivateInList();
        } else {
          return this._deselectItemVisually(item);
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._deselectItemVisually = function(item) {
      var e;
      try {
        if (item == null) {
          return;
        }
        return item.filters = [];
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._selectItemAtIndex = function(index) {
      var e, item;
      try {
        if (this._prevSelectedIndex !== index) {
          item = this.itemAt(index);
          if (item == null) {
            return;
          }
          this._selectItem(item);
          return this._prevSelectedIndex = index;
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
  })();
  // ■ END PRIVATE
  //---------------------------------------------------------------------------
  return KDCore.Sprite_ItemsList = Sprite_ItemsList;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad((function() {
  var Sprite_TilingFrame;
  Sprite_TilingFrame = class Sprite_TilingFrame extends KDCore.Sprite {
    constructor(width, height, skinBitmap) {
      super();
      this.width = width;
      this.height = height;
      this.skinBitmap = skinBitmap;
      this._createParts();
      this._refreshAll();
    }

    _createParts() {
      var i, j;
      this.backSprite = new Sprite();
      this.addChild(this.backSprite);
      this.content = new Sprite();
      this.addChild(this.content);
      this._outFrame = new Sprite();
      for (i = j = 0; j < 8; i = ++j) {
        this._outFrame.addChild(new Sprite());
      }
      return this.addChild(this._outFrame);
    }

    // * Отступ, чтобы за рамку не выходить
    _fillPadding() {
      return 2;
    }

    // * Размер частей на картинке
    _fillImagePartWidth() {
      return 96;
    }

    _fillImagePartHeight() {
      return 96;
    }

    // * Толщина рамки
    _frameThickness() {
      return 12;
    }

    _refreshAll() {
      this._refreshBack();
      return this._refreshTFrame();
    }

    _refreshBack() {
      var fh, fw, h, m, sprite, w;
      m = this._fillPadding();
      w = Math.max(0, this.width - m * 2);
      h = Math.max(0, this.height - m * 2);
      sprite = this.backSprite;
      sprite.bitmap = this.skinBitmap;
      // * Координаты фона из картинки
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      sprite.setFrame(0, 0, fw, fh);
      sprite.move(m, m);
      sprite.scale.x = w / fw;
      return sprite.scale.y = h / fh;
    }

    _refreshTFrame() {
      var drect, fh, fw, j, len, m, ref, spr, srect;
      fw = this._fillImagePartWidth();
      fh = this._fillImagePartHeight();
      // * Положение назначения
      drect = {
        x: 0,
        y: 0,
        width: this.width,
        height: this.height
      };
      // * Координаты рамки на картинке
      srect = {
        x: fw,
        y: 0,
        width: fw,
        height: fh
      };
      m = this._frameThickness(); // * Толщина
      ref = this._outFrame.children;
      for (j = 0, len = ref.length; j < len; j++) {
        spr = ref[j];
        spr.bitmap = this.skinBitmap;
      }
      if (KDCore.isMZ()) {
        Window.prototype._setRectPartsGeometry.call(this, this._outFrame, srect, drect, m);
      } else {
        this._setRectPartsGeometry(this._outFrame, srect, drect, m);
      }
    }

    // * Этот метод существует в MZ, но нет в MV
    //? From MZ
    _setRectPartsGeometry(sprite, srect, drect, m) {
      var child, children, dh, dmh, dmw, dw, dx, dy, j, len, sh, smh, smw, sw, sx, sy;
      sx = srect.x;
      sy = srect.y;
      sw = srect.width;
      sh = srect.height;
      dx = drect.x;
      dy = drect.y;
      dw = drect.width;
      dh = drect.height;
      smw = sw - m * 2;
      smh = sh - m * 2;
      dmw = dw - m * 2;
      dmh = dh - m * 2;
      children = sprite.children;
      sprite.setFrame(0, 0, dw, dh);
      sprite.move(dx, dy);
      // corner
      children[0].setFrame(sx, sy, m, m);
      children[1].setFrame(sx + sw - m, sy, m, m);
      children[2].setFrame(sx, sy + sw - m, m, m);
      children[3].setFrame(sx + sw - m, sy + sw - m, m, m);
      children[0].move(0, 0);
      children[1].move(dw - m, 0);
      children[2].move(0, dh - m);
      children[3].move(dw - m, dh - m);
      // edge
      children[4].move(m, 0);
      children[5].move(m, dh - m);
      children[6].move(0, m);
      children[7].move(dw - m, m);
      children[4].setFrame(sx + m, sy, smw, m);
      children[5].setFrame(sx + m, sy + sw - m, smw, m);
      children[6].setFrame(sx, sy + m, m, smh);
      children[7].setFrame(sx + sw - m, sy + m, m, smh);
      children[4].scale.x = dmw / smw;
      children[5].scale.x = dmw / smw;
      children[6].scale.y = dmh / smh;
      children[7].scale.y = dmh / smh;
      // center
      if (children[8] != null) {
        children[8].setFrame(sx + m, sy + m, smw, smh);
        children[8].move(m, m);
        children[8].scale.x = dmw / smw;
        children[8].scale.y = dmh / smh;
      }
      for (j = 0, len = children.length; j < len; j++) {
        child = children[j];
        child.visible = dw > 0 && dh > 0;
      }
    }

  };
  return KDCore.Sprite_TilingFrame = Sprite_TilingFrame;
}));


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Window_ExtTextLineBase;
  // * Данное окно используется как основа для Sprite_UITextExt
  //rev 07.10.21
  Window_ExtTextLineBase = class Window_ExtTextLineBase extends Window_Base {
    constructor(rect, fontSettings) {
      super(rect);
      this.fontSettings = fontSettings;
      this.createContents();
      // * Всегда прозрачное окно
      this.setBackgroundType(2);
    }

    // * Нет отступов
    updatePadding() {
      return this.padding = 0;
    }

    // * Нет отступов
    itemPadding() {
      return 0;
    }

    textPadding() {
      return 0;
    }

    standardPadding() {
      return 0;
    }

    contentsWidth() {
      return this.width;
    }

    contentsHeight() {
      return this.height;
    }

    // * Более гибкая настройка размера текста при { }
    makeFontBigger() {
      return this.contents.fontSize += 1;
    }

    makeFontSmaller() {
      if (this.contents.fontSize > 1) {
        return this.contents.fontSize -= 1;
      }
    }

    // * Применение своих шрифта и размера текста
    resetFontSettings() {
      super.resetFontSettings();
      if (this.fontSettings == null) {
        return;
      }
      if (String.any(this.fontSettings.face)) {
        this.contents.fontFace = this.fontSettings.face;
      }
      if (this.fontSettings.size > 0) {
        this.contents.fontSize = this.fontSettings.size;
      }
      if (this.fontSettings.italic != null) {
        this.contents.fontItalic = this.fontSettings.italic;
      }
    }

  };
  return KDCore.Window_ExtTextLineBase = Window_ExtTextLineBase;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button M
  //------------------------------------------------------------------------------
  //@[AUTO EXTEND]
  // * Button Mini - упрощённый класс Sprite_XButton (KDCore.Button)

    // * Принимает название файла изображения кнопки без _00
  // * Названия изображения должны быть в стандартном формате _00, _01, [_03]
  // * _02 - не используются в этом классе

    // * Класс использует глобальную временную переменную для определения находится ли мышь в зоне кнопки

    //TODO: ADD ALPHA CHECK!

    // * Если isFull - true, значит нужен _03
  KDCore.ButtonM = class ButtonM extends KDCore.Sprite {
    constructor(filename, isFull = false, sourceFolder = null) {
      super();
      this._bitmaps = [];
      this._disabled = false;
      this._isTriggered = false;
      // * Когда произошло нажатие на кнопку
      this._handler = null;
      this._isCanBeClicked = true;
      this._isManualHoverMode = false;
      this._isManualSelected = false;
      this._loadBitmaps(filename, isFull, sourceFolder);
      this._setImageState(0);
      this._createThread();
    }

    setManualHover() {
      return this._isManualHoverMode = true;
    }

    disableManualHover() {
      return this._isManualHoverMode = false;
    }

    setManualSelected(_isManualSelected) {
      this._isManualSelected = _isManualSelected;
    }

    enableClick() {
      return this._isCanBeClicked = true;
    }

    disableClick() {
      return this._isCanBeClicked = false;
    }

    desaturate() {
      this.filters = [new PIXI.filters.ColorMatrixFilter()];
      this.filters[0].desaturate();
    }

    isMouseIn() {
      if (this._isManualHoverMode === true) {
        return this._isManualSelected;
      } else {
        return this.isUnderMouse() && this.visible === true;
      }
    }

    isActive() {
      if (this._isCanBeClicked === false) {
        return false;
      }
      if (this.parent != null) {
        return this.parent.visible === true && this.visible === true;
      } else {
        return this.visible === true;
      }
    }

    isDisabled() {
      return this._disabled === true;
    }

    addClickHandler(_handler) {
      this._handler = _handler;
    }

    clearClickHandler() {
      return this._handler = null;
    }

    // * Воспроизводит визуальный эффект нажатия
    simulateClick() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (this.isMouseIn()) {
        return;
      }
      this._startSimulation();
    }

    isEnabled() {
      return !this.isDisabled();
    }

    refreshState(isEnable = true) {
      if (isEnable === true) {
        if (this.isDisabled()) {
          this.enable();
        }
      } else {
        if (this.isEnabled()) {
          this.disable();
        }
      }
    }

    disable() {
      this._disabled = true;
      return this._setImageState(2);
    }

    enable() {
      this._disabled = false;
      return this._setImageState(0);
    }

    click() {
      if (this._handler != null) {
        return this._handler();
      }
    }

    update() {
      super.update();
      return this._updateMain();
    }

  };
  return (function() {    
    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ ButtonM Implementation
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _, alias_SM_isAnyButtonPressed, alias_SM_onMapLoaded;
    //@[DEFINES]
    _ = KDCore.ButtonM.prototype;
    _._loadBitmaps = function(filename, isFull = false, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(filename + '_00'));
      this._bitmaps.push(getterFunc(filename + '_01'));
      if (isFull) {
        this._bitmaps.push(getterFunc(filename + '_03'));
      }
    };
    _._getGetter = function(sourceFolder = null) {
      var getterFunc;
      getterFunc = function(filename) {
        return ImageManager.loadPicture(filename);
      };
      if (sourceFolder !== null) {
        getterFunc = function(filename) {
          return ImageManager.loadBitmap('img/' + sourceFolder + '/', filename);
        };
      }
      return getterFunc;
    };
    _._setImageState = function(index = 0) {
      if (this._bitmaps[index] == null) {
        index = 0;
      }
      this.bitmap = this._bitmaps[index];
      this._lastState = index;
    };
    _._createThread = function() {
      this.hoverThread = new KDCore.TimedUpdate(3, this._updateHover.bind(this));
      this.hoverThread.applyTimeRange(-1, 1);
      this.hoverThread.call();
    };
    //?[DYNAMIC]
    _._updateMain = function() {
      this._updateMouseLogic();
      if (!this.isActive()) {
        if (($gameTemp.kdButtonUnderMouse != null) && $gameTemp.kdButtonUnderMouse === this) {
          return $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseLogic = function() {
      this.hoverThread.update();
      return this._updateMouseClick();
    };
    _._updateHover = function() {
      if (!this.isActive()) {
        return;
      }
      // * чтобы эффект нажатия не прекратить
      if (this._isTriggered === true) {
        return;
      }
      if (this.isMouseIn()) {
        if (this._lastState !== 1) {
          if (!this.isDisabled()) {
            this._setImageState(1);
          }
          $gameTemp.kdButtonUnderMouse = this;
        }
      } else {
        if (this._lastState !== 0) {
          if (!this.isDisabled()) {
            this._setImageState(0);
          }
          if ($gameTemp.kdButtonUnderMouse === this) {
            $gameTemp.kdButtonUnderMouse = null;
          }
        } else if ($gameTemp.kdButtonUnderMouse === this) {
          $gameTemp.kdButtonUnderMouse = null;
        }
      }
    };
    _._updateMouseClick = function() {
      if (!this.isActive()) {
        return;
      }
      if (this.isDisabled()) {
        return;
      }
      if (TouchInput.isTriggered() && this.isUnderMouse()) {
        this._isTriggered = true;
        this._setImageState(0);
      }
      if (this._isTriggered === true) {
        if (TouchInput.isReleased()) {
          this._isTriggered = false;
          if (this.isMouseIn()) {
            this.click();
          }
        }
      }
    };
    _._startSimulation = function() {
      this._setImageState(1);
      this._simulateThread = new KDCore.TimedUpdate(10, () => {
        return this._setImageState(0);
      });
      this._simulateThread.once();
      return this._updateMain = this._updateMouseClickSimulated;
    };
    _._updateMouseClickSimulated = function() {
      this._simulateThread.update();
      if (!this._simulateThread.isAlive()) {
        this._simulateThread = null;
        this._updateMain = this._updateMouseLogic;
      }
    };
    // * Теперь при нажатии на любую кнопку, игрок не будет ходить по карте

    //@[ALIAS]
    alias_SM_isAnyButtonPressed = Scene_Map.prototype.isAnyButtonPressed;
    Scene_Map.prototype.isAnyButtonPressed = function() {
      if ($gameTemp.kdButtonUnderMouse != null) {
        return true;
      } else {
        return alias_SM_isAnyButtonPressed.call(this);
      }
    };
    //TODO: Добавить доп. проверку?
    //@[ALIAS]
    alias_SM_onMapLoaded = Scene_Map.prototype.onMapLoaded;
    Scene_Map.prototype.onMapLoaded = function() {
      $gameTemp.kdButtonUnderMouse = null;
      setTimeout((function() {
        return $gameTemp.kdButtonUnderMouse = null;
      }), 50);
      return alias_SM_onMapLoaded.call(this);
    };
  })();
});

// ■ END ButtonM Implementation
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Button Mini User - класс с определением файла каждого состояния отдельно
  // * Принимает теже аргументы, только заместо имени файла, три изображения (имени)
  // ? states = { main, hover, disabled }
  return KDCore.ButtonMU = class ButtonMU extends KDCore.ButtonM {
    constructor() {
      super(...arguments);
    }

    //$[OVER]
    _loadBitmaps(states, isFull = true, sourceFolder = null) {
      var getterFunc;
      getterFunc = this._getGetter(sourceFolder);
      this._bitmaps.push(getterFunc(states.main));
      this._bitmaps.push(getterFunc(states.hover));
      // * Optional 03
      if (String.any(states.disabled)) {
        this._bitmaps.push(getterFunc(states.disabled));
      }
    }

  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var Sprite_TilingLine;
  Sprite_TilingLine = class Sprite_TilingLine extends KDCore.Sprite_TilingFrame {
    constructor() {
      super(...arguments);
    }

    //$[OVER BASE ALL BELOW]
    _fillPadding() {
      return 0;
    }

    _refreshTFrame() {} // * EMPTY

    _fillImagePartWidth() {
      return 4;
    }

    _fillImagePartHeight() {
      return 26;
    }

  };
  return KDCore.Sprite_TilingLine = Sprite_TilingLine;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Пространство имён для всех UIElements
  KDCore.UI = KDCore.UI || {};
  (function() {    // * Общий класс для всех UI элементов
    //?rev 07.02.2024
    var Sprite_UIElement;
    Sprite_UIElement = (function() {
      // * ABSTRACT значит что класс сам по себе ничего не создаёт, не хранит данные
      //@[ABSTRACT]
      class Sprite_UIElement extends KDCore.Sprite {
        constructor(params) {
          super();
          this.params = params;
          this._init();
        }

        // * Стандартный набор настроек
        defaultParams() {
          return {
            visible: true
          };
        }

        // * Общий метод (есть у всех элементов)
        // * По умолчанию вызывает drawText, но потомки могут переопределить
        draw() {
          return this.drawText(...arguments);
        }

        // * Общий метод
        drawText() {} // * EMPTY

        
          // * Если изначально невидимый (из параметров), то не активный вообще
        isActive() {
          return this.params.visible === true;
        }

        rootImageFolder() {
          if (String.any(this.params.rootImageFolder)) {
            return this.params.rootImageFolder;
          } else {
            return Sprite_UIElement.RootImageFolder;
          }
        }

        // * Сделать чёрно белым
        desaturate() {
          this.filters = [new PIXI.filters.ColorMatrixFilter()];
          this.filters[0].desaturate();
        }

        clearFilters() {
          return this.filters = [];
        }

        // * Общий метод (можно ли редактировать визуально)
        isCanBeEdited() {
          return false;
        }

        // * Общий метод (надо ли скрывать при игровом сообщнии)
        isHaveHideWithMessageFlag() {
          return false;
        }

        // * Общий метод (находится ли объект под мышкой)
        isUnderMouse() {
          var ref;
          return ((ref = this.zeroChild()) != null ? ref.isUnderMouse() : void 0) && this.isFullVisible();
        }

        // * Полностью ли виден объект? (включае всех его родителей)
        isFullVisible() {
          return this.visible === true && this.allParentsIsVisible();
        }

        // * Все ли родители объекта видимы
        allParentsIsVisible() {
          var e, p;
          if (!this.visible) {
            return false;
          }
          try {
            if (this.parent != null) {
              p = this.parent;
              while (p != null) {
                if (p.visible === true) {
                  p = p.parent;
                } else {
                  return false;
                }
              }
              return true;
            } else {
              return this.visible === true;
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
            return true;
          }
        }

        // * Параметры первого элемента (если он есть)
        realWidth() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realWidth();
            } else {
              return child.width;
            }
          }
          return 0;
        }

        realHeight() {
          var child;
          child = this.zeroChild();
          if (child != null) {
            if (child instanceof KDCore.UI.Sprite_UIElement) {
              return child.realHeight();
            } else {
              return child.height;
            }
          }
          return 0;
        }

        // * Первый "физический" элемент (спрайт)
        zeroChild() {
          return this.children[0];
        }

        // * Метод восстановления значения на стандартные настройки
        reset(property) {
          var e;
          try {
            switch (property) {
              case "position":
                this._resetPosition();
                break;
              default:
                this[property] = this.params[property];
            }
          } catch (error) {
            e = error;
            KDCore.warning(e);
          }
        }

      };

      // * Корневая директория для изображений
      Sprite_UIElement.RootImageFolder = "Alpha";

      return Sprite_UIElement;

    }).call(this);
    KDCore.UI.Sprite_UIElement = Sprite_UIElement;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIElement.prototype;
    _._init = function() {
      var e;
      this._prepare();
      try {
        return this._createContent();
      } catch (error) {
        e = error;
        KDCore.warning(e);
        // * Если при создании произошла ошибка, отключаем элемент
        return this.isActive = function() {
          return false;
        };
      }
    };
    
    // * Подготовка элемента (проверка параметров)
    _._prepare = function() {
      //@params = @defaultParams() unless @params?
      this.params = Object.assign({}, this.defaultParams(), this.params);
      if (this.params.visible != null) {
        this.visible = this.params.visible;
      }
    };
    // * Наследники создают свои элементы в этом методе
    _._createContent = function() {}; // * EMPTY
    
    // * Сброс позиции
    _._resetPosition = function() {
      var e, x, y;
      if (this.params.position == null) {
        return;
      }
      try {
        ({x, y} = this.params.position);
        if (isFinite(x) && isFinite(y)) {
          x = Number(x);
          y = Number(y);
        } else {
          x = Number(eval(x));
          y = Number(eval(y));
        }
        this.move(x, y);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        this.move(0, 0);
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIButton;
    // * Кнопка на экране, можно нажимать
    Sprite_UIButton = class Sprite_UIButton extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "Button_Inventory",
          isHaveDisabled: true,
          rootImageFolder: null, //?optional
          click: "console.log('click')" // * число или код
        };
      }

      // * Кнопка не поддерживает перерисовку
      draw() {} // * EMPTY

      disable() {
        var ref;
        return (ref = this.button) != null ? ref.disable() : void 0;
      }

      enable() {
        var ref;
        return (ref = this.button) != null ? ref.enable() : void 0;
      }

      setState(isEnabled) {
        if (isEnabled) {
          return this.enable();
        } else {
          return this.disable();
        }
      }

      
        // * Просто вызов метода
      call() {
        var ref;
        return (ref = this.button) != null ? ref.click() : void 0;
      }

      // * Вызов метода с симуляцией нажатия
      click() {
        var ref, ref1;
        if ((ref = this.button) != null) {
          ref.click();
        }
        return (ref1 = this.button) != null ? ref1.simulateClick() : void 0;
      }

    };
    KDCore.UI.Sprite_UIButton = Sprite_UIButton;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIButton.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.image.isEmpty()) {
        KDCore.warning('You try create Button without image');
        return;
      }
      this.button = new KDCore.ButtonM(this.params.image, this.params.isHaveDisabled, this.rootImageFolder());
      this.add(this.button);
      return this._registerClickMethod();
    };
    _._registerClickMethod = function() {
      var commonEventId, e, method, ref, script;
      if (!String.any(this.params.click)) {
        return;
      }
      method = null;
      try {
        // * Если число, то значит общее событие
        if (isFinite(this.params.click)) {
          commonEventId = parseInt(this.params.click);
          if (commonEventId > 0) {
            method = function() {
              return $gameTemp.reserveCommonEvent(commonEventId);
            };
          }
        } else {
          // * Иначе скрипт
          script = this.params.click;
          method = function() {
            return eval(script);
          };
        }
        return this.button.addClickHandler(method);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return (ref = this.button) != null ? ref.clearClickHandler() : void 0;
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Рисует лицо персонажа (из папки Faces)
    var Sprite_UIFace;
    Sprite_UIFace = class Sprite_UIFace extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          faceName: "Actor1",
          faceIndex: 0,
          mirror: false,
          size: 144
        };
      }

      draw() {
        return this.drawFace(...arguments);
      }

      drawFace(faceName, faceIndex) {
        return this._drawFaceWhenReady(faceName, faceIndex);
      }

    };
    KDCore.UI.Sprite_UIFace = Sprite_UIFace;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIFace.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._createFaceSprite();
    };
    _._createFaceSprite = function() {
      this._faceSpr = KDCore.Sprite.FromBitmap(this.params.size);
      if (this.params.mirror === true) {
        this._flipFaceSpr();
      }
      this.add(this._faceSpr);
      this._drawFaceWhenReady(this.params.faceName, this.params.faceIndex);
    };
    _._flipFaceSpr = function() {
      this._faceSpr.scale.x = -1;
      this._faceSpr.x = this.params.size;
    };
    _._drawFaceWhenReady = function(name, index = 0) {
      var ref;
      if ((ref = this._faceSpr) != null) {
        ref.clear();
      }
      if (!String.any(name)) {
        return;
      }
      if (index < 0) {
        return;
      }
      this._drawOnReady = {name, index};
      this._faceSourceBitmap = ImageManager.loadFace(name);
      this._faceSourceBitmap.addLoadListener(this._drawFace.bind(this));
      this._drawFace();
    };
    _._drawFace = function() {
      var fh, fw, size, sx, sy;
      if (this._faceSpr == null) {
        return;
      }
      this._faceSpr.clear();
      if (!String.any(this._drawOnReady.name)) {
        return;
      }
      if (KDCore.isMZ()) {
        fw = ImageManager.faceWidth;
        fh = ImageManager.faceHeight;
      } else {
        fw = Window_Base._faceWidth;
        fh = Window_Base._faceHeight;
      }
      size = this.params.size;
      sx = (this._drawOnReady.index % 4) * fw;
      sy = Math.floor(this._drawOnReady.index / 4) * fh;
      this._faceSpr.bitmap.blt(this._faceSourceBitmap, sx, sy, fw, fh, 0, 0, size, size);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIGauge;
    Sprite_UIGauge = class Sprite_UIGauge extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          fill: "",
          foreground: "",
          mask: "",
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false,
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawGauge(...arguments);
      }

      drawGauge(percent = 1) {
        this._lastValue = percent;
        return this._drawGauge(percent);
      }

      isVertical() {
        return this.params.vertical === true;
      }

    };
    KDCore.UI.Sprite_UIGauge = Sprite_UIGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIGauge.prototype;
    //$[OVER]
    _._createContent = function() {
      // * Загружается главное изображение, затем уже все остальные, т.к. нужны размеры
      return this._loadFillImage();
    };
    _._loadFillImage = function() {
      // * Главное изображение, поэтому если не указано, то ничего
      if (this.params.fill.isEmpty()) {
        KDCore.warning('You try create Gauge without fill image');
        return;
      }
      KDCore.Utils.loadImageAsync(this.rootImageFolder(), this.params.fill).then(this._createParts.bind(this));
    };
    // * Получаем изображение заполнения и создаём части (т.к. есть размеры)
    _._createParts = function(fillBitmap) {
      this.fillBitmap = fillBitmap;
      this._createBackground();
      this._createFillLayer();
      this._loadForeground();
      this._loadMask();
      return this._onReady();
    };
    _._createBackground = function() {
      this.background = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      this.background.b().fillAll(this.params.backColor);
      this.background.opacity = this.params.backOpacity;
      return this.add(this.background);
    };
    _._createFillLayer = function() {
      this.fillLayer = KDCore.Sprite.FromBitmap(this.fillBitmap.width, this.fillBitmap.height);
      return this.add(this.fillLayer);
    };
    _._loadForeground = function() {
      var fore;
      if (String.isNullOrEmpty(this.params.foreground)) {
        return;
      }
      fore = KDCore.Sprite.FromImg(this.params.foreground, this.rootImageFolder());
      return this.add(fore);
    };
    _._loadMask = function() {
      var mask;
      if (String.isNullOrEmpty(this.params.mask)) {
        return;
      }
      mask = KDCore.Sprite.FromImg(this.params.mask, this.rootImageFolder());
      this.mask = mask;
      return this.add(mask);
    };
    // * Если что-то было до готовности, нарисовать
    _._onReady = function() {
      this.drawGauge(this._lastValue);
    };
    _._drawGauge = function(percent) {
      if (this.fillLayer == null) {
        return;
      }
      this.fillLayer.clear();
      if (this.isVertical()) {
        return this._drawVerGauge(percent);
      } else {
        return this._drawHorGauge(percent);
      }
    };
    _._drawHorGauge = function(percent) {
      var w;
      w = this.fillBitmap.width * percent;
      return this.fillLayer.b().blt(this.fillBitmap, 0, 0, w, this.fillLayer.height, 0, 0);
    };
    _._drawVerGauge = function(percent) {
      var h, hy;
      h = this.fillBitmap.height * percent;
      hy = this.fillBitmap.height - h;
      this.fillLayer.b().blt(this.fillBitmap, 0, 0, this.fillLayer.width, h, 0, hy);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIIcon;
    Sprite_UIIcon = class Sprite_UIIcon extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          index: 0,
          size: 32,
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawIcon(...arguments);
      }

      drawIcon(index = 0, noSmoth = false) {
        this._lastValue = index;
        return this._drawIcon(index, noSmoth);
      }

    };
    KDCore.UI.Sprite_UIIcon = Sprite_UIIcon;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIIcon.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createIcon();
      return this._drawIcon(this.params.index);
    };
    _._createIcon = function() {
      this._icon = KDCore.Sprite.FromBitmap(this.params.size, this.params.size);
      this.add(this._icon);
      return this._onReady();
    };
    _._onReady = function() {
      return this.drawIcon(this._lastValue);
    };
    _._drawIcon = function(index, noSmoth = false) {
      this._icon.clear();
      if (KDCore.SDK.isString(index)) {
        this._drawImageIcon(index, noSmoth);
      } else {
        if (index <= 0) {
          return;
        }
        this._icon.drawIcon(0, 0, index, this.params.size, noSmoth);
      }
    };
    _._drawImageIcon = function(imageName, noSmoth = false) {
      return KDCore.Utils.loadImageAsync(this.rootImageFolder(), imageName).then((bitmap) => {
        return this._icon.drawIcon(0, 0, bitmap, this.params.size, noSmoth);
      });
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIImage;
    Sprite_UIImage = class Sprite_UIImage extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          image: "",
          rootImageFolder: null //?optional
        };
      }

      draw() {
        return this.drawImage(...arguments);
      }

      drawImage(image) {
        return this._drawImage(image);
      }

    };
    KDCore.UI.Sprite_UIImage = Sprite_UIImage;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIImage.prototype;
    //$[OVER]
    _._createContent = function() {
      return this._drawImage(this.params.image);
    };
    _._drawImage = function(image) {
      this._clearImage();
      if (!String.isNullOrEmpty(image)) {
        this._image = KDCore.Sprite.FromImg(image, this.rootImageFolder());
        this.add(this._image);
      }
    };
    _._clearImage = function() {
      if (this._image == null) {
        return;
      }
      this._image.visible = false;
      this.removeChild(this._image);
      return this._image = null;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIRect;
    Sprite_UIRect = class Sprite_UIRect extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          fillColor: "#FFFFFF".toCss(),
          fillOpacity: 255,
          borderColor: "#000000".toCss(),
          borderThickness: 1,
          borderOpacity: 255
        };
      }

      draw() {
        return this.fill(...arguments);
      }

      fill(color, opacity = 255) {
        return this._fill(color, opacity);
      }

      drawBorder(color, thickness = 1, opacity = 255) {
        return this._drawBorder(color, thickness, opacity);
      }

    };
    KDCore.UI.Sprite_UIRect = Sprite_UIRect;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIRect.prototype;
    //$[OVER]
    _._createContent = function() {
      if (String.any(this.params.fillColor)) {
        this._createFill();
        this.fill(this.params.fillColor, this.params.fillOpacity);
      }
      if (String.any(this.params.borderColor) && this.params.borderThickness > 0) {
        this._createBorder();
        return this.drawBorder(this.params.borderColor, this.params.borderThickness, this.params.borderOpacity);
      }
    };
    _._createFill = function() {
      this._fillSpr = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._fillSpr);
    };
    _._createBorder = function() {
      this._borderSprite = KDCore.Sprite.FromBitmap(this.params.size.w, this.params.size.h);
      return this.addChild(this._borderSprite);
    };
    _._fill = function(color, opacity) {
      if (this._fillSpr == null) {
        return;
      }
      this._fillSpr.fillAll(color);
      this._fillSpr.opacity = opacity;
    };
    _._drawBorder = function(color, thickness, opacity) {
      var b;
      if (this._borderSprite == null) {
        return;
      }
      this._borderSprite.clear();
      b = this._borderSprite.b();
      // * Top line
      b.fillRect(0, 0, b.width, thickness, color);
      // * Bottom line
      b.fillRect(0, b.height - thickness, b.width, thickness, color);
      // * Left line
      b.fillRect(0, 0, thickness, b.height, color);
      // * Right line
      b.fillRect(b.width - thickness, 0, thickness, b.height, color);
      return this._borderSprite.opacity = opacity;
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 17.11.22
    var Sprite_UIText;
    Sprite_UIText = class Sprite_UIText extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 60,
            h: 20
          },
          alignment: "center",
          font: {
            face: null,
            size: 18,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          outline: {
            color: null,
            width: 2
          },
          textColor: "#FFFFFF",
          shadow: {
            color: "#000",
            opacity: 0,
            margins: {
              x: 1,
              y: 1
            }
          }
        };
      }

      //?DYNAMIC
      // * Сперва рисуем по готовности, а как загрузился спрайт, меняем
      drawText(text) {
        return this._drawTextWhenReady(text);
      }

      // * Сборка текста с учётом формата
      // * Заменить вхождения %1, %2 на значения параметров
      drawTextWithFormat(/*format string, arguments parameters... */) {
        var text;
        text = this._convertFormatedString(...arguments);
        this.drawText(text);
      }

      // * Пишет текст с определённым цветом (один раз)
      drawTextColor(text, colorCss) {
        if (this._textSpr == null) {
          return;
        }
        this._textSpr.b().textColor = colorCss;
        this.drawText(text);
        this._textSpr.b().textColor = this.params.textColor;
      }

    };
    KDCore.UI.Sprite_UIText = Sprite_UIText;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIText.prototype;
    //$[OVER]
    _._createContent = function() {
      if (this.params.shadow != null) {
        this._createShadow();
      }
      return this._createTextSprite();
    };
    _._createTextSprite = function() {
      this._textSpr = KDCore.Sprite.FromParams(this.params);
      this._textSpr.onReady(this._onReady.bind(this));
      return this.add(this._textSpr);
    };
    // * Выполнить по готовности
    _._onReady = function() {
      // * Переключить метод, так как уже готов
      this.drawText = this._drawText;
      // * Написать то что нужно было до готовности (если есть)
      if (this._drawOnReady == null) {
        return;
      }
      this.drawText(this._drawOnReady);
      this._drawOnReady = null;
    };
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.clear();
      if (text != null) {
        this._textSpr.drawTextFull(text);
      }
      if (this._shadowSpr != null) {
        this._shadowSpr.clear();
        if (text != null) {
          this._shadowSpr.drawTextFull(text);
        }
      }
    };
    // * Написать текст когда будет готов
    _._drawTextWhenReady = function(text) {
      this._drawOnReady = text;
      return this._drawText(text);
    };
    
    // * Заменить вхождения %1, %2 на значения параметров
    _._convertFormatedString = function(/*text, args...*/) {
      var e, i, j, ref, text;
      try {
        text = arguments[0];
        for (i = j = 1, ref = arguments.length; (1 <= ref ? j < ref : j > ref); i = 1 <= ref ? ++j : --j) {
          try {
            if (arguments[i] == null) {
              continue;
            }
            text = text.replace("%" + i, arguments[i]);
          } catch (error) {
            e = error;
            KDCore.warning(e);
            text = "[wrong format text input]";
          }
        }
        return text;
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return "[wrong format text input]";
      }
    };
    _._createShadow = function() {
      this._shadowSpr = KDCore.Sprite.FromParams(this.params);
      this._shadowSpr.bitmap.textColor = this.params.shadow.color;
      this._shadowSpr.opacity = this.params.shadow.opacity;
      this._shadowSpr.x += this.params.shadow.margins.x;
      this._shadowSpr.y += this.params.shadow.margins.y;
      return this.add(this._shadowSpr);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    //rev 30.12.21
    var Sprite_UITextExt;
    Sprite_UITextExt = class Sprite_UITextExt extends KDCore.UI.Sprite_UIText {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 200,
            h: 60
          },
          font: {
            face: null,
            size: 14,
            italic: false
          },
          margins: {
            x: 0,
            y: 0
          },
          // * новые параметры (KDCore 2.7)
          //?null могут быть
          singleLine: false,
          forceCentered: false
        };
      }

      //$[OVER]
      // * Данный метод не поддерживается, так как тут основа не Sprite, а Window
      drawTextColor() {
        return this.drawText(...arguments);
      }

    };
    KDCore.UI.Sprite_UITextExt = Sprite_UITextExt;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextExt.prototype;
    //$[OVER]
    _._createTextSprite = function() {
      var rect;
      rect = new Rectangle(0, 0, this.params.size.w, this.params.size.h);
      this._textSpr = new KDCore.Window_ExtTextLineBase(rect, this.params.font);
      this._textSpr.x = this.params.margins.x || 0;
      this._textSpr.y = this.params.margins.y || 0;
      this.add(this._textSpr);
      // * На следующий кадр, чтобы не было потери текста (опасно)
      //setTimeout (=> @_onReady() ), 10
      this._onReady(); // * Сразу
    };
    
    //$[OVER]
    _._drawText = function(text) {
      if (this._textSpr == null) {
        return;
      }
      this._textSpr.contents.clear();
      if (this.params.forceCentered === true) {
        this._textSpr.drawTextExInCenter(text, 0, 0, this._textSpr.width, this._textSpr.height);
      } else {
        if (this.params.singleLine === true) {
          this._textSpr.drawTextEx(text, 0, 0, this._textSpr.width);
        } else {
          // * По умолчанию
          this._textSpr.drawTextExWithWordWrap(text, 0, 0, this._textSpr.width);
        }
      }
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UITextWithBack;
    Sprite_UITextWithBack = class Sprite_UITextWithBack extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          text: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            alignment: "center",
            font: {
              face: null,
              size: 18,
              italic: false
            },
            margins: {
              x: 0,
              y: 0
            },
            outline: {
              color: null,
              width: 2
            },
            textColor: "#000000".toCss()
          },
          rect: {
            visible: true,
            size: {
              w: 60,
              h: 20
            },
            fillColor: "#FFFFFF".toCss(),
            fillOpacity: 255,
            borderColor: "#000000".toCss(),
            borderThickness: 1,
            borderOpacity: 255
          },
          textMargins: {
            x: 0,
            y: 0
          }
        };
      }

      draw() {
        return this.drawText(...arguments);
      }

      // * Aргументы смотри в Sprite_UIText
      drawText() {
        return this.text.draw(...arguments);
      }

      drawTextColor() {
        return this.text.drawTextColor(...arguments);
      }

      // * Аргументы смотри в Sprite_UIRect
      fill() {
        return this.rect.fill(...arguments);
      }

      drawBorder() {
        return this.rect.drawBorder(...arguments);
      }

      //$[OVER]
      isUnderMouse() {
        return this.rect.isUnderMouse();
      }

    };
    KDCore.UI.Sprite_UITextWithBack = Sprite_UITextWithBack;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITextWithBack.prototype;
    //$[OVER]
    _._createContent = function() {
      this._createRect();
      return this._createText();
    };
    _._createRect = function() {
      this.rect = new KDCore.UI.Sprite_UIRect(this.params.rect);
      return this.addChild(this.rect);
    };
    _._createText = function() {
      var x, y;
      this.text = new KDCore.UI.Sprite_UIText(this.params.text);
      ({x, y} = this.params.textMargins);
      this.text.move(x, y);
      return this.addChild(this.text);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {
    var Sprite_UIColorGauge;
    Sprite_UIColorGauge = class Sprite_UIColorGauge extends KDCore.UI.Sprite_UIGauge {
      constructor() {
        super(...arguments);
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          size: {
            w: 100,
            h: 40
          },
          fill: "#FFFFFF", // * В отличии от Gauge, тут цвет, а не картинка
          foreground: "", // картинка
          mask: "", // картинка
          backColor: "#000000".toCss(),
          backOpacity: 255,
          vertical: false,
          rootImageFolder: null //?optional
        };
      }

    };
    KDCore.UI.Sprite_UIColorGauge = Sprite_UIColorGauge;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UIColorGauge.prototype;
    //$[OVER]
    // * Заместо изображения используем простой Bitmap с заливкой цвета
    _._loadFillImage = function() {
      var fillBitmap;
      fillBitmap = new Bitmap(this.params.size.w, this.params.size.h);
      fillBitmap.fillAll(this.params.fill);
      this._createParts(fillBitmap);
    };
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  (function() {    // * Данный UI Элемент является только контейнером
    // * Он ничего не рисует, нужно добавлять в него
    // * контент методом addContent

    //rev 17.11.22
    var Sprite_UITooltip;
    Sprite_UITooltip = class Sprite_UITooltip extends KDCore.UI.Sprite_UIElement {
      constructor() {
        super(...arguments);
        this.opacity = 0;
      }

      isTooltipActive() {
        return (this._opThread != null) || (this._opChanger != null) || this.opacity > 0;
      }

      activateTooltip(x, y, parent) {
        if (this.isTooltipActive()) {
          return;
        }
        this.deactivateTooltip();
        this.move(x, y);
        this._opThread = new KDCore.TimedUpdate(this.params.delay, this.showTooltip.bind(this));
        if (!this.params.isGlobal && (parent != null)) {
          parent.addChild(this);
        } else {
          // * Always on Top on Scene  (if Global)
          SceneManager._scene.addChild(this);
        }
      }

      deactivateTooltip() {
        this._opThread = null;
        this._opChanger = null;
        return this.opacity = 0;
      }

      showTooltip() {
        this._opThread = null;
        this.appear(this.params.opacityChangeStep);
        if (this.params.cursorRelative === true) {
          return this.toCursor();
        }
      }

      update() {
        var ref;
        super.update();
        if ((ref = this._opThread) != null) {
          ref.update();
        }
        if (this.isTooltipActive() && this.params.cursorRelative === true) {
          return this.toCursor();
        }
      }

      // * Стандартный набор настроек
      defaultParams() {
        return {
          visible: true,
          delay: 30,
          opacityChangeStep: 35,
          margins: {
            x: 8,
            y: 8
          },
          isGlobal: true,
          cursorRelative: true
        };
      }

      toCursor() {
        var x, y;
        ({x, y} = this.params.margins);
        return this.move(TouchInput.x + x, TouchInput.y + y);
      }

      // * Основной метод, нужно добавить контент
      addContent(content) {
        return this.add(content);
      }

    };
    KDCore.UI.Sprite_UITooltip = Sprite_UITooltip;
  })();
  return (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = KDCore.UI.Sprite_UITooltip.prototype;
  })();
});

// ■ END PRIVATE.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__processEscapeCharacter, _;
  //@[DEFINES]
  _ = Window_Base.prototype;
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    switch (code) {
      case 'CHEX':
        this.pProcessColorChangeHex(this.pObtainEscapeParamHexColor(textState));
        break;
      case 'ISZ':
        this.pProcessDrawIconSized(this.pObtainEscapeParamIconArr(textState), textState);
        break;
      case 'PSZ':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, false);
        break;
      case 'PSB':
        this.pProcessDrawPictureSized(this.pObtainEscapeParamImgArr(textState), textState, true);
        break;
      default:
        ALIAS__processEscapeCharacter.call(this, code, textState);
    }
  };
  //?NEW
  _.pObtainEscapeParamHexColor = function(textState) {
    var arr, regExp, textPart;
    regExp = /^\[(#?([0-9a-fA-F]{2}){3}|([0-9a-fA-F]){3})\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      return arr[1];
    } else {
      return "";
    }
  };
  //?NEW
  _.pObtainEscapeParamIconArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          return parseInt(i.trim());
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pObtainEscapeParamImgArr = function(textState) {
    var arr, params, regExp, textPart;
    regExp = /^\[(\w+,\s*\d+,\s*\d+,\s*-?\d+,\s*-?\d+)\]/;
    textPart = textState.text.slice(textState.index);
    arr = regExp.exec(textPart);
    if (arr != null) {
      textState.index += arr[0].length;
      if (arr[1] != null) {
        params = arr[1].split(",").map(function(i) {
          if (isFinite(i)) {
            return parseInt(i.trim());
          } else {
            return i;
          }
        });
        return params;
      }
    }
    return [];
  };
  //?NEW
  _.pProcessColorChangeHex = function(colorHex) {
    var e;
    try {
      this.changeTextColor(colorHex);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this.resetTextColor();
    }
  };
  //?NEW
  //?params: [INDEX, SIZE, DX, DY]
  _.pProcessDrawIconSized = function(params, textState) {
    var dx, dy, e, iconIndex, size, staticMargin, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      size = params[1];
      if (params[1] == null) {
        if (KDCore.isMZ()) {
          size = ImageManager.iconWidth;
        } else {
          size = Window_Base._iconWidth;
        }
      }
      if (params[2] == null) {
        params[2] = 0;
      }
      if (params[3] == null) {
        params[3] = 0;
      }
      iconIndex = params[0];
      dx = params[2];
      dy = params[3];
      staticMargin = 2;
      x = textState.x + staticMargin + dx;
      y = textState.y + staticMargin + dy;
      if (KDCore.isMZ()) {
        if (textState.drawing === true) {
          // * Только в режиме рисования
          this.contents.drawIcon(x, y, iconIndex, size);
        }
      } else {
        this.contents.drawIcon(x, y, iconIndex, size);
      }
      textState.x += size + (staticMargin * 2) + dx;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  //?NEW
  //?params: [NAME, W, H, DX, DY]
  _.pProcessDrawPictureSized = function(params, textState, isUnderText = false) {
    var drawBitmap, drawProcess, e, height, name, source, width, x, y;
    try {
      if (params == null) {
        return;
      }
      if (params.isEmpty()) {
        return;
      }
      name = params[0];
      if (!String.any(name)) {
        return;
      }
      width = params[1];
      height = params[2];
      if (params[3] == null) {
        params[3] = 0;
      }
      if (params[4] == null) {
        params[4] = 0;
      }
      x = textState.x + 2 + params[3];
      y = textState.y + 2 + params[4];
      drawBitmap = this.contents;
      source = this.pGetSourceImageForDrawPictureSized(name);
      if ((KDCore.isMZ() && textState.drawing === true) || KDCore.isMV()) {
        drawProcess = function() {
          var e;
          try {
            if (drawBitmap == null) {
              return;
            }
            return drawBitmap.drawOnMe(source, x, y, width, height);
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        source.addLoadListener(drawProcess);
      }
      if (isUnderText !== true) {
        // * Вариант, что текст не будет "перескакивать" за ширину картинки а пойдёт поверх (т.е. фоновая картинка)
        // * Если картине не preload, то может "вылезти" на текст потом, так как рисоваться будет позже
        textState.x += width + 4 + params[3];
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  // * Данный метод вынесен отдельно, чтобы можно было переопределять папки
  return _.pGetSourceImageForDrawPictureSized = function(name) {
    return ImageManager.loadPicture(name);
  };
});


// Generated by CoffeeScript 2.6.1



// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var FloatingWindow;
  
    // * Общий класс для всех окон на карте
  /*parameters
      {
          draggable: true,
          closeButton: true,
          moveToCenter: true,
          alwaysOnTop: true,
          header: true
      }
  */
  FloatingWindow = class FloatingWindow extends KDCore.Sprite {
    constructor(mainParent, windowW, windowH, parameters) {
      super();
      this.mainParent = mainParent;
      this.windowW = windowW;
      this.windowH = windowH;
      this.parameters = parameters;
      this._init();
      return;
    }

    static StaticSettings() {
      return {
        draggable: false,
        closeButton: false,
        moveToCenter: false,
        alwaysOnTop: false,
        header: false
      };
    }

    // * Статическое окно с дочерним
    static StaticWindow(parent, sub) {
      var p, w;
      p = KDCore.FloatingWindow.StaticSettings();
      w = new KDCore.FloatingWindow(parent, sub.width, sub.height, p);
      w.setSubWindow(sub);
      w.open();
      return w;
    }

    isActive() {
      return this.visible === true;
    }

    isReady() {
      return this._isReady === true;
    }

    isMouseIn() {
      return this.inPosition(TouchInput);
    }

    isOpen() {
      return this.isActive();
    }

    // * Дочернее окно (если есть)
    sub() {
      return this._subw;
    }

    setOnReadyHandler(_readyHandler) {
      this._readyHandler = _readyHandler;
      if ((this._readyHandler != null) && this._isReady === true) {
        return this._readyHandler();
      }
    }

    isDraggable() {
      return this._isDraggable === true && (this._headerSpr != null) && this._headerSpr.visible === true && this.isOpen();
    }

    setCloseHandler(_closeHandler) {
      this._closeHandler = _closeHandler;
    }

    callCloseHandler() {
      if (this._closeHandler != null) {
        return this._closeHandler();
      }
    }

    setDraggingHandler(_dragHandler) {
      this._dragHandler = _dragHandler;
    }

    setDragEndHandler(_dragEndHandler) {
      this._dragEndHandler = _dragEndHandler;
    }

    hideHeader() {} //TODO:

    hideCloseButton() {} //TODO:

    
      // * Сдвиг заголовка по X, чтобы рамку не задевал
    headerMarginX() {
      return 2;
    }

    // * Сдвиг заголовка по Y, чтобы рамку не задевал
    headerMarginY() {
      return 0;
    }

    // * Стандартная позиция кнопки "закрыть"
    closeButtonPosition() {
      return {
        x: this.width - 24,
        y: 4
      };
    }

    open() {
      if (this.isOpen()) {
        return;
      }
      this._open();
      this._afterOpen();
    }

    close() {
      if (!this.isOpen()) {
        return;
      }
      this._close();
      this._afterClose();
    }

    rootImageFolder() {
      return "Alpha/Windows";
    }

    update() {
      super.update();
      this._updateMouseCheckThread();
      this._updateDragging();
    }

    // * Добавить спрайт на специальный слой контента
    addContent(sprite) {
      return this._contentLayer.addChild(sprite);
    }

    // * Добавить дочернее окно
    setSubWindow(w) {
      this._subw = w;
      this.addContent(w);
    }

    destroy() {
      this._close();
      return Sprite.prototype.destroy.call(this);
    }

  };
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ PRIVATE.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    //@[DEFINES]
    _ = FloatingWindow.prototype;
    _._init = function() {
      var ref;
      // * Окно всегда закрыто
      this.visible = false;
      // * Контент прогрузился?
      this._isReady = false;
      this._applyParameters();
      if (this._isAlwaysOnTop === false) {
        // * Если не всегда поверх окон, то добавляем сразу к родителю (один раз)
        if ((ref = this.mainParent) != null) {
          ref.addChild(this);
        }
      }
      this._initFloatingSystem();
      this._createLayers();
      this._loadWindowFrame();
    };
    // * Тут ничего не создавать, не двигать, так как
    // * конент создаётся Async, см. метод _createCustomElements
    _._applyParameters = function() {
      var p;
      this._applyDefaults();
      if (this.parameters == null) {
        return;
      }
      p = this.parameters;
      if (p.draggable != null) {
        this._isDraggable = p.draggable;
      }
      if (p.moveToCenter != null) {
        this._isMoveToCenter = p.moveToCenter;
      }
      if (p.header != null) {
        this._isHeaderVisible = p.header;
      }
      if (p.closeButton != null) {
        this._isHaveCloseButton = p.closeButton;
      }
      if (p.alwaysOnTop != null) {
        this._isAlwaysOnTop = p.alwaysOnTop;
      }
    };
    _._applyDefaults = function() {
      // * Окно можно перетаскивать мышкой (по умолчанию - да)
      this._isDraggable = true;
      this._isMoveToCenter = true;
      this._isHeaderVisible = true;
      this._isHaveCloseButton = true;
      this._isAlwaysOnTop = true;
    };
    _._initFloatingSystem = function() {
      if ($gameTemp._floatingWindows == null) {
        // * Создаём массив окон, он нужен для правильного
        // закрытия окон (по очереди) и перемещения drag and drop
        // с учётом верхнего окна
        $gameTemp._floatingWindows = [];
      }
      // * Вспомогательная переменная, чтобы не вызывать методы каждый кадр
      this._mouseIn = false;
      // * Тоже вспомогательная переменная
      this._dragging = false;
    };
    _._moveToStartPosition = function() {
      if (this._isMoveToCenter === true) {
        return this.moveToCenter(Graphics.width / 2, Graphics.height / 2);
      }
    };
    _._closeButtonClick = function() {
      // * При исчезании, кнопка не успевает себя "удалить"
      $gameTemp.kdButtonUnderMouse = null;
      this.callCloseHandler();
      return this.close();
    };
    (function() {      // * DRAGGING
      // -----------------------------------------------------------------------
      _._updateDragging = function() {
        if (!this.isDraggable()) {
          return;
        }
        // * Если мы уже двигаем окно, но мышка вышла за границы, то можно дальше двигать
        // * Только если мышка не в окне и не двигали ранее, то не проверяем
        if (this._mouseIn === false && this._dragging === false) {
          return;
        }
        // * Если существует объект который сейчас dragging
        if ($gameTemp.pkdDraggableInstance != null) {
          // * Если этот объект не этот объект, то выходим из метода
          if ($gameTemp.pkdDraggableInstance !== this) {
            return;
          }
        }
        if (TouchInput.isLongPressed()) {
          if (this._dragging === false) {
            this._onDragStart();
          } else {
            this._onDragging();
          }
        } else {
          this._stopDragging();
        }
      };
      _._onDragStart = function() {
        // * Проверка, в области Header или нет
        if (!this._isMouseInHeader()) {
          return;
        }
        // * Разница в координатах курсора и объекта, чтобы убрать эффект "прыжка"
        this.opacity = 200;
        this._deltaXY = this.getDeltaXY();
        this._dragging = true;
        // * Устанавливаем глобальную ссылку на объект перемещения
        $gameTemp.pkdDraggableInstance = this;
      };
      _.getDeltaXY = function() {
        var p;
        p = new KDCore.Point(this.x, this.y);
        return p.delta(TouchInput);
      };
      _._onDragging = function() {
        // * Защита от перетаскивания за края экрана
        if (!this._isNewMousePositionOnScreen()) {
          return;
        }
        this.move(TouchInput.x - this._deltaXY.x, TouchInput.y - this._deltaXY.y);
        if (this._dragHandler != null) {
          return this._dragHandler();
        }
      };
      _._stopDragging = function() {
        if (this._dragging === true) {
          this._dragging = false;
          this.opacity = 255;
          this._clearDraggableGlocalInstance();
          if (this._dragEndHandler != null) {
            this._dragEndHandler();
          }
        }
      };
      // * Освобождаем глобальную ссылку
      _._clearDraggableGlocalInstance = function() {
        if ($gameTemp.pkdDraggableInstance === this) {
          return $gameTemp.pkdDraggableInstance = null;
        }
      };
      _._isMouseInHeader = function() {
        if (this._headerSpr == null) {
          return false;
        }
        return this._headerSpr.isContainsPoint(TouchInput);
      };
      _._isNewMousePositionOnScreen = function() {
        return KDCore.Utils.isPointInScreen(TouchInput, 10);
      };
    })();
    (function() {      // -----------------------------------------------------------------------

      // * CREATE ELEMENTS
      // -----------------------------------------------------------------------
      
      // * Слои нужны, так как изображения загружаються асинхронно
      _._createLayers = function() {
        this._mainLayer = new Sprite();
        this._contentLayer = new Sprite();
        this._headerLayer = new Sprite();
        this._closeButtonLayer = new Sprite();
        this.addChild(this._mainLayer);
        this.addChild(this._contentLayer);
        this.addChild(this._headerLayer);
        this.addChild(this._closeButtonLayer);
      };
      _._loadWindowFrame = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "windowFrame").then(this._createWindow.bind(this));
      };
      _._createWindow = function(frameImage) {
        this.bitmap = new Bitmap(this.windowW, this.windowH);
        this.wFrame = new KDCore.Sprite_TilingFrame(this.windowW, this.windowH, frameImage);
        this._mainLayer.addChild(this.wFrame);
        this._createParts();
      };
      _._createParts = function() {
        this._loadHeader();
        if (this._isHaveCloseButton === true) {
          this._createCloseButton();
        }
        this._moveToStartPosition();
        this._createCustomElements();
        // * Окно готово
        this._isReady = true;
        if (this._readyHandler != null) {
          this._readyHandler();
        }
      };
      _._loadHeader = function() {
        return KDCore.Utils.loadImageAsync(this.rootImageFolder(), "headerLine").then(this._createHeader.bind(this));
      };
      _._createHeader = function(headerLineImage) {
        var w;
        w = this.windowW - (this.headerMarginX() * 2);
        this._headerSpr = new KDCore.Sprite_TilingLine(w, headerLineImage.height, headerLineImage);
        this._headerSpr.x = this.headerMarginX();
        this._headerSpr.y = this.headerMarginY();
        this._headerLayer.addChild(this._headerSpr);
        if (this._isHeaderVisible === true) {
          // * Сдвигаем контент, чтобы было начало под заголовком
          this._contentLayer.y += headerLineImage.height + this.headerMarginY();
        } else {
          this._headerSpr.visible = false;
        }
      };
      _._createCloseButton = function() {
        this._closeButton = new KDCore.ButtonM("windowCloseButton", false, this.rootImageFolder());
        this._closeButtonLayer.addChild(this._closeButton);
        this._closeButton.move(this.closeButtonPosition());
        this._closeButton.addClickHandler(this._closeButtonClick.bind(this));
      };
      //%[FOR CHILDRENS]
      // * Наследники создают свои элементы в этом методе
      // * Есть специальный метод addContent()
      _._createCustomElements = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * MOUSE
      // -----------------------------------------------------------------------
      
      // * Определение если мышка в области окна
      //TODO: Есть проблема при открытии окна сразу под курсором
      _._registerMouseInOut = function() {
        if (!this.isOpen()) {
          return;
        }
        if (this.isMouseIn()) {
          if (this._mouseIn === false) {
            this._mouseIn = true;
            this._onMouseIn();
          }
        } else {
          if (this._mouseIn === true) {
            this._mouseIn = false;
            this._onMouseOut();
          }
        }
      };
      // * Используется похожая система что и в KDCore.ButtonM
      _._onMouseIn = function() {
        return $gameTemp.floatingWindowUnderMouse = this;
      };
      _._onMouseOut = function() {
        if ($gameTemp.floatingWindowUnderMouse === this) {
          return $gameTemp.floatingWindowUnderMouse = null;
        }
      };
      // * Будем проверять мышка ли в окне только при открытом окне
      _._createMouseCheckThread = function() {
        this._mouseCheckThread = new KDCore.TimedUpdate(1, this._registerMouseInOut.bind(this));
        this._updateMouseCheckThread = () => {
          return this._mouseCheckThread.update();
        };
        return this._mouseCheckThread.call();
      };
      // * Когда окно закрывается, никаких проверок, обнуляем метод
      _._destroyMouseCheckThread = function() {
        this._mouseCheckThread = null;
        return this._updateMouseCheckThread = function() {};
      };
      //?DYNAMIC
      _._updateMouseCheckThread = function() {}; // * EMPTY
    })();
    (function() {      // -----------------------------------------------------------------------

      // * OPEN OR CLOSE
      // -----------------------------------------------------------------------
      _._open = function() {
        var ref, ref1;
        this.visible = true;
        if ((ref = $gameTemp._floatingWindows) != null) {
          ref.push(this);
        }
        if (this._isAlwaysOnTop === true) {
          // * Окно, которое открывается, всегда снова выше остальных (опция)
          if ((ref1 = this.mainParent) != null) {
            ref1.addChild(this);
          }
        }
        return this._createMouseCheckThread();
      };
      _._afterOpen = function() {}; // * EMPTY
      _._close = function() {
        this.visible = false;
        if (this._isAlwaysOnTop === true) {
          this.removeFromParent();
        }
        this._clearDraggableGlocalInstance();
        $gameTemp._floatingWindows.delete(this);
        this._onMouseOut();
        return this._destroyMouseCheckThread();
      };
      _._afterClose = function() {}; // * EMPTY
    })();
  })();
  (function() {    // ■ END PRIVATE.coffee
    //---------------------------------------------------------------------------

    // * Если окно под курсором, нельзя нажимать на карте для движения игрока
    // -----------------------------------------------------------------------
    (function() {      //╒═════════════════════════════════════════════════════════════════════════╛
      // ■ Scene_Map.coffee
      //╒═════════════════════════════════════════════════════════════════════════╛
      //---------------------------------------------------------------------------
      var ALIAS__isAnyButtonPressed, ALIAS__processMapTouch, _;
      
      //@[DEFINES]
      _ = Scene_Map.prototype;
      if (KDCore.isMZ()) {
        //@[ALIAS]
        ALIAS__isAnyButtonPressed = _.isAnyButtonPressed;
        _.isAnyButtonPressed = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return true;
          } else {
            return ALIAS__isAnyButtonPressed.call(this);
          }
        };
      } else {
        //@[ALIAS]
        ALIAS__processMapTouch = _.processMapTouch;
        _.processMapTouch = function() {
          if ($gameTemp.floatingWindowUnderMouse != null) {
            return;
          }
          return ALIAS__processMapTouch.call(this);
        };
      }
    })();
  })();
  //@[EXTEND]
  // ■ END Scene_Map.coffee
  //---------------------------------------------------------------------------
  return KDCore.FloatingWindow = FloatingWindow;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var HUI;
  // * Html UI Manager
  // * Набор инструментов для работы с HTML элементами интерфейса
  HUI = function() {};
  (function() {
    var _;
    //@[DEFINES]
    _ = HUI;
    _.init = function() {
      // * Данный набор инструментов могут использовать многие плагины, поэтому проверка
      if (this.isInited()) {
        return;
      }
      this._createMainParentInHtml();
      this._extendGraphicsClass();
      this.refresh();
    };
    // * Был ли создан (инициализирован) основной элемент
    _.isInited = function() {
      return this.parent() != null;
    };
    // * Основной элемент родитель для всех элементов UI
    _.parent = function() {
      return this._parent;
    };
    _.refresh = function() {
      if (!this.isInited()) {
        return;
      }
      Graphics._centerElement(this._parent);
      this._parent.style.zIndex = 2;
      this._parent.style.width = Graphics._canvas.style.width;
      this._parent.style.height = Graphics._canvas.style.height;
    };
    _.initReactComponents = function(withBabel = true) {
      var e;
      try {
        if (withBabel) {
          this._loadBabel();
        }
        return this._loadReact();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadBabel = function() {
      var e;
      try {
        return this._loadScript('https://unpkg.com/babel-standalone@6/babel.min.js');
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadReact = function() {
      var e;
      try {
        this._loadScript('https://unpkg.com/react@18/umd/react.production.min.js');
        return this._loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._loadScript = function(src, isReact = false) {
      var e, script;
      try {
        script = document.createElement("script");
        if (isReact === true) {
          script.type = "text/babel";
        } else {
          script.type = "text/javascript";
          script.crossorigin = true;
        }
        script.src = src;
        script.async = false;
        script.defer = true;
        script.onerror = function(e) {
          KDCore.warning('HUI: Failed to load script');
          return KDCore.warning(e);
        };
        document.body.appendChild(script);
        if (isReact === true) {
          return window.dispatchEvent(new Event('DOMContentLoaded'));
        }
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.loadReactComponent = function(componentName, folder = 'data/uiComponents') {
      var e, src;
      try {
        src = folder + "/" + componentName + ".js";
        return this._loadScript(src, true);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.addReactComponent = function(componentName, props, uniqueId = null) {
      var e, element, reactElement, root;
      try {
        if (window[componentName] == null) {
          KDCore.warning("Cant find " + componentName + ", make sure to load it first");
          return null;
        }
        if (uniqueId == null) {
          uniqueId = componentName;
        }
        // * Создаём отдельный DIV для каждого элемента (чтобы можно было удалять)
        element = this._getElementForReactComponent(uniqueId);
        root = ReactDOM.createRoot(element);
        reactElement = React.createElement(window[componentName], props);
        root.render(reactElement);
        return KDCore.HUI.getElement(uniqueId);
      } catch (error) {
        e = error;
        KDCore.warning(e);
        return null;
      }
    };
    // * Simple React Component (without JSX!)
    _.loadReactComponentFromFile = function(filename, props, uniqueId, handler, folder = "data/uiComponents") {
      var e, url, xhr;
      try {
        xhr = new XMLHttpRequest();
        url = folder + "/" + filename + ".js";
        xhr.open("GET", url);
        xhr.overrideMimeType("plain/text");
        xhr.onload = function() {
          var e, element;
          eval(xhr.responseText);
          element = KDCore.HUI.addReactComponent(filename, props, uniqueId);
          try {
            if (handler != null) {
              return handler(element, filename);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        return xhr.send();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _._getElementForReactComponent = function(componentId) {
      var e, element;
      try {
        this.removeElementById(componentId);
        element = this.addElement(componentId, '', null);
        return element;
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return null;
    };
    _.loadElementFromFile = function(filename, handler, folder = "data/uiComponents") {
      var e, url, xhr;
      try {
        xhr = new XMLHttpRequest();
        url = folder + "/" + filename + ".html";
        xhr.open("GET", url);
        xhr.overrideMimeType("plain/text");
        xhr.onload = function() {
          var e, element, htmlElementText;
          // * Хотел отдельные данные передавать и заменять в HTML текст
          // * Но если у нас есть React компоненты, то это не надо
          //htmlElementText = @convertDataKeys(xhr.responseText, dataKeys)
          htmlElementText = xhr.responseText;
          element = KDCore.HUI.addElement(filename, htmlElementText, null);
          try {
            if (handler != null) {
              return handler(element, filename);
            }
          } catch (error) {
            e = error;
            return KDCore.warning(e);
          }
        };
        return xhr.send();
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    _.addCSS = function(name, folder = "css") {
      var head;
      if (!this.isInited()) {
        this.init();
      }
      head = document.getElementsByTagName("head")[0];
      if (head != null) {
        head.insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"$0/$1.css\" />".replace("$0", folder).replace("$1", name));
      }
    };
    _.addElement = function(id, html, classes = null) {
      var cls, element, i, len;
      if (!this.isInited()) {
        this.init();
      }
      element = document.createElement("div");
      element.id = id;
      element.innerHTML = html;
      if (classes != null) {
        for (i = 0, len = classes.length; i < len; i++) {
          cls = classes[i];
          element.classList.add(cls);
        }
      }
      this._parent.appendChild(element);
      return element;
    };
    _.appendElement = function(element) {
      var e;
      try {
        return this._parent.appendChild(element);
      } catch (error) {
        e = error;
        return KDCore.warning(e);
      }
    };
    // * Может быть NULL
    _.getElement = function(id) {
      return document.getElementById(id);
    };
    _.removeElement = function(element) {
      if (element == null) {
        return;
      }
      if (KDCore.SDK.isString(element)) {
        this.removeElementById(element);
      } else {
        this.removeElementById(element.id);
      }
    };
    _.removeElementById = function(elementId) {
      var element;
      if (!this.isInited()) {
        return;
      }
      element = this.getElement(elementId);
      if (element != null) {
        this._parent.removeChild(element);
      }
    };
    // * PRIVATE ------------------------------------------------------------------
    _._createMainParentInHtml = function() {
      this._parent = document.createElement("div");
      this._parent.id = "KDCoreMain";
      document.body.appendChild(this._parent);
    };
    _._extendGraphicsClass = function() {
      var ALIAS___updateCanvas;
      //@[ALIAS]
      ALIAS___updateCanvas = Graphics._updateCanvas;
      Graphics._updateCanvas = function() {
        ALIAS___updateCanvas.call(this);
        return KDCore.HUI.refresh();
      };
    };
  })();
  //@[EXTEND]
  return KDCore.HUI = HUI;
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___onMouseUp, ALIAS___onRightButtonDown, ALIAS__clear, ALIAS__update, _;
  // * Right mouse pressed
  // * Определение когда правая (вторая) кнопка мыши зажата и удерживается

  //@[DEFINES]
  _ = TouchInput;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    this._kdMousePressed2 = false;
    this._kdPressedTime2 = 0;
  };
  //@[ALIAS]
  ALIAS___onRightButtonDown = _._onRightButtonDown;
  _._onRightButtonDown = function(event) {
    var check;
    ALIAS___onRightButtonDown.call(this, event);
    // * Это значит что ALIAS метод прошёл (верные X и Y в Canvas)
    if (KDCore.isMZ()) {
      check = this._newState.cancelled === true;
    } else {
      check = this._events.cancelled === true;
    }
    if (check === true) {
      this._kdMousePressed2 = true;
      this._kdPressedTime2 = 0;
    }
  };
  //@[ALIAS]
  ALIAS___onMouseUp = _._onMouseUp;
  _._onMouseUp = function(event) {
    ALIAS___onMouseUp.call(this, event);
    if (event.button === 2) {
      this._kdMousePressed2 = false;
    }
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this.kdIsPressed2()) {
      return this._kdPressedTime2++;
    }
  };
  //?[NEW]
  return _.kdIsPressed2 = function() {
    return this._kdMousePressed2 === true;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  // * Методы из RPG Maker MZ которых нет в RPG Maker MV
  if (KDCore.isMZ()) {
    return;
  }
  (function() {    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Scene_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Scene_Base.prototype;
    _.calcWindowHeight = function(numLines, selectable) {
      if (selectable === true) {
        return Window_Selectable.prototype.fittingHeight(numLines);
      } else {
        return Window_Base.prototype.fittingHeight(numLines);
      }
    };
  })();
  (function() {    // ■ END Scene_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Selectable.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Window_Selectable.prototype;
    _.itemLineRect = function(index) {
      return this.itemRect(index);
    };
  })();
  (function() {    // ■ END Window_Selectable.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Window_Base.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var ALIAS__initialize, ALIAS__processEscapeCharacter, _;
    //@[DEFINES]
    _ = Window_Base.prototype;
    // * Чтоб можно было Rectangle принимать в конструктор
    //@[ALIAS]
    ALIAS__initialize = _.initialize;
    _.initialize = function(x, y, w, h) {
      if (x instanceof PIXI.Rectangle || x instanceof Rectangle) {
        return ALIAS__initialize.call(this, x.x, x.y, x.width, x.height);
      } else {
        return ALIAS__initialize.call(this, ...arguments);
      }
    };
    
    // * В MZ используется FS для изменения размера шрифта в тексте
    //@[ALIAS]
    ALIAS__processEscapeCharacter = _.processEscapeCharacter;
    _.processEscapeCharacter = function(code, textState) {
      if (code === "FS") {
        this.contents.fontSize = this.obtainEscapeParam(textState);
      } else {
        ALIAS__processEscapeCharacter.call(this, code, textState);
      }
    };
  })();
  (function() {    // ■ END Window_Base.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Spriteset_Map.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Spriteset_Map.prototype;
    _.findTargetSprite = function(target) {
      return this._characterSprites.find(function(sprite) {
        return sprite.checkCharacter(target);
      });
    };
  })();
  return (function() {    // ■ END Spriteset_Map.coffee
    //---------------------------------------------------------------------------

    //╒═════════════════════════════════════════════════════════════════════════╛
    // ■ Sprite_Character.coffee
    //╒═════════════════════════════════════════════════════════════════════════╛
    //---------------------------------------------------------------------------
    var _;
    
    //@[DEFINES]
    _ = Sprite_Character.prototype;
    _.checkCharacter = function(character) {
      return this._character === character;
    };
  })();
});

// ■ END Sprite_Character.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_SM_processMapTouch, alias_TIOMM;
  //?SMouse better alternative
  if (KDCore.isMZ()) {
    return;
  }
  // * Для ButtonM
  //@[ALIAS]
  alias_SM_processMapTouch = Scene_Map.prototype.processMapTouch;
  Scene_Map.prototype.processMapTouch = function() {
    if ($gameTemp.kdButtonUnderMouse != null) {
      if ($gameTemp.kdButtonUnderMouse.parent == null) {
        return $gameTemp.kdButtonUnderMouse = null;
      } else {

      }
    } else {
      return alias_SM_processMapTouch.call(this);
    }
  };
  //@[ALIAS]
  alias_TIOMM = TouchInput._onMouseMove;
  TouchInput._onMouseMove = function(event) {
    var x, y;
    alias_TIOMM.call(this, event);
    x = Graphics.pageToCanvasX(event.pageX);
    y = Graphics.pageToCanvasY(event.pageY);
    if (Graphics.isInsideCanvas(x, y)) {
      return this._onHover(x, y);
    }
  };
  
  //?NEW, from MZ
  return TouchInput._onHover = function(_x, _y) {
    this._x = _x;
    this._y = _y;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS__clear, ALIAS__update, _;
  if (KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Input;
  //@[ALIAS]
  ALIAS__clear = _.clear;
  _.clear = function() {
    ALIAS__clear.call(this);
    return this._virtualButton = null;
  };
  //@[ALIAS]
  ALIAS__update = _.update;
  _.update = function() {
    ALIAS__update.call(this);
    if (this._virtualButton == null) {
      return;
    }
    this._latestButton = this._virtualButton;
    this._pressedTime = 0;
    return this._virtualButton = null;
  };
  return _.virtualClick = function(buttonName) {
    return this._virtualButton = buttonName;
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var ALIAS___startLoading, _;
  // * В версии RPG Maker MZ 1.5.0 появился баг что картинки не успевают прогрузится
  // * Данный фикс, возвращает старое поведение
  if (!KDCore.isMZ()) {
    return;
  }
  //@[DEFINES]
  _ = Bitmap.prototype;
  //@[ALIAS]
  ALIAS___startLoading = _._startLoading;
  return _._startLoading = function() {
    if (Utils.hasEncryptedImages()) {
      ALIAS___startLoading.call(this, ...arguments);
    } else {
      // * Это из RPG Maker MZ до версии 1.5
      this._image = new Image();
      this._image.onload = this._onLoad.bind(this);
      this._image.onerror = this._onError.bind(this);
      this._destroyCanvas();
      this._loadingState = "loading";
      this._image.src = this._url;
    }
  };
});


// Generated by CoffeeScript 2.6.1
KDCore.registerLibraryToLoad(function() {
  var alias_WBDTEX_KDCore29122021;
  // * <center>, для RPG Maker MZ и если нету Visu Message Core
  if (KDCore.isMZ()) {
    alias_WBDTEX_KDCore29122021 = Window_Base.prototype.drawTextEx;
    Window_Base.prototype.drawTextEx = function(text, x, y, width) {
      var e, newText;
      try {
        if (Imported.VisuMZ_1_MessageCore !== true) { // * В Visu уже есть <center>
          if (String.any(text) && text.contains("<center>")) {
            if (text[0] === "<" && text[1] === "c") { // * Должен быть в начале строки
              newText = text.replace("<center>", "");
              return this.drawTextExInCenter(newText, x, y, width);
            }
          }
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      return alias_WBDTEX_KDCore29122021.call(this, ...arguments);
    };
  }
  //?NEW
  Window_Base.prototype.drawTextExInCenter = function(text, x, y, width, height) {
    var e, newX, newY, textSize;
    try {
      if (KDCore.isMV()) { // * В MV нет поддержки данного метода
        this.drawTextEx(...arguments);
        return;
      }
      textSize = this.textSizeEx(text);
      newX = x + width / 2 - textSize.width / 2;
      if ((height != null) && height > 0) {
        newY = y + height / 2 - textSize.height / 2;
      } else {
        newY = y;
      }
      return this.drawTextEx(text, newX, newY, width);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this.drawTextEx(text, x, y, width);
    }
  };
  //?NEW
  Window_Base.prototype.drawTextExWithWordWrap = function(text, x, y, width, maxLines) {
    var maxWidth, wrappedText;
    this.drawTextEx("", 0, 0, 100);
    maxWidth = this.contentsWidth();
    wrappedText = Window_Message.prototype.pWordWrap.call(this, text, width || maxWidth, maxLines);
    return this.drawTextEx(wrappedText, x, y, width);
  };
  //?NEW
  return Window_Message.prototype.pWordWrap = function(text, maxWidth, maxLines) {
    var i, j, k, l, line, lines, newLines, ref, ref1, result, spaceLeft, spaceWidth, wordWidth, wordWidthWithSpace, words;
    lines = text.split('\n');
    maxWidth = maxWidth;
    spaceWidth = this.contents.measureTextWidth(' ');
    result = '';
    newLines = 1;
    for (i = k = 0, ref = lines.length; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
      spaceLeft = maxWidth;
      line = lines[i];
      words = line.split(' ');
      for (j = l = 0, ref1 = words.length; (0 <= ref1 ? l < ref1 : l > ref1); j = 0 <= ref1 ? ++l : --l) {
        wordWidth = this.contents.measureTextWidth(words[j].replaceAll(/\\C\[\d+\]/g, ""));
        wordWidthWithSpace = wordWidth + spaceWidth;
        if (j === 0 || wordWidthWithSpace > spaceLeft) {
          if (j > 0) {
            if (maxLines === newLines) {
              return result;
            }
            result += '\n';
            newLines++;
          }
          result += words[j];
          spaceLeft = maxWidth - wordWidth;
          if (j === 0 && line.match(/\\n\w*\s*<\s*\\n\[\w*\s*\]\s*>*/gi)) {
            spaceLeft += 200;
          }
        } else {
          spaceLeft -= wordWidthWithSpace;
          result += ' ' + words[j];
        }
      }
      if (i < lines.length - 1) {
        result += '\n';
      }
    }
    return result;
  };
});


// Generated by CoffeeScript 2.6.1
// * Последний файл (после всех классов)
// * Загружает библиотеки
var i, len, lib, ref, text;

if (KDCore._requireLoadLibrary === true) {
  ref = KDCore[KDCore._loader];
  for (i = 0, len = ref.length; i < len; i++) {
    lib = ref[i];
    lib();
  }
  KDCore[KDCore._loader] = [];
  text = "%c  KDCore is loaded " + KDCore.Version;
  console.log(text, 'background: #222; color: #82b2ff');
}

// ==========================================================================
// ==========================================================================

//   END OF PLUGINS CORE LIBRARY
//   (Next code is this plugin code)

// ==========================================================================
// ==========================================================================

//Plugin KDCore builded by PKD PluginBuilder 2.2 - 20.02.2024

//https://github.com/pixijs/spine

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Animation = (function () {
            function Animation(name, timelines, duration) {
                if (name == null)
                    throw new Error("name cannot be null.");
                if (timelines == null)
                    throw new Error("timelines cannot be null.");
                this.name = name;
                this.timelines = timelines;
                this.duration = duration;
            }
            Animation.prototype.apply = function (skeleton, lastTime, time, loop, events, alpha, blend, direction) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                if (loop && this.duration != 0) {
                    time %= this.duration;
                    if (lastTime > 0)
                        lastTime %= this.duration;
                }
                var timelines = this.timelines;
                for (var i = 0, n = timelines.length; i < n; i++)
                    timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
            };
            Animation.binarySearch = function (values, target, step) {
                if (step === void 0) { step = 1; }
                var low = 0;
                var high = values.length / step - 2;
                if (high == 0)
                    return step;
                var current = high >>> 1;
                while (true) {
                    if (values[(current + 1) * step] <= target)
                        low = current + 1;
                    else
                        high = current;
                    if (low == high)
                        return (low + 1) * step;
                    current = (low + high) >>> 1;
                }
            };
            Animation.linearSearch = function (values, target, step) {
                for (var i = 0, last = values.length - step; i <= last; i += step)
                    if (values[i] > target)
                        return i;
                return -1;
            };
            return Animation;
        }());
        core.Animation = Animation;
        var MixBlend;
        (function (MixBlend) {
            MixBlend[MixBlend["setup"] = 0] = "setup";
            MixBlend[MixBlend["first"] = 1] = "first";
            MixBlend[MixBlend["replace"] = 2] = "replace";
            MixBlend[MixBlend["add"] = 3] = "add";
        })(MixBlend = core.MixBlend || (core.MixBlend = {}));
        var MixDirection;
        (function (MixDirection) {
            MixDirection[MixDirection["mixIn"] = 0] = "mixIn";
            MixDirection[MixDirection["mixOut"] = 1] = "mixOut";
        })(MixDirection = core.MixDirection || (core.MixDirection = {}));
        var TimelineType;
        (function (TimelineType) {
            TimelineType[TimelineType["rotate"] = 0] = "rotate";
            TimelineType[TimelineType["translate"] = 1] = "translate";
            TimelineType[TimelineType["scale"] = 2] = "scale";
            TimelineType[TimelineType["shear"] = 3] = "shear";
            TimelineType[TimelineType["attachment"] = 4] = "attachment";
            TimelineType[TimelineType["color"] = 5] = "color";
            TimelineType[TimelineType["deform"] = 6] = "deform";
            TimelineType[TimelineType["event"] = 7] = "event";
            TimelineType[TimelineType["drawOrder"] = 8] = "drawOrder";
            TimelineType[TimelineType["ikConstraint"] = 9] = "ikConstraint";
            TimelineType[TimelineType["transformConstraint"] = 10] = "transformConstraint";
            TimelineType[TimelineType["pathConstraintPosition"] = 11] = "pathConstraintPosition";
            TimelineType[TimelineType["pathConstraintSpacing"] = 12] = "pathConstraintSpacing";
            TimelineType[TimelineType["pathConstraintMix"] = 13] = "pathConstraintMix";
            TimelineType[TimelineType["twoColor"] = 14] = "twoColor";
        })(TimelineType = core.TimelineType || (core.TimelineType = {}));
        var CurveTimeline = (function () {
            function CurveTimeline(frameCount) {
                if (frameCount <= 0)
                    throw new Error("frameCount must be > 0: " + frameCount);
                this.curves = core.Utils.newFloatArray((frameCount - 1) * CurveTimeline.BEZIER_SIZE);
            }
            CurveTimeline.prototype.getFrameCount = function () {
                return this.curves.length / CurveTimeline.BEZIER_SIZE + 1;
            };
            CurveTimeline.prototype.setLinear = function (frameIndex) {
                this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.LINEAR;
            };
            CurveTimeline.prototype.setStepped = function (frameIndex) {
                this.curves[frameIndex * CurveTimeline.BEZIER_SIZE] = CurveTimeline.STEPPED;
            };
            CurveTimeline.prototype.getCurveType = function (frameIndex) {
                var index = frameIndex * CurveTimeline.BEZIER_SIZE;
                if (index == this.curves.length)
                    return CurveTimeline.LINEAR;
                var type = this.curves[index];
                if (type == CurveTimeline.LINEAR)
                    return CurveTimeline.LINEAR;
                if (type == CurveTimeline.STEPPED)
                    return CurveTimeline.STEPPED;
                return CurveTimeline.BEZIER;
            };
            CurveTimeline.prototype.setCurve = function (frameIndex, cx1, cy1, cx2, cy2) {
                var tmpx = (-cx1 * 2 + cx2) * 0.03, tmpy = (-cy1 * 2 + cy2) * 0.03;
                var dddfx = ((cx1 - cx2) * 3 + 1) * 0.006, dddfy = ((cy1 - cy2) * 3 + 1) * 0.006;
                var ddfx = tmpx * 2 + dddfx, ddfy = tmpy * 2 + dddfy;
                var dfx = cx1 * 0.3 + tmpx + dddfx * 0.16666667, dfy = cy1 * 0.3 + tmpy + dddfy * 0.16666667;
                var i = frameIndex * CurveTimeline.BEZIER_SIZE;
                var curves = this.curves;
                curves[i++] = CurveTimeline.BEZIER;
                var x = dfx, y = dfy;
                for (var n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
                    curves[i] = x;
                    curves[i + 1] = y;
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    x += dfx;
                    y += dfy;
                }
            };
            CurveTimeline.prototype.getCurvePercent = function (frameIndex, percent) {
                percent = core.MathUtils.clamp(percent, 0, 1);
                var curves = this.curves;
                var i = frameIndex * CurveTimeline.BEZIER_SIZE;
                var type = curves[i];
                if (type == CurveTimeline.LINEAR)
                    return percent;
                if (type == CurveTimeline.STEPPED)
                    return 0;
                i++;
                var x = 0;
                for (var start = i, n = i + CurveTimeline.BEZIER_SIZE - 1; i < n; i += 2) {
                    x = curves[i];
                    if (x >= percent) {
                        var prevX = void 0, prevY = void 0;
                        if (i == start) {
                            prevX = 0;
                            prevY = 0;
                        }
                        else {
                            prevX = curves[i - 2];
                            prevY = curves[i - 1];
                        }
                        return prevY + (curves[i + 1] - prevY) * (percent - prevX) / (x - prevX);
                    }
                }
                var y = curves[i - 1];
                return y + (1 - y) * (percent - x) / (1 - x);
            };
            CurveTimeline.LINEAR = 0;
            CurveTimeline.STEPPED = 1;
            CurveTimeline.BEZIER = 2;
            CurveTimeline.BEZIER_SIZE = 10 * 2 - 1;
            return CurveTimeline;
        }());
        core.CurveTimeline = CurveTimeline;
        var RotateTimeline = (function (_super) {
            __extends(RotateTimeline, _super);
            function RotateTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount << 1);
                return _this;
            }
            RotateTimeline.prototype.getPropertyId = function () {
                return (TimelineType.rotate << 24) + this.boneIndex;
            };
            RotateTimeline.prototype.setFrame = function (frameIndex, time, degrees) {
                frameIndex <<= 1;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + RotateTimeline.ROTATION] = degrees;
            };
            RotateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (!bone.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            bone.rotation = bone.data.rotation;
                            return;
                        case MixBlend.first:
                            var r_1 = bone.data.rotation - bone.rotation;
                            bone.rotation += (r_1 - (16384 - ((16384.499999999996 - r_1 / 360) | 0)) * 360) * alpha;
                    }
                    return;
                }
                if (time >= frames[frames.length - RotateTimeline.ENTRIES]) {
                    var r_2 = frames[frames.length + RotateTimeline.PREV_ROTATION];
                    switch (blend) {
                        case MixBlend.setup:
                            bone.rotation = bone.data.rotation + r_2 * alpha;
                            break;
                        case MixBlend.first:
                        case MixBlend.replace:
                            r_2 += bone.data.rotation - bone.rotation;
                            r_2 -= (16384 - ((16384.499999999996 - r_2 / 360) | 0)) * 360;
                        case MixBlend.add:
                            bone.rotation += r_2 * alpha;
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time, RotateTimeline.ENTRIES);
                var prevRotation = frames[frame + RotateTimeline.PREV_ROTATION];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + RotateTimeline.PREV_TIME] - frameTime));
                var r = frames[frame + RotateTimeline.ROTATION] - prevRotation;
                r = prevRotation + (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * percent;
                switch (blend) {
                    case MixBlend.setup:
                        bone.rotation = bone.data.rotation + (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        r += bone.data.rotation - bone.rotation;
                    case MixBlend.add:
                        bone.rotation += (r - (16384 - ((16384.499999999996 - r / 360) | 0)) * 360) * alpha;
                }
            };
            RotateTimeline.ENTRIES = 2;
            RotateTimeline.PREV_TIME = -2;
            RotateTimeline.PREV_ROTATION = -1;
            RotateTimeline.ROTATION = 1;
            return RotateTimeline;
        }(CurveTimeline));
        core.RotateTimeline = RotateTimeline;
        var TranslateTimeline = (function (_super) {
            __extends(TranslateTimeline, _super);
            function TranslateTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * TranslateTimeline.ENTRIES);
                return _this;
            }
            TranslateTimeline.prototype.getPropertyId = function () {
                return (TimelineType.translate << 24) + this.boneIndex;
            };
            TranslateTimeline.prototype.setFrame = function (frameIndex, time, x, y) {
                frameIndex *= TranslateTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + TranslateTimeline.X] = x;
                this.frames[frameIndex + TranslateTimeline.Y] = y;
            };
            TranslateTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (!bone.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            bone.x = bone.data.x;
                            bone.y = bone.data.y;
                            return;
                        case MixBlend.first:
                            bone.x += (bone.data.x - bone.x) * alpha;
                            bone.y += (bone.data.y - bone.y) * alpha;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - TranslateTimeline.ENTRIES]) {
                    x = frames[frames.length + TranslateTimeline.PREV_X];
                    y = frames[frames.length + TranslateTimeline.PREV_Y];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, TranslateTimeline.ENTRIES);
                    x = frames[frame + TranslateTimeline.PREV_X];
                    y = frames[frame + TranslateTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / TranslateTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TranslateTimeline.PREV_TIME] - frameTime));
                    x += (frames[frame + TranslateTimeline.X] - x) * percent;
                    y += (frames[frame + TranslateTimeline.Y] - y) * percent;
                }
                switch (blend) {
                    case MixBlend.setup:
                        bone.x = bone.data.x + x * alpha;
                        bone.y = bone.data.y + y * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bone.x += (bone.data.x + x - bone.x) * alpha;
                        bone.y += (bone.data.y + y - bone.y) * alpha;
                        break;
                    case MixBlend.add:
                        bone.x += x * alpha;
                        bone.y += y * alpha;
                }
            };
            TranslateTimeline.ENTRIES = 3;
            TranslateTimeline.PREV_TIME = -3;
            TranslateTimeline.PREV_X = -2;
            TranslateTimeline.PREV_Y = -1;
            TranslateTimeline.X = 1;
            TranslateTimeline.Y = 2;
            return TranslateTimeline;
        }(CurveTimeline));
        core.TranslateTimeline = TranslateTimeline;
        var ScaleTimeline = (function (_super) {
            __extends(ScaleTimeline, _super);
            function ScaleTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            ScaleTimeline.prototype.getPropertyId = function () {
                return (TimelineType.scale << 24) + this.boneIndex;
            };
            ScaleTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (!bone.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            bone.scaleX = bone.data.scaleX;
                            bone.scaleY = bone.data.scaleY;
                            return;
                        case MixBlend.first:
                            bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
                            bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - ScaleTimeline.ENTRIES]) {
                    x = frames[frames.length + ScaleTimeline.PREV_X] * bone.data.scaleX;
                    y = frames[frames.length + ScaleTimeline.PREV_Y] * bone.data.scaleY;
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ScaleTimeline.ENTRIES);
                    x = frames[frame + ScaleTimeline.PREV_X];
                    y = frames[frame + ScaleTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ScaleTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ScaleTimeline.PREV_TIME] - frameTime));
                    x = (x + (frames[frame + ScaleTimeline.X] - x) * percent) * bone.data.scaleX;
                    y = (y + (frames[frame + ScaleTimeline.Y] - y) * percent) * bone.data.scaleY;
                }
                if (alpha == 1) {
                    if (blend == MixBlend.add) {
                        bone.scaleX += x - bone.data.scaleX;
                        bone.scaleY += y - bone.data.scaleY;
                    }
                    else {
                        bone.scaleX = x;
                        bone.scaleY = y;
                    }
                }
                else {
                    var bx = 0, by = 0;
                    if (direction == MixDirection.mixOut) {
                        switch (blend) {
                            case MixBlend.setup:
                                bx = bone.data.scaleX;
                                by = bone.data.scaleY;
                                bone.scaleX = bx + (Math.abs(x) * core.MathUtils.signum(bx) - bx) * alpha;
                                bone.scaleY = by + (Math.abs(y) * core.MathUtils.signum(by) - by) * alpha;
                                break;
                            case MixBlend.first:
                            case MixBlend.replace:
                                bx = bone.scaleX;
                                by = bone.scaleY;
                                bone.scaleX = bx + (Math.abs(x) * core.MathUtils.signum(bx) - bx) * alpha;
                                bone.scaleY = by + (Math.abs(y) * core.MathUtils.signum(by) - by) * alpha;
                                break;
                            case MixBlend.add:
                                bx = bone.scaleX;
                                by = bone.scaleY;
                                bone.scaleX = bx + (Math.abs(x) * core.MathUtils.signum(bx) - bone.data.scaleX) * alpha;
                                bone.scaleY = by + (Math.abs(y) * core.MathUtils.signum(by) - bone.data.scaleY) * alpha;
                        }
                    }
                    else {
                        switch (blend) {
                            case MixBlend.setup:
                                bx = Math.abs(bone.data.scaleX) * core.MathUtils.signum(x);
                                by = Math.abs(bone.data.scaleY) * core.MathUtils.signum(y);
                                bone.scaleX = bx + (x - bx) * alpha;
                                bone.scaleY = by + (y - by) * alpha;
                                break;
                            case MixBlend.first:
                            case MixBlend.replace:
                                bx = Math.abs(bone.scaleX) * core.MathUtils.signum(x);
                                by = Math.abs(bone.scaleY) * core.MathUtils.signum(y);
                                bone.scaleX = bx + (x - bx) * alpha;
                                bone.scaleY = by + (y - by) * alpha;
                                break;
                            case MixBlend.add:
                                bx = core.MathUtils.signum(x);
                                by = core.MathUtils.signum(y);
                                bone.scaleX = Math.abs(bone.scaleX) * bx + (x - Math.abs(bone.data.scaleX) * bx) * alpha;
                                bone.scaleY = Math.abs(bone.scaleY) * by + (y - Math.abs(bone.data.scaleY) * by) * alpha;
                        }
                    }
                }
            };
            return ScaleTimeline;
        }(TranslateTimeline));
        core.ScaleTimeline = ScaleTimeline;
        var ShearTimeline = (function (_super) {
            __extends(ShearTimeline, _super);
            function ShearTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            ShearTimeline.prototype.getPropertyId = function () {
                return (TimelineType.shear << 24) + this.boneIndex;
            };
            ShearTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var frames = this.frames;
                var bone = skeleton.bones[this.boneIndex];
                if (!bone.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            bone.shearX = bone.data.shearX;
                            bone.shearY = bone.data.shearY;
                            return;
                        case MixBlend.first:
                            bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
                            bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
                    }
                    return;
                }
                var x = 0, y = 0;
                if (time >= frames[frames.length - ShearTimeline.ENTRIES]) {
                    x = frames[frames.length + ShearTimeline.PREV_X];
                    y = frames[frames.length + ShearTimeline.PREV_Y];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ShearTimeline.ENTRIES);
                    x = frames[frame + ShearTimeline.PREV_X];
                    y = frames[frame + ShearTimeline.PREV_Y];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ShearTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ShearTimeline.PREV_TIME] - frameTime));
                    x = x + (frames[frame + ShearTimeline.X] - x) * percent;
                    y = y + (frames[frame + ShearTimeline.Y] - y) * percent;
                }
                switch (blend) {
                    case MixBlend.setup:
                        bone.shearX = bone.data.shearX + x * alpha;
                        bone.shearY = bone.data.shearY + y * alpha;
                        break;
                    case MixBlend.first:
                    case MixBlend.replace:
                        bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
                        bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
                        break;
                    case MixBlend.add:
                        bone.shearX += x * alpha;
                        bone.shearY += y * alpha;
                }
            };
            return ShearTimeline;
        }(TranslateTimeline));
        core.ShearTimeline = ShearTimeline;
        var ColorTimeline = (function (_super) {
            __extends(ColorTimeline, _super);
            function ColorTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * ColorTimeline.ENTRIES);
                return _this;
            }
            ColorTimeline.prototype.getPropertyId = function () {
                return (TimelineType.color << 24) + this.slotIndex;
            };
            ColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a) {
                frameIndex *= ColorTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + ColorTimeline.R] = r;
                this.frames[frameIndex + ColorTimeline.G] = g;
                this.frames[frameIndex + ColorTimeline.B] = b;
                this.frames[frameIndex + ColorTimeline.A] = a;
            };
            ColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var slot = skeleton.slots[this.slotIndex];
                if (!slot.bone.active)
                    return;
                var frames = this.frames;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            slot.color.setFromColor(slot.data.color);
                            return;
                        case MixBlend.first:
                            var color = slot.color, setup = slot.data.color;
                            color.add((setup.r - color.r) * alpha, (setup.g - color.g) * alpha, (setup.b - color.b) * alpha, (setup.a - color.a) * alpha);
                    }
                    return;
                }
                var r = 0, g = 0, b = 0, a = 0;
                if (time >= frames[frames.length - ColorTimeline.ENTRIES]) {
                    var i = frames.length;
                    r = frames[i + ColorTimeline.PREV_R];
                    g = frames[i + ColorTimeline.PREV_G];
                    b = frames[i + ColorTimeline.PREV_B];
                    a = frames[i + ColorTimeline.PREV_A];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, ColorTimeline.ENTRIES);
                    r = frames[frame + ColorTimeline.PREV_R];
                    g = frames[frame + ColorTimeline.PREV_G];
                    b = frames[frame + ColorTimeline.PREV_B];
                    a = frames[frame + ColorTimeline.PREV_A];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / ColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + ColorTimeline.PREV_TIME] - frameTime));
                    r += (frames[frame + ColorTimeline.R] - r) * percent;
                    g += (frames[frame + ColorTimeline.G] - g) * percent;
                    b += (frames[frame + ColorTimeline.B] - b) * percent;
                    a += (frames[frame + ColorTimeline.A] - a) * percent;
                }
                if (alpha == 1)
                    slot.color.set(r, g, b, a);
                else {
                    var color = slot.color;
                    if (blend == MixBlend.setup)
                        color.setFromColor(slot.data.color);
                    color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
                }
            };
            ColorTimeline.ENTRIES = 5;
            ColorTimeline.PREV_TIME = -5;
            ColorTimeline.PREV_R = -4;
            ColorTimeline.PREV_G = -3;
            ColorTimeline.PREV_B = -2;
            ColorTimeline.PREV_A = -1;
            ColorTimeline.R = 1;
            ColorTimeline.G = 2;
            ColorTimeline.B = 3;
            ColorTimeline.A = 4;
            return ColorTimeline;
        }(CurveTimeline));
        core.ColorTimeline = ColorTimeline;
        var TwoColorTimeline = (function (_super) {
            __extends(TwoColorTimeline, _super);
            function TwoColorTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * TwoColorTimeline.ENTRIES);
                return _this;
            }
            TwoColorTimeline.prototype.getPropertyId = function () {
                return (TimelineType.twoColor << 24) + this.slotIndex;
            };
            TwoColorTimeline.prototype.setFrame = function (frameIndex, time, r, g, b, a, r2, g2, b2) {
                frameIndex *= TwoColorTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + TwoColorTimeline.R] = r;
                this.frames[frameIndex + TwoColorTimeline.G] = g;
                this.frames[frameIndex + TwoColorTimeline.B] = b;
                this.frames[frameIndex + TwoColorTimeline.A] = a;
                this.frames[frameIndex + TwoColorTimeline.R2] = r2;
                this.frames[frameIndex + TwoColorTimeline.G2] = g2;
                this.frames[frameIndex + TwoColorTimeline.B2] = b2;
            };
            TwoColorTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var slot = skeleton.slots[this.slotIndex];
                if (!slot.bone.active)
                    return;
                var frames = this.frames;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            slot.color.setFromColor(slot.data.color);
                            slot.darkColor.setFromColor(slot.data.darkColor);
                            return;
                        case MixBlend.first:
                            var light = slot.color, dark = slot.darkColor, setupLight = slot.data.color, setupDark = slot.data.darkColor;
                            light.add((setupLight.r - light.r) * alpha, (setupLight.g - light.g) * alpha, (setupLight.b - light.b) * alpha, (setupLight.a - light.a) * alpha);
                            dark.add((setupDark.r - dark.r) * alpha, (setupDark.g - dark.g) * alpha, (setupDark.b - dark.b) * alpha, 0);
                    }
                    return;
                }
                var r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
                if (time >= frames[frames.length - TwoColorTimeline.ENTRIES]) {
                    var i = frames.length;
                    r = frames[i + TwoColorTimeline.PREV_R];
                    g = frames[i + TwoColorTimeline.PREV_G];
                    b = frames[i + TwoColorTimeline.PREV_B];
                    a = frames[i + TwoColorTimeline.PREV_A];
                    r2 = frames[i + TwoColorTimeline.PREV_R2];
                    g2 = frames[i + TwoColorTimeline.PREV_G2];
                    b2 = frames[i + TwoColorTimeline.PREV_B2];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, TwoColorTimeline.ENTRIES);
                    r = frames[frame + TwoColorTimeline.PREV_R];
                    g = frames[frame + TwoColorTimeline.PREV_G];
                    b = frames[frame + TwoColorTimeline.PREV_B];
                    a = frames[frame + TwoColorTimeline.PREV_A];
                    r2 = frames[frame + TwoColorTimeline.PREV_R2];
                    g2 = frames[frame + TwoColorTimeline.PREV_G2];
                    b2 = frames[frame + TwoColorTimeline.PREV_B2];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / TwoColorTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TwoColorTimeline.PREV_TIME] - frameTime));
                    r += (frames[frame + TwoColorTimeline.R] - r) * percent;
                    g += (frames[frame + TwoColorTimeline.G] - g) * percent;
                    b += (frames[frame + TwoColorTimeline.B] - b) * percent;
                    a += (frames[frame + TwoColorTimeline.A] - a) * percent;
                    r2 += (frames[frame + TwoColorTimeline.R2] - r2) * percent;
                    g2 += (frames[frame + TwoColorTimeline.G2] - g2) * percent;
                    b2 += (frames[frame + TwoColorTimeline.B2] - b2) * percent;
                }
                if (alpha == 1) {
                    slot.color.set(r, g, b, a);
                    slot.darkColor.set(r2, g2, b2, 1);
                }
                else {
                    var light = slot.color, dark = slot.darkColor;
                    if (blend == MixBlend.setup) {
                        light.setFromColor(slot.data.color);
                        dark.setFromColor(slot.data.darkColor);
                    }
                    light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
                    dark.add((r2 - dark.r) * alpha, (g2 - dark.g) * alpha, (b2 - dark.b) * alpha, 0);
                }
            };
            TwoColorTimeline.ENTRIES = 8;
            TwoColorTimeline.PREV_TIME = -8;
            TwoColorTimeline.PREV_R = -7;
            TwoColorTimeline.PREV_G = -6;
            TwoColorTimeline.PREV_B = -5;
            TwoColorTimeline.PREV_A = -4;
            TwoColorTimeline.PREV_R2 = -3;
            TwoColorTimeline.PREV_G2 = -2;
            TwoColorTimeline.PREV_B2 = -1;
            TwoColorTimeline.R = 1;
            TwoColorTimeline.G = 2;
            TwoColorTimeline.B = 3;
            TwoColorTimeline.A = 4;
            TwoColorTimeline.R2 = 5;
            TwoColorTimeline.G2 = 6;
            TwoColorTimeline.B2 = 7;
            return TwoColorTimeline;
        }(CurveTimeline));
        core.TwoColorTimeline = TwoColorTimeline;
        var AttachmentTimeline = (function () {
            function AttachmentTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.attachmentNames = new Array(frameCount);
            }
            AttachmentTimeline.prototype.getPropertyId = function () {
                return (TimelineType.attachment << 24) + this.slotIndex;
            };
            AttachmentTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            AttachmentTimeline.prototype.setFrame = function (frameIndex, time, attachmentName) {
                this.frames[frameIndex] = time;
                this.attachmentNames[frameIndex] = attachmentName;
            };
            AttachmentTimeline.prototype.apply = function (skeleton, lastTime, time, events, alpha, blend, direction) {
                var slot = skeleton.slots[this.slotIndex];
                if (!slot.bone.active)
                    return;
                if (direction == MixDirection.mixOut && blend == MixBlend.setup) {
                    var attachmentName_1 = slot.data.attachmentName;
                    slot.setAttachment(attachmentName_1 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_1));
                    return;
                }
                var frames = this.frames;
                if (time < frames[0]) {
                    if (blend == MixBlend.setup || blend == MixBlend.first) {
                        var attachmentName_2 = slot.data.attachmentName;
                        slot.setAttachment(attachmentName_2 == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName_2));
                    }
                    return;
                }
                var frameIndex = 0;
                if (time >= frames[frames.length - 1])
                    frameIndex = frames.length - 1;
                else
                    frameIndex = Animation.binarySearch(frames, time, 1) - 1;
                var attachmentName = this.attachmentNames[frameIndex];
                skeleton.slots[this.slotIndex]
                    .setAttachment(attachmentName == null ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
            };
            return AttachmentTimeline;
        }());
        core.AttachmentTimeline = AttachmentTimeline;
        var zeros = null;
        var DeformTimeline = (function (_super) {
            __extends(DeformTimeline, _super);
            function DeformTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount);
                _this.frameVertices = new Array(frameCount);
                if (zeros == null)
                    zeros = core.Utils.newFloatArray(64);
                return _this;
            }
            DeformTimeline.prototype.getPropertyId = function () {
                return (TimelineType.deform << 27) + +this.attachment.id + this.slotIndex;
            };
            DeformTimeline.prototype.setFrame = function (frameIndex, time, vertices) {
                this.frames[frameIndex] = time;
                this.frameVertices[frameIndex] = vertices;
            };
            DeformTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var slot = skeleton.slots[this.slotIndex];
                if (!slot.bone.active)
                    return;
                var slotAttachment = slot.getAttachment();
                if (!(slotAttachment instanceof core.VertexAttachment) || !(slotAttachment.deformAttachment == this.attachment))
                    return;
                var deformArray = slot.deform;
                if (deformArray.length == 0)
                    blend = MixBlend.setup;
                var frameVertices = this.frameVertices;
                var vertexCount = frameVertices[0].length;
                var frames = this.frames;
                if (time < frames[0]) {
                    var vertexAttachment = slotAttachment;
                    switch (blend) {
                        case MixBlend.setup:
                            deformArray.length = 0;
                            return;
                        case MixBlend.first:
                            if (alpha == 1) {
                                deformArray.length = 0;
                                break;
                            }
                            var deform_1 = core.Utils.setArraySize(deformArray, vertexCount);
                            if (vertexAttachment.bones == null) {
                                var setupVertices = vertexAttachment.vertices;
                                for (var i = 0; i < vertexCount; i++)
                                    deform_1[i] += (setupVertices[i] - deform_1[i]) * alpha;
                            }
                            else {
                                alpha = 1 - alpha;
                                for (var i = 0; i < vertexCount; i++)
                                    deform_1[i] *= alpha;
                            }
                    }
                    return;
                }
                var deform = core.Utils.setArraySize(deformArray, vertexCount);
                if (time >= frames[frames.length - 1]) {
                    var lastVertices = frameVertices[frames.length - 1];
                    if (alpha == 1) {
                        if (blend == MixBlend.add) {
                            var vertexAttachment = slotAttachment;
                            if (vertexAttachment.bones == null) {
                                var setupVertices = vertexAttachment.vertices;
                                for (var i_1 = 0; i_1 < vertexCount; i_1++) {
                                    deform[i_1] += lastVertices[i_1] - setupVertices[i_1];
                                }
                            }
                            else {
                                for (var i_2 = 0; i_2 < vertexCount; i_2++)
                                    deform[i_2] += lastVertices[i_2];
                            }
                        }
                        else {
                            core.Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
                        }
                    }
                    else {
                        switch (blend) {
                            case MixBlend.setup: {
                                var vertexAttachment_1 = slotAttachment;
                                if (vertexAttachment_1.bones == null) {
                                    var setupVertices = vertexAttachment_1.vertices;
                                    for (var i_3 = 0; i_3 < vertexCount; i_3++) {
                                        var setup = setupVertices[i_3];
                                        deform[i_3] = setup + (lastVertices[i_3] - setup) * alpha;
                                    }
                                }
                                else {
                                    for (var i_4 = 0; i_4 < vertexCount; i_4++)
                                        deform[i_4] = lastVertices[i_4] * alpha;
                                }
                                break;
                            }
                            case MixBlend.first:
                            case MixBlend.replace:
                                for (var i_5 = 0; i_5 < vertexCount; i_5++)
                                    deform[i_5] += (lastVertices[i_5] - deform[i_5]) * alpha;
                            case MixBlend.add:
                                var vertexAttachment = slotAttachment;
                                if (vertexAttachment.bones == null) {
                                    var setupVertices = vertexAttachment.vertices;
                                    for (var i_6 = 0; i_6 < vertexCount; i_6++) {
                                        deform[i_6] += (lastVertices[i_6] - setupVertices[i_6]) * alpha;
                                    }
                                }
                                else {
                                    for (var i_7 = 0; i_7 < vertexCount; i_7++)
                                        deform[i_7] += lastVertices[i_7] * alpha;
                                }
                        }
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time);
                var prevVertices = frameVertices[frame - 1];
                var nextVertices = frameVertices[frame];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent(frame - 1, 1 - (time - frameTime) / (frames[frame - 1] - frameTime));
                if (alpha == 1) {
                    if (blend == MixBlend.add) {
                        var vertexAttachment = slotAttachment;
                        if (vertexAttachment.bones == null) {
                            var setupVertices = vertexAttachment.vertices;
                            for (var i_8 = 0; i_8 < vertexCount; i_8++) {
                                var prev = prevVertices[i_8];
                                deform[i_8] += prev + (nextVertices[i_8] - prev) * percent - setupVertices[i_8];
                            }
                        }
                        else {
                            for (var i_9 = 0; i_9 < vertexCount; i_9++) {
                                var prev = prevVertices[i_9];
                                deform[i_9] += prev + (nextVertices[i_9] - prev) * percent;
                            }
                        }
                    }
                    else {
                        for (var i_10 = 0; i_10 < vertexCount; i_10++) {
                            var prev = prevVertices[i_10];
                            deform[i_10] = prev + (nextVertices[i_10] - prev) * percent;
                        }
                    }
                }
                else {
                    switch (blend) {
                        case MixBlend.setup: {
                            var vertexAttachment_2 = slotAttachment;
                            if (vertexAttachment_2.bones == null) {
                                var setupVertices = vertexAttachment_2.vertices;
                                for (var i_11 = 0; i_11 < vertexCount; i_11++) {
                                    var prev = prevVertices[i_11], setup = setupVertices[i_11];
                                    deform[i_11] = setup + (prev + (nextVertices[i_11] - prev) * percent - setup) * alpha;
                                }
                            }
                            else {
                                for (var i_12 = 0; i_12 < vertexCount; i_12++) {
                                    var prev = prevVertices[i_12];
                                    deform[i_12] = (prev + (nextVertices[i_12] - prev) * percent) * alpha;
                                }
                            }
                            break;
                        }
                        case MixBlend.first:
                        case MixBlend.replace:
                            for (var i_13 = 0; i_13 < vertexCount; i_13++) {
                                var prev = prevVertices[i_13];
                                deform[i_13] += (prev + (nextVertices[i_13] - prev) * percent - deform[i_13]) * alpha;
                            }
                            break;
                        case MixBlend.add:
                            var vertexAttachment = slotAttachment;
                            if (vertexAttachment.bones == null) {
                                var setupVertices = vertexAttachment.vertices;
                                for (var i_14 = 0; i_14 < vertexCount; i_14++) {
                                    var prev = prevVertices[i_14];
                                    deform[i_14] += (prev + (nextVertices[i_14] - prev) * percent - setupVertices[i_14]) * alpha;
                                }
                            }
                            else {
                                for (var i_15 = 0; i_15 < vertexCount; i_15++) {
                                    var prev = prevVertices[i_15];
                                    deform[i_15] += (prev + (nextVertices[i_15] - prev) * percent) * alpha;
                                }
                            }
                    }
                }
            };
            return DeformTimeline;
        }(CurveTimeline));
        core.DeformTimeline = DeformTimeline;
        var EventTimeline = (function () {
            function EventTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.events = new Array(frameCount);
            }
            EventTimeline.prototype.getPropertyId = function () {
                return TimelineType.event << 24;
            };
            EventTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            EventTimeline.prototype.setFrame = function (frameIndex, event) {
                this.frames[frameIndex] = event.time;
                this.events[frameIndex] = event;
            };
            EventTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                if (firedEvents == null)
                    return;
                var frames = this.frames;
                var frameCount = this.frames.length;
                if (lastTime > time) {
                    this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
                    lastTime = -1;
                }
                else if (lastTime >= frames[frameCount - 1])
                    return;
                if (time < frames[0])
                    return;
                var frame = 0;
                if (lastTime < frames[0])
                    frame = 0;
                else {
                    frame = Animation.binarySearch(frames, lastTime);
                    var frameTime = frames[frame];
                    while (frame > 0) {
                        if (frames[frame - 1] != frameTime)
                            break;
                        frame--;
                    }
                }
                for (; frame < frameCount && time >= frames[frame]; frame++)
                    firedEvents.push(this.events[frame]);
            };
            return EventTimeline;
        }());
        core.EventTimeline = EventTimeline;
        var DrawOrderTimeline = (function () {
            function DrawOrderTimeline(frameCount) {
                this.frames = core.Utils.newFloatArray(frameCount);
                this.drawOrders = new Array(frameCount);
            }
            DrawOrderTimeline.prototype.getPropertyId = function () {
                return TimelineType.drawOrder << 24;
            };
            DrawOrderTimeline.prototype.getFrameCount = function () {
                return this.frames.length;
            };
            DrawOrderTimeline.prototype.setFrame = function (frameIndex, time, drawOrder) {
                this.frames[frameIndex] = time;
                this.drawOrders[frameIndex] = drawOrder;
            };
            DrawOrderTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var drawOrder = skeleton.drawOrder;
                var slots = skeleton.slots;
                if (direction == MixDirection.mixOut && blend == MixBlend.setup) {
                    core.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
                    return;
                }
                var frames = this.frames;
                if (time < frames[0]) {
                    if (blend == MixBlend.setup || blend == MixBlend.first)
                        core.Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
                    return;
                }
                var frame = 0;
                if (time >= frames[frames.length - 1])
                    frame = frames.length - 1;
                else
                    frame = Animation.binarySearch(frames, time) - 1;
                var drawOrderToSetupIndex = this.drawOrders[frame];
                if (drawOrderToSetupIndex == null)
                    core.Utils.arrayCopy(slots, 0, drawOrder, 0, slots.length);
                else {
                    for (var i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
                        drawOrder[i] = slots[drawOrderToSetupIndex[i]];
                }
            };
            return DrawOrderTimeline;
        }());
        core.DrawOrderTimeline = DrawOrderTimeline;
        var IkConstraintTimeline = (function (_super) {
            __extends(IkConstraintTimeline, _super);
            function IkConstraintTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * IkConstraintTimeline.ENTRIES);
                return _this;
            }
            IkConstraintTimeline.prototype.getPropertyId = function () {
                return (TimelineType.ikConstraint << 24) + this.ikConstraintIndex;
            };
            IkConstraintTimeline.prototype.setFrame = function (frameIndex, time, mix, softness, bendDirection, compress, stretch) {
                frameIndex *= IkConstraintTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + IkConstraintTimeline.MIX] = mix;
                this.frames[frameIndex + IkConstraintTimeline.SOFTNESS] = softness;
                this.frames[frameIndex + IkConstraintTimeline.BEND_DIRECTION] = bendDirection;
                this.frames[frameIndex + IkConstraintTimeline.COMPRESS] = compress ? 1 : 0;
                this.frames[frameIndex + IkConstraintTimeline.STRETCH] = stretch ? 1 : 0;
            };
            IkConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var frames = this.frames;
                var constraint = skeleton.ikConstraints[this.ikConstraintIndex];
                if (!constraint.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            constraint.mix = constraint.data.mix;
                            constraint.softness = constraint.data.softness;
                            constraint.bendDirection = constraint.data.bendDirection;
                            constraint.compress = constraint.data.compress;
                            constraint.stretch = constraint.data.stretch;
                            return;
                        case MixBlend.first:
                            constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
                            constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
                            constraint.bendDirection = constraint.data.bendDirection;
                            constraint.compress = constraint.data.compress;
                            constraint.stretch = constraint.data.stretch;
                    }
                    return;
                }
                if (time >= frames[frames.length - IkConstraintTimeline.ENTRIES]) {
                    if (blend == MixBlend.setup) {
                        constraint.mix = constraint.data.mix + (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.data.mix) * alpha;
                        constraint.softness = constraint.data.softness
                            + (frames[frames.length + IkConstraintTimeline.PREV_SOFTNESS] - constraint.data.softness) * alpha;
                        if (direction == MixDirection.mixOut) {
                            constraint.bendDirection = constraint.data.bendDirection;
                            constraint.compress = constraint.data.compress;
                            constraint.stretch = constraint.data.stretch;
                        }
                        else {
                            constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
                            constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
                            constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
                        }
                    }
                    else {
                        constraint.mix += (frames[frames.length + IkConstraintTimeline.PREV_MIX] - constraint.mix) * alpha;
                        constraint.softness += (frames[frames.length + IkConstraintTimeline.PREV_SOFTNESS] - constraint.softness) * alpha;
                        if (direction == MixDirection.mixIn) {
                            constraint.bendDirection = frames[frames.length + IkConstraintTimeline.PREV_BEND_DIRECTION];
                            constraint.compress = frames[frames.length + IkConstraintTimeline.PREV_COMPRESS] != 0;
                            constraint.stretch = frames[frames.length + IkConstraintTimeline.PREV_STRETCH] != 0;
                        }
                    }
                    return;
                }
                var frame = Animation.binarySearch(frames, time, IkConstraintTimeline.ENTRIES);
                var mix = frames[frame + IkConstraintTimeline.PREV_MIX];
                var softness = frames[frame + IkConstraintTimeline.PREV_SOFTNESS];
                var frameTime = frames[frame];
                var percent = this.getCurvePercent(frame / IkConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + IkConstraintTimeline.PREV_TIME] - frameTime));
                if (blend == MixBlend.setup) {
                    constraint.mix = constraint.data.mix + (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.data.mix) * alpha;
                    constraint.softness = constraint.data.softness
                        + (softness + (frames[frame + IkConstraintTimeline.SOFTNESS] - softness) * percent - constraint.data.softness) * alpha;
                    if (direction == MixDirection.mixOut) {
                        constraint.bendDirection = constraint.data.bendDirection;
                        constraint.compress = constraint.data.compress;
                        constraint.stretch = constraint.data.stretch;
                    }
                    else {
                        constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
                        constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
                        constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
                    }
                }
                else {
                    constraint.mix += (mix + (frames[frame + IkConstraintTimeline.MIX] - mix) * percent - constraint.mix) * alpha;
                    constraint.softness += (softness + (frames[frame + IkConstraintTimeline.SOFTNESS] - softness) * percent - constraint.softness) * alpha;
                    if (direction == MixDirection.mixIn) {
                        constraint.bendDirection = frames[frame + IkConstraintTimeline.PREV_BEND_DIRECTION];
                        constraint.compress = frames[frame + IkConstraintTimeline.PREV_COMPRESS] != 0;
                        constraint.stretch = frames[frame + IkConstraintTimeline.PREV_STRETCH] != 0;
                    }
                }
            };
            IkConstraintTimeline.ENTRIES = 6;
            IkConstraintTimeline.PREV_TIME = -6;
            IkConstraintTimeline.PREV_MIX = -5;
            IkConstraintTimeline.PREV_SOFTNESS = -4;
            IkConstraintTimeline.PREV_BEND_DIRECTION = -3;
            IkConstraintTimeline.PREV_COMPRESS = -2;
            IkConstraintTimeline.PREV_STRETCH = -1;
            IkConstraintTimeline.MIX = 1;
            IkConstraintTimeline.SOFTNESS = 2;
            IkConstraintTimeline.BEND_DIRECTION = 3;
            IkConstraintTimeline.COMPRESS = 4;
            IkConstraintTimeline.STRETCH = 5;
            return IkConstraintTimeline;
        }(CurveTimeline));
        core.IkConstraintTimeline = IkConstraintTimeline;
        var TransformConstraintTimeline = (function (_super) {
            __extends(TransformConstraintTimeline, _super);
            function TransformConstraintTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * TransformConstraintTimeline.ENTRIES);
                return _this;
            }
            TransformConstraintTimeline.prototype.getPropertyId = function () {
                return (TimelineType.transformConstraint << 24) + this.transformConstraintIndex;
            };
            TransformConstraintTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix, scaleMix, shearMix) {
                frameIndex *= TransformConstraintTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + TransformConstraintTimeline.ROTATE] = rotateMix;
                this.frames[frameIndex + TransformConstraintTimeline.TRANSLATE] = translateMix;
                this.frames[frameIndex + TransformConstraintTimeline.SCALE] = scaleMix;
                this.frames[frameIndex + TransformConstraintTimeline.SHEAR] = shearMix;
            };
            TransformConstraintTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var frames = this.frames;
                var constraint = skeleton.transformConstraints[this.transformConstraintIndex];
                if (!constraint.active)
                    return;
                if (time < frames[0]) {
                    var data = constraint.data;
                    switch (blend) {
                        case MixBlend.setup:
                            constraint.rotateMix = data.rotateMix;
                            constraint.translateMix = data.translateMix;
                            constraint.scaleMix = data.scaleMix;
                            constraint.shearMix = data.shearMix;
                            return;
                        case MixBlend.first:
                            constraint.rotateMix += (data.rotateMix - constraint.rotateMix) * alpha;
                            constraint.translateMix += (data.translateMix - constraint.translateMix) * alpha;
                            constraint.scaleMix += (data.scaleMix - constraint.scaleMix) * alpha;
                            constraint.shearMix += (data.shearMix - constraint.shearMix) * alpha;
                    }
                    return;
                }
                var rotate = 0, translate = 0, scale = 0, shear = 0;
                if (time >= frames[frames.length - TransformConstraintTimeline.ENTRIES]) {
                    var i = frames.length;
                    rotate = frames[i + TransformConstraintTimeline.PREV_ROTATE];
                    translate = frames[i + TransformConstraintTimeline.PREV_TRANSLATE];
                    scale = frames[i + TransformConstraintTimeline.PREV_SCALE];
                    shear = frames[i + TransformConstraintTimeline.PREV_SHEAR];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, TransformConstraintTimeline.ENTRIES);
                    rotate = frames[frame + TransformConstraintTimeline.PREV_ROTATE];
                    translate = frames[frame + TransformConstraintTimeline.PREV_TRANSLATE];
                    scale = frames[frame + TransformConstraintTimeline.PREV_SCALE];
                    shear = frames[frame + TransformConstraintTimeline.PREV_SHEAR];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / TransformConstraintTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + TransformConstraintTimeline.PREV_TIME] - frameTime));
                    rotate += (frames[frame + TransformConstraintTimeline.ROTATE] - rotate) * percent;
                    translate += (frames[frame + TransformConstraintTimeline.TRANSLATE] - translate) * percent;
                    scale += (frames[frame + TransformConstraintTimeline.SCALE] - scale) * percent;
                    shear += (frames[frame + TransformConstraintTimeline.SHEAR] - shear) * percent;
                }
                if (blend == MixBlend.setup) {
                    var data = constraint.data;
                    constraint.rotateMix = data.rotateMix + (rotate - data.rotateMix) * alpha;
                    constraint.translateMix = data.translateMix + (translate - data.translateMix) * alpha;
                    constraint.scaleMix = data.scaleMix + (scale - data.scaleMix) * alpha;
                    constraint.shearMix = data.shearMix + (shear - data.shearMix) * alpha;
                }
                else {
                    constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
                    constraint.translateMix += (translate - constraint.translateMix) * alpha;
                    constraint.scaleMix += (scale - constraint.scaleMix) * alpha;
                    constraint.shearMix += (shear - constraint.shearMix) * alpha;
                }
            };
            TransformConstraintTimeline.ENTRIES = 5;
            TransformConstraintTimeline.PREV_TIME = -5;
            TransformConstraintTimeline.PREV_ROTATE = -4;
            TransformConstraintTimeline.PREV_TRANSLATE = -3;
            TransformConstraintTimeline.PREV_SCALE = -2;
            TransformConstraintTimeline.PREV_SHEAR = -1;
            TransformConstraintTimeline.ROTATE = 1;
            TransformConstraintTimeline.TRANSLATE = 2;
            TransformConstraintTimeline.SCALE = 3;
            TransformConstraintTimeline.SHEAR = 4;
            return TransformConstraintTimeline;
        }(CurveTimeline));
        core.TransformConstraintTimeline = TransformConstraintTimeline;
        var PathConstraintPositionTimeline = (function (_super) {
            __extends(PathConstraintPositionTimeline, _super);
            function PathConstraintPositionTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * PathConstraintPositionTimeline.ENTRIES);
                return _this;
            }
            PathConstraintPositionTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintPosition << 24) + this.pathConstraintIndex;
            };
            PathConstraintPositionTimeline.prototype.setFrame = function (frameIndex, time, value) {
                frameIndex *= PathConstraintPositionTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + PathConstraintPositionTimeline.VALUE] = value;
            };
            PathConstraintPositionTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (!constraint.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            constraint.position = constraint.data.position;
                            return;
                        case MixBlend.first:
                            constraint.position += (constraint.data.position - constraint.position) * alpha;
                    }
                    return;
                }
                var position = 0;
                if (time >= frames[frames.length - PathConstraintPositionTimeline.ENTRIES])
                    position = frames[frames.length + PathConstraintPositionTimeline.PREV_VALUE];
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintPositionTimeline.ENTRIES);
                    position = frames[frame + PathConstraintPositionTimeline.PREV_VALUE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintPositionTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintPositionTimeline.PREV_TIME] - frameTime));
                    position += (frames[frame + PathConstraintPositionTimeline.VALUE] - position) * percent;
                }
                if (blend == MixBlend.setup)
                    constraint.position = constraint.data.position + (position - constraint.data.position) * alpha;
                else
                    constraint.position += (position - constraint.position) * alpha;
            };
            PathConstraintPositionTimeline.ENTRIES = 2;
            PathConstraintPositionTimeline.PREV_TIME = -2;
            PathConstraintPositionTimeline.PREV_VALUE = -1;
            PathConstraintPositionTimeline.VALUE = 1;
            return PathConstraintPositionTimeline;
        }(CurveTimeline));
        core.PathConstraintPositionTimeline = PathConstraintPositionTimeline;
        var PathConstraintSpacingTimeline = (function (_super) {
            __extends(PathConstraintSpacingTimeline, _super);
            function PathConstraintSpacingTimeline(frameCount) {
                return _super.call(this, frameCount) || this;
            }
            PathConstraintSpacingTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintSpacing << 24) + this.pathConstraintIndex;
            };
            PathConstraintSpacingTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (!constraint.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            constraint.spacing = constraint.data.spacing;
                            return;
                        case MixBlend.first:
                            constraint.spacing += (constraint.data.spacing - constraint.spacing) * alpha;
                    }
                    return;
                }
                var spacing = 0;
                if (time >= frames[frames.length - PathConstraintSpacingTimeline.ENTRIES])
                    spacing = frames[frames.length + PathConstraintSpacingTimeline.PREV_VALUE];
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintSpacingTimeline.ENTRIES);
                    spacing = frames[frame + PathConstraintSpacingTimeline.PREV_VALUE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintSpacingTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintSpacingTimeline.PREV_TIME] - frameTime));
                    spacing += (frames[frame + PathConstraintSpacingTimeline.VALUE] - spacing) * percent;
                }
                if (blend == MixBlend.setup)
                    constraint.spacing = constraint.data.spacing + (spacing - constraint.data.spacing) * alpha;
                else
                    constraint.spacing += (spacing - constraint.spacing) * alpha;
            };
            return PathConstraintSpacingTimeline;
        }(PathConstraintPositionTimeline));
        core.PathConstraintSpacingTimeline = PathConstraintSpacingTimeline;
        var PathConstraintMixTimeline = (function (_super) {
            __extends(PathConstraintMixTimeline, _super);
            function PathConstraintMixTimeline(frameCount) {
                var _this = _super.call(this, frameCount) || this;
                _this.frames = core.Utils.newFloatArray(frameCount * PathConstraintMixTimeline.ENTRIES);
                return _this;
            }
            PathConstraintMixTimeline.prototype.getPropertyId = function () {
                return (TimelineType.pathConstraintMix << 24) + this.pathConstraintIndex;
            };
            PathConstraintMixTimeline.prototype.setFrame = function (frameIndex, time, rotateMix, translateMix) {
                frameIndex *= PathConstraintMixTimeline.ENTRIES;
                this.frames[frameIndex] = time;
                this.frames[frameIndex + PathConstraintMixTimeline.ROTATE] = rotateMix;
                this.frames[frameIndex + PathConstraintMixTimeline.TRANSLATE] = translateMix;
            };
            PathConstraintMixTimeline.prototype.apply = function (skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
                var frames = this.frames;
                var constraint = skeleton.pathConstraints[this.pathConstraintIndex];
                if (!constraint.active)
                    return;
                if (time < frames[0]) {
                    switch (blend) {
                        case MixBlend.setup:
                            constraint.rotateMix = constraint.data.rotateMix;
                            constraint.translateMix = constraint.data.translateMix;
                            return;
                        case MixBlend.first:
                            constraint.rotateMix += (constraint.data.rotateMix - constraint.rotateMix) * alpha;
                            constraint.translateMix += (constraint.data.translateMix - constraint.translateMix) * alpha;
                    }
                    return;
                }
                var rotate = 0, translate = 0;
                if (time >= frames[frames.length - PathConstraintMixTimeline.ENTRIES]) {
                    rotate = frames[frames.length + PathConstraintMixTimeline.PREV_ROTATE];
                    translate = frames[frames.length + PathConstraintMixTimeline.PREV_TRANSLATE];
                }
                else {
                    var frame = Animation.binarySearch(frames, time, PathConstraintMixTimeline.ENTRIES);
                    rotate = frames[frame + PathConstraintMixTimeline.PREV_ROTATE];
                    translate = frames[frame + PathConstraintMixTimeline.PREV_TRANSLATE];
                    var frameTime = frames[frame];
                    var percent = this.getCurvePercent(frame / PathConstraintMixTimeline.ENTRIES - 1, 1 - (time - frameTime) / (frames[frame + PathConstraintMixTimeline.PREV_TIME] - frameTime));
                    rotate += (frames[frame + PathConstraintMixTimeline.ROTATE] - rotate) * percent;
                    translate += (frames[frame + PathConstraintMixTimeline.TRANSLATE] - translate) * percent;
                }
                if (blend == MixBlend.setup) {
                    constraint.rotateMix = constraint.data.rotateMix + (rotate - constraint.data.rotateMix) * alpha;
                    constraint.translateMix = constraint.data.translateMix + (translate - constraint.data.translateMix) * alpha;
                }
                else {
                    constraint.rotateMix += (rotate - constraint.rotateMix) * alpha;
                    constraint.translateMix += (translate - constraint.translateMix) * alpha;
                }
            };
            PathConstraintMixTimeline.ENTRIES = 3;
            PathConstraintMixTimeline.PREV_TIME = -3;
            PathConstraintMixTimeline.PREV_ROTATE = -2;
            PathConstraintMixTimeline.PREV_TRANSLATE = -1;
            PathConstraintMixTimeline.ROTATE = 1;
            PathConstraintMixTimeline.TRANSLATE = 2;
            return PathConstraintMixTimeline;
        }(CurveTimeline));
        core.PathConstraintMixTimeline = PathConstraintMixTimeline;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var AnimationState = (function () {
            function AnimationState(data) {
                this.tracks = new Array();
                this.events = new Array();
                this.listeners = new Array();
                this.queue = new EventQueue(this);
                this.propertyIDs = new core.IntSet();
                this.animationsChanged = false;
                this.timeScale = 1;
                this.trackEntryPool = new core.Pool(function () { return new TrackEntry(); });
                this.data = data;
            }
            AnimationState.prototype.update = function (delta) {
                delta *= this.timeScale;
                var tracks = this.tracks;
                for (var i = 0, n = tracks.length; i < n; i++) {
                    var current = tracks[i];
                    if (current == null)
                        continue;
                    current.animationLast = current.nextAnimationLast;
                    current.trackLast = current.nextTrackLast;
                    var currentDelta = delta * current.timeScale;
                    if (current.delay > 0) {
                        current.delay -= currentDelta;
                        if (current.delay > 0)
                            continue;
                        currentDelta = -current.delay;
                        current.delay = 0;
                    }
                    var next = current.next;
                    if (next != null) {
                        var nextTime = current.trackLast - next.delay;
                        if (nextTime >= 0) {
                            next.delay = 0;
                            next.trackTime = current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
                            current.trackTime += currentDelta;
                            this.setCurrent(i, next, true);
                            while (next.mixingFrom != null) {
                                next.mixTime += delta;
                                next = next.mixingFrom;
                            }
                            continue;
                        }
                    }
                    else if (current.trackLast >= current.trackEnd && current.mixingFrom == null) {
                        tracks[i] = null;
                        this.queue.end(current);
                        this.disposeNext(current);
                        continue;
                    }
                    if (current.mixingFrom != null && this.updateMixingFrom(current, delta)) {
                        var from = current.mixingFrom;
                        current.mixingFrom = null;
                        if (from != null)
                            from.mixingTo = null;
                        while (from != null) {
                            this.queue.end(from);
                            from = from.mixingFrom;
                        }
                    }
                    current.trackTime += currentDelta;
                }
                this.queue.drain();
            };
            AnimationState.prototype.updateMixingFrom = function (to, delta) {
                var from = to.mixingFrom;
                if (from == null)
                    return true;
                var finished = this.updateMixingFrom(from, delta);
                from.animationLast = from.nextAnimationLast;
                from.trackLast = from.nextTrackLast;
                if (to.mixTime > 0 && to.mixTime >= to.mixDuration) {
                    if (from.totalAlpha == 0 || to.mixDuration == 0) {
                        to.mixingFrom = from.mixingFrom;
                        if (from.mixingFrom != null)
                            from.mixingFrom.mixingTo = to;
                        to.interruptAlpha = from.interruptAlpha;
                        this.queue.end(from);
                    }
                    return finished;
                }
                from.trackTime += delta * from.timeScale;
                to.mixTime += delta;
                return false;
            };
            AnimationState.prototype.apply = function (skeleton) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                if (this.animationsChanged)
                    this._animationsChanged();
                var events = this.events;
                var tracks = this.tracks;
                var applied = false;
                for (var i = 0, n = tracks.length; i < n; i++) {
                    var current = tracks[i];
                    if (current == null || current.delay > 0)
                        continue;
                    applied = true;
                    var blend = i == 0 ? core.MixBlend.first : current.mixBlend;
                    var mix = current.alpha;
                    if (current.mixingFrom != null)
                        mix *= this.applyMixingFrom(current, skeleton, blend);
                    else if (current.trackTime >= current.trackEnd && current.next == null)
                        mix = 0;
                    var animationLast = current.animationLast, animationTime = current.getAnimationTime();
                    var timelineCount = current.animation.timelines.length;
                    var timelines = current.animation.timelines;
                    if ((i == 0 && mix == 1) || blend == core.MixBlend.add) {
                        for (var ii = 0; ii < timelineCount; ii++) {
                            core.Utils.webkit602BugfixHelper(mix, blend);
                            timelines[ii].apply(skeleton, animationLast, animationTime, events, mix, blend, core.MixDirection.mixIn);
                        }
                    }
                    else {
                        var timelineMode = current.timelineMode;
                        var firstFrame = current.timelinesRotation.length == 0;
                        if (firstFrame)
                            core.Utils.setArraySize(current.timelinesRotation, timelineCount << 1, null);
                        var timelinesRotation = current.timelinesRotation;
                        for (var ii = 0; ii < timelineCount; ii++) {
                            var timeline = timelines[ii];
                            var timelineBlend = (timelineMode[ii] & (AnimationState.NOT_LAST - 1)) == AnimationState.SUBSEQUENT ? blend : core.MixBlend.setup;
                            if (timeline instanceof core.RotateTimeline) {
                                this.applyRotateTimeline(timeline, skeleton, animationTime, mix, timelineBlend, timelinesRotation, ii << 1, firstFrame);
                            }
                            else {
                                core.Utils.webkit602BugfixHelper(mix, blend);
                                timeline.apply(skeleton, animationLast, animationTime, events, mix, timelineBlend, core.MixDirection.mixIn);
                            }
                        }
                    }
                    this.queueEvents(current, animationTime);
                    events.length = 0;
                    current.nextAnimationLast = animationTime;
                    current.nextTrackLast = current.trackTime;
                }
                this.queue.drain();
                return applied;
            };
            AnimationState.prototype.applyMixingFrom = function (to, skeleton, blend) {
                var from = to.mixingFrom;
                if (from.mixingFrom != null)
                    this.applyMixingFrom(from, skeleton, blend);
                var mix = 0;
                if (to.mixDuration == 0) {
                    mix = 1;
                    if (blend == core.MixBlend.first)
                        blend = core.MixBlend.setup;
                }
                else {
                    mix = to.mixTime / to.mixDuration;
                    if (mix > 1)
                        mix = 1;
                    if (blend != core.MixBlend.first)
                        blend = from.mixBlend;
                }
                var events = mix < from.eventThreshold ? this.events : null;
                var attachments = mix < from.attachmentThreshold, drawOrder = mix < from.drawOrderThreshold;
                var animationLast = from.animationLast, animationTime = from.getAnimationTime();
                var timelineCount = from.animation.timelines.length;
                var timelines = from.animation.timelines;
                var alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
                if (blend == core.MixBlend.add) {
                    for (var i = 0; i < timelineCount; i++)
                        timelines[i].apply(skeleton, animationLast, animationTime, events, alphaMix, blend, core.MixDirection.mixOut);
                }
                else {
                    var timelineMode = from.timelineMode;
                    var timelineHoldMix = from.timelineHoldMix;
                    var firstFrame = from.timelinesRotation.length == 0;
                    if (firstFrame)
                        core.Utils.setArraySize(from.timelinesRotation, timelineCount << 1, null);
                    var timelinesRotation = from.timelinesRotation;
                    from.totalAlpha = 0;
                    for (var i = 0; i < timelineCount; i++) {
                        var timeline = timelines[i];
                        var direction = core.MixDirection.mixOut;
                        var timelineBlend = void 0;
                        var alpha = 0;
                        switch (timelineMode[i] & (AnimationState.NOT_LAST - 1)) {
                            case AnimationState.SUBSEQUENT:
                                timelineBlend = blend;
                                if (!attachments && timeline instanceof core.AttachmentTimeline) {
                                    if ((timelineMode[i] & AnimationState.NOT_LAST) == AnimationState.NOT_LAST)
                                        continue;
                                    timelineBlend = core.MixBlend.setup;
                                }
                                if (!drawOrder && timeline instanceof core.DrawOrderTimeline)
                                    continue;
                                alpha = alphaMix;
                                break;
                            case AnimationState.FIRST:
                                timelineBlend = core.MixBlend.setup;
                                alpha = alphaMix;
                                break;
                            case AnimationState.HOLD:
                                timelineBlend = core.MixBlend.setup;
                                alpha = alphaHold;
                                break;
                            default:
                                timelineBlend = core.MixBlend.setup;
                                var holdMix = timelineHoldMix[i];
                                alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
                                break;
                        }
                        from.totalAlpha += alpha;
                        if (timeline instanceof core.RotateTimeline)
                            this.applyRotateTimeline(timeline, skeleton, animationTime, alpha, timelineBlend, timelinesRotation, i << 1, firstFrame);
                        else {
                            core.Utils.webkit602BugfixHelper(alpha, blend);
                            if (timelineBlend == core.MixBlend.setup) {
                                if (timeline instanceof core.AttachmentTimeline) {
                                    if (attachments || (timelineMode[i] & AnimationState.NOT_LAST) == AnimationState.NOT_LAST)
                                        direction = core.MixDirection.mixIn;
                                }
                                else if (timeline instanceof core.DrawOrderTimeline) {
                                    if (drawOrder)
                                        direction = core.MixDirection.mixIn;
                                }
                            }
                            timeline.apply(skeleton, animationLast, animationTime, events, alpha, timelineBlend, direction);
                        }
                    }
                }
                if (to.mixDuration > 0)
                    this.queueEvents(from, animationTime);
                this.events.length = 0;
                from.nextAnimationLast = animationTime;
                from.nextTrackLast = from.trackTime;
                return mix;
            };
            AnimationState.prototype.applyRotateTimeline = function (timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
                if (firstFrame)
                    timelinesRotation[i] = 0;
                if (alpha == 1) {
                    timeline.apply(skeleton, 0, time, null, 1, blend, core.MixDirection.mixIn);
                    return;
                }
                var rotateTimeline = timeline;
                var frames = rotateTimeline.frames;
                var bone = skeleton.bones[rotateTimeline.boneIndex];
                if (!bone.active)
                    return;
                var r1 = 0, r2 = 0;
                if (time < frames[0]) {
                    switch (blend) {
                        case core.MixBlend.setup:
                            bone.rotation = bone.data.rotation;
                        default:
                            return;
                        case core.MixBlend.first:
                            r1 = bone.rotation;
                            r2 = bone.data.rotation;
                    }
                }
                else {
                    r1 = blend == core.MixBlend.setup ? bone.data.rotation : bone.rotation;
                    if (time >= frames[frames.length - core.RotateTimeline.ENTRIES])
                        r2 = bone.data.rotation + frames[frames.length + core.RotateTimeline.PREV_ROTATION];
                    else {
                        var frame = core.Animation.binarySearch(frames, time, core.RotateTimeline.ENTRIES);
                        var prevRotation = frames[frame + core.RotateTimeline.PREV_ROTATION];
                        var frameTime = frames[frame];
                        var percent = rotateTimeline.getCurvePercent((frame >> 1) - 1, 1 - (time - frameTime) / (frames[frame + core.RotateTimeline.PREV_TIME] - frameTime));
                        r2 = frames[frame + core.RotateTimeline.ROTATION] - prevRotation;
                        r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
                        r2 = prevRotation + r2 * percent + bone.data.rotation;
                        r2 -= (16384 - ((16384.499999999996 - r2 / 360) | 0)) * 360;
                    }
                }
                var total = 0, diff = r2 - r1;
                diff -= (16384 - ((16384.499999999996 - diff / 360) | 0)) * 360;
                if (diff == 0) {
                    total = timelinesRotation[i];
                }
                else {
                    var lastTotal = 0, lastDiff = 0;
                    if (firstFrame) {
                        lastTotal = 0;
                        lastDiff = diff;
                    }
                    else {
                        lastTotal = timelinesRotation[i];
                        lastDiff = timelinesRotation[i + 1];
                    }
                    var current = diff > 0, dir = lastTotal >= 0;
                    if (core.MathUtils.signum(lastDiff) != core.MathUtils.signum(diff) && Math.abs(lastDiff) <= 90) {
                        if (Math.abs(lastTotal) > 180)
                            lastTotal += 360 * core.MathUtils.signum(lastTotal);
                        dir = current;
                    }
                    total = diff + lastTotal - lastTotal % 360;
                    if (dir != current)
                        total += 360 * core.MathUtils.signum(lastTotal);
                    timelinesRotation[i] = total;
                }
                timelinesRotation[i + 1] = diff;
                r1 += total * alpha;
                bone.rotation = r1 - (16384 - ((16384.499999999996 - r1 / 360) | 0)) * 360;
            };
            AnimationState.prototype.queueEvents = function (entry, animationTime) {
                var animationStart = entry.animationStart, animationEnd = entry.animationEnd;
                var duration = animationEnd - animationStart;
                var trackLastWrapped = entry.trackLast % duration;
                var events = this.events;
                var i = 0, n = events.length;
                for (; i < n; i++) {
                    var event_1 = events[i];
                    if (event_1.time < trackLastWrapped)
                        break;
                    if (event_1.time > animationEnd)
                        continue;
                    this.queue.event(entry, event_1);
                }
                var complete = false;
                if (entry.loop)
                    complete = duration == 0 || trackLastWrapped > entry.trackTime % duration;
                else
                    complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
                if (complete)
                    this.queue.complete(entry);
                for (; i < n; i++) {
                    var event_2 = events[i];
                    if (event_2.time < animationStart)
                        continue;
                    this.queue.event(entry, events[i]);
                }
            };
            AnimationState.prototype.clearTracks = function () {
                var oldDrainDisabled = this.queue.drainDisabled;
                this.queue.drainDisabled = true;
                for (var i = 0, n = this.tracks.length; i < n; i++)
                    this.clearTrack(i);
                this.tracks.length = 0;
                this.queue.drainDisabled = oldDrainDisabled;
                this.queue.drain();
            };
            AnimationState.prototype.clearTrack = function (trackIndex) {
                if (trackIndex >= this.tracks.length)
                    return;
                var current = this.tracks[trackIndex];
                if (current == null)
                    return;
                this.queue.end(current);
                this.disposeNext(current);
                var entry = current;
                while (true) {
                    var from = entry.mixingFrom;
                    if (from == null)
                        break;
                    this.queue.end(from);
                    entry.mixingFrom = null;
                    entry.mixingTo = null;
                    entry = from;
                }
                this.tracks[current.trackIndex] = null;
                this.queue.drain();
            };
            AnimationState.prototype.setCurrent = function (index, current, interrupt) {
                var from = this.expandToIndex(index);
                this.tracks[index] = current;
                if (from != null) {
                    if (interrupt)
                        this.queue.interrupt(from);
                    current.mixingFrom = from;
                    from.mixingTo = current;
                    current.mixTime = 0;
                    if (from.mixingFrom != null && from.mixDuration > 0)
                        current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
                    from.timelinesRotation.length = 0;
                }
                this.queue.start(current);
            };
            AnimationState.prototype.setAnimation = function (trackIndex, animationName, loop) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                if (animation == null)
                    throw new Error("Animation not found: " + animationName);
                return this.setAnimationWith(trackIndex, animation, loop);
            };
            AnimationState.prototype.setAnimationWith = function (trackIndex, animation, loop) {
                if (animation == null)
                    throw new Error("animation cannot be null.");
                var interrupt = true;
                var current = this.expandToIndex(trackIndex);
                if (current != null) {
                    if (current.nextTrackLast == -1) {
                        this.tracks[trackIndex] = current.mixingFrom;
                        this.queue.interrupt(current);
                        this.queue.end(current);
                        this.disposeNext(current);
                        current = current.mixingFrom;
                        interrupt = false;
                    }
                    else
                        this.disposeNext(current);
                }
                var entry = this.trackEntry(trackIndex, animation, loop, current);
                this.setCurrent(trackIndex, entry, interrupt);
                this.queue.drain();
                return entry;
            };
            AnimationState.prototype.addAnimation = function (trackIndex, animationName, loop, delay) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                if (animation == null)
                    throw new Error("Animation not found: " + animationName);
                return this.addAnimationWith(trackIndex, animation, loop, delay);
            };
            AnimationState.prototype.addAnimationWith = function (trackIndex, animation, loop, delay) {
                if (animation == null)
                    throw new Error("animation cannot be null.");
                var last = this.expandToIndex(trackIndex);
                if (last != null) {
                    while (last.next != null)
                        last = last.next;
                }
                var entry = this.trackEntry(trackIndex, animation, loop, last);
                if (last == null) {
                    this.setCurrent(trackIndex, entry, true);
                    this.queue.drain();
                }
                else {
                    last.next = entry;
                    if (delay <= 0) {
                        var duration = last.animationEnd - last.animationStart;
                        if (duration != 0) {
                            if (last.loop)
                                delay += duration * (1 + ((last.trackTime / duration) | 0));
                            else
                                delay += Math.max(duration, last.trackTime);
                            delay -= this.data.getMix(last.animation, animation);
                        }
                        else
                            delay = last.trackTime;
                    }
                }
                entry.delay = delay;
                return entry;
            };
            AnimationState.prototype.setEmptyAnimation = function (trackIndex, mixDuration) {
                var entry = this.setAnimationWith(trackIndex, AnimationState.emptyAnimation, false);
                entry.mixDuration = mixDuration;
                entry.trackEnd = mixDuration;
                return entry;
            };
            AnimationState.prototype.addEmptyAnimation = function (trackIndex, mixDuration, delay) {
                if (delay <= 0)
                    delay -= mixDuration;
                var entry = this.addAnimationWith(trackIndex, AnimationState.emptyAnimation, false, delay);
                entry.mixDuration = mixDuration;
                entry.trackEnd = mixDuration;
                return entry;
            };
            AnimationState.prototype.setEmptyAnimations = function (mixDuration) {
                var oldDrainDisabled = this.queue.drainDisabled;
                this.queue.drainDisabled = true;
                for (var i = 0, n = this.tracks.length; i < n; i++) {
                    var current = this.tracks[i];
                    if (current != null)
                        this.setEmptyAnimation(current.trackIndex, mixDuration);
                }
                this.queue.drainDisabled = oldDrainDisabled;
                this.queue.drain();
            };
            AnimationState.prototype.expandToIndex = function (index) {
                if (index < this.tracks.length)
                    return this.tracks[index];
                core.Utils.ensureArrayCapacity(this.tracks, index + 1, null);
                this.tracks.length = index + 1;
                return null;
            };
            AnimationState.prototype.trackEntry = function (trackIndex, animation, loop, last) {
                var entry = this.trackEntryPool.obtain();
                entry.trackIndex = trackIndex;
                entry.animation = animation;
                entry.loop = loop;
                entry.holdPrevious = false;
                entry.eventThreshold = 0;
                entry.attachmentThreshold = 0;
                entry.drawOrderThreshold = 0;
                entry.animationStart = 0;
                entry.animationEnd = animation.duration;
                entry.animationLast = -1;
                entry.nextAnimationLast = -1;
                entry.delay = 0;
                entry.trackTime = 0;
                entry.trackLast = -1;
                entry.nextTrackLast = -1;
                entry.trackEnd = Number.MAX_VALUE;
                entry.timeScale = 1;
                entry.alpha = 1;
                entry.interruptAlpha = 1;
                entry.mixTime = 0;
                entry.mixDuration = last == null ? 0 : this.data.getMix(last.animation, animation);
                return entry;
            };
            AnimationState.prototype.disposeNext = function (entry) {
                var next = entry.next;
                while (next != null) {
                    this.queue.dispose(next);
                    next = next.next;
                }
                entry.next = null;
            };
            AnimationState.prototype._animationsChanged = function () {
                this.animationsChanged = false;
                this.propertyIDs.clear();
                for (var i = 0, n = this.tracks.length; i < n; i++) {
                    var entry = this.tracks[i];
                    if (entry == null)
                        continue;
                    while (entry.mixingFrom != null)
                        entry = entry.mixingFrom;
                    do {
                        if (entry.mixingFrom == null || entry.mixBlend != core.MixBlend.add)
                            this.computeHold(entry);
                        entry = entry.mixingTo;
                    } while (entry != null);
                }
                this.propertyIDs.clear();
                for (var i = this.tracks.length - 1; i >= 0; i--) {
                    var entry = this.tracks[i];
                    while (entry != null) {
                        this.computeNotLast(entry);
                        entry = entry.mixingFrom;
                    }
                }
            };
            AnimationState.prototype.computeHold = function (entry) {
                var to = entry.mixingTo;
                var timelines = entry.animation.timelines;
                var timelinesCount = entry.animation.timelines.length;
                var timelineMode = core.Utils.setArraySize(entry.timelineMode, timelinesCount);
                entry.timelineHoldMix.length = 0;
                var timelineDipMix = core.Utils.setArraySize(entry.timelineHoldMix, timelinesCount);
                var propertyIDs = this.propertyIDs;
                if (to != null && to.holdPrevious) {
                    for (var i = 0; i < timelinesCount; i++) {
                        propertyIDs.add(timelines[i].getPropertyId());
                        timelineMode[i] = AnimationState.HOLD;
                    }
                    return;
                }
                outer: for (var i = 0; i < timelinesCount; i++) {
                    var timeline = timelines[i];
                    var id = timeline.getPropertyId();
                    if (!propertyIDs.add(id))
                        timelineMode[i] = AnimationState.SUBSEQUENT;
                    else if (to == null || timeline instanceof core.AttachmentTimeline || timeline instanceof core.DrawOrderTimeline
                        || timeline instanceof core.EventTimeline || !this.hasTimeline(to, id)) {
                        timelineMode[i] = AnimationState.FIRST;
                    }
                    else {
                        for (var next = to.mixingTo; next != null; next = next.mixingTo) {
                            if (this.hasTimeline(next, id))
                                continue;
                            if (entry.mixDuration > 0) {
                                timelineMode[i] = AnimationState.HOLD_MIX;
                                timelineDipMix[i] = next;
                                continue outer;
                            }
                            break;
                        }
                        timelineMode[i] = AnimationState.HOLD;
                    }
                }
            };
            AnimationState.prototype.computeNotLast = function (entry) {
                var timelines = entry.animation.timelines;
                var timelinesCount = entry.animation.timelines.length;
                var timelineMode = entry.timelineMode;
                var propertyIDs = this.propertyIDs;
                for (var i = 0; i < timelinesCount; i++) {
                    if (timelines[i] instanceof core.AttachmentTimeline) {
                        var timeline = timelines[i];
                        if (!propertyIDs.add(timeline.slotIndex))
                            timelineMode[i] |= AnimationState.NOT_LAST;
                    }
                }
            };
            AnimationState.prototype.hasTimeline = function (entry, id) {
                var timelines = entry.animation.timelines;
                for (var i = 0, n = timelines.length; i < n; i++)
                    if (timelines[i].getPropertyId() == id)
                        return true;
                return false;
            };
            AnimationState.prototype.getCurrent = function (trackIndex) {
                if (trackIndex >= this.tracks.length)
                    return null;
                return this.tracks[trackIndex];
            };
            AnimationState.prototype.addListener = function (listener) {
                if (listener == null)
                    throw new Error("listener cannot be null.");
                this.listeners.push(listener);
            };
            AnimationState.prototype.removeListener = function (listener) {
                var index = this.listeners.indexOf(listener);
                if (index >= 0)
                    this.listeners.splice(index, 1);
            };
            AnimationState.prototype.clearListeners = function () {
                this.listeners.length = 0;
            };
            AnimationState.prototype.clearListenerNotifications = function () {
                this.queue.clear();
            };
            AnimationState.prototype.setAnimationByName = function (trackIndex, animationName, loop) {
                if (!AnimationState.deprecatedWarning1) {
                    AnimationState.deprecatedWarning1 = true;
                    console.warn("Spine Deprecation Warning: AnimationState.setAnimationByName is deprecated, please use setAnimation from now on.");
                }
                this.setAnimation(trackIndex, animationName, loop);
            };
            AnimationState.prototype.addAnimationByName = function (trackIndex, animationName, loop, delay) {
                if (!AnimationState.deprecatedWarning2) {
                    AnimationState.deprecatedWarning2 = true;
                    console.warn("Spine Deprecation Warning: AnimationState.addAnimationByName is deprecated, please use addAnimation from now on.");
                }
                this.addAnimation(trackIndex, animationName, loop, delay);
            };
            AnimationState.prototype.hasAnimation = function (animationName) {
                var animation = this.data.skeletonData.findAnimation(animationName);
                return animation !== null;
            };
            AnimationState.prototype.hasAnimationByName = function (animationName) {
                if (!AnimationState.deprecatedWarning3) {
                    AnimationState.deprecatedWarning3 = true;
                    console.warn("Spine Deprecation Warning: AnimationState.hasAnimationByName is deprecated, please use hasAnimation from now on.");
                }
                return this.hasAnimation(animationName);
            };
            AnimationState.emptyAnimation = new core.Animation("<empty>", [], 0);
            AnimationState.SUBSEQUENT = 0;
            AnimationState.FIRST = 1;
            AnimationState.HOLD = 2;
            AnimationState.HOLD_MIX = 3;
            AnimationState.NOT_LAST = 4;
            AnimationState.deprecatedWarning1 = false;
            AnimationState.deprecatedWarning2 = false;
            AnimationState.deprecatedWarning3 = false;
            return AnimationState;
        }());
        core.AnimationState = AnimationState;
        var TrackEntry = (function () {
            function TrackEntry() {
                this.mixBlend = core.MixBlend.replace;
                this.timelineMode = new Array();
                this.timelineHoldMix = new Array();
                this.timelinesRotation = new Array();
            }
            TrackEntry.prototype.reset = function () {
                this.next = null;
                this.mixingFrom = null;
                this.mixingTo = null;
                this.animation = null;
                this.listener = null;
                this.timelineMode.length = 0;
                this.timelineHoldMix.length = 0;
                this.timelinesRotation.length = 0;
            };
            TrackEntry.prototype.getAnimationTime = function () {
                if (this.loop) {
                    var duration = this.animationEnd - this.animationStart;
                    if (duration == 0)
                        return this.animationStart;
                    return (this.trackTime % duration) + this.animationStart;
                }
                return Math.min(this.trackTime + this.animationStart, this.animationEnd);
            };
            TrackEntry.prototype.setAnimationLast = function (animationLast) {
                this.animationLast = animationLast;
                this.nextAnimationLast = animationLast;
            };
            TrackEntry.prototype.isComplete = function () {
                return this.trackTime >= this.animationEnd - this.animationStart;
            };
            TrackEntry.prototype.resetRotationDirections = function () {
                this.timelinesRotation.length = 0;
            };
            Object.defineProperty(TrackEntry.prototype, "time", {
                get: function () {
                    if (!TrackEntry.deprecatedWarning1) {
                        TrackEntry.deprecatedWarning1 = true;
                        console.warn("Spine Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.");
                    }
                    return this.trackTime;
                },
                set: function (value) {
                    if (!TrackEntry.deprecatedWarning1) {
                        TrackEntry.deprecatedWarning1 = true;
                        console.warn("Spine Deprecation Warning: TrackEntry.time is deprecated, please use trackTime from now on.");
                    }
                    this.trackTime = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TrackEntry.prototype, "endTime", {
                get: function () {
                    if (!TrackEntry.deprecatedWarning2) {
                        TrackEntry.deprecatedWarning2 = true;
                        console.warn("Spine Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.");
                    }
                    return this.trackTime;
                },
                set: function (value) {
                    if (!TrackEntry.deprecatedWarning2) {
                        TrackEntry.deprecatedWarning2 = true;
                        console.warn("Spine Deprecation Warning: TrackEntry.endTime is deprecated, please use trackEnd from now on.");
                    }
                    this.trackTime = value;
                },
                enumerable: true,
                configurable: true
            });
            TrackEntry.prototype.loopsCount = function () {
                return Math.floor(this.trackTime / this.trackEnd);
            };
            TrackEntry.deprecatedWarning1 = false;
            TrackEntry.deprecatedWarning2 = false;
            return TrackEntry;
        }());
        core.TrackEntry = TrackEntry;
        var EventQueue = (function () {
            function EventQueue(animState) {
                this.objects = [];
                this.drainDisabled = false;
                this.animState = animState;
            }
            EventQueue.prototype.start = function (entry) {
                this.objects.push(EventType.start);
                this.objects.push(entry);
                this.animState.animationsChanged = true;
            };
            EventQueue.prototype.interrupt = function (entry) {
                this.objects.push(EventType.interrupt);
                this.objects.push(entry);
            };
            EventQueue.prototype.end = function (entry) {
                this.objects.push(EventType.end);
                this.objects.push(entry);
                this.animState.animationsChanged = true;
            };
            EventQueue.prototype.dispose = function (entry) {
                this.objects.push(EventType.dispose);
                this.objects.push(entry);
            };
            EventQueue.prototype.complete = function (entry) {
                this.objects.push(EventType.complete);
                this.objects.push(entry);
            };
            EventQueue.prototype.event = function (entry, event) {
                this.objects.push(EventType.event);
                this.objects.push(entry);
                this.objects.push(event);
            };
            EventQueue.prototype.deprecateStuff = function () {
                if (!EventQueue.deprecatedWarning1) {
                    EventQueue.deprecatedWarning1 = true;
                    console.warn("Spine Deprecation Warning: onComplete, onStart, onEnd, onEvent art deprecated, please use listeners from now on. 'state.addListener({ complete: function(track, event) { } })'");
                }
                return true;
            };
            EventQueue.prototype.drain = function () {
                if (this.drainDisabled)
                    return;
                this.drainDisabled = true;
                var objects = this.objects;
                var listeners = this.animState.listeners;
                for (var i = 0; i < objects.length; i += 2) {
                    var type = objects[i];
                    var entry = objects[i + 1];
                    switch (type) {
                        case EventType.start:
                            if (entry.listener != null && entry.listener.start)
                                entry.listener.start(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].start)
                                    listeners[ii].start(entry);
                            entry.onStart && this.deprecateStuff() && entry.onStart(entry.trackIndex);
                            this.animState.onStart && this.deprecateStuff() && this.deprecateStuff && this.animState.onStart(entry.trackIndex);
                            break;
                        case EventType.interrupt:
                            if (entry.listener != null && entry.listener.interrupt)
                                entry.listener.interrupt(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].interrupt)
                                    listeners[ii].interrupt(entry);
                            break;
                        case EventType.end:
                            if (entry.listener != null && entry.listener.end)
                                entry.listener.end(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].end)
                                    listeners[ii].end(entry);
                            entry.onEnd && this.deprecateStuff() && entry.onEnd(entry.trackIndex);
                            this.animState.onEnd && this.deprecateStuff() && this.animState.onEnd(entry.trackIndex);
                        case EventType.dispose:
                            if (entry.listener != null && entry.listener.dispose)
                                entry.listener.dispose(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].dispose)
                                    listeners[ii].dispose(entry);
                            this.animState.trackEntryPool.free(entry);
                            break;
                        case EventType.complete:
                            if (entry.listener != null && entry.listener.complete)
                                entry.listener.complete(entry);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].complete)
                                    listeners[ii].complete(entry);
                            var count = core.MathUtils.toInt(entry.loopsCount());
                            entry.onComplete && this.deprecateStuff() && entry.onComplete(entry.trackIndex, count);
                            this.animState.onComplete && this.deprecateStuff() && this.animState.onComplete(entry.trackIndex, count);
                            break;
                        case EventType.event:
                            var event_3 = objects[i++ + 2];
                            if (entry.listener != null && entry.listener.event)
                                entry.listener.event(entry, event_3);
                            for (var ii = 0; ii < listeners.length; ii++)
                                if (listeners[ii].event)
                                    listeners[ii].event(entry, event_3);
                            entry.onEvent && this.deprecateStuff() && entry.onEvent(entry.trackIndex, event_3);
                            this.animState.onEvent && this.deprecateStuff() && this.animState.onEvent(entry.trackIndex, event_3);
                            break;
                    }
                }
                this.clear();
                this.drainDisabled = false;
            };
            EventQueue.prototype.clear = function () {
                this.objects.length = 0;
            };
            EventQueue.deprecatedWarning1 = false;
            return EventQueue;
        }());
        core.EventQueue = EventQueue;
        var EventType;
        (function (EventType) {
            EventType[EventType["start"] = 0] = "start";
            EventType[EventType["interrupt"] = 1] = "interrupt";
            EventType[EventType["end"] = 2] = "end";
            EventType[EventType["dispose"] = 3] = "dispose";
            EventType[EventType["complete"] = 4] = "complete";
            EventType[EventType["event"] = 5] = "event";
        })(EventType = core.EventType || (core.EventType = {}));
        var AnimationStateAdapter2 = (function () {
            function AnimationStateAdapter2() {
            }
            AnimationStateAdapter2.prototype.start = function (entry) {
            };
            AnimationStateAdapter2.prototype.interrupt = function (entry) {
            };
            AnimationStateAdapter2.prototype.end = function (entry) {
            };
            AnimationStateAdapter2.prototype.dispose = function (entry) {
            };
            AnimationStateAdapter2.prototype.complete = function (entry) {
            };
            AnimationStateAdapter2.prototype.event = function (entry, event) {
            };
            return AnimationStateAdapter2;
        }());
        core.AnimationStateAdapter2 = AnimationStateAdapter2;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var AnimationStateData = (function () {
            function AnimationStateData(skeletonData) {
                this.animationToMixTime = {};
                this.defaultMix = 0;
                if (skeletonData == null)
                    throw new Error("skeletonData cannot be null.");
                this.skeletonData = skeletonData;
            }
            AnimationStateData.prototype.setMix = function (fromName, toName, duration) {
                var from = this.skeletonData.findAnimation(fromName);
                if (from == null)
                    throw new Error("Animation not found: " + fromName);
                var to = this.skeletonData.findAnimation(toName);
                if (to == null)
                    throw new Error("Animation not found: " + toName);
                this.setMixWith(from, to, duration);
            };
            AnimationStateData.prototype.setMixByName = function (fromName, toName, duration) {
                if (!AnimationStateData.deprecatedWarning1) {
                    AnimationStateData.deprecatedWarning1 = true;
                    console.warn("Deprecation Warning: AnimationStateData.setMixByName is deprecated, please use setMix from now on.");
                }
                this.setMix(fromName, toName, duration);
            };
            AnimationStateData.prototype.setMixWith = function (from, to, duration) {
                if (from == null)
                    throw new Error("from cannot be null.");
                if (to == null)
                    throw new Error("to cannot be null.");
                var key = from.name + "." + to.name;
                this.animationToMixTime[key] = duration;
            };
            AnimationStateData.prototype.getMix = function (from, to) {
                var key = from.name + "." + to.name;
                var value = this.animationToMixTime[key];
                return value === undefined ? this.defaultMix : value;
            };
            AnimationStateData.deprecatedWarning1 = false;
            return AnimationStateData;
        }());
        core.AnimationStateData = AnimationStateData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var AtlasAttachmentLoader = (function () {
            function AtlasAttachmentLoader(atlas) {
                this.atlas = atlas;
            }
            AtlasAttachmentLoader.prototype.newRegionAttachment = function (skin, name, path) {
                var region = this.atlas.findRegion(path);
                if (region == null)
                    throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
                var attachment = new core.RegionAttachment(name);
                attachment.region = region;
                return attachment;
            };
            AtlasAttachmentLoader.prototype.newMeshAttachment = function (skin, name, path) {
                var region = this.atlas.findRegion(path);
                if (region == null)
                    throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
                var attachment = new core.MeshAttachment(name);
                attachment.region = region;
                return attachment;
            };
            AtlasAttachmentLoader.prototype.newBoundingBoxAttachment = function (skin, name) {
                return new core.BoundingBoxAttachment(name);
            };
            AtlasAttachmentLoader.prototype.newPathAttachment = function (skin, name) {
                return new core.PathAttachment(name);
            };
            AtlasAttachmentLoader.prototype.newPointAttachment = function (skin, name) {
                return new core.PointAttachment(name);
            };
            AtlasAttachmentLoader.prototype.newClippingAttachment = function (skin, name) {
                return new core.ClippingAttachment(name);
            };
            return AtlasAttachmentLoader;
        }());
        core.AtlasAttachmentLoader = AtlasAttachmentLoader;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var BlendMode;
        (function (BlendMode) {
            BlendMode[BlendMode["Normal"] = 0] = "Normal";
            BlendMode[BlendMode["Additive"] = 1] = "Additive";
            BlendMode[BlendMode["Multiply"] = 2] = "Multiply";
            BlendMode[BlendMode["Screen"] = 3] = "Screen";
        })(BlendMode = core.BlendMode || (core.BlendMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Bone = (function () {
            function Bone(data, skeleton, parent) {
                this.matrix = new PIXI.Matrix();
                this.children = new Array();
                this.x = 0;
                this.y = 0;
                this.rotation = 0;
                this.scaleX = 0;
                this.scaleY = 0;
                this.shearX = 0;
                this.shearY = 0;
                this.ax = 0;
                this.ay = 0;
                this.arotation = 0;
                this.ascaleX = 0;
                this.ascaleY = 0;
                this.ashearX = 0;
                this.ashearY = 0;
                this.appliedValid = false;
                this.sorted = false;
                this.active = false;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.skeleton = skeleton;
                this.parent = parent;
                this.setToSetupPose();
            }
            Object.defineProperty(Bone.prototype, "worldX", {
                get: function () {
                    return this.matrix.tx;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Bone.prototype, "worldY", {
                get: function () {
                    return this.matrix.ty;
                },
                enumerable: true,
                configurable: true
            });
            Bone.prototype.isActive = function () {
                return this.active;
            };
            Bone.prototype.update = function () {
                this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
            };
            Bone.prototype.updateWorldTransform = function () {
                this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
            };
            Bone.prototype.updateWorldTransformWith = function (x, y, rotation, scaleX, scaleY, shearX, shearY) {
                this.ax = x;
                this.ay = y;
                this.arotation = rotation;
                this.ascaleX = scaleX;
                this.ascaleY = scaleY;
                this.ashearX = shearX;
                this.ashearY = shearY;
                this.appliedValid = true;
                var parent = this.parent;
                var m = this.matrix;
                var sx = this.skeleton.scaleX;
                var sy = Bone.yDown ? -this.skeleton.scaleY : this.skeleton.scaleY;
                if (parent == null) {
                    var skeleton = this.skeleton;
                    var rotationY = rotation + 90 + shearY;
                    m.a = core.MathUtils.cosDeg(rotation + shearX) * scaleX * sx;
                    m.c = core.MathUtils.cosDeg(rotationY) * scaleY * sx;
                    m.b = core.MathUtils.sinDeg(rotation + shearX) * scaleX * sy;
                    m.d = core.MathUtils.sinDeg(rotationY) * scaleY * sy;
                    m.tx = x * sx + skeleton.x;
                    m.ty = y * sy + skeleton.y;
                    return;
                }
                var pa = parent.matrix.a, pb = parent.matrix.c, pc = parent.matrix.b, pd = parent.matrix.d;
                m.tx = pa * x + pb * y + parent.matrix.tx;
                m.ty = pc * x + pd * y + parent.matrix.ty;
                switch (this.data.transformMode) {
                    case core.TransformMode.Normal: {
                        var rotationY = rotation + 90 + shearY;
                        var la = core.MathUtils.cosDeg(rotation + shearX) * scaleX;
                        var lb = core.MathUtils.cosDeg(rotationY) * scaleY;
                        var lc = core.MathUtils.sinDeg(rotation + shearX) * scaleX;
                        var ld = core.MathUtils.sinDeg(rotationY) * scaleY;
                        m.a = pa * la + pb * lc;
                        m.c = pa * lb + pb * ld;
                        m.b = pc * la + pd * lc;
                        m.d = pc * lb + pd * ld;
                        return;
                    }
                    case core.TransformMode.OnlyTranslation: {
                        var rotationY = rotation + 90 + shearY;
                        m.a = core.MathUtils.cosDeg(rotation + shearX) * scaleX;
                        m.c = core.MathUtils.cosDeg(rotationY) * scaleY;
                        m.b = core.MathUtils.sinDeg(rotation + shearX) * scaleX;
                        m.d = core.MathUtils.sinDeg(rotationY) * scaleY;
                        break;
                    }
                    case core.TransformMode.NoRotationOrReflection: {
                        var s = pa * pa + pc * pc;
                        var prx = 0;
                        if (s > 0.0001) {
                            s = Math.abs(pa * pd - pb * pc) / s;
                            pb = pc * s;
                            pd = pa * s;
                            prx = Math.atan2(pc, pa) * core.MathUtils.radDeg;
                        }
                        else {
                            pa = 0;
                            pc = 0;
                            prx = 90 - Math.atan2(pd, pb) * core.MathUtils.radDeg;
                        }
                        var rx = rotation + shearX - prx;
                        var ry = rotation + shearY - prx + 90;
                        var la = core.MathUtils.cosDeg(rx) * scaleX;
                        var lb = core.MathUtils.cosDeg(ry) * scaleY;
                        var lc = core.MathUtils.sinDeg(rx) * scaleX;
                        var ld = core.MathUtils.sinDeg(ry) * scaleY;
                        m.a = pa * la - pb * lc;
                        m.c = pa * lb - pb * ld;
                        m.b = pc * la + pd * lc;
                        m.d = pc * lb + pd * ld;
                        break;
                    }
                    case core.TransformMode.NoScale:
                    case core.TransformMode.NoScaleOrReflection: {
                        var cos = core.MathUtils.cosDeg(rotation);
                        var sin = core.MathUtils.sinDeg(rotation);
                        var za = (pa * cos + pb * sin) / sx;
                        var zc = (pc * cos + pd * sin) / sy;
                        var s = Math.sqrt(za * za + zc * zc);
                        if (s > 0.00001)
                            s = 1 / s;
                        za *= s;
                        zc *= s;
                        s = Math.sqrt(za * za + zc * zc);
                        if (this.data.transformMode == core.TransformMode.NoScale
                            && (pa * pd - pb * pc < 0) != (Bone.yDown ?
                                (this.skeleton.scaleX < 0 != this.skeleton.scaleY > 0) :
                                (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0)))
                            s = -s;
                        var r = Math.PI / 2 + Math.atan2(zc, za);
                        var zb = Math.cos(r) * s;
                        var zd = Math.sin(r) * s;
                        var la = core.MathUtils.cosDeg(shearX) * scaleX;
                        var lb = core.MathUtils.cosDeg(90 + shearY) * scaleY;
                        var lc = core.MathUtils.sinDeg(shearX) * scaleX;
                        var ld = core.MathUtils.sinDeg(90 + shearY) * scaleY;
                        m.a = za * la + zb * lc;
                        m.c = za * lb + zb * ld;
                        m.b = zc * la + zd * lc;
                        m.d = zc * lb + zd * ld;
                        break;
                    }
                }
                m.a *= sx;
                m.c *= sx;
                m.b *= sy;
                m.d *= sy;
            };
            Bone.prototype.setToSetupPose = function () {
                var data = this.data;
                this.x = data.x;
                this.y = data.y;
                this.rotation = data.rotation;
                this.scaleX = data.scaleX;
                this.scaleY = data.scaleY;
                this.shearX = data.shearX;
                this.shearY = data.shearY;
            };
            Bone.prototype.getWorldRotationX = function () {
                return Math.atan2(this.matrix.b, this.matrix.a) * core.MathUtils.radDeg;
            };
            Bone.prototype.getWorldRotationY = function () {
                return Math.atan2(this.matrix.d, this.matrix.c) * core.MathUtils.radDeg;
            };
            Bone.prototype.getWorldScaleX = function () {
                var m = this.matrix;
                return Math.sqrt(m.a * m.a + m.c * m.c);
            };
            Bone.prototype.getWorldScaleY = function () {
                var m = this.matrix;
                return Math.sqrt(m.b * m.b + m.d * m.d);
            };
            Bone.prototype.updateAppliedTransform = function () {
                this.appliedValid = true;
                var parent = this.parent;
                var m = this.matrix;
                if (parent == null) {
                    this.ax = m.tx;
                    this.ay = m.ty;
                    this.arotation = Math.atan2(m.b, m.a) * core.MathUtils.radDeg;
                    this.ascaleX = Math.sqrt(m.a * m.a + m.b * m.b);
                    this.ascaleY = Math.sqrt(m.c * m.c + m.d * m.d);
                    this.ashearX = 0;
                    this.ashearY = Math.atan2(m.a * m.c + m.b * m.d, m.a * m.d - m.b * m.c) * core.MathUtils.radDeg;
                    return;
                }
                var pm = parent.matrix;
                var pid = 1 / (pm.a * pm.d - pm.b * pm.c);
                var dx = m.tx - pm.tx, dy = m.ty - pm.ty;
                this.ax = (dx * pm.d * pid - dy * pm.c * pid);
                this.ay = (dy * pm.a * pid - dx * pm.b * pid);
                var ia = pid * pm.d;
                var id = pid * pm.a;
                var ib = pid * pm.c;
                var ic = pid * pm.b;
                var ra = ia * m.a - ib * m.b;
                var rb = ia * m.c - ib * m.d;
                var rc = id * m.b - ic * m.a;
                var rd = id * m.d - ic * m.c;
                this.ashearX = 0;
                this.ascaleX = Math.sqrt(ra * ra + rc * rc);
                if (this.ascaleX > 0.0001) {
                    var det = ra * rd - rb * rc;
                    this.ascaleY = det / this.ascaleX;
                    this.ashearY = Math.atan2(ra * rb + rc * rd, det) * core.MathUtils.radDeg;
                    this.arotation = Math.atan2(rc, ra) * core.MathUtils.radDeg;
                }
                else {
                    this.ascaleX = 0;
                    this.ascaleY = Math.sqrt(rb * rb + rd * rd);
                    this.ashearY = 0;
                    this.arotation = 90 - Math.atan2(rd, rb) * core.MathUtils.radDeg;
                }
            };
            Bone.prototype.worldToLocal = function (world) {
                var m = this.matrix;
                var a = m.a, b = m.c, c = m.b, d = m.d;
                var invDet = 1 / (a * d - b * c);
                var x = world.x - m.tx, y = world.y - m.ty;
                world.x = (x * d * invDet - y * b * invDet);
                world.y = (y * a * invDet - x * c * invDet);
                return world;
            };
            Bone.prototype.localToWorld = function (local) {
                var m = this.matrix;
                var x = local.x, y = local.y;
                local.x = x * m.a + y * m.c + m.tx;
                local.y = x * m.b + y * m.d + m.ty;
                return local;
            };
            Bone.prototype.worldToLocalRotation = function (worldRotation) {
                var sin = core.MathUtils.sinDeg(worldRotation), cos = core.MathUtils.cosDeg(worldRotation);
                var mat = this.matrix;
                return Math.atan2(mat.a * sin - mat.b * cos, mat.d * cos - mat.c * sin) * core.MathUtils.radDeg;
            };
            Bone.prototype.localToWorldRotation = function (localRotation) {
                var sin = core.MathUtils.sinDeg(localRotation), cos = core.MathUtils.cosDeg(localRotation);
                var mat = this.matrix;
                return Math.atan2(cos * mat.b + sin * mat.d, cos * mat.a + sin * mat.c) * core.MathUtils.radDeg;
            };
            Bone.prototype.rotateWorld = function (degrees) {
                var mat = this.matrix;
                var a = mat.a, b = mat.c, c = mat.b, d = mat.d;
                var cos = core.MathUtils.cosDeg(degrees), sin = core.MathUtils.sinDeg(degrees);
                mat.a = cos * a - sin * c;
                mat.c = cos * b - sin * d;
                mat.b = sin * a + cos * c;
                mat.d = sin * b + cos * d;
                this.appliedValid = false;
            };
            Bone.yDown = false;
            return Bone;
        }());
        core.Bone = Bone;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var BoneData = (function () {
            function BoneData(index, name, parent) {
                this.x = 0;
                this.y = 0;
                this.rotation = 0;
                this.scaleX = 1;
                this.scaleY = 1;
                this.shearX = 0;
                this.shearY = 0;
                this.transformMode = TransformMode.Normal;
                this.skinRequired = false;
                this.color = new core.Color();
                if (index < 0)
                    throw new Error("index must be >= 0.");
                if (name == null)
                    throw new Error("name cannot be null.");
                this.index = index;
                this.name = name;
                this.parent = parent;
            }
            return BoneData;
        }());
        core.BoneData = BoneData;
        var TransformMode;
        (function (TransformMode) {
            TransformMode[TransformMode["Normal"] = 0] = "Normal";
            TransformMode[TransformMode["OnlyTranslation"] = 1] = "OnlyTranslation";
            TransformMode[TransformMode["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
            TransformMode[TransformMode["NoScale"] = 3] = "NoScale";
            TransformMode[TransformMode["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
        })(TransformMode = core.TransformMode || (core.TransformMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var ConstraintData = (function () {
            function ConstraintData(name, order, skinRequired) {
                this.name = name;
                this.order = order;
                this.skinRequired = skinRequired;
            }
            return ConstraintData;
        }());
        core.ConstraintData = ConstraintData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Event = (function () {
            function Event(time, data) {
                if (data == null)
                    throw new Error("data cannot be null.");
                this.time = time;
                this.data = data;
            }
            return Event;
        }());
        core.Event = Event;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var EventData = (function () {
            function EventData(name) {
                this.name = name;
            }
            return EventData;
        }());
        core.EventData = EventData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var IkConstraint = (function () {
            function IkConstraint(data, skeleton) {
                this.bendDirection = 0;
                this.compress = false;
                this.stretch = false;
                this.mix = 1;
                this.softness = 0;
                this.active = false;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.mix = data.mix;
                this.softness = data.softness;
                this.bendDirection = data.bendDirection;
                this.compress = data.compress;
                this.stretch = data.stretch;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findBone(data.target.name);
            }
            IkConstraint.prototype.isActive = function () {
                return this.active;
            };
            IkConstraint.prototype.apply = function () {
                this.update();
            };
            IkConstraint.prototype.update = function () {
                var target = this.target;
                var bones = this.bones;
                switch (bones.length) {
                    case 1:
                        this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
                        break;
                    case 2:
                        this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.softness, this.mix);
                        break;
                }
            };
            IkConstraint.prototype.apply1 = function (bone, targetX, targetY, compress, stretch, uniform, alpha) {
                if (!bone.appliedValid)
                    bone.updateAppliedTransform();
                var p = bone.parent.matrix;
                var id = 1 / (p.a * p.d - p.b * p.c);
                var x = targetX - p.tx, y = targetY - p.ty;
                var tx = (x * p.d - y * p.c) * id - bone.ax, ty = (y * p.a - x * p.b) * id - bone.ay;
                var rotationIK = Math.atan2(ty, tx) * core.MathUtils.radDeg - bone.ashearX - bone.arotation;
                if (bone.ascaleX < 0)
                    rotationIK += 180;
                if (rotationIK > 180)
                    rotationIK -= 360;
                else if (rotationIK < -180)
                    rotationIK += 360;
                var sx = bone.ascaleX, sy = bone.ascaleY;
                if (compress || stretch) {
                    var b = bone.data.length * sx, dd = Math.sqrt(tx * tx + ty * ty);
                    if ((compress && dd < b) || (stretch && dd > b) && b > 0.0001) {
                        var s = (dd / b - 1) * alpha + 1;
                        sx *= s;
                        if (uniform)
                            sy *= s;
                    }
                }
                bone.updateWorldTransformWith(bone.ax, bone.ay, bone.arotation + rotationIK * alpha, sx, sy, bone.ashearX, bone.ashearY);
            };
            IkConstraint.prototype.apply2 = function (parent, child, targetX, targetY, bendDir, stretch, softness, alpha) {
                if (alpha == 0) {
                    child.updateWorldTransform();
                    return;
                }
                if (!parent.appliedValid)
                    parent.updateAppliedTransform();
                if (!child.appliedValid)
                    child.updateAppliedTransform();
                var px = parent.ax, py = parent.ay, psx = parent.ascaleX, sx = psx, psy = parent.ascaleY, csx = child.ascaleX;
                var pmat = parent.matrix;
                var os1 = 0, os2 = 0, s2 = 0;
                if (psx < 0) {
                    psx = -psx;
                    os1 = 180;
                    s2 = -1;
                }
                else {
                    os1 = 0;
                    s2 = 1;
                }
                if (psy < 0) {
                    psy = -psy;
                    s2 = -s2;
                }
                if (csx < 0) {
                    csx = -csx;
                    os2 = 180;
                }
                else
                    os2 = 0;
                var cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = pmat.a, b = pmat.c, c = pmat.b, d = pmat.d;
                var u = Math.abs(psx - psy) <= 0.0001;
                if (!u) {
                    cy = 0;
                    cwx = a * cx + pmat.tx;
                    cwy = c * cx + pmat.ty;
                }
                else {
                    cy = child.ay;
                    cwx = a * cx + b * cy + pmat.tx;
                    cwy = c * cx + d * cy + pmat.ty;
                }
                var pp = parent.parent.matrix;
                a = pp.a;
                b = pp.c;
                c = pp.b;
                d = pp.d;
                var id = 1 / (a * d - b * c), x = cwx - pp.tx, y = cwy - pp.ty;
                var dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
                var l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1, a2;
                if (l1 < 0.0001) {
                    this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
                    child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
                    return;
                }
                x = targetX - pp.tx;
                y = targetY - pp.ty;
                var tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
                var dd = tx * tx + ty * ty;
                if (softness != 0) {
                    softness *= psx * (csx + 1) / 2;
                    var td = Math.sqrt(dd), sd = td - l1 - l2 * psx + softness;
                    if (sd > 0) {
                        var p = Math.min(1, sd / (softness * 2)) - 1;
                        p = (sd - softness * (1 - p * p)) / td;
                        tx -= p * tx;
                        ty -= p * ty;
                        dd = tx * tx + ty * ty;
                    }
                }
                outer: if (u) {
                    l2 *= psx;
                    var cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
                    if (cos < -1)
                        cos = -1;
                    else if (cos > 1) {
                        cos = 1;
                        if (stretch)
                            sx *= (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
                    }
                    a2 = Math.acos(cos) * bendDir;
                    a = l1 + l2 * cos;
                    b = l2 * Math.sin(a2);
                    a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
                }
                else {
                    a = psx * l2;
                    b = psy * l2;
                    var aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
                    c = bb * l1 * l1 + aa * dd - aa * bb;
                    var c1 = -2 * bb * l1, c2 = bb - aa;
                    d = c1 * c1 - 4 * c2 * c;
                    if (d >= 0) {
                        var q = Math.sqrt(d);
                        if (c1 < 0)
                            q = -q;
                        q = -(c1 + q) / 2;
                        var r0 = q / c2, r1 = c / q;
                        var r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
                        if (r * r <= dd) {
                            y = Math.sqrt(dd - r * r) * bendDir;
                            a1 = ta - Math.atan2(y, r);
                            a2 = Math.atan2(y / psy, (r - l1) / psx);
                            break outer;
                        }
                    }
                    var minAngle = core.MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
                    var maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
                    c = -a * l1 / (aa - bb);
                    if (c >= -1 && c <= 1) {
                        c = Math.acos(c);
                        x = a * Math.cos(c) + l1;
                        y = b * Math.sin(c);
                        d = x * x + y * y;
                        if (d < minDist) {
                            minAngle = c;
                            minDist = d;
                            minX = x;
                            minY = y;
                        }
                        if (d > maxDist) {
                            maxAngle = c;
                            maxDist = d;
                            maxX = x;
                            maxY = y;
                        }
                    }
                    if (dd <= (minDist + maxDist) / 2) {
                        a1 = ta - Math.atan2(minY * bendDir, minX);
                        a2 = minAngle * bendDir;
                    }
                    else {
                        a1 = ta - Math.atan2(maxY * bendDir, maxX);
                        a2 = maxAngle * bendDir;
                    }
                }
                var os = Math.atan2(cy, cx) * s2;
                var rotation = parent.arotation;
                a1 = (a1 - os) * core.MathUtils.radDeg + os1 - rotation;
                if (a1 > 180)
                    a1 -= 360;
                else if (a1 < -180)
                    a1 += 360;
                parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, parent.ascaleY, 0, 0);
                rotation = child.arotation;
                a2 = ((a2 + os) * core.MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
                if (a2 > 180)
                    a2 -= 360;
                else if (a2 < -180)
                    a2 += 360;
                child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
            };
            return IkConstraint;
        }());
        core.IkConstraint = IkConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var IkConstraintData = (function (_super) {
            __extends(IkConstraintData, _super);
            function IkConstraintData(name) {
                var _this = _super.call(this, name, 0, false) || this;
                _this.bones = new Array();
                _this.bendDirection = 1;
                _this.compress = false;
                _this.stretch = false;
                _this.uniform = false;
                _this.mix = 1;
                _this.softness = 0;
                return _this;
            }
            return IkConstraintData;
        }(core.ConstraintData));
        core.IkConstraintData = IkConstraintData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathConstraint = (function () {
            function PathConstraint(data, skeleton) {
                this.position = 0;
                this.spacing = 0;
                this.rotateMix = 0;
                this.translateMix = 0;
                this.spaces = new Array();
                this.positions = new Array();
                this.world = new Array();
                this.curves = new Array();
                this.lengths = new Array();
                this.segments = new Array();
                this.active = false;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.bones = new Array();
                for (var i = 0, n = data.bones.length; i < n; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findSlot(data.target.name);
                this.position = data.position;
                this.spacing = data.spacing;
                this.rotateMix = data.rotateMix;
                this.translateMix = data.translateMix;
            }
            PathConstraint.prototype.isActive = function () {
                return this.active;
            };
            PathConstraint.prototype.apply = function () {
                this.update();
            };
            PathConstraint.prototype.update = function () {
                var attachment = this.target.getAttachment();
                if (!(attachment instanceof core.PathAttachment))
                    return;
                var rotateMix = this.rotateMix, translateMix = this.translateMix;
                var translate = translateMix > 0, rotate = rotateMix > 0;
                if (!translate && !rotate)
                    return;
                var data = this.data;
                var spacingMode = data.spacingMode;
                var lengthSpacing = spacingMode == core.SpacingMode.Length;
                var rotateMode = data.rotateMode;
                var tangents = rotateMode == core.RotateMode.Tangent, scale = rotateMode == core.RotateMode.ChainScale;
                var boneCount = this.bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
                var bones = this.bones;
                var spaces = core.Utils.setArraySize(this.spaces, spacesCount), lengths = null;
                var spacing = this.spacing;
                if (scale || lengthSpacing) {
                    if (scale)
                        lengths = core.Utils.setArraySize(this.lengths, boneCount);
                    for (var i = 0, n = spacesCount - 1; i < n;) {
                        var bone = bones[i];
                        var setupLength = bone.data.length;
                        if (setupLength < PathConstraint.epsilon) {
                            if (scale)
                                lengths[i] = 0;
                            spaces[++i] = 0;
                        }
                        else {
                            var x = setupLength * bone.matrix.a, y = setupLength * bone.matrix.b;
                            var length_1 = Math.sqrt(x * x + y * y);
                            if (scale)
                                lengths[i] = length_1;
                            spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length_1 / setupLength;
                        }
                    }
                }
                else {
                    for (var i = 1; i < spacesCount; i++)
                        spaces[i] = spacing;
                }
                var positions = this.computeWorldPositions(attachment, spacesCount, tangents, data.positionMode == core.PositionMode.Percent, spacingMode == core.SpacingMode.Percent);
                var boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
                var tip = false;
                if (offsetRotation == 0)
                    tip = rotateMode == core.RotateMode.Chain;
                else {
                    tip = false;
                    var p = this.target.bone.matrix;
                    offsetRotation *= p.a * p.d - p.b * p.c > 0 ? core.MathUtils.degRad : -core.MathUtils.degRad;
                }
                for (var i = 0, p = 3; i < boneCount; i++, p += 3) {
                    var bone = bones[i];
                    var mat = bone.matrix;
                    mat.tx += (boneX - mat.tx) * translateMix;
                    mat.ty += (boneY - mat.ty) * translateMix;
                    var x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
                    if (scale) {
                        var length_2 = lengths[i];
                        if (length_2 != 0) {
                            var s = (Math.sqrt(dx * dx + dy * dy) / length_2 - 1) * rotateMix + 1;
                            mat.a *= s;
                            mat.b *= s;
                        }
                    }
                    boneX = x;
                    boneY = y;
                    if (rotate) {
                        var a = mat.a, b = mat.c, c = mat.b, d = mat.d, r = 0, cos = 0, sin = 0;
                        if (tangents)
                            r = positions[p - 1];
                        else if (spaces[i + 1] == 0)
                            r = positions[p + 2];
                        else
                            r = Math.atan2(dy, dx);
                        r -= Math.atan2(c, a);
                        if (tip) {
                            cos = Math.cos(r);
                            sin = Math.sin(r);
                            var length_3 = bone.data.length;
                            boneX += (length_3 * (cos * a - sin * c) - dx) * rotateMix;
                            boneY += (length_3 * (sin * a + cos * c) - dy) * rotateMix;
                        }
                        else {
                            r += offsetRotation;
                        }
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r *= rotateMix;
                        cos = Math.cos(r);
                        sin = Math.sin(r);
                        mat.a = cos * a - sin * c;
                        mat.c = cos * b - sin * d;
                        mat.b = sin * a + cos * c;
                        mat.d = sin * b + cos * d;
                    }
                    bone.appliedValid = false;
                }
            };
            PathConstraint.prototype.computeWorldPositions = function (path, spacesCount, tangents, percentPosition, percentSpacing) {
                var target = this.target;
                var position = this.position;
                var spaces = this.spaces, out = core.Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = null;
                var closed = path.closed;
                var verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = PathConstraint.NONE;
                if (!path.constantSpeed) {
                    var lengths = path.lengths;
                    curveCount -= closed ? 1 : 2;
                    var pathLength_1 = lengths[curveCount];
                    if (percentPosition)
                        position *= pathLength_1;
                    if (percentSpacing) {
                        for (var i = 0; i < spacesCount; i++)
                            spaces[i] *= pathLength_1;
                    }
                    world = core.Utils.setArraySize(this.world, 8);
                    for (var i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
                        var space = spaces[i];
                        position += space;
                        var p = position;
                        if (closed) {
                            p %= pathLength_1;
                            if (p < 0)
                                p += pathLength_1;
                            curve = 0;
                        }
                        else if (p < 0) {
                            if (prevCurve != PathConstraint.BEFORE) {
                                prevCurve = PathConstraint.BEFORE;
                                path.computeWorldVertices(target, 2, 4, world, 0, 2);
                            }
                            this.addBeforePosition(p, world, 0, out, o);
                            continue;
                        }
                        else if (p > pathLength_1) {
                            if (prevCurve != PathConstraint.AFTER) {
                                prevCurve = PathConstraint.AFTER;
                                path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
                            }
                            this.addAfterPosition(p - pathLength_1, world, 0, out, o);
                            continue;
                        }
                        for (;; curve++) {
                            var length_4 = lengths[curve];
                            if (p > length_4)
                                continue;
                            if (curve == 0)
                                p /= length_4;
                            else {
                                var prev = lengths[curve - 1];
                                p = (p - prev) / (length_4 - prev);
                            }
                            break;
                        }
                        if (curve != prevCurve) {
                            prevCurve = curve;
                            if (closed && curve == curveCount) {
                                path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
                                path.computeWorldVertices(target, 0, 4, world, 4, 2);
                            }
                            else
                                path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
                        }
                        this.addCurvePosition(p, world[0], world[1], world[2], world[3], world[4], world[5], world[6], world[7], out, o, tangents || (i > 0 && space == 0));
                    }
                    return out;
                }
                if (closed) {
                    verticesLength += 2;
                    world = core.Utils.setArraySize(this.world, verticesLength);
                    path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
                    path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
                    world[verticesLength - 2] = world[0];
                    world[verticesLength - 1] = world[1];
                }
                else {
                    curveCount--;
                    verticesLength -= 4;
                    world = core.Utils.setArraySize(this.world, verticesLength);
                    path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
                }
                var curves = core.Utils.setArraySize(this.curves, curveCount);
                var pathLength = 0;
                var x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
                var tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
                for (var i = 0, w = 2; i < curveCount; i++, w += 6) {
                    cx1 = world[w];
                    cy1 = world[w + 1];
                    cx2 = world[w + 2];
                    cy2 = world[w + 3];
                    x2 = world[w + 4];
                    y2 = world[w + 5];
                    tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
                    tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
                    dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
                    dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
                    ddfx = tmpx * 2 + dddfx;
                    ddfy = tmpy * 2 + dddfy;
                    dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
                    dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx;
                    dfy += ddfy;
                    ddfx += dddfx;
                    ddfy += dddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx;
                    dfy += ddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    dfx += ddfx + dddfx;
                    dfy += ddfy + dddfy;
                    pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
                    curves[i] = pathLength;
                    x1 = x2;
                    y1 = y2;
                }
                if (percentPosition)
                    position *= pathLength;
                if (percentSpacing) {
                    for (var i = 0; i < spacesCount; i++)
                        spaces[i] *= pathLength;
                }
                var segments = this.segments;
                var curveLength = 0;
                for (var i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
                    var space = spaces[i];
                    position += space;
                    var p = position;
                    if (closed) {
                        p %= pathLength;
                        if (p < 0)
                            p += pathLength;
                        curve = 0;
                    }
                    else if (p < 0) {
                        this.addBeforePosition(p, world, 0, out, o);
                        continue;
                    }
                    else if (p > pathLength) {
                        this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
                        continue;
                    }
                    for (;; curve++) {
                        var length_5 = curves[curve];
                        if (p > length_5)
                            continue;
                        if (curve == 0)
                            p /= length_5;
                        else {
                            var prev = curves[curve - 1];
                            p = (p - prev) / (length_5 - prev);
                        }
                        break;
                    }
                    if (curve != prevCurve) {
                        prevCurve = curve;
                        var ii = curve * 6;
                        x1 = world[ii];
                        y1 = world[ii + 1];
                        cx1 = world[ii + 2];
                        cy1 = world[ii + 3];
                        cx2 = world[ii + 4];
                        cy2 = world[ii + 5];
                        x2 = world[ii + 6];
                        y2 = world[ii + 7];
                        tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
                        tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
                        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
                        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
                        ddfx = tmpx * 2 + dddfx;
                        ddfy = tmpy * 2 + dddfy;
                        dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
                        dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
                        curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[0] = curveLength;
                        for (ii = 1; ii < 8; ii++) {
                            dfx += ddfx;
                            dfy += ddfy;
                            ddfx += dddfx;
                            ddfy += dddfy;
                            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                            segments[ii] = curveLength;
                        }
                        dfx += ddfx;
                        dfy += ddfy;
                        curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[8] = curveLength;
                        dfx += ddfx + dddfx;
                        dfy += ddfy + dddfy;
                        curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
                        segments[9] = curveLength;
                        segment = 0;
                    }
                    p *= curveLength;
                    for (;; segment++) {
                        var length_6 = segments[segment];
                        if (p > length_6)
                            continue;
                        if (segment == 0)
                            p /= length_6;
                        else {
                            var prev = segments[segment - 1];
                            p = segment + (p - prev) / (length_6 - prev);
                        }
                        break;
                    }
                    this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || (i > 0 && space == 0));
                }
                return out;
            };
            PathConstraint.prototype.addBeforePosition = function (p, temp, i, out, o) {
                var x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
                out[o] = x1 + p * Math.cos(r);
                out[o + 1] = y1 + p * Math.sin(r);
                out[o + 2] = r;
            };
            PathConstraint.prototype.addAfterPosition = function (p, temp, i, out, o) {
                var x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
                out[o] = x1 + p * Math.cos(r);
                out[o + 1] = y1 + p * Math.sin(r);
                out[o + 2] = r;
            };
            PathConstraint.prototype.addCurvePosition = function (p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
                if (p == 0 || isNaN(p))
                    p = 0.0001;
                var tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
                var ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
                var x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
                out[o] = x;
                out[o + 1] = y;
                if (tangents)
                    out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
            };
            PathConstraint.NONE = -1;
            PathConstraint.BEFORE = -2;
            PathConstraint.AFTER = -3;
            PathConstraint.epsilon = 0.00001;
            return PathConstraint;
        }());
        core.PathConstraint = PathConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathConstraintData = (function (_super) {
            __extends(PathConstraintData, _super);
            function PathConstraintData(name) {
                var _this = _super.call(this, name, 0, false) || this;
                _this.bones = new Array();
                return _this;
            }
            return PathConstraintData;
        }(core.ConstraintData));
        core.PathConstraintData = PathConstraintData;
        var PositionMode;
        (function (PositionMode) {
            PositionMode[PositionMode["Fixed"] = 0] = "Fixed";
            PositionMode[PositionMode["Percent"] = 1] = "Percent";
        })(PositionMode = core.PositionMode || (core.PositionMode = {}));
        var SpacingMode;
        (function (SpacingMode) {
            SpacingMode[SpacingMode["Length"] = 0] = "Length";
            SpacingMode[SpacingMode["Fixed"] = 1] = "Fixed";
            SpacingMode[SpacingMode["Percent"] = 2] = "Percent";
        })(SpacingMode = core.SpacingMode || (core.SpacingMode = {}));
        var RotateMode;
        (function (RotateMode) {
            RotateMode[RotateMode["Tangent"] = 0] = "Tangent";
            RotateMode[RotateMode["Chain"] = 1] = "Chain";
            RotateMode[RotateMode["ChainScale"] = 2] = "ChainScale";
        })(RotateMode = core.RotateMode || (core.RotateMode = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Skeleton = (function () {
            function Skeleton(data) {
                this._updateCache = new Array();
                this.updateCacheReset = new Array();
                this.time = 0;
                this.scaleX = 1;
                this.scaleY = 1;
                this.x = 0;
                this.y = 0;
                if (data == null)
                    throw new Error("data cannot be null.");
                this.data = data;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++) {
                    var boneData = data.bones[i];
                    var bone = void 0;
                    if (boneData.parent == null)
                        bone = new core.Bone(boneData, this, null);
                    else {
                        var parent_1 = this.bones[boneData.parent.index];
                        bone = new core.Bone(boneData, this, parent_1);
                        parent_1.children.push(bone);
                    }
                    this.bones.push(bone);
                }
                this.slots = new Array();
                this.drawOrder = new Array();
                for (var i = 0; i < data.slots.length; i++) {
                    var slotData = data.slots[i];
                    var bone = this.bones[slotData.boneData.index];
                    var slot = new core.Slot(slotData, bone);
                    this.slots.push(slot);
                    this.drawOrder.push(slot);
                }
                this.ikConstraints = new Array();
                for (var i = 0; i < data.ikConstraints.length; i++) {
                    var ikConstraintData = data.ikConstraints[i];
                    this.ikConstraints.push(new core.IkConstraint(ikConstraintData, this));
                }
                this.transformConstraints = new Array();
                for (var i = 0; i < data.transformConstraints.length; i++) {
                    var transformConstraintData = data.transformConstraints[i];
                    this.transformConstraints.push(new core.TransformConstraint(transformConstraintData, this));
                }
                this.pathConstraints = new Array();
                for (var i = 0; i < data.pathConstraints.length; i++) {
                    var pathConstraintData = data.pathConstraints[i];
                    this.pathConstraints.push(new core.PathConstraint(pathConstraintData, this));
                }
                this.color = new core.Color(1, 1, 1, 1);
                this.updateCache();
            }
            Skeleton.prototype.updateCache = function () {
                var updateCache = this._updateCache;
                updateCache.length = 0;
                this.updateCacheReset.length = 0;
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    bone.sorted = bone.data.skinRequired;
                    bone.active = !bone.sorted;
                }
                if (this.skin != null) {
                    var skinBones = this.skin.bones;
                    for (var i = 0, n = this.skin.bones.length; i < n; i++) {
                        var bone = this.bones[skinBones[i].index];
                        do {
                            bone.sorted = false;
                            bone.active = true;
                            bone = bone.parent;
                        } while (bone != null);
                    }
                }
                var ikConstraints = this.ikConstraints;
                var transformConstraints = this.transformConstraints;
                var pathConstraints = this.pathConstraints;
                var ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length;
                var constraintCount = ikCount + transformCount + pathCount;
                outer: for (var i = 0; i < constraintCount; i++) {
                    for (var ii = 0; ii < ikCount; ii++) {
                        var constraint = ikConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortIkConstraint(constraint);
                            continue outer;
                        }
                    }
                    for (var ii = 0; ii < transformCount; ii++) {
                        var constraint = transformConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortTransformConstraint(constraint);
                            continue outer;
                        }
                    }
                    for (var ii = 0; ii < pathCount; ii++) {
                        var constraint = pathConstraints[ii];
                        if (constraint.data.order == i) {
                            this.sortPathConstraint(constraint);
                            continue outer;
                        }
                    }
                }
                for (var i = 0, n = bones.length; i < n; i++)
                    this.sortBone(bones[i]);
            };
            Skeleton.prototype.sortIkConstraint = function (constraint) {
                constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin != null && core.Utils.contains(this.skin.constraints, constraint.data, true)));
                if (!constraint.active)
                    return;
                var target = constraint.target;
                this.sortBone(target);
                var constrained = constraint.bones;
                var parent = constrained[0];
                this.sortBone(parent);
                if (constrained.length > 1) {
                    var child = constrained[constrained.length - 1];
                    if (!(this._updateCache.indexOf(child) > -1))
                        this.updateCacheReset.push(child);
                }
                this._updateCache.push(constraint);
                this.sortReset(parent.children);
                constrained[constrained.length - 1].sorted = true;
            };
            Skeleton.prototype.sortPathConstraint = function (constraint) {
                constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || (this.skin != null && core.Utils.contains(this.skin.constraints, constraint.data, true)));
                if (!constraint.active)
                    return;
                var slot = constraint.target;
                var slotIndex = slot.data.index;
                var slotBone = slot.bone;
                if (this.skin != null)
                    this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
                if (this.data.defaultSkin != null && this.data.defaultSkin != this.skin)
                    this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
                for (var i = 0, n = this.data.skins.length; i < n; i++)
                    this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
                var attachment = slot.getAttachment();
                if (attachment instanceof core.PathAttachment)
                    this.sortPathConstraintAttachmentWith(attachment, slotBone);
                var constrained = constraint.bones;
                var boneCount = constrained.length;
                for (var i = 0; i < boneCount; i++)
                    this.sortBone(constrained[i]);
                this._updateCache.push(constraint);
                for (var i = 0; i < boneCount; i++)
                    this.sortReset(constrained[i].children);
                for (var i = 0; i < boneCount; i++)
                    constrained[i].sorted = true;
            };
            Skeleton.prototype.sortTransformConstraint = function (constraint) {
                constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || (this.skin != null && core.Utils.contains(this.skin.constraints, constraint.data, true)));
                if (!constraint.active)
                    return;
                this.sortBone(constraint.target);
                var constrained = constraint.bones;
                var boneCount = constrained.length;
                if (constraint.data.local) {
                    for (var i = 0; i < boneCount; i++) {
                        var child = constrained[i];
                        this.sortBone(child.parent);
                        if (!(this._updateCache.indexOf(child) > -1))
                            this.updateCacheReset.push(child);
                    }
                }
                else {
                    for (var i = 0; i < boneCount; i++) {
                        this.sortBone(constrained[i]);
                    }
                }
                this._updateCache.push(constraint);
                for (var ii = 0; ii < boneCount; ii++)
                    this.sortReset(constrained[ii].children);
                for (var ii = 0; ii < boneCount; ii++)
                    constrained[ii].sorted = true;
            };
            Skeleton.prototype.sortPathConstraintAttachment = function (skin, slotIndex, slotBone) {
                var attachments = skin.attachments[slotIndex];
                if (!attachments)
                    return;
                for (var key in attachments) {
                    this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
                }
            };
            Skeleton.prototype.sortPathConstraintAttachmentWith = function (attachment, slotBone) {
                if (!(attachment instanceof core.PathAttachment))
                    return;
                var pathBones = attachment.bones;
                if (pathBones == null)
                    this.sortBone(slotBone);
                else {
                    var bones = this.bones;
                    var i = 0;
                    while (i < pathBones.length) {
                        var boneCount = pathBones[i++];
                        for (var n = i + boneCount; i < n; i++) {
                            var boneIndex = pathBones[i];
                            this.sortBone(bones[boneIndex]);
                        }
                    }
                }
            };
            Skeleton.prototype.sortBone = function (bone) {
                if (bone.sorted)
                    return;
                var parent = bone.parent;
                if (parent != null)
                    this.sortBone(parent);
                bone.sorted = true;
                this._updateCache.push(bone);
            };
            Skeleton.prototype.sortReset = function (bones) {
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (!bone.active)
                        continue;
                    if (bone.sorted)
                        this.sortReset(bone.children);
                    bone.sorted = false;
                }
            };
            Skeleton.prototype.updateWorldTransform = function () {
                var updateCacheReset = this.updateCacheReset;
                for (var i = 0, n = updateCacheReset.length; i < n; i++) {
                    var bone = updateCacheReset[i];
                    bone.ax = bone.x;
                    bone.ay = bone.y;
                    bone.arotation = bone.rotation;
                    bone.ascaleX = bone.scaleX;
                    bone.ascaleY = bone.scaleY;
                    bone.ashearX = bone.shearX;
                    bone.ashearY = bone.shearY;
                    bone.appliedValid = true;
                }
                var updateCache = this._updateCache;
                for (var i = 0, n = updateCache.length; i < n; i++)
                    updateCache[i].update();
            };
            Skeleton.prototype.setToSetupPose = function () {
                this.setBonesToSetupPose();
                this.setSlotsToSetupPose();
            };
            Skeleton.prototype.setBonesToSetupPose = function () {
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    bones[i].setToSetupPose();
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var constraint = ikConstraints[i];
                    constraint.mix = constraint.data.mix;
                    constraint.softness = constraint.data.softness;
                    constraint.bendDirection = constraint.data.bendDirection;
                    constraint.compress = constraint.data.compress;
                    constraint.stretch = constraint.data.stretch;
                }
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    var data = constraint.data;
                    constraint.rotateMix = data.rotateMix;
                    constraint.translateMix = data.translateMix;
                    constraint.scaleMix = data.scaleMix;
                    constraint.shearMix = data.shearMix;
                }
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    var data = constraint.data;
                    constraint.position = data.position;
                    constraint.spacing = data.spacing;
                    constraint.rotateMix = data.rotateMix;
                    constraint.translateMix = data.translateMix;
                }
            };
            Skeleton.prototype.setSlotsToSetupPose = function () {
                var slots = this.slots;
                core.Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
                for (var i = 0, n = slots.length; i < n; i++)
                    slots[i].setToSetupPose();
            };
            Skeleton.prototype.getRootBone = function () {
                if (this.bones.length == 0)
                    return null;
                return this.bones[0];
            };
            Skeleton.prototype.findBone = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (bone.data.name == boneName)
                        return bone;
                }
                return null;
            };
            Skeleton.prototype.findBoneIndex = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    if (bones[i].data.name == boneName)
                        return i;
                return -1;
            };
            Skeleton.prototype.findSlot = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.data.name == slotName)
                        return slot;
                }
                return null;
            };
            Skeleton.prototype.findSlotIndex = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++)
                    if (slots[i].data.name == slotName)
                        return i;
                return -1;
            };
            Skeleton.prototype.setSkinByName = function (skinName) {
                var skin = this.data.findSkin(skinName);
                if (skin == null)
                    throw new Error("Skin not found: " + skinName);
                this.setSkin(skin);
            };
            Skeleton.prototype.setSkin = function (newSkin) {
                if (newSkin == this.skin)
                    return;
                if (newSkin != null) {
                    if (this.skin != null)
                        newSkin.attachAll(this, this.skin);
                    else {
                        var slots = this.slots;
                        for (var i = 0, n = slots.length; i < n; i++) {
                            var slot = slots[i];
                            var name_1 = slot.data.attachmentName;
                            if (name_1 != null) {
                                var attachment = newSkin.getAttachment(i, name_1);
                                if (attachment != null)
                                    slot.setAttachment(attachment);
                            }
                        }
                    }
                }
                this.skin = newSkin;
                this.updateCache();
            };
            Skeleton.prototype.getAttachmentByName = function (slotName, attachmentName) {
                return this.getAttachment(this.data.findSlotIndex(slotName), attachmentName);
            };
            Skeleton.prototype.getAttachment = function (slotIndex, attachmentName) {
                if (attachmentName == null)
                    throw new Error("attachmentName cannot be null.");
                if (this.skin != null) {
                    var attachment = this.skin.getAttachment(slotIndex, attachmentName);
                    if (attachment != null)
                        return attachment;
                }
                if (this.data.defaultSkin != null)
                    return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
                return null;
            };
            Skeleton.prototype.setAttachment = function (slotName, attachmentName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.data.name == slotName) {
                        var attachment = null;
                        if (attachmentName != null) {
                            attachment = this.getAttachment(i, attachmentName);
                            if (attachment == null)
                                throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
                        }
                        slot.setAttachment(attachment);
                        return;
                    }
                }
                throw new Error("Slot not found: " + slotName);
            };
            Skeleton.prototype.findIkConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var ikConstraint = ikConstraints[i];
                    if (ikConstraint.data.name == constraintName)
                        return ikConstraint;
                }
                return null;
            };
            Skeleton.prototype.findTransformConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    if (constraint.data.name == constraintName)
                        return constraint;
                }
                return null;
            };
            Skeleton.prototype.findPathConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    if (constraint.data.name == constraintName)
                        return constraint;
                }
                return null;
            };
            Skeleton.prototype.getBounds = function (offset, size, temp) {
                if (temp === void 0) { temp = new Array(2); }
                if (offset == null)
                    throw new Error("offset cannot be null.");
                if (size == null)
                    throw new Error("size cannot be null.");
                var drawOrder = this.drawOrder;
                var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
                for (var i = 0, n = drawOrder.length; i < n; i++) {
                    var slot = drawOrder[i];
                    if (!slot.bone.active)
                        continue;
                    var verticesLength = 0;
                    var vertices = null;
                    var attachment = slot.getAttachment();
                    if (attachment instanceof core.RegionAttachment) {
                        verticesLength = 8;
                        vertices = core.Utils.setArraySize(temp, verticesLength, 0);
                        attachment.computeWorldVertices(slot.bone, vertices, 0, 2);
                    }
                    else if (attachment instanceof core.MeshAttachment) {
                        var mesh = attachment;
                        verticesLength = mesh.worldVerticesLength;
                        vertices = core.Utils.setArraySize(temp, verticesLength, 0);
                        mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
                    }
                    if (vertices != null) {
                        for (var ii = 0, nn = vertices.length; ii < nn; ii += 2) {
                            var x = vertices[ii], y = vertices[ii + 1];
                            minX = Math.min(minX, x);
                            minY = Math.min(minY, y);
                            maxX = Math.max(maxX, x);
                            maxY = Math.max(maxY, y);
                        }
                    }
                }
                offset.set(minX, minY);
                size.set(maxX - minX, maxY - minY);
            };
            Skeleton.prototype.update = function (delta) {
                this.time += delta;
            };
            Object.defineProperty(Skeleton.prototype, "flipX", {
                get: function () {
                    return this.scaleX == -1;
                },
                set: function (value) {
                    if (!Skeleton.deprecatedWarning1) {
                        Skeleton.deprecatedWarning1 = true;
                        console.warn("Spine Deprecation Warning: `Skeleton.flipX/flipY` was deprecated, please use scaleX/scaleY");
                    }
                    this.scaleX = value ? 1.0 : -1.0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Skeleton.prototype, "flipY", {
                get: function () {
                    return this.scaleY == -1;
                },
                set: function (value) {
                    if (!Skeleton.deprecatedWarning1) {
                        Skeleton.deprecatedWarning1 = true;
                        console.warn("Spine Deprecation Warning: `Skeleton.flipX/flipY` was deprecated, please use scaleX/scaleY");
                    }
                    this.scaleY = value ? 1.0 : -1.0;
                },
                enumerable: true,
                configurable: true
            });
            Skeleton.deprecatedWarning1 = false;
            return Skeleton;
        }());
        core.Skeleton = Skeleton;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonBinary = (function () {
            function SkeletonBinary(attachmentLoader) {
                this.scale = 1;
                this.linkedMeshes = new Array();
                this.attachmentLoader = attachmentLoader;
            }
            SkeletonBinary.prototype.readSkeletonData = function (binary) {
                var scale = this.scale;
                var skeletonData = new core.SkeletonData();
                skeletonData.name = "";
                var input = new BinaryInput(binary);
                skeletonData.hash = input.readString();
                skeletonData.version = input.readString();
                skeletonData.x = input.readFloat();
                skeletonData.y = input.readFloat();
                skeletonData.width = input.readFloat();
                skeletonData.height = input.readFloat();
                var nonessential = input.readBoolean();
                if (nonessential) {
                    skeletonData.fps = input.readFloat();
                    skeletonData.imagesPath = input.readString();
                    skeletonData.audioPath = input.readString();
                }
                var n = 0;
                n = input.readInt(true);
                for (var i = 0; i < n; i++)
                    input.strings.push(input.readString());
                n = input.readInt(true);
                for (var i = 0; i < n; i++) {
                    var name_2 = input.readString();
                    var parent_2 = i == 0 ? null : skeletonData.bones[input.readInt(true)];
                    var data = new core.BoneData(i, name_2, parent_2);
                    data.rotation = input.readFloat();
                    data.x = input.readFloat() * scale;
                    data.y = input.readFloat() * scale;
                    data.scaleX = input.readFloat();
                    data.scaleY = input.readFloat();
                    data.shearX = input.readFloat();
                    data.shearY = input.readFloat();
                    data.length = input.readFloat() * scale;
                    data.transformMode = SkeletonBinary.TransformModeValues[input.readInt(true)];
                    data.skinRequired = input.readBoolean();
                    if (nonessential)
                        core.Color.rgba8888ToColor(data.color, input.readInt32());
                    skeletonData.bones.push(data);
                }
                n = input.readInt(true);
                for (var i = 0; i < n; i++) {
                    var slotName = input.readString();
                    var boneData = skeletonData.bones[input.readInt(true)];
                    var data = new core.SlotData(i, slotName, boneData);
                    core.Color.rgba8888ToColor(data.color, input.readInt32());
                    var darkColor = input.readInt32();
                    if (darkColor != -1)
                        core.Color.rgb888ToColor(data.darkColor = new core.Color(), darkColor);
                    data.attachmentName = input.readStringRef();
                    data.blendMode = SkeletonBinary.BlendModeValues[input.readInt(true)];
                    skeletonData.slots.push(data);
                }
                n = input.readInt(true);
                for (var i = 0, nn = void 0; i < n; i++) {
                    var data = new core.IkConstraintData(input.readString());
                    data.order = input.readInt(true);
                    data.skinRequired = input.readBoolean();
                    nn = input.readInt(true);
                    for (var ii = 0; ii < nn; ii++)
                        data.bones.push(skeletonData.bones[input.readInt(true)]);
                    data.target = skeletonData.bones[input.readInt(true)];
                    data.mix = input.readFloat();
                    data.softness = input.readFloat() * scale;
                    data.bendDirection = input.readByte();
                    data.compress = input.readBoolean();
                    data.stretch = input.readBoolean();
                    data.uniform = input.readBoolean();
                    skeletonData.ikConstraints.push(data);
                }
                n = input.readInt(true);
                for (var i = 0, nn = void 0; i < n; i++) {
                    var data = new core.TransformConstraintData(input.readString());
                    data.order = input.readInt(true);
                    data.skinRequired = input.readBoolean();
                    nn = input.readInt(true);
                    for (var ii = 0; ii < nn; ii++)
                        data.bones.push(skeletonData.bones[input.readInt(true)]);
                    data.target = skeletonData.bones[input.readInt(true)];
                    data.local = input.readBoolean();
                    data.relative = input.readBoolean();
                    data.offsetRotation = input.readFloat();
                    data.offsetX = input.readFloat() * scale;
                    data.offsetY = input.readFloat() * scale;
                    data.offsetScaleX = input.readFloat();
                    data.offsetScaleY = input.readFloat();
                    data.offsetShearY = input.readFloat();
                    data.rotateMix = input.readFloat();
                    data.translateMix = input.readFloat();
                    data.scaleMix = input.readFloat();
                    data.shearMix = input.readFloat();
                    skeletonData.transformConstraints.push(data);
                }
                n = input.readInt(true);
                for (var i = 0, nn = void 0; i < n; i++) {
                    var data = new core.PathConstraintData(input.readString());
                    data.order = input.readInt(true);
                    data.skinRequired = input.readBoolean();
                    nn = input.readInt(true);
                    for (var ii = 0; ii < nn; ii++)
                        data.bones.push(skeletonData.bones[input.readInt(true)]);
                    data.target = skeletonData.slots[input.readInt(true)];
                    data.positionMode = SkeletonBinary.PositionModeValues[input.readInt(true)];
                    data.spacingMode = SkeletonBinary.SpacingModeValues[input.readInt(true)];
                    data.rotateMode = SkeletonBinary.RotateModeValues[input.readInt(true)];
                    data.offsetRotation = input.readFloat();
                    data.position = input.readFloat();
                    if (data.positionMode == core.PositionMode.Fixed)
                        data.position *= scale;
                    data.spacing = input.readFloat();
                    if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                        data.spacing *= scale;
                    data.rotateMix = input.readFloat();
                    data.translateMix = input.readFloat();
                    skeletonData.pathConstraints.push(data);
                }
                var defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
                if (defaultSkin != null) {
                    skeletonData.defaultSkin = defaultSkin;
                    skeletonData.skins.push(defaultSkin);
                }
                {
                    var i = skeletonData.skins.length;
                    core.Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));
                    for (; i < n; i++)
                        skeletonData.skins[i] = this.readSkin(input, skeletonData, false, nonessential);
                }
                n = this.linkedMeshes.length;
                for (var i = 0; i < n; i++) {
                    var linkedMesh = this.linkedMeshes[i];
                    var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
                    if (skin == null)
                        throw new Error("Skin not found: " + linkedMesh.skin);
                    var parent_3 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
                    if (parent_3 == null)
                        throw new Error("Parent mesh not found: " + linkedMesh.parent);
                    linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? parent_3 : linkedMesh.mesh;
                    linkedMesh.mesh.setParentMesh(parent_3);
                }
                this.linkedMeshes.length = 0;
                n = input.readInt(true);
                for (var i = 0; i < n; i++) {
                    var data = new core.EventData(input.readStringRef());
                    data.intValue = input.readInt(false);
                    data.floatValue = input.readFloat();
                    data.stringValue = input.readString();
                    data.audioPath = input.readString();
                    if (data.audioPath != null) {
                        data.volume = input.readFloat();
                        data.balance = input.readFloat();
                    }
                    skeletonData.events.push(data);
                }
                n = input.readInt(true);
                for (var i = 0; i < n; i++)
                    skeletonData.animations.push(this.readAnimation(input, input.readString(), skeletonData));
                return skeletonData;
            };
            SkeletonBinary.prototype.readSkin = function (input, skeletonData, defaultSkin, nonessential) {
                var skin = null;
                var slotCount = 0;
                if (defaultSkin) {
                    slotCount = input.readInt(true);
                    if (slotCount == 0)
                        return null;
                    skin = new core.Skin("default");
                }
                else {
                    skin = new core.Skin(input.readStringRef());
                    skin.bones.length = input.readInt(true);
                    for (var i = 0, n = skin.bones.length; i < n; i++)
                        skin.bones[i] = skeletonData.bones[input.readInt(true)];
                    for (var i = 0, n = input.readInt(true); i < n; i++)
                        skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
                    for (var i = 0, n = input.readInt(true); i < n; i++)
                        skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
                    for (var i = 0, n = input.readInt(true); i < n; i++)
                        skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
                    slotCount = input.readInt(true);
                }
                for (var i = 0; i < slotCount; i++) {
                    var slotIndex = input.readInt(true);
                    for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                        var name_3 = input.readStringRef();
                        var attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name_3, nonessential);
                        if (attachment != null)
                            skin.setAttachment(slotIndex, name_3, attachment);
                    }
                }
                return skin;
            };
            SkeletonBinary.prototype.readAttachment = function (input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
                var scale = this.scale;
                var name = input.readStringRef();
                if (name == null)
                    name = attachmentName;
                var typeIndex = input.readByte();
                var type = SkeletonBinary.AttachmentTypeValues[typeIndex];
                switch (type) {
                    case core.AttachmentType.Region: {
                        var path = input.readStringRef();
                        var rotation = input.readFloat();
                        var x = input.readFloat();
                        var y = input.readFloat();
                        var scaleX = input.readFloat();
                        var scaleY = input.readFloat();
                        var width = input.readFloat();
                        var height = input.readFloat();
                        var color = input.readInt32();
                        if (path == null)
                            path = name;
                        var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
                        if (region == null)
                            return null;
                        region.path = path;
                        region.x = x * scale;
                        region.y = y * scale;
                        region.scaleX = scaleX;
                        region.scaleY = scaleY;
                        region.rotation = rotation;
                        region.width = width * scale;
                        region.height = height * scale;
                        core.Color.rgba8888ToColor(region.color, color);
                        return region;
                    }
                    case core.AttachmentType.BoundingBox: {
                        var vertexCount = input.readInt(true);
                        var vertices = this.readVertices(input, vertexCount);
                        var color = nonessential ? input.readInt32() : 0;
                        var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
                        if (box == null)
                            return null;
                        box.worldVerticesLength = vertexCount << 1;
                        box.vertices = vertices.vertices;
                        box.bones = vertices.bones;
                        if (nonessential)
                            core.Color.rgba8888ToColor(box.color, color);
                        return box;
                    }
                    case core.AttachmentType.Mesh: {
                        var path = input.readStringRef();
                        var color = input.readInt32();
                        var vertexCount = input.readInt(true);
                        var uvs = this.readFloatArray(input, vertexCount << 1, 1);
                        var triangles = this.readShortArray(input);
                        var vertices = this.readVertices(input, vertexCount);
                        var hullLength = input.readInt(true);
                        var edges = null;
                        var width = 0, height = 0;
                        if (nonessential) {
                            edges = this.readShortArray(input);
                            width = input.readFloat();
                            height = input.readFloat();
                        }
                        if (path == null)
                            path = name;
                        var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
                        if (mesh == null)
                            return null;
                        mesh.path = path;
                        core.Color.rgba8888ToColor(mesh.color, color);
                        mesh.bones = vertices.bones;
                        mesh.vertices = vertices.vertices;
                        mesh.worldVerticesLength = vertexCount << 1;
                        mesh.triangles = triangles;
                        mesh.regionUVs = new Float32Array(uvs);
                        mesh.hullLength = hullLength << 1;
                        if (nonessential) {
                            mesh.edges = edges;
                            mesh.width = width * scale;
                            mesh.height = height * scale;
                        }
                        return mesh;
                    }
                    case core.AttachmentType.LinkedMesh: {
                        var path = input.readStringRef();
                        var color = input.readInt32();
                        var skinName = input.readStringRef();
                        var parent_4 = input.readStringRef();
                        var inheritDeform = input.readBoolean();
                        var width = 0, height = 0;
                        if (nonessential) {
                            width = input.readFloat();
                            height = input.readFloat();
                        }
                        if (path == null)
                            path = name;
                        var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
                        if (mesh == null)
                            return null;
                        mesh.path = path;
                        core.Color.rgba8888ToColor(mesh.color, color);
                        if (nonessential) {
                            mesh.width = width * scale;
                            mesh.height = height * scale;
                        }
                        this.linkedMeshes.push(new LinkedMesh(mesh, skinName, slotIndex, parent_4, inheritDeform));
                        return mesh;
                    }
                    case core.AttachmentType.Path: {
                        var closed_1 = input.readBoolean();
                        var constantSpeed = input.readBoolean();
                        var vertexCount = input.readInt(true);
                        var vertices = this.readVertices(input, vertexCount);
                        var lengths = core.Utils.newArray(vertexCount / 3, 0);
                        for (var i = 0, n = lengths.length; i < n; i++)
                            lengths[i] = input.readFloat() * scale;
                        var color = nonessential ? input.readInt32() : 0;
                        var path = this.attachmentLoader.newPathAttachment(skin, name);
                        if (path == null)
                            return null;
                        path.closed = closed_1;
                        path.constantSpeed = constantSpeed;
                        path.worldVerticesLength = vertexCount << 1;
                        path.vertices = vertices.vertices;
                        path.bones = vertices.bones;
                        path.lengths = lengths;
                        if (nonessential)
                            core.Color.rgba8888ToColor(path.color, color);
                        return path;
                    }
                    case core.AttachmentType.Point: {
                        var rotation = input.readFloat();
                        var x = input.readFloat();
                        var y = input.readFloat();
                        var color = nonessential ? input.readInt32() : 0;
                        var point = this.attachmentLoader.newPointAttachment(skin, name);
                        if (point == null)
                            return null;
                        point.x = x * scale;
                        point.y = y * scale;
                        point.rotation = rotation;
                        if (nonessential)
                            core.Color.rgba8888ToColor(point.color, color);
                        return point;
                    }
                    case core.AttachmentType.Clipping: {
                        var endSlotIndex = input.readInt(true);
                        var vertexCount = input.readInt(true);
                        var vertices = this.readVertices(input, vertexCount);
                        var color = nonessential ? input.readInt32() : 0;
                        var clip = this.attachmentLoader.newClippingAttachment(skin, name);
                        if (clip == null)
                            return null;
                        clip.endSlot = skeletonData.slots[endSlotIndex];
                        clip.worldVerticesLength = vertexCount << 1;
                        clip.vertices = vertices.vertices;
                        clip.bones = vertices.bones;
                        if (nonessential)
                            core.Color.rgba8888ToColor(clip.color, color);
                        return clip;
                    }
                }
                return null;
            };
            SkeletonBinary.prototype.readVertices = function (input, vertexCount) {
                var verticesLength = vertexCount << 1;
                var vertices = new Vertices();
                var scale = this.scale;
                if (!input.readBoolean()) {
                    vertices.vertices = this.readFloatArray(input, verticesLength, scale);
                    return vertices;
                }
                var weights = new Array();
                var bonesArray = new Array();
                for (var i = 0; i < vertexCount; i++) {
                    var boneCount = input.readInt(true);
                    bonesArray.push(boneCount);
                    for (var ii = 0; ii < boneCount; ii++) {
                        bonesArray.push(input.readInt(true));
                        weights.push(input.readFloat() * scale);
                        weights.push(input.readFloat() * scale);
                        weights.push(input.readFloat());
                    }
                }
                vertices.vertices = core.Utils.toFloatArray(weights);
                vertices.bones = bonesArray;
                return vertices;
            };
            SkeletonBinary.prototype.readFloatArray = function (input, n, scale) {
                var array = new Array(n);
                if (scale == 1) {
                    for (var i = 0; i < n; i++)
                        array[i] = input.readFloat();
                }
                else {
                    for (var i = 0; i < n; i++)
                        array[i] = input.readFloat() * scale;
                }
                return array;
            };
            SkeletonBinary.prototype.readShortArray = function (input) {
                var n = input.readInt(true);
                var array = new Array(n);
                for (var i = 0; i < n; i++)
                    array[i] = input.readShort();
                return array;
            };
            SkeletonBinary.prototype.readAnimation = function (input, name, skeletonData) {
                var timelines = new Array();
                var scale = this.scale;
                var duration = 0;
                var tempColor1 = new core.Color();
                var tempColor2 = new core.Color();
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var slotIndex = input.readInt(true);
                    for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                        var timelineType = input.readByte();
                        var frameCount = input.readInt(true);
                        switch (timelineType) {
                            case SkeletonBinary.SLOT_ATTACHMENT: {
                                var timeline = new core.AttachmentTimeline(frameCount);
                                timeline.slotIndex = slotIndex;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++)
                                    timeline.setFrame(frameIndex, input.readFloat(), input.readStringRef());
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[frameCount - 1]);
                                break;
                            }
                            case SkeletonBinary.SLOT_COLOR: {
                                var timeline = new core.ColorTimeline(frameCount);
                                timeline.slotIndex = slotIndex;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    var time = input.readFloat();
                                    core.Color.rgba8888ToColor(tempColor1, input.readInt32());
                                    timeline.setFrame(frameIndex, time, tempColor1.r, tempColor1.g, tempColor1.b, tempColor1.a);
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.ColorTimeline.ENTRIES]);
                                break;
                            }
                            case SkeletonBinary.SLOT_TWO_COLOR: {
                                var timeline = new core.TwoColorTimeline(frameCount);
                                timeline.slotIndex = slotIndex;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    var time = input.readFloat();
                                    core.Color.rgba8888ToColor(tempColor1, input.readInt32());
                                    core.Color.rgb888ToColor(tempColor2, input.readInt32());
                                    timeline.setFrame(frameIndex, time, tempColor1.r, tempColor1.g, tempColor1.b, tempColor1.a, tempColor2.r, tempColor2.g, tempColor2.b);
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.TwoColorTimeline.ENTRIES]);
                                break;
                            }
                        }
                    }
                }
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var boneIndex = input.readInt(true);
                    for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                        var timelineType = input.readByte();
                        var frameCount = input.readInt(true);
                        switch (timelineType) {
                            case SkeletonBinary.BONE_ROTATE: {
                                var timeline = new core.RotateTimeline(frameCount);
                                timeline.boneIndex = boneIndex;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    timeline.setFrame(frameIndex, input.readFloat(), input.readFloat());
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.RotateTimeline.ENTRIES]);
                                break;
                            }
                            case SkeletonBinary.BONE_TRANSLATE:
                            case SkeletonBinary.BONE_SCALE:
                            case SkeletonBinary.BONE_SHEAR: {
                                var timeline = void 0;
                                var timelineScale = 1;
                                if (timelineType == SkeletonBinary.BONE_SCALE)
                                    timeline = new core.ScaleTimeline(frameCount);
                                else if (timelineType == SkeletonBinary.BONE_SHEAR)
                                    timeline = new core.ShearTimeline(frameCount);
                                else {
                                    timeline = new core.TranslateTimeline(frameCount);
                                    timelineScale = scale;
                                }
                                timeline.boneIndex = boneIndex;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    timeline.setFrame(frameIndex, input.readFloat(), input.readFloat() * timelineScale, input.readFloat() * timelineScale);
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.TranslateTimeline.ENTRIES]);
                                break;
                            }
                        }
                    }
                }
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var index = input.readInt(true);
                    var frameCount = input.readInt(true);
                    var timeline = new core.IkConstraintTimeline(frameCount);
                    timeline.ikConstraintIndex = index;
                    for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                        timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat() * scale, input.readByte(), input.readBoolean(), input.readBoolean());
                        if (frameIndex < frameCount - 1)
                            this.readCurve(input, frameIndex, timeline);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.IkConstraintTimeline.ENTRIES]);
                }
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var index = input.readInt(true);
                    var frameCount = input.readInt(true);
                    var timeline = new core.TransformConstraintTimeline(frameCount);
                    timeline.transformConstraintIndex = index;
                    for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                        timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat());
                        if (frameIndex < frameCount - 1)
                            this.readCurve(input, frameIndex, timeline);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.TransformConstraintTimeline.ENTRIES]);
                }
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var index = input.readInt(true);
                    var data = skeletonData.pathConstraints[index];
                    for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                        var timelineType = input.readByte();
                        var frameCount = input.readInt(true);
                        switch (timelineType) {
                            case SkeletonBinary.PATH_POSITION:
                            case SkeletonBinary.PATH_SPACING: {
                                var timeline = void 0;
                                var timelineScale = 1;
                                if (timelineType == SkeletonBinary.PATH_SPACING) {
                                    timeline = new core.PathConstraintSpacingTimeline(frameCount);
                                    if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                                        timelineScale = scale;
                                }
                                else {
                                    timeline = new core.PathConstraintPositionTimeline(frameCount);
                                    if (data.positionMode == core.PositionMode.Fixed)
                                        timelineScale = scale;
                                }
                                timeline.pathConstraintIndex = index;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    timeline.setFrame(frameIndex, input.readFloat(), input.readFloat() * timelineScale);
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.PathConstraintPositionTimeline.ENTRIES]);
                                break;
                            }
                            case SkeletonBinary.PATH_MIX: {
                                var timeline = new core.PathConstraintMixTimeline(frameCount);
                                timeline.pathConstraintIndex = index;
                                for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                    timeline.setFrame(frameIndex, input.readFloat(), input.readFloat(), input.readFloat());
                                    if (frameIndex < frameCount - 1)
                                        this.readCurve(input, frameIndex, timeline);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(frameCount - 1) * core.PathConstraintMixTimeline.ENTRIES]);
                                break;
                            }
                        }
                    }
                }
                for (var i = 0, n = input.readInt(true); i < n; i++) {
                    var skin = skeletonData.skins[input.readInt(true)];
                    for (var ii = 0, nn = input.readInt(true); ii < nn; ii++) {
                        var slotIndex = input.readInt(true);
                        for (var iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
                            var attachment = skin.getAttachment(slotIndex, input.readStringRef());
                            var weighted = attachment.bones != null;
                            var vertices = attachment.vertices;
                            var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                            var frameCount = input.readInt(true);
                            var timeline = new core.DeformTimeline(frameCount);
                            timeline.slotIndex = slotIndex;
                            timeline.attachment = attachment;
                            for (var frameIndex = 0; frameIndex < frameCount; frameIndex++) {
                                var time = input.readFloat();
                                var deform = void 0;
                                var end = input.readInt(true);
                                if (end == 0)
                                    deform = weighted ? core.Utils.newFloatArray(deformLength) : vertices;
                                else {
                                    deform = core.Utils.newFloatArray(deformLength);
                                    var start = input.readInt(true);
                                    end += start;
                                    if (scale == 1) {
                                        for (var v = start; v < end; v++)
                                            deform[v] = input.readFloat();
                                    }
                                    else {
                                        for (var v = start; v < end; v++)
                                            deform[v] = input.readFloat() * scale;
                                    }
                                    if (!weighted) {
                                        for (var v = 0, vn = deform.length; v < vn; v++)
                                            deform[v] += vertices[v];
                                    }
                                }
                                timeline.setFrame(frameIndex, time, deform);
                                if (frameIndex < frameCount - 1)
                                    this.readCurve(input, frameIndex, timeline);
                            }
                            timelines.push(timeline);
                            duration = Math.max(duration, timeline.frames[frameCount - 1]);
                        }
                    }
                }
                var drawOrderCount = input.readInt(true);
                if (drawOrderCount > 0) {
                    var timeline = new core.DrawOrderTimeline(drawOrderCount);
                    var slotCount = skeletonData.slots.length;
                    for (var i = 0; i < drawOrderCount; i++) {
                        var time = input.readFloat();
                        var offsetCount = input.readInt(true);
                        var drawOrder = core.Utils.newArray(slotCount, 0);
                        for (var ii = slotCount - 1; ii >= 0; ii--)
                            drawOrder[ii] = -1;
                        var unchanged = core.Utils.newArray(slotCount - offsetCount, 0);
                        var originalIndex = 0, unchangedIndex = 0;
                        for (var ii = 0; ii < offsetCount; ii++) {
                            var slotIndex = input.readInt(true);
                            while (originalIndex != slotIndex)
                                unchanged[unchangedIndex++] = originalIndex++;
                            drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
                        }
                        while (originalIndex < slotCount)
                            unchanged[unchangedIndex++] = originalIndex++;
                        for (var ii = slotCount - 1; ii >= 0; ii--)
                            if (drawOrder[ii] == -1)
                                drawOrder[ii] = unchanged[--unchangedIndex];
                        timeline.setFrame(i, time, drawOrder);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[drawOrderCount - 1]);
                }
                var eventCount = input.readInt(true);
                if (eventCount > 0) {
                    var timeline = new core.EventTimeline(eventCount);
                    for (var i = 0; i < eventCount; i++) {
                        var time = input.readFloat();
                        var eventData = skeletonData.events[input.readInt(true)];
                        var event_4 = new core.Event(time, eventData);
                        event_4.intValue = input.readInt(false);
                        event_4.floatValue = input.readFloat();
                        event_4.stringValue = input.readBoolean() ? input.readString() : eventData.stringValue;
                        if (event_4.data.audioPath != null) {
                            event_4.volume = input.readFloat();
                            event_4.balance = input.readFloat();
                        }
                        timeline.setFrame(i, event_4);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[eventCount - 1]);
                }
                return new core.Animation(name, timelines, duration);
            };
            SkeletonBinary.prototype.readCurve = function (input, frameIndex, timeline) {
                switch (input.readByte()) {
                    case SkeletonBinary.CURVE_STEPPED:
                        timeline.setStepped(frameIndex);
                        break;
                    case SkeletonBinary.CURVE_BEZIER:
                        this.setCurve(timeline, frameIndex, input.readFloat(), input.readFloat(), input.readFloat(), input.readFloat());
                        break;
                }
            };
            SkeletonBinary.prototype.setCurve = function (timeline, frameIndex, cx1, cy1, cx2, cy2) {
                timeline.setCurve(frameIndex, cx1, cy1, cx2, cy2);
            };
            SkeletonBinary.AttachmentTypeValues = [0, 1, 2, 3, 4, 5, 6];
            SkeletonBinary.TransformModeValues = [core.TransformMode.Normal, core.TransformMode.OnlyTranslation, core.TransformMode.NoRotationOrReflection, core.TransformMode.NoScale, core.TransformMode.NoScaleOrReflection];
            SkeletonBinary.PositionModeValues = [core.PositionMode.Fixed, core.PositionMode.Percent];
            SkeletonBinary.SpacingModeValues = [core.SpacingMode.Length, core.SpacingMode.Fixed, core.SpacingMode.Percent];
            SkeletonBinary.RotateModeValues = [core.RotateMode.Tangent, core.RotateMode.Chain, core.RotateMode.ChainScale];
            SkeletonBinary.BlendModeValues = [core.BlendMode.Normal, core.BlendMode.Additive, core.BlendMode.Multiply, core.BlendMode.Screen];
            SkeletonBinary.BONE_ROTATE = 0;
            SkeletonBinary.BONE_TRANSLATE = 1;
            SkeletonBinary.BONE_SCALE = 2;
            SkeletonBinary.BONE_SHEAR = 3;
            SkeletonBinary.SLOT_ATTACHMENT = 0;
            SkeletonBinary.SLOT_COLOR = 1;
            SkeletonBinary.SLOT_TWO_COLOR = 2;
            SkeletonBinary.PATH_POSITION = 0;
            SkeletonBinary.PATH_SPACING = 1;
            SkeletonBinary.PATH_MIX = 2;
            SkeletonBinary.CURVE_LINEAR = 0;
            SkeletonBinary.CURVE_STEPPED = 1;
            SkeletonBinary.CURVE_BEZIER = 2;
            return SkeletonBinary;
        }());
        core.SkeletonBinary = SkeletonBinary;
        var BinaryInput = (function () {
            function BinaryInput(data, strings, index, buffer) {
                if (strings === void 0) { strings = new Array(); }
                if (index === void 0) { index = 0; }
                if (buffer === void 0) { buffer = new DataView(data.buffer); }
                this.strings = strings;
                this.index = index;
                this.buffer = buffer;
            }
            BinaryInput.prototype.readByte = function () {
                return this.buffer.getInt8(this.index++);
            };
            BinaryInput.prototype.readShort = function () {
                var value = this.buffer.getInt16(this.index);
                this.index += 2;
                return value;
            };
            BinaryInput.prototype.readInt32 = function () {
                var value = this.buffer.getInt32(this.index);
                this.index += 4;
                return value;
            };
            BinaryInput.prototype.readInt = function (optimizePositive) {
                var b = this.readByte();
                var result = b & 0x7F;
                if ((b & 0x80) != 0) {
                    b = this.readByte();
                    result |= (b & 0x7F) << 7;
                    if ((b & 0x80) != 0) {
                        b = this.readByte();
                        result |= (b & 0x7F) << 14;
                        if ((b & 0x80) != 0) {
                            b = this.readByte();
                            result |= (b & 0x7F) << 21;
                            if ((b & 0x80) != 0) {
                                b = this.readByte();
                                result |= (b & 0x7F) << 28;
                            }
                        }
                    }
                }
                return optimizePositive ? result : ((result >>> 1) ^ -(result & 1));
            };
            BinaryInput.prototype.readStringRef = function () {
                var index = this.readInt(true);
                return index == 0 ? null : this.strings[index - 1];
            };
            BinaryInput.prototype.readString = function () {
                var byteCount = this.readInt(true);
                switch (byteCount) {
                    case 0:
                        return null;
                    case 1:
                        return "";
                }
                byteCount--;
                var chars = "";
                var charCount = 0;
                for (var i = 0; i < byteCount;) {
                    var b = this.readByte();
                    switch (b >> 4) {
                        case 12:
                        case 13:
                            chars += String.fromCharCode(((b & 0x1F) << 6 | this.readByte() & 0x3F));
                            i += 2;
                            break;
                        case 14:
                            chars += String.fromCharCode(((b & 0x0F) << 12 | (this.readByte() & 0x3F) << 6 | this.readByte() & 0x3F));
                            i += 3;
                            break;
                        default:
                            chars += String.fromCharCode(b);
                            i++;
                    }
                }
                return chars;
            };
            BinaryInput.prototype.readFloat = function () {
                var value = this.buffer.getFloat32(this.index);
                this.index += 4;
                return value;
            };
            BinaryInput.prototype.readBoolean = function () {
                return this.readByte() != 0;
            };
            return BinaryInput;
        }());
        var LinkedMesh = (function () {
            function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
                this.mesh = mesh;
                this.skin = skin;
                this.slotIndex = slotIndex;
                this.parent = parent;
                this.inheritDeform = inheritDeform;
            }
            return LinkedMesh;
        }());
        var Vertices = (function () {
            function Vertices(bones, vertices) {
                if (bones === void 0) { bones = null; }
                if (vertices === void 0) { vertices = null; }
                this.bones = bones;
                this.vertices = vertices;
            }
            return Vertices;
        }());
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonBounds = (function () {
            function SkeletonBounds() {
                this.minX = 0;
                this.minY = 0;
                this.maxX = 0;
                this.maxY = 0;
                this.boundingBoxes = new Array();
                this.polygons = new Array();
                this.polygonPool = new core.Pool(function () {
                    return core.Utils.newFloatArray(16);
                });
            }
            SkeletonBounds.prototype.update = function (skeleton, updateAabb) {
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                var boundingBoxes = this.boundingBoxes;
                var polygons = this.polygons;
                var polygonPool = this.polygonPool;
                var slots = skeleton.slots;
                var slotCount = slots.length;
                boundingBoxes.length = 0;
                polygonPool.freeAll(polygons);
                polygons.length = 0;
                for (var i = 0; i < slotCount; i++) {
                    var slot = slots[i];
                    if (!slot.bone.active)
                        continue;
                    var attachment = slot.getAttachment();
                    if (attachment instanceof core.BoundingBoxAttachment) {
                        var boundingBox = attachment;
                        boundingBoxes.push(boundingBox);
                        var polygon = polygonPool.obtain();
                        if (polygon.length != boundingBox.worldVerticesLength) {
                            polygon = core.Utils.newFloatArray(boundingBox.worldVerticesLength);
                        }
                        polygons.push(polygon);
                        boundingBox.computeWorldVertices(slot, 0, boundingBox.worldVerticesLength, polygon, 0, 2);
                    }
                }
                if (updateAabb) {
                    this.aabbCompute();
                }
                else {
                    this.minX = Number.POSITIVE_INFINITY;
                    this.minY = Number.POSITIVE_INFINITY;
                    this.maxX = Number.NEGATIVE_INFINITY;
                    this.maxY = Number.NEGATIVE_INFINITY;
                }
            };
            SkeletonBounds.prototype.aabbCompute = function () {
                var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++) {
                    var polygon = polygons[i];
                    var vertices = polygon;
                    for (var ii = 0, nn = polygon.length; ii < nn; ii += 2) {
                        var x = vertices[ii];
                        var y = vertices[ii + 1];
                        minX = Math.min(minX, x);
                        minY = Math.min(minY, y);
                        maxX = Math.max(maxX, x);
                        maxY = Math.max(maxY, y);
                    }
                }
                this.minX = minX;
                this.minY = minY;
                this.maxX = maxX;
                this.maxY = maxY;
            };
            SkeletonBounds.prototype.aabbContainsPoint = function (x, y) {
                return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
            };
            SkeletonBounds.prototype.aabbIntersectsSegment = function (x1, y1, x2, y2) {
                var minX = this.minX;
                var minY = this.minY;
                var maxX = this.maxX;
                var maxY = this.maxY;
                if ((x1 <= minX && x2 <= minX) || (y1 <= minY && y2 <= minY) || (x1 >= maxX && x2 >= maxX) || (y1 >= maxY && y2 >= maxY))
                    return false;
                var m = (y2 - y1) / (x2 - x1);
                var y = m * (minX - x1) + y1;
                if (y > minY && y < maxY)
                    return true;
                y = m * (maxX - x1) + y1;
                if (y > minY && y < maxY)
                    return true;
                var x = (minY - y1) / m + x1;
                if (x > minX && x < maxX)
                    return true;
                x = (maxY - y1) / m + x1;
                if (x > minX && x < maxX)
                    return true;
                return false;
            };
            SkeletonBounds.prototype.aabbIntersectsSkeleton = function (bounds) {
                return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
            };
            SkeletonBounds.prototype.containsPoint = function (x, y) {
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++)
                    if (this.containsPointPolygon(polygons[i], x, y))
                        return this.boundingBoxes[i];
                return null;
            };
            SkeletonBounds.prototype.containsPointPolygon = function (polygon, x, y) {
                var vertices = polygon;
                var nn = polygon.length;
                var prevIndex = nn - 2;
                var inside = false;
                for (var ii = 0; ii < nn; ii += 2) {
                    var vertexY = vertices[ii + 1];
                    var prevY = vertices[prevIndex + 1];
                    if ((vertexY < y && prevY >= y) || (prevY < y && vertexY >= y)) {
                        var vertexX = vertices[ii];
                        if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x)
                            inside = !inside;
                    }
                    prevIndex = ii;
                }
                return inside;
            };
            SkeletonBounds.prototype.intersectsSegment = function (x1, y1, x2, y2) {
                var polygons = this.polygons;
                for (var i = 0, n = polygons.length; i < n; i++)
                    if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2))
                        return this.boundingBoxes[i];
                return null;
            };
            SkeletonBounds.prototype.intersectsSegmentPolygon = function (polygon, x1, y1, x2, y2) {
                var vertices = polygon;
                var nn = polygon.length;
                var width12 = x1 - x2, height12 = y1 - y2;
                var det1 = x1 * y2 - y1 * x2;
                var x3 = vertices[nn - 2], y3 = vertices[nn - 1];
                for (var ii = 0; ii < nn; ii += 2) {
                    var x4 = vertices[ii], y4 = vertices[ii + 1];
                    var det2 = x3 * y4 - y3 * x4;
                    var width34 = x3 - x4, height34 = y3 - y4;
                    var det3 = width12 * height34 - height12 * width34;
                    var x = (det1 * width34 - width12 * det2) / det3;
                    if (((x >= x3 && x <= x4) || (x >= x4 && x <= x3)) && ((x >= x1 && x <= x2) || (x >= x2 && x <= x1))) {
                        var y = (det1 * height34 - height12 * det2) / det3;
                        if (((y >= y3 && y <= y4) || (y >= y4 && y <= y3)) && ((y >= y1 && y <= y2) || (y >= y2 && y <= y1)))
                            return true;
                    }
                    x3 = x4;
                    y3 = y4;
                }
                return false;
            };
            SkeletonBounds.prototype.getPolygon = function (boundingBox) {
                if (boundingBox == null)
                    throw new Error("boundingBox cannot be null.");
                var index = this.boundingBoxes.indexOf(boundingBox);
                return index == -1 ? null : this.polygons[index];
            };
            SkeletonBounds.prototype.getWidth = function () {
                return this.maxX - this.minX;
            };
            SkeletonBounds.prototype.getHeight = function () {
                return this.maxY - this.minY;
            };
            return SkeletonBounds;
        }());
        core.SkeletonBounds = SkeletonBounds;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonClipping = (function () {
            function SkeletonClipping() {
                this.triangulator = new core.Triangulator();
                this.clippingPolygon = new Array();
                this.clipOutput = new Array();
                this.clippedVertices = new Array();
                this.clippedTriangles = new Array();
                this.scratch = new Array();
            }
            SkeletonClipping.prototype.clipStart = function (slot, clip) {
                if (this.clipAttachment != null)
                    return 0;
                this.clipAttachment = clip;
                var n = clip.worldVerticesLength;
                var vertices = core.Utils.setArraySize(this.clippingPolygon, n);
                clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
                var clippingPolygon = this.clippingPolygon;
                SkeletonClipping.makeClockwise(clippingPolygon);
                var clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
                for (var i = 0, n_1 = clippingPolygons.length; i < n_1; i++) {
                    var polygon = clippingPolygons[i];
                    SkeletonClipping.makeClockwise(polygon);
                    polygon.push(polygon[0]);
                    polygon.push(polygon[1]);
                }
                return clippingPolygons.length;
            };
            SkeletonClipping.prototype.clipEndWithSlot = function (slot) {
                if (this.clipAttachment != null && this.clipAttachment.endSlot == slot.data)
                    this.clipEnd();
            };
            SkeletonClipping.prototype.clipEnd = function () {
                if (this.clipAttachment == null)
                    return;
                this.clipAttachment = null;
                this.clippingPolygons = null;
                this.clippedVertices.length = 0;
                this.clippedTriangles.length = 0;
                this.clippingPolygon.length = 0;
            };
            SkeletonClipping.prototype.isClipping = function () {
                return this.clipAttachment != null;
            };
            SkeletonClipping.prototype.clipTriangles = function (vertices, verticesLength, triangles, trianglesLength, uvs, light, dark, twoColor) {
                var clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
                var clippedTriangles = this.clippedTriangles;
                var polygons = this.clippingPolygons;
                var polygonsCount = this.clippingPolygons.length;
                var vertexSize = twoColor ? 12 : 8;
                var index = 0;
                clippedVertices.length = 0;
                clippedTriangles.length = 0;
                outer: for (var i = 0; i < trianglesLength; i += 3) {
                    var vertexOffset = triangles[i] << 1;
                    var x1 = vertices[vertexOffset], y1 = vertices[vertexOffset + 1];
                    var u1 = uvs[vertexOffset], v1 = uvs[vertexOffset + 1];
                    vertexOffset = triangles[i + 1] << 1;
                    var x2 = vertices[vertexOffset], y2 = vertices[vertexOffset + 1];
                    var u2 = uvs[vertexOffset], v2 = uvs[vertexOffset + 1];
                    vertexOffset = triangles[i + 2] << 1;
                    var x3 = vertices[vertexOffset], y3 = vertices[vertexOffset + 1];
                    var u3 = uvs[vertexOffset], v3 = uvs[vertexOffset + 1];
                    for (var p = 0; p < polygonsCount; p++) {
                        var s = clippedVertices.length;
                        if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
                            var clipOutputLength = clipOutput.length;
                            if (clipOutputLength == 0)
                                continue;
                            var d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
                            var d = 1 / (d0 * d2 + d1 * (y1 - y3));
                            var clipOutputCount = clipOutputLength >> 1;
                            var clipOutputItems = this.clipOutput;
                            var clippedVerticesItems = core.Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);
                            for (var ii = 0; ii < clipOutputLength; ii += 2) {
                                var x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
                                clippedVerticesItems[s] = x;
                                clippedVerticesItems[s + 1] = y;
                                clippedVerticesItems[s + 2] = light.r;
                                clippedVerticesItems[s + 3] = light.g;
                                clippedVerticesItems[s + 4] = light.b;
                                clippedVerticesItems[s + 5] = light.a;
                                var c0 = x - x3, c1 = y - y3;
                                var a = (d0 * c0 + d1 * c1) * d;
                                var b = (d4 * c0 + d2 * c1) * d;
                                var c = 1 - a - b;
                                clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
                                clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
                                if (twoColor) {
                                    clippedVerticesItems[s + 8] = dark.r;
                                    clippedVerticesItems[s + 9] = dark.g;
                                    clippedVerticesItems[s + 10] = dark.b;
                                    clippedVerticesItems[s + 11] = dark.a;
                                }
                                s += vertexSize;
                            }
                            s = clippedTriangles.length;
                            var clippedTrianglesItems = core.Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
                            clipOutputCount--;
                            for (var ii = 1; ii < clipOutputCount; ii++) {
                                clippedTrianglesItems[s] = index;
                                clippedTrianglesItems[s + 1] = (index + ii);
                                clippedTrianglesItems[s + 2] = (index + ii + 1);
                                s += 3;
                            }
                            index += clipOutputCount + 1;
                        }
                        else {
                            var clippedVerticesItems = core.Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
                            clippedVerticesItems[s] = x1;
                            clippedVerticesItems[s + 1] = y1;
                            clippedVerticesItems[s + 2] = light.r;
                            clippedVerticesItems[s + 3] = light.g;
                            clippedVerticesItems[s + 4] = light.b;
                            clippedVerticesItems[s + 5] = light.a;
                            if (!twoColor) {
                                clippedVerticesItems[s + 6] = u1;
                                clippedVerticesItems[s + 7] = v1;
                                clippedVerticesItems[s + 8] = x2;
                                clippedVerticesItems[s + 9] = y2;
                                clippedVerticesItems[s + 10] = light.r;
                                clippedVerticesItems[s + 11] = light.g;
                                clippedVerticesItems[s + 12] = light.b;
                                clippedVerticesItems[s + 13] = light.a;
                                clippedVerticesItems[s + 14] = u2;
                                clippedVerticesItems[s + 15] = v2;
                                clippedVerticesItems[s + 16] = x3;
                                clippedVerticesItems[s + 17] = y3;
                                clippedVerticesItems[s + 18] = light.r;
                                clippedVerticesItems[s + 19] = light.g;
                                clippedVerticesItems[s + 20] = light.b;
                                clippedVerticesItems[s + 21] = light.a;
                                clippedVerticesItems[s + 22] = u3;
                                clippedVerticesItems[s + 23] = v3;
                            }
                            else {
                                clippedVerticesItems[s + 6] = u1;
                                clippedVerticesItems[s + 7] = v1;
                                clippedVerticesItems[s + 8] = dark.r;
                                clippedVerticesItems[s + 9] = dark.g;
                                clippedVerticesItems[s + 10] = dark.b;
                                clippedVerticesItems[s + 11] = dark.a;
                                clippedVerticesItems[s + 12] = x2;
                                clippedVerticesItems[s + 13] = y2;
                                clippedVerticesItems[s + 14] = light.r;
                                clippedVerticesItems[s + 15] = light.g;
                                clippedVerticesItems[s + 16] = light.b;
                                clippedVerticesItems[s + 17] = light.a;
                                clippedVerticesItems[s + 18] = u2;
                                clippedVerticesItems[s + 19] = v2;
                                clippedVerticesItems[s + 20] = dark.r;
                                clippedVerticesItems[s + 21] = dark.g;
                                clippedVerticesItems[s + 22] = dark.b;
                                clippedVerticesItems[s + 23] = dark.a;
                                clippedVerticesItems[s + 24] = x3;
                                clippedVerticesItems[s + 25] = y3;
                                clippedVerticesItems[s + 26] = light.r;
                                clippedVerticesItems[s + 27] = light.g;
                                clippedVerticesItems[s + 28] = light.b;
                                clippedVerticesItems[s + 29] = light.a;
                                clippedVerticesItems[s + 30] = u3;
                                clippedVerticesItems[s + 31] = v3;
                                clippedVerticesItems[s + 32] = dark.r;
                                clippedVerticesItems[s + 33] = dark.g;
                                clippedVerticesItems[s + 34] = dark.b;
                                clippedVerticesItems[s + 35] = dark.a;
                            }
                            s = clippedTriangles.length;
                            var clippedTrianglesItems = core.Utils.setArraySize(clippedTriangles, s + 3);
                            clippedTrianglesItems[s] = index;
                            clippedTrianglesItems[s + 1] = (index + 1);
                            clippedTrianglesItems[s + 2] = (index + 2);
                            index += 3;
                            continue outer;
                        }
                    }
                }
            };
            SkeletonClipping.prototype.clip = function (x1, y1, x2, y2, x3, y3, clippingArea, output) {
                var originalOutput = output;
                var clipped = false;
                var input = null;
                if (clippingArea.length % 4 >= 2) {
                    input = output;
                    output = this.scratch;
                }
                else
                    input = this.scratch;
                input.length = 0;
                input.push(x1);
                input.push(y1);
                input.push(x2);
                input.push(y2);
                input.push(x3);
                input.push(y3);
                input.push(x1);
                input.push(y1);
                output.length = 0;
                var clippingVertices = clippingArea;
                var clippingVerticesLast = clippingArea.length - 4;
                for (var i = 0;; i += 2) {
                    var edgeX = clippingVertices[i], edgeY = clippingVertices[i + 1];
                    var edgeX2 = clippingVertices[i + 2], edgeY2 = clippingVertices[i + 3];
                    var deltaX = edgeX - edgeX2, deltaY = edgeY - edgeY2;
                    var inputVertices = input;
                    var inputVerticesLength = input.length - 2, outputStart = output.length;
                    for (var ii = 0; ii < inputVerticesLength; ii += 2) {
                        var inputX = inputVertices[ii], inputY = inputVertices[ii + 1];
                        var inputX2 = inputVertices[ii + 2], inputY2 = inputVertices[ii + 3];
                        var side2 = deltaX * (inputY2 - edgeY2) - deltaY * (inputX2 - edgeX2) > 0;
                        if (deltaX * (inputY - edgeY2) - deltaY * (inputX - edgeX2) > 0) {
                            if (side2) {
                                output.push(inputX2);
                                output.push(inputY2);
                                continue;
                            }
                            var c0 = inputY2 - inputY, c2 = inputX2 - inputX;
                            var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / (c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY));
                            output.push(edgeX + (edgeX2 - edgeX) * ua);
                            output.push(edgeY + (edgeY2 - edgeY) * ua);
                        }
                        else if (side2) {
                            var c0 = inputY2 - inputY, c2 = inputX2 - inputX;
                            var ua = (c2 * (edgeY - inputY) - c0 * (edgeX - inputX)) / (c0 * (edgeX2 - edgeX) - c2 * (edgeY2 - edgeY));
                            output.push(edgeX + (edgeX2 - edgeX) * ua);
                            output.push(edgeY + (edgeY2 - edgeY) * ua);
                            output.push(inputX2);
                            output.push(inputY2);
                        }
                        clipped = true;
                    }
                    if (outputStart == output.length) {
                        originalOutput.length = 0;
                        return true;
                    }
                    output.push(output[0]);
                    output.push(output[1]);
                    if (i == clippingVerticesLast)
                        break;
                    var temp = output;
                    output = input;
                    output.length = 0;
                    input = temp;
                }
                if (originalOutput != output) {
                    originalOutput.length = 0;
                    for (var i = 0, n = output.length - 2; i < n; i++)
                        originalOutput[i] = output[i];
                }
                else
                    originalOutput.length = originalOutput.length - 2;
                return clipped;
            };
            SkeletonClipping.makeClockwise = function (polygon) {
                var vertices = polygon;
                var verticeslength = polygon.length;
                var area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1], p1x = 0, p1y = 0, p2x = 0, p2y = 0;
                for (var i = 0, n = verticeslength - 3; i < n; i += 2) {
                    p1x = vertices[i];
                    p1y = vertices[i + 1];
                    p2x = vertices[i + 2];
                    p2y = vertices[i + 3];
                    area += p1x * p2y - p2x * p1y;
                }
                if (area < 0)
                    return;
                for (var i = 0, lastX = verticeslength - 2, n = verticeslength >> 1; i < n; i += 2) {
                    var x = vertices[i], y = vertices[i + 1];
                    var other = lastX - i;
                    vertices[i] = vertices[other];
                    vertices[i + 1] = vertices[other + 1];
                    vertices[other] = x;
                    vertices[other + 1] = y;
                }
            };
            return SkeletonClipping;
        }());
        core.SkeletonClipping = SkeletonClipping;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkeletonData = (function () {
            function SkeletonData() {
                this.bones = new Array();
                this.slots = new Array();
                this.skins = new Array();
                this.events = new Array();
                this.animations = new Array();
                this.ikConstraints = new Array();
                this.transformConstraints = new Array();
                this.pathConstraints = new Array();
                this.fps = 0;
            }
            SkeletonData.prototype.findBone = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (bone.name == boneName)
                        return bone;
                }
                return null;
            };
            SkeletonData.prototype.findBoneIndex = function (boneName) {
                if (boneName == null)
                    throw new Error("boneName cannot be null.");
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++)
                    if (bones[i].name == boneName)
                        return i;
                return -1;
            };
            SkeletonData.prototype.findSlot = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++) {
                    var slot = slots[i];
                    if (slot.name == slotName)
                        return slot;
                }
                return null;
            };
            SkeletonData.prototype.findSlotIndex = function (slotName) {
                if (slotName == null)
                    throw new Error("slotName cannot be null.");
                var slots = this.slots;
                for (var i = 0, n = slots.length; i < n; i++)
                    if (slots[i].name == slotName)
                        return i;
                return -1;
            };
            SkeletonData.prototype.findSkin = function (skinName) {
                if (skinName == null)
                    throw new Error("skinName cannot be null.");
                var skins = this.skins;
                for (var i = 0, n = skins.length; i < n; i++) {
                    var skin = skins[i];
                    if (skin.name == skinName)
                        return skin;
                }
                return null;
            };
            SkeletonData.prototype.findEvent = function (eventDataName) {
                if (eventDataName == null)
                    throw new Error("eventDataName cannot be null.");
                var events = this.events;
                for (var i = 0, n = events.length; i < n; i++) {
                    var event_5 = events[i];
                    if (event_5.name == eventDataName)
                        return event_5;
                }
                return null;
            };
            SkeletonData.prototype.findAnimation = function (animationName) {
                if (animationName == null)
                    throw new Error("animationName cannot be null.");
                var animations = this.animations;
                for (var i = 0, n = animations.length; i < n; i++) {
                    var animation = animations[i];
                    if (animation.name == animationName)
                        return animation;
                }
                return null;
            };
            SkeletonData.prototype.findIkConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var ikConstraints = this.ikConstraints;
                for (var i = 0, n = ikConstraints.length; i < n; i++) {
                    var constraint = ikConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findTransformConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var transformConstraints = this.transformConstraints;
                for (var i = 0, n = transformConstraints.length; i < n; i++) {
                    var constraint = transformConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findPathConstraint = function (constraintName) {
                if (constraintName == null)
                    throw new Error("constraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++) {
                    var constraint = pathConstraints[i];
                    if (constraint.name == constraintName)
                        return constraint;
                }
                return null;
            };
            SkeletonData.prototype.findPathConstraintIndex = function (pathConstraintName) {
                if (pathConstraintName == null)
                    throw new Error("pathConstraintName cannot be null.");
                var pathConstraints = this.pathConstraints;
                for (var i = 0, n = pathConstraints.length; i < n; i++)
                    if (pathConstraints[i].name == pathConstraintName)
                        return i;
                return -1;
            };
            return SkeletonData;
        }());
        core.SkeletonData = SkeletonData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        core.FAIL_ON_NON_EXISTING_SKIN = false;
        var SkeletonJson = (function () {
            function SkeletonJson(attachmentLoader) {
                this.scale = 1;
                this.linkedMeshes = new Array();
                this.attachmentLoader = attachmentLoader;
            }
            SkeletonJson.prototype.readSkeletonData = function (json) {
                var scale = this.scale;
                var skeletonData = new core.SkeletonData();
                var root = typeof (json) === "string" ? JSON.parse(json) : json;
                var skeletonMap = root.skeleton;
                if (skeletonMap != null) {
                    skeletonData.hash = skeletonMap.hash;
                    skeletonData.version = skeletonMap.spine;
                    skeletonData.x = skeletonMap.x;
                    skeletonData.y = skeletonMap.y;
                    skeletonData.width = skeletonMap.width;
                    skeletonData.height = skeletonMap.height;
                    skeletonData.fps = skeletonMap.fps;
                    skeletonData.imagesPath = skeletonMap.images;
                }
                if (root.bones) {
                    for (var i = 0; i < root.bones.length; i++) {
                        var boneMap = root.bones[i];
                        var parent_5 = null;
                        var parentName = this.getValue(boneMap, "parent", null);
                        if (parentName != null) {
                            parent_5 = skeletonData.findBone(parentName);
                            if (parent_5 == null)
                                throw new Error("Parent bone not found: " + parentName);
                        }
                        var data = new core.BoneData(skeletonData.bones.length, boneMap.name, parent_5);
                        data.length = this.getValue(boneMap, "length", 0) * scale;
                        data.x = this.getValue(boneMap, "x", 0) * scale;
                        data.y = this.getValue(boneMap, "y", 0) * scale;
                        data.rotation = this.getValue(boneMap, "rotation", 0);
                        data.scaleX = this.getValue(boneMap, "scaleX", 1);
                        data.scaleY = this.getValue(boneMap, "scaleY", 1);
                        data.shearX = this.getValue(boneMap, "shearX", 0);
                        data.shearY = this.getValue(boneMap, "shearY", 0);
                        data.transformMode = SkeletonJson.transformModeFromString(this.getValue(boneMap, "transform", "normal"));
                        data.skinRequired = this.getValue(boneMap, "skin", false);
                        skeletonData.bones.push(data);
                    }
                }
                if (root.slots) {
                    for (var i = 0; i < root.slots.length; i++) {
                        var slotMap = root.slots[i];
                        var slotName = slotMap.name;
                        var boneName = slotMap.bone;
                        var boneData = skeletonData.findBone(boneName);
                        if (boneData == null)
                            throw new Error("Slot bone not found: " + boneName);
                        var data = new core.SlotData(skeletonData.slots.length, slotName, boneData);
                        var color = this.getValue(slotMap, "color", null);
                        if (color != null)
                            data.color.setFromString(color);
                        var dark = this.getValue(slotMap, "dark", null);
                        if (dark != null) {
                            data.darkColor = new core.Color(1, 1, 1, 1);
                            data.darkColor.setFromString(dark);
                        }
                        data.attachmentName = this.getValue(slotMap, "attachment", null);
                        data.blendMode = SkeletonJson.blendModeFromString(this.getValue(slotMap, "blend", "normal"));
                        skeletonData.slots.push(data);
                    }
                }
                if (root.ik) {
                    for (var i = 0; i < root.ik.length; i++) {
                        var constraintMap = root.ik[i];
                        var data = new core.IkConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        data.skinRequired = this.getValue(constraintMap, "skin", false);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("IK bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findBone(targetName);
                        if (data.target == null)
                            throw new Error("IK target bone not found: " + targetName);
                        data.mix = this.getValue(constraintMap, "mix", 1);
                        data.softness = this.getValue(constraintMap, "softness", 0) * scale;
                        data.bendDirection = this.getValue(constraintMap, "bendPositive", true) ? 1 : -1;
                        data.compress = this.getValue(constraintMap, "compress", false);
                        data.stretch = this.getValue(constraintMap, "stretch", false);
                        data.uniform = this.getValue(constraintMap, "uniform", false);
                        skeletonData.ikConstraints.push(data);
                    }
                }
                if (root.transform) {
                    for (var i = 0; i < root.transform.length; i++) {
                        var constraintMap = root.transform[i];
                        var data = new core.TransformConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        data.skinRequired = this.getValue(constraintMap, "skin", false);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("Transform constraint bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findBone(targetName);
                        if (data.target == null)
                            throw new Error("Transform constraint target bone not found: " + targetName);
                        data.local = this.getValue(constraintMap, "local", false);
                        data.relative = this.getValue(constraintMap, "relative", false);
                        data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
                        data.offsetX = this.getValue(constraintMap, "x", 0) * scale;
                        data.offsetY = this.getValue(constraintMap, "y", 0) * scale;
                        data.offsetScaleX = this.getValue(constraintMap, "scaleX", 0);
                        data.offsetScaleY = this.getValue(constraintMap, "scaleY", 0);
                        data.offsetShearY = this.getValue(constraintMap, "shearY", 0);
                        data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
                        data.translateMix = this.getValue(constraintMap, "translateMix", 1);
                        data.scaleMix = this.getValue(constraintMap, "scaleMix", 1);
                        data.shearMix = this.getValue(constraintMap, "shearMix", 1);
                        skeletonData.transformConstraints.push(data);
                    }
                }
                if (root.path) {
                    for (var i = 0; i < root.path.length; i++) {
                        var constraintMap = root.path[i];
                        var data = new core.PathConstraintData(constraintMap.name);
                        data.order = this.getValue(constraintMap, "order", 0);
                        data.skinRequired = this.getValue(constraintMap, "skin", false);
                        for (var j = 0; j < constraintMap.bones.length; j++) {
                            var boneName = constraintMap.bones[j];
                            var bone = skeletonData.findBone(boneName);
                            if (bone == null)
                                throw new Error("Transform constraint bone not found: " + boneName);
                            data.bones.push(bone);
                        }
                        var targetName = constraintMap.target;
                        data.target = skeletonData.findSlot(targetName);
                        if (data.target == null)
                            throw new Error("Path target slot not found: " + targetName);
                        data.positionMode = SkeletonJson.positionModeFromString(this.getValue(constraintMap, "positionMode", "percent"));
                        data.spacingMode = SkeletonJson.spacingModeFromString(this.getValue(constraintMap, "spacingMode", "length"));
                        data.rotateMode = SkeletonJson.rotateModeFromString(this.getValue(constraintMap, "rotateMode", "tangent"));
                        data.offsetRotation = this.getValue(constraintMap, "rotation", 0);
                        data.position = this.getValue(constraintMap, "position", 0);
                        if (data.positionMode == core.PositionMode.Fixed)
                            data.position *= scale;
                        data.spacing = this.getValue(constraintMap, "spacing", 0);
                        if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                            data.spacing *= scale;
                        data.rotateMix = this.getValue(constraintMap, "rotateMix", 1);
                        data.translateMix = this.getValue(constraintMap, "translateMix", 1);
                        skeletonData.pathConstraints.push(data);
                    }
                }
                if (root.skins) {
                    for (var i = 0; i < root.skins.length; i++) {
                        var skinMap = root.skins[i];
                        var skin = new core.Skin(skinMap.name);
                        if (skinMap.bones) {
                            for (var ii = 0; ii < skinMap.bones.length; ii++) {
                                var bone = skeletonData.findBone(skinMap.bones[ii]);
                                if (bone == null)
                                    throw new Error("Skin bone not found: " + skinMap.bones[i]);
                                skin.bones.push(bone);
                            }
                        }
                        if (skinMap.ik) {
                            for (var ii = 0; ii < skinMap.ik.length; ii++) {
                                var constraint = skeletonData.findIkConstraint(skinMap.ik[ii]);
                                if (constraint == null)
                                    throw new Error("Skin IK constraint not found: " + skinMap.ik[i]);
                                skin.constraints.push(constraint);
                            }
                        }
                        if (skinMap.transform) {
                            for (var ii = 0; ii < skinMap.transform.length; ii++) {
                                var constraint = skeletonData.findTransformConstraint(skinMap.transform[ii]);
                                if (constraint == null)
                                    throw new Error("Skin transform constraint not found: " + skinMap.transform[i]);
                                skin.constraints.push(constraint);
                            }
                        }
                        if (skinMap.path) {
                            for (var ii = 0; ii < skinMap.path.length; ii++) {
                                var constraint = skeletonData.findPathConstraint(skinMap.path[ii]);
                                if (constraint == null)
                                    throw new Error("Skin path constraint not found: " + skinMap.path[i]);
                                skin.constraints.push(constraint);
                            }
                        }
                        for (var slotName in skinMap.attachments) {
                            var slot = skeletonData.findSlot(slotName);
                            if (slot == null)
                                throw new Error("Slot not found: " + slotName);
                            var slotMap = skinMap.attachments[slotName];
                            for (var entryName in slotMap) {
                                var attachment = this.readAttachment(slotMap[entryName], skin, slot.index, entryName, skeletonData);
                                if (attachment != null)
                                    skin.setAttachment(slot.index, entryName, attachment);
                            }
                        }
                        skeletonData.skins.push(skin);
                        if (skin.name == "default")
                            skeletonData.defaultSkin = skin;
                    }
                }
                for (var i = 0, n = this.linkedMeshes.length; i < n; i++) {
                    var linkedMesh = this.linkedMeshes[i];
                    var skin = linkedMesh.skin == null ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
                    if (skin == null)
                        throw new Error("Skin not found: " + linkedMesh.skin);
                    var parent_6 = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
                    if (parent_6 == null)
                        throw new Error("Parent mesh not found: " + linkedMesh.parent);
                    linkedMesh.mesh.deformAttachment = linkedMesh.inheritDeform ? parent_6 : linkedMesh.mesh;
                    linkedMesh.mesh.setParentMesh(parent_6);
                }
                this.linkedMeshes.length = 0;
                if (root.events) {
                    for (var eventName in root.events) {
                        var eventMap = root.events[eventName];
                        var data = new core.EventData(eventName);
                        data.intValue = this.getValue(eventMap, "int", 0);
                        data.floatValue = this.getValue(eventMap, "float", 0);
                        data.stringValue = this.getValue(eventMap, "string", "");
                        data.audioPath = this.getValue(eventMap, "audio", null);
                        if (data.audioPath != null) {
                            data.volume = this.getValue(eventMap, "volume", 1);
                            data.balance = this.getValue(eventMap, "balance", 0);
                        }
                        skeletonData.events.push(data);
                    }
                }
                if (root.animations) {
                    for (var animationName in root.animations) {
                        var animationMap = root.animations[animationName];
                        this.readAnimation(animationMap, animationName, skeletonData);
                    }
                }
                return skeletonData;
            };
            SkeletonJson.prototype.readAttachment = function (map, skin, slotIndex, name, skeletonData) {
                var scale = this.scale;
                name = this.getValue(map, "name", name);
                var type = this.getValue(map, "type", "region");
                switch (type) {
                    case "region": {
                        var path = this.getValue(map, "path", name);
                        var region = this.attachmentLoader.newRegionAttachment(skin, name, path);
                        if (region == null)
                            return null;
                        region.path = path;
                        region.x = this.getValue(map, "x", 0) * scale;
                        region.y = this.getValue(map, "y", 0) * scale;
                        region.scaleX = this.getValue(map, "scaleX", 1);
                        region.scaleY = this.getValue(map, "scaleY", 1);
                        region.rotation = this.getValue(map, "rotation", 0);
                        region.width = map.width * scale;
                        region.height = map.height * scale;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            region.color.setFromString(color);
                        return region;
                    }
                    case "boundingbox": {
                        var box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
                        if (box == null)
                            return null;
                        this.readVertices(map, box, map.vertexCount << 1);
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            box.color.setFromString(color);
                        return box;
                    }
                    case "mesh":
                    case "linkedmesh": {
                        var path = this.getValue(map, "path", name);
                        var mesh = this.attachmentLoader.newMeshAttachment(skin, name, path);
                        if (mesh == null)
                            return null;
                        mesh.path = path;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            mesh.color.setFromString(color);
                        mesh.width = this.getValue(map, "width", 0) * scale;
                        mesh.height = this.getValue(map, "height", 0) * scale;
                        var parent_7 = this.getValue(map, "parent", null);
                        if (parent_7 != null) {
                            this.linkedMeshes.push(new LinkedMesh(mesh, this.getValue(map, "skin", null), slotIndex, parent_7, this.getValue(map, "deform", true)));
                            return mesh;
                        }
                        var uvs = map.uvs;
                        this.readVertices(map, mesh, uvs.length);
                        mesh.triangles = map.triangles;
                        mesh.regionUVs = new Float32Array(uvs);
                        mesh.edges = this.getValue(map, "edges", null);
                        mesh.hullLength = this.getValue(map, "hull", 0) * 2;
                        return mesh;
                    }
                    case "path": {
                        var path = this.attachmentLoader.newPathAttachment(skin, name);
                        if (path == null)
                            return null;
                        path.closed = this.getValue(map, "closed", false);
                        path.constantSpeed = this.getValue(map, "constantSpeed", true);
                        var vertexCount = map.vertexCount;
                        this.readVertices(map, path, vertexCount << 1);
                        var lengths = core.Utils.newArray(vertexCount / 3, 0);
                        for (var i = 0; i < map.lengths.length; i++)
                            lengths[i] = map.lengths[i] * scale;
                        path.lengths = lengths;
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            path.color.setFromString(color);
                        return path;
                    }
                    case "point": {
                        var point = this.attachmentLoader.newPointAttachment(skin, name);
                        if (point == null)
                            return null;
                        point.x = this.getValue(map, "x", 0) * scale;
                        point.y = this.getValue(map, "y", 0) * scale;
                        point.rotation = this.getValue(map, "rotation", 0);
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            point.color.setFromString(color);
                        return point;
                    }
                    case "clipping": {
                        var clip = this.attachmentLoader.newClippingAttachment(skin, name);
                        if (clip == null)
                            return null;
                        var end = this.getValue(map, "end", null);
                        if (end != null) {
                            var slot = skeletonData.findSlot(end);
                            if (slot == null)
                                throw new Error("Clipping end slot not found: " + end);
                            clip.endSlot = slot;
                        }
                        var vertexCount = map.vertexCount;
                        this.readVertices(map, clip, vertexCount << 1);
                        var color = this.getValue(map, "color", null);
                        if (color != null)
                            clip.color.setFromString(color);
                        return clip;
                    }
                }
                return null;
            };
            SkeletonJson.prototype.readVertices = function (map, attachment, verticesLength) {
                var scale = this.scale;
                attachment.worldVerticesLength = verticesLength;
                var vertices = map.vertices;
                if (verticesLength == vertices.length) {
                    var scaledVertices = core.Utils.toFloatArray(vertices);
                    if (scale != 1) {
                        for (var i = 0, n = vertices.length; i < n; i++)
                            scaledVertices[i] *= scale;
                    }
                    attachment.vertices = scaledVertices;
                    return;
                }
                var weights = new Array();
                var bones = new Array();
                for (var i = 0, n = vertices.length; i < n;) {
                    var boneCount = vertices[i++];
                    bones.push(boneCount);
                    for (var nn = i + boneCount * 4; i < nn; i += 4) {
                        bones.push(vertices[i]);
                        weights.push(vertices[i + 1] * scale);
                        weights.push(vertices[i + 2] * scale);
                        weights.push(vertices[i + 3]);
                    }
                }
                attachment.bones = bones;
                attachment.vertices = core.Utils.toFloatArray(weights);
            };
            SkeletonJson.prototype.readAnimation = function (map, name, skeletonData) {
                var scale = this.scale;
                var timelines = new Array();
                var duration = 0;
                if (map.slots) {
                    for (var slotName in map.slots) {
                        var slotMap = map.slots[slotName];
                        var slotIndex = skeletonData.findSlotIndex(slotName);
                        if (slotIndex == -1)
                            throw new Error("Slot not found: " + slotName);
                        for (var timelineName in slotMap) {
                            var timelineMap = slotMap[timelineName];
                            if (timelineName == "attachment") {
                                var timeline = new core.AttachmentTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex++, this.getValue(valueMap, "time", 0), valueMap.name);
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                            }
                            else if (timelineName == "color") {
                                var timeline = new core.ColorTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    var color = new core.Color();
                                    color.setFromString(valueMap.color || "ffffffff");
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), color.r, color.g, color.b, color.a);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.ColorTimeline.ENTRIES]);
                            }
                            else if (timelineName == "twoColor") {
                                var timeline = new core.TwoColorTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    var light = new core.Color();
                                    var dark = new core.Color();
                                    light.setFromString(valueMap.light);
                                    dark.setFromString(valueMap.dark);
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), light.r, light.g, light.b, light.a, dark.r, dark.g, dark.b);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.TwoColorTimeline.ENTRIES]);
                            }
                            else
                                throw new Error("Invalid timeline type for a slot: " + timelineName + " (" + slotName + ")");
                        }
                    }
                }
                if (map.bones) {
                    for (var boneName in map.bones) {
                        var boneMap = map.bones[boneName];
                        var boneIndex = skeletonData.findBoneIndex(boneName);
                        if (boneIndex == -1)
                            throw new Error("Bone not found: " + boneName);
                        for (var timelineName in boneMap) {
                            var timelineMap = boneMap[timelineName];
                            if (timelineName === "rotate") {
                                var timeline = new core.RotateTimeline(timelineMap.length);
                                timeline.boneIndex = boneIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "angle", 0));
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.RotateTimeline.ENTRIES]);
                            }
                            else if (timelineName === "translate" || timelineName === "scale" || timelineName === "shear") {
                                var timeline = null;
                                var timelineScale = 1, defaultValue = 0;
                                if (timelineName === "scale") {
                                    timeline = new core.ScaleTimeline(timelineMap.length);
                                    defaultValue = 1;
                                }
                                else if (timelineName === "shear")
                                    timeline = new core.ShearTimeline(timelineMap.length);
                                else {
                                    timeline = new core.TranslateTimeline(timelineMap.length);
                                    timelineScale = scale;
                                }
                                timeline.boneIndex = boneIndex;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    var x = this.getValue(valueMap, "x", defaultValue), y = this.getValue(valueMap, "y", defaultValue);
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), x * timelineScale, y * timelineScale);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.TranslateTimeline.ENTRIES]);
                            }
                            else
                                throw new Error("Invalid timeline type for a bone: " + timelineName + " (" + boneName + ")");
                        }
                    }
                }
                if (map.ik) {
                    for (var constraintName in map.ik) {
                        var constraintMap = map.ik[constraintName];
                        var constraint = skeletonData.findIkConstraint(constraintName);
                        var timeline = new core.IkConstraintTimeline(constraintMap.length);
                        timeline.ikConstraintIndex = skeletonData.ikConstraints.indexOf(constraint);
                        var frameIndex = 0;
                        for (var i = 0; i < constraintMap.length; i++) {
                            var valueMap = constraintMap[i];
                            timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "mix", 1), this.getValue(valueMap, "softness", 0) * scale, this.getValue(valueMap, "bendPositive", true) ? 1 : -1, this.getValue(valueMap, "compress", false), this.getValue(valueMap, "stretch", false));
                            this.readCurve(valueMap, timeline, frameIndex);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.IkConstraintTimeline.ENTRIES]);
                    }
                }
                if (map.transform) {
                    for (var constraintName in map.transform) {
                        var constraintMap = map.transform[constraintName];
                        var constraint = skeletonData.findTransformConstraint(constraintName);
                        var timeline = new core.TransformConstraintTimeline(constraintMap.length);
                        timeline.transformConstraintIndex = skeletonData.transformConstraints.indexOf(constraint);
                        var frameIndex = 0;
                        for (var i = 0; i < constraintMap.length; i++) {
                            var valueMap = constraintMap[i];
                            timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1), this.getValue(valueMap, "scaleMix", 1), this.getValue(valueMap, "shearMix", 1));
                            this.readCurve(valueMap, timeline, frameIndex);
                            frameIndex++;
                        }
                        timelines.push(timeline);
                        duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.TransformConstraintTimeline.ENTRIES]);
                    }
                }
                if (map.path) {
                    for (var constraintName in map.path) {
                        var constraintMap = map.path[constraintName];
                        var index = skeletonData.findPathConstraintIndex(constraintName);
                        if (index == -1)
                            throw new Error("Path constraint not found: " + constraintName);
                        var data = skeletonData.pathConstraints[index];
                        for (var timelineName in constraintMap) {
                            var timelineMap = constraintMap[timelineName];
                            if (timelineName === "position" || timelineName === "spacing") {
                                var timeline = null;
                                var timelineScale = 1;
                                if (timelineName === "spacing") {
                                    timeline = new core.PathConstraintSpacingTimeline(timelineMap.length);
                                    if (data.spacingMode == core.SpacingMode.Length || data.spacingMode == core.SpacingMode.Fixed)
                                        timelineScale = scale;
                                }
                                else {
                                    timeline = new core.PathConstraintPositionTimeline(timelineMap.length);
                                    if (data.positionMode == core.PositionMode.Fixed)
                                        timelineScale = scale;
                                }
                                timeline.pathConstraintIndex = index;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, timelineName, 0) * timelineScale);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.PathConstraintPositionTimeline.ENTRIES]);
                            }
                            else if (timelineName === "mix") {
                                var timeline = new core.PathConstraintMixTimeline(timelineMap.length);
                                timeline.pathConstraintIndex = index;
                                var frameIndex = 0;
                                for (var i = 0; i < timelineMap.length; i++) {
                                    var valueMap = timelineMap[i];
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), this.getValue(valueMap, "rotateMix", 1), this.getValue(valueMap, "translateMix", 1));
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[(timeline.getFrameCount() - 1) * core.PathConstraintMixTimeline.ENTRIES]);
                            }
                        }
                    }
                }
                if (map.deform) {
                    for (var deformName in map.deform) {
                        var deformMap = map.deform[deformName];
                        var skin = skeletonData.findSkin(deformName);
                        if (skin == null) {
                            if (core.FAIL_ON_NON_EXISTING_SKIN) {
                                throw new Error("Skin not found: " + deformName);
                            }
                            else {
                                continue;
                            }
                        }
                        for (var slotName in deformMap) {
                            var slotMap = deformMap[slotName];
                            var slotIndex = skeletonData.findSlotIndex(slotName);
                            if (slotIndex == -1)
                                throw new Error("Slot not found: " + slotMap.name);
                            for (var timelineName in slotMap) {
                                var timelineMap = slotMap[timelineName];
                                var attachment = skin.getAttachment(slotIndex, timelineName);
                                if (attachment == null)
                                    throw new Error("Deform attachment not found: " + timelineMap.name);
                                var weighted = attachment.bones != null;
                                var vertices = attachment.vertices;
                                var deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                                var timeline = new core.DeformTimeline(timelineMap.length);
                                timeline.slotIndex = slotIndex;
                                timeline.attachment = attachment;
                                var frameIndex = 0;
                                for (var j = 0; j < timelineMap.length; j++) {
                                    var valueMap = timelineMap[j];
                                    var deform = void 0;
                                    var verticesValue = this.getValue(valueMap, "vertices", null);
                                    if (verticesValue == null)
                                        deform = weighted ? core.Utils.newFloatArray(deformLength) : vertices;
                                    else {
                                        deform = core.Utils.newFloatArray(deformLength);
                                        var start = this.getValue(valueMap, "offset", 0);
                                        core.Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
                                        if (scale != 1) {
                                            for (var i = start, n = i + verticesValue.length; i < n; i++)
                                                deform[i] *= scale;
                                        }
                                        if (!weighted) {
                                            for (var i = 0; i < deformLength; i++)
                                                deform[i] += vertices[i];
                                        }
                                    }
                                    timeline.setFrame(frameIndex, this.getValue(valueMap, "time", 0), deform);
                                    this.readCurve(valueMap, timeline, frameIndex);
                                    frameIndex++;
                                }
                                timelines.push(timeline);
                                duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                            }
                        }
                    }
                }
                var drawOrderNode = map.drawOrder;
                if (drawOrderNode == null)
                    drawOrderNode = map.draworder;
                if (drawOrderNode != null) {
                    var timeline = new core.DrawOrderTimeline(drawOrderNode.length);
                    var slotCount = skeletonData.slots.length;
                    var frameIndex = 0;
                    for (var j = 0; j < drawOrderNode.length; j++) {
                        var drawOrderMap = drawOrderNode[j];
                        var drawOrder = null;
                        var offsets = this.getValue(drawOrderMap, "offsets", null);
                        if (offsets != null) {
                            drawOrder = core.Utils.newArray(slotCount, -1);
                            var unchanged = core.Utils.newArray(slotCount - offsets.length, 0);
                            var originalIndex = 0, unchangedIndex = 0;
                            for (var i = 0; i < offsets.length; i++) {
                                var offsetMap = offsets[i];
                                var slotIndex = skeletonData.findSlotIndex(offsetMap.slot);
                                if (slotIndex == -1)
                                    throw new Error("Slot not found: " + offsetMap.slot);
                                while (originalIndex != slotIndex)
                                    unchanged[unchangedIndex++] = originalIndex++;
                                drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
                            }
                            while (originalIndex < slotCount)
                                unchanged[unchangedIndex++] = originalIndex++;
                            for (var i = slotCount - 1; i >= 0; i--)
                                if (drawOrder[i] == -1)
                                    drawOrder[i] = unchanged[--unchangedIndex];
                        }
                        timeline.setFrame(frameIndex++, this.getValue(drawOrderMap, "time", 0), drawOrder);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                }
                if (map.events) {
                    var timeline = new core.EventTimeline(map.events.length);
                    var frameIndex = 0;
                    for (var i = 0; i < map.events.length; i++) {
                        var eventMap = map.events[i];
                        var eventData = skeletonData.findEvent(eventMap.name);
                        if (eventData == null)
                            throw new Error("Event not found: " + eventMap.name);
                        var event_6 = new core.Event(core.Utils.toSinglePrecision(this.getValue(eventMap, "time", 0)), eventData);
                        event_6.intValue = this.getValue(eventMap, "int", eventData.intValue);
                        event_6.floatValue = this.getValue(eventMap, "float", eventData.floatValue);
                        event_6.stringValue = this.getValue(eventMap, "string", eventData.stringValue);
                        if (event_6.data.audioPath != null) {
                            event_6.volume = this.getValue(eventMap, "volume", 1);
                            event_6.balance = this.getValue(eventMap, "balance", 0);
                        }
                        timeline.setFrame(frameIndex++, event_6);
                    }
                    timelines.push(timeline);
                    duration = Math.max(duration, timeline.frames[timeline.getFrameCount() - 1]);
                }
                if (isNaN(duration)) {
                    throw new Error("Error while parsing animation, duration is NaN");
                }
                skeletonData.animations.push(new core.Animation(name, timelines, duration));
            };
            SkeletonJson.prototype.readCurve = function (map, timeline, frameIndex) {
                if (!map.curve)
                    return;
                if (map.curve === "stepped")
                    timeline.setStepped(frameIndex);
                else {
                    var curve = map.curve;
                    timeline.setCurve(frameIndex, curve, this.getValue(map, "c2", 0), this.getValue(map, "c3", 1), this.getValue(map, "c4", 1));
                }
            };
            SkeletonJson.prototype.getValue = function (map, prop, defaultValue) {
                return map[prop] !== undefined ? map[prop] : defaultValue;
            };
            SkeletonJson.blendModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "normal")
                    return core.BlendMode.Normal;
                if (str == "additive")
                    return core.BlendMode.Additive;
                if (str == "multiply")
                    return core.BlendMode.Multiply;
                if (str == "screen")
                    return core.BlendMode.Screen;
                throw new Error("Unknown blend mode: " + str);
            };
            SkeletonJson.positionModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "fixed")
                    return core.PositionMode.Fixed;
                if (str == "percent")
                    return core.PositionMode.Percent;
                throw new Error("Unknown position mode: " + str);
            };
            SkeletonJson.spacingModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "length")
                    return core.SpacingMode.Length;
                if (str == "fixed")
                    return core.SpacingMode.Fixed;
                if (str == "percent")
                    return core.SpacingMode.Percent;
                throw new Error("Unknown position mode: " + str);
            };
            SkeletonJson.rotateModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "tangent")
                    return core.RotateMode.Tangent;
                if (str == "chain")
                    return core.RotateMode.Chain;
                if (str == "chainscale")
                    return core.RotateMode.ChainScale;
                throw new Error("Unknown rotate mode: " + str);
            };
            SkeletonJson.transformModeFromString = function (str) {
                str = str.toLowerCase();
                if (str == "normal")
                    return core.TransformMode.Normal;
                if (str == "onlytranslation")
                    return core.TransformMode.OnlyTranslation;
                if (str == "norotationorreflection")
                    return core.TransformMode.NoRotationOrReflection;
                if (str == "noscale")
                    return core.TransformMode.NoScale;
                if (str == "noscaleorreflection")
                    return core.TransformMode.NoScaleOrReflection;
                throw new Error("Unknown transform mode: " + str);
            };
            return SkeletonJson;
        }());
        core.SkeletonJson = SkeletonJson;
        var LinkedMesh = (function () {
            function LinkedMesh(mesh, skin, slotIndex, parent, inheritDeform) {
                this.mesh = mesh;
                this.skin = skin;
                this.slotIndex = slotIndex;
                this.parent = parent;
                this.inheritDeform = inheritDeform;
            }
            return LinkedMesh;
        }());
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SkinEntry = (function () {
            function SkinEntry(slotIndex, name, attachment) {
                this.slotIndex = slotIndex;
                this.name = name;
                this.attachment = attachment;
            }
            return SkinEntry;
        }());
        core.SkinEntry = SkinEntry;
        var Skin = (function () {
            function Skin(name) {
                this.attachments = new Array();
                this.bones = Array();
                this.constraints = new Array();
                if (name == null)
                    throw new Error("name cannot be null.");
                this.name = name;
            }
            Skin.prototype.setAttachment = function (slotIndex, name, attachment) {
                if (attachment == null)
                    throw new Error("attachment cannot be null.");
                var attachments = this.attachments;
                if (slotIndex >= attachments.length)
                    attachments.length = slotIndex + 1;
                if (!attachments[slotIndex])
                    attachments[slotIndex] = {};
                attachments[slotIndex][name] = attachment;
            };
            Skin.prototype.addSkin = function (skin) {
                for (var i = 0; i < skin.bones.length; i++) {
                    var bone = skin.bones[i];
                    var contained = false;
                    for (var j = 0; j < this.bones.length; j++) {
                        if (this.bones[j] == bone) {
                            contained = true;
                            break;
                        }
                    }
                    if (!contained)
                        this.bones.push(bone);
                }
                for (var i = 0; i < skin.constraints.length; i++) {
                    var constraint = skin.constraints[i];
                    var contained = false;
                    for (var j = 0; j < this.constraints.length; j++) {
                        if (this.constraints[j] == constraint) {
                            contained = true;
                            break;
                        }
                    }
                    if (!contained)
                        this.constraints.push(constraint);
                }
                var attachments = skin.getAttachments();
                for (var i = 0; i < attachments.length; i++) {
                    var attachment = attachments[i];
                    this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
                }
            };
            Skin.prototype.copySkin = function (skin) {
                for (var i = 0; i < skin.bones.length; i++) {
                    var bone = skin.bones[i];
                    var contained = false;
                    for (var j = 0; j < this.bones.length; j++) {
                        if (this.bones[j] == bone) {
                            contained = true;
                            break;
                        }
                    }
                    if (!contained)
                        this.bones.push(bone);
                }
                for (var i = 0; i < skin.constraints.length; i++) {
                    var constraint = skin.constraints[i];
                    var contained = false;
                    for (var j = 0; j < this.constraints.length; j++) {
                        if (this.constraints[j] == constraint) {
                            contained = true;
                            break;
                        }
                    }
                    if (!contained)
                        this.constraints.push(constraint);
                }
                var attachments = skin.getAttachments();
                for (var i = 0; i < attachments.length; i++) {
                    var attachment = attachments[i];
                    if (attachment.attachment == null)
                        continue;
                    if (attachment.attachment instanceof core.MeshAttachment) {
                        attachment.attachment = attachment.attachment.newLinkedMesh();
                        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
                    }
                    else {
                        attachment.attachment = attachment.attachment.copy();
                        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
                    }
                }
            };
            Skin.prototype.getAttachment = function (slotIndex, name) {
                var dictionary = this.attachments[slotIndex];
                return dictionary ? dictionary[name] : null;
            };
            Skin.prototype.removeAttachment = function (slotIndex, name) {
                var dictionary = this.attachments[slotIndex];
                if (dictionary)
                    dictionary[name] = null;
            };
            Skin.prototype.getAttachments = function () {
                var entries = new Array();
                for (var i = 0; i < this.attachments.length; i++) {
                    var slotAttachments = this.attachments[i];
                    if (slotAttachments) {
                        for (var name_4 in slotAttachments) {
                            var attachment = slotAttachments[name_4];
                            if (attachment)
                                entries.push(new SkinEntry(i, name_4, attachment));
                        }
                    }
                }
                return entries;
            };
            Skin.prototype.getAttachmentsForSlot = function (slotIndex, attachments) {
                var slotAttachments = this.attachments[slotIndex];
                if (slotAttachments) {
                    for (var name_5 in slotAttachments) {
                        var attachment = slotAttachments[name_5];
                        if (attachment)
                            attachments.push(new SkinEntry(slotIndex, name_5, attachment));
                    }
                }
            };
            Skin.prototype.clear = function () {
                this.attachments.length = 0;
                this.bones.length = 0;
                this.constraints.length = 0;
            };
            Skin.prototype.attachAll = function (skeleton, oldSkin) {
                var slotIndex = 0;
                for (var i = 0; i < skeleton.slots.length; i++) {
                    var slot = skeleton.slots[i];
                    var slotAttachment = slot.getAttachment();
                    if (slotAttachment && slotIndex < oldSkin.attachments.length) {
                        var dictionary = oldSkin.attachments[slotIndex];
                        for (var key in dictionary) {
                            var skinAttachment = dictionary[key];
                            if (slotAttachment == skinAttachment) {
                                var attachment = this.getAttachment(slotIndex, key);
                                if (attachment != null)
                                    slot.setAttachment(attachment);
                                break;
                            }
                        }
                    }
                    slotIndex++;
                }
            };
            return Skin;
        }());
        core.Skin = Skin;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Slot = (function () {
            function Slot(data, bone) {
                this.deform = new Array();
                if (data == null)
                    throw new Error("data cannot be null.");
                if (bone == null)
                    throw new Error("bone cannot be null.");
                this.data = data;
                this.bone = bone;
                this.color = new core.Color();
                this.darkColor = data.darkColor == null ? null : new core.Color();
                this.setToSetupPose();
                this.blendMode = this.data.blendMode;
            }
            Slot.prototype.getAttachment = function () {
                return this.attachment;
            };
            Slot.prototype.setAttachment = function (attachment) {
                if (this.attachment == attachment)
                    return;
                this.attachment = attachment;
                this.attachmentTime = this.bone.skeleton.time;
                this.deform.length = 0;
            };
            Slot.prototype.setAttachmentTime = function (time) {
                this.attachmentTime = this.bone.skeleton.time - time;
            };
            Slot.prototype.getAttachmentTime = function () {
                return this.bone.skeleton.time - this.attachmentTime;
            };
            Slot.prototype.setToSetupPose = function () {
                this.color.setFromColor(this.data.color);
                if (this.darkColor != null)
                    this.darkColor.setFromColor(this.data.darkColor);
                if (this.data.attachmentName == null)
                    this.attachment = null;
                else {
                    this.attachment = null;
                    this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
                }
            };
            return Slot;
        }());
        core.Slot = Slot;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SlotData = (function () {
            function SlotData(index, name, boneData) {
                this.color = new core.Color(1, 1, 1, 1);
                if (index < 0)
                    throw new Error("index must be >= 0.");
                if (name == null)
                    throw new Error("name cannot be null.");
                if (boneData == null)
                    throw new Error("boneData cannot be null.");
                this.index = index;
                this.name = name;
                this.boneData = boneData;
            }
            return SlotData;
        }());
        core.SlotData = SlotData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Texture = (function () {
            function Texture(image) {
                this._image = image;
            }
            Texture.prototype.getImage = function () {
                return this._image;
            };
            Texture.filterFromString = function (text) {
                switch (text.toLowerCase()) {
                    case "nearest": return TextureFilter.Nearest;
                    case "linear": return TextureFilter.Linear;
                    case "mipmap": return TextureFilter.MipMap;
                    case "mipmapnearestnearest": return TextureFilter.MipMapNearestNearest;
                    case "mipmaplinearnearest": return TextureFilter.MipMapLinearNearest;
                    case "mipmapnearestlinear": return TextureFilter.MipMapNearestLinear;
                    case "mipmaplinearlinear": return TextureFilter.MipMapLinearLinear;
                    default: throw new Error("Unknown texture filter " + text);
                }
            };
            Texture.wrapFromString = function (text) {
                switch (text.toLowerCase()) {
                    case "mirroredtepeat": return TextureWrap.MirroredRepeat;
                    case "clamptoedge": return TextureWrap.ClampToEdge;
                    case "repeat": return TextureWrap.Repeat;
                    default: throw new Error("Unknown texture wrap " + text);
                }
            };
            return Texture;
        }());
        core.Texture = Texture;
        var TextureFilter;
        (function (TextureFilter) {
            TextureFilter[TextureFilter["Nearest"] = 9728] = "Nearest";
            TextureFilter[TextureFilter["Linear"] = 9729] = "Linear";
            TextureFilter[TextureFilter["MipMap"] = 9987] = "MipMap";
            TextureFilter[TextureFilter["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
            TextureFilter[TextureFilter["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
            TextureFilter[TextureFilter["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
            TextureFilter[TextureFilter["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
        })(TextureFilter = core.TextureFilter || (core.TextureFilter = {}));
        var TextureWrap;
        (function (TextureWrap) {
            TextureWrap[TextureWrap["MirroredRepeat"] = 33648] = "MirroredRepeat";
            TextureWrap[TextureWrap["ClampToEdge"] = 33071] = "ClampToEdge";
            TextureWrap[TextureWrap["Repeat"] = 10497] = "Repeat";
        })(TextureWrap = core.TextureWrap || (core.TextureWrap = {}));
        var TextureRegion = (function () {
            function TextureRegion() {
                this.size = null;
            }
            Object.defineProperty(TextureRegion.prototype, "width", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        return tex.crop.width;
                    }
                    if (tex.trim) {
                        return tex.trim.width;
                    }
                    return tex.orig.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "height", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        return tex.crop.height;
                    }
                    if (tex.trim) {
                        return tex.trim.height;
                    }
                    return tex.orig.height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "u", {
                get: function () {
                    return this.texture._uvs.x0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "v", {
                get: function () {
                    return this.texture._uvs.y0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "u2", {
                get: function () {
                    return this.texture._uvs.x2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "v2", {
                get: function () {
                    return this.texture._uvs.y2;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "offsetX", {
                get: function () {
                    var tex = this.texture;
                    return tex.trim ? tex.trim.x : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "offsetY", {
                get: function () {
                    // console.warn("Deprecation Warning: @Hackerham: I guess, if you are using PIXI-SPINE ATLAS region.offsetY, you want a texture, right? Use region.texture from now on.");
                    return this.spineOffsetY;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "pixiOffsetY", {
                get: function () {
                    var tex = this.texture;
                    return tex.trim ? tex.trim.y : 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "spineOffsetY", {
                get: function () {
                    var tex = this.texture;
                    return this.originalHeight - this.height - (tex.trim ? tex.trim.y : 0);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "originalWidth", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        if (tex.trim) {
                            return tex.trim.width;
                        }
                        return tex.crop.width;
                    }
                    return tex.orig.width;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "originalHeight", {
                get: function () {
                    var tex = this.texture;
                    if (PIXI.VERSION[0] == '3') {
                        if (tex.trim) {
                            return tex.trim.height;
                        }
                        return tex.crop.height;
                    }
                    return tex.orig.height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "x", {
                get: function () {
                    return this.texture.frame.x;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "y", {
                get: function () {
                    return this.texture.frame.y;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(TextureRegion.prototype, "rotate", {
                get: function () {
                    return this.texture.rotate !== 0;
                },
                enumerable: true,
                configurable: true
            });
            return TextureRegion;
        }());
        core.TextureRegion = TextureRegion;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var TextureAtlas = (function () {
            function TextureAtlas(atlasText, textureLoader, callback) {
                this.pages = new Array();
                this.regions = new Array();
                if (atlasText) {
                    this.addSpineAtlas(atlasText, textureLoader, callback);
                }
            }
            TextureAtlas.prototype.addTexture = function (name, texture) {
                var pages = this.pages;
                var page = null;
                for (var i = 0; i < pages.length; i++) {
                    if (pages[i].baseTexture === texture.baseTexture) {
                        page = pages[i];
                        break;
                    }
                }
                if (page === null) {
                    page = new TextureAtlasPage();
                    page.name = 'texturePage';
                    var baseTexture = texture.baseTexture;
                    page.width = baseTexture.realWidth;
                    page.height = baseTexture.realHeight;
                    page.baseTexture = baseTexture;
                    page.minFilter = page.magFilter = core.TextureFilter.Nearest;
                    page.uWrap = core.TextureWrap.ClampToEdge;
                    page.vWrap = core.TextureWrap.ClampToEdge;
                    pages.push(page);
                }
                var region = new TextureAtlasRegion();
                region.name = name;
                region.page = page;
                region.texture = texture;
                region.index = -1;
                this.regions.push(region);
                return region;
            };
            TextureAtlas.prototype.addTextureHash = function (textures, stripExtension) {
                for (var key in textures) {
                    if (textures.hasOwnProperty(key)) {
                        this.addTexture(stripExtension && key.indexOf('.') !== -1 ? key.substr(0, key.lastIndexOf('.')) : key, textures[key]);
                    }
                }
            };
            TextureAtlas.prototype.addSpineAtlas = function (atlasText, textureLoader, callback) {
                return this.load(atlasText, textureLoader, callback);
            };
            TextureAtlas.prototype.load = function (atlasText, textureLoader, callback) {
                var _this = this;
                if (textureLoader == null)
                    throw new Error("textureLoader cannot be null.");
                var reader = new TextureAtlasReader(atlasText);
                var tuple = new Array(4);
                var page = null;
                var iterateParser = function () {
                    while (true) {
                        var line = reader.readLine();
                        if (line == null) {
                            return callback && callback(_this);
                        }
                        line = line.trim();
                        if (line.length == 0)
                            page = null;
                        else if (!page) {
                            page = new TextureAtlasPage();
                            page.name = line;
                            if (reader.readTuple(tuple) == 2) {
                                page.width = parseInt(tuple[0]);
                                page.height = parseInt(tuple[1]);
                                reader.readTuple(tuple);
                            }
                            reader.readTuple(tuple);
                            page.minFilter = core.Texture.filterFromString(tuple[0]);
                            page.magFilter = core.Texture.filterFromString(tuple[1]);
                            var direction = reader.readValue();
                            page.uWrap = core.TextureWrap.ClampToEdge;
                            page.vWrap = core.TextureWrap.ClampToEdge;
                            if (direction == "x")
                                page.uWrap = core.TextureWrap.Repeat;
                            else if (direction == "y")
                                page.vWrap = core.TextureWrap.Repeat;
                            else if (direction == "xy")
                                page.uWrap = page.vWrap = core.TextureWrap.Repeat;
                            textureLoader(line, function (texture) {
                                if (texture === null) {
                                    _this.pages.splice(_this.pages.indexOf(page), 1);
                                    return callback && callback(null);
                                }
                                page.baseTexture = texture;
                                if (!texture.valid) {
                                    texture.setSize(page.width, page.height);
                                }
                                _this.pages.push(page);
                                page.setFilters();
                                if (!page.width || !page.height) {
                                    page.width = texture.realWidth;
                                    page.height = texture.realHeight;
                                    if (!page.width || !page.height) {
                                        console.log("ERROR spine atlas page " + page.name + ": meshes wont work if you dont specify size in atlas (http://www.html5gamedevs.com/topic/18888-pixi-spines-and-meshes/?p=107121)");
                                    }
                                }
                                iterateParser();
                            });
                            _this.pages.push(page);
                            break;
                        }
                        else {
                            var region = new TextureAtlasRegion();
                            region.name = line;
                            region.page = page;
                            var rotateValue = reader.readValue();
                            var rotate = 0;
                            if (rotateValue.toLocaleLowerCase() == "true") {
                                rotate = 6;
                            }
                            else if (rotateValue.toLocaleLowerCase() == "false") {
                                rotate = 0;
                            }
                            else {
                                rotate = ((720 - parseFloat(rotateValue)) % 360) / 45;
                            }
                            reader.readTuple(tuple);
                            var x = parseInt(tuple[0]);
                            var y = parseInt(tuple[1]);
                            reader.readTuple(tuple);
                            var width = parseInt(tuple[0]);
                            var height = parseInt(tuple[1]);
                            var resolution = page.baseTexture.resolution;
                            x /= resolution;
                            y /= resolution;
                            width /= resolution;
                            height /= resolution;
                            var frame = new PIXI.Rectangle(x, y, rotate ? height : width, rotate ? width : height);
                            if (reader.readTuple(tuple) == 4) {
                                if (reader.readTuple(tuple) == 4) {
                                    reader.readTuple(tuple);
                                }
                            }
                            var originalWidth = parseInt(tuple[0]) / resolution;
                            var originalHeight = parseInt(tuple[1]) / resolution;
                            reader.readTuple(tuple);
                            var offsetX = parseInt(tuple[0]) / resolution;
                            var offsetY = parseInt(tuple[1]) / resolution;
                            var orig = new PIXI.Rectangle(0, 0, originalWidth, originalHeight);
                            var trim = new PIXI.Rectangle(offsetX, originalHeight - height - offsetY, width, height);
                            if (PIXI.VERSION[0] != '3') {
                                region.texture = new PIXI.Texture(region.page.baseTexture, frame, orig, trim, rotate);
                            }
                            else {
                                var frame2 = new PIXI.Rectangle(x, y, width, height);
                                var crop = frame2.clone();
                                trim.width = originalWidth;
                                trim.height = originalHeight;
                                region.texture = new PIXI.Texture(region.page.baseTexture, frame2, crop, trim, rotate);
                            }
                            region.index = parseInt(reader.readValue());
                            region.texture.updateUvs();
                            _this.regions.push(region);
                        }
                    }
                };
                iterateParser();
            };
            TextureAtlas.prototype.findRegion = function (name) {
                for (var i = 0; i < this.regions.length; i++) {
                    if (this.regions[i].name == name) {
                        return this.regions[i];
                    }
                }
                return null;
            };
            TextureAtlas.prototype.dispose = function () {
                for (var i = 0; i < this.pages.length; i++) {
                    this.pages[i].baseTexture.dispose();
                }
            };
            return TextureAtlas;
        }());
        core.TextureAtlas = TextureAtlas;
        var TextureAtlasReader = (function () {
            function TextureAtlasReader(text) {
                this.index = 0;
                this.lines = text.split(/\r\n|\r|\n/);
            }
            TextureAtlasReader.prototype.readLine = function () {
                if (this.index >= this.lines.length)
                    return null;
                return this.lines[this.index++];
            };
            TextureAtlasReader.prototype.readValue = function () {
                var line = this.readLine();
                var colon = line.indexOf(":");
                if (colon == -1)
                    throw new Error("Invalid line: " + line);
                return line.substring(colon + 1).trim();
            };
            TextureAtlasReader.prototype.readTuple = function (tuple) {
                var line = this.readLine();
                var colon = line.indexOf(":");
                if (colon == -1)
                    throw new Error("Invalid line: " + line);
                var i = 0, lastMatch = colon + 1;
                for (; i < 3; i++) {
                    var comma = line.indexOf(",", lastMatch);
                    if (comma == -1)
                        break;
                    tuple[i] = line.substr(lastMatch, comma - lastMatch).trim();
                    lastMatch = comma + 1;
                }
                tuple[i] = line.substring(lastMatch).trim();
                return i + 1;
            };
            return TextureAtlasReader;
        }());
        var TextureAtlasPage = (function () {
            function TextureAtlasPage() {
            }
            TextureAtlasPage.prototype.setFilters = function () {
                var tex = this.baseTexture;
                var filter = this.minFilter;
                if (filter == core.TextureFilter.Linear) {
                    tex.scaleMode = PIXI.SCALE_MODES.LINEAR;
                }
                else if (this.minFilter == core.TextureFilter.Nearest) {
                    tex.scaleMode = PIXI.SCALE_MODES.NEAREST;
                }
                else {
                    tex.mipmap = PIXI.MIPMAP_MODES.POW2;
                    if (filter == core.TextureFilter.MipMapNearestNearest) {
                        tex.scaleMode = PIXI.SCALE_MODES.NEAREST;
                    }
                    else {
                        tex.scaleMode = PIXI.SCALE_MODES.LINEAR;
                    }
                }
            };
            return TextureAtlasPage;
        }());
        core.TextureAtlasPage = TextureAtlasPage;
        var TextureAtlasRegion = (function (_super) {
            __extends(TextureAtlasRegion, _super);
            function TextureAtlasRegion() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return TextureAtlasRegion;
        }(core.TextureRegion));
        core.TextureAtlasRegion = TextureAtlasRegion;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var TransformConstraint = (function () {
            function TransformConstraint(data, skeleton) {
                this.rotateMix = 0;
                this.translateMix = 0;
                this.scaleMix = 0;
                this.shearMix = 0;
                this.temp = new core.Vector2();
                this.active = false;
                if (data == null)
                    throw new Error("data cannot be null.");
                if (skeleton == null)
                    throw new Error("skeleton cannot be null.");
                this.data = data;
                this.rotateMix = data.rotateMix;
                this.translateMix = data.translateMix;
                this.scaleMix = data.scaleMix;
                this.shearMix = data.shearMix;
                this.bones = new Array();
                for (var i = 0; i < data.bones.length; i++)
                    this.bones.push(skeleton.findBone(data.bones[i].name));
                this.target = skeleton.findBone(data.target.name);
            }
            TransformConstraint.prototype.isActive = function () {
                return this.active;
            };
            TransformConstraint.prototype.apply = function () {
                this.update();
            };
            TransformConstraint.prototype.update = function () {
                if (this.data.local) {
                    if (this.data.relative)
                        this.applyRelativeLocal();
                    else
                        this.applyAbsoluteLocal();
                }
                else {
                    if (this.data.relative)
                        this.applyRelativeWorld();
                    else
                        this.applyAbsoluteWorld();
                }
            };
            TransformConstraint.prototype.applyAbsoluteWorld = function () {
                var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
                var target = this.target;
                var targetMat = target.matrix;
                var ta = targetMat.a, tb = targetMat.c, tc = targetMat.b, td = targetMat.d;
                var degRadReflect = ta * td - tb * tc > 0 ? core.MathUtils.degRad : -core.MathUtils.degRad;
                var offsetRotation = this.data.offsetRotation * degRadReflect;
                var offsetShearY = this.data.offsetShearY * degRadReflect;
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    var modified = false;
                    var mat = bone.matrix;
                    if (rotateMix != 0) {
                        var a = mat.a, b = mat.c, c = mat.b, d = mat.d;
                        var r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r *= rotateMix;
                        var cos = Math.cos(r), sin = Math.sin(r);
                        mat.a = cos * a - sin * c;
                        mat.c = cos * b - sin * d;
                        mat.b = sin * a + cos * c;
                        mat.d = sin * b + cos * d;
                        modified = true;
                    }
                    if (translateMix != 0) {
                        var temp = this.temp;
                        target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                        mat.tx += (temp.x - mat.tx) * translateMix;
                        mat.ty += (temp.y - mat.ty) * translateMix;
                        modified = true;
                    }
                    if (scaleMix > 0) {
                        var s = Math.sqrt(mat.a * mat.a + mat.b * mat.b);
                        var ts = Math.sqrt(ta * ta + tc * tc);
                        if (s > 0.00001)
                            s = (s + (ts - s + this.data.offsetScaleX) * scaleMix) / s;
                        mat.a *= s;
                        mat.b *= s;
                        s = Math.sqrt(mat.c * mat.c + mat.d * mat.d);
                        ts = Math.sqrt(tb * tb + td * td);
                        if (s > 0.00001)
                            s = (s + (ts - s + this.data.offsetScaleY) * scaleMix) / s;
                        mat.c *= s;
                        mat.d *= s;
                        modified = true;
                    }
                    if (shearMix > 0) {
                        var b = mat.c, d = mat.d;
                        var by = Math.atan2(d, b);
                        var r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(mat.b, mat.a));
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r = by + (r + offsetShearY) * shearMix;
                        var s = Math.sqrt(b * b + d * d);
                        mat.c = Math.cos(r) * s;
                        mat.d = Math.sin(r) * s;
                        modified = true;
                    }
                    if (modified)
                        bone.appliedValid = false;
                }
            };
            TransformConstraint.prototype.applyRelativeWorld = function () {
                var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
                var target = this.target;
                var targetMat = target.matrix;
                var ta = targetMat.a, tb = targetMat.c, tc = targetMat.b, td = targetMat.d;
                var degRadReflect = ta * td - tb * tc > 0 ? core.MathUtils.degRad : -core.MathUtils.degRad;
                var offsetRotation = this.data.offsetRotation * degRadReflect, offsetShearY = this.data.offsetShearY * degRadReflect;
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    var modified = false;
                    var mat = bone.matrix;
                    if (rotateMix != 0) {
                        var a = mat.a, b = mat.c, c = mat.b, d = mat.d;
                        var r = Math.atan2(tc, ta) + offsetRotation;
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        r *= rotateMix;
                        var cos = Math.cos(r), sin = Math.sin(r);
                        mat.a = cos * a - sin * c;
                        mat.c = cos * b - sin * d;
                        mat.b = sin * a + cos * c;
                        mat.d = sin * b + cos * d;
                        modified = true;
                    }
                    if (translateMix != 0) {
                        var temp = this.temp;
                        target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
                        mat.tx += temp.x * translateMix;
                        mat.ty += temp.y * translateMix;
                        modified = true;
                    }
                    if (scaleMix > 0) {
                        var s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * scaleMix + 1;
                        mat.a *= s;
                        mat.b *= s;
                        s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * scaleMix + 1;
                        mat.c *= s;
                        mat.d *= s;
                        modified = true;
                    }
                    if (shearMix > 0) {
                        var r = Math.atan2(td, tb) - Math.atan2(tc, ta);
                        if (r > core.MathUtils.PI)
                            r -= core.MathUtils.PI2;
                        else if (r < -core.MathUtils.PI)
                            r += core.MathUtils.PI2;
                        var b = mat.c, d = mat.d;
                        r = Math.atan2(d, b) + (r - core.MathUtils.PI / 2 + offsetShearY) * shearMix;
                        var s = Math.sqrt(b * b + d * d);
                        mat.c = Math.cos(r) * s;
                        mat.d = Math.sin(r) * s;
                        modified = true;
                    }
                    if (modified)
                        bone.appliedValid = false;
                }
            };
            TransformConstraint.prototype.applyAbsoluteLocal = function () {
                var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
                var target = this.target;
                if (!target.appliedValid)
                    target.updateAppliedTransform();
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (!bone.appliedValid)
                        bone.updateAppliedTransform();
                    var rotation = bone.arotation;
                    if (rotateMix != 0) {
                        var r = target.arotation - rotation + this.data.offsetRotation;
                        r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
                        rotation += r * rotateMix;
                    }
                    var x = bone.ax, y = bone.ay;
                    if (translateMix != 0) {
                        x += (target.ax - x + this.data.offsetX) * translateMix;
                        y += (target.ay - y + this.data.offsetY) * translateMix;
                    }
                    var scaleX = bone.ascaleX, scaleY = bone.ascaleY;
                    if (scaleMix > 0) {
                        if (scaleX > 0.00001)
                            scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * scaleMix) / scaleX;
                        if (scaleY > 0.00001)
                            scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * scaleMix) / scaleY;
                    }
                    var shearY = bone.ashearY;
                    if (shearMix > 0) {
                        var r = target.ashearY - shearY + this.data.offsetShearY;
                        r -= (16384 - ((16384.499999999996 - r / 360) | 0)) * 360;
                        bone.shearY += r * shearMix;
                    }
                    bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
                }
            };
            TransformConstraint.prototype.applyRelativeLocal = function () {
                var rotateMix = this.rotateMix, translateMix = this.translateMix, scaleMix = this.scaleMix, shearMix = this.shearMix;
                var target = this.target;
                if (!target.appliedValid)
                    target.updateAppliedTransform();
                var bones = this.bones;
                for (var i = 0, n = bones.length; i < n; i++) {
                    var bone = bones[i];
                    if (!bone.appliedValid)
                        bone.updateAppliedTransform();
                    var rotation = bone.arotation;
                    if (rotateMix != 0)
                        rotation += (target.arotation + this.data.offsetRotation) * rotateMix;
                    var x = bone.ax, y = bone.ay;
                    if (translateMix != 0) {
                        x += (target.ax + this.data.offsetX) * translateMix;
                        y += (target.ay + this.data.offsetY) * translateMix;
                    }
                    var scaleX = bone.ascaleX, scaleY = bone.ascaleY;
                    if (scaleMix > 0) {
                        if (scaleX > 0.00001)
                            scaleX *= ((target.ascaleX - 1 + this.data.offsetScaleX) * scaleMix) + 1;
                        if (scaleY > 0.00001)
                            scaleY *= ((target.ascaleY - 1 + this.data.offsetScaleY) * scaleMix) + 1;
                    }
                    var shearY = bone.ashearY;
                    if (shearMix > 0)
                        shearY += (target.ashearY + this.data.offsetShearY) * shearMix;
                    bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
                }
            };
            return TransformConstraint;
        }());
        core.TransformConstraint = TransformConstraint;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var TransformConstraintData = (function (_super) {
            __extends(TransformConstraintData, _super);
            function TransformConstraintData(name) {
                var _this = _super.call(this, name, 0, false) || this;
                _this.bones = new Array();
                _this.rotateMix = 0;
                _this.translateMix = 0;
                _this.scaleMix = 0;
                _this.shearMix = 0;
                _this.offsetRotation = 0;
                _this.offsetX = 0;
                _this.offsetY = 0;
                _this.offsetScaleX = 0;
                _this.offsetScaleY = 0;
                _this.offsetShearY = 0;
                _this.relative = false;
                _this.local = false;
                return _this;
            }
            return TransformConstraintData;
        }(core.ConstraintData));
        core.TransformConstraintData = TransformConstraintData;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Triangulator = (function () {
            function Triangulator() {
                this.convexPolygons = new Array();
                this.convexPolygonsIndices = new Array();
                this.indicesArray = new Array();
                this.isConcaveArray = new Array();
                this.triangles = new Array();
                this.polygonPool = new core.Pool(function () {
                    return new Array();
                });
                this.polygonIndicesPool = new core.Pool(function () {
                    return new Array();
                });
            }
            Triangulator.prototype.triangulate = function (verticesArray) {
                var vertices = verticesArray;
                var vertexCount = verticesArray.length >> 1;
                var indices = this.indicesArray;
                indices.length = 0;
                for (var i = 0; i < vertexCount; i++)
                    indices[i] = i;
                var isConcave = this.isConcaveArray;
                isConcave.length = 0;
                for (var i = 0, n = vertexCount; i < n; ++i)
                    isConcave[i] = Triangulator.isConcave(i, vertexCount, vertices, indices);
                var triangles = this.triangles;
                triangles.length = 0;
                while (vertexCount > 3) {
                    var previous = vertexCount - 1, i = 0, next = 1;
                    while (true) {
                        outer: if (!isConcave[i]) {
                            var p1 = indices[previous] << 1, p2 = indices[i] << 1, p3 = indices[next] << 1;
                            var p1x = vertices[p1], p1y = vertices[p1 + 1];
                            var p2x = vertices[p2], p2y = vertices[p2 + 1];
                            var p3x = vertices[p3], p3y = vertices[p3 + 1];
                            for (var ii = (next + 1) % vertexCount; ii != previous; ii = (ii + 1) % vertexCount) {
                                if (!isConcave[ii])
                                    continue;
                                var v = indices[ii] << 1;
                                var vx = vertices[v], vy = vertices[v + 1];
                                if (Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
                                    if (Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
                                        if (Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy))
                                            break outer;
                                    }
                                }
                            }
                            break;
                        }
                        if (next == 0) {
                            do {
                                if (!isConcave[i])
                                    break;
                                i--;
                            } while (i > 0);
                            break;
                        }
                        previous = i;
                        i = next;
                        next = (next + 1) % vertexCount;
                    }
                    triangles.push(indices[(vertexCount + i - 1) % vertexCount]);
                    triangles.push(indices[i]);
                    triangles.push(indices[(i + 1) % vertexCount]);
                    indices.splice(i, 1);
                    isConcave.splice(i, 1);
                    vertexCount--;
                    var previousIndex = (vertexCount + i - 1) % vertexCount;
                    var nextIndex = i == vertexCount ? 0 : i;
                    isConcave[previousIndex] = Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
                    isConcave[nextIndex] = Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
                }
                if (vertexCount == 3) {
                    triangles.push(indices[2]);
                    triangles.push(indices[0]);
                    triangles.push(indices[1]);
                }
                return triangles;
            };
            Triangulator.prototype.decompose = function (verticesArray, triangles) {
                var vertices = verticesArray;
                var convexPolygons = this.convexPolygons;
                this.polygonPool.freeAll(convexPolygons);
                convexPolygons.length = 0;
                var convexPolygonsIndices = this.convexPolygonsIndices;
                this.polygonIndicesPool.freeAll(convexPolygonsIndices);
                convexPolygonsIndices.length = 0;
                var polygonIndices = this.polygonIndicesPool.obtain();
                polygonIndices.length = 0;
                var polygon = this.polygonPool.obtain();
                polygon.length = 0;
                var fanBaseIndex = -1, lastWinding = 0;
                for (var i = 0, n = triangles.length; i < n; i += 3) {
                    var t1 = triangles[i] << 1, t2 = triangles[i + 1] << 1, t3 = triangles[i + 2] << 1;
                    var x1 = vertices[t1], y1 = vertices[t1 + 1];
                    var x2 = vertices[t2], y2 = vertices[t2 + 1];
                    var x3 = vertices[t3], y3 = vertices[t3 + 1];
                    var merged = false;
                    if (fanBaseIndex == t1) {
                        var o = polygon.length - 4;
                        var winding1 = Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
                        var winding2 = Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);
                        if (winding1 == lastWinding && winding2 == lastWinding) {
                            polygon.push(x3);
                            polygon.push(y3);
                            polygonIndices.push(t3);
                            merged = true;
                        }
                    }
                    if (!merged) {
                        if (polygon.length > 0) {
                            convexPolygons.push(polygon);
                            convexPolygonsIndices.push(polygonIndices);
                        }
                        else {
                            this.polygonPool.free(polygon);
                            this.polygonIndicesPool.free(polygonIndices);
                        }
                        polygon = this.polygonPool.obtain();
                        polygon.length = 0;
                        polygon.push(x1);
                        polygon.push(y1);
                        polygon.push(x2);
                        polygon.push(y2);
                        polygon.push(x3);
                        polygon.push(y3);
                        polygonIndices = this.polygonIndicesPool.obtain();
                        polygonIndices.length = 0;
                        polygonIndices.push(t1);
                        polygonIndices.push(t2);
                        polygonIndices.push(t3);
                        lastWinding = Triangulator.winding(x1, y1, x2, y2, x3, y3);
                        fanBaseIndex = t1;
                    }
                }
                if (polygon.length > 0) {
                    convexPolygons.push(polygon);
                    convexPolygonsIndices.push(polygonIndices);
                }
                for (var i = 0, n = convexPolygons.length; i < n; i++) {
                    polygonIndices = convexPolygonsIndices[i];
                    if (polygonIndices.length == 0)
                        continue;
                    var firstIndex = polygonIndices[0];
                    var lastIndex = polygonIndices[polygonIndices.length - 1];
                    polygon = convexPolygons[i];
                    var o = polygon.length - 4;
                    var prevPrevX = polygon[o], prevPrevY = polygon[o + 1];
                    var prevX = polygon[o + 2], prevY = polygon[o + 3];
                    var firstX = polygon[0], firstY = polygon[1];
                    var secondX = polygon[2], secondY = polygon[3];
                    var winding = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);
                    for (var ii = 0; ii < n; ii++) {
                        if (ii == i)
                            continue;
                        var otherIndices = convexPolygonsIndices[ii];
                        if (otherIndices.length != 3)
                            continue;
                        var otherFirstIndex = otherIndices[0];
                        var otherSecondIndex = otherIndices[1];
                        var otherLastIndex = otherIndices[2];
                        var otherPoly = convexPolygons[ii];
                        var x3 = otherPoly[otherPoly.length - 2], y3 = otherPoly[otherPoly.length - 1];
                        if (otherFirstIndex != firstIndex || otherSecondIndex != lastIndex)
                            continue;
                        var winding1 = Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, x3, y3);
                        var winding2 = Triangulator.winding(x3, y3, firstX, firstY, secondX, secondY);
                        if (winding1 == winding && winding2 == winding) {
                            otherPoly.length = 0;
                            otherIndices.length = 0;
                            polygon.push(x3);
                            polygon.push(y3);
                            polygonIndices.push(otherLastIndex);
                            prevPrevX = prevX;
                            prevPrevY = prevY;
                            prevX = x3;
                            prevY = y3;
                            ii = 0;
                        }
                    }
                }
                for (var i = convexPolygons.length - 1; i >= 0; i--) {
                    polygon = convexPolygons[i];
                    if (polygon.length == 0) {
                        convexPolygons.splice(i, 1);
                        this.polygonPool.free(polygon);
                        polygonIndices = convexPolygonsIndices[i];
                        convexPolygonsIndices.splice(i, 1);
                        this.polygonIndicesPool.free(polygonIndices);
                    }
                }
                return convexPolygons;
            };
            Triangulator.isConcave = function (index, vertexCount, vertices, indices) {
                var previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
                var current = indices[index] << 1;
                var next = indices[(index + 1) % vertexCount] << 1;
                return !this.positiveArea(vertices[previous], vertices[previous + 1], vertices[current], vertices[current + 1], vertices[next], vertices[next + 1]);
            };
            Triangulator.positiveArea = function (p1x, p1y, p2x, p2y, p3x, p3y) {
                return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
            };
            Triangulator.winding = function (p1x, p1y, p2x, p2y, p3x, p3y) {
                var px = p2x - p1x, py = p2y - p1y;
                return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
            };
            return Triangulator;
        }());
        core.Triangulator = Triangulator;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var IntSet = (function () {
            function IntSet() {
                this.array = new Array();
            }
            IntSet.prototype.add = function (value) {
                var contains = this.contains(value);
                this.array[value | 0] = value | 0;
                return !contains;
            };
            IntSet.prototype.contains = function (value) {
                return this.array[value | 0] != undefined;
            };
            IntSet.prototype.remove = function (value) {
                this.array[value | 0] = undefined;
            };
            IntSet.prototype.clear = function () {
                this.array.length = 0;
            };
            return IntSet;
        }());
        core.IntSet = IntSet;
        var Color = (function () {
            function Color(r, g, b, a) {
                if (r === void 0) { r = 0; }
                if (g === void 0) { g = 0; }
                if (b === void 0) { b = 0; }
                if (a === void 0) { a = 0; }
                this.r = r;
                this.g = g;
                this.b = b;
                this.a = a;
            }
            Color.prototype.set = function (r, g, b, a) {
                this.r = r;
                this.g = g;
                this.b = b;
                this.a = a;
                this.clamp();
                return this;
            };
            Color.prototype.setFromColor = function (c) {
                this.r = c.r;
                this.g = c.g;
                this.b = c.b;
                this.a = c.a;
                return this;
            };
            Color.prototype.setFromString = function (hex) {
                hex = hex.charAt(0) == '#' ? hex.substr(1) : hex;
                this.r = parseInt(hex.substr(0, 2), 16) / 255.0;
                this.g = parseInt(hex.substr(2, 2), 16) / 255.0;
                this.b = parseInt(hex.substr(4, 2), 16) / 255.0;
                this.a = (hex.length != 8 ? 255 : parseInt(hex.substr(6, 2), 16)) / 255.0;
                return this;
            };
            Color.prototype.add = function (r, g, b, a) {
                this.r += r;
                this.g += g;
                this.b += b;
                this.a += a;
                this.clamp();
                return this;
            };
            Color.prototype.clamp = function () {
                if (this.r < 0)
                    this.r = 0;
                else if (this.r > 1)
                    this.r = 1;
                if (this.g < 0)
                    this.g = 0;
                else if (this.g > 1)
                    this.g = 1;
                if (this.b < 0)
                    this.b = 0;
                else if (this.b > 1)
                    this.b = 1;
                if (this.a < 0)
                    this.a = 0;
                else if (this.a > 1)
                    this.a = 1;
                return this;
            };
            Color.rgba8888ToColor = function (color, value) {
                color.r = ((value & 0xff000000) >>> 24) / 255;
                color.g = ((value & 0x00ff0000) >>> 16) / 255;
                color.b = ((value & 0x0000ff00) >>> 8) / 255;
                color.a = ((value & 0x000000ff)) / 255;
            };
            Color.rgb888ToColor = function (color, value) {
                color.r = ((value & 0x00ff0000) >>> 16) / 255;
                color.g = ((value & 0x0000ff00) >>> 8) / 255;
                color.b = ((value & 0x000000ff)) / 255;
            };
            Color.WHITE = new Color(1, 1, 1, 1);
            Color.RED = new Color(1, 0, 0, 1);
            Color.GREEN = new Color(0, 1, 0, 1);
            Color.BLUE = new Color(0, 0, 1, 1);
            Color.MAGENTA = new Color(1, 0, 1, 1);
            return Color;
        }());
        core.Color = Color;
        var MathUtils = (function () {
            function MathUtils() {
            }
            MathUtils.clamp = function (value, min, max) {
                if (value < min)
                    return min;
                if (value > max)
                    return max;
                return value;
            };
            MathUtils.cosDeg = function (degrees) {
                return Math.cos(degrees * MathUtils.degRad);
            };
            MathUtils.sinDeg = function (degrees) {
                return Math.sin(degrees * MathUtils.degRad);
            };
            MathUtils.signum = function (value) {
                return value > 0 ? 1 : value < 0 ? -1 : 0;
            };
            MathUtils.toInt = function (x) {
                return x > 0 ? Math.floor(x) : Math.ceil(x);
            };
            MathUtils.cbrt = function (x) {
                var y = Math.pow(Math.abs(x), 1 / 3);
                return x < 0 ? -y : y;
            };
            MathUtils.randomTriangular = function (min, max) {
                return MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
            };
            MathUtils.randomTriangularWith = function (min, max, mode) {
                var u = Math.random();
                var d = max - min;
                if (u <= (mode - min) / d)
                    return min + Math.sqrt(u * d * (mode - min));
                return max - Math.sqrt((1 - u) * d * (max - mode));
            };
            MathUtils.PI = 3.1415927;
            MathUtils.PI2 = MathUtils.PI * 2;
            MathUtils.radiansToDegrees = 180 / MathUtils.PI;
            MathUtils.radDeg = MathUtils.radiansToDegrees;
            MathUtils.degreesToRadians = MathUtils.PI / 180;
            MathUtils.degRad = MathUtils.degreesToRadians;
            return MathUtils;
        }());
        core.MathUtils = MathUtils;
        var Interpolation = (function () {
            function Interpolation() {
            }
            Interpolation.prototype.apply = function (start, end, a) {
                return start + (end - start) * this.applyInternal(a);
            };
            return Interpolation;
        }());
        core.Interpolation = Interpolation;
        var Pow = (function (_super) {
            __extends(Pow, _super);
            function Pow(power) {
                var _this = _super.call(this) || this;
                _this.power = 2;
                _this.power = power;
                return _this;
            }
            Pow.prototype.applyInternal = function (a) {
                if (a <= 0.5)
                    return Math.pow(a * 2, this.power) / 2;
                return Math.pow((a - 1) * 2, this.power) / (this.power % 2 == 0 ? -2 : 2) + 1;
            };
            return Pow;
        }(Interpolation));
        core.Pow = Pow;
        var PowOut = (function (_super) {
            __extends(PowOut, _super);
            function PowOut(power) {
                return _super.call(this, power) || this;
            }
            PowOut.prototype.applyInternal = function (a) {
                return Math.pow(a - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1;
            };
            return PowOut;
        }(Pow));
        core.PowOut = PowOut;
        var Utils = (function () {
            function Utils() {
            }
            Utils.arrayCopy = function (source, sourceStart, dest, destStart, numElements) {
                for (var i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
                    dest[j] = source[i];
                }
            };
            Utils.setArraySize = function (array, size, value) {
                if (value === void 0) { value = 0; }
                var oldSize = array.length;
                if (oldSize == size)
                    return array;
                array.length = size;
                if (oldSize < size) {
                    for (var i = oldSize; i < size; i++)
                        array[i] = value;
                }
                return array;
            };
            Utils.ensureArrayCapacity = function (array, size, value) {
                if (value === void 0) { value = 0; }
                if (array.length >= size)
                    return array;
                return Utils.setArraySize(array, size, value);
            };
            Utils.newArray = function (size, defaultValue) {
                var array = new Array(size);
                for (var i = 0; i < size; i++)
                    array[i] = defaultValue;
                return array;
            };
            Utils.newFloatArray = function (size) {
                if (Utils.SUPPORTS_TYPED_ARRAYS) {
                    return new Float32Array(size);
                }
                else {
                    var array = new Array(size);
                    for (var i = 0; i < array.length; i++)
                        array[i] = 0;
                    return array;
                }
            };
            Utils.newShortArray = function (size) {
                if (Utils.SUPPORTS_TYPED_ARRAYS) {
                    return new Int16Array(size);
                }
                else {
                    var array = new Array(size);
                    for (var i = 0; i < array.length; i++)
                        array[i] = 0;
                    return array;
                }
            };
            Utils.toFloatArray = function (array) {
                return Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
            };
            Utils.toSinglePrecision = function (value) {
                return Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
            };
            Utils.webkit602BugfixHelper = function (alpha, blend) {
            };
            Utils.contains = function (array, element, identity) {
                if (identity === void 0) { identity = true; }
                for (var i = 0; i < array.length; i++) {
                    if (array[i] == element)
                        return true;
                }
                return false;
            };
            Utils.SUPPORTS_TYPED_ARRAYS = typeof (Float32Array) !== "undefined";
            return Utils;
        }());
        core.Utils = Utils;
        var DebugUtils = (function () {
            function DebugUtils() {
            }
            DebugUtils.logBones = function (skeleton) {
                for (var i = 0; i < skeleton.bones.length; i++) {
                    var bone = skeleton.bones[i];
                    var mat = bone.matrix;
                    console.log(bone.data.name + ", " + mat.a + ", " + mat.b + ", " + mat.c + ", " + mat.d + ", " + mat.tx + ", " + mat.ty);
                }
            };
            return DebugUtils;
        }());
        core.DebugUtils = DebugUtils;
        var Pool = (function () {
            function Pool(instantiator) {
                this.items = new Array();
                this.instantiator = instantiator;
            }
            Pool.prototype.obtain = function () {
                return this.items.length > 0 ? this.items.pop() : this.instantiator();
            };
            Pool.prototype.free = function (item) {
                if (item.reset)
                    item.reset();
                this.items.push(item);
            };
            Pool.prototype.freeAll = function (items) {
                for (var i = 0; i < items.length; i++) {
                    if (items[i].reset)
                        items[i].reset();
                    this.items[i] = items[i];
                }
            };
            Pool.prototype.clear = function () {
                this.items.length = 0;
            };
            return Pool;
        }());
        core.Pool = Pool;
        var Vector2 = (function () {
            function Vector2(x, y) {
                if (x === void 0) { x = 0; }
                if (y === void 0) { y = 0; }
                this.x = x;
                this.y = y;
            }
            Vector2.prototype.set = function (x, y) {
                this.x = x;
                this.y = y;
                return this;
            };
            Vector2.prototype.length = function () {
                var x = this.x;
                var y = this.y;
                return Math.sqrt(x * x + y * y);
            };
            Vector2.prototype.normalize = function () {
                var len = this.length();
                if (len != 0) {
                    this.x /= len;
                    this.y /= len;
                }
                return this;
            };
            return Vector2;
        }());
        core.Vector2 = Vector2;
        var TimeKeeper = (function () {
            function TimeKeeper() {
                this.maxDelta = 0.064;
                this.framesPerSecond = 0;
                this.delta = 0;
                this.totalTime = 0;
                this.lastTime = Date.now() / 1000;
                this.frameCount = 0;
                this.frameTime = 0;
            }
            TimeKeeper.prototype.update = function () {
                var now = Date.now() / 1000;
                this.delta = now - this.lastTime;
                this.frameTime += this.delta;
                this.totalTime += this.delta;
                if (this.delta > this.maxDelta)
                    this.delta = this.maxDelta;
                this.lastTime = now;
                this.frameCount++;
                if (this.frameTime > 1) {
                    this.framesPerSecond = this.frameCount / this.frameTime;
                    this.frameTime = 0;
                    this.frameCount = 0;
                }
            };
            return TimeKeeper;
        }());
        core.TimeKeeper = TimeKeeper;
        var WindowedMean = (function () {
            function WindowedMean(windowSize) {
                if (windowSize === void 0) { windowSize = 32; }
                this.addedValues = 0;
                this.lastValue = 0;
                this.mean = 0;
                this.dirty = true;
                this.values = new Array(windowSize);
            }
            WindowedMean.prototype.hasEnoughData = function () {
                return this.addedValues >= this.values.length;
            };
            WindowedMean.prototype.addValue = function (value) {
                if (this.addedValues < this.values.length)
                    this.addedValues++;
                this.values[this.lastValue++] = value;
                if (this.lastValue > this.values.length - 1)
                    this.lastValue = 0;
                this.dirty = true;
            };
            WindowedMean.prototype.getMean = function () {
                if (this.hasEnoughData()) {
                    if (this.dirty) {
                        var mean = 0;
                        for (var i = 0; i < this.values.length; i++) {
                            mean += this.values[i];
                        }
                        this.mean = mean / this.values.length;
                        this.dirty = false;
                    }
                    return this.mean;
                }
                else {
                    return 0;
                }
            };
            return WindowedMean;
        }());
        core.WindowedMean = WindowedMean;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var Attachment = (function () {
            function Attachment(name) {
                if (name == null)
                    throw new Error("name cannot be null.");
                this.name = name;
            }
            return Attachment;
        }());
        core.Attachment = Attachment;
        var VertexAttachment = (function (_super) {
            __extends(VertexAttachment, _super);
            function VertexAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.id = (VertexAttachment.nextID++ & 65535) << 11;
                _this.worldVerticesLength = 0;
                _this.deformAttachment = _this;
                return _this;
            }
            VertexAttachment.prototype.computeWorldVerticesOld = function (slot, worldVertices) {
                this.computeWorldVertices(slot, 0, this.worldVerticesLength, worldVertices, 0, 2);
            };
            VertexAttachment.prototype.computeWorldVertices = function (slot, start, count, worldVertices, offset, stride) {
                count = offset + (count >> 1) * stride;
                var skeleton = slot.bone.skeleton;
                var deformArray = slot.deform;
                var vertices = this.vertices;
                var bones = this.bones;
                if (bones == null) {
                    if (deformArray.length > 0)
                        vertices = deformArray;
                    var mat = slot.bone.matrix;
                    var x = mat.tx;
                    var y = mat.ty;
                    var a = mat.a, b = mat.c, c = mat.b, d = mat.d;
                    for (var v_1 = start, w = offset; w < count; v_1 += 2, w += stride) {
                        var vx = vertices[v_1], vy = vertices[v_1 + 1];
                        worldVertices[w] = vx * a + vy * b + x;
                        worldVertices[w + 1] = vx * c + vy * d + y;
                    }
                    return;
                }
                var v = 0, skip = 0;
                for (var i = 0; i < start; i += 2) {
                    var n = bones[v];
                    v += n + 1;
                    skip += n;
                }
                var skeletonBones = skeleton.bones;
                if (deformArray.length == 0) {
                    for (var w = offset, b = skip * 3; w < count; w += stride) {
                        var wx = 0, wy = 0;
                        var n = bones[v++];
                        n += v;
                        for (; v < n; v++, b += 3) {
                            var mat = skeletonBones[bones[v]].matrix;
                            var vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
                            wx += (vx * mat.a + vy * mat.c + mat.tx) * weight;
                            wy += (vx * mat.b + vy * mat.d + mat.ty) * weight;
                        }
                        worldVertices[w] = wx;
                        worldVertices[w + 1] = wy;
                    }
                }
                else {
                    var deform = deformArray;
                    for (var w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
                        var wx = 0, wy = 0;
                        var n = bones[v++];
                        n += v;
                        for (; v < n; v++, b += 3, f += 2) {
                            var mat = skeletonBones[bones[v]].matrix;
                            var vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
                            wx += (vx * mat.a + vy * mat.c + mat.tx) * weight;
                            wy += (vx * mat.b + vy * mat.d + mat.ty) * weight;
                        }
                        worldVertices[w] = wx;
                        worldVertices[w + 1] = wy;
                    }
                }
            };
            VertexAttachment.prototype.copyTo = function (attachment) {
                if (this.bones != null) {
                    attachment.bones = new Array(this.bones.length);
                    core.Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
                }
                else
                    attachment.bones = null;
                if (this.vertices != null) {
                    attachment.vertices = core.Utils.newFloatArray(this.vertices.length);
                    core.Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
                }
                else
                    attachment.vertices = null;
                attachment.worldVerticesLength = this.worldVerticesLength;
                attachment.deformAttachment = this.deformAttachment;
            };
            VertexAttachment.nextID = 0;
            return VertexAttachment;
        }(Attachment));
        core.VertexAttachment = VertexAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var AttachmentType;
        (function (AttachmentType) {
            AttachmentType[AttachmentType["Region"] = 0] = "Region";
            AttachmentType[AttachmentType["BoundingBox"] = 1] = "BoundingBox";
            AttachmentType[AttachmentType["Mesh"] = 2] = "Mesh";
            AttachmentType[AttachmentType["LinkedMesh"] = 3] = "LinkedMesh";
            AttachmentType[AttachmentType["Path"] = 4] = "Path";
            AttachmentType[AttachmentType["Point"] = 5] = "Point";
            AttachmentType[AttachmentType["Clipping"] = 6] = "Clipping";
        })(AttachmentType = core.AttachmentType || (core.AttachmentType = {}));
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var BoundingBoxAttachment = (function (_super) {
            __extends(BoundingBoxAttachment, _super);
            function BoundingBoxAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(1, 1, 1, 1);
                return _this;
            }
            BoundingBoxAttachment.prototype.copy = function () {
                var copy = new BoundingBoxAttachment(name);
                this.copyTo(copy);
                copy.color.setFromColor(this.color);
                return copy;
            };
            return BoundingBoxAttachment;
        }(core.VertexAttachment));
        core.BoundingBoxAttachment = BoundingBoxAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var ClippingAttachment = (function (_super) {
            __extends(ClippingAttachment, _super);
            function ClippingAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(0.2275, 0.2275, 0.8078, 1);
                return _this;
            }
            ClippingAttachment.prototype.copy = function () {
                var copy = new ClippingAttachment(name);
                this.copyTo(copy);
                copy.endSlot = this.endSlot;
                copy.color.setFromColor(this.color);
                return copy;
            };
            return ClippingAttachment;
        }(core.VertexAttachment));
        core.ClippingAttachment = ClippingAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var MeshAttachment = (function (_super) {
            __extends(MeshAttachment, _super);
            function MeshAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(1, 1, 1, 1);
                _this.tempColor = new core.Color(0, 0, 0, 0);
                return _this;
            }
            MeshAttachment.prototype.getParentMesh = function () {
                return this.parentMesh;
            };
            MeshAttachment.prototype.setParentMesh = function (parentMesh) {
                this.parentMesh = parentMesh;
                if (parentMesh != null) {
                    this.bones = parentMesh.bones;
                    this.vertices = parentMesh.vertices;
                    this.worldVerticesLength = parentMesh.worldVerticesLength;
                    this.regionUVs = parentMesh.regionUVs;
                    this.triangles = parentMesh.triangles;
                    this.hullLength = parentMesh.hullLength;
                    this.worldVerticesLength = parentMesh.worldVerticesLength;
                }
            };
            MeshAttachment.prototype.copy = function () {
                if (this.parentMesh != null)
                    return this.newLinkedMesh();
                var copy = new MeshAttachment(this.name);
                copy.region = this.region;
                copy.path = this.path;
                copy.color.setFromColor(this.color);
                this.copyTo(copy);
                copy.regionUVs = new Float32Array(this.regionUVs.length);
                core.Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
                copy.uvs = new Array(this.uvs.length);
                core.Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
                copy.triangles = new Array(this.triangles.length);
                core.Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
                copy.hullLength = this.hullLength;
                if (this.edges != null) {
                    copy.edges = new Array(this.edges.length);
                    core.Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
                }
                copy.width = this.width;
                copy.height = this.height;
                return copy;
            };
            MeshAttachment.prototype.newLinkedMesh = function () {
                var copy = new MeshAttachment(this.name);
                copy.region = this.region;
                copy.path = this.path;
                copy.color.setFromColor(this.color);
                copy.deformAttachment = this.deformAttachment;
                copy.setParentMesh(this.parentMesh != null ? this.parentMesh : this);
                return copy;
            };
            return MeshAttachment;
        }(core.VertexAttachment));
        core.MeshAttachment = MeshAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var PathAttachment = (function (_super) {
            __extends(PathAttachment, _super);
            function PathAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.closed = false;
                _this.constantSpeed = false;
                _this.color = new core.Color(1, 1, 1, 1);
                return _this;
            }
            PathAttachment.prototype.copy = function () {
                var copy = new PathAttachment(name);
                this.copyTo(copy);
                copy.lengths = new Array(this.lengths.length);
                core.Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
                copy.closed = closed;
                copy.constantSpeed = this.constantSpeed;
                copy.color.setFromColor(this.color);
                return copy;
            };
            return PathAttachment;
        }(core.VertexAttachment));
        core.PathAttachment = PathAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var PointAttachment = (function (_super) {
            __extends(PointAttachment, _super);
            function PointAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.color = new core.Color(0.38, 0.94, 0, 1);
                return _this;
            }
            PointAttachment.prototype.computeWorldPosition = function (bone, point) {
                var mat = bone.matrix;
                point.x = this.x * mat.a + this.y * mat.c + bone.worldX;
                point.y = this.x * mat.b + this.y * mat.d + bone.worldY;
                return point;
            };
            PointAttachment.prototype.computeWorldRotation = function (bone) {
                var mat = bone.matrix;
                var cos = core.MathUtils.cosDeg(this.rotation), sin = core.MathUtils.sinDeg(this.rotation);
                var x = cos * mat.a + sin * mat.c;
                var y = cos * mat.b + sin * mat.d;
                return Math.atan2(y, x) * core.MathUtils.radDeg;
            };
            PointAttachment.prototype.copy = function () {
                var copy = new PointAttachment(name);
                copy.x = this.x;
                copy.y = this.y;
                copy.rotation = this.rotation;
                copy.color.setFromColor(this.color);
                return copy;
            };
            return PointAttachment;
        }(core.VertexAttachment));
        core.PointAttachment = PointAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var RegionAttachment = (function (_super) {
            __extends(RegionAttachment, _super);
            function RegionAttachment(name) {
                var _this = _super.call(this, name) || this;
                _this.x = 0;
                _this.y = 0;
                _this.scaleX = 1;
                _this.scaleY = 1;
                _this.rotation = 0;
                _this.width = 0;
                _this.height = 0;
                _this.color = new core.Color(1, 1, 1, 1);
                _this.offset = core.Utils.newFloatArray(8);
                _this.uvs = core.Utils.newFloatArray(8);
                _this.tempColor = new core.Color(1, 1, 1, 1);
                return _this;
            }
            RegionAttachment.prototype.updateOffset = function () {
                var regionScaleX = this.width / this.region.originalWidth * this.scaleX;
                var regionScaleY = this.height / this.region.originalHeight * this.scaleY;
                var localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
                var localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
                var localX2 = localX + this.region.width * regionScaleX;
                var localY2 = localY + this.region.height * regionScaleY;
                var radians = this.rotation * Math.PI / 180;
                var cos = Math.cos(radians);
                var sin = Math.sin(radians);
                var localXCos = localX * cos + this.x;
                var localXSin = localX * sin;
                var localYCos = localY * cos + this.y;
                var localYSin = localY * sin;
                var localX2Cos = localX2 * cos + this.x;
                var localX2Sin = localX2 * sin;
                var localY2Cos = localY2 * cos + this.y;
                var localY2Sin = localY2 * sin;
                var offset = this.offset;
                offset[RegionAttachment.OX1] = localXCos - localYSin;
                offset[RegionAttachment.OY1] = localYCos + localXSin;
                offset[RegionAttachment.OX2] = localXCos - localY2Sin;
                offset[RegionAttachment.OY2] = localY2Cos + localXSin;
                offset[RegionAttachment.OX3] = localX2Cos - localY2Sin;
                offset[RegionAttachment.OY3] = localY2Cos + localX2Sin;
                offset[RegionAttachment.OX4] = localX2Cos - localYSin;
                offset[RegionAttachment.OY4] = localYCos + localX2Sin;
            };
            RegionAttachment.prototype.setRegion = function (region) {
                this.region = region;
                var uvs = this.uvs;
                if (region.rotate) {
                    uvs[2] = region.u;
                    uvs[3] = region.v2;
                    uvs[4] = region.u;
                    uvs[5] = region.v;
                    uvs[6] = region.u2;
                    uvs[7] = region.v;
                    uvs[0] = region.u2;
                    uvs[1] = region.v2;
                }
                else {
                    uvs[0] = region.u;
                    uvs[1] = region.v2;
                    uvs[2] = region.u;
                    uvs[3] = region.v;
                    uvs[4] = region.u2;
                    uvs[5] = region.v;
                    uvs[6] = region.u2;
                    uvs[7] = region.v2;
                }
            };
            RegionAttachment.prototype.computeWorldVertices = function (bone, worldVertices, offset, stride) {
                var vertexOffset = this.offset;
                var mat = bone.matrix;
                var x = mat.tx, y = mat.ty;
                var a = mat.a, b = mat.c, c = mat.b, d = mat.d;
                // console.log({a,b,c,d});
                var offsetX = 0, offsetY = 0;
                offsetX = vertexOffset[RegionAttachment.OX1];
                offsetY = vertexOffset[RegionAttachment.OY1];
                worldVertices[offset] = offsetX * a + offsetY * b + x;
                worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
                offset += stride;
                offsetX = vertexOffset[RegionAttachment.OX2];
                offsetY = vertexOffset[RegionAttachment.OY2];
                worldVertices[offset] = offsetX * a + offsetY * b + x;
                worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
                offset += stride;
                offsetX = vertexOffset[RegionAttachment.OX3];
                offsetY = vertexOffset[RegionAttachment.OY3];
                worldVertices[offset] = offsetX * a + offsetY * b + x;
                worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
                offset += stride;
                offsetX = vertexOffset[RegionAttachment.OX4];
                offsetY = vertexOffset[RegionAttachment.OY4];
                worldVertices[offset] = offsetX * a + offsetY * b + x;
                worldVertices[offset + 1] = offsetX * c + offsetY * d + y;
            };
            RegionAttachment.prototype.copy = function () {
                var copy = new RegionAttachment(name);
                copy.region = this.region;
                copy.rendererObject = this.rendererObject;
                copy.path = this.path;
                copy.x = this.x;
                copy.y = this.y;
                copy.scaleX = this.scaleX;
                copy.scaleY = this.scaleY;
                copy.rotation = this.rotation;
                copy.width = this.width;
                copy.height = this.height;
                core.Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
                core.Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
                copy.color.setFromColor(this.color);
                return copy;
            };
            RegionAttachment.OX1 = 0;
            RegionAttachment.OY1 = 1;
            RegionAttachment.OX2 = 2;
            RegionAttachment.OY2 = 3;
            RegionAttachment.OX3 = 4;
            RegionAttachment.OY3 = 5;
            RegionAttachment.OX4 = 6;
            RegionAttachment.OY4 = 7;
            RegionAttachment.X1 = 0;
            RegionAttachment.Y1 = 1;
            RegionAttachment.C1R = 2;
            RegionAttachment.C1G = 3;
            RegionAttachment.C1B = 4;
            RegionAttachment.C1A = 5;
            RegionAttachment.U1 = 6;
            RegionAttachment.V1 = 7;
            RegionAttachment.X2 = 8;
            RegionAttachment.Y2 = 9;
            RegionAttachment.C2R = 10;
            RegionAttachment.C2G = 11;
            RegionAttachment.C2B = 12;
            RegionAttachment.C2A = 13;
            RegionAttachment.U2 = 14;
            RegionAttachment.V2 = 15;
            RegionAttachment.X3 = 16;
            RegionAttachment.Y3 = 17;
            RegionAttachment.C3R = 18;
            RegionAttachment.C3G = 19;
            RegionAttachment.C3B = 20;
            RegionAttachment.C3A = 21;
            RegionAttachment.U3 = 22;
            RegionAttachment.V3 = 23;
            RegionAttachment.X4 = 24;
            RegionAttachment.Y4 = 25;
            RegionAttachment.C4R = 26;
            RegionAttachment.C4G = 27;
            RegionAttachment.C4B = 28;
            RegionAttachment.C4A = 29;
            RegionAttachment.U4 = 30;
            RegionAttachment.V4 = 31;
            return RegionAttachment;
        }(core.Attachment));
        core.RegionAttachment = RegionAttachment;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var JitterEffect = (function () {
            function JitterEffect(jitterX, jitterY) {
                this.jitterX = 0;
                this.jitterY = 0;
                this.jitterX = jitterX;
                this.jitterY = jitterY;
            }
            JitterEffect.prototype.begin = function (skeleton) {
            };
            JitterEffect.prototype.transform = function (position, uv, light, dark) {
                position.x += core.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
                position.y += core.MathUtils.randomTriangular(-this.jitterX, this.jitterY);
            };
            JitterEffect.prototype.end = function () {
            };
            return JitterEffect;
        }());
        core.JitterEffect = JitterEffect;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    var core;
    (function (core) {
        var SwirlEffect = (function () {
            function SwirlEffect(radius) {
                this.centerX = 0;
                this.centerY = 0;
                this.radius = 0;
                this.angle = 0;
                this.worldX = 0;
                this.worldY = 0;
                this.radius = radius;
            }
            SwirlEffect.prototype.begin = function (skeleton) {
                this.worldX = skeleton.x + this.centerX;
                this.worldY = skeleton.y + this.centerY;
            };
            SwirlEffect.prototype.transform = function (position, uv, light, dark) {
                var radAngle = this.angle * core.MathUtils.degreesToRadians;
                var x = position.x - this.worldX;
                var y = position.y - this.worldY;
                var dist = Math.sqrt(x * x + y * y);
                if (dist < this.radius) {
                    var theta = SwirlEffect.interpolation.apply(0, radAngle, (this.radius - dist) / this.radius);
                    var cos = Math.cos(theta);
                    var sin = Math.sin(theta);
                    position.x = cos * x - sin * y + this.worldX;
                    position.y = sin * x + cos * y + this.worldY;
                }
            };
            SwirlEffect.prototype.end = function () {
            };
            SwirlEffect.interpolation = new core.PowOut(2);
            return SwirlEffect;
        }());
        core.SwirlEffect = SwirlEffect;
    })(core = pixi_spine.core || (pixi_spine.core = {}));
})(pixi_spine || (pixi_spine = {}));
(function () {
    if (!Math.fround) {
        Math.fround = Math.fround = (function (array) {
            return function (x) {
                return array[0] = x, array[0];
            };
        })(new Float32Array(1));
    }
})();
var pixi_spine;
(function (pixi_spine) {
    pixi_spine.core.Bone.yDown = true;
    var tempRgb = [0, 0, 0];
    var SpineSprite = (function (_super) {
        __extends(SpineSprite, _super);
        function SpineSprite() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.region = null;
            _this.attachment = null;
            return _this;
        }
        return SpineSprite;
    }(PIXI.Sprite));
    pixi_spine.SpineSprite = SpineSprite;
    var gp = PIXI.GraphicsGeometry.prototype;
    if (!gp.invalidate) {
        var tmp_1 = [];
        gp.invalidate = function () {
            var t = this.graphicsData;
            tmp_1.push(0);
            this.graphicsData = tmp_1;
            this.clear();
            this.graphicsData = t;
        };
    }
    var SpineMesh = (function (_super) {
        __extends(SpineMesh, _super);
        function SpineMesh(texture, vertices, uvs, indices, drawMode) {
            var _this = _super.call(this, texture, vertices, uvs, indices, drawMode) || this;
            _this.attachment = null;
            return _this;
        }
        return SpineMesh;
    }(PIXI.SimpleMesh));
    pixi_spine.SpineMesh = SpineMesh;
    var Spine = (function (_super) {
        __extends(Spine, _super);
        function Spine(spineData) {
            var _this = _super.call(this) || this;
            if (!spineData) {
                throw new Error('The spineData param is required.');
            }
            if ((typeof spineData) === "string") {
                throw new Error('spineData param cant be string. Please use spine.Spine.fromAtlas("YOUR_RESOURCE_NAME") from now on.');
            }
            _this.spineData = spineData;
            _this.skeleton = new pixi_spine.core.Skeleton(spineData);
            _this.skeleton.updateWorldTransform();
            _this.stateData = new pixi_spine.core.AnimationStateData(spineData);
            _this.state = new pixi_spine.core.AnimationState(_this.stateData);
            _this.slotContainers = [];
            _this.tempClipContainers = [];
            for (var i = 0, n = _this.skeleton.slots.length; i < n; i++) {
                var slot = _this.skeleton.slots[i];
                var attachment = slot.getAttachment();
                var slotContainer = _this.newContainer();
                _this.slotContainers.push(slotContainer);
                _this.addChild(slotContainer);
                _this.tempClipContainers.push(null);
                if (attachment instanceof pixi_spine.core.RegionAttachment) {
                    var spriteName = attachment.region.name;
                    var sprite = _this.createSprite(slot, attachment, spriteName);
                    slot.currentSprite = sprite;
                    slot.currentSpriteName = spriteName;
                    slotContainer.addChild(sprite);
                }
                else if (attachment instanceof pixi_spine.core.MeshAttachment) {
                    var mesh = _this.createMesh(slot, attachment);
                    slot.currentMesh = mesh;
                    slot.currentMeshName = attachment.name;
                    slotContainer.addChild(mesh);
                }
                else if (attachment instanceof pixi_spine.core.ClippingAttachment) {
                    _this.createGraphics(slot, attachment);
                    slotContainer.addChild(slot.clippingContainer);
                    slotContainer.addChild(slot.currentGraphics);
                }
                else {
                    continue;
                }
            }
            _this.tintRgb = new Float32Array([1, 1, 1]);
            _this.autoUpdate = true;
            _this.visible = true;
            return _this;
        }
        Object.defineProperty(Spine.prototype, "autoUpdate", {
            get: function () {
                return this._autoUpdate;
            },
            set: function (value) {
                if (value !== this._autoUpdate) {
                    this._autoUpdate = value;
                    this.updateTransform = value ? Spine.prototype.autoUpdateTransform : PIXI.Container.prototype.updateTransform;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Spine.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (value !== this._visible) {
                    this._visible = value;
                    if (value) {
                        this.lastTime = 0;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Spine.prototype, "tint", {
            get: function () {
                return PIXI.utils.rgb2hex(this.tintRgb);
            },
            set: function (value) {
                this.tintRgb = PIXI.utils.hex2rgb(value, this.tintRgb);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Spine.prototype, "delayLimit", {
            get: function () {
                var limit = typeof this.localDelayLimit !== "undefined" ?
                    this.localDelayLimit : Spine.globalDelayLimit;
                return limit || Number.MAX_VALUE;
            },
            enumerable: true,
            configurable: true
        });
        Spine.prototype.update = function (dt) {
            if(!dt) return; // Skip RPG Maker Scene UpdateChilds, because we don't have DT
            var delayLimit = this.delayLimit;
            if (dt > delayLimit)
                dt = delayLimit;
            this.state.update(dt);
            this.state.apply(this.skeleton);
            if (!this.skeleton)
                return;
            this.skeleton.updateWorldTransform();
            var slots = this.skeleton.slots;
            var globalClr = this.color;
            var light = null, dark = null;
            if (globalClr) {
                light = globalClr.light;
                dark = globalClr.dark;
            }
            else {
                light = this.tintRgb;
            }
            var thack = false;
            for (var i = 0, n = slots.length; i < n; i++) {
                var slot = slots[i];
                var attachment = slot.getAttachment();
                var slotContainer = this.slotContainers[i];
                if (!attachment) {
                    slotContainer.visible = false;
                    continue;
                }
                var spriteColor = null;
                var attColor = attachment.color;
                if (attachment instanceof pixi_spine.core.RegionAttachment) {
                    var region = attachment.region;
                    if (region) {
                        if (slot.currentMesh) {
                            slot.currentMesh.visible = false;
                            slot.currentMesh = null;
                            slot.currentMeshName = undefined;
                        }
                        var ar = region;
                        if (!slot.currentSpriteName || slot.currentSpriteName !== ar.name) {
                            var spriteName = ar.name;
                            if (slot.currentSprite) {
                                slot.currentSprite.visible = false;
                            }
                            slot.sprites = slot.sprites || {};
                            if (slot.sprites[spriteName] !== undefined) {
                                slot.sprites[spriteName].visible = true;
                            }
                            else {
                                var sprite = this.createSprite(slot, attachment, spriteName);
                                slotContainer.addChild(sprite);
                            }
                            slot.currentSprite = slot.sprites[spriteName];
                            slot.currentSpriteName = spriteName;
                        }
                        else if (slot.currentSpriteName === ar.name) {
                            this.setSpriteRegion(attachment, slot.currentSprite, region);
                        }
                    }
                    var transform = slotContainer.transform;
                    transform.setFromMatrix(slot.bone.matrix);
                    if (slot.currentSprite.color) {
                        spriteColor = slot.currentSprite.color;
                    }
                    else {
                        tempRgb[0] = light[0] * slot.color.r * attColor.r;
                        tempRgb[1] = light[1] * slot.color.g * attColor.g;
                        tempRgb[2] = light[2] * slot.color.b * attColor.b;
                        slot.currentSprite.tint = PIXI.utils.rgb2hex(tempRgb);
                    }
                    slot.currentSprite.blendMode = slot.blendMode;
                }
                else if (attachment instanceof pixi_spine.core.MeshAttachment) {
                    if (slot.currentSprite) {
                        slot.currentSprite.visible = false;
                        slot.currentSprite = null;
                        slot.currentSpriteName = undefined;
                        var transform = new PIXI.Transform();
                        transform._parentID = -1;
                        transform._worldID = slotContainer.transform._worldID;
                        slotContainer.transform = transform;
                    }
                    if (!slot.currentMeshName || slot.currentMeshName !== attachment.name) {
                        var meshName = attachment.name;
                        if (slot.currentMesh) {
                            slot.currentMesh.visible = false;
                        }
                        slot.meshes = slot.meshes || {};
                        if (slot.meshes[meshName] !== undefined) {
                            slot.meshes[meshName].visible = true;
                        }
                        else {
                            var mesh = this.createMesh(slot, attachment);
                            slotContainer.addChild(mesh);
                        }
                        slot.currentMesh = slot.meshes[meshName];
                        slot.currentMeshName = meshName;
                    }
                    attachment.computeWorldVerticesOld(slot, slot.currentMesh.vertices);
                    if (slot.currentMesh.color) {
                        spriteColor = slot.currentMesh.color;
                    }
                    else {
                        tempRgb[0] = light[0] * slot.color.r * attColor.r;
                        tempRgb[1] = light[1] * slot.color.g * attColor.g;
                        tempRgb[2] = light[2] * slot.color.b * attColor.b;
                        slot.currentMesh.tint = PIXI.utils.rgb2hex(tempRgb);
                    }
                    slot.currentMesh.blendMode = slot.blendMode;
                }
                else if (attachment instanceof pixi_spine.core.ClippingAttachment) {
                    if (!slot.currentGraphics) {
                        this.createGraphics(slot, attachment);
                        slotContainer.addChild(slot.clippingContainer);
                        slotContainer.addChild(slot.currentGraphics);
                    }
                    this.updateGraphics(slot, attachment);
                }
                else {
                    slotContainer.visible = false;
                    continue;
                }
                slotContainer.visible = true;
                if (spriteColor) {
                    var r0 = slot.color.r * attColor.r;
                    var g0 = slot.color.g * attColor.g;
                    var b0 = slot.color.b * attColor.b;
                    spriteColor.setLight(light[0] * r0 + dark[0] * (1.0 - r0), light[1] * g0 + dark[1] * (1.0 - g0), light[2] * b0 + dark[2] * (1.0 - b0));
                    if (slot.darkColor) {
                        r0 = slot.darkColor.r;
                        g0 = slot.darkColor.g;
                        b0 = slot.darkColor.b;
                    }
                    else {
                        r0 = 0.0;
                        g0 = 0.0;
                        b0 = 0.0;
                    }
                    spriteColor.setDark(light[0] * r0 + dark[0] * (1 - r0), light[1] * g0 + dark[1] * (1 - g0), light[2] * b0 + dark[2] * (1 - b0));
                }
                slotContainer.alpha = slot.color.a;
            }
            var drawOrder = this.skeleton.drawOrder;
            var clippingAttachment = null;
            var clippingContainer = null;
            for (var i = 0, n = drawOrder.length; i < n; i++) {
                var slot = slots[drawOrder[i].data.index];
                var slotContainer = this.slotContainers[drawOrder[i].data.index];
                if (!clippingContainer) {
                    if (slotContainer.parent !== null && slotContainer.parent !== this) {
                        slotContainer.parent.removeChild(slotContainer);
                        slotContainer.parent = this;
                    }
                }
                if (slot.currentGraphics && slot.getAttachment()) {
                    clippingContainer = slot.clippingContainer;
                    clippingAttachment = slot.getAttachment();
                    clippingContainer.children.length = 0;
                    this.children[i] = slotContainer;
                    if (clippingAttachment.endSlot == slot.data) {
                        clippingAttachment.endSlot = null;
                    }
                }
                else {
                    if (clippingContainer) {
                        var c = this.tempClipContainers[i];
                        if (!c) {
                            c = this.tempClipContainers[i] = this.newContainer();
                            c.visible = false;
                        }
                        this.children[i] = c;
                        slotContainer.parent = null;
                        clippingContainer.addChild(slotContainer);
                        if (clippingAttachment.endSlot == slot.data) {
                            clippingContainer.renderable = true;
                            clippingContainer = null;
                            clippingAttachment = null;
                        }
                    }
                    else {
                        this.children[i] = slotContainer;
                    }
                }
            }
        };
        ;
        Spine.prototype.setSpriteRegion = function (attachment, sprite, region) {
            if (sprite.attachment === attachment && sprite.region === region) {
                return;
            }
            sprite.region = region;
            sprite.attachment = attachment;
            sprite.texture = region.texture;
            sprite.rotation = attachment.rotation * pixi_spine.core.MathUtils.degRad;
            sprite.position.x = attachment.x;
            sprite.position.y = attachment.y;
            sprite.alpha = attachment.color.a;
            if (!region.size) {
                sprite.scale.x = attachment.scaleX * attachment.width / region.originalWidth;
                sprite.scale.y = -attachment.scaleY * attachment.height / region.originalHeight;
            }
            else {
                sprite.scale.x = region.size.width / region.originalWidth;
                sprite.scale.y = -region.size.height / region.originalHeight;
            }
        };
        Spine.prototype.setMeshRegion = function (attachment, mesh, region) {
            if (mesh.attachment === attachment && mesh.region === region) {
                return;
            }
            mesh.region = region;
            mesh.attachment = attachment;
            mesh.texture = region.texture;
            region.texture.updateUvs();
            mesh.uvBuffer.update(attachment.regionUVs);
        };
        Spine.prototype.autoUpdateTransform = function () {
            if (Spine.globalAutoUpdate) {
                this.lastTime = this.lastTime || Date.now();
                var timeDelta = (Date.now() - this.lastTime) * 0.001;
                this.lastTime = Date.now();
                this.update(timeDelta);
            }
            else {
                this.lastTime = 0;
            }
            PIXI.Container.prototype.updateTransform.call(this);
        };
        ;
        Spine.prototype.createSprite = function (slot, attachment, defName) {
            var region = attachment.region;
            if (slot.tempAttachment === attachment) {
                region = slot.tempRegion;
                slot.tempAttachment = null;
                slot.tempRegion = null;
            }
            var texture = region.texture;
            var sprite = this.newSprite(texture);
            sprite.anchor.set(0.5);
            this.setSpriteRegion(attachment, sprite, attachment.region);
            slot.sprites = slot.sprites || {};
            slot.sprites[defName] = sprite;
            return sprite;
        };
        ;
        Spine.prototype.createMesh = function (slot, attachment) {
            var region = attachment.region;
            if (slot.tempAttachment === attachment) {
                region = slot.tempRegion;
                slot.tempAttachment = null;
                slot.tempRegion = null;
            }
            var strip = this.newMesh(region.texture, new Float32Array(attachment.regionUVs.length), attachment.regionUVs, new Uint16Array(attachment.triangles), PIXI.DRAW_MODES.TRIANGLES);
            if (strip.canvasPadding) {
                strip.canvasPadding = 1.5;
            }
            strip.alpha = attachment.color.a;
            strip.region = attachment.region;
            this.setMeshRegion(attachment, strip, region);
            slot.meshes = slot.meshes || {};
            slot.meshes[attachment.name] = strip;
            return strip;
        };
        ;
        Spine.prototype.createGraphics = function (slot, clip) {
            var graphics = this.newGraphics();
            var poly = new PIXI.Polygon([]);
            graphics.clear();
            graphics.beginFill(0xffffff, 1);
            graphics.drawPolygon(poly);
            graphics.renderable = false;
            slot.currentGraphics = graphics;
            slot.clippingContainer = this.newContainer();
            slot.clippingContainer.mask = slot.currentGraphics;
            return graphics;
        };
        Spine.prototype.updateGraphics = function (slot, clip) {
            var geom = slot.currentGraphics.geometry;
            var vertices = geom.graphicsData[0].shape.points;
            var n = clip.worldVerticesLength;
            vertices.length = n;
            clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
            geom.invalidate();
        };
        Spine.prototype.hackTextureBySlotIndex = function (slotIndex, texture, size) {
            if (texture === void 0) { texture = null; }
            if (size === void 0) { size = null; }
            var slot = this.skeleton.slots[slotIndex];
            if (!slot) {
                return false;
            }
            var attachment = slot.getAttachment();
            var region = attachment.region;
            if (texture) {
                region = new pixi_spine.core.TextureRegion();
                region.texture = texture;
                region.size = size;
            }
            if (slot.currentSprite && slot.currentSprite.region != region) {
                this.setSpriteRegion(attachment, slot.currentSprite, region);
                slot.currentSprite.region = region;
            }
            else if (slot.currentMesh && slot.currentMesh.region != region) {
                this.setMeshRegion(attachment, slot.currentMesh, region);
            }
            else {
                slot.tempRegion = region;
                slot.tempAttachment = attachment;
            }
            return true;
        };
        Spine.prototype.hackTextureBySlotName = function (slotName, texture, size) {
            if (texture === void 0) { texture = null; }
            if (size === void 0) { size = null; }
            var index = this.skeleton.findSlotIndex(slotName);
            if (index == -1) {
                return false;
            }
            return this.hackTextureBySlotIndex(index, texture, size);
        };
        Spine.prototype.newContainer = function () {
            return new PIXI.Container();
        };
        Spine.prototype.newSprite = function (tex) {
            return new SpineSprite(tex);
        };
        Spine.prototype.newGraphics = function () {
            return new PIXI.Graphics();
        };
        Spine.prototype.newMesh = function (texture, vertices, uvs, indices, drawMode) {
            return new SpineMesh(texture, vertices, uvs, indices, drawMode);
        };
        Spine.prototype.transformHack = function () {
            return 1;
        };
        Spine.prototype.hackAttachmentGroups = function (nameSuffix, group, outGroup) {
            if (!nameSuffix) {
                return;
            }
            var list_d = [], list_n = [];
            for (var i = 0, len = this.skeleton.slots.length; i < len; i++) {
                var slot = this.skeleton.slots[i];
                var name_6 = slot.currentSpriteName || slot.currentMeshName || "";
                var target = slot.currentSprite || slot.currentMesh;
                if (name_6.endsWith(nameSuffix)) {
                    target.parentGroup = group;
                    list_n.push(target);
                }
                else if (outGroup && target) {
                    target.parentGroup = outGroup;
                    list_d.push(target);
                }
            }
            return [list_d, list_n];
        };
        ;
        Spine.prototype.destroy = function (options) {
            for (var i = 0, n = this.skeleton.slots.length; i < n; i++) {
                var slot = this.skeleton.slots[i];
                for (var name_7 in slot.meshes) {
                    slot.meshes[name_7].destroy(options);
                }
                slot.meshes = null;
                for (var name_8 in slot.sprites) {
                    slot.sprites[name_8].destroy(options);
                }
                slot.sprites = null;
            }
            for (var i = 0, n = this.slotContainers.length; i < n; i++) {
                this.slotContainers[i].destroy(options);
            }
            this.spineData = null;
            this.skeleton = null;
            this.slotContainers = null;
            this.stateData = null;
            this.state = null;
            this.tempClipContainers = null;
            _super.prototype.destroy.call(this, options);
        };
        Spine.globalAutoUpdate = true;
        Spine.globalDelayLimit = 0;
        Spine.clippingPolygon = [];
        return Spine;
    }(PIXI.Container));
    pixi_spine.Spine = Spine;
    function SlotContainerUpdateTransformV3() {
        var pt = this.parent.worldTransform;
        var wt = this.worldTransform;
        var lt = this.localTransform;
        wt.a = lt.a * pt.a + lt.b * pt.c;
        wt.b = lt.a * pt.b + lt.b * pt.d;
        wt.c = lt.c * pt.a + lt.d * pt.c;
        wt.d = lt.c * pt.b + lt.d * pt.d;
        wt.tx = lt.tx * pt.a + lt.ty * pt.c + pt.tx;
        wt.ty = lt.tx * pt.b + lt.ty * pt.d + pt.ty;
        this.worldAlpha = this.alpha * this.parent.worldAlpha;
        this._currentBounds = null;
    }
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    PIXI.spine = pixi_spine;
    var TextureProto = PIXI.Texture.prototype;
    if (!TextureProto._updateUvs) {
        TextureProto._updateUvs = TextureProto.updateUvs;
    }
})(pixi_spine || (pixi_spine = {}));
var pixi_spine;
(function (pixi_spine) {
    function isJson(resource) {
        return resource.type === PIXI.LoaderResource.TYPE.JSON;
    }
    function isBuffer(resource) {
        return resource.xhrType === PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER;
    }
    PIXI.LoaderResource.setExtensionXhrType('skel', PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
    var AtlasParser = (function () {
        function AtlasParser() {
        }
        AtlasParser.use = function (resource, next) {
            if (!resource.data) {
                return next();
            }
            var isJsonSpineModel = isJson(resource) && resource.data.bones;
            var isBinarySpineModel = isBuffer(resource) && (resource.extension === 'skel' || resource.metadata.spineMetadata);
            if (!isJsonSpineModel && !isBinarySpineModel) {
                return next();
            }
            var parser = null;
            var dataToParse = resource.data;
            if (isJsonSpineModel) {
                parser = new pixi_spine.core.SkeletonJson(null);
            }
            else {
                parser = new pixi_spine.core.SkeletonBinary(null);
                if (resource.data instanceof ArrayBuffer) {
                    dataToParse = new Uint8Array(resource.data);
                }
            }
            var metadata = resource.metadata || {};
            var metadataSkeletonScale = metadata ? resource.metadata.spineSkeletonScale : null;
            if (metadataSkeletonScale) {
                parser.scale = metadataSkeletonScale;
            }
            var metadataAtlas = metadata ? resource.metadata.spineAtlas : null;
            if (metadataAtlas === false) {
                return next();
            }
            if (metadataAtlas && metadataAtlas.pages) {
                parser.attachmentLoader = new pixi_spine.core.AtlasAttachmentLoader(metadataAtlas);
                resource.spineData = parser.readSkeletonData(dataToParse);
                resource.spineAtlas = metadataAtlas;
                return next();
            }
            var metadataAtlasSuffix = metadata.spineAtlasSuffix || '.atlas';
            var atlasPath = resource.url;
            var queryStringPos = atlasPath.indexOf('?');
            if (queryStringPos > 0) {
                atlasPath = atlasPath.substr(0, queryStringPos);
            }
            atlasPath = atlasPath.substr(0, atlasPath.lastIndexOf('.')) + metadataAtlasSuffix;
            if (resource.metadata && resource.metadata.spineAtlasFile) {
                atlasPath = resource.metadata.spineAtlasFile;
            }
            atlasPath = atlasPath.replace(this.baseUrl, '');
            var atlasOptions = {
                crossOrigin: resource.crossOrigin,
                xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.TEXT,
                metadata: metadata.spineMetadata || null,
                parentResource: resource
            };
            var imageOptions = {
                crossOrigin: resource.crossOrigin,
                metadata: metadata.imageMetadata || null,
                parentResource: resource
            };
            var baseUrl = resource.url.substr(0, resource.url.lastIndexOf('/') + 1);
            baseUrl = baseUrl.replace(this.baseUrl, '');
            var namePrefix = metadata.imageNamePrefix || (resource.name + '_atlas_page_');
            var adapter = metadata.images ? staticImageLoader(metadata.images)
                : metadata.image ? staticImageLoader({ 'default': metadata.image })
                    : metadata.imageLoader ? metadata.imageLoader(this, namePrefix, baseUrl, imageOptions)
                        : imageLoaderAdapter(this, namePrefix, baseUrl, imageOptions);
            var createSkeletonWithRawAtlas = function (rawData) {
                new pixi_spine.core.TextureAtlas(rawData, adapter, function (spineAtlas) {
                    if (spineAtlas) {
                        parser.attachmentLoader = new pixi_spine.core.AtlasAttachmentLoader(spineAtlas);
                        resource.spineData = parser.readSkeletonData(dataToParse);
                        resource.spineAtlas = spineAtlas;
                    }
                    next();
                });
            };
            if (resource.metadata && resource.metadata.atlasRawData) {
                createSkeletonWithRawAtlas(resource.metadata.atlasRawData);
            }
            else {
                this.add(resource.name + '_atlas', atlasPath, atlasOptions, function (atlasResource) {
                    if (!atlasResource.error) {
                        createSkeletonWithRawAtlas(atlasResource.data);
                    }
                    else {
                        next();
                    }
                });
            }
        };
        return AtlasParser;
    }());
    pixi_spine.AtlasParser = AtlasParser;
    function imageLoaderAdapter(loader, namePrefix, baseUrl, imageOptions) {
        if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length - 1)) {
            baseUrl += '/';
        }
        return function (line, callback) {
            var name = namePrefix + line;
            var url = baseUrl + line;
            var cachedResource = loader.resources[name];
            if (cachedResource) {
                function done() {
                    callback(cachedResource.texture.baseTexture);
                }
                if (cachedResource.texture) {
                    done();
                }
                else {
                    cachedResource.onAfterMiddleware.add(done);
                }
            }
            else {
                loader.add(name, url, imageOptions, function (resource) {
                    if (!resource.error) {
                        callback(resource.texture.baseTexture);
                    }
                    else {
                        callback(null);
                    }
                });
            }
        };
    }
    pixi_spine.imageLoaderAdapter = imageLoaderAdapter;
    function syncImageLoaderAdapter(baseUrl, crossOrigin) {
        if (baseUrl && baseUrl.lastIndexOf('/') !== (baseUrl.length - 1)) {
            baseUrl += '/';
        }
        return function (line, callback) {
            callback(PIXI.BaseTexture.from(line, crossOrigin));
        };
    }
    pixi_spine.syncImageLoaderAdapter = syncImageLoaderAdapter;
    function staticImageLoader(pages) {
        return function (line, callback) {
            var page = pages[line] || pages['default'];
            if (page && page.baseTexture)
                callback(page.baseTexture);
            else
                callback(page);
        };
    }
    pixi_spine.staticImageLoader = staticImageLoader;
    if (PIXI.Loader) {
        PIXI.Loader.registerPlugin(AtlasParser);
    }
})(pixi_spine || (pixi_spine = {}));
//# sourceMappingURL=pixi-spine.js.map

// Generated by CoffeeScript 2.6.1
// * CREATE
window.CreateSAnim = function(id, filename, x = 0, y = 0) {
  var animation, e;
  try {
    animation = PKD_Sprite_SpineAnimation.Create(id, filename);
    animation.setPosition(x, y);
    return animation;
  } catch (error) {
    e = error;
    KDCore.warning(e);
    return PKD_Sprite_SpineAnimation.Empty(id);
  }
};

// * GET
window.SAnim = function(id) {
  var animation, e;
  try {
    animation = PKD_Sprite_SpineAnimation.ByID(id);
    if (animation != null) {
      return animation;
    }
  } catch (error) {
    e = error;
    KDCore.warning(e);
  }
  // * Надо возвращать хоть что-то, так как у нас Chain методы
  console.warn("Animation with ID " + id + " not found!");
  return PKD_Sprite_SpineAnimation.Empty(id);
};

// * Remove (from screen and storage) support other maps
window.RemoveSAnim = function(id, mapId = 0) {
  var animation, e;
  try {
    animation = SAnim(id);
    if (mapId === $gameMap.mapId()) {
      return animation != null ? animation.remove() : void 0;
    } else {
      if (animation != null) {
        animation.removeFromParent();
      }
      return PKD_SpineAnimations.Instance().deleteAnimation(id, mapId);
    }
  } catch (error) {
    e = error;
    return KDCore.warning(e);
  }
};


// Generated by CoffeeScript 2.6.1
(function() {
  var _;
  //@[DEFINES]
  _ = PKD_Spine2DPlayer.PP;
})();


// * paramName, defaultValue
/*_.getLoaderParam = () ->
try
    PKD_Spine2DPlayer.LoadPluginSettings() unless @_loader?
    return @_loader.getParam(...arguments)
catch e
    KDCore.warning e
return null*/
//_.getParamTemplate = () -> @getLoaderParam('name', true)


// Generated by CoffeeScript 2.6.1
(function() {
  var _;
  //@[DEFINES]
  _ = PKD_Spine2DPlayer.Utils;
})();


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__updateWaitMode, _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  //@[ALIAS]
  ALIAS__updateWaitMode = _.updateWaitMode;
  _.updateWaitMode = function() {
    var e, waiting;
    try {
      if (this.pIsShouldWaitSAnim()) {
        waiting = this.pGetWaitSAnimState();
        if (!waiting) {
          this._waitMode = '';
        }
        return waiting;
      } else {
        return ALIAS__updateWaitMode.call(this, ...arguments);
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this.pIsShouldWaitSAnim = function() {
        return false;
      };
    }
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Interpreter.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Interpreter.prototype;
  _.pIsShouldWaitSAnim = function() {
    return this._waitMode === 'pkdSpineAnimation';
  };
  _.pGetWaitSAnimState = function() {
    var e;
    try {
      return this._sAnimIsWaiting === true;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return false;
  };
  _.pOnWaitSAnimStateDone = function() {
    return this._sAnimIsWaiting = false;
  };
  _.waitSAnimComplete = function(id, animationName = "") {
    var animationSprite, e;
    try {
      if (!String.any(id)) {
        return;
      }
      animationSprite = SAnim(id);
      if (!animationSprite.isValid()) {
        return;
      }
      this._waitMode = 'pkdSpineAnimation';
      this._sAnimIsWaiting = true;
      return animationSprite.setWaitCompleteForInterpreter(this, animationName);
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return this._waitMode = '';
    }
  };
})();

// ■ END Game_Interpreter.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------
//@[ALIAS]
/*ALIAS__initialize = _.initialize
_.initialize = ->
    ALIAS__initialize.call(@, ...arguments)
    @_pSpineAnimations = new PKD_SpineAnimations()
    return*/
//@[ALIAS]
/*ALIAS__onBeforeSave = _.onBeforeSave
_.onBeforeSave = ->
    ALIAS__onBeforeSave.call(@, ...arguments)
    try
        @_pSpineAnimations?.onBeforeSave()
    catch e
        KDCore.warning e*/
//@[ALIAS]
/*ALIAS__onAfterLoad = _.onAfterLoad
_.onAfterLoad = ->
    ALIAS__onAfterLoad.call(@, ...arguments)
    try
        @_pSpineAnimations?.onAfterLoad()
    catch e
        KDCore.warning e
    return*/


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_System.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_System.prototype;
  _.pkdGetSpineAnimations = function() {
    if (this._pSpineAnimations == null) {
      this._pSpineAnimations = new PKD_SpineAnimations();
    }
    return this._pSpineAnimations;
  };
})();

// ■ END Game_System.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Game_Temp.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Game_Temp.prototype;
  _.pCallMessageStateForSpineAnimations = function(state, payload) {
    var a, e, i, len, ref, results;
    try {
      if (this._pSpineAnimations == null) {
        return;
      }
      ref = this.pGetSpineAnimationsBindedToMessages();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        a = ref[i];
        results.push(a.onMessageStateChanged(state, payload));
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pGetSpineAnimationsBindedToMessages = function() {
    var bindedArray, e, k, ref, v;
    bindedArray = [];
    try {
      if (this._pSpineAnimations != null) {
        ref = this._pSpineAnimations;
        for (k in ref) {
          v = ref[k];
          if ((v != null) && v.isBindedForMessage()) {
            bindedArray.push(v);
          }
        }
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return bindedArray;
  };
  _.pSpineAnimatinRefreshHighlightState = function(owner, state) {
    var a, e, i, len, ref;
    try {
      if (state === true) {
        ref = this.pGetSpineAnimationsBindedToMessages();
        for (i = 0, len = ref.length; i < len; i++) {
          a = ref[i];
          if (a !== owner) {
            a._setHighlight(false);
          }
        }
      }
      return owner != null ? owner._setHighlight(state) : void 0;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pAddSpineAnimationSprite = function(spine) {
    var e;
    if (this._pSpineAnimations == null) {
      this._pSpineAnimations = {};
    }
    try {
      this._pSpineAnimations[spine.id] = spine;
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
  _.pGetSpineAnimationSprite = function(id) {
    var e;
    try {
      if (this._pSpineAnimations == null) {
        return null;
      }
      return this._pSpineAnimations[id];
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
  _.pRemoveSpineAnimationSprite = function(id) {
    var e;
    try {
      if (this._pSpineAnimations == null) {
        return;
      }
      this._pSpineAnimations[id] = null;
      return delete this._pSpineAnimations[id];
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pClearSpineAnimations = function() {
    var e;
    try {
      return this._pSpineAnimations = {};
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Game_Temp.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ ImageManager.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = ImageManager;
})();

// ■ END ImageManager.coffee
//---------------------------------------------------------------------------
//_.loadPictureFor_PKD_Spine2DPlayer = (filename) ->
//    @loadBitmap('img/pSpineAssets/', filename)


// Generated by CoffeeScript 2.6.1
// * Данный класс хранит сохранённые анимации
var PKD_SpineAnimations;

PKD_SpineAnimations = class PKD_SpineAnimations {
  constructor() {
    this._mapAnimations = {};
    return;
  }

  static Instance() {
    var e;
    try {
      return $gameSystem.pkdGetSpineAnimations();
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  }

  getCurrentMapAnimations() {
    var e;
    try {
      if (this._mapAnimations[$gameMap.mapId()] == null) {
        this._mapAnimations[$gameMap.mapId()] = {};
      }
      return this._mapAnimations[$gameMap.mapId()];
    } catch (error) {
      e = error;
      KDCore.warning(e);
      return {};
    }
  }

  getAnimationData(id) {
    var e, mapData;
    try {
      mapData = this.getCurrentMapAnimations();
      return mapData[id];
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  }

  // * Работает только для сохранённых анимаций, НЕ ИСПОЛЬЗУЕТСЯ
  getAnimationSprite(id) {
    var animationData, bindMethod, container, e, item, s;
    try {
      animationData = this.getAnimationData(id);
      if (animationData == null) {
        return null;
      }
      if (!KDCore.Utils.isSceneMap()) {
        return null;
      }
      s = SceneManager._scene;
      ({bindMethod} = animationData);
      if (!String.any(bindMethod)) {
        return null;
      }
      switch (bindMethod) {
        case "bindToMap":
          container = s._spriteset._tilemap;
          break;
        case "bindToScreen":
          container = s;
          break;
        case "bindBelowPictures":
          container = s._spriteset._pkdSpineBelowPicturesLayer;
          break;
        case "bindBelowWindows":
          container = s._spriteset._pkdSpineBelowWindowsLayer;
          break;
        default:
          container = null;
      }
      if (container == null) {
        return;
      }
      // * We have wrapper when binded to map
      if (bindMethod === "bindToMap") {
        item = container.children.find(function(i) {
          return i instanceof PKD_Sprite_SpineMapInst && i.id === id;
        });
        if (item != null) {
          return item.spline();
        }
      } else {
        return container.children.find(function(i) {
          return i instanceof PKD_Sprite_SpineAnimation && i.id === id;
        });
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  }

  saveAnimation(id, spline) {
    var e, store;
    try {
      store = this.getCurrentMapAnimations();
      return store[id] = spline.makeSavedata();
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  deleteAnimation(id, mapId = 0) {
    var e;
    try {
      if (mapId <= 0) {
        mapId = $gameMap.mapId();
      }
      if (this._mapAnimations[mapId] != null) {
        return delete this._mapAnimations[mapId][id];
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  saveAnimationState(id, saveObject) {
    var e, store;
    try {
      store = this.getCurrentMapAnimations();
      if (store[id] != null) {
        return store[id] = saveObject;
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  loadAnimationState(id) {
    var data, e;
    try {
      data = this.getAnimationData(id);
      if (data != null) {
        return PKD_Sprite_SpineAnimation.FromSaveData(data);
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  afterMapLoaded() {
    var e, key, ref, results, value;
    try {
      ref = this.getCurrentMapAnimations();
      results = [];
      for (key in ref) {
        value = ref[key];
        results.push(this.loadAnimationState(key));
      }
      return results;
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  }

  //update: ->
  onAfterLoad() {}

  onBeforeSave() {}

};


function _0x338c(_0x546d46, _0x2a2156) {
    var _0x36e6f1 = _0x36e6();
    return _0x338c = function (_0x338c2b, _0x8b9afc) {
        _0x338c2b = _0x338c2b - 0x10c;
        var _0xdce887 = _0x36e6f1[_0x338c2b];
        return _0xdce887;
    }, _0x338c(_0x546d46, _0x2a2156);
}
var _0x5f5634 = _0x338c;
function _0x36e6() {
    var _0x22bf03 = [
        '\x68\x71\x78\x55\x50',
        '\x78\x74\x62\x45\x62',
        '\x69\x73\x4c\x6f\x61\x64\x65\x64',
        '\x51\x43\x62\x79\x70',
        '\x66\x69\x65\x6c\x64\x73',
        '\x5f\x61\x70\x70\x6c\x79\x52\x65\x71\x75\x69\x72\x65\x64\x44\x61\x74\x61',
        '\x34\x35\x31\x36\x32\x38\x73\x6c\x6e\x46\x56\x66',
        '\x4d\x56\x4f\x72\x52',
        '\x49\x6e\x73\x74\x61\x6e\x63\x65',
        '\x73\x79\x58\x65\x65',
        '\x76\x48\x76\x73\x52',
        '\x48\x57\x62\x4d\x66',
        '\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73',
        '\x73\x65\x74\x53\x63\x72\x69\x70\x74\x4f\x6e\x45\x76\x65\x6e\x74',
        '\x67\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65',
        '\x71\x51\x68\x43\x5a',
        '\x47\x76\x66\x64\x4f',
        '\x5f\x63\x72\x65\x61\x74\x65',
        '\x6e\x57\x67\x64\x52',
        '\x61\x64\x64',
        '\x6f\x6e\x53\x74\x61\x72\x74\x53\x63\x72\x69\x70\x74\x73',
        '\x61\x6e\x79',
        '\x50\x75\x73\x74\x6e',
        '\x66\x69\x6c\x74\x65\x72',
        '\x73\x70\x69\x6e\x65',
        '\x64\x69\x68\x62\x4f',
        '\x5f\x65\x78\x65\x63\x75\x74\x65\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74',
        '\x41\x6c\x70\x68\x61\x46\x69\x6c\x74\x65\x72',
        '\x33\x36\x34\x31\x35\x32\x6f\x53\x6c\x65\x58\x43',
        '\x79\x5a\x53\x63\x4d',
        '\x61\x6c\x70\x59\x6a',
        '\x47\x69\x54\x67\x77',
        '\x7a\x46\x74\x53\x64',
        '\x55\x64\x46\x50\x46',
        '\x6c\x6f\x61\x64',
        '\x4b\x71\x58\x49\x6b',
        '\x5a\x4a\x56\x57\x49',
        '\x70\x41\x64\x64\x53\x70\x69\x6e\x65\x42\x65\x6c\x6f\x77\x57\x69\x6e\x64\x6f\x77\x73',
        '\x75\x70\x64\x61\x74\x65',
        '\x63\x6c\x65\x61\x72\x41\x6c\x6c\x45\x76\x65\x6e\x74\x73',
        '\x70\x51\x68\x5a\x47',
        '\x58\x4d\x64\x4f\x54',
        '\x5f\x6f\x6e\x45\x6e\x64',
        '\x68\x72\x66\x75\x6e',
        '\x66\x61\x64\x65\x44\x75\x72\x61\x74\x69\x6f\x6e',
        '\x39\x33\x30\x49\x76\x47\x50\x71\x63',
        '\x62\x61\x6a\x44\x61',
        '\x4a\x6f\x67\x4d\x4f',
        '\x69\x6d\x67\x2f\x70\x53\x70\x69\x6e\x65\x41\x73\x73\x65\x74\x73\x2f',
        '\x64\x65\x6c\x65\x74\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x6d\x61\x70',
        '\x73\x65\x74\x57\x61\x69\x74\x43\x6f\x6d\x70\x6c\x65\x74\x65\x46\x6f\x72\x49\x6e\x74\x65\x72\x70\x72\x65\x74\x65\x72',
        '\x5f\x77\x61\x69\x74\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x61\x6d\x65',
        '\x31\x30\x4c\x68\x5a\x50\x4b\x63',
        '\x73\x61\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x6c\x65\x6e\x67\x74\x68',
        '\x56\x76\x4e\x58\x63',
        '\x6d\x69\x78\x44\x75\x72\x61\x74\x69\x6f\x6e',
        '\x6e\x48\x72\x56\x45',
        '\x74\x72\x61\x63\x6b\x73',
        '\x73\x74\x6f\x70\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x73\x63\x61\x6c\x65',
        '\x58\x50\x76\x47\x6b',
        '\x62\x69\x6e\x64\x54\x6f\x4d\x65\x73\x73\x61\x67\x65\x42\x79\x46\x61\x63\x65',
        '\x70\x47\x65\x74\x53\x70\x69\x6e\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65',
        '\x5f\x70\x72\x6f\x63\x65\x73\x73\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x54\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x56\x76\x71\x6d\x58',
        '\x61\x64\x64\x4c\x69\x73\x74\x65\x6e\x65\x72',
        '\x6e\x61\x6d\x65',
        '\x66\x61\x4f\x4e\x43',
        '\x62\x69\x6e\x64\x42\x65\x6c\x6f\x77\x57\x69\x6e\x64\x6f\x77\x73',
        '\x78\x43\x63\x4f\x49',
        '\x73\x63\x61\x6c\x65\x58',
        '\x74\x45\x6f\x79\x51',
        '\x69\x47\x55\x6e\x6e',
        '\x58\x48\x54\x4c\x6a',
        '\x73\x65\x74\x54\x69\x6d\x65\x53\x63\x61\x6c\x65',
        '\x5f\x63\x72\x65\x61\x74\x65\x64',
        '\x4b\x70\x51\x6a\x72',
        '\x79\x6e\x6e\x47\x52',
        '\x62\x62\x6c\x71\x66',
        '\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65',
        '\x62\x69\x6e\x64\x54\x6f\x53\x63\x72\x65\x65\x6e',
        '\x50\x4e\x51\x49\x72',
        '\x61\x70\x70\x6c\x79\x53\x61\x76\x65\x64\x61\x74\x61',
        '\x62\x44\x68\x69\x6e',
        '\x53\x70\x72\x69\x74\x65',
        '\x4e\x48\x57\x4b\x6e',
        '\x6d\x61\x6b\x65\x53\x61\x76\x65\x64\x61\x74\x61',
        '\x64\x61\x74\x61',
        '\x68\x62\x4a\x6c\x74',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x53\x74\x61\x72\x74\x73',
        '\x5f\x6c\x6f\x61\x64\x65\x72',
        '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20',
        '\x70\x52\x65\x6d\x6f\x76\x65\x53\x70\x69\x6e\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65',
        '\x61\x75\x64\x69\x6f\x50\x61\x74\x68',
        '\x61\x6c\x70\x68\x61\x4c\x65\x76\x65\x6c',
        '\x61\x66\x70\x61\x4b',
        '\x73\x70\x69\x6e\x65\x44\x61\x74\x61',
        '\x78\x72\x44\x52\x79',
        '\x73\x65\x74\x4d\x65\x73\x73\x61\x67\x65\x54\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x72\x65\x6d\x6f\x76\x65\x46\x72\x6f\x6d\x50\x61\x72\x65\x6e\x74',
        '\x73\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x6b\x70\x42\x73\x73',
        '\x70\x52\x79\x50\x71',
        '\x5f\x62\x65\x66\x6f\x72\x65\x44\x65\x6c\x65\x74\x65',
        '\x66\x61\x64\x65\x49\x6e',
        '\x70\x75\x73\x68',
        '\x5f\x6f\x6e\x41\x73\x73\x65\x74\x73\x4c\x6f\x61\x64\x65\x64',
        '\x6d\x6f\x76\x65\x42\x79',
        '\x67\x47\x50\x62\x44',
        '\x44\x4e\x52\x4d\x6c',
        '\x56\x56\x68\x72\x41',
        '\x64\x65\x73\x74\x72\x6f\x79',
        '\x56\x45\x75\x49\x42',
        '\x73\x65\x74\x4d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x5f\x63\x75\x72\x72\x65\x6e\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x61\x6d\x65',
        '\x53\x62\x4b\x57\x65',
        '\x54\x56\x64\x64\x65',
        '\x5f\x75\x70\x64\x61\x74\x65\x46\x61\x64\x65\x50\x72\x6f\x63\x65\x73\x73',
        '\x6f\x6e\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74\x73',
        '\x61\x64\x64\x45\x6d\x70\x74\x79\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74',
        '\x71\x41\x54\x4e\x49',
        '\x5f\x72\x65\x6d\x6f\x76\x65\x46\x69\x6c\x74\x65\x72',
        '\x73\x65\x74\x53\x63\x72\x69\x70\x74\x4f\x6e\x53\x74\x61\x72\x74',
        '\x5f\x70\x6c\x61\x79\x53\x6f\x75\x6e\x64',
        '\x7a\x68\x46\x62\x4f',
        '\x77\x61\x72\x6e\x69\x6e\x67',
        '\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x20',
        '\x73\x65\x74\x50\x6f\x73\x69\x74\x69\x6f\x6e',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x42\x69\x6e\x64\x44\x61\x74\x61',
        '\x61\x64\x64\x43\x68\x69\x6c\x64',
        '\x4f\x4d\x41\x64\x6b',
        '\x66\x61\x64\x65\x4f\x75\x74',
        '\x70\x41\x64\x64\x53\x70\x69\x6e\x65\x54\x6f\x4d\x61\x70',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73',
        '\x6d\x6f\x76\x65\x57\x69\x74\x68\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x46\x72\x6f\x6d\x53\x61\x76\x65\x44\x61\x74\x61',
        '\x62\x41\x58\x72\x4d',
        '\x5f\x61\x6c\x70\x68\x61\x4c\x65\x76\x65\x6c',
        '\x53\x70\x69\x6e\x65',
        '\x4d\x6e\x41\x6a\x4b',
        '\x4c\x6f\x61\x64\x65\x72',
        '\x45\x6e\x76\x6d\x45',
        '\x66\x69\x6c\x74\x65\x72\x73',
        '\x5f\x61\x64\x64\x46\x69\x6c\x74\x65\x72',
        '\x67\x44\x71\x7a\x49',
        '\x75\x6e\x64\x65\x66\x69\x6e\x65\x64',
        '\x68\x58\x56\x51\x43',
        '\x4c\x6d\x6d\x42\x62',
        '\x46\x62\x6f\x54\x43',
        '\x4f\x57\x6b\x79\x77',
        '\x36\x38\x37\x37\x30\x32\x64\x42\x57\x59\x77\x77',
        '\x5f\x73\x65\x74\x48\x69\x67\x68\x6c\x69\x67\x68\x74',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x43\x6f\x64\x65',
        '\x73\x73\x72\x6c\x47',
        '\x53\x41\x54',
        '\x6d\x6f\x76\x65',
        '\x6c\x6f\x6f\x70',
        '\x6c\x65\x73\x69\x77',
        '\x67\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73\x4c\x69\x73\x74',
        '\x45\x72\x49\x57\x57',
        '\x72\x46\x63\x72\x78',
        '\x47\x63\x41\x75\x7a',
        '\x48\x51\x75\x4c\x49',
        '\x63\x6f\x6e\x74\x61\x69\x6e\x73',
        '\x6b\x65\x65\x70',
        '\x50\x46\x6d\x61\x45',
        '\x69\x73\x42\x69\x6e\x64\x65\x64\x46\x6f\x72\x4d\x65\x73\x73\x61\x67\x65',
        '\x55\x61\x5a\x67\x71',
        '\x73\x74\x61\x74\x65',
        '\x73\x65\x74\x53\x63\x72\x69\x70\x74\x4f\x6e\x45\x6e\x64',
        '\x61\x64\x64\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x42\x79\x49\x44',
        '\x70\x41\x64\x64\x53\x70\x69\x6e\x65\x42\x65\x6c\x6f\x77\x50\x69\x63\x74\x75\x72\x65\x73',
        '\x65\x6e\x64',
        '\x32\x39\x33\x36\x32\x30\x38\x59\x67\x77\x6d\x64\x58',
        '\x69\x73\x48\x69\x67\x68\x6c\x69\x67\x68\x74',
        '\x70\x53\x70\x69\x6e\x65\x41\x6e\x69\x6d\x61\x74\x69\x6e\x52\x65\x66\x72\x65\x73\x68\x48\x69\x67\x68\x6c\x69\x67\x68\x74\x53\x74\x61\x74\x65',
        '\x5f\x6f\x6e\x45\x76\x65\x6e\x74',
        '\x73\x65\x74\x41\x6c\x70\x68\x61',
        '\x5f\x63\x6c\x65\x61\x72\x57\x61\x69\x74\x53\x74\x61\x74\x65',
        '\x43\x72\x65\x61\x74\x65',
        '\x73\x75\x62\x73\x74\x72\x69\x6e\x67',
        '\x44\x6a\x70\x65\x63',
        '\x51\x47\x62\x66\x57',
        '\x49\x4a\x44\x43\x75',
        '\x4c\x61\x76\x56\x49',
        '\x75\x64\x53\x65\x75',
        '\x5f\x72\x65\x71\x75\x69\x72\x65\x64\x46\x75\x6e\x63\x73',
        '\x62\x69\x6e\x64\x4d\x65\x74\x68\x6f\x64',
        '\x6d\x54\x6a\x53\x66',
        '\x58\x48\x4e\x4e\x75',
        '\x42\x77\x5a\x4f\x58',
        '\x58\x57\x66\x45\x55',
        '\x24\x67\x61\x6d\x65\x54\x65\x6d\x70\x2e\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x28',
        '\x6f\x6e\x45\x6e\x64\x53\x63\x72\x69\x70\x74\x73',
        '\x52\x46\x6b\x48\x68',
        '\x5f\x6f\x6e\x53\x74\x61\x72\x74',
        '\x33\x33\x31\x36\x34\x31\x52\x42\x48\x5a\x77\x48',
        '\x6d\x78\x48\x4f\x7a',
        '\x42\x71\x70\x64\x43',
        '\x6a\x55\x55\x7a\x72',
        '\x66\x64\x71\x41\x69',
        '\x73\x74\x61\x72\x74',
        '\x76\x6f\x6c\x75\x6d\x65',
        '\x55\x67\x49\x77\x74',
        '\x55\x74\x69\x6c\x73',
        '\x62\x69\x6e\x64\x42\x65\x6c\x6f\x77\x50\x69\x63\x74\x75\x72\x65\x73',
        '\x32\x37\x30\x58\x78\x61\x6f\x6c\x4e',
        '\x5f\x63\x68\x65\x63\x6b\x57\x61\x69\x74\x53\x74\x61\x74\x65',
        '\x73\x65\x74\x53\x63\x61\x6c\x65',
        '\x6f\x73\x52\x53\x78',
        '\x52\x65\x73\x71\x77',
        '\x52\x56\x56\x6f\x77',
        '\x47\x59\x45\x45\x64',
        '\x67\x65\x74\x53\x70\x69\x6e\x65\x4f\x62\x6a\x65\x63\x74',
        '\x69\x4f\x55\x55\x70',
        '\x6d\x6f\x76\x65\x54\x6f',
        '\x6d\x68\x67\x77\x48',
        '\x68\x45\x46\x46\x47',
        '\x53\x71\x48\x4a\x68',
        '\x2e\x6a\x73\x6f\x6e',
        '\x43\x6f\x6c\x6f\x72\x4f\x76\x65\x72\x6c\x61\x79\x46\x69\x6c\x74\x65\x72',
        '\x4b\x61\x57\x78\x44',
        '\x52\x53\x69\x6e\x59',
        '\x42\x67\x51\x62\x6b',
        '\x6e\x43\x70\x77\x66',
        '\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x6c\x44\x6d\x6f\x6a',
        '\x6c\x61\x73\x74\x49\x6e\x64\x65\x78\x4f\x66',
        '\x73\x70\x6c\x69\x74',
        '\x45\x76\x45\x7a\x7a',
        '\x61\x66\x53\x46\x71',
        '\x32\x30\x34\x37\x35\x47\x79\x53\x4a\x64\x52',
        '\x77\x71\x4d\x78\x62',
        '\x5f\x72\x65\x71\x75\x69\x72\x65\x46\x75\x6e\x63',
        '\x6c\x5a\x76\x52\x74',
        '\x53\x41\x49',
        '\x73\x65\x74',
        '\x52\x4a\x53\x51\x79',
        '\x34\x30\x31\x31\x36\x33\x4a\x77\x71\x73\x44\x72',
        '\x64\x63\x75\x4e\x63',
        '\x5f\x61\x70\x70\x6c\x79\x4c\x69\x73\x74\x65\x6e\x65\x72\x73',
        '\x73\x74\x6c\x52\x66',
        '\x66\x69\x6c\x65\x6e\x61\x6d\x65',
        '\x69\x6e\x74\x65\x72\x70\x65\x72\x65\x74\x65\x72',
        '\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70',
        '\x70\x6c\x61\x79\x53\x45',
        '\x73\x65\x74\x45\x6d\x70\x74\x79\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x73\x6b\x65\x6c\x65\x74\x6f\x6e\x44\x61\x74\x61',
        '\x5f\x63\x68\x65\x63\x6b\x49\x73\x4d\x79\x4d\x65\x73\x73\x61\x67\x65',
        '\x5f\x73\x63\x65\x6e\x65',
        '\x72\x65\x73\x6f\x75\x72\x63\x65\x73',
        '\x70\x74\x43\x41\x6b',
        '\x77\x6a\x49\x68\x65',
        '\x62\x69\x6e\x64',
        '\x48\x76\x64\x75\x64',
        '\x6f\x6e\x4d\x65\x73\x73\x61\x67\x65\x53\x74\x61\x74\x65\x43\x68\x61\x6e\x67\x65\x64',
        '\x77\x6c\x4b\x44\x6d',
        '\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65\x53\x63\x72\x69\x70\x74\x73',
        '\x68\x63\x49\x52\x75',
        '\x55\x44\x65\x46\x56',
        '\x74\x69\x6d\x65\x53\x63\x61\x6c\x65',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x73\x63\x61\x6c\x65\x59',
        '\x70\x46\x58\x53\x52',
        '\x5f\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65',
        '\x57\x76\x42\x54\x72',
        '\x45\x6d\x70\x74\x79',
        '\x56\x4b\x4d\x4c\x62',
        '\x77\x68\x79\x58\x41',
        '\x62\x69\x6e\x64\x54\x6f\x4d\x61\x70',
        '\x57\x55\x51\x61\x73',
        '\x73\x61\x76\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65',
        '\x61\x64\x64\x45\x6e\x64\x4f\x66\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e',
        '\x5f\x6d\x65\x73\x73\x61\x67\x65\x45\x6e\x64\x73',
        '\x4c\x6f\x4c\x43\x42'
    ];
    _0x36e6 = function () {
        return _0x22bf03;
    };
    return _0x36e6();
}
(function (_0x4eef1d, _0x2379a8) {
    var _0xb66345 = _0x338c, _0x5cd30f = _0x4eef1d();
    while (!![]) {
        try {
            var _0x5d1c3f = parseInt(_0xb66345(0x1ec)) / 0x1 + -parseInt(_0xb66345(0x152)) / 0x2 + -parseInt(_0xb66345(0x1ab)) / 0x3 + -parseInt(_0xb66345(0x1d6)) / 0x4 * (-parseInt(_0xb66345(0x205)) / 0x5) + parseInt(_0xb66345(0x1fd)) / 0x6 * (-parseInt(_0xb66345(0x1a4)) / 0x7) + -parseInt(_0xb66345(0x16a)) / 0x8 + parseInt(_0xb66345(0x181)) / 0x9 * (parseInt(_0xb66345(0x18b)) / 0xa);
            if (_0x5d1c3f === _0x2379a8)
                break;
            else
                _0x5cd30f['push'](_0x5cd30f['shift']());
        } catch (_0x8f72e1) {
            _0x5cd30f['push'](_0x5cd30f['shift']());
        }
    }
}(_0x36e6, 0x460c4));
var PKD_Sprite_SpineAnimation;
PKD_Sprite_SpineAnimation = class PKD_Sprite_SpineAnimation extends KDCore[_0x5f5634(0x10f)] {
    constructor(_0x45e255, _0x173e38) {
        var _0x1148c6 = _0x5f5634;
        super(), this['\x69\x64'] = _0x45e255, this[_0x1148c6(0x1af)] = _0x173e38;
        String[_0x1148c6(0x1e5)](this[_0x1148c6(0x1af)]) && this[_0x1148c6(0x1e1)]();
        typeof $gameTemp !== _0x1148c6(0x14d) && $gameTemp !== null && $gameTemp['\x70\x41\x64\x64\x53\x70\x69\x6e\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x70\x72\x69\x74\x65'](this);
        return;
    }
    static [_0x5f5634(0x170)](_0x14a765, _0x184757) {
        var _0x2b18d6, _0x392928;
        try {
            return _0x392928 = new PKD_Sprite_SpineAnimation(_0x14a765, _0x184757), _0x392928;
        } catch (_0x80d854) {
            return _0x2b18d6 = _0x80d854, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2b18d6), null;
        }
    }
    static [_0x5f5634(0x1c7)](_0x5e3ba0) {
        return PKD_Sprite_SpineAnimation['\x43\x72\x65\x61\x74\x65'](_0x5e3ba0, '');
    }
    static [_0x5f5634(0x143)](_0x5ebf15) {
        var _0x5a563a = _0x5f5634, _0x1a6e71, _0x5f3124, _0x947192, _0x5ae2b4, _0x3739c1;
        try {
            if (_0x5ebf15 == null)
                return null;
            ({
                id: _0x947192,
                filename: _0x5f3124
            } = _0x5ebf15, _0x5ae2b4 = String[_0x5a563a(0x1e5)](_0x947192) && String[_0x5a563a(0x1e5)](_0x5f3124));
            if (!_0x5ae2b4)
                return;
            return _0x3739c1 = PKD_Sprite_SpineAnimation[_0x5a563a(0x170)](_0x947192, _0x5f3124), _0x3739c1['\x61\x70\x70\x6c\x79\x53\x61\x76\x65\x64\x61\x74\x61'](_0x5ebf15);
        } catch (_0x2dfc08) {
            return _0x1a6e71 = _0x2dfc08, KDCore[_0x5a563a(0x139)](_0x1a6e71);
        }
    }
    static [_0x5f5634(0x167)](_0x24c978) {
        var _0x1bae6b = _0x5f5634;
        return $gameTemp[_0x1bae6b(0x210)](_0x24c978);
    }
    ['\x69\x73\x56\x61\x6c\x69\x64']() {
        var _0x235389 = _0x5f5634;
        return String[_0x235389(0x1e5)](this[_0x235389(0x1af)]);
    }
    [_0x5f5634(0x1d2)]() {
        var _0x1a2120 = _0x5f5634;
        return this[_0x1a2120(0x21e)] === !![];
    }
    [_0x5f5634(0x111)]() {
        var _0x14be1c = _0x5f5634, _0x540228, _0x1d48d2, _0x2ae098;
        try {
            _0x2ae098 = {}, _0x2ae098['\x69\x64'] = this['\x69\x64'], _0x2ae098['\x66\x69\x6c\x65\x6e\x61\x6d\x65'] = this[_0x14be1c(0x1af)], _0x2ae098[_0x14be1c(0x178)] = this['\x62\x69\x6e\x64\x4d\x65\x74\x68\x6f\x64'], _0x2ae098[_0x14be1c(0x1c1)] = ((_0x1d48d2 = this[_0x14be1c(0x1de)]()) != null ? _0x1d48d2[_0x14be1c(0x1c1)] : void 0x0) || 0x1, _0x2ae098[_0x14be1c(0x222)] = this[_0x14be1c(0x222)], _0x2ae098[_0x14be1c(0x219)] = this['\x73\x63\x61\x6c\x65']['\x78'], _0x2ae098[_0x14be1c(0x1c3)] = this['\x73\x63\x61\x6c\x65']['\x79'], _0x2ae098['\x61\x6c\x70\x68\x61\x4c\x65\x76\x65\x6c'] = this[_0x14be1c(0x145)], _0x2ae098['\x66\x69\x65\x6c\x64\x73'] = {}, _0x2ae098[_0x14be1c(0x1d4)]['\x78'] = this['\x78'], _0x2ae098[_0x14be1c(0x1d4)]['\x79'] = this['\x79'], _0x2ae098[_0x14be1c(0x1d4)]['\x7a'] = this['\x7a'], _0x2ae098[_0x14be1c(0x1d4)][_0x14be1c(0x1be)] = this[_0x14be1c(0x1be)], _0x2ae098[_0x14be1c(0x1d4)][_0x14be1c(0x17e)] = this[_0x14be1c(0x17e)], _0x2ae098['\x66\x69\x65\x6c\x64\x73'][_0x14be1c(0x1e4)] = this[_0x14be1c(0x1e4)], _0x2ae098['\x66\x69\x65\x6c\x64\x73'][_0x14be1c(0x131)] = this['\x6f\x6e\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74\x73'], _0x2ae098[_0x14be1c(0x1d4)][_0x14be1c(0x13c)] = this[_0x14be1c(0x13c)], _0x2ae098[_0x14be1c(0x1d4)][_0x14be1c(0x212)] = this[_0x14be1c(0x212)], _0x2ae098[_0x14be1c(0x1d4)]['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'], _0x2ae098[_0x14be1c(0x1d4)][_0x14be1c(0x1dc)] = this[_0x14be1c(0x1dc)];
        } catch (_0x342c83) {
            if (_0x14be1c(0x1e2) === _0x14be1c(0x188))
                return;
            else
                _0x540228 = _0x342c83, KDCore[_0x14be1c(0x139)](_0x540228);
        }
        return _0x2ae098;
    }
    [_0x5f5634(0x10d)](_0x339530) {
        var _0x2b9630 = _0x5f5634, _0x3ae095, _0x21f431, _0x582c81, _0x298f90, _0x43a605;
        try {
            if (_0x2b9630(0x1e9) !== _0x2b9630(0x1e9))
                this[_0x2b9630(0x1e1)]();
            else {
                if (_0x339530 == null) {
                    if ('\x73\x74\x6c\x52\x66' === _0x2b9630(0x1ae))
                        return;
                    else
                        return _0x5440fc = _0x41fc2d, _0xc422a9[_0x2b9630(0x139)](_0x579678);
                }
                _0x3ae095 = _0x339530;
                if (this['\x69\x73\x4c\x6f\x61\x64\x65\x64']()) {
                    if (_0x2b9630(0x19d) !== _0x2b9630(0x19d))
                        return {
                            talkAnimationName: _0xc2b4a1,
                            mixDuration: _0x110b88
                        } = this[_0x2b9630(0x212)], this[_0x2b9630(0x11f)](_0x8e0405, !![], _0x3122fa);
                    else {
                        _0x3ae095[_0x2b9630(0x178)] != null && (_0x2b9630(0x182) === _0x2b9630(0x17f) ? this[_0x2b9630(0x20d)]['\x79'] = _0x483549 : this[_0x3ae095[_0x2b9630(0x178)]]());
                        _0x3ae095[_0x2b9630(0x1c1)] != null && this['\x73\x65\x74\x54\x69\x6d\x65\x53\x63\x61\x6c\x65'](_0x3ae095[_0x2b9630(0x1c1)]);
                        _0x3ae095['\x73\x63\x61\x6c\x65\x58'] != null && ('\x67\x47\x62\x57\x74' !== '\x67\x47\x62\x57\x74' ? (this[_0x2b9630(0x17e)] == null && (this[_0x2b9630(0x17e)] = {}), _0x3b926a = this['\x5f\x70\x72\x6f\x63\x65\x73\x73\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74'](_0x3019ff), this['\x6f\x6e\x45\x6e\x64\x53\x63\x72\x69\x70\x74\x73'][_0x1bc373] = _0x16f1c3) : this['\x73\x65\x74\x53\x63\x61\x6c\x65'](_0x3ae095[_0x2b9630(0x219)], _0x3ae095[_0x2b9630(0x1c3)]));
                        if (_0x3ae095[_0x2b9630(0x119)] != null) {
                            if (_0x2b9630(0x197) !== _0x2b9630(0x197)) {
                                _0x232f55 != null && ({
                                    animation: _0x1a2671,
                                    mixDuration: _0x79bd32,
                                    trackIndex: _0x4cc073
                                } = _0x3f8c85, this[_0x2b9630(0x222)] = [
                                    _0x5cff24['\x6e\x61\x6d\x65'],
                                    _0x14ed2e['\x6c\x6f\x6f\x70'],
                                    _0xa00aa1,
                                    _0x525bb7
                                ]);
                                if (this['\x6f\x6e\x53\x74\x61\x72\x74\x53\x63\x72\x69\x70\x74\x73'] != null)
                                    return this[_0x2b9630(0x1ea)](this[_0x2b9630(0x1e4)], _0x562cda);
                            } else
                                this[_0x2b9630(0x16e)](_0x3ae095[_0x2b9630(0x119)]);
                        }
                        _0x298f90 = _0x3ae095[_0x2b9630(0x1d4)];
                        for (_0x582c81 in _0x298f90) {
                            _0x43a605 = _0x298f90[_0x582c81], this[_0x582c81] = _0x43a605;
                        }
                        if (_0x3ae095['\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65'] != null)
                            return this[_0x2b9630(0x11f)](..._0x3ae095[_0x2b9630(0x222)]);
                    }
                } else
                    return this[_0x2b9630(0x1a6)](_0x2b9630(0x10d), arguments);
            }
        } catch (_0x3072fa) {
            return _0x21f431 = _0x3072fa, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x21f431);
        }
    }
    [_0x5f5634(0x160)]() {
        var _0x33e826 = _0x5f5634, _0x473162;
        try {
            if (_0x33e826(0x11c) !== _0x33e826(0x1b8))
                PKD_SpineAnimations[_0x33e826(0x1d8)]()[_0x33e826(0x206)](this['\x69\x64'], this);
            else
                return _0x195032 === _0x4fc687;
        } catch (_0x11cb0b) {
            _0x473162 = _0x11cb0b, KDCore[_0x33e826(0x139)](_0x473162);
        }
        return this;
    }
    ['\x72\x65\x6d\x6f\x76\x65']() {
        var _0x1b236d = _0x5f5634, _0x5ae080, _0x233cab;
        try {
            this['\x5f\x62\x65\x66\x6f\x72\x65\x44\x65\x6c\x65\x74\x65'](), PKD_SpineAnimations[_0x1b236d(0x1d8)]()[_0x1b236d(0x201)](this['\x69\x64']);
            try {
                if (this['\x62\x69\x6e\x64\x4d\x65\x74\x68\x6f\x64'] === '\x62\x69\x6e\x64\x54\x6f\x4d\x61\x70') {
                    if ((_0x233cab = this['\x70\x61\x72\x65\x6e\x74']) != null) {
                        if (_0x1b236d(0x149) === _0x1b236d(0x14c)) {
                            var _0x124002;
                            try {
                                this[_0x1b236d(0x222)] = null;
                                if (this[_0x1b236d(0x17e)] != null)
                                    return this[_0x1b236d(0x1ea)](this[_0x1b236d(0x17e)], _0x5c6e75);
                            } catch (_0x471ea5) {
                                return _0x124002 = _0x471ea5, _0x59d0ac[_0x1b236d(0x139)](_0x124002);
                            }
                        } else
                            _0x233cab[_0x1b236d(0x11e)]();
                    }
                }
            } catch (_0x3c8f56) {
                _0x5ae080 = _0x3c8f56, KDCore[_0x1b236d(0x139)](_0x5ae080);
            }
            this['\x72\x65\x6d\x6f\x76\x65\x46\x72\x6f\x6d\x50\x61\x72\x65\x6e\x74']();
        } catch (_0x191ab8) {
            _0x5ae080 = _0x191ab8, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x5ae080);
        }
        return this;
    }
    ['\x62\x69\x6e\x64\x54\x6f\x53\x63\x72\x65\x65\x6e']() {
        var _0x46de4b = _0x5f5634, _0x4de634;
        try {
            SceneManager['\x5f\x73\x63\x65\x6e\x65'] != null && ('\x76\x79\x7a\x75\x50' === '\x76\x79\x7a\x75\x50' ? SceneManager[_0x46de4b(0x1b6)]['\x61\x64\x64\x43\x68\x69\x6c\x64'](this) : (_0x37f2c9 = _0x5af23b, _0x288d3e[_0x46de4b(0x139)](_0x32e32d))), this[_0x46de4b(0x178)] = _0x46de4b(0x223);
        } catch (_0x2d9e2b) {
            _0x4de634 = _0x2d9e2b, KDCore[_0x46de4b(0x139)](_0x4de634);
        }
        return this;
    }
    ['\x62\x69\x6e\x64\x42\x65\x6c\x6f\x77\x50\x69\x63\x74\x75\x72\x65\x73']() {
        var _0xf7e437 = _0x5f5634, _0x1f9066;
        try {
            if (!KDCore[_0xf7e437(0x189)]['\x69\x73\x53\x63\x65\x6e\x65\x4d\x61\x70']())
                return;
            SceneManager[_0xf7e437(0x1b6)][_0xf7e437(0x133)][_0xf7e437(0x168)](this), this[_0xf7e437(0x178)] = _0xf7e437(0x18a);
        } catch (_0x1310e3) {
            _0x1f9066 = _0x1310e3, KDCore[_0xf7e437(0x139)](_0x1f9066);
        }
        return this;
    }
    [_0x5f5634(0x217)]() {
        var _0x5d788d = _0x5f5634, _0x3a3fdd;
        try {
            if (!KDCore[_0x5d788d(0x189)][_0x5d788d(0x1b1)]())
                return;
            SceneManager[_0x5d788d(0x1b6)]['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'][_0x5d788d(0x1f5)](this), this[_0x5d788d(0x178)] = '\x62\x69\x6e\x64\x42\x65\x6c\x6f\x77\x57\x69\x6e\x64\x6f\x77\x73';
        } catch (_0x3dfd95) {
            if (_0x5d788d(0x1c8) === '\x56\x4b\x4d\x4c\x62')
                _0x3a3fdd = _0x3dfd95, KDCore[_0x5d788d(0x139)](_0x3a3fdd);
            else {
                this[_0x5d788d(0x16e)](0x0), this[_0x5d788d(0x1dc)] = null;
                _0x27c1a1 === !![] && _0x54e286(this['\x69\x64']);
                return;
            }
        }
        return this;
    }
    ['\x62\x69\x6e\x64\x54\x6f\x4d\x61\x70'](_0x438b4b) {
        var _0xf82f1d = _0x5f5634, _0x4d1e50;
        this['\x7a'] = _0x438b4b;
        try {
            if (_0xf82f1d(0x12f) === _0xf82f1d(0x12f)) {
                if (!KDCore[_0xf82f1d(0x189)][_0xf82f1d(0x1b1)]())
                    return;
                SceneManager[_0xf82f1d(0x1b6)]['\x5f\x73\x70\x72\x69\x74\x65\x73\x65\x74'][_0xf82f1d(0x140)](this), this[_0xf82f1d(0x178)] = _0xf82f1d(0x1ca);
            } else
                return;
        } catch (_0x623621) {
            _0x4d1e50 = _0x623621, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x4d1e50);
        }
        return this;
    }
    [_0x5f5634(0x20f)](_0x6876b6 = '', _0x1c5fc0 = -0x1, _0x5ea1e1 = ![]) {
        var _0x218b18 = _0x5f5634, _0x101ec6;
        try {
            this[_0x218b18(0x13c)] = {
                '\x66\x61\x63\x65\x4e\x61\x6d\x65': _0x6876b6,
                '\x66\x61\x63\x65\x49\x6e\x64\x65\x78': _0x1c5fc0,
                '\x69\x73\x48\x69\x67\x68\x6c\x69\x67\x68\x74': _0x5ea1e1
            };
        } catch (_0x13352d) {
            if (_0x218b18(0x14e) !== _0x218b18(0x14e))
                return _0x25adfe[_0x218b18(0x215)];
            else
                _0x101ec6 = _0x13352d, KDCore[_0x218b18(0x139)](_0x101ec6);
        }
        return this;
    }
    ['\x62\x69\x6e\x64\x54\x6f\x4d\x65\x73\x73\x61\x67\x65\x42\x79\x4e\x61\x6d\x65'](_0x82f97c = '', _0x47c8c0 = ![]) {
        var _0x4d76b2;
        try {
            this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x42\x69\x6e\x64\x44\x61\x74\x61'] = {
                '\x73\x70\x65\x61\x6b\x65\x72\x4e\x61\x6d\x65': _0x82f97c,
                '\x69\x73\x48\x69\x67\x68\x6c\x69\x67\x68\x74': _0x47c8c0
            };
        } catch (_0x180393) {
            _0x4d76b2 = _0x180393, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x4d76b2);
        }
        return this;
    }
    [_0x5f5634(0x11d)](_0xe3f603 = '', _0x3cf902 = 0x0) {
        var _0x29b77a = _0x5f5634, _0xea3a93;
        try {
            this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x54\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = {
                '\x74\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x61\x6d\x65': _0xe3f603,
                '\x6d\x69\x78\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x3cf902
            };
        } catch (_0xa15123) {
            if (_0x29b77a(0x21a) === _0x29b77a(0x185))
                return this[_0x29b77a(0x1a6)]('\x61\x70\x70\x6c\x79\x53\x61\x76\x65\x64\x61\x74\x61', arguments);
            else
                _0xea3a93 = _0xa15123, KDCore[_0x29b77a(0x139)](_0xea3a93);
        }
        return this;
    }
    ['\x73\x65\x74\x4d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x26df1b = '', _0x33cb62 = 0x0) {
        var _0x481b50 = _0x5f5634, _0x18422b;
        try {
            if ('\x42\x78\x58\x58\x47' === '\x42\x78\x58\x58\x47')
                this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = {
                    '\x69\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x61\x6d\x65': _0x26df1b,
                    '\x6d\x69\x78\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x33cb62
                };
            else
                return;
        } catch (_0x235c28) {
            _0x481b50(0x15d) === '\x78\x6c\x4f\x46\x50' ? (_0x23725e = _0x3984e5[0x0], _0x25b638 != null && this[_0x4bfa19] != null && this[_0x24ec80](..._0xbe40bb[0x1])) : (_0x18422b = _0x235c28, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x18422b));
        }
        return this;
    }
    [_0x5f5634(0x162)]() {
        var _0x2cd7db = _0x5f5634, _0x5deeba;
        try {
            return this[_0x2cd7db(0x13c)] != null;
        } catch (_0x23f66e) {
            _0x5deeba = _0x23f66e, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x5deeba);
        }
        return ![];
    }
    ['\x75\x6e\x62\x69\x6e\x64\x46\x72\x6f\x6d\x4d\x65\x73\x73\x61\x67\x65']() {
        var _0x5272cd = _0x5f5634, _0x3e03fe;
        try {
            this[_0x5272cd(0x13c)] = null, this[_0x5272cd(0x212)] = null, this[_0x5272cd(0x1c2)] = null, this[_0x5272cd(0x153)](!![]);
        } catch (_0x3b5097) {
            _0x3e03fe = _0x3b5097, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x3e03fe);
        }
        return this;
    }
    [_0x5f5634(0x1bc)](_0x3285ef, _0x3c4df7) {
        var _0x7949c0 = _0x5f5634, _0x56560f;
        try {
            switch (_0x3285ef) {
            case _0x7949c0(0x186):
                this[_0x7949c0(0x114)]($gameMessage);
                break;
            case _0x7949c0(0x169):
                this[_0x7949c0(0x1ce)]($gameMessage);
                break;
            case '\x63\x6f\x64\x65':
                this[_0x7949c0(0x154)]($gameMessage, _0x3c4df7);
                break;
            }
        } catch (_0x425360) {
            _0x56560f = _0x425360, KDCore[_0x7949c0(0x139)](_0x56560f);
        }
        return this;
    }
    ['\x73\x65\x74\x53\x63\x72\x69\x70\x74\x4f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65'](_0x271360, _0xfd77b6 = '') {
        var _0x282c87 = _0x5f5634, _0x675939;
        try {
            if (_0x282c87(0x150) !== _0x282c87(0x150)) {
                if (_0x1d6f6b === _0x2dd0a2)
                    return _0x4d72c4 < 0x0 ? !![] : _0x213cd3 === _0x24c32d;
            } else
                this[_0x282c87(0x1be)] == null && (this['\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65\x53\x63\x72\x69\x70\x74\x73'] = {}), _0x271360 = this[_0x282c87(0x211)](_0x271360), this[_0x282c87(0x1be)][_0xfd77b6] = _0x271360;
        } catch (_0x3ab52f) {
            _0x282c87(0x1d9) === '\x48\x56\x43\x44\x4d' ? (_0x38fd00 = _0x1df2fe[_0x282c87(0x166)](_0x24560d, _0x2eda05, _0x1c8eab, _0x4fcdd0), _0x11aa0a != null && (_0x54875d[_0x282c87(0x209)] = _0xebab31)) : (_0x675939 = _0x3ab52f, KDCore[_0x282c87(0x139)](_0x675939));
        }
        return this;
    }
    [_0x5f5634(0x165)](_0x566436, _0x1b340a = '') {
        var _0x436c19 = _0x5f5634, _0x41795c;
        try {
            if (_0x436c19(0x161) === '\x50\x46\x6d\x61\x45')
                this[_0x436c19(0x17e)] == null && (this[_0x436c19(0x17e)] = {}), _0x566436 = this[_0x436c19(0x211)](_0x566436), this[_0x436c19(0x17e)][_0x1b340a] = _0x566436;
            else {
                if (_0x1b2de2 <= 0x0) {
                    this[_0x436c19(0x16e)](0x1), this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = null;
                    return;
                }
                this[_0x436c19(0x1d2)]() ? (this['\x73\x65\x74\x41\x6c\x70\x68\x61'](0x0), this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = {
                    '\x66\x61\x64\x65\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x32b291,
                    '\x66\x61\x64\x65\x53\x74\x65\x70': 0x1 / _0x3c1ca6
                }) : this[_0x436c19(0x1a6)](_0x436c19(0x123), arguments);
            }
        } catch (_0x30c9d2) {
            _0x41795c = _0x30c9d2, KDCore[_0x436c19(0x139)](_0x41795c);
        }
        return this;
    }
    [_0x5f5634(0x136)](_0x5e5ca9, _0x594954 = '') {
        var _0x595e80 = _0x5f5634, _0x5f4714;
        try {
            if ('\x7a\x46\x74\x53\x64' === _0x595e80(0x1f0)) {
                if (this[_0x595e80(0x1e4)] == null) {
                    if (_0x595e80(0x1f8) === '\x65\x4e\x55\x6f\x65')
                        return this['\x73\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](..._0x2d22f4[_0x595e80(0x222)]);
                    else
                        this[_0x595e80(0x1e4)] = {};
                }
                _0x5e5ca9 = this[_0x595e80(0x211)](_0x5e5ca9), this[_0x595e80(0x1e4)][_0x594954] = _0x5e5ca9;
            } else
                _0x44027b = _0x44680b, _0x274a62[_0x595e80(0x139)](_0x404e5a);
        } catch (_0xbff3d3) {
            _0x5f4714 = _0xbff3d3, KDCore[_0x595e80(0x139)](_0x5f4714);
        }
        return this;
    }
    [_0x5f5634(0x1dd)](_0x5634a4, _0x5cbe8b) {
        var _0x36d14d = _0x5f5634, _0x5e27a0;
        try {
            this[_0x36d14d(0x131)] == null && (_0x36d14d(0x120) === _0x36d14d(0x120) ? this[_0x36d14d(0x131)] = {} : (_0x5b2bad = _0x2a6727, _0x3bb0f5[_0x36d14d(0x139)](_0x202c15))), _0x5cbe8b = this[_0x36d14d(0x211)](_0x5cbe8b), this[_0x36d14d(0x131)][_0x5634a4] = _0x5cbe8b;
        } catch (_0x1d9da7) {
            if (_0x36d14d(0x1a5) !== _0x36d14d(0x1ac))
                _0x5e27a0 = _0x1d9da7, KDCore[_0x36d14d(0x139)](_0x5e27a0);
            else {
                _0x174a5f = _0xdc817b[_0x9f2519];
                try {
                    _0x27f45f = _0x7689d2[0x0], _0x31f624 != null && this[_0x2c3fe2] != null && this[_0x2ab09b](..._0x170c02[0x1]);
                } catch (_0xd22814) {
                    _0x147e25 = _0xd22814, _0x127b0b[_0x36d14d(0x139)](_0x21849e);
                }
            }
        }
        return this;
    }
    [_0x5f5634(0x1f7)]() {
        var _0x471c5c = _0x5f5634, _0x4929a6;
        try {
            this[_0x471c5c(0x1be)] = {}, this[_0x471c5c(0x17e)] = {}, this['\x6f\x6e\x53\x74\x61\x72\x74\x53\x63\x72\x69\x70\x74\x73'] = {}, this[_0x471c5c(0x131)] = {};
        } catch (_0x3ac103) {
            if (_0x471c5c(0x1b9) === _0x471c5c(0x1b9))
                _0x4929a6 = _0x3ac103, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x4929a6);
            else
                return this[_0x471c5c(0x1e8)];
        }
        return this;
    }
    [_0x5f5634(0x13b)](_0x3a7cbd = 0x0, _0x3dc3d0 = 0x0) {
        var _0x1d6ad9 = _0x5f5634;
        return this[_0x1d6ad9(0x194)](_0x3a7cbd, _0x3dc3d0, null);
    }
    ['\x6d\x6f\x76\x65\x54\x6f'](_0x50062e = 0x0, _0x1f9335 = 0x0, _0x23e58c = 0x1e) {
        var _0x3576f6 = _0x5f5634, _0x1c59e3;
        try {
            if ('\x4a\x45\x69\x6c\x65' !== '\x49\x6f\x47\x66\x44')
                _0x23e58c == null ? '\x61\x66\x53\x46\x71' !== _0x3576f6(0x1a3) ? this[_0x3576f6(0x1cd)](_0x5efdbf, _0x4a876c, _0x431b96) : this[_0x3576f6(0x157)](_0x50062e, _0x1f9335) : this[_0x3576f6(0x126)](_0x50062e - this['\x78'], _0x1f9335 - this['\x79'], _0x23e58c);
            else
                return _0x3edb02 = _0x5a7738[_0x3576f6(0x171)](0x0, _0x385502['\x6c\x61\x73\x74\x49\x6e\x64\x65\x78\x4f\x66']('\x2e')) || _0x4750b4, _0x44735c[_0x3576f6(0x189)][_0x3576f6(0x1b2)](_0xd65604, 0x64, _0x4cfbae * 0x64);
        } catch (_0x5805fb) {
            if ('\x50\x75\x73\x74\x6e' !== _0x3576f6(0x1e6)) {
                var _0x340b16, _0x12e393;
                try {
                    return (_0x12e393 = this[_0x3576f6(0x192)]()) != null ? _0x12e393[_0x3576f6(0x164)] : void 0x0;
                } catch (_0x57361f) {
                    _0x340b16 = _0x57361f, _0x43e547[_0x3576f6(0x139)](_0x340b16);
                }
                return null;
            } else
                _0x1c59e3 = _0x5805fb, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x1c59e3);
        }
        return this;
    }
    ['\x6d\x6f\x76\x65\x42\x79'](_0x4b25b6 = 0x0, _0x12fd59 = 0x0, _0x1a6496 = 0x1e) {
        var _0x29e448 = _0x5f5634, _0x1e1b42;
        try {
            this[_0x29e448(0x142)](_0x4b25b6, _0x12fd59, _0x1a6496);
        } catch (_0x177233) {
            _0x1e1b42 = _0x177233, KDCore[_0x29e448(0x139)](_0x1e1b42);
        }
        return this;
    }
    [_0x5f5634(0x18d)](_0x56266e = 0x1, _0x35db80 = null) {
        var _0x1950f5 = _0x5f5634, _0x177a99;
        try {
            if (this[_0x1950f5(0x1d2)]()) {
                this[_0x1950f5(0x20d)]['\x78'] = _0x56266e;
                if (_0x35db80 != null)
                    this[_0x1950f5(0x20d)]['\x79'] = _0x35db80;
                else {
                    if (_0x1950f5(0x21c) === _0x1950f5(0x21c))
                        this[_0x1950f5(0x20d)]['\x79'] = _0x56266e;
                    else
                        return _0x1a3fe2(this[_0x1950f5(0x131)][_0x88bfe2['\x6e\x61\x6d\x65']]);
                }
            } else
                this['\x5f\x72\x65\x71\x75\x69\x72\x65\x46\x75\x6e\x63'](_0x1950f5(0x18d), arguments);
        } catch (_0xd3118c) {
            if (_0x1950f5(0x134) !== _0x1950f5(0x134)) {
                var _0x58fb19;
                try {
                    return this[_0x1950f5(0x13c)] != null;
                } catch (_0x2dca73) {
                    _0x58fb19 = _0x2dca73, _0x287a26[_0x1950f5(0x139)](_0x58fb19);
                }
                return ![];
            } else
                _0x177a99 = _0xd3118c, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x177a99), this[_0x1950f5(0x20d)][_0x1950f5(0x1a9)](0x1);
        }
        return this;
    }
    [_0x5f5634(0x16e)](_0x49b4b8 = 0x1) {
        var _0x4a564c = _0x5f5634, _0x541b18;
        try {
            if (_0x4a564c(0x220) === _0x4a564c(0x220)) {
                if (_0x49b4b8 >= 0x1)
                    this[_0x4a564c(0x135)](_0x4a564c(0x1eb));
                else {
                    if (_0x49b4b8 < 0x0) {
                        if ('\x56\x76\x4e\x58\x63' !== _0x4a564c(0x208))
                            return _0x1a825b = _0x132e91, _0x77c3c4[_0x4a564c(0x139)](_0x47a2d1);
                        else
                            _0x49b4b8 = 0x0;
                    }
                    this[_0x4a564c(0x14b)](_0x4a564c(0x1eb), [_0x49b4b8]);
                }
                this[_0x4a564c(0x145)] = _0x49b4b8;
            } else
                this[_0x4a564c(0x1be)] = {}, this[_0x4a564c(0x17e)] = {}, this['\x6f\x6e\x53\x74\x61\x72\x74\x53\x63\x72\x69\x70\x74\x73'] = {}, this[_0x4a564c(0x131)] = {};
        } catch (_0x4bb2b0) {
            if ('\x6a\x69\x53\x75\x41' === '\x6a\x69\x53\x75\x41')
                _0x541b18 = _0x4bb2b0, KDCore[_0x4a564c(0x139)](_0x541b18);
            else
                return _0x5e7f7f = _0x48afd2, _0x51ea34['\x77\x61\x72\x6e\x69\x6e\x67'](_0x172f86);
        }
        return this;
    }
    [_0x5f5634(0x21d)](_0x53fc7a = 0x1) {
        var _0x420fb9 = _0x5f5634, _0x22b75f, _0x4dc357;
        try {
            this[_0x420fb9(0x1d2)]() ? (_0x4dc357 = this['\x67\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65']()) != null && (_0x4dc357[_0x420fb9(0x1c1)] = _0x53fc7a) : this['\x5f\x72\x65\x71\x75\x69\x72\x65\x46\x75\x6e\x63']('\x73\x65\x74\x54\x69\x6d\x65\x53\x63\x61\x6c\x65', arguments);
        } catch (_0x2c53ed) {
            _0x22b75f = _0x2c53ed, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x22b75f);
        }
        return this;
    }
    [_0x5f5634(0x123)](_0x1f2d6a = 0x3c) {
        var _0x37f301 = _0x5f5634, _0x2467fc;
        try {
            if (_0x1f2d6a <= 0x0) {
                this[_0x37f301(0x16e)](0x1), this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = null;
                return;
            }
            this[_0x37f301(0x1d2)]() ? (this[_0x37f301(0x16e)](0x0), this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = {
                '\x66\x61\x64\x65\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x1f2d6a,
                '\x66\x61\x64\x65\x53\x74\x65\x70': 0x1 / _0x1f2d6a
            }) : this[_0x37f301(0x1a6)](_0x37f301(0x123), arguments);
        } catch (_0x3a90b5) {
            _0x2467fc = _0x3a90b5, KDCore[_0x37f301(0x139)](_0x2467fc);
        }
        return this;
    }
    [_0x5f5634(0x13f)](_0x42cefb = 0x3c, _0xe40b6b = ![]) {
        var _0x3803d9 = _0x5f5634, _0x571a5f;
        try {
            if (_0x3803d9(0x213) === _0x3803d9(0x20e))
                _0x257cad = _0x3a3327, _0x162db0[_0x3803d9(0x139)](_0x460879);
            else {
                if (_0x42cefb <= 0x0) {
                    if (_0x3803d9(0x19a) !== _0x3803d9(0x19c)) {
                        this[_0x3803d9(0x16e)](0x0), this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = null;
                        if (_0xe40b6b === !![]) {
                            if (_0x3803d9(0x190) !== _0x3803d9(0x110))
                                RemoveSAnim(this['\x69\x64']);
                            else
                                return _0x19a152 = _0x2088ec, _0x35fd2d[_0x3803d9(0x139)](_0x244742);
                        }
                        return;
                    } else
                        return;
                }
                this[_0x3803d9(0x1d2)]() ? (this[_0x3803d9(0x16e)](0x1), this[_0x3803d9(0x1dc)] = {
                    '\x66\x61\x64\x65\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x42cefb,
                    '\x66\x61\x64\x65\x53\x74\x65\x70': 0x1 / _0x42cefb * -0x1,
                    '\x69\x73\x52\x65\x6d\x6f\x76\x65\x41\x66\x74\x65\x72\x46\x61\x64\x65': _0xe40b6b
                }) : this['\x5f\x72\x65\x71\x75\x69\x72\x65\x46\x75\x6e\x63'](_0x3803d9(0x13f), arguments);
            }
        } catch (_0x3b3627) {
            '\x76\x65\x42\x74\x4a' !== '\x76\x65\x42\x74\x4a' ? (_0xe1c22c = _0x5e7f0c, _0x309521[_0x3803d9(0x139)](_0x45d6c6)) : (_0x571a5f = _0x3b3627, KDCore[_0x3803d9(0x139)](_0x571a5f));
        }
        return this;
    }
    [_0x5f5634(0x11f)](_0x45ec2d = '', _0x9c6c1c = ![], _0x187c57 = 0x0, _0x562007 = 0x0) {
        var _0x50d016 = _0x5f5634, _0x4b445b, _0xdab8e9, _0x488f49;
        try {
            if (_0x50d016(0x1c9) === '\x63\x4d\x42\x47\x65')
                return _0x3f7e44(_0x366ffa['']);
            else {
                if (this[_0x50d016(0x1d2)]()) {
                    if (_0x50d016(0x1f9) === _0x50d016(0x151))
                        (_0x19b45d = this[_0x50d016(0x1de)]()) != null && (_0x303785[_0x50d016(0x1c1)] = _0x565e92);
                    else {
                        if (!String[_0x50d016(0x1e5)](_0x45ec2d)) {
                            if (_0x50d016(0x12b) !== _0x50d016(0x1e0))
                                this['\x73\x74\x6f\x70\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x187c57, _0x562007);
                            else
                                return this[_0x50d016(0x135)](_0x50d016(0x199));
                        } else {
                            _0xdab8e9 = this[_0x50d016(0x1de)]();
                            if (_0xdab8e9 == null) {
                                if ('\x69\x4f\x55\x55\x70' !== _0x50d016(0x193)) {
                                    var _0x355593, _0x190d99;
                                    try {
                                        return _0x190d99 = new _0x583ca2(_0x246d90, _0x4adae1), _0x190d99;
                                    } catch (_0x4b0c97) {
                                        return _0x355593 = _0x4b0c97, _0x56d8af[_0x50d016(0x139)](_0x355593), null;
                                    }
                                } else
                                    return;
                            }
                            if (_0xdab8e9['\x68\x61\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x45ec2d))
                                _0x488f49 = _0xdab8e9[_0x50d016(0x11f)](_0x562007, _0x45ec2d, _0x9c6c1c), _0x488f49 != null && (_0x488f49['\x6d\x69\x78\x44\x75\x72\x61\x74\x69\x6f\x6e'] = _0x187c57);
                            else {
                                if (_0x50d016(0x1f4) === _0x50d016(0x1f4))
                                    KDCore[_0x50d016(0x139)](_0x50d016(0x13a) + _0x45ec2d + _0x50d016(0x116) + this[_0x50d016(0x1af)]);
                                else
                                    return !![];
                            }
                        }
                    }
                } else
                    this[_0x50d016(0x1a6)](_0x50d016(0x11f), arguments);
            }
        } catch (_0x5ea5a1) {
            _0x4b445b = _0x5ea5a1, KDCore[_0x50d016(0x139)](_0x4b445b);
        }
        return this;
    }
    [_0x5f5634(0x166)](_0x78c7d3 = '', _0xefb726 = ![], _0x28346a = 0x0, _0x471af7 = 0x0, _0x22b1b1 = 0x0) {
        var _0x33b4b1 = _0x5f5634, _0x4abc65, _0x528c3a, _0x2f5c38;
        try {
            if (this[_0x33b4b1(0x1d2)]()) {
                if (_0x33b4b1(0x179) !== _0x33b4b1(0x17a)) {
                    if (!String['\x61\x6e\x79'](_0x78c7d3))
                        '\x4c\x6c\x70\x5a\x76' === _0x33b4b1(0x218) ? _0x21f295[_0x33b4b1(0x209)] = _0x48a948 : this[_0x33b4b1(0x1cd)](_0x28346a, _0x471af7, _0x22b1b1);
                    else {
                        _0x528c3a = this['\x67\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65']();
                        if (_0x528c3a == null) {
                            if (_0x33b4b1(0x121) === '\x70\x52\x79\x50\x71')
                                return;
                            else
                                _0x487b66 = _0xf6568f, _0xbb89d4['\x77\x61\x72\x6e\x69\x6e\x67'](_0x37c85c);
                        }
                        _0x528c3a['\x68\x61\x73\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x78c7d3) ? (_0x2f5c38 = _0x528c3a[_0x33b4b1(0x166)](_0x22b1b1, _0x78c7d3, _0xefb726, _0x28346a), _0x2f5c38 != null && (_0x2f5c38[_0x33b4b1(0x209)] = _0x471af7)) : KDCore[_0x33b4b1(0x139)](_0x33b4b1(0x13a) + _0x78c7d3 + '\x20\x6e\x6f\x74\x20\x66\x6f\x75\x6e\x64\x20\x69\x6e\x20' + this[_0x33b4b1(0x1af)]);
                    }
                } else
                    _0x59d22c = _0x4e5cff, _0x27cc42['\x77\x61\x72\x6e\x69\x6e\x67'](_0x355624);
            } else
                _0x33b4b1(0x1cf) === '\x56\x48\x76\x69\x44' ? ([_0x20cdbd, _0x321e47] = _0x49e096[_0x33b4b1(0x1a1)]('\x3a'), _0x162e45 = _0x4f1bd4(_0x41236f)) : this[_0x33b4b1(0x1a6)]('\x61\x64\x64\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e', arguments);
        } catch (_0x18be62) {
            _0x4abc65 = _0x18be62, KDCore[_0x33b4b1(0x139)](_0x4abc65);
        }
        return this;
    }
    ['\x73\x74\x6f\x70\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x546607 = 0x0, _0x3561dd = 0x0) {
        var _0x358904 = _0x5f5634, _0x275d7d, _0xf6cd14;
        try {
            this[_0x358904(0x222)] = null;
            if (this[_0x358904(0x1d2)]()) {
                _0xf6cd14 = this[_0x358904(0x1de)]();
                if (_0xf6cd14 == null) {
                    if ('\x45\x72\x49\x57\x57' !== _0x358904(0x15b))
                        _0x51a378 = _0x48b50b, _0x47a44c['\x77\x61\x72\x6e\x69\x6e\x67'](_0x10ec5f);
                    else
                        return;
                }
                _0xf6cd14[_0x358904(0x1b3)](_0x3561dd, _0x546607);
            } else
                this[_0x358904(0x1a6)]('\x73\x74\x6f\x70\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e', arguments);
        } catch (_0x5307cf) {
            '\x4d\x6e\x41\x6a\x4b' !== _0x358904(0x147) ? (_0x37fe7c = _0x2c6c7d, _0xf91528['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2d6b22)) : (_0x275d7d = _0x5307cf, KDCore[_0x358904(0x139)](_0x275d7d));
        }
        return this;
    }
    [_0x5f5634(0x1cd)](_0x44abe0 = 0x0, _0x57c032 = 0x0, _0x1f7a7c = 0x0) {
        var _0xf1388a = _0x5f5634, _0x95f33e, _0x5ecfcd;
        try {
            if (this[_0xf1388a(0x1d2)]()) {
                _0x5ecfcd = this[_0xf1388a(0x1de)]();
                if (_0x5ecfcd == null)
                    return;
                _0x5ecfcd['\x61\x64\x64\x45\x6d\x70\x74\x79\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x1f7a7c, _0x57c032, _0x44abe0);
            } else
                this[_0xf1388a(0x1a6)](_0xf1388a(0x1cd), arguments);
        } catch (_0x43e9e0) {
            _0x95f33e = _0x43e9e0, KDCore[_0xf1388a(0x139)](_0x95f33e);
        }
        return this;
    }
    [_0x5f5634(0x203)](_0x33557f, _0x9fb312 = '') {
        var _0x4458ed = _0x5f5634, _0x32ad5f;
        this[_0x4458ed(0x1b0)] = _0x33557f;
        try {
            if (this[_0x4458ed(0x1b0)] == null)
                return;
            return this[_0x4458ed(0x204)] = _0x9fb312 || '';
        } catch (_0x5ed545) {
            return '\x65\x45\x7a\x71\x6d' !== _0x4458ed(0x159) ? (_0x32ad5f = _0x5ed545, KDCore[_0x4458ed(0x139)](_0x32ad5f)) : (_0x19835f = _0x292d4f, _0x4e42f2['\x77\x61\x72\x6e\x69\x6e\x67'](_0x319068));
        }
    }
    [_0x5f5634(0x192)]() {
        var _0x1e7f8a = _0x5f5634;
        return this[_0x1e7f8a(0x1e8)];
    }
    [_0x5f5634(0x1de)]() {
        var _0x3b24c7 = _0x5f5634, _0x378d40, _0x516feb;
        try {
            return (_0x516feb = this[_0x3b24c7(0x192)]()) != null ? _0x516feb[_0x3b24c7(0x164)] : void 0x0;
        } catch (_0x3f2dcf) {
            _0x378d40 = _0x3f2dcf, KDCore[_0x3b24c7(0x139)](_0x378d40);
        }
        return null;
    }
    [_0x5f5634(0x15a)]() {
        var _0x31a0f1 = _0x5f5634, _0x5256d0, _0x1140b3, _0x106082;
        if (!this['\x69\x73\x4c\x6f\x61\x64\x65\x64']()) {
            if (_0x31a0f1(0x1fe) !== _0x31a0f1(0x128))
                return [];
            else {
                _0x40defb = this[_0x31a0f1(0x1de)]();
                if (_0xe5bdff == null)
                    return [];
                return _0x387f67 = _0x439896[_0x31a0f1(0x112)]['\x73\x6b\x65\x6c\x65\x74\x6f\x6e\x44\x61\x74\x61']['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x73'], _0x13f989['\x6d\x61\x70'](function (_0x1efed6) {
                    return _0x1efed6['\x6e\x61\x6d\x65'];
                });
            }
        }
        try {
            if (_0x31a0f1(0x1fb) === '\x68\x72\x66\x75\x6e') {
                _0x106082 = this[_0x31a0f1(0x1de)]();
                if (_0x106082 == null) {
                    if (_0x31a0f1(0x1d7) === _0x31a0f1(0x129))
                        return;
                    else
                        return [];
                }
                return _0x5256d0 = _0x106082[_0x31a0f1(0x112)][_0x31a0f1(0x1b4)][_0x31a0f1(0x141)], _0x5256d0[_0x31a0f1(0x202)](function (_0x169c7b) {
                    var _0x5161b5 = _0x31a0f1;
                    return _0x169c7b[_0x5161b5(0x215)];
                });
            } else {
                this[_0x31a0f1(0x222)] = null;
                if (this['\x69\x73\x4c\x6f\x61\x64\x65\x64']()) {
                    _0xed02c2 = this[_0x31a0f1(0x1de)]();
                    if (_0xc7f57a == null)
                        return;
                    _0x337bac['\x73\x65\x74\x45\x6d\x70\x74\x79\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'](_0x251f55, _0x57aeb9);
                } else
                    this[_0x31a0f1(0x1a6)](_0x31a0f1(0x20c), arguments);
            }
        } catch (_0xf0917e) {
            _0x1140b3 = _0xf0917e, KDCore[_0x31a0f1(0x139)](_0x1140b3);
        }
        return [];
    }
    [_0x5f5634(0x1f6)]() {
        var _0x56d60a = _0x5f5634, _0x5b6e86;
        super[_0x56d60a(0x1f6)]();
        try {
            if (this[_0x56d60a(0x1dc)] != null) {
                if (_0x56d60a(0x1d1) !== _0x56d60a(0x19f))
                    return this[_0x56d60a(0x130)]();
                else {
                    var _0x489b18;
                    try {
                        return this[_0x56d60a(0x177)] == null && (this[_0x56d60a(0x177)] = []), this[_0x56d60a(0x177)][_0x56d60a(0x124)]([
                            _0x5a4c53,
                            _0x1c8b84
                        ]);
                    } catch (_0x4e4c09) {
                        return _0x489b18 = _0x4e4c09, _0x44441c[_0x56d60a(0x139)](_0x489b18);
                    }
                }
            }
        } catch (_0x131556) {
            return _0x5b6e86 = _0x131556, KDCore[_0x56d60a(0x139)](_0x5b6e86);
        }
    }
    [_0x5f5634(0x12a)]() {
        var _0x3d54ee = _0x5f5634, _0x32088f;
        try {
            this[_0x3d54ee(0x122)](), $gameTemp[_0x3d54ee(0x117)](this['\x69\x64']), PKD_SpineAnimations[_0x3d54ee(0x1d8)]()[_0x3d54ee(0x1cc)](this['\x69\x64'], this[_0x3d54ee(0x111)]());
        } catch (_0x4eeeb5) {
            _0x32088f = _0x4eeeb5, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x32088f);
        }
        return super[_0x3d54ee(0x12a)]();
    }
    [_0x5f5634(0x1e1)]() {
        var _0x47ddb4 = _0x5f5634, _0x2e383e, _0x3e3bce, _0x253621;
        try {
            if (_0x47ddb4(0x11a) === '\x61\x66\x70\x61\x4b')
                return this[_0x47ddb4(0x21e)] = ![], _0x253621 = new PIXI[(_0x47ddb4(0x148))](), _0x3e3bce = this['\x66\x69\x6c\x65\x6e\x61\x6d\x65'] + '\x2f' + this[_0x47ddb4(0x1af)] + _0x47ddb4(0x198), _0x253621[_0x47ddb4(0x1e3)](this['\x69\x64'], _0x47ddb4(0x200) + _0x3e3bce, { '\x63\x72\x6f\x73\x73\x4f\x72\x69\x67\x69\x6e': !![] })[_0x47ddb4(0x1f2)](this[_0x47ddb4(0x125)]['\x62\x69\x6e\x64'](this)), this[_0x47ddb4(0x115)] = _0x253621;
            else
                this[_0x47ddb4(0x20d)]['\x79'] = _0x560fc1;
        } catch (_0x25978a) {
            return _0x2e383e = _0x25978a, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2e383e);
        }
    }
    ['\x5f\x6f\x6e\x41\x73\x73\x65\x74\x73\x4c\x6f\x61\x64\x65\x64']() {
        var _0x4e0c48 = _0x5f5634, _0xc38214, _0x4656b4, _0x157dc6;
        try {
            _0x157dc6 = this[_0x4e0c48(0x115)][_0x4e0c48(0x1b7)][this['\x69\x64']]['\x73\x70\x69\x6e\x65\x44\x61\x74\x61'], _0x4656b4 = new PIXI[(_0x4e0c48(0x1e8))][(_0x4e0c48(0x146))](_0x157dc6), this[_0x4e0c48(0x13d)](_0x4656b4), this[_0x4e0c48(0x1e8)] = _0x4656b4, this[_0x4e0c48(0x21e)] = !![], this[_0x4e0c48(0x115)] = null, this[_0x4e0c48(0x1ad)]();
        } catch (_0xe7359d) {
            _0xc38214 = _0xe7359d, KDCore[_0x4e0c48(0x139)](_0xc38214), this[_0x4e0c48(0x21e)] = ![];
        }
        this[_0x4e0c48(0x21e)] === !![] && (_0x4e0c48(0x19b) !== _0x4e0c48(0x19b) ? _0x29f684(this['\x69\x64']) : this[_0x4e0c48(0x1d5)]());
    }
    [_0x5f5634(0x1ad)]() {
        var _0x1d93a0 = _0x5f5634, _0x993150;
        try {
            return this[_0x1d93a0(0x1e8)]['\x73\x74\x61\x74\x65'][_0x1d93a0(0x214)]({
                '\x65\x76\x65\x6e\x74': (_0xd849b, _0x34efb1) => {
                    var _0x1c8b61 = _0x1d93a0;
                    if (_0x1c8b61(0x20a) !== _0x1c8b61(0x20a)) {
                        _0x534153 = this[_0x1c8b61(0x1de)]();
                        if (_0x2eea11 == null)
                            return;
                        _0x231856[_0x1c8b61(0x132)](_0x170f09, _0x1a7ed6, _0x48f532);
                    } else
                        return this['\x5f\x6f\x6e\x45\x76\x65\x6e\x74'](_0xd849b, _0x34efb1[_0x1c8b61(0x112)]);
                },
                '\x63\x6f\x6d\x70\x6c\x65\x74\x65': _0x26cee3 => {
                    return '\x49\x47\x4a\x67\x54' === '\x48\x55\x6c\x6e\x70' ? (_0x32969d = new _0x22e403(_0x3f15df, _0x412740), _0x423911) : this['\x5f\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65'](_0x26cee3);
                },
                '\x73\x74\x61\x72\x74': _0x50ce2f => {
                    var _0x46f245 = _0x1d93a0;
                    if ('\x6c\x5a\x76\x52\x74' === _0x46f245(0x1a7))
                        return this['\x5f\x6f\x6e\x53\x74\x61\x72\x74'](_0x50ce2f);
                    else
                        return;
                },
                '\x65\x6e\x64': _0x3a146c => {
                    var _0x31344c = _0x1d93a0;
                    return this[_0x31344c(0x1fa)](_0x3a146c);
                }
            });
        } catch (_0x300ff2) {
            return _0x1d93a0(0x1cb) === _0x1d93a0(0x1c6) ? this[_0x1d93a0(0x14b)](_0x1d93a0(0x199), [
                0x0,
                0.5
            ]) : (_0x993150 = _0x300ff2, KDCore[_0x1d93a0(0x139)](_0x993150));
        }
    }
    [_0x5f5634(0x180)](_0x200c1a) {
        var _0x315c6a = _0x5f5634, _0x45dcbf, _0x256034, _0xbc5929, _0x176ba7;
        try {
            if (_0x315c6a(0x18f) === '\x52\x65\x73\x71\x77') {
                _0x200c1a != null && ({
                    animation: _0x45dcbf,
                    mixDuration: _0xbc5929,
                    trackIndex: _0x176ba7
                } = _0x200c1a, this[_0x315c6a(0x222)] = [
                    _0x45dcbf[_0x315c6a(0x215)],
                    _0x200c1a[_0x315c6a(0x158)],
                    _0xbc5929,
                    _0x176ba7
                ]);
                if (this[_0x315c6a(0x1e4)] != null) {
                    if (_0x315c6a(0x155) !== _0x315c6a(0x155))
                        ({
                            animation: _0x42aa63,
                            mixDuration: _0x33863d,
                            trackIndex: _0x21bc40
                        } = _0x96f423, this[_0x315c6a(0x222)] = [
                            _0x101dc9[_0x315c6a(0x215)],
                            _0x17b297['\x6c\x6f\x6f\x70'],
                            _0x206498,
                            _0x4bb083
                        ]);
                    else
                        return this[_0x315c6a(0x1ea)](this[_0x315c6a(0x1e4)], _0x200c1a);
                }
            } else
                return;
        } catch (_0x414c58) {
            return _0x256034 = _0x414c58, KDCore[_0x315c6a(0x139)](_0x256034);
        }
    }
    ['\x5f\x6f\x6e\x45\x6e\x64'](_0x5ee55d) {
        var _0x3ea2f4 = _0x5f5634, _0x1e676c;
        try {
            this[_0x3ea2f4(0x222)] = null;
            if (this[_0x3ea2f4(0x17e)] != null)
                return this[_0x3ea2f4(0x1ea)](this[_0x3ea2f4(0x17e)], _0x5ee55d);
        } catch (_0x3e6e8a) {
            if ('\x46\x7a\x70\x50\x6e' !== '\x54\x6c\x67\x6c\x51')
                return _0x1e676c = _0x3e6e8a, KDCore[_0x3ea2f4(0x139)](_0x1e676c);
            else
                _0x518aa2 = _0x371d47, _0x3c92bf['\x77\x61\x72\x6e\x69\x6e\x67'](_0x5f3ea2);
        }
    }
    ['\x5f\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65'](_0x18d010) {
        var _0x4db47e = _0x5f5634, _0x14dee0;
        try {
            if (_0x4db47e(0x1f3) !== _0x4db47e(0x1d0)) {
                this['\x6f\x6e\x43\x6f\x6d\x70\x6c\x65\x74\x65\x53\x63\x72\x69\x70\x74\x73'] != null && this['\x5f\x65\x78\x65\x63\x75\x74\x65\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74'](this[_0x4db47e(0x1be)], _0x18d010);
                if (this[_0x4db47e(0x1b0)] != null) {
                    if ('\x4d\x55\x64\x57\x7a' === _0x4db47e(0x1ff))
                        _0x2bc90e[_0x4db47e(0x1c1)] = _0x1156cc;
                    else
                        return this[_0x4db47e(0x18c)](_0x18d010);
                }
            } else
                this[_0x4db47e(0x177)] = [];
        } catch (_0x5dd3f1) {
            return _0x4db47e(0x21f) !== _0x4db47e(0x21f) ? '\x24\x67\x61\x6d\x65\x54\x65\x6d\x70\x2e\x72\x65\x73\x65\x72\x76\x65\x43\x6f\x6d\x6d\x6f\x6e\x45\x76\x65\x6e\x74\x28' + _0x42abdc + '\x29' : (_0x14dee0 = _0x5dd3f1, KDCore[_0x4db47e(0x139)](_0x14dee0));
        }
    }
    [_0x5f5634(0x16d)](_0xe935ee, _0x29f581) {
        var _0x39f35e = _0x5f5634, _0x866052;
        try {
            if (_0x39f35e(0x144) !== '\x43\x57\x4b\x53\x69') {
                if (_0x29f581 == null) {
                    if (_0x39f35e(0x184) !== _0x39f35e(0x184)) {
                        var _0x596832, _0x3a82f7, _0x54c7e8;
                        try {
                            _0x54c7e8 = this['\x5f\x6c\x6f\x61\x64\x65\x72']['\x72\x65\x73\x6f\x75\x72\x63\x65\x73'][this['\x69\x64']][_0x39f35e(0x11b)], _0x3a82f7 = new _0x2ad43e[(_0x39f35e(0x1e8))][(_0x39f35e(0x146))](_0x54c7e8), this['\x61\x64\x64\x43\x68\x69\x6c\x64'](_0x3a82f7), this['\x73\x70\x69\x6e\x65'] = _0x3a82f7, this['\x5f\x63\x72\x65\x61\x74\x65\x64'] = !![], this[_0x39f35e(0x115)] = null, this['\x5f\x61\x70\x70\x6c\x79\x4c\x69\x73\x74\x65\x6e\x65\x72\x73']();
                        } catch (_0x1dbb45) {
                            _0x596832 = _0x1dbb45, _0x321191['\x77\x61\x72\x6e\x69\x6e\x67'](_0x596832), this[_0x39f35e(0x21e)] = ![];
                        }
                        this[_0x39f35e(0x21e)] === !![] && this['\x5f\x61\x70\x70\x6c\x79\x52\x65\x71\x75\x69\x72\x65\x64\x44\x61\x74\x61']();
                    } else
                        return;
                }
                if (String[_0x39f35e(0x1e5)](_0x29f581[_0x39f35e(0x118)])) {
                    if (_0x39f35e(0x21b) === _0x39f35e(0x21b))
                        this['\x5f\x70\x6c\x61\x79\x53\x6f\x75\x6e\x64'](_0x29f581[_0x39f35e(0x118)], _0x29f581[_0x39f35e(0x187)] || 0x1);
                    else
                        return _0x2ebb1d = _0x105d5f, _0x574e5a[_0x39f35e(0x139)](_0x31ef6);
                }
                if (this[_0x39f35e(0x131)] != null && this[_0x39f35e(0x131)][_0x29f581[_0x39f35e(0x215)]])
                    return eval(this['\x6f\x6e\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74\x73'][_0x29f581[_0x39f35e(0x215)]]);
            } else {
                _0x1e7e4b = _0xa024a8[_0x39f35e(0x20b)][0x0];
                if (_0x5751c3 != null && _0x1ff4e3[_0x39f35e(0x19e)] != null)
                    return _0x9f146a['\x61\x6e\x69\x6d\x61\x74\x69\x6f\x6e']['\x6e\x61\x6d\x65'];
            }
        } catch (_0x184dcf) {
            return _0x866052 = _0x184dcf, KDCore[_0x39f35e(0x139)](_0x866052);
        }
    }
    [_0x5f5634(0x137)](_0x232c28, _0x22fba0) {
        var _0x3cebe8 = _0x5f5634, _0x50455b, _0x13d12e;
        try {
            return _0x13d12e = _0x232c28['\x73\x75\x62\x73\x74\x72\x69\x6e\x67'](0x0, _0x232c28[_0x3cebe8(0x1a0)]('\x2e')) || _0x232c28, KDCore[_0x3cebe8(0x189)][_0x3cebe8(0x1b2)](_0x13d12e, 0x64, _0x22fba0 * 0x64);
        } catch (_0x45bafb) {
            return '\x72\x67\x69\x73\x4e' !== _0x3cebe8(0x172) ? (_0x50455b = _0x45bafb, KDCore[_0x3cebe8(0x139)](_0x50455b)) : (_0x2638c8 = _0x167117, _0xe84ef1[_0x3cebe8(0x139)](_0x1ffcc0));
        }
    }
    [_0x5f5634(0x1d5)]() {
        var _0x4c7cf8 = _0x5f5634, _0x5c4515, _0x31cb4a, _0x55e872, _0x162300, _0x5eb402, _0xbe6668;
        try {
            if (_0x4c7cf8(0x1ef) === _0x4c7cf8(0x1ef)) {
                if (this[_0x4c7cf8(0x177)] == null)
                    return;
                _0xbe6668 = this['\x5f\x72\x65\x71\x75\x69\x72\x65\x64\x46\x75\x6e\x63\x73'];
                for (_0x162300 = 0x0, _0x5eb402 = _0xbe6668[_0x4c7cf8(0x207)]; _0x162300 < _0x5eb402; _0x162300++) {
                    _0x55e872 = _0xbe6668[_0x162300];
                    try {
                        _0x5c4515 = _0x55e872[0x0], _0x5c4515 != null && this[_0x5c4515] != null && this[_0x5c4515](..._0x55e872[0x1]);
                    } catch (_0x356a16) {
                        _0x31cb4a = _0x356a16, KDCore[_0x4c7cf8(0x139)](_0x31cb4a);
                    }
                }
                return this[_0x4c7cf8(0x177)] = null;
            } else
                this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x54\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = {
                    '\x74\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x4e\x61\x6d\x65': _0x1c4e9f,
                    '\x6d\x69\x78\x44\x75\x72\x61\x74\x69\x6f\x6e': _0x45a34e
                };
        } catch (_0x596fa9) {
            return _0x31cb4a = _0x596fa9, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x31cb4a);
        }
    }
    [_0x5f5634(0x1a6)](_0x1fdaa7, _0x2627ef) {
        var _0x488038 = _0x5f5634, _0x476b94;
        try {
            return this[_0x488038(0x177)] == null && (this['\x5f\x72\x65\x71\x75\x69\x72\x65\x64\x46\x75\x6e\x63\x73'] = []), this[_0x488038(0x177)]['\x70\x75\x73\x68']([
                _0x1fdaa7,
                _0x2627ef
            ]);
        } catch (_0x118d31) {
            return _0x476b94 = _0x118d31, KDCore[_0x488038(0x139)](_0x476b94);
        }
    }
    ['\x5f\x70\x72\x6f\x63\x65\x73\x73\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74'](_0x5ee3c0) {
        var _0x4654d7 = _0x5f5634, _0x4ed81f, _0x528991;
        try {
            if (_0x4654d7(0x1aa) === _0x4654d7(0x10c)) {
                _0x3ddaaf = _0x36d1a5(_0x497f5b);
                if (_0x20d652[_0x4654d7(0x189)]['\x69\x73\x56\x61\x6c\x69\x64\x43\x45'](_0x3feeaf))
                    return _0x4654d7(0x17d) + _0xda613 + '\x29';
            } else {
                if (_0x5ee3c0 == null)
                    return null;
                if (!String[_0x4654d7(0x1e5)](_0x5ee3c0)) {
                    if (_0x4654d7(0x1bf) !== _0x4654d7(0x15c))
                        return null;
                    else
                        return;
                }
                if (isFinite(_0x5ee3c0)) {
                    _0x528991 = parseInt(_0x5ee3c0);
                    if (KDCore['\x55\x74\x69\x6c\x73']['\x69\x73\x56\x61\x6c\x69\x64\x43\x45'](_0x528991)) {
                        if ('\x52\x74\x78\x7a\x69' === '\x6c\x72\x55\x56\x67')
                            _0x47d8fc < 0x0 && (_0x45f390 = 0x0), this[_0x4654d7(0x14b)](_0x4654d7(0x1eb), [_0xa80f86]);
                        else
                            return _0x4654d7(0x17d) + _0x528991 + '\x29';
                    }
                } else
                    return _0x5ee3c0;
            }
        } catch (_0x5ec554) {
            '\x46\x62\x51\x6d\x73' !== _0x4654d7(0x1da) ? (_0x4ed81f = _0x5ec554, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x4ed81f)) : (_0x19dbff = _0x50c542, _0xfe15ea[_0x4654d7(0x139)](_0x5eeb08));
        }
        return null;
    }
    [_0x5f5634(0x1ea)](_0x2a7268, _0xf0bbe5) {
        var _0x2acb4e = _0x5f5634, _0x530a6b, _0x273e65;
        try {
            if (_0x2acb4e(0x15e) !== '\x4e\x4a\x58\x50\x4e') {
                if (_0x2a7268 == null)
                    return;
                if (_0xf0bbe5 != null && _0xf0bbe5[_0x2acb4e(0x19e)] != null && String[_0x2acb4e(0x1e5)](_0xf0bbe5[_0x2acb4e(0x19e)][_0x2acb4e(0x215)])) {
                    if ('\x6d\x68\x67\x77\x48' !== _0x2acb4e(0x195))
                        return _0xf8521c = _0x4845eb, _0x3374ee['\x77\x61\x72\x6e\x69\x6e\x67'](_0x347c5b);
                    else {
                        _0x273e65 = _0xf0bbe5[_0x2acb4e(0x19e)]['\x6e\x61\x6d\x65'];
                        if (String['\x61\x6e\x79'](_0x2a7268[_0x273e65])) {
                            eval(_0x2a7268[_0x273e65]);
                            return;
                        }
                    }
                }
                if (String['\x61\x6e\x79'](_0x2a7268['']))
                    return _0x2acb4e(0x1c0) === '\x45\x5a\x70\x66\x70' ? (_0x5dd349 = _0x511c38, _0x1318f5['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2ca4a7), this[_0x2acb4e(0x1dc)] = null) : eval(_0x2a7268['']);
            } else {
                this['\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65'] = null;
                if (this[_0x2acb4e(0x17e)] != null)
                    return this[_0x2acb4e(0x1ea)](this[_0x2acb4e(0x17e)], _0x3ff451);
            }
        } catch (_0x3d877d) {
            return _0x530a6b = _0x3d877d, KDCore[_0x2acb4e(0x139)](_0x530a6b);
        }
    }
    [_0x5f5634(0x18c)](_0x4ba93c) {
        var _0x159b7f = _0x5f5634, _0x3a290e, _0x322884;
        try {
            if (this['\x69\x6e\x74\x65\x72\x70\x65\x72\x65\x74\x65\x72'] == null)
                return;
            if (this[_0x159b7f(0x204)] === '')
                return this[_0x159b7f(0x16f)]();
            else {
                if (_0x4ba93c != null && _0x4ba93c[_0x159b7f(0x19e)] != null && String['\x61\x6e\x79'](_0x4ba93c[_0x159b7f(0x19e)][_0x159b7f(0x215)])) {
                    _0x322884 = _0x4ba93c[_0x159b7f(0x19e)]['\x6e\x61\x6d\x65'];
                    if (_0x322884 === this[_0x159b7f(0x204)]) {
                        if (_0x159b7f(0x1a2) !== _0x159b7f(0x1a2))
                            this[_0x159b7f(0x142)](_0x1f735d, _0x1910d9, _0x358011);
                        else
                            return this[_0x159b7f(0x16f)]();
                    }
                }
            }
        } catch (_0x2920a8) {
            return _0x3a290e = _0x2920a8, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x3a290e);
        }
    }
    ['\x5f\x63\x6c\x65\x61\x72\x57\x61\x69\x74\x53\x74\x61\x74\x65']() {
        var _0x3be7bd = _0x5f5634, _0x1f4016, _0x53a903;
        try {
            if (_0x3be7bd(0x1c4) !== _0x3be7bd(0x1c4))
                _0x294cfa = _0x2dec71, _0xae9bcd['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2f182f);
            else
                return (_0x53a903 = this['\x69\x6e\x74\x65\x72\x70\x65\x72\x65\x74\x65\x72']) != null && ('\x48\x57\x62\x4d\x66' !== _0x3be7bd(0x1db) ? (_0x2dcabc = _0x57b909, _0x447afb[_0x3be7bd(0x139)](_0x331040)) : _0x53a903['\x70\x4f\x6e\x57\x61\x69\x74\x53\x41\x6e\x69\x6d\x53\x74\x61\x74\x65\x44\x6f\x6e\x65']()), this[_0x3be7bd(0x1b0)] = null;
        } catch (_0x57af49) {
            if ('\x70\x4e\x48\x57\x61' === _0x3be7bd(0x17b)) {
                var _0x579e75;
                try {
                    this[_0x3be7bd(0x1be)] == null && (this[_0x3be7bd(0x1be)] = {}), _0x342f83 = this['\x5f\x70\x72\x6f\x63\x65\x73\x73\x45\x76\x65\x6e\x74\x53\x63\x72\x69\x70\x74'](_0x356cc1), this[_0x3be7bd(0x1be)][_0x537ddc] = _0x3d72d8;
                } catch (_0x5c4359) {
                    _0x579e75 = _0x5c4359, _0x371cc4['\x77\x61\x72\x6e\x69\x6e\x67'](_0x579e75);
                }
                return this;
            } else
                return _0x1f4016 = _0x57af49, KDCore[_0x3be7bd(0x139)](_0x1f4016);
        }
    }
    ['\x5f\x62\x65\x66\x6f\x72\x65\x44\x65\x6c\x65\x74\x65']() {
        var _0x167680 = _0x5f5634, _0x3f88ca;
        try {
            if (_0x167680(0x1bb) === _0x167680(0x127))
                this[_0x167680(0x1e4)] == null && (this[_0x167680(0x1e4)] = {}), _0x4cea02 = this[_0x167680(0x211)](_0x57b0ac), this[_0x167680(0x1e4)][_0x38fb38] = _0x22e9b2;
            else
                return this[_0x167680(0x16f)]();
        } catch (_0x69fe3c) {
            return _0x3f88ca = _0x69fe3c, KDCore[_0x167680(0x139)](_0x3f88ca);
        }
    }
    ['\x5f\x6d\x65\x73\x73\x61\x67\x65\x53\x74\x61\x72\x74\x73'](_0x1dffb5) {
        var _0x30f4ea = _0x5f5634, _0x428c6c, _0x49c1da, _0x1b8788, _0x558c65;
        try {
            if ('\x61\x6c\x70\x59\x6a' !== _0x30f4ea(0x1ee))
                return;
            else {
                if (!this[_0x30f4ea(0x162)]())
                    return;
                _0x49c1da = this['\x5f\x63\x68\x65\x63\x6b\x49\x73\x4d\x79\x4d\x65\x73\x73\x61\x67\x65'](_0x1dffb5);
                this[_0x30f4ea(0x13c)][_0x30f4ea(0x16b)] === !![] && $gameTemp[_0x30f4ea(0x16c)](this, _0x49c1da);
                if (!_0x49c1da) {
                    if (_0x30f4ea(0x10e) === _0x30f4ea(0x10e))
                        return;
                    else
                        return;
                }
                if (this[_0x30f4ea(0x212)] != null)
                    return {
                        talkAnimationName: _0x558c65,
                        mixDuration: _0x1b8788
                    } = this[_0x30f4ea(0x212)], this[_0x30f4ea(0x11f)](_0x558c65, !![], _0x1b8788);
                else {
                }
            }
        } catch (_0x16b59d) {
            return _0x428c6c = _0x16b59d, KDCore[_0x30f4ea(0x139)](_0x428c6c);
        }
    }
    [_0x5f5634(0x1b5)]({
        _speakerName: _0x543d9b,
        _faceName: _0xbbb526,
        _faceIndex: _0xbfe6c0
    }) {
        var _0x1876d9 = _0x5f5634, _0x3a9ba0, _0x579a31, _0xbbb2bd, _0x489495;
        try {
            if (!this[_0x1876d9(0x162)]()) {
                if (_0x1876d9(0x1ed) !== '\x79\x5a\x53\x63\x4d')
                    return;
                else
                    return ![];
            }
            ({
                faceName: _0xbbb2bd,
                faceIndex: _0x579a31,
                speakerName: _0x489495
            } = this[_0x1876d9(0x13c)]);
            if (_0xbbb2bd != null) {
                if ('\x66\x44\x4d\x54\x76' === _0x1876d9(0x221))
                    return this[_0x1876d9(0x1c5)](_0x1eadc6);
                else {
                    if (_0xbbb2bd === '')
                        return !![];
                    else {
                        if (_0xbbb2bd === _0xbbb526)
                            return _0x579a31 < 0x0 ? !![] : _0x1876d9(0x1df) !== '\x71\x51\x68\x43\x5a' ? this[_0x1876d9(0x194)](_0x430b10, _0x217ae3, null) : _0x579a31 === _0xbfe6c0;
                    }
                }
            } else {
                if (_0x489495 != null)
                    return _0x489495 === '' ? !![] : _0x489495 === _0x543d9b;
            }
        } catch (_0x5524c9) {
            if (_0x1876d9(0x1d3) !== _0x1876d9(0x1d3))
                return _0x245faa = _0x253471, _0x5767c4['\x77\x61\x72\x6e\x69\x6e\x67'](_0x23f02c);
            else
                _0x3a9ba0 = _0x5524c9, KDCore[_0x1876d9(0x139)](_0x3a9ba0);
        }
        return ![];
    }
    [_0x5f5634(0x1ce)](_0x2da3f6) {
        var _0x4badae = _0x5f5634, _0x545efe, _0xec730c, _0x21f09f;
        try {
            if (!this['\x69\x73\x42\x69\x6e\x64\x65\x64\x46\x6f\x72\x4d\x65\x73\x73\x61\x67\x65']())
                return;
            if (!this[_0x4badae(0x1b5)](_0x2da3f6)) {
                if (_0x4badae(0x191) === _0x4badae(0x17c))
                    return this[_0x4badae(0x1ea)](this['\x6f\x6e\x45\x6e\x64\x53\x63\x72\x69\x70\x74\x73'], _0x26965d);
                else
                    return;
            }
            if (this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] != null) {
                if (_0x4badae(0x13e) === '\x71\x72\x62\x66\x69')
                    return this[_0x4badae(0x177)] == null && (this[_0x4badae(0x177)] = []), this[_0x4badae(0x177)]['\x70\x75\x73\x68']([
                        _0xcf7be8,
                        _0x479a93
                    ]);
                else {
                    ({
                        idleAnimationName: _0xec730c,
                        mixDuration: _0x21f09f
                    } = this[_0x4badae(0x1c2)]);
                    if (this[_0x4badae(0x12d)]() !== _0xec730c)
                        return _0x4badae(0x14f) === _0x4badae(0x113) ? (this[_0x4badae(0x14a)] == null && (this[_0x4badae(0x14a)] = []), this['\x5f\x72\x65\x6d\x6f\x76\x65\x46\x69\x6c\x74\x65\x72'](_0x1e77b1), _0x227efc = _0x2bee54['\x66\x69\x6c\x74\x65\x72\x73'][_0x9961ab], _0x3631d9 = new _0x52663(..._0x1add20), this[_0x4badae(0x14a)][_0x4badae(0x124)](_0x137174)) : this[_0x4badae(0x11f)](_0xec730c, !![], _0x21f09f);
                }
            } else
                return this[_0x4badae(0x20c)](0.5);
        } catch (_0x42a854) {
            return _0x545efe = _0x42a854, KDCore[_0x4badae(0x139)](_0x545efe);
        }
    }
    [_0x5f5634(0x12d)]() {
        var _0x38cac9 = _0x5f5634, _0x54218e, _0x11581e, _0x5dbf98;
        try {
            _0x11581e = this[_0x38cac9(0x1de)]();
            if (_0x11581e != null && _0x11581e[_0x38cac9(0x20b)][_0x38cac9(0x207)] > 0x0) {
                _0x5dbf98 = _0x11581e[_0x38cac9(0x20b)][0x0];
                if (_0x5dbf98 != null && _0x5dbf98[_0x38cac9(0x19e)] != null)
                    return _0x5dbf98[_0x38cac9(0x19e)][_0x38cac9(0x215)];
            }
        } catch (_0xa21e10) {
            if (_0x38cac9(0x12e) === '\x53\x62\x4b\x57\x65')
                _0x54218e = _0xa21e10, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x54218e);
            else
                return _0xd95d95[_0x38cac9(0x170)](_0x2ce844, '');
        }
        return null;
    }
    [_0x5f5634(0x154)](_0x526e8d, _0x3bc5d2) {
        var _0x50f517 = _0x5f5634, _0x25d52d, _0x24ed74, _0x5d6fc5, _0x550e76, _0x46567d;
        try {
            if (_0x50f517(0x163) !== _0x50f517(0x183)) {
                if (!this['\x69\x73\x42\x69\x6e\x64\x65\x64\x46\x6f\x72\x4d\x65\x73\x73\x61\x67\x65']())
                    return;
                if (!this[_0x50f517(0x1b5)](_0x526e8d))
                    return;
                if (_0x3bc5d2 == null) {
                    if (_0x50f517(0x175) === _0x50f517(0x175))
                        return;
                    else
                        return _0x1e28f9 = _0x5a439e, _0x42932d[_0x50f517(0x139)](_0x5b6637);
                }
                ({
                    code: _0x24ed74,
                    parameter: _0x46567d
                } = _0x3bc5d2, _0x25d52d = _0x46567d, _0x550e76 = void 0x0);
                if (_0x46567d[_0x50f517(0x15f)]('\x3a')) {
                    if (_0x50f517(0x176) === _0x50f517(0x176))
                        [_0x25d52d, _0x550e76] = _0x46567d[_0x50f517(0x1a1)]('\x3a'), _0x550e76 = Number(_0x550e76);
                    else {
                        ({
                            idleAnimationName: _0x445d1a,
                            mixDuration: _0x551b81
                        } = this[_0x50f517(0x1c2)]);
                        if (this[_0x50f517(0x12d)]() !== _0x484bfe)
                            return this[_0x50f517(0x11f)](_0x927254, !![], _0x18b62b);
                    }
                }
                switch (_0x24ed74) {
                case _0x50f517(0x1a8):
                    return this[_0x50f517(0x12c)](_0x25d52d, _0x550e76);
                case _0x50f517(0x156):
                    this[_0x50f517(0x11d)](_0x25d52d, _0x550e76);
                    return this[_0x50f517(0x114)](_0x526e8d);
                }
            } else
                _0x25ce22 = {}, _0x3b1999['\x69\x64'] = this['\x69\x64'], _0x395934[_0x50f517(0x1af)] = this[_0x50f517(0x1af)], _0xefec3b['\x62\x69\x6e\x64\x4d\x65\x74\x68\x6f\x64'] = this[_0x50f517(0x178)], _0x5da3ec['\x74\x69\x6d\x65\x53\x63\x61\x6c\x65'] = ((_0x29b731 = this['\x67\x65\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65']()) != null ? _0x1abf77[_0x50f517(0x1c1)] : void 0x0) || 0x1, _0x2c4c65['\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65'] = this['\x6c\x61\x73\x74\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e\x53\x74\x61\x74\x65'], _0x12a9fe[_0x50f517(0x219)] = this[_0x50f517(0x20d)]['\x78'], _0x3cbc87[_0x50f517(0x1c3)] = this[_0x50f517(0x20d)]['\x79'], _0x195ead[_0x50f517(0x119)] = this[_0x50f517(0x145)], _0x3ea54d[_0x50f517(0x1d4)] = {}, _0x264c45[_0x50f517(0x1d4)]['\x78'] = this['\x78'], _0x2b82b[_0x50f517(0x1d4)]['\x79'] = this['\x79'], _0x274015['\x66\x69\x65\x6c\x64\x73']['\x7a'] = this['\x7a'], _0xbed9b7['\x66\x69\x65\x6c\x64\x73'][_0x50f517(0x1be)] = this[_0x50f517(0x1be)], _0x5756bb[_0x50f517(0x1d4)]['\x6f\x6e\x45\x6e\x64\x53\x63\x72\x69\x70\x74\x73'] = this[_0x50f517(0x17e)], _0x4cf0b6[_0x50f517(0x1d4)][_0x50f517(0x1e4)] = this[_0x50f517(0x1e4)], _0x41a64a[_0x50f517(0x1d4)][_0x50f517(0x131)] = this[_0x50f517(0x131)], _0x171ae4[_0x50f517(0x1d4)][_0x50f517(0x13c)] = this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x42\x69\x6e\x64\x44\x61\x74\x61'], _0x468c52['\x66\x69\x65\x6c\x64\x73'][_0x50f517(0x212)] = this[_0x50f517(0x212)], _0x498e23[_0x50f517(0x1d4)]['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x49\x64\x6c\x65\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'], _0x46d55d[_0x50f517(0x1d4)][_0x50f517(0x1dc)] = this[_0x50f517(0x1dc)];
        } catch (_0xa9d24d) {
            return _0x5d6fc5 = _0xa9d24d, KDCore[_0x50f517(0x139)](_0x5d6fc5);
        }
    }
    ['\x5f\x73\x65\x74\x48\x69\x67\x68\x6c\x69\x67\x68\x74'](_0x11d92d) {
        var _0x4d3b2c = _0x5f5634, _0x2dff65;
        try {
            if (_0x11d92d === !![]) {
                if ('\x78\x4e\x79\x63\x72' !== '\x50\x5a\x7a\x79\x63')
                    return this[_0x4d3b2c(0x135)](_0x4d3b2c(0x199));
                else
                    _0x256bc6 = _0x58c866, _0x26c419[_0x4d3b2c(0x139)](_0x471f10);
            } else
                return this['\x5f\x61\x64\x64\x46\x69\x6c\x74\x65\x72'](_0x4d3b2c(0x199), [
                    0x0,
                    0.5
                ]);
        } catch (_0x44444e) {
            return _0x2dff65 = _0x44444e, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x2dff65);
        }
    }
    [_0x5f5634(0x14b)](_0x52e575, _0x52d347) {
        var _0x11342f = _0x5f5634, _0x2a0f03, _0x4e1853, _0x5b6ad5;
        try {
            return this[_0x11342f(0x14a)] == null && ('\x66\x61\x4f\x4e\x43' !== _0x11342f(0x216) ? this['\x5f\x61\x70\x70\x6c\x79\x52\x65\x71\x75\x69\x72\x65\x64\x44\x61\x74\x61']() : this[_0x11342f(0x14a)] = []), this[_0x11342f(0x135)](_0x52e575), _0x5b6ad5 = PIXI[_0x11342f(0x14a)][_0x52e575], _0x4e1853 = new _0x5b6ad5(..._0x52d347), this[_0x11342f(0x14a)][_0x11342f(0x124)](_0x4e1853);
        } catch (_0xa0090e) {
            return _0x2a0f03 = _0xa0090e, KDCore[_0x11342f(0x139)](_0x2a0f03);
        }
    }
    [_0x5f5634(0x135)](_0x1d7a13) {
        var _0x486eed = _0x5f5634, _0x5d7ddc, _0x3896a8;
        try {
            if (_0x486eed(0x174) === '\x49\x4a\x44\x43\x75')
                return this[_0x486eed(0x14a)] == null && (_0x486eed(0x138) !== _0x486eed(0x196) ? this[_0x486eed(0x14a)] = [] : (this[_0x486eed(0x13c)] = null, this['\x5f\x6d\x65\x73\x73\x61\x67\x65\x54\x61\x6c\x6b\x41\x6e\x69\x6d\x61\x74\x69\x6f\x6e'] = null, this[_0x486eed(0x1c2)] = null, this[_0x486eed(0x153)](!![]))), _0x3896a8 = PIXI[_0x486eed(0x14a)][_0x1d7a13], this[_0x486eed(0x14a)] = this[_0x486eed(0x14a)][_0x486eed(0x1e7)](function (_0x223ff1) {
                    return !(_0x223ff1 instanceof _0x3896a8);
                });
            else
                _0x33696c[_0x486eed(0x11e)]();
        } catch (_0x35fd91) {
            return _0x5d7ddc = _0x35fd91, KDCore[_0x486eed(0x139)](_0x5d7ddc);
        }
    }
    [_0x5f5634(0x130)]() {
        var _0x2786d1 = _0x5f5634, _0x329b30, _0x61c3b1, _0x1c3fe0, _0x490762;
        try {
            if (_0x2786d1(0x18e) !== _0x2786d1(0x173)) {
                ({
                    fadeDuration: _0x61c3b1,
                    fadeStep: _0x1c3fe0,
                    isRemoveAfterFade: _0x490762
                } = this[_0x2786d1(0x1dc)]);
                if (_0x61c3b1 > 0x0)
                    return this[_0x2786d1(0x16e)](this[_0x2786d1(0x145)] + _0x1c3fe0), this[_0x2786d1(0x1dc)][_0x2786d1(0x1fc)]--;
                else {
                    if (_0x1c3fe0 < 0x0) {
                        this[_0x2786d1(0x16e)](0x0);
                        if (_0x490762 === !![])
                            try {
                                RemoveSAnim(this['\x69\x64']);
                            } catch (_0x110a41) {
                                _0x329b30 = _0x110a41, KDCore[_0x2786d1(0x139)](_0x329b30);
                            }
                    } else
                        this[_0x2786d1(0x16e)](0x1);
                    return this['\x5f\x66\x61\x64\x65\x53\x65\x74\x74\x69\x6e\x67\x73'] = null;
                }
            } else
                return this[_0x2786d1(0x21e)] = ![], _0x38be74 = new _0x12d008[(_0x2786d1(0x148))](), _0x28f78e = this[_0x2786d1(0x1af)] + '\x2f' + this[_0x2786d1(0x1af)] + _0x2786d1(0x198), _0x47182e[_0x2786d1(0x1e3)](this['\x69\x64'], _0x2786d1(0x200) + _0x499778, { '\x63\x72\x6f\x73\x73\x4f\x72\x69\x67\x69\x6e': !![] })[_0x2786d1(0x1f2)](this[_0x2786d1(0x125)][_0x2786d1(0x1ba)](this)), this[_0x2786d1(0x115)] = _0x46aa89;
        } catch (_0x1fa5ee) {
            if (_0x2786d1(0x1f1) !== _0x2786d1(0x1bd))
                return _0x329b30 = _0x1fa5ee, KDCore['\x77\x61\x72\x6e\x69\x6e\x67'](_0x329b30), this[_0x2786d1(0x1dc)] = null;
            else
                _0x5d7ab6 = 0x0;
        }
    }
};

// Generated by CoffeeScript 2.6.1
var PKD_Sprite_SpineMapInst;

PKD_Sprite_SpineMapInst = class PKD_Sprite_SpineMapInst extends Sprite {
  constructor(spineAnimationSprite) {
    super();
    this.spineAnimationSprite = spineAnimationSprite;
    this._mapAchorPoint = new KDCore.MapAnchorPoint(0, 0);
    this._spineAnimationParent = new Sprite();
    this.addChild(this._spineAnimationParent);
    this._spineAnimationParent.addChild(this.spineAnimationSprite);
    this.id = this.spineAnimationSprite.id;
    return;
  }

  spline() {
    return this.spineAnimationSprite;
  }

  update() {
    super.update();
    this._updateSpineAnimationSprite();
  }

  _updateSpineAnimationSprite() {
    var e, x, y;
    try {
      ({x, y} = this.spineAnimationSprite);
      this._mapAchorPoint._realX = x;
      this._mapAchorPoint._realY = y;
      this._spineAnimationParent.move(-x, -y);
      this.x = this.screenX();
      this.y = this.screenY();
      this.z = this.screenZ();
    } catch (error) {
      e = error;
      KDCore.warning(e);
      this._updateSpineAnimationSprite = function() {};
    }
  }

  screenX() {
    return this._mapAchorPoint.screenX();
  }

  screenY() {
    return this._mapAchorPoint.screenY();
  }

  screenZ() {
    return this.spineAnimationSprite.z;
  }

};




// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Boot.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Scene_Boot.prototype;
})();

// ■ END Scene_Boot.coffee
//---------------------------------------------------------------------------
//@[ALIAS]
/*ALIAS__start = _.start
_.start = ->
    ALIAS__start.call(@, ...arguments)
    PKD_Spine2DPlayer.LoadPluginSettings()
    return*/


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Scene_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onMapLoaded, ALIAS__stop, _;
  //@[DEFINES]
  _ = Scene_Map.prototype;
  //@[ALIAS]
  ALIAS__onMapLoaded = _.onMapLoaded;
  _.onMapLoaded = function() {
    ALIAS__onMapLoaded.call(this, ...arguments);
    if (KDCore.isMV()) {
      window.alert("Spine2DPlayer: RPG Maker MV not supported");
    }
    PKD_SpineAnimations.Instance().afterMapLoaded();
  };
  //@[ALIAS]
  ALIAS__stop = _.stop;
  _.stop = function() {
    ALIAS__stop.call(this, ...arguments);
    return $gameTemp.pClearSpineAnimations();
  };
})();

// ■ END Scene_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__createPictures, _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  //@[ALIAS]
  ALIAS__createPictures = _.createPictures;
  _.createPictures = function() {
    var e;
    try {
      this._pkdSpineBelowPicturesLayer = new Sprite();
      this.addChild(this._pkdSpineBelowPicturesLayer);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    ALIAS__createPictures.call(this, ...arguments);
    try {
      this._pkdSpineBelowWindowsLayer = new Sprite();
      this.addChild(this._pkdSpineBelowWindowsLayer);
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Spriteset_Map.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Spriteset_Map.prototype;
  _.pAddSpineBelowPictures = function(spineSpr) {
    var e;
    try {
      return this._pkdSpineBelowPicturesLayer.addChild(spineSpr);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pAddSpineBelowWindows = function(spineSpr) {
    var e;
    try {
      return this._pkdSpineBelowWindowsLayer.addChild(spineSpr);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pAddSpineToMap = function(spineSpr) {
    var e, spriteInst;
    try {
      spriteInst = new PKD_Sprite_SpineMapInst(spineSpr);
      return this._tilemap.addChild(spriteInst);
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
})();

// ■ END Spriteset_Map.coffee
//---------------------------------------------------------------------------


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var ALIAS__onEndOfText, ALIAS__processEscapeCharacter, ALIAS__startMessage, ALIAS__startWait, ALIAS__updateMessage, _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  //@[ALIAS]
  ALIAS__startMessage = _.startMessage;
  _.startMessage = function() {
    var e;
    ALIAS__startMessage.call(this, ...arguments);
    try {
      return $gameTemp.pCallMessageStateForSpineAnimations("start");
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  
  //@[ALIAS]
  ALIAS__onEndOfText = _.onEndOfText;
  _.onEndOfText = function() {
    var e;
    ALIAS__onEndOfText.call(this, ...arguments);
    try {
      return $gameTemp.pCallMessageStateForSpineAnimations("end");
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  
  //@[ALIAS]
  ALIAS__startWait = _.startWait;
  _.startWait = function() {
    var e;
    ALIAS__startWait.call(this, ...arguments);
    try {
      this._sAnimBeenPaused = true;
      return $gameTemp.pCallMessageStateForSpineAnimations("end");
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  //@[ALIAS]
  ALIAS__updateMessage = _.updateMessage;
  _.updateMessage = function() {
    var e;
    if (this._sAnimBeenPaused === true) {
      try {
        if ((this._textState != null) && !this.isEndOfText(this._textState)) {
          $gameTemp.pCallMessageStateForSpineAnimations("start");
        }
      } catch (error) {
        e = error;
        KDCore.warning(e);
      }
      this._sAnimBeenPaused = false;
    }
    return ALIAS__updateMessage.call(this, ...arguments);
  };
  
  //@[ALIAS]
  ALIAS__processEscapeCharacter = _.processEscapeCharacter;
  _.processEscapeCharacter = function(code, textState) {
    if (['SAI', 'SAT'].contains(code)) {
      this.pProcessSAnimCode(code, textState);
    }
    return ALIAS__processEscapeCharacter.call(this, ...arguments);
  };
})();

// ■ END Window_Message.coffee
//---------------------------------------------------------------------------

//@[ALIAS]
//ALIAS__processControlCharacter = _.processControlCharacter
//_.processControlCharacter = (textState, c) ->

// ALIAS__processControlCharacter.call(@, ...arguments)


// Generated by CoffeeScript 2.6.1
//╒═════════════════════════════════════════════════════════════════════════╛
// ■ Window_Message.coffee
//╒═════════════════════════════════════════════════════════════════════════╛
//---------------------------------------------------------------------------
(function() {
  var _;
  //@[DEFINES]
  _ = Window_Message.prototype;
  _.pProcessSAnimCode = function(code, textState) {
    var e, parameter;
    try {
      parameter = this.pObtainEscapeParamAsText(textState);
      if (String.any(parameter)) {
        return $gameTemp.pCallMessageStateForSpineAnimations("code", {code, parameter});
      }
    } catch (error) {
      e = error;
      return KDCore.warning(e);
    }
  };
  _.pObtainEscapeParamAsText = function(textState) {
    var arr, e, regExp;
    try {
      regExp = /^\[.+?\]/;
      arr = regExp.exec(textState.text.slice(textState.index));
      if (arr != null) {
        textState.index += arr[0].length;
        return arr[0].slice(1).replace("]", "");
      }
    } catch (error) {
      e = error;
      KDCore.warning(e);
    }
    return null;
  };
})();








// ■ END Window_Message.coffee
//---------------------------------------------------------------------------

//Plugin PKD_Spine2DPlayer builded by PKD PluginBuilder 2.2 - 04.03.2024