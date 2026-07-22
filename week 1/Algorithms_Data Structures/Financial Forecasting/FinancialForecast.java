public class FinancialForecast {

    // Recursive method to calculate future value
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {

        // Base case
        if (years == 0) {
            return presentValue;
        }

        // Recursive case
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {

        double presentValue = 10000;
        double growthRate = 0.10; // 10%
        int years = 5;

        double futureValue = calculateFutureValue(presentValue, growthRate, years);

        System.out.printf("Future Value after %d years = ₹%.2f", years, futureValue);
    }
}