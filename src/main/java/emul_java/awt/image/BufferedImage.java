package emul_java.awt.image;

import com.radicalplay.nfm2.teavm.ImageImpl;

public class BufferedImage extends ImageImpl implements RenderedImage {

	public BufferedImage(String src) {
		super(src);
	}


	@Override
	public int getWidth() {
		return super.getWidth(null);
	}

	@Override
	public int getHeight() {
		return super.getHeight(null);
	}

	@Override
	public int getWidth(ImageObserver obs) {
		return super.getWidth(null);
	}

	@Override
	public int getHeight(ImageObserver obs) {
		return super.getHeight(null);
	}

}
