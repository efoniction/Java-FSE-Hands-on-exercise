public class AdapterPatternTest {

    public static void main(String[] args) {

        // Using PayPal through Adapter
        PaymentProcessor payPal =
                new PayPalAdapter(new PayPalGateway());

        payPal.processPayment(2500);

        // Using Stripe through Adapter
        PaymentProcessor stripe =
                new StripeAdapter(new StripeGateway());

        stripe.processPayment(5000);
    }
}