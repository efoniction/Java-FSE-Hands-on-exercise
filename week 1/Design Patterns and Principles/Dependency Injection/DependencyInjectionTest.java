public class DependencyInjectionTest {

    public static void main(String[] args) {

        // Create Repository
        CustomerRepository repository = new CustomerRepositoryImpl();

        // Inject Repository into Service
        CustomerService service = new CustomerService(repository);

        // Find Customers
        service.getCustomer(101);

        System.out.println();

        service.getCustomer(102);

        System.out.println();

        service.getCustomer(105);
    }
}