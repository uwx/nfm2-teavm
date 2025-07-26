package com.radicalplay.nfm2;

import emul_java.awt.Cursor;
import emul_java.awt.Graphics;

import emul_java.awt.Event;
import emul_java.awt.Image;

public abstract class GameSparkerCore {
    public GameSparkerCore() {
    }

    public boolean keyDown(String key) {
        return true;
    }

    public boolean keyUp(String key) {
        return true;
    }

    public void stop() {
    }

    public boolean lostFocus(Event event, Object obj) {
        return true;
    }

    public boolean gotFocus(Event event, Object obj) {
        return true;
    }

    public void update(Graphics g) {
    }

    public boolean mouseDown(Event event, int x, int y) {
        return true;
    }

    public boolean mouseMove(Event event, int x, int y) {
        return true;
    }

    public void init() {
    }

    public void paint(Graphics graphics) {
    }

    public void repaint() {
        paint(getGraphics());
    }

    protected abstract Graphics getGraphics();

    public abstract Image createImage(int width, int height);

    public void setCursor(Cursor cursor) {
    }

    public abstract int getWidth();

    public abstract int getHeight();

    public abstract void setSize(int width, int height);

    public abstract void setStorageItem(String key, String value);

    public abstract String getStorageItem(String key);

    public abstract void fetch(String url, FetchCallback callback);

    public abstract Image loadImage(String url);

    public abstract SoundClip loadSound(String url);

    public abstract RadicalMod loadMod(String url);

    public interface FetchCallback {
        void complete(String result);
        default void error(String message) {
            throw new RuntimeException("During fetch: " + message);
        }
    }
}
