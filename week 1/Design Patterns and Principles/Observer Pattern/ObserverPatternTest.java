public class ObserverPatternTest {

    public static void main(String[] args) {

        // Create Stock Market
        StockMarket stockMarket = new StockMarket();

        // Create Observers
        Observer mobileUser = new MobileApp("Alice");
        Observer webUser = new WebApp("Bob");

        // Register Observers
        stockMarket.registerObserver(mobileUser);
        stockMarket.registerObserver(webUser);

        // Update Stock Price
        stockMarket.setStock("TCS", 3650.50);

        stockMarket.setStock("Infosys", 1542.75);

        // Remove one observer
        stockMarket.removeObserver(webUser);

        System.out.println("\nAfter removing Web App observer:");

        stockMarket.setStock("Wipro", 498.90);
    }
}