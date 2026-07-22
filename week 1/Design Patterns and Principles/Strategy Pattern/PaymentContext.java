public class PaymentContext {

    private PaymentStrategy paymentStrategy;

    // Set the strategy at runtime
    public void setPaymentStrategy(PaymentStrategy paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }

    // Execute the selected strategy
    public void makePayment(double amount) {

        if (paymentStrategy == null) {
            System.out.println("No payment method selected.");
            return;
        }

        paymentStrategy.pay(amount);
    }
}