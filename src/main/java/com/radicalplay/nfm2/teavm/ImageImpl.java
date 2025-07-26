package com.radicalplay.nfm2.teavm;

import emul_java.awt.Graphics;
import emul_java.awt.Image;
import emul_java.awt.image.ImageObserver;
import emul_java.awt.image.ImageProducer;
import java_impl.Drawable;
import org.teavm.jso.canvas.CanvasImageSource;
import org.teavm.jso.dom.html.HTMLDocument;
import org.teavm.jso.dom.html.HTMLImageElement;

public class ImageImpl extends Image implements Drawable {

    // @Interface
    // class ImageSource {
    // public double width;
    // public double height;
    // }

    // public Image(ImageSource source) {
    // this.source = source;
    // }

    public ImageImpl(String src) {
        source = (HTMLImageElement) HTMLDocument.current().createElement("img");
        source.setSrc(src);
        setScale(SCALE_DEFAULT);
    }

    private void setScale(int scale) {
        switch (scale) {
            case SCALE_DEFAULT:
            case SCALE_FAST:
            case SCALE_REPLICATE:
//				source.style.$set("imageRendering", "pixelated");
                break;
            case SCALE_SMOOTH:
            case SCALE_AREA_AVERAGING:
//				source.style.$set("imageRendering", "");

        }
    }

    public int getWidth(ImageObserver observer) {
        return (int) source.getWidth();
    }

    public int getHeight(ImageObserver observer) {
        return (int) source.getHeight();
    }

    @Override
    public ImageProducer getSource() {
        return null;
    }

    @Override
    public Graphics getGraphics() {
        return null;
    }

    @Override
    public Object getProperty(String name, ImageObserver observer) {
        return null;
    }

    public final HTMLImageElement source;

    // public abstract ImageProducer getSource();

    // public Graphics getGraphics();

    public Image getScaledInstance(int width, int height, int scaleType) {
        ImageImpl image = new ImageImpl(source.getSrc());
        image.source.setWidth(width);
        image.source.setHeight(height);
        image.setScale(scaleType);
        return image;
    }
    /**
     * 
     * Use the default image-scaling algorithm.
     *
     * @since JDK1.1
     */
    public static final int SCALE_DEFAULT = 1;

    /**
     * Choose an image-scaling algorithm that gives higher priority to scaling
     * speed than smoothness of the scaled image.
     *
     * @since JDK1.1
     */
    public static final int SCALE_FAST = 2;

    public static final int SCALE_SMOOTH = 4;

    public static final int SCALE_REPLICATE = 8;

    public static final int SCALE_AREA_AVERAGING = 16;

    public void flush() {
        // do nothing
    }

    @Override
    public CanvasImageSource getDrawableImage() {
        return source;
    }
}
