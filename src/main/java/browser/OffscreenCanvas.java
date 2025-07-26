package browser;

import org.teavm.jso.JSClass;
import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;
import org.teavm.jso.canvas.CanvasImageSource;
import org.teavm.jso.dom.html.HTMLElement;

@JSClass
public class OffscreenCanvas implements CanvasImageSource {
    public OffscreenCanvas(int width, int height) {}

    @JSProperty
    public native int getWidth();

    @JSProperty
    public native void setWidth(int width);

    @JSProperty
    public native int getHeight();

    @JSProperty
    public native void setHeight(int height);

    public native JSObject getContext(String contextId);

    public native JSObject getContext(String contextId, JSObject attributes);

    public native String toDataURL(String type, double quality);

    public native String toDataURL(String type);

    public native String toDataURL();
}
