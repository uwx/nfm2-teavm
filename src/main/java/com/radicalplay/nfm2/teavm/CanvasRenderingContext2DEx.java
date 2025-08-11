package com.radicalplay.nfm2.teavm;

import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.core.JSArray;
import org.teavm.jso.core.JSNumber;

public interface CanvasRenderingContext2DEx extends CanvasRenderingContext2D {
    void roundRect(double x, double y, double width, double height, double radii);
    void roundRect(double x, double y, double width, double height, JSArray<JSNumber> radii);
}
