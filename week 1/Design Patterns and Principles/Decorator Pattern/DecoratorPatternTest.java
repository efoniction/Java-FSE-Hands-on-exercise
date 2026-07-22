public class DecoratorPatternTest {

    public static void main(String[] args) {

        // Email only
        Notifier emailNotifier = new EmailNotifier();
        System.out.println("Sending Email Notification:");
        emailNotifier.send("Your order has been placed.");

        System.out.println();

        // Email + SMS
        Notifier emailSMSNotifier =
                new SMSNotifierDecorator(new EmailNotifier());

        System.out.println("Sending Email + SMS Notification:");
        emailSMSNotifier.send("Your payment was successful.");

        System.out.println();

        // Email + SMS + Slack
        Notifier allNotifier =
                new SlackNotifierDecorator(
                        new SMSNotifierDecorator(
                                new EmailNotifier()));

        System.out.println("Sending Email + SMS + Slack Notification:");
        allNotifier.send("Your account has been updated.");
    }
}