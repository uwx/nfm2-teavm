package com.radicalplay.nfm2;

import fallk.logmaster.HLogger;

import java.util.HashMap;

public class SoundManager {

    private final HashMap<String, SoundClip> clips = new HashMap<>();

    public void add(String name, SoundClip clip) {
        clips.put(name, clip);
    }

    public void play(String name) {
        SoundClip soundClip = clips.get(name);
        if (soundClip != null) {
            soundClip.play();
        } else {
            HLogger.warn("clip not found: " + name);
        }

    }

    public void stop(String name) {
        SoundClip soundClip = clips.get(name);
        if (soundClip != null) {
            soundClip.stop();
        } else {
            HLogger.warn("clip not found: " + name);
        }
    }

    public void loop(String name) {
        SoundClip soundClip = clips.get(name);
        if (soundClip != null) {
            soundClip.loop();
        } else {
            HLogger.warn("clip not found: " + name);
        }
    }

}
