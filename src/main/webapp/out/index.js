import * as NVG from "./nanovg-js/nanovg.js";
window.nvg_g2d_create = function (gl, width, height) {
    const nvg = NVG.createWebGL(gl, NVG.CreateFlags.ANTIALIAS | NVG.CreateFlags.STENCIL_STROKES /*| NVG.CreateFlags.DEBUG*/);
    if (nvg === null) {
        console.error("Could not init nanovg.");
        return null;
    }
    return {
        gl,
        context: nvg,
        width,
        height,
    };
};
window.nvg_g2d_beginDraw = function ({ gl, context: nvg, width, height }) {
    gl.viewport(0, 0, width, height);
    gl.clearColor(0.3, 0.3, 0.32, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.enable(gl.CULL_FACE);
    gl.disable(gl.DEPTH_TEST);
    nvg.beginFrame(width, height, 1);
};
window.nvg_g2d_beginPrimitive = function ({ gl, context: nvg, width, height }, r, g, b, a) {
    nvg.beginPath();
    let rgba = nvg.RGBA(r, g, b, a);
    nvg.fillColor(rgba);
    nvg.strokeColor(rgba);
};
window.nvg_g2d_fillRect = function ({ gl, context: nvg }, x, y, width, height) {
    nvg.rect(x, y, width, height);
    nvg.fill();
};
window.nvg_g2d_moveTo = function ({ gl, context: nvg }, x, y) {
    nvg.moveTo(x, y);
};
window.nvg_g2d_lineTo = function ({ gl, context: nvg }, x, y) {
    nvg.lineTo(x, y);
};
window.nvg_g2d_stroke = function ({ gl, context: nvg }) {
    nvg.stroke();
};
window.nvg_g2d_fill = function ({ gl, context: nvg }) {
    nvg.fill();
};
window.nvg_g2d_endDraw = function ({ gl, context: nvg, width, height }) {
    nvg.endFrame();
    gl.enable(gl.DEPTH_TEST);
};
document.addEventListener("DOMContentLoaded", async () => {
    await NVG.default();
    let teavm = await TeaVM.wasmGC.load("teavm/classes.wasm", {
        stackDeobfuscator: {
            // set to true during development phase, as well as `debugInformationGenerated`
            // option in pom.xml to get clear stack traces. Don't forget
            // to disable for production.
            enabled: false
        }
    });
    teavm.exports.main([]);
});
