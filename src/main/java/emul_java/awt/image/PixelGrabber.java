/*
 * Copyright (c) 1995, 2013, Oracle and/or its affiliates. All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Oracle designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Oracle in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Oracle, 500 Oracle Parkway, Redwood Shores, CA 94065 USA
 * or visit www.oracle.com if you need additional information or have any
 * questions.
 */

package emul_java.awt.image;

import emul_java.awt.Image;

import emul_java.awt.*;

/**
 * The PixelGrabber class implements an ImageConsumer which can be attached
 * to an Image or ImageProducer object to retrieve a subset of the pixels
 * in that image.  Here is an example:
 * <pre>{@code
 *
 * public void handlesinglepixel(int x, int y, int pixel) {
 *      int alpha = (pixel >> 24) & 0xff;
 *      int red   = (pixel >> 16) & 0xff;
 *      int green = (pixel >>  8) & 0xff;
 *      int blue  = (pixel      ) & 0xff;
 *      // Deal with the pixel as necessary...
 * }
 *
 * public void handlepixels(Image img, int x, int y, int w, int h) {
 *      int[] pixels = new int[w * h];
 *      PixelGrabber pg = new PixelGrabber(img, x, y, w, h, pixels, 0, w);
 *      try {
 *          pg.grabPixels();
 *      } catch (InterruptedException e) {
 *          System.err.println("interrupted waiting for pixels!");
 *          return;
 *      }
 *      if ((pg.getStatus() & ImageObserver.ABORT) != 0) {
 *          System.err.println("image fetch aborted or errored");
 *          return;
 *      }
 *      for (int j = 0; j < h; j++) {
 *          for (int i = 0; i < w; i++) {
 *              handlesinglepixel(x+i, y+j, pixels[j * w + i]);
 *          }
 *      }
 * }
 *
 * }</pre>
 *
 * @see ColorModel#getRGBdefault
 *
 * @author      Jim Graham
 */
public class PixelGrabber /*implements ImageConsumer*/ {
    ImageProducer producer;

    int dstX;
    int dstY;
    int dstW;
    int dstH;

    byte[] bytePixels;
    int[] intPixels;
    int dstOff;
    int dstScan;

    private boolean grabbing;
    private int flags;

    private static final int GRABBEDBITS = (ImageObserver.FRAMEBITS
            | ImageObserver.ALLBITS);
    private static final int DONEBITS = (GRABBEDBITS
            | ImageObserver.ERROR);

    /**
     * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
     * section of pixels from the specified image into the given array.
     * The pixels are stored into the array in the default RGB ColorModel.
     * The RGB data for pixel (i, j) where (i, j) is inside the rectangle
     * (x, y, w, h) is stored in the array at
     * <tt>pix[(j - y) * scansize + (i - x) + off]</tt>.
     * @see ColorModel#getRGBdefault
     * @param img the image to retrieve pixels from
     * @param x the x coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image, relative to the default
     * (unscaled) size of the image
     * @param y the y coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image
     * @param w the width of the rectangle of pixels to retrieve
     * @param h the height of the rectangle of pixels to retrieve
     * @param pix the array of integers which are to be used to hold the
     * RGB pixels retrieved from the image
     * @param off the offset into the array of where to store the first pixel
     * @param scansize the distance from one row of pixels to the next in
     * the array
     */
    public PixelGrabber(Image img, int x, int y, int w, int h,
                        int[] pix, int off, int scansize) {
        this(img.getSource(), x, y, w, h, pix, off, scansize);
    }

    /**
     * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
     * section of pixels from the image produced by the specified
     * ImageProducer into the given array.
     * The pixels are stored into the array in the default RGB ColorModel.
     * The RGB data for pixel (i, j) where (i, j) is inside the rectangle
     * (x, y, w, h) is stored in the array at
     * <tt>pix[(j - y) * scansize + (i - x) + off]</tt>.
     * @param ip the <code>ImageProducer</code> that produces the
     * image from which to retrieve pixels
     * @param x the x coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image, relative to the default
     * (unscaled) size of the image
     * @param y the y coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image
     * @param w the width of the rectangle of pixels to retrieve
     * @param h the height of the rectangle of pixels to retrieve
     * @param pix the array of integers which are to be used to hold the
     * RGB pixels retrieved from the image
     * @param off the offset into the array of where to store the first pixel
     * @param scansize the distance from one row of pixels to the next in
     * the array
     * @see ColorModel#getRGBdefault
     */
    public PixelGrabber(ImageProducer ip, int x, int y, int w, int h,
                        int[] pix, int off, int scansize) {
        producer = ip;
        dstX = x;
        dstY = y;
        dstW = w;
        dstH = h;
        dstOff = off;
        dstScan = scansize;
        intPixels = pix;
    }

    /**
     * Create a PixelGrabber object to grab the (x, y, w, h) rectangular
     * section of pixels from the specified image.  The pixels are
     * accumulated in the original ColorModel if the same ColorModel
     * is used for every call to setPixels, otherwise the pixels are
     * accumulated in the default RGB ColorModel.  If the forceRGB
     * parameter is true, then the pixels will be accumulated in the
     * default RGB ColorModel anyway.  A buffer is allocated by the
     * PixelGrabber to hold the pixels in either case.  If {@code (w < 0)} or
     * {@code (h < 0)}, then they will default to the remaining width and
     * height of the source data when that information is delivered.
     * @param img the image to retrieve the image data from
     * @param x the x coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image, relative to the default
     * (unscaled) size of the image
     * @param y the y coordinate of the upper left corner of the rectangle
     * of pixels to retrieve from the image
     * @param w the width of the rectangle of pixels to retrieve
     * @param h the height of the rectangle of pixels to retrieve
     * @param forceRGB true if the pixels should always be converted to
     * the default RGB ColorModel
     */
    public PixelGrabber(Image img, int x, int y, int w, int h,
                        boolean forceRGB)
    {
        producer = img.getSource();
        dstX = x;
        dstY = y;
        dstW = w;
        dstH = h;
    }

    /**
     * Request the PixelGrabber to start fetching the pixels.
     */
    public synchronized void startGrabbing() {
    }

    /**
     * Request the PixelGrabber to abort the image fetch.
     */
    public synchronized void abortGrabbing() {
    }

    /**
     * Request the Image or ImageProducer to start delivering pixels and
     * wait for all of the pixels in the rectangle of interest to be
     * delivered.
     * @return true if the pixels were successfully grabbed, false on
     * abort, error or timeout
     * @exception InterruptedException
     *            Another thread has interrupted this thread.
     */
    public boolean grabPixels() throws InterruptedException {
        return grabPixels(0);
    }

    /**
     * Request the Image or ImageProducer to start delivering pixels and
     * wait for all of the pixels in the rectangle of interest to be
     * delivered or until the specified timeout has elapsed.  This method
     * behaves in the following ways, depending on the value of
     * <code>ms</code>:
     * <ul>
     * <li> If {@code ms == 0}, waits until all pixels are delivered
     * <li> If {@code ms > 0}, waits until all pixels are delivered
     * as timeout expires.
     * <li> If {@code ms < 0}, returns <code>true</code> if all pixels
     * are grabbed, <code>false</code> otherwise and does not wait.
     * </ul>
     * @param ms the number of milliseconds to wait for the image pixels
     * to arrive before timing out
     * @return true if the pixels were successfully grabbed, false on
     * abort, error or timeout
     * @exception InterruptedException
     *            Another thread has interrupted this thread.
     */
    public synchronized boolean grabPixels(long ms)
            throws InterruptedException
    {
        return true;
    }

    /**
     * Return the status of the pixels.  The ImageObserver flags
     * representing the available pixel information are returned.
     * @return the bitwise OR of all relevant ImageObserver flags
     * @see ImageObserver
     */
    public synchronized int getStatus() {
        return flags;
    }

    /**
     * Get the width of the pixel buffer (after adjusting for image width).
     * If no width was specified for the rectangle of pixels to grab then
     * then this information will only be available after the image has
     * delivered the dimensions.
     * @return the final width used for the pixel buffer or -1 if the width
     * is not yet known
     * @see #getStatus
     */
    public synchronized int getWidth() {
        return (dstW < 0) ? -1 : dstW;
    }

    /**
     * Get the height of the pixel buffer (after adjusting for image height).
     * If no width was specified for the rectangle of pixels to grab then
     * then this information will only be available after the image has
     * delivered the dimensions.
     * @return the final height used for the pixel buffer or -1 if the height
     * is not yet known
     * @see #getStatus
     */
    public synchronized int getHeight() {
        return (dstH < 0) ? -1 : dstH;
    }
}