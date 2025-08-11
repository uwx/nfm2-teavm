package com.radicalplay.nfm2.teavm;

import browser.OffscreenCanvas;
import emul_java.awt.*;
import emul_java.awt.geom.AffineTransform;
import emul_java.awt.image.ImageObserver;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.webgl.WebGLContextAttributes;
import org.teavm.jso.webgl.WebGLRenderingContext;

public class NVGJSGraphics2D extends Graphics2D {
    private final WebGLRenderingContext gl;
    private final JSObject nvg;

    private Color color;

    // region unimplemented
    @Override
    public Graphics create() {
        return null;
    }

    @Override
    public void translate(int x, int y) {

    }

    @Override
    public Color getColor() {
        return null;
    }

    @Override
    public void setPaintMode() {

    }

    @Override
    public Font getFont() {
        return null;
    }

    @Override
    public void setFont(Font font) {

    }

    @Override
    public Rectangle getClipBounds() {
        return null;
    }

    @Override
    public void clipRect(int x, int y, int width, int height) {

    }

    @Override
    public void setClip(int x, int y, int width, int height) {

    }

    @Override
    public Shape getClip() {
        return null;
    }

    @Override
    public void setClip(Shape clip) {

    }

    @Override
    public void drawLine(int x1, int y1, int x2, int y2) {

    }

    @Override
    public void draw(Shape s) {

    }

    @Override
    public boolean drawImage(Image img, AffineTransform xform, ImageObserver obs) {
        return false;
    }

    @Override
    public void drawString(String str, int x, int y) {

    }

    @Override
    public boolean drawImage(Image img, int x, int y, ImageObserver observer) {
        return false;
    }

    @Override
    public boolean drawImage(Image img, int x, int y, int width, int height, ImageObserver observer) {
        return false;
    }

    @Override
    public boolean drawImage(Image img, int x, int y, Color bgcolor, ImageObserver observer) {
        return false;
    }

    @Override
    public boolean drawImage(Image img, int x, int y, int width, int height, Color bgcolor, ImageObserver observer) {
        return false;
    }

    @Override
    public boolean drawImage(Image img, int dx1, int dy1, int dx2, int dy2, int sx1, int sy1, int sx2, int sy2, ImageObserver observer) {
        return false;
    }

    @Override
    public boolean drawImage(Image img, int dx1, int dy1, int dx2, int dy2, int sx1, int sy1, int sx2, int sy2, Color bgcolor, ImageObserver observer) {
        return false;
    }

    @Override
    public void dispose() {

    }

    @Override
    public void drawString(String str, float x, float y) {

    }

    @Override
    public void fill(Shape s) {

    }

    @Override
    public void setPaint(Paint paint) {

    }

    @Override
    public void setStroke(Stroke s) {

    }

    public void setRenderingHint(Object key, Object value) {

    }

    @Override
    public void translate(double tx, double ty) {

    }

    @Override
    public void rotate(double theta) {

    }

    @Override
    public void rotate(double theta, double x, double y) {

    }

    @Override
    public void scale(double sx, double sy) {

    }

    @Override
    public void shear(double shx, double shy) {

    }

    @Override
    public void transform(AffineTransform Tx) {

    }

    @Override
    public void setTransform(AffineTransform Tx) {

    }

    @Override
    public AffineTransform getTransform() {
        return null;
    }

    @Override
    public Paint getPaint() {
        return null;
    }

    @Override
    public void setBackground(Color color) {

    }

    @Override
    public Color getBackground() {
        return null;
    }

    @Override
    public void clearRect(int x, int y, int width, int height) {

    }

    @Override
    public void drawRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight) {

    }

    @Override
    public void fillRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight) {

    }

    @Override
    public void drawOval(int x, int y, int width, int height) {

    }

    @Override
    public void fillOval(int x, int y, int width, int height) {

    }

    @Override
    public void drawArc(int x, int y, int width, int height, int startAngle, int arcAngle) {

    }

    @Override
    public void fillArc(int x, int y, int width, int height, int startAngle, int arcAngle) {

    }

    @Override
    public void drawPolyline(int[] xPoints, int[] yPoints, int nPoints) {

    }
    // endregion

    public NVGJSGraphics2D(HTMLCanvasElement canvas) {
        WebGLContextAttributes attr = WebGLContextAttributes.create();
        attr.setStencil(true);
        attr.setPreserveDrawingBuffer(true);
        gl = (WebGLRenderingContext) canvas.getContext("webgl", attr);
        nvg = createNvg(gl, canvas.getWidth(), canvas.getHeight());
    }

    public NVGJSGraphics2D(OffscreenCanvas canvas) {
        WebGLContextAttributes attr = WebGLContextAttributes.create();
        attr.setStencil(true);
        attr.setPreserveDrawingBuffer(true);
        gl = (WebGLRenderingContext) canvas.getContext("webgl", attr);
        nvg = createNvg(gl, canvas.getWidth(), canvas.getHeight());
    }

    @JSBody(params = { "gl", "width", "height" }, script = "return nvg_g2d_create(gl, width, height);")
    private static native JSObject createNvg(WebGLRenderingContext gl, int width, int height);

    public void beginDraw() {
        beginDrawImpl(nvg);
    }

    public void endDraw() {
        endDrawImpl(nvg);
    }

    @JSBody(params = { "nvg" }, script = "return nvg_g2d_beginDraw(nvg);")
    private static native void beginDrawImpl(JSObject nvg);

    @JSBody(params = { "nvg" }, script = "return nvg_g2d_endDraw(nvg);")
    private static native void endDrawImpl(JSObject nvg);

    public void setColor(Color color) {
        this.color = color;
    }

    @JSBody(params = { "nvg", "r", "g", "b", "a" }, script = "return nvg_g2d_beginPrimitive(nvg, r, g, b, a);")
    private static native void beginPrimitiveImpl(JSObject nvg, int r, int g, int b, int a);

    @JSBody(params = { "nvg", "x", "y", "width", "height" }, script = "return nvg_g2d_fillRect(nvg, x, y, width, height);")
    private static native void fillRectImpl(JSObject nvg, int r, int g, int b, int a);

    public void fillRect(int x, int y, int width, int height) {
        beginPrimitiveImpl(nvg, color.getRed(), color.getGreen(), color.getBlue(), color.getAlpha());
        fillRectImpl(nvg, x, y, width, height);
    }

    @JSBody(params = { "nvg", "x", "y" }, script = "return nvg_g2d_moveTo(nvg, x, y);")
    private static native void moveToImpl(JSObject nvg, int x, int y);

    @JSBody(params = { "nvg", "x", "y" }, script = "return nvg_g2d_lineTo(nvg, x, y);")
    private static native void lineToImpl(JSObject nvg, int x, int y);

    @JSBody(params = { "nvg" }, script = "return nvg_g2d_stroke(nvg);")
    private static native void strokeImpl(JSObject nvg);

    @JSBody(params = { "nvg" }, script = "return nvg_g2d_fill(nvg);")
    private static native void fillImpl(JSObject nvg);

    public void drawPolygon(int[] xPoints, int[] yPoints, int nPoints) {
        if (nPoints <= 1 || (nPoints == 2 && xPoints[0] == xPoints[1] && yPoints[0] == yPoints[1])) {
            return;
        }
        polygon(xPoints, yPoints, nPoints);
        strokeImpl(nvg);
    }

    public void fillPolygon(int[] xPoints, int[] yPoints, int nPoints) {
        if (nPoints <= 1 || (nPoints == 2 && xPoints[0] == xPoints[1] && yPoints[0] == yPoints[1])) {
            return;
        }
        polygon(xPoints, yPoints, nPoints);
        fillImpl(nvg);
    }

    private void polygon(int[] xPoints, int[] yPoints, int nPoints) {
        beginPrimitiveImpl(nvg, color.getRed(), color.getGreen(), color.getBlue(), color.getAlpha());
        moveToImpl(nvg, xPoints[0], yPoints[0]);
        for (int i = 1; i < nPoints; i++) {
            if (xPoints[i] == xPoints[i - 1] && yPoints[i] == yPoints[i - 1]) continue;
            lineToImpl(nvg, xPoints[i], yPoints[i]);
        }
        lineToImpl(nvg, xPoints[0], yPoints[0]);
    }

}
