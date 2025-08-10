package org.example;

import com.radicalplay.nfm2.GameSparker;
import com.radicalplay.nfm2.teavm.GameSparkerTeaVM;
import org.teavm.jso.dom.html.HTMLDocument;

import static org.teavm.jso.browser.Window.setTimeout;

public class Client {
    public static void main(String[] args) {
        new Client().start();
    }

    public void start() {
        GameSparker applet = new GameSparkerTeaVM();
        applet.setSize(670, 400);
        applet.init();
        new GameTicker(applet).run();
    }

    private static class GameTicker {
        private final GameSparker applet;

        public GameTicker(GameSparker applet) {
            this.applet = applet;
        }

        public void run() {
            applet.run(this::update);
        }

        private void update() {
            long msToWait = applet.gameTick();

            setTimeout(this::update, msToWait);
        }
    }
}
