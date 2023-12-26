package com.stopwatch;

/**
 * Hello world!
 *
 */
public class Stopwatch
{
    private long startTime = 0;

    public void startTime() {
        startTime = System.currentTimeMillis();
    }

    public double elapsedTime() {
        long now = System.currentTimeMillis();
        return (now - startTime) / 1000.0;
    }


    public static void main( String[] args )
    {
        Stopwatch s = new Stopwatch();
        s.startTime();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println( "Elapsed time in seconds: " + s.elapsedTime() );
    }


}
