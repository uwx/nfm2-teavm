package java_impl;

import org.teavm.jso.JSClass;
import org.teavm.jso.JSProperty;

@JSClass(name = "TextMetrics")
public class TextMetricsEx {
    @JSProperty
    public native double getWidth();
    @JSProperty
    public native double getActualBoundingBoxLeft();
    @JSProperty
    public native double getActualBoundingBoxRight();
    @JSProperty
    public native double getFontBoundingBoxAscent();
    @JSProperty
    public native double getFontBoundingBoxDescent();
    @JSProperty
    public native double getActualBoundingBoxAscent();
    @JSProperty
    public native double getActualBoundingBoxDescent();
    @JSProperty
    public native double getEmHeightAscent();
    @JSProperty
    public native double getEmHeightDescent();
    @JSProperty
    public native double getHangingBaseline();
    @JSProperty
    public native double getAlphabeticBaseline();
    @JSProperty
    public native double getIdeographicBaseline();
}
