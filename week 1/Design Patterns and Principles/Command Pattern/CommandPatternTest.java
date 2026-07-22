public class CommandPatternTest {

    public static void main(String[] args) {

        // Receiver
        Light light = new Light();

        // Commands
        Command lightOn = new LightOnCommand(light);
        Command lightOff = new LightOffCommand(light);

        // Invoker
        RemoteControl remote = new RemoteControl();

        // Turn ON the light
        remote.setCommand(lightOn);
        System.out.println("Pressing ON button:");
        remote.pressButton();

        // Turn OFF the light
        remote.setCommand(lightOff);
        System.out.println("Pressing OFF button:");
        remote.pressButton();
    }
}