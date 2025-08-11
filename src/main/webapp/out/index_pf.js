import init, { createContext } from "./pathfinder/pathfinder_web_canvas.js";
window.pf_g2d_create = function (gl, width, height) {
    console.log(gl.canvas);
    const nvg = createContext(gl.canvas);
    if (nvg === null) {
        console.error("Could not init pathfinder.");
        return null;
    }
    return {
        gl,
        context: nvg,
        width,
        height,
    };
};
window.pf_g2d_beginDraw = function ({ gl, context: nvg, width, height }) {
    // gl.viewport(0, 0, width, height);
    // gl.clearColor(0, 0, 0, 0);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT | gl.STENCIL_BUFFER_BIT);
    //
    // gl.enable(gl.BLEND);
    // gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    // gl.enable(gl.CULL_FACE);
    // gl.disable(gl.DEPTH_TEST);
    // nvg.pfClear();
};
window.pf_g2d_beginPrimitive = function ({ gl, context: nvg, width, height }, r, g, b, a) {
    nvg.beginPath();
    let style = `rgba(${r}, ${g}, ${b}, ${a / 255})`;
    nvg.fillStyle = style;
    nvg.strokeStyle = style;
};
window.pf_g2d_fillRect = function ({ gl, context: nvg }, x, y, width, height) {
    nvg.fillRect(x, y, width, height);
};
window.pf_g2d_moveTo = function ({ gl, context: nvg }, x, y) {
    nvg.moveTo(x, y);
};
window.pf_g2d_lineTo = function ({ gl, context: nvg }, x, y) {
    nvg.lineTo(x, y);
};
window.pf_g2d_stroke = function ({ gl, context: nvg }) {
    nvg.stroke();
};
window.pf_g2d_fill = function ({ gl, context: nvg }) {
    nvg.fill();
};
window.pf_g2d_endDraw = function ({ gl, context: nvg, width, height }) {
    console.log('endDraw');
    nvg.pfFlush();
    // gl.enable(gl.DEPTH_TEST);
};
document.addEventListener("DOMContentLoaded", async () => {
    await init();
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
