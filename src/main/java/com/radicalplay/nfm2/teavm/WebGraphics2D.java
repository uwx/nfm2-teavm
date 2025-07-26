package com.radicalplay.nfm2.teavm;

import browser.OffscreenCanvas;
import emul_java.awt.*;

import emul_java.awt.geom.AffineTransform;
import emul_java.awt.geom.PathIterator;
import emul_java.awt.geom.Rectangle2D;
import emul_java.awt.image.ImageObserver;
import java_impl.Drawable;
import org.teavm.jso.JSObject;
import org.teavm.jso.canvas.CanvasGradient;
import org.teavm.jso.canvas.CanvasImageSource;
import org.teavm.jso.canvas.CanvasRenderingContext2D;
import org.teavm.jso.dom.html.HTMLCanvasElement;

public class WebGraphics2D extends Graphics2D {

	public CanvasRenderingContext2D context;

	public WebGraphics2D(HTMLCanvasElement canvas) {
		this.context = (CanvasRenderingContext2D) canvas.getContext("2d");
	}

	public WebGraphics2D(OffscreenCanvas canvas) {
		this.context = (CanvasRenderingContext2D) canvas.getContext("2d");
	}

	@Override
	public void drawString(String s, int x, int y) {
		context.fillText(s, x, y);
	}

	@Override
	public void clearRect(int x, int y, int width, int height) {
		JSObject fillStyle = context.getFillStyle();
		context.setFillStyle(backgroundHtml);
		context.fillRect(x, y, width, height);
		context.setFillStyle((CanvasGradient) fillStyle);
	}

	@Override
	public Graphics create() {
		throw new RuntimeException("Not implemented for TeaVM");
	}

	@Override
	public void setRenderingHint(Object hintKey, Object hintValue) {
//		if (hintKey == RenderingHints.KEY_ANTIALIASING) {
//			if (hintValue == RenderingHints.VALUE_ANTIALIAS_ON) {
//				context.imageSmoothingEnabled = true;
//			} else {
//				context.imageSmoothingEnabled = false;
//			}
//		}
	}


	@Override
	public void drawArc(int x, int y, int width, int height, int startAngle, int arcAngle) {
		context.beginPath();
		//context.ellipse(x - width / 2, y - height / 2, width / 2, height / 2, 0, Math.toRadians(startAngle), Math.toRadians(startAngle) + Math.toRadians(arcAngle));
		context.stroke();
	}

	@Override
	public void drawLine(int x1, int y1, int x2, int y2) {
		context.beginPath();
		context.moveTo(x1, y1);
		context.lineTo(x2, y2);
		context.stroke();
	}

	@Override
	public void drawOval(int x, int y, int width, int height) {
		context.beginPath();
		//context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
		context.stroke();
	}

	@Override
	public void drawRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight) {
		drawRect(x, y, width, height);
	}

	@Override
	public void drawRect(int x, int y, int width, int height) {
		context.beginPath();
		context.rect(x, y, width, height);
		context.stroke();
	}

	@Override
	public void drawPolygon(int[] xPoints, int[] yPoints, int nPoints) {
		if (nPoints <= 0) {
			return;
		}
		context.beginPath();
		context.moveTo(xPoints[0], yPoints[0]);
		for (int i = 0; i < nPoints; i++) {
			context.lineTo(xPoints[i], yPoints[i]);
		}
		context.moveTo(xPoints[0], yPoints[0]);
		context.stroke();
	}

	@Override
	public void drawPolygon(Polygon p) {
		drawPolygon(p.xpoints, p.ypoints, p.npoints);
	}

	@Override
	public void fillPolygon(Polygon p) {
		fillPolygon(p.xpoints, p.ypoints, p.npoints);
	}

	@Override
	public Rectangle getClipBounds(Rectangle r) {
		if (clip == null) {
			return r;
		} else {
			return clip.getBounds().createIntersection(r).getBounds();
		}
	}

	@Override
	public void draw3DRect(int x, int y, int width, int height, boolean raised) {
		// TODO
		drawRect(x, y, width, height);
	}

	@Override
	public boolean hitClip(int x, int y, int width, int height) {
		return getClipBounds().intersects(x, y, width, height);
	}

	@Override
	public void drawPolyline(int[] xPoints, int[] yPoints, int nPoints) {
		if (nPoints <= 0) {
			return;
		}
		context.beginPath();
		context.moveTo(xPoints[0], yPoints[0]);
		for (int i = 0; i < nPoints; i++) {
			context.lineTo(xPoints[i], yPoints[i]);
		}
		context.stroke();
	}

	@Override
	public void draw(Shape s) {
		PathIterator it = s.getPathIterator(AffineTransform.getTranslateInstance(0, 0));
		double[] coords = new double[6];
		while (!it.isDone()) {
			switch (it.currentSegment(coords)) {
			case PathIterator.SEG_MOVETO:
				context.moveTo(coords[0], coords[1]);
				break;
			case PathIterator.SEG_LINETO:
				context.lineTo(coords[0], coords[1]);
				break;
			case PathIterator.SEG_QUADTO:
				// TBD
				break;
			case PathIterator.SEG_CUBICTO:
				// TBD
				break;
			case PathIterator.SEG_CLOSE:
//				context.stroke();
				break;

			default:
				break;
			}
			it.next();
		}
		context.stroke();
	}

	@Override
	public void fill(Shape s) {
		PathIterator it = s.getPathIterator(AffineTransform.getTranslateInstance(0, 0));
		double[] coords = new double[6];
		while (it.isDone()) {
			switch (it.currentSegment(coords)) {
			case PathIterator.SEG_MOVETO:
				context.moveTo(coords[0], coords[1]);
				break;
			case PathIterator.SEG_LINETO:
				context.lineTo(coords[0], coords[1]);
				break;
			case PathIterator.SEG_QUADTO:
				// TBD
				break;
			case PathIterator.SEG_CUBICTO:
				// TBD
				break;
			case PathIterator.SEG_CLOSE:
//				context.fill();
				break;

			default:
				break;
			}
		}
		context.fill();
	}

	// @Override
	// public void drawImage(BufferedImage img, BufferedImageOp op, int x, int
	// y) {
	// $apply(context.$get("drawImage"), img.source, x, y);
	// }

	@Override
	public boolean drawImage(Image img, AffineTransform xform, ImageObserver obs) {
		return false;
	}

	public static CanvasImageSource getDrawableImage(Image img) {
		if (img == null) {
			throw new RuntimeException("Image is null!!");
		}
		CanvasImageSource drawableImage = ((Drawable) img).getDrawableImage();
		if (drawableImage == null) {
			throw new RuntimeException("Drawable image is null!!");
		}
		return drawableImage;
	}

	@Override
	public boolean drawImage(Image img, int x, int y, Color bgcolor, ImageObserver observer) {
		context.drawImage(getDrawableImage(img), x, y);
		return true;
	}

	@Override
	public boolean drawImage(Image img, int dx1, int dy1, int dx2, int dy2, int sx1, int sy1, int sx2, int sy2,
			Color bgcolor, ImageObserver observer) {
		context.drawImage(getDrawableImage(img), Math.min(sx1, sx2), Math.min(sy1, sy2), Math.abs(sx2 - sx1),
				Math.abs(sy2 - sy1), Math.min(dx1, dx2), Math.min(dy1, dy2), Math.abs(dx2 - dx1), Math.abs(dy2 - dy1));
		return true;
	}

	@Override
	public boolean drawImage(Image img, int dx1, int dy1, int dx2, int dy2, int sx1, int sy1, int sx2, int sy2,
			ImageObserver observer) {
		context.drawImage(getDrawableImage(img), Math.min(sx1, sx2), Math.min(sy1, sy2), Math.abs(sx2 - sx1),
				Math.abs(sy2 - sy1), Math.min(dx1, dx2), Math.min(dy1, dy2), Math.abs(dx2 - dx1), Math.abs(dy2 - dy1));
		return true;
	}

	@Override
	public boolean drawImage(Image img, int x, int y, ImageObserver observer) {
		context.drawImage(getDrawableImage(img), x, y);
		return true;
	}

	@Override
	public boolean drawImage(Image img, int x, int y, int width, int height, Color bgcolor, ImageObserver observer) {
		context.drawImage(getDrawableImage(img), x, y, width, height);
		return true;
	}

	@Override
	public boolean drawImage(Image img, int x, int y, int width, int height, ImageObserver observer) {
		context.drawImage(getDrawableImage(img), x, y, width, height);
		return true;
	}

	@Override
	public void fillPolygon(int[] xPoints, int[] yPoints, int nPoints) {
		if (nPoints <= 0) {
			return;
		}
		context.beginPath();
		context.moveTo(xPoints[0], yPoints[0]);
		for (int i = 0; i < nPoints; i++) {
			context.lineTo(xPoints[i], yPoints[i]);
		}
		context.lineTo(xPoints[0], yPoints[0]);
		context.fill();
	}

	private Shape clip;

	@Override
	public Shape getClip() {
		return clip;
	}

	@Override
	public void setClip(Shape clip) {
		this.clip = clip;
		if (clip != null) {
			PathIterator it = clip.getPathIterator(AffineTransform.getTranslateInstance(0, 0));
			double[] coords = new double[6];
			while (it.isDone()) {
				switch (it.currentSegment(coords)) {
				case PathIterator.SEG_MOVETO:
					context.moveTo(coords[0], coords[1]);
					break;
				case PathIterator.SEG_LINETO:
					context.lineTo(coords[0], coords[1]);
					break;
				case PathIterator.SEG_QUADTO:
					// TBD
					break;
				case PathIterator.SEG_CUBICTO:
					// TBD
					break;
				case PathIterator.SEG_CLOSE:
					context.stroke();
					break;

				default:
					break;
				}
			}
			context.clip();
		}
	}

	@Override
	public void setClip(int x, int y, int width, int height) {
		setClip(new Rectangle(x, y, width, height));
	}

	@Override
	public void clipRect(int x, int y, int width, int height) {
		if (clip == null) {
			setClip(x, y, width, height);
		} else {
			setClip(clip.getBounds().createIntersection(new Rectangle2D.Double(x, y, width, height)));
		}
	}

	@Override
	public Rectangle getClipBounds() {
		if (clip == null) {
			return new Rectangle(0, 0, (int) context.getCanvas().getWidth(), (int) context.getCanvas().getHeight());
		} else {
			return clip.getBounds();
		}
	}

	@Override
	public void translate(int x, int y) {
		context.translate(x, y);
	}

	@Override
	public void drawString(String str, float x, float y) {
		context.strokeText(str, x, y);
	}

	@Override
	public void fillArc(int x, int y, int width, int height, int startAngle, int arcAngle) {
		context.beginPath();
		//context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0,
//				Math.toRadians(-startAngle), Math.toRadians(-startAngle) + Math.toRadians(-arcAngle), true);
		context.lineTo(x + width / 2, y + height / 2);
		context.fill();
	}

	@Override
	public void fillOval(int x, int y, int width, int height) {
		context.beginPath();
		//context.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
		context.fill();
	}

	@Override
	public void fillRect(int x, int y, int width, int height) {
		context.fillRect(x, y, width, height);
	}

	@Override
	public void fillRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight) {
		fillRect(x, y, width, height);
	}

	private Color color;

	@Override
	public void setColor(Color c) {
		color = c;
		String html = c.toHTML();
		context.setStrokeStyle(html);
		context.setFillStyle(html);
	}

	@Override
	public Color getColor() {
		return color;
	}

	@Override
	public void translate(double tx, double ty) {
		context.translate(tx, ty);
	}

	@Override
	public void rotate(double theta) {
		context.rotate(theta);
	}

	@Override
	public void rotate(double theta, double x, double y) {
		context.translate(-x, -y);
		context.rotate(theta);
		context.translate(x, y);
	}

	@Override
	public void scale(double sx, double sy) {
		context.scale(sx, sy);
	}

	@Override
	public void shear(double shx, double shy) {
		context.setTransform(0, shx, shy, 0, 0, 0);
	}

	@Override
	public void dispose() {
		// do nothing
	}

	private Font font;

	@Override
	public void setFont(Font font) {
		this.font = font;
		if (font != null) {
			context.setFont(font.toHTML());
		} else {
			context.setFont("sans-serif");
		}
	}

	@Override
	public Font getFont() {
		return font;
	}

	private Color background;
	private String backgroundHtml;

	@Override
	public void setBackground(Color color) {
		this.background = color;
		this.backgroundHtml = background.toHTML();
	}

	@Override
	public Color getBackground() {
		return background;
	}

	private AffineTransform transform;

	@Override
	public void setTransform(AffineTransform transform) {
		this.transform = transform;
		context.setTransform(transform.getScaleX(), transform.getShearX(), transform.getShearY(), transform.getScaleY(),
				transform.getTranslateX(),
				transform.getTranslateY() /* m11, m12, m21, m22, dx, dy */);
	}

	@Override
	public AffineTransform getTransform() {
		return transform;
	}

	@Override
	public void transform(AffineTransform Tx) {
		if (transform == null) {
			setTransform(Tx);
		} else {
			transform.concatenate(Tx);
			setTransform(transform);
		}
	}

	@Override
	public void setPaintMode() {
		// ignore
	}

	@Override
	public Paint getPaint() {
		return color;
	}

	@Override
	public void setPaint(Paint paint) {
		if ( paint instanceof Color )
			context.setFillStyle(((Color) paint).toHTML());
	}

	@Override
	public void setStroke(Stroke s) {
		// ignore
	}

}
