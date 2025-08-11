package com.radicalplay.nfm2.teavm;

import browser.OffscreenCanvas;
import com.radicalplay.nfm2.GameSparker;
import com.radicalplay.nfm2.RadicalMod;
import com.radicalplay.nfm2.SoundClip;
import emul_java.awt.Graphics;
import emul_java.awt.Image;
import org.teavm.jso.JSBody;
import org.teavm.jso.JSObject;
import org.teavm.jso.browser.Window;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.events.KeyboardEvent;
import org.teavm.jso.dom.events.MouseEvent;
import org.teavm.jso.dom.html.HTMLCanvasElement;
import org.teavm.jso.dom.html.HTMLDocument;

public class GameSparkerTeaVM extends GameSparker {
    private final HTMLCanvasElement element;

    public GameSparkerTeaVM() {
        Window window = Window.current();
        HTMLDocument document = HTMLDocument.current();
        element = (HTMLCanvasElement) document.createElement("canvas");
        document.getBody().appendChild(element);

        window.addEventListener("keydown", event -> {
            KeyboardEvent keyboardEvent = (KeyboardEvent) event;
            keyDown(keyboardEvent.getCode());
        });
        window.addEventListener("keyup", event -> {
            KeyboardEvent keyboardEvent = (KeyboardEvent) event;
            keyUp(keyboardEvent.getCode());
        });
        element.addEventListener("mousedown", event -> {
            MouseEvent mouseEvent = (MouseEvent) event;
            mouseDown(null, (int) mouseEvent.getOffsetX(), (int) mouseEvent.getOffsetY());
        });
        element.addEventListener("mousemove", event -> {
            MouseEvent mouseEvent = (MouseEvent) event;
            mouseMove(null, (int) mouseEvent.getOffsetX(), (int) mouseEvent.getOffsetY());
        });
    }

    @Override
    protected Graphics getGraphics() {
        return new WebGraphics2D(element);
    }

    @Override
    public Image createImage(int width, int height) {
        return new CanvasImage(width, height);
    }

    @Override
    public int getWidth() {
        return element.getClientWidth();
    }

    @Override
    public int getHeight() {
        return element.getClientHeight();
    }

    @Override
    public void setSize(int width, int height) {
        element.setWidth(width);
        element.setHeight(height);
    }

    @Override
    public void setStorageItem(String key, String value) {
        Window.current().getLocalStorage().setItem(key, value);
    }

    @Override
    public String getStorageItem(String key) {
        return Window.current().getLocalStorage().getItem(key);
    }

    @Override
    public void fetch(String url, FetchCallback callback) {
        fetchImpl(url, new JsFetchCallback() {
            @Override
            public void complete(String result) {
                callback.complete(result);
            }

            @Override
            public void error(String message) {
                callback.error(message);
            }
        });
    }

    @Override
    public Image loadImage(String url) {
        return new ImageImpl(url);
    }

    @Override
    public SoundClip loadSound(String url) {
        return new SoundClipWeb(url);
    }

    @Override
    public RadicalMod loadMod(String url) {
        return new RadicalModWeb(url);
    }

    @JSBody(params = { "url", "callback" }, script = "fetch(url)\n"
            + ".then(response => response.text())\n"
            + ".then(text => callback.complete(text))\n"
            + ".catch(error => callback.error(error.message));")
    private static native void fetchImpl(String url, JsFetchCallback callback);

    public interface JsFetchCallback extends JSObject {
        void complete(String result);
        void error(String message);
    }
}
