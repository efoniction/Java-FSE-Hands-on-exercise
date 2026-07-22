public class StrategyPatternTest {

    public static void main(String[] args) {

        PaymentContext context = new PaymentContext();

        // Pay using Credit Card
        context.setPaymentStrategy(new CreditCardPayment());
        context.makePayment(2500);

        // Pay using PayPal
        context.setPaymentStrategy(new PayPalPayment());
        context.makePayment(1800);

        // No strategy selected
        context.setPaymentStrategy(null);
        context.makePayment(1000);
    }
}