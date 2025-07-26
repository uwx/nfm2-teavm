package java_impl;

public class ShallowClone {
    public static <T> T clone(T obj) {
        if (obj == null) return null;
        throw new RuntimeException("Cloning is disallowed by GWT. This needs to be fixed by hand.");
    }

    public static <T> T[] clone(T[] obj) {
        if (obj == null) return null;

        @SuppressWarnings("unchecked") T[] ret = (T[]) new Object[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static float[] clone(float[] obj) {
        float[] ret = new float[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static double[] clone(double[] obj) {
        double[] ret = new double[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static int[] clone(int[] obj) {
        int[] ret = new int[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static byte[] clone(byte[] obj) {
        byte[] ret = new byte[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static long[] clone(long[] obj) {
        long[] ret = new long[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static char[] clone(char[] obj) {
        char[] ret = new char[obj.length];
        System.arraycopy(obj, 0, ret, 0, obj.length);
        return ret;
    }

    public static byte[] copyOf(byte[] org, int length) {
        byte[] ret = new byte[length];
        System.arraycopy(org, 0, ret, 0, Math.min(length, org.length));
        return ret;
    }

    public static int[] copyOf(int[] org, int length) {
        int[] ret = new int[length];
        System.arraycopy(org, 0, ret, 0, Math.min(length, org.length));
        return ret;
    }

    public static float[] copyOf(float[] org, int length) {
        float[] ret = new float[length];
        System.arraycopy(org, 0, ret, 0, Math.min(length, org.length));
        return ret;
    }

    public static double[] copyOf(double[] org, int length) {
        double[] ret = new double[length];
        System.arraycopy(org, 0, ret, 0, Math.min(length, org.length));
        return ret;
    }
}
