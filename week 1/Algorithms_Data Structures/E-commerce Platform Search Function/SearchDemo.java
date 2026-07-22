import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    public static Product linearSearch(Product[] products, int id) {

        for (Product p : products) {
            if (p.productId == id)
                return p;
        }

        return null;
    }

    // Binary Search
    public static Product binarySearch(Product[] products, int id) {

        int low = 0;
        int high = products.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];

            else if (products[mid].productId < id)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {

                new Product(103, "Keyboard", "Accessories"),
                new Product(101, "Laptop", "Electronics"),
                new Product(105, "Monitor", "Electronics"),
                new Product(102, "Mouse", "Accessories"),
                new Product(104, "Printer", "Office")
        };

        // Linear Search
        Product result = linearSearch(products, 102);

        if (result != null)
            System.out.println("Linear Search Result:");
        System.out.println(result);

        // Sort for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        result = binarySearch(products, 102);

        if (result != null)
            System.out.println("\nBinary Search Result:");
        System.out.println(result);
    }
}