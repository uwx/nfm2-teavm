import * as Bind from "./bind-nanovg.js";
export { Bind };
let bind;
export default async function (value) {
    return new Promise((resolve) => {
        Bind.default(value).then((value) => {
            bind = value;
            resolve();
        });
    });
}
export { bind };
export const NVG_PI = 3.14159265358979323846264338327;
// static float nvg__sqrtf(float a) { return sqrtf(a); }
function nvg__modf(a, b) { return a % b; }
// static float nvg__sinf(float a) { return sinf(a); }
// static float nvg__cosf(float a) { return cosf(a); }
// static float nvg__tanf(float a) { return tanf(a); }
// static float nvg__atan2f(float a,float b) { return atan2f(a, b); }
// static float nvg__acosf(float a) { return acosf(a); }
// static int nvg__mini(int a, int b) { return a < b ? a : b; }
// static int nvg__maxi(int a, int b) { return a > b ? a : b; }
// static int nvg__clampi(int a, int mn, int mx) { return a < mn ? mn : (a > mx ? mx : a); }
// static float nvg__minf(float a, float b) { return a < b ? a : b; }
// static float nvg__maxf(float a, float b) { return a > b ? a : b; }
// static float nvg__absf(float a) { return a >= 0.0f ? a : -a; }
// static float nvg__signf(float a) { return a >= 0.0f ? 1.0f : -1.0f; }
function nvg__clampf(a, mn, mx) { return a < mn ? mn : mx < a ? mx : a; }
// static float nvg__cross(float dx0, float dy0, float dx1, float dy1) { return dx1*dy0 - dx0*dy1; }
// struct NVGcolor {
//   union {
//     float rgba[4];
//     struct {
//       float r,g,b,a;
//     };
//   };
// };
// typedef struct NVGcolor NVGcolor;
export class NVGcolor {
    constructor(rgba = new Float32Array(4)) {
        this.rgba = rgba;
    }
    get r() { return this.rgba[0]; }
    set r(value) { this.rgba[0] = value; }
    get g() { return this.rgba[1]; }
    set g(value) { this.rgba[1] = value; }
    get b() { return this.rgba[2]; }
    set b(value) { this.rgba[2] = value; }
    get a() { return this.rgba[3]; }
    set a(value) { this.rgba[3] = value; }
}
// struct NVGpaint {
//   float xform[6];
//   float extent[2];
//   float radius;
//   float feather;
//   NVGcolor innerColor;
//   NVGcolor outerColor;
//   int image;
// };
// typedef struct NVGpaint NVGpaint;
export class NVGpaint {
    constructor(_array = new Float32Array(18)) {
        this.image = 0;
        this.xform = new Float32Array(_array.subarray(0, 6));
        this.extent = new Float32Array(_array.subarray(6, 8));
        this._radius = new Float32Array(_array.subarray(8, 9));
        this._feather = new Float32Array(_array.subarray(9, 10));
        this.innerColor = new NVGcolor(new Float32Array(_array.subarray(10, 14)));
        this.outerColor = new NVGcolor(new Float32Array(_array.subarray(14, 18)));
    }
    get radius() { return this._radius[0]; }
    set radius(value) { this._radius[0] = value; }
    get feather() { return this._feather[0]; }
    set feather(value) { this._feather[0] = value; }
}
export var NVGwinding;
(function (NVGwinding) {
    NVGwinding[NVGwinding["CCW"] = 1] = "CCW";
    NVGwinding[NVGwinding["CW"] = 2] = "CW";
})(NVGwinding || (NVGwinding = {}));
export var NVGsolidity;
(function (NVGsolidity) {
    NVGsolidity[NVGsolidity["SOLID"] = 1] = "SOLID";
    NVGsolidity[NVGsolidity["HOLE"] = 2] = "HOLE";
})(NVGsolidity || (NVGsolidity = {}));
export var NVGlineCap;
(function (NVGlineCap) {
    NVGlineCap[NVGlineCap["BUTT"] = 0] = "BUTT";
    NVGlineCap[NVGlineCap["ROUND"] = 1] = "ROUND";
    NVGlineCap[NVGlineCap["NVG_SQUARE"] = 2] = "NVG_SQUARE";
    NVGlineCap[NVGlineCap["BEVEL"] = 3] = "BEVEL";
    NVGlineCap[NVGlineCap["MITER"] = 4] = "MITER";
})(NVGlineCap || (NVGlineCap = {}));
export var NVGalign;
(function (NVGalign) {
    // Horizontal align
    NVGalign[NVGalign["LEFT"] = 1] = "LEFT";
    NVGalign[NVGalign["CENTER"] = 2] = "CENTER";
    NVGalign[NVGalign["RIGHT"] = 4] = "RIGHT";
    // Vertical align
    NVGalign[NVGalign["TOP"] = 8] = "TOP";
    NVGalign[NVGalign["MIDDLE"] = 16] = "MIDDLE";
    NVGalign[NVGalign["BOTTOM"] = 32] = "BOTTOM";
    NVGalign[NVGalign["BASELINE"] = 64] = "BASELINE";
})(NVGalign || (NVGalign = {}));
export var NVGblendFactor;
(function (NVGblendFactor) {
    NVGblendFactor[NVGblendFactor["ZERO"] = 1] = "ZERO";
    NVGblendFactor[NVGblendFactor["ONE"] = 2] = "ONE";
    NVGblendFactor[NVGblendFactor["SRC_COLOR"] = 4] = "SRC_COLOR";
    NVGblendFactor[NVGblendFactor["ONE_MINUS_SRC_COLOR"] = 8] = "ONE_MINUS_SRC_COLOR";
    NVGblendFactor[NVGblendFactor["DST_COLOR"] = 16] = "DST_COLOR";
    NVGblendFactor[NVGblendFactor["ONE_MINUS_DST_COLOR"] = 32] = "ONE_MINUS_DST_COLOR";
    NVGblendFactor[NVGblendFactor["SRC_ALPHA"] = 64] = "SRC_ALPHA";
    NVGblendFactor[NVGblendFactor["ONE_MINUS_SRC_ALPHA"] = 128] = "ONE_MINUS_SRC_ALPHA";
    NVGblendFactor[NVGblendFactor["DST_ALPHA"] = 256] = "DST_ALPHA";
    NVGblendFactor[NVGblendFactor["ONE_MINUS_DST_ALPHA"] = 512] = "ONE_MINUS_DST_ALPHA";
    NVGblendFactor[NVGblendFactor["SRC_ALPHA_SATURATE"] = 1024] = "SRC_ALPHA_SATURATE";
})(NVGblendFactor || (NVGblendFactor = {}));
export var NVGcompositeOperation;
(function (NVGcompositeOperation) {
    NVGcompositeOperation[NVGcompositeOperation["SOURCE_OVER"] = 0] = "SOURCE_OVER";
    NVGcompositeOperation[NVGcompositeOperation["SOURCE_IN"] = 1] = "SOURCE_IN";
    NVGcompositeOperation[NVGcompositeOperation["SOURCE_OUT"] = 2] = "SOURCE_OUT";
    NVGcompositeOperation[NVGcompositeOperation["ATOP"] = 3] = "ATOP";
    NVGcompositeOperation[NVGcompositeOperation["DESTINATION_OVER"] = 4] = "DESTINATION_OVER";
    NVGcompositeOperation[NVGcompositeOperation["DESTINATION_IN"] = 5] = "DESTINATION_IN";
    NVGcompositeOperation[NVGcompositeOperation["DESTINATION_OUT"] = 6] = "DESTINATION_OUT";
    NVGcompositeOperation[NVGcompositeOperation["DESTINATION_ATOP"] = 7] = "DESTINATION_ATOP";
    NVGcompositeOperation[NVGcompositeOperation["LIGHTER"] = 8] = "LIGHTER";
    NVGcompositeOperation[NVGcompositeOperation["COPY"] = 9] = "COPY";
    NVGcompositeOperation[NVGcompositeOperation["XOR"] = 10] = "XOR";
})(NVGcompositeOperation || (NVGcompositeOperation = {}));
// struct NVGcompositeOperationState {
//   int srcRGB;
//   int dstRGB;
//   int srcAlpha;
//   int dstAlpha;
// };
// typedef struct NVGcompositeOperationState NVGcompositeOperationState;
export class NVGcompositeOperationState {
    constructor() {
        this.srcRGB = NVGblendFactor.ONE;
        this.dstRGB = NVGblendFactor.ZERO;
        this.srcAlpha = NVGblendFactor.ONE;
        this.dstAlpha = NVGblendFactor.ZERO;
    }
}
// struct NVGglyphPosition {
//   const char* str;  // Position of the glyph in the input string.
//   float x;      // The x-coordinate of the logical glyph position.
//   float minx, maxx;  // The bounds of the glyph shape.
// };
// typedef struct NVGglyphPosition NVGglyphPosition;
export class NVGglyphPosition {
    constructor() {
        this.str = 0;
        this.x = 0.0;
        this.minx = 0.0;
        this.maxx = 0.0;
    }
}
// struct NVGtextRow {
//   const char* start;  // Pointer to the input text where the row starts.
//   const char* end;  // Pointer to the input text where the row ends (one past the last character).
//   const char* next;  // Pointer to the beginning of the next row.
//   float width;    // Logical width of the row.
//   float minx, maxx;  // Actual bounds of the row. Logical with and bounds can differ because of kerning and some parts over extending.
// };
// typedef struct NVGtextRow NVGtextRow;
export class NVGtextRow {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.next = 0;
        this.width = 0.0;
        this.minx = 0.0;
        this.maxx = 0.0;
    }
}
export var NVGimageFlags;
(function (NVGimageFlags) {
    NVGimageFlags[NVGimageFlags["NONE"] = 0] = "NONE";
    NVGimageFlags[NVGimageFlags["GENERATE_MIPMAPS"] = 1] = "GENERATE_MIPMAPS";
    NVGimageFlags[NVGimageFlags["REPEATX"] = 2] = "REPEATX";
    NVGimageFlags[NVGimageFlags["REPEATY"] = 4] = "REPEATY";
    NVGimageFlags[NVGimageFlags["FLIPY"] = 8] = "FLIPY";
    NVGimageFlags[NVGimageFlags["PREMULTIPLIED"] = 16] = "PREMULTIPLIED";
    NVGimageFlags[NVGimageFlags["NEAREST"] = 32] = "NEAREST";
})(NVGimageFlags || (NVGimageFlags = {}));
;
// Begin drawing a new frame
// Calls to nanovg drawing API should be wrapped in nvgBeginFrame() & nvgEndFrame()
// nvgBeginFrame() defines the size of the window to render to in relation currently
// set viewport (i.e. glViewport on GL backends). Device pixel ration allows to
// control the rendering on Hi-DPI devices.
// For example, GLFW returns two dimension for an opened window: window size and
// frame buffer size. In that case you would set windowWidth/Height to the window size
// devicePixelRatio to: frameBufferWidth / windowWidth.
// void nvgBeginFrame(NVGcontext* ctx, float windowWidth, float windowHeight, float devicePixelRatio);
export function nvgBeginFrame(ctx, windowWidth, windowHeight, devicePixelRatio) {
    bind.nvgBeginFrame(ctx, windowWidth, windowHeight, devicePixelRatio);
}
// Cancels drawing the current frame.
// void nvgCancelFrame(NVGcontext* ctx);
export function nvgCancelFrame(ctx) {
    bind.nvgCancelFrame(ctx);
}
// Ends drawing flushing remaining render state.
// void nvgEndFrame(NVGcontext* ctx);
export function nvgEndFrame(ctx) {
    bind.nvgEndFrame(ctx);
}
//
// Composite operation
//
// The composite operations in NanoVG are modeled after HTML Canvas API, and
// the blend func is based on OpenGL (see corresponding manuals for more info).
// The colors in the blending state have premultiplied alpha.
// Sets the composite operation. The op parameter should be one of NVGcompositeOperation.
// void nvgGlobalCompositeOperation(NVGcontext* ctx, int op);
export function nvgGlobalCompositeOperation(ctx, op) {
    bind.nvgGlobalCompositeOperation(ctx, op);
}
// Sets the composite operation with custom pixel arithmetic. The parameters should be one of NVGblendFactor.
// void nvgGlobalCompositeBlendFunc(NVGcontext* ctx, int sfactor, int dfactor);
export function nvgGlobalCompositeBlendFunc(ctx, sfactor, dfactor) {
    bind.nvgGlobalCompositeBlendFunc(ctx, sfactor, dfactor);
}
// Sets the composite operation with custom pixel arithmetic for RGB and alpha components separately. The parameters should be one of NVGblendFactor.
// void nvgGlobalCompositeBlendFuncSeparate(NVGcontext* ctx, int srcRGB, int dstRGB, int srcAlpha, int dstAlpha);
export function nvgGlobalCompositeBlendFuncSeparate(ctx, srcRGB, dstRGB, srcAlpha, dstAlpha) {
    bind.nvgGlobalCompositeBlendFuncSeparate(ctx, srcRGB, dstRGB, srcAlpha, dstAlpha);
}
//
// Color utils
//
// Colors in NanoVG are stored as unsigned ints in ABGR format.
// Returns a color value from red, green, blue values. Alpha will be set to 255 (1.0f).
// NVGcolor nvgRGB(unsigned char r, unsigned char g, unsigned char b);
export function nvgRGB(r, g, b, out = new NVGcolor()) {
    return nvgRGBA(r, g, b, 255, out);
}
// Returns a color value from red, green, blue values. Alpha will be set to 1.0f.
// NVGcolor nvgRGBf(float r, float g, float b);
export function nvgRGBf(r, g, b, out = new NVGcolor()) {
    return nvgRGBAf(r, g, b, 1.0, out);
}
// Returns a color value from red, green, blue and alpha values.
// NVGcolor nvgRGBA(unsigned char r, unsigned char g, unsigned char b, unsigned char a);
export function nvgRGBA(r, g, b, a, out = new NVGcolor()) {
    out.r = r / 255.0;
    out.g = g / 255.0;
    out.b = b / 255.0;
    out.a = a / 255.0;
    return out;
}
// Returns a color value from red, green, blue and alpha values.
// NVGcolor nvgRGBAf(float r, float g, float b, float a);
export function nvgRGBAf(r, g, b, a, out = new NVGcolor()) {
    out.r = r;
    out.g = g;
    out.b = b;
    out.a = a;
    return out;
}
// Linearly interpolates from color c0 to c1, and returns resulting color value.
// NVGcolor nvgLerpRGBA(NVGcolor c0, NVGcolor c1, float u);
export function nvgLerpRGBA(c0, c1, u, out = new NVGcolor()) {
    u = nvg__clampf(u, 0.0, 1.0);
    const oneminu = 1.0 - u;
    for (let i = 0; i < 4; ++i) {
        out.rgba[i] = c0.rgba[i] * oneminu + c1.rgba[i] * u;
    }
    return out;
}
// Sets transparency of a color value.
// NVGcolor nvgTransRGBA(NVGcolor c0, unsigned char a);
export function nvgTransRGBA(c, a) {
    c.a = a / 255.0;
    return c;
}
// Sets transparency of a color value.
// NVGcolor nvgTransRGBAf(NVGcolor c0, float a);
export function nvgTransRGBAf(c, a) {
    c.a = a;
    return c;
}
// Returns color value specified by hue, saturation and lightness.
// HSL values are all in range [0..1], alpha will be set to 255.
// NVGcolor nvgHSL(float h, float s, float l);
export function nvgHSL(h, s, l, out = new NVGcolor()) {
    return nvgHSLA(h, s, l, 255, out);
}
// static float nvg__hue(float h, float m1, float m2)
function nvg__hue(h, m1, m2) {
    if (h < 0)
        h += 1;
    if (h > 1)
        h -= 1;
    if (h < 1.0 / 6.0)
        return m1 + (m2 - m1) * h * 6.0;
    else if (h < 3.0 / 6.0)
        return m2;
    else if (h < 4.0 / 6.0)
        return m1 + (m2 - m1) * (2.0 / 3.0 - h) * 6.0;
    return m1;
}
// Returns color value specified by hue, saturation and lightness and alpha.
// HSL values are all in range [0..1], alpha in range [0..255]
// NVGcolor nvgHSLA(float h, float s, float l, unsigned char a);
export function nvgHSLA(h, s, l, a, out = new NVGcolor()) {
    h = nvg__modf(h, 1.0);
    if (h < 0.0)
        h += 1.0;
    s = nvg__clampf(s, 0.0, 1.0);
    l = nvg__clampf(l, 0.0, 1.0);
    const m2 = l <= 0.5 ? (l * (1 + s)) : (l + s - l * s);
    const m1 = 2 * l - m2;
    out.r = nvg__clampf(nvg__hue(h + 1.0 / 3.0, m1, m2), 0.0, 1.0);
    out.g = nvg__clampf(nvg__hue(h, m1, m2), 0.0, 1.0);
    out.b = nvg__clampf(nvg__hue(h - 1.0 / 3.0, m1, m2), 0.0, 1.0);
    out.a = a / 255.0;
    return out;
}
//
// State Handling
//
// NanoVG contains state which represents how paths will be rendered.
// The state contains transform, fill and stroke styles, text and font styles,
// and scissor clipping.
// Pushes and saves the current render state into a state stack.
// A matching nvgRestore() must be used to restore the state.
// void nvgSave(NVGcontext* ctx);
export function nvgSave(ctx) {
    bind.nvgSave(ctx);
}
// Pops and restores current render state.
// void nvgRestore(NVGcontext* ctx);
export function nvgRestore(ctx) {
    bind.nvgRestore(ctx);
}
// Resets current render state to default values. Does not affect the render state stack.
// void nvgReset(NVGcontext* ctx);
export function nvgReset(ctx) {
    bind.nvgReset(ctx);
}
//
// Render styles
//
// Fill and stroke render style can be either a solid color or a paint which is a gradient or a pattern.
// Solid color is simply defined as a color value, different kinds of paints can be created
// using nvgLinearGradient(), nvgBoxGradient(), nvgRadialGradient() and nvgImagePattern().
//
// Current render style can be saved and restored using nvgSave() and nvgRestore().
// Sets whether to draw antialias for nvgStroke() and nvgFill(). It's enabled by default.
// void nvgShapeAntiAlias(NVGcontext* ctx, int enabled);
export function nvgShapeAntiAlias(ctx, enabled = true) {
    bind.nvgShapeAntiAlias(ctx, enabled ? 1 : 0);
}
// Sets current stroke style to a solid color.
// void nvgStrokeColor(NVGcontext* ctx, NVGcolor color);
export function nvgStrokeColor(ctx, color) {
    bind.nvgStrokeColor(ctx, color);
}
// Sets current stroke style to a paint, which can be a one of the gradients or a pattern.
// void nvgStrokePaint(NVGcontext* ctx, NVGpaint paint);
export function nvgStrokePaint(ctx, paint) {
    bind.nvgStrokePaint(ctx, paint);
}
// Sets current fill style to a solid color.
// void nvgFillColor(NVGcontext* ctx, NVGcolor color);
export function nvgFillColor(ctx, color) {
    bind.nvgFillColor(ctx, color);
}
// Sets current fill style to a paint, which can be a one of the gradients or a pattern.
// void nvgFillPaint(NVGcontext* ctx, NVGpaint paint);
export function nvgFillPaint(ctx, paint) {
    bind.nvgFillPaint(ctx, paint);
}
// Sets the miter limit of the stroke style.
// Miter limit controls when a sharp corner is beveled.
// void nvgMiterLimit(NVGcontext* ctx, float limit);
export function nvgMiterLimit(ctx, limit) {
    bind.nvgMiterLimit(ctx, limit);
}
// Sets the stroke width of the stroke style.
// void nvgStrokeWidth(NVGcontext* ctx, float size);
export function nvgStrokeWidth(ctx, size) {
    bind.nvgStrokeWidth(ctx, size);
}
// Sets how the end of the line (cap) is drawn,
// Can be one of: NVG_BUTT (default), NVG_ROUND, NVG_SQUARE.
// void nvgLineCap(NVGcontext* ctx, int cap);
export function nvgLineCap(ctx, cap) {
    bind.nvgLineCap(ctx, cap);
}
// Sets how sharp path corners are drawn.
// Can be one of NVG_MITER (default), NVG_ROUND, NVG_BEVEL.
// void nvgLineJoin(NVGcontext* ctx, int join);
export function nvgLineJoin(ctx, join) {
    bind.nvgLineJoin(ctx, join);
}
// Sets the transparency applied to all rendered shapes.
// Already transparent paths will get proportionally more transparent as well.
// void nvgGlobalAlpha(NVGcontext* ctx, float alpha);
export function nvgGlobalAlpha(ctx, alpha) {
    bind.nvgGlobalAlpha(ctx, alpha);
}
//
// Transforms
//
// The paths, gradients, patterns and scissor region are transformed by an transformation
// matrix at the time when they are passed to the API.
// The current transformation matrix is a affine matrix:
//   [sx kx tx]
//   [ky sy ty]
//   [ 0  0  1]
// Where: sx,sy define scaling, kx,ky skewing, and tx,ty translation.
// The last row is assumed to be 0,0,1 and is not stored.
//
// Apart from nvgResetTransform(), each transformation function first creates
// specific transformation matrix and pre-multiplies the current transformation by it.
//
// Current coordinate system (transformation) can be saved and restored using nvgSave() and nvgRestore().
// Resets current transform to a identity matrix.
// void nvgResetTransform(NVGcontext* ctx);
export function nvgResetTransform(ctx) {
    bind.nvgResetTransform(ctx);
}
// Premultiplies current coordinate system by specified matrix.
// The parameters are interpreted as matrix as follows:
//   [a c e]
//   [b d f]
//   [0 0 1]
// void nvgTransform(NVGcontext* ctx, float a, float b, float c, float d, float e, float f);
export function nvgTransform(ctx, a, b, c, d, e, f) {
    bind.nvgTransform(ctx, a, b, c, d, e, f);
}
// Translates current coordinate system.
// void nvgTranslate(NVGcontext* ctx, float x, float y);
export function nvgTranslate(ctx, x, y) {
    bind.nvgTranslate(ctx, x, y);
}
// Rotates current coordinate system. Angle is specified in radians.
// void nvgRotate(NVGcontext* ctx, float angle);
export function nvgRotate(ctx, angle) {
    bind.nvgRotate(ctx, angle);
}
// Skews the current coordinate system along X axis. Angle is specified in radians.
// void nvgSkewX(NVGcontext* ctx, float angle);
export function nvgSkewX(ctx, angle) {
    bind.nvgSkewX(ctx, angle);
}
// Skews the current coordinate system along Y axis. Angle is specified in radians.
// void nvgSkewY(NVGcontext* ctx, float angle);
export function nvgSkewY(ctx, angle) {
    bind.nvgSkewY(ctx, angle);
}
// Scales the current coordinate system.
// void nvgScale(NVGcontext* ctx, float x, float y);
export function nvgScale(ctx, x, y) {
    bind.nvgScale(ctx, x, y);
}
// Stores the top part (a-f) of the current transformation matrix in to the specified buffer.
//   [a c e]
//   [b d f]
//   [0 0 1]
// There should be space for 6 floats in the return buffer for the values a-f.
// void nvgCurrentTransform(NVGcontext* ctx, float* xform);
export function nvgCurrentTransform(ctx, xform) {
    bind.nvgCurrentTransform(ctx, xform);
}
// The following functions can be used to make calculations on 2x3 transformation matrices.
// A 2x3 matrix is represented as float[6].
// Sets the transform to identity matrix.
// void nvgTransformIdentity(float* dst);
export function nvgTransformIdentity(dst) {
    dst[0] = 1.0;
    dst[1] = 0.0;
    dst[2] = 0.0;
    dst[3] = 1.0;
    dst[4] = 0.0;
    dst[5] = 0.0;
}
// Sets the transform to translation matrix matrix.
// void nvgTransformTranslate(float* dst, float tx, float ty);
export function nvgTransformTranslate(dst, tx, ty) {
    dst[0] = 1.0;
    dst[1] = 0.0;
    dst[2] = 0.0;
    dst[3] = 1.0;
    dst[4] = tx;
    dst[5] = ty;
}
// Sets the transform to scale matrix.
// void nvgTransformScale(float* dst, float sx, float sy);
export function nvgTransformScale(dst, sx, sy) {
    dst[0] = sx;
    dst[1] = 0.0;
    dst[2] = 0.0;
    dst[3] = sy;
    dst[4] = 0.0;
    dst[5] = 0.0;
}
// Sets the transform to rotate matrix. Angle is specified in radians.
// void nvgTransformRotate(float* dst, float a);
export function nvgTransformRotate(dst, a) {
    const cs = Math.cos(a), sn = Math.sin(a);
    dst[0] = cs;
    dst[1] = sn;
    dst[2] = -sn;
    dst[3] = cs;
    dst[4] = 0.0;
    dst[5] = 0.0;
}
// Sets the transform to skew-x matrix. Angle is specified in radians.
// void nvgTransformSkewX(float* dst, float a);
export function nvgTransformSkewX(dst, a) {
    dst[0] = 1.0;
    dst[1] = 0.0;
    dst[2] = Math.tan(a);
    dst[3] = 1.0;
    dst[4] = 0.0;
    dst[5] = 0.0;
}
// Sets the transform to skew-y matrix. Angle is specified in radians.
// void nvgTransformSkewY(float* dst, float a);
export function nvgTransformSkewY(dst, a) {
    dst[0] = 1.0;
    dst[1] = Math.tan(a);
    dst[2] = 0.0;
    dst[3] = 1.0;
    dst[4] = 0.0;
    dst[5] = 0.0;
}
// Sets the transform to the result of multiplication of two transforms, of A = A*B.
// void nvgTransformMultiply(float* dst, const float* src);
export function nvgTransformMultiply(dst, src) {
    const t0 = dst[0] * src[0] + dst[1] * src[2];
    const t2 = dst[2] * src[0] + dst[3] * src[2];
    const t4 = dst[4] * src[0] + dst[5] * src[2] + src[4];
    dst[1] = dst[0] * src[1] + dst[1] * src[3];
    dst[3] = dst[2] * src[1] + dst[3] * src[3];
    dst[5] = dst[4] * src[1] + dst[5] * src[3] + src[5];
    dst[0] = t0;
    dst[2] = t2;
    dst[4] = t4;
}
// Sets the transform to the result of multiplication of two transforms, of A = B*A.
// void nvgTransformPremultiply(float* dst, const float* src);
const s2 = new Float32Array(6); // float s2[6];
export function nvgTransformPremultiply(dst, src) {
    s2.set(src); // memcpy(s2, src, sizeof(float)*6);
    nvgTransformMultiply(s2, dst);
    dst.set(s2); // memcpy(dst, s2, sizeof(float)*6);
}
// Sets the destination to inverse of specified transform.
// Returns 1 if the inverse could be calculated, else 0.
// int nvgTransformInverse(float* dst, const float* src);
export function nvgTransformInverse(dst, src) {
    const det = src[0] * src[3] - src[2] * src[1];
    if (det > -1e-6 && det < 1e-6) {
        nvgTransformIdentity(dst);
        return 0;
    }
    const invdet = 1.0 / det;
    dst[0] = src[3] * invdet;
    dst[2] = -src[2] * invdet;
    dst[4] = (src[2] * src[5] - src[3] * src[4]) * invdet;
    dst[1] = -src[1] * invdet;
    dst[3] = src[0] * invdet;
    dst[5] = (src[1] * src[4] - src[0] * src[5]) * invdet;
    return 1;
}
// Transform a point by given transform.
// void nvgTransformPoint(float* dstx, float* dsty, const float* xform, float srcx, float srcy);
export function nvgTransformPoint(dst, xform, src) {
    const srcx = src[0], srcy = src[1];
    dst[0] = srcx * xform[0] + srcy * xform[2] + xform[4];
    dst[1] = srcx * xform[1] + srcy * xform[3] + xform[5];
}
// Converts degrees to radians and vice versa.
// float nvgDegToRad(float deg);
export function nvgDegToRad(deg) {
    return deg / 180.0 * NVG_PI;
}
// float nvgRadToDeg(float rad);
export function nvgRadToDeg(rad) {
    return rad / NVG_PI * 180.0;
}
//
// Images
//
// NanoVG allows you to load jpg, png, psd, tga, pic and gif files to be used for rendering.
// In addition you can upload your own image. The image loading is provided by stb_image.
// The parameter imageFlags is combination of flags defined in NVGimageFlags.
// Creates image by loading it from the disk from specified file name.
// Returns handle to the image.
// int nvgCreateImage(NVGcontext* ctx, const char* filename, int imageFlags);
export function nvgCreateImage(ctx, filename, imageFlags) {
    return nvgCreateImage(ctx, filename, imageFlags);
}
// Creates image by loading it from the specified chunk of memory.
// Returns handle to the image.
// int nvgCreateImageMem(NVGcontext* ctx, int imageFlags, unsigned char* data, int ndata);
export function nvgCreateImageMem(ctx, imageFlags, data) {
    return bind.nvgCreateImageMem(ctx, imageFlags, data);
}
// Creates image from specified image data.
// Returns handle to the image.
// int nvgCreateImageRGBA(NVGcontext* ctx, int w, int h, int imageFlags, const unsigned char* data);
export function nvgCreateImageRGBA(ctx, w, h, imageFlags, data) {
    return bind.nvgCreateImageRGBA(ctx, w, h, imageFlags, data);
}
// Updates image data specified by image handle.
// void nvgUpdateImage(NVGcontext* ctx, int image, const unsigned char* data);
export function nvgUpdateImage(ctx, image, data) {
    bind.nvgUpdateImage(ctx, image, data);
}
// Returns the dimensions of a created image.
// void nvgImageSize(NVGcontext* ctx, int image, int* w, int* h);
export function nvgImageSize(ctx, image, w, h) {
    bind.nvgImageSize(ctx, image, w, h);
}
// Deletes created image.
// void nvgDeleteImage(NVGcontext* ctx, int image);
export function nvgDeleteImage(ctx, image) {
    bind.nvgDeleteImage(ctx, image);
}
//
// Paints
//
// NanoVG supports four types of paints: linear gradient, box gradient, radial gradient and image pattern.
// These can be used as paints for strokes and fills.
// Creates and returns a linear gradient. Parameters (sx,sy)-(ex,ey) specify the start and end coordinates
// of the linear gradient, icol specifies the start color and ocol the end color.
// The gradient is transformed by the current transform when it is passed to nvgFillPaint() or nvgStrokePaint().
// NVGpaint nvgLinearGradient(NVGcontext* ctx, float sx, float sy, float ex, float ey, NVGcolor icol, NVGcolor ocol);
export function nvgLinearGradient(ctx, sx, sy, ex, ey, icol, ocol, out = new NVGpaint()) {
    bind.nvgLinearGradient(ctx, sx, sy, ex, ey, icol, ocol, out);
    return out;
}
// Creates and returns a box gradient. Box gradient is a feathered rounded rectangle, it is useful for rendering
// drop shadows or highlights for boxes. Parameters (x,y) define the top-left corner of the rectangle,
// (w,h) define the size of the rectangle, r defines the corner radius, and f feather. Feather defines how blurry
// the border of the rectangle is. Parameter icol specifies the inner color and ocol the outer color of the gradient.
// The gradient is transformed by the current transform when it is passed to nvgFillPaint() or nvgStrokePaint().
// NVGpaint nvgBoxGradient(NVGcontext* ctx, float x, float y, float w, float h, float r, float f, NVGcolor icol, NVGcolor ocol);
export function nvgBoxGradient(ctx, x, y, w, h, r, f, icol, ocol, out = new NVGpaint()) {
    bind.nvgBoxGradient(ctx, x, y, w, h, r, f, icol, ocol, out);
    return out;
}
// Creates and returns a radial gradient. Parameters (cx,cy) specify the center, inr and outr specify
// the inner and outer radius of the gradient, icol specifies the start color and ocol the end color.
// The gradient is transformed by the current transform when it is passed to nvgFillPaint() or nvgStrokePaint().
// NVGpaint nvgRadialGradient(NVGcontext* ctx, float cx, float cy, float inr, float outr, NVGcolor icol, NVGcolor ocol);
export function nvgRadialGradient(ctx, cx, cy, inr, outr, icol, ocol, out = new NVGpaint()) {
    bind.nvgRadialGradient(ctx, cx, cy, inr, outr, icol, ocol, out);
    return out;
}
// Creates and returns an image patter. Parameters (ox,oy) specify the left-top location of the image pattern,
// (ex,ey) the size of one image, angle rotation around the top-left corner, image is handle to the image to render.
// The gradient is transformed by the current transform when it is passed to nvgFillPaint() or nvgStrokePaint().
// NVGpaint nvgImagePattern(NVGcontext* ctx, float ox, float oy, float ex, float ey, float angle, int image, float alpha);
export function nvgImagePattern(ctx, ox, oy, ex, ey, angle, image, alpha, out = new NVGpaint()) {
    bind.nvgImagePattern(ctx, ox, oy, ex, ey, angle, image, alpha, out);
    return out;
}
//
// Scissoring
//
// Scissoring allows you to clip the rendering into a rectangle. This is useful for various
// user interface cases like rendering a text edit or a timeline.
// Sets the current scissor rectangle.
// The scissor rectangle is transformed by the current transform.
// void nvgScissor(NVGcontext* ctx, float x, float y, float w, float h);
export function nvgScissor(ctx, x, y, w, h) {
    bind.nvgScissor(ctx, x, y, w, h);
}
// Intersects current scissor rectangle with the specified rectangle.
// The scissor rectangle is transformed by the current transform.
// Note: in case the rotation of previous scissor rect differs from
// the current one, the intersection will be done between the specified
// rectangle and the previous scissor rectangle transformed in the current
// transform space. The resulting shape is always rectangle.
// void nvgIntersectScissor(NVGcontext* ctx, float x, float y, float w, float h);
export function nvgIntersectScissor(ctx, x, y, w, h) {
    bind.nvgIntersectScissor(ctx, x, y, w, h);
}
// Reset and disables scissoring.
// void nvgResetScissor(NVGcontext* ctx);
export function nvgResetScissor(ctx) {
    bind.nvgResetScissor(ctx);
}
//
// Paths
//
// Drawing a new shape starts with nvgBeginPath(), it clears all the currently defined paths.
// Then you define one or more paths and sub-paths which describe the shape. The are functions
// to draw common shapes like rectangles and circles, and lower level step-by-step functions,
// which allow to define a path curve by curve.
//
// NanoVG uses even-odd fill rule to draw the shapes. Solid shapes should have counter clockwise
// winding and holes should have counter clockwise order. To specify winding of a path you can
// call nvgPathWinding(). This is useful especially for the common shapes, which are drawn CCW.
//
// Finally you can fill the path using current fill style by calling nvgFill(), and stroke it
// with current stroke style by calling nvgStroke().
//
// The curve segments and sub-paths are transformed by the current transform.
// Clears the current path and sub-paths.
// void nvgBeginPath(NVGcontext* ctx);
export function nvgBeginPath(ctx) {
    bind.nvgBeginPath(ctx);
}
// Starts new sub-path with specified point as first point.
// void nvgMoveTo(NVGcontext* ctx, float x, float y);
export function nvgMoveTo(ctx, x, y) {
    bind.nvgMoveTo(ctx, x, y);
}
// Adds line segment from the last point in the path to the specified point.
// void nvgLineTo(NVGcontext* ctx, float x, float y);
export function nvgLineTo(ctx, x, y) {
    bind.nvgLineTo(ctx, x, y);
}
// Adds cubic bezier segment from last point in the path via two control points to the specified point.
// void nvgBezierTo(NVGcontext* ctx, float c1x, float c1y, float c2x, float c2y, float x, float y);
export function nvgBezierTo(ctx, c1x, c1y, c2x, c2y, x, y) {
    bind.nvgBezierTo(ctx, c1x, c1y, c2x, c2y, x, y);
}
// Adds quadratic bezier segment from last point in the path via a control point to the specified point.
// void nvgQuadTo(NVGcontext* ctx, float cx, float cy, float x, float y);
export function nvgQuadTo(ctx, cx, cy, x, y) {
    bind.nvgQuadTo(ctx, cx, cy, x, y);
}
// Adds an arc segment at the corner defined by the last path point, and two specified points.
// void nvgArcTo(NVGcontext* ctx, float x1, float y1, float x2, float y2, float radius);
export function nvgArcTo(ctx, x1, y1, x2, y2, radius) {
    bind.nvgArcTo(ctx, x1, y1, x2, y2, radius);
}
// Closes current sub-path with a line segment.
// void nvgClosePath(NVGcontext* ctx);
export function nvgClosePath(ctx) {
    bind.nvgClosePath(ctx);
}
// Sets the current sub-path winding, see NVGwinding and NVGsolidity.
// void nvgPathWinding(NVGcontext* ctx, int dir);
export function nvgPathWinding(ctx, dir) {
    bind.nvgPathWinding(ctx, dir);
}
// Creates new circle arc shaped sub-path. The arc center is at cx,cy, the arc radius is r,
// and the arc is drawn from angle a0 to a1, and swept in direction dir (NVG_CCW, or NVG_CW).
// Angles are specified in radians.
// void nvgArc(NVGcontext* ctx, float cx, float cy, float r, float a0, float a1, int dir);
export function nvgArc(ctx, cx, cy, r, a0, a1, dir) {
    bind.nvgArc(ctx, cx, cy, r, a0, a1, dir);
}
// Creates new rectangle shaped sub-path.
// void nvgRect(NVGcontext* ctx, float x, float y, float w, float h);
export function nvgRect(ctx, x, y, w, h) {
    bind.nvgRect(ctx, x, y, w, h);
}
// Creates new rounded rectangle shaped sub-path.
// void nvgRoundedRect(NVGcontext* ctx, float x, float y, float w, float h, float r);
export function nvgRoundedRect(ctx, x, y, w, h, r) {
    bind.nvgRoundedRect(ctx, x, y, w, h, r);
}
// Creates new rounded rectangle shaped sub-path with varying radii for each corner.
// void nvgRoundedRectVarying(NVGcontext* ctx, float x, float y, float w, float h, float radTopLeft, float radTopRight, float radBottomRight, float radBottomLeft);
export function nvgRoundedRectVarying(ctx, x, y, w, h, radTopLeft, radTopRight, radBottomRight, radBottomLeft) {
    bind.nvgRoundedRectVarying(ctx, x, y, w, h, radTopLeft, radTopRight, radBottomRight, radBottomLeft);
}
// Creates new ellipse shaped sub-path.
// void nvgEllipse(NVGcontext* ctx, float cx, float cy, float rx, float ry);
export function nvgEllipse(ctx, cx, cy, rx, ry) {
    bind.nvgEllipse(ctx, cx, cy, rx, ry);
}
// Creates new circle shaped sub-path.
// void nvgCircle(NVGcontext* ctx, float cx, float cy, float r);
export function nvgCircle(ctx, cx, cy, r) {
    bind.nvgCircle(ctx, cx, cy, r);
}
// Fills the current path with current fill style.
// void nvgFill(NVGcontext* ctx);
export function nvgFill(ctx) {
    bind.nvgFill(ctx);
}
// Fills the current path with current stroke style.
// void nvgStroke(NVGcontext* ctx);
export function nvgStroke(ctx) {
    bind.nvgStroke(ctx);
}
//
// Text
//
// NanoVG allows you to load .ttf files and use the font to render text.
//
// The appearance of the text can be defined by setting the current text style
// and by specifying the fill color. Common text and font settings such as
// font size, letter spacing and text align are supported. Font blur allows you
// to create simple text effects such as drop shadows.
//
// At render time the font face can be set based on the font handles or name.
//
// Font measure functions return values in local space, the calculations are
// carried in the same resolution as the final rendering. This is done because
// the text glyph positions are snapped to the nearest pixels sharp rendering.
//
// The local space means that values are not rotated or scale as per the current
// transformation. For example if you set font size to 12, which would mean that
// line height is 16, then regardless of the current scaling and rotation, the
// returned line height is always 16. Some measures may vary because of the scaling
// since aforementioned pixel snapping.
//
// While this may sound a little odd, the setup allows you to always render the
// same way regardless of scaling. I.e. following works regardless of scaling:
//
//    const char* txt = "Text me up.";
//    nvgTextBounds(vg, x,y, txt, NULL, bounds);
//    nvgBeginPath(vg);
//    nvgRoundedRect(vg, bounds[0],bounds[1], bounds[2]-bounds[0], bounds[3]-bounds[1]);
//    nvgFill(vg);
//
// Note: currently only solid color fill is supported for text.
// Creates font by loading it from the disk from specified file name.
// Returns handle to the font.
// int nvgCreateFont(NVGcontext* ctx, const char* name, const char* filename);
export function nvgCreateFont(ctx, name, filename) {
    return bind.nvgCreateFont(ctx, name, filename);
}
// Creates font by loading it from the specified memory chunk.
// Returns handle to the font.
// int nvgCreateFontMem(NVGcontext* ctx, const char* name, unsigned char* data, int ndata, int freeData);
export function nvgCreateFontMem(ctx, name, data) {
    return bind.nvgCreateFontMem(ctx, name, data);
}
// Finds a loaded font of specified name, and returns handle to it, or -1 if the font is not found.
// int nvgFindFont(NVGcontext* ctx, const char* name);
export function nvgFindFont(ctx, name) {
    return bind.nvgFindFont(ctx, name);
}
// Adds a fallback font by handle.
// int nvgAddFallbackFontId(NVGcontext* ctx, int baseFont, int fallbackFont);
export function nvgAddFallbackFontId(ctx, baseFont, fallbackFont) {
    return bind.nvgAddFallbackFontId(ctx, baseFont, fallbackFont);
}
// Adds a fallback font by name.
// int nvgAddFallbackFont(NVGcontext* ctx, const char* baseFont, const char* fallbackFont);
export function nvgAddFallbackFont(ctx, baseFont, fallbackFont) {
    return bind.nvgAddFallbackFont(ctx, baseFont, fallbackFont);
}
// Sets the font size of current text style.
// void nvgFontSize(NVGcontext* ctx, float size);
export function nvgFontSize(ctx, size) {
    bind.nvgFontSize(ctx, size);
}
// Sets the blur of current text style.
// void nvgFontBlur(NVGcontext* ctx, float blur);
export function nvgFontBlur(ctx, blur) {
    bind.nvgFontBlur(ctx, blur);
}
// Sets the letter spacing of current text style.
// void nvgTextLetterSpacing(NVGcontext* ctx, float spacing);
export function nvgTextLetterSpacing(ctx, spacing) {
    bind.nvgTextLetterSpacing(ctx, spacing);
}
// Sets the proportional line height of current text style. The line height is specified as multiple of font size.
// void nvgTextLineHeight(NVGcontext* ctx, float lineHeight);
export function nvgTextLineHeight(ctx, lineHeight) {
    bind.nvgTextLineHeight(ctx, lineHeight);
}
// Sets the text align of current text style, see NVGalign for options.
// void nvgTextAlign(NVGcontext* ctx, int align);
export function nvgTextAlign(ctx, align) {
    bind.nvgTextAlign(ctx, align);
}
// Sets the font face based on specified id of current text style.
// void nvgFontFaceId(NVGcontext* ctx, int font);
export function nvgFontFaceId(ctx, font) {
    bind.nvgFontFaceId(ctx, font);
}
// Sets the font face based on specified name of current text style.
// void nvgFontFace(NVGcontext* ctx, const char* font);
export function nvgFontFace(ctx, font) {
    bind.nvgFontFace(ctx, font);
}
// Draws text string at specified location. If end is specified only the sub-string up to the end is drawn.
// float nvgText(NVGcontext* ctx, float x, float y, const char* string, const char* end);
export function nvgText(ctx, x, y, string, end = null) {
    return bind.nvgText(ctx, x, y, string, end === null ? 0 : end);
}
// Draws multi-line text string at specified location wrapped at the specified width. If end is specified only the sub-string up to the end is drawn.
// White space is stripped at the beginning of the rows, the text is split at word boundaries or when new-line characters are encountered.
// Words longer than the max width are slit at nearest character (i.e. no hyphenation).
// void nvgTextBox(NVGcontext* ctx, float x, float y, float breakRowWidth, const char* string, const char* end);
export function nvgTextBox(ctx, x, y, breakRowWidth, string, end = null) {
    bind.nvgTextBox(ctx, x, y, breakRowWidth, string, end === null ? 0 : end);
}
// Measures the specified text string. Parameter bounds should be a pointer to float[4],
// if the bounding box of the text should be returned. The bounds value are [xmin,ymin, xmax,ymax]
// Returns the horizontal advance of the measured text (i.e. where the next character should drawn).
// Measured values are returned in local coordinate space.
// float nvgTextBounds(NVGcontext* ctx, float x, float y, const char* string, const char* end, float* bounds);
export function nvgTextBounds(ctx, x, y, string, end = null, bounds = null) {
    return bind.nvgTextBounds(ctx, x, y, string, end === null ? 0 : end, bounds);
}
// Measures the specified multi-text string. Parameter bounds should be a pointer to float[4],
// if the bounding box of the text should be returned. The bounds value are [xmin,ymin, xmax,ymax]
// Measured values are returned in local coordinate space.
// void nvgTextBoxBounds(NVGcontext* ctx, float x, float y, float breakRowWidth, const char* string, const char* end, float* bounds);
export function nvgTextBoxBounds(ctx, x, y, breakRowWidth, string, end, bounds) {
    bind.nvgTextBoxBounds(ctx, x, y, breakRowWidth, string, end === null ? 0 : end, bounds);
}
// Calculates the glyph x positions of the specified text. If end is specified only the sub-string will be used.
// Measured values are returned in local coordinate space.
// int nvgTextGlyphPositions(NVGcontext* ctx, float x, float y, const char* string, const char* end, NVGglyphPosition* positions, int maxPositions);
export function nvgTextGlyphPositions(ctx, x, y, string, end, positions) {
    return bind.nvgTextGlyphPositions(ctx, x, y, string, end === null ? 0 : end, positions, positions.length);
}
// Returns the vertical metrics based on the current text style.
// Measured values are returned in local coordinate space.
// void nvgTextMetrics(NVGcontext* ctx, float* ascender, float* descender, float* lineh);
export function nvgTextMetrics(ctx, ascender, descender, lineh) {
    bind.nvgTextMetrics(ctx, ascender, descender, lineh);
}
// Breaks the specified text into lines. If end is specified only the sub-string will be used.
// White space is stripped at the beginning of the rows, the text is split at word boundaries or when new-line characters are encountered.
// Words longer than the max width are slit at nearest character (i.e. no hyphenation).
// int nvgTextBreakLines(NVGcontext* ctx, const char* string, const char* end, float breakRowWidth, NVGtextRow* rows, int maxRows);
export function nvgTextBreakLines(ctx, string, end, breakRowWidth, rows) {
    return bind.nvgTextBreakLines(ctx, string, end === null ? 0 : end, breakRowWidth, rows, rows.length);
}
//
// Internal Render API
//
// export enum NVGtexture {
//   ALPHA = 0x01,
//   RGBA = 0x02,
// }
// struct NVGscissor {
//   float xform[6];
//   float extent[2];
// };
// typedef struct NVGscissor NVGscissor;
// export class NVGscissor implements Bind.NVGscissor {
//   xform: Float32Array;
//   extent: Float32Array;
//   constructor(public _array = new Float32Array(8)) {
//     this.xform = new Float32Array(this._array.subarray(0, 6));
//     this.extent = new Float32Array(this._array.subarray(6, 8));
//   }
// }
// struct NVGvertex {
//   float x,y,u,v;
// };
// typedef struct NVGvertex NVGvertex;
// export class NVGvertex implements Bind.NVGvertex {
//   constructor(public xyuv = new Float32Array(4)) {
//   }
//   get x(): number { return this.xyuv[0]; } set x(value: number) { this.xyuv[0] = value; }
//   get y(): number { return this.xyuv[1]; } set y(value: number) { this.xyuv[1] = value; }
//   get u(): number { return this.xyuv[2]; } set u(value: number) { this.xyuv[2] = value; }
//   get v(): number { return this.xyuv[3]; } set v(value: number) { this.xyuv[3] = value; }
// }
// struct NVGpath {
//   int first;
//   int count;
//   unsigned char closed;
//   int nbevel;
//   NVGvertex* fill;
//   int nfill;
//   NVGvertex* stroke;
//   int nstroke;
//   int winding;
//   int convex;
// };
// typedef struct NVGpath NVGpath;
// export class NVGpath implements Bind.NVGpath {
//   first: number = 0;
//   count: number = 0;
//   closed: boolean = false;
//   nbevel: number = 0;
//   fill: NVGvertex[] = []; // NVGvertex* fill;
//   nfill: number = 0;
//   stroke: NVGvertex[] = []; // NVGvertex* stroke;
//   nstroke: number = 0;
//   winding: number = 0;
//   convex: number = 0;
// }
// struct NVGparams {
//   void* userPtr;
//   int edgeAntiAlias;
//   int (*renderCreate)(void* uptr);
//   int (*renderCreateTexture)(void* uptr, int type, int w, int h, int imageFlags, const unsigned char* data);
//   int (*renderDeleteTexture)(void* uptr, int image);
//   int (*renderUpdateTexture)(void* uptr, int image, int x, int y, int w, int h, const unsigned char* data);
//   int (*renderGetTextureSize)(void* uptr, int image, int* w, int* h);
//   void (*renderViewport)(void* uptr, float width, float height, float devicePixelRatio);
//   void (*renderCancel)(void* uptr);
//   void (*renderFlush)(void* uptr);
//   void (*renderFill)(void* uptr, NVGpaint* paint, NVGcompositeOperationState compositeOperation, NVGscissor* scissor, float fringe, const float* bounds, const NVGpath* paths, int npaths);
//   void (*renderStroke)(void* uptr, NVGpaint* paint, NVGcompositeOperationState compositeOperation, NVGscissor* scissor, float fringe, float strokeWidth, const NVGpath* paths, int npaths);
//   void (*renderTriangles)(void* uptr, NVGpaint* paint, NVGcompositeOperationState compositeOperation, NVGscissor* scissor, const NVGvertex* verts, int nverts);
//   void (*renderDelete)(void* uptr);
// };
// typedef struct NVGparams NVGparams;
// export class NVGparams implements Bind.NVGparams {
//   userPtr: any = null;
//   edgeAntiAlias: boolean = false;
//   renderCreate!: (uptr: any) => number;
//   renderCreateTexture!: (uptr: any, type: NVGtexture, w: number, h: number, imageFlags: NVGimageFlags, data: ArrayBufferView) => number;
//   renderDeleteTexture!: (uptr: any, image: number) => number;
//   renderUpdateTexture!: (uptr: any, image: number, x: number, y: number, w: number, h: number, data: ArrayBufferView) => number;
//   renderGetTextureSize!: (uptr: any, image: number, w: [number], h: [number]) => number;
//   renderViewport!: (uptr: any, width: number, height: number, devidePixelRatio: number) => void;
//   renderCancel!: (uptr: any) => void;
//   renderFlush!: (uptr: any) => void;
//   renderFill!: (uptr: any, paint: Bind.reference_NVGpaint, compositeOperation: Bind.reference_NVGcompositeOperationState, scissor: Bind.reference_NVGscissor, fringe: number, bounds: Float32Array, paths: Bind.NVGpath[], npaths: number) => void;
//   renderStroke!: (uptr: any, paint: Bind.reference_NVGpaint, compositeOperation: Bind.reference_NVGcompositeOperationState, scissor: Bind.reference_NVGscissor, fringe: number, strokeWidth: number, paths: ArrayBufferView, npaths: number) => void;
//   renderTriangles!: (uptr: any, paint: Bind.reference_NVGpaint, compositeOperation: Bind.reference_NVGcompositeOperationState, scissor: Bind.reference_NVGscissor, verts: Bind.NVGvertex[], nverts: number) => void;
//   renderDelete!: (uptr: any) => void;
// }
// Constructor and destructor, called by the render back-end.
// NVGcontext* nvgCreateInternal(NVGparams* params);
// export function nvgCreateInternal(params: NVGparams): NVGcontext {
//   return bind.nvgCreateInternal(params);
// }
// void nvgDeleteInternal(NVGcontext* ctx);
// export function nvgDeleteInternal(ctx: NVGcontext): void {
//   bind.nvgDeleteInternal(ctx);
// }
// NVGparams* nvgInternalParams(NVGcontext* ctx);
// export function nvgInternalParams(ctx: NVGcontext): NVGparams {
//   return bind.nvgInternalParams(ctx);
// }
// Debug function to dump cached path data.
// void nvgDebugDumpPathCache(NVGcontext* ctx);
export function nvgDebugDumpPathCache(ctx) {
    bind.nvgDebugDumpPathCache(ctx);
}
// nanovg_gl.h
export var NVGcreateFlags;
(function (NVGcreateFlags) {
    // Flag indicating if geometry based anti-aliasing is used (may not be needed when using MSAA).
    NVGcreateFlags[NVGcreateFlags["ANTIALIAS"] = 1] = "ANTIALIAS";
    // Flag indicating if strokes should be drawn using stencil buffer. The rendering will be a little
    // slower, but path overlaps (i.e. self-intersecting or sharp turns) will be drawn just once.
    NVGcreateFlags[NVGcreateFlags["STENCIL_STROKES"] = 2] = "STENCIL_STROKES";
    // Flag indicating that additional debug checks are done.
    NVGcreateFlags[NVGcreateFlags["DEBUG"] = 4] = "DEBUG";
})(NVGcreateFlags || (NVGcreateFlags = {}));
// NVGcontext* nvgCreateGLES2(int flags);
export function nvgCreateWebGL(gl, flags) {
    return bind.nvgCreateWebGL(gl, flags);
}
// void nvgDeleteGLES2(NVGcontext* ctx);
export function nvgDeleteWebGL(ctx) {
    bind.nvgDeleteWebGL(ctx);
}
// int nvglCreateImageFromHandleGLES2(NVGcontext* ctx, GLuint textureId, int w, int h, int flags);
export function nvglCreateImageFromHandleWebGL(ctx, textureId, w, h, flags) {
    return bind.nvglCreateImageFromHandleWebGL(ctx, textureId, w, h, flags);
}
// GLuint nvglImageHandleGLES2(NVGcontext* ctx, int image);
export function nvglImageHandleWebGL(ctx, image) {
    return bind.nvglImageHandleWebGL(ctx, image);
}
// void nvgluBindFramebuffer(NVGLUframebuffer* fb);
export function nvgluBindFramebuffer(fb) {
    return bind.nvgluBindFramebuffer(fb);
}
// NVGLUframebuffer* nvgluCreateFramebuffer(NVGcontext* ctx, int w, int h, int imageFlags);
export function nvgluCreateFramebuffer(ctx, w, h, imageFlags) {
    return bind.nvgluCreateFramebuffer(ctx, w, h, imageFlags);
}
// void nvgluDeleteFramebuffer(NVGLUframebuffer* fb);
export function nvgluDeleteFramebuffer(fb) {
    return bind.nvgluDeleteFramebuffer(fb);
}
// 
export { NVG_PI as PI };
export { NVGcolor as Color };
export { NVGpaint as Paint };
export { NVGwinding as Winding };
export { NVGsolidity as Solidity };
export { NVGlineCap as LineCap };
export { NVGalign as Align };
export { NVGblendFactor as BlendFactor };
export { NVGcompositeOperation as CompositeOperation };
export { NVGcompositeOperationState as CompositeOperationState };
export { NVGglyphPosition as GlyphPosition };
export { NVGtextRow as TextRow };
export { NVGimageFlags as ImageFlags };
export { nvgRGB as RGB };
export { nvgRGBf as RGBf };
export { nvgRGBA as RGBA };
export { nvgRGBAf as RGBAf };
export { nvgLerpRGBA as lerpRGBA };
export { nvgTransRGBA as transRGBA };
export { nvgTransRGBAf as transRGBAf };
export { nvgHSL as HSL };
export { nvgHSLA as HSLA };
export { nvgTransformIdentity as transformIdentity };
export { nvgTransformTranslate as transformTranslate };
export { nvgTransformScale as transformScale };
export { nvgTransformRotate as transformRotate };
export { nvgTransformSkewX as transformSkewX };
export { nvgTransformSkewY as transformSkewY };
export { nvgTransformMultiply as transformMultiply };
export { nvgTransformPremultiply as transformPremultiply };
export { nvgTransformInverse as transformInverse };
export { nvgTransformPoint as transformPoint };
export { nvgDegToRad as degToRad };
export { nvgRadToDeg as radToDeg };
export class Context {
    constructor(gl, flags) {
        this.gl = gl;
        this.ctx = nvgCreateWebGL(gl, flags);
    }
    delete() {
        nvgDeleteWebGL(this.ctx);
        this.gl = null;
    }
    beginFrame(windowWidth, windowHeight, devicePixelRatio) { nvgBeginFrame(this.ctx, windowWidth, windowHeight, devicePixelRatio); }
    cancelFrame() { nvgCancelFrame(this.ctx); }
    endFrame() { nvgEndFrame(this.ctx); }
    globalCompositeOperation(op) { nvgGlobalCompositeOperation(this.ctx, op); }
    globalCompositeBlendFunc(sfactor, dfactor) { nvgGlobalCompositeBlendFunc(this.ctx, sfactor, dfactor); }
    globalCompositeBlendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha) { nvgGlobalCompositeBlendFuncSeparate(this.ctx, srcRGB, dstRGB, srcAlpha, dstAlpha); }
    RGB(r, g, b, out = new NVGcolor()) { return nvgRGB(r, g, b, out); }
    RGBf(r, g, b, out = new NVGcolor()) { return nvgRGBf(r, g, b, out); }
    RGBA(r, g, b, a, out = new NVGcolor()) { return nvgRGBA(r, g, b, a, out); }
    RGBAf(r, g, b, a, out = new NVGcolor()) { return nvgRGBAf(r, g, b, a, out); }
    lerpRGBA(c0, c1, u, out = new NVGcolor()) { return nvgLerpRGBA(c0, c1, u, out); }
    transRGBA(c, a) { return nvgTransRGBA(c, a); }
    transRGBAf(c, a) { return nvgTransRGBAf(c, a); }
    HSL(h, s, l, out = new NVGcolor()) { return nvgHSL(h, s, l, out); }
    HSLA(h, s, l, a, out = new NVGcolor()) { return nvgHSLA(h, s, l, a, out); }
    save() { nvgSave(this.ctx); }
    restore() { nvgRestore(this.ctx); }
    reset() { nvgReset(this.ctx); }
    shapeAntiAlias(enabled = true) { nvgShapeAntiAlias(this.ctx, enabled); }
    strokeColor(color) { nvgStrokeColor(this.ctx, color); }
    strokePaint(paint) { nvgStrokePaint(this.ctx, paint); }
    fillColor(color) { nvgFillColor(this.ctx, color); }
    fillPaint(paint) { nvgFillPaint(this.ctx, paint); }
    miterLimit(limit) { nvgMiterLimit(this.ctx, limit); }
    strokeWidth(size) { nvgStrokeWidth(this.ctx, size); }
    lineCap(cap) { nvgLineCap(this.ctx, cap); }
    lineJoin(join) { nvgLineJoin(this.ctx, join); }
    globalAlpha(alpha) { nvgGlobalAlpha(this.ctx, alpha); }
    resetTransform() { nvgResetTransform(this.ctx); }
    transform(a, b, c, d, e, f) { nvgTransform(this.ctx, a, b, c, d, e, f); }
    translate(x, y) { nvgTranslate(this.ctx, x, y); }
    rotate(angle) { nvgRotate(this.ctx, angle); }
    skewX(angle) { nvgSkewX(this.ctx, angle); }
    skewY(angle) { nvgSkewY(this.ctx, angle); }
    scale(x, y) { nvgScale(this.ctx, x, y); }
    currentTransform(xform) { nvgCurrentTransform(this.ctx, xform); }
    transformIdentity(dst) { nvgTransformIdentity(dst); }
    transformTranslate(dst, tx, ty) { nvgTransformTranslate(dst, tx, ty); }
    transformScale(dst, sx, sy) { nvgTransformScale(dst, sx, sy); }
    transformRotate(dst, a) { nvgTransformRotate(dst, a); }
    transformSkewX(dst, a) { nvgTransformSkewX(dst, a); }
    transformSkewY(dst, a) { nvgTransformSkewY(dst, a); }
    transformMultiply(dst, src) { nvgTransformMultiply(dst, src); }
    transformPremultiply(dst, src) { nvgTransformPremultiply(dst, src); }
    transformInverse(dst, src) { return nvgTransformInverse(dst, src); }
    transformPoint(dst, xform, src) { nvgTransformPoint(dst, xform, src); }
    degToRad(deg) { return nvgDegToRad(deg); }
    radToDeg(rad) { return nvgRadToDeg(rad); }
    createImage(filename, imageFlags) { return nvgCreateImage(this.ctx, filename, imageFlags); }
    createImageMem(imageFlags, data) { return nvgCreateImageMem(this.ctx, imageFlags, data); }
    createImageRGBA(w, h, imageFlags, data) { return nvgCreateImageRGBA(this.ctx, w, h, imageFlags, data); }
    updateImage(image, data) { nvgUpdateImage(this.ctx, image, data); }
    imageSize(image, w, h) { nvgImageSize(this.ctx, image, w, h); }
    deleteImage(image) { nvgDeleteImage(this.ctx, image); }
    linearGradient(sx, sy, ex, ey, icol, ocol, out = new NVGpaint()) { return nvgLinearGradient(this.ctx, sx, sy, ex, ey, icol, ocol, out); }
    boxGradient(x, y, w, h, r, f, icol, ocol, out = new NVGpaint()) { return nvgBoxGradient(this.ctx, x, y, w, h, r, f, icol, ocol, out); }
    radialGradient(cx, cy, inr, outr, icol, ocol, out = new NVGpaint()) { return nvgRadialGradient(this.ctx, cx, cy, inr, outr, icol, ocol, out); }
    imagePattern(ox, oy, ex, ey, angle, image, alpha, out = new NVGpaint()) { return nvgImagePattern(this.ctx, ox, oy, ex, ey, angle, image, alpha, out); }
    scissor(x, y, w, h) { nvgScissor(this.ctx, x, y, w, h); }
    intersectScissor(x, y, w, h) { nvgIntersectScissor(this.ctx, x, y, w, h); }
    resetScissor() { nvgResetScissor(this.ctx); }
    beginPath() { nvgBeginPath(this.ctx); }
    moveTo(x, y) { nvgMoveTo(this.ctx, x, y); }
    lineTo(x, y) { nvgLineTo(this.ctx, x, y); }
    bezierTo(c1x, c1y, c2x, c2y, x, y) { nvgBezierTo(this.ctx, c1x, c1y, c2x, c2y, x, y); }
    quadTo(cx, cy, x, y) { nvgQuadTo(this.ctx, cx, cy, x, y); }
    arcTo(x1, y1, x2, y2, radius) { nvgArcTo(this.ctx, x1, y1, x2, y2, radius); }
    closePath() { nvgClosePath(this.ctx); }
    pathWinding(dir) { nvgPathWinding(this.ctx, dir); }
    arc(cx, cy, r, a0, a1, dir) { nvgArc(this.ctx, cx, cy, r, a0, a1, dir); }
    rect(x, y, w, h) { nvgRect(this.ctx, x, y, w, h); }
    roundedRect(x, y, w, h, r) { nvgRoundedRect(this.ctx, x, y, w, h, r); }
    roundedRectVarying(x, y, w, h, radTopLeft, radTopRight, radBottomRight, radBottomLeft) { nvgRoundedRectVarying(this.ctx, x, y, w, h, radTopLeft, radTopRight, radBottomRight, radBottomLeft); }
    ellipse(cx, cy, rx, ry) { nvgEllipse(this.ctx, cx, cy, rx, ry); }
    circle(cx, cy, r) { nvgCircle(this.ctx, cx, cy, r); }
    fill() { nvgFill(this.ctx); }
    stroke() { nvgStroke(this.ctx); }
    createFont(name, filename) { return nvgCreateFont(this.ctx, name, filename); }
    createFontMem(name, data) { return nvgCreateFontMem(this.ctx, name, data); }
    findFont(name) { return nvgFindFont(this.ctx, name); }
    addFallbackFontId(baseFont, fallbackFont) { return nvgAddFallbackFontId(this.ctx, baseFont, fallbackFont); }
    addFallbackFont(baseFont, fallbackFont) { return nvgAddFallbackFont(this.ctx, baseFont, fallbackFont); }
    fontSize(size) { nvgFontSize(this.ctx, size); }
    fontBlur(blur) { nvgFontBlur(this.ctx, blur); }
    textLetterSpacing(spacing) { nvgTextLetterSpacing(this.ctx, spacing); }
    textLineHeight(lineHeight) { nvgTextLineHeight(this.ctx, lineHeight); }
    textAlign(align) { nvgTextAlign(this.ctx, align); }
    fontFaceId(font) { nvgFontFaceId(this.ctx, font); }
    fontFace(font) { nvgFontFace(this.ctx, font); }
    text(x, y, string, end = null) { return nvgText(this.ctx, x, y, string, end); }
    textBox(x, y, breakRowWidth, string, end = null) { nvgTextBox(this.ctx, x, y, breakRowWidth, string, end); }
    textBounds(x, y, string, end = null, bounds = null) { return nvgTextBounds(this.ctx, x, y, string, end, bounds); }
    textBoxBounds(x, y, breakRowWidth, string, end, bounds) { nvgTextBoxBounds(this.ctx, x, y, breakRowWidth, string, end, bounds); }
    textGlyphPositions(x, y, string, end, positions) { return nvgTextGlyphPositions(this.ctx, x, y, string, end, positions); }
    textMetrics(ascender, descender, lineh) { nvgTextMetrics(this.ctx, ascender, descender, lineh); }
    textBreakLines(string, end, breakRowWidth, rows) { return nvgTextBreakLines(this.ctx, string, end, breakRowWidth, rows); }
    strokeRect(x, y, w, h) { this.beginPath(); this.rect(x, y, w, h); this.stroke(); }
    fillRect(x, y, w, h) { this.beginPath(); this.rect(x, y, w, h); this.fill(); }
    drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh) {
        const w = [0];
        const h = [0];
        this.imageSize(image, w, h);
        sw = sw || w[0];
        sh = sh || h[0];
        this.fillPaint(this.imagePattern(sx, sy, sw, sh, 0, image, 1.0));
        this.fillRect(sx, sy, sw, sh);
    }
    debugDumpPathCache() { nvgDebugDumpPathCache(this.ctx); }
}
export { NVGcreateFlags as CreateFlags };
export function createWebGL(gl, flags) {
    return new Context(gl, flags);
}
export function deleteWebGL(ctx) {
    ctx.delete();
}
