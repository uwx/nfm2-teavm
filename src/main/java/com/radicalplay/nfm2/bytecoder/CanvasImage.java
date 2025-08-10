package com.radicalplay.nfm2.bytecoder;

import de.mirkosertic.bytecoder.api.web.CanvasImageSource;
import de.mirkosertic.bytecoder.api.web.HTMLCanvasElement;
import de.mirkosertic.bytecoder.api.web.Window;
import emul_java.awt.Graphics;
import emul_java.awt.Image;
import emul_java.awt.image.ImageObserver;
import emul_java.awt.image.ImageProducer;
import java_impl.Drawable;

public class CanvasImage extends Image implements Drawable {
    private final HTMLCanvasElementEx canvas;

    public CanvasImage(int width, int height) {
        this.canvas = (HTMLCanvasElementEx) Window.window().document().createElement("canvas");
        this.canvas.width(width);
        this.canvas.height(height);
    }

    @Override
    public CanvasImageSource getDrawableImage() {
        return this.canvas;
    }

    @Override
    public int getWidth(ImageObserver observer) {
        return canvas.width();
    }

    @Override
    public int getHeight(ImageObserver observer) {
        return canvas.height();
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
