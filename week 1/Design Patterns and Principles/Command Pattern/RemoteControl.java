public class RemoteControl {

    private Command command;

    // Set the command
    public void setCommand(Command command) {
        this.command = command;
    }

    // Execute the command
    public void pressButton() {

        if (command != null) {
            command.execute();
        } else {
            System.out.println("No command assigned.");
        }
    }
}