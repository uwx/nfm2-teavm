package com.radicalplay.nfm2.teavm;

import emul_java.awt.Graphics;
import emul_java.awt.Image;
import emul_java.awt.image.ImageObserver;
import emul_java.awt.image.ImageProducer;
import java_impl.Drawable;
import org.teavm.jso.canvas.CanvasImageSource;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;

public class CanvasImage extends Image implements Drawable {
    private final HTMLCanvasElement canvas;

    public CanvasImage(int width, int height) {
        this.canvas = (HTMLCanvasElement) HTMLDocument.current().createElement("canvas");
        this.canvas.setWidth(width);
        this.canvas.setHeight(height);
    }

    @Override
    public CanvasImageSource getDrawableImage() {
        return this.canvas;
    }

    @Override
    public int getWidth(ImageObserver observer) {
        return canvas.getWidth();
    }

    @Override
    public int getHeight(ImageObserver observer) {
        return canvas.getHeight();
    }

    @Override
    public ImageProducer getSource() {
        return null;
    }

    @Override
    public Graphics getGraphics() {
        return new WebGraphics2D(canvas);
    }

    @Override
    public Object getProperty(String name, ImageObserver observer) {
        return null;
    }
}
