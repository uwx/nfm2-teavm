package com.radicalplay.nfm2;

public interface RadicalMod {
    boolean isLoaded();

    void stop();

    void resume();

    void unloadAll();

    void play();

    void unloadMod();

    void loadMod(int i, int j, int k);
}
