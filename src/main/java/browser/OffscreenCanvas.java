package browser;

import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.JSProperty;
import org.teavm.jso.canvas.CanvasImageSource;

public abstract class OffscreenCanvas implements CanvasImageSource {
    @JSBody(params = { "width", "height" }, script = "return new OffscreenCanvas(width, height);")
    public static native OffscreenCanvas create(int width, int height);

    @JSProperty
    public abstract int getWidth();

    @JSProperty
    public abstract void setWidth(int width);

    @JSProperty
    public abstract int getHeight();

    @JSProperty
    public abstract void setHeight(int height);

    public abstract JSObject getContext(String contextId);

    public abstract JSObject getContext(String contextId, JSObject attributes);

    public abstract String toDataURL(String type, double quality);

    public abstract String toDataURL(String type);

    public abstract String toDataURL();
}
