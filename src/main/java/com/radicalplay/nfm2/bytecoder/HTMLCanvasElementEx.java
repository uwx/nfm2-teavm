package com.radicalplay.nfm2.bytecoder;

import de.mirkosertic.bytecoder.api.OpaqueProperty;
import de.mirkosertic.bytecoder.api.OpaqueReferenceType;
import de.mirkosertic.bytecoder.api.web.HTMLCanvasElement;

public interface HTMLCanvasElementEx extends HTMLCanvasElement, OpaqueReferenceType {
    @OpaqueProperty
    int width(int value);

    @OpaqueProperty
    int height(int value);
}
