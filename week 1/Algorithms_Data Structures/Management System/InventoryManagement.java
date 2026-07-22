import java.util.HashMap;

public class InventoryManagement {

    HashMap<Integer, Product> inventory = new HashMap<>();

    // Add Product
    public void addProduct(Product product) {
        inventory.put(product.productId, product);
        System.out.println("Product Added.");
    }

    // Update Product
    public void updateProduct(int id, int quantity, double price) {
        Product p = inventory.get(id);

        if (p != null) {
            p.quantity = quantity;
            p.price = price;
            System.out.println("Product Updated.");
        } else {
            System.out.println("Product Not Found.");
        }
    }

    // Delete Product
    public void deleteProduct(int id) {
        if (inventory.remove(id) != null)
            System.out.println("Product Deleted.");
        else
            System.out.println("Product Not Found.");
    }

    // Display Inventory
    public void displayProducts() {
        for (Product p : inventory.values()) {
            System.out.println(p);
        }
    }

    public static void main(String[] args) {

        InventoryManagement ims = new InventoryManagement();

        ims.addProduct(new Product(101, "Laptop", 15, 55000));

        ims.addProduct(new Product(102, "Mouse", 50, 700));

        ims.addProduct(new Product(103, "Keyboard", 30, 1200));

        System.out.println("\nInventory:");

        ims.displayProducts();

        ims.updateProduct(102, 60, 750);

        ims.deleteProduct(103);

        System.out.println("\nUpdated Inventory:");

        ims.displayProducts();
    }
}