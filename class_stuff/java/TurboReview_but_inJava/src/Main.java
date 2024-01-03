import java.util.Random;

public class Main {
    public static void main(String[] args) {
        // Declare a variable and assign it to a sentence as a string. Print if the sentence is a question
        String bob = "Hello World, are you a user or a program?";
        System.out.println(true);
        System.out.println(bob);

        // declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
        System.out.println(replace("I am a jr. dev"));

        // Create a function that returns rock, paper, or scissors as randomly as possible
        System.out.println(randomRockPaperScissors());
    }

    public static String replace(String string){
        return string.replace("jr. dev", "software engineer");
    }

    public static String randomRockPaperScissors(){
        String[] choices = {"rock", "paper", "scissors"};
        Random random = new Random();
        int index = random.nextInt(choices.length);
        return choices[index];
    }
}