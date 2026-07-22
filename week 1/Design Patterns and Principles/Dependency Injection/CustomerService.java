public class CustomerService {

    private CustomerRepository customerRepository;

    // Constructor Injection
    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public void getCustomer(int id) {

        String customer = customerRepository.findCustomerById(id);
        System.out.println("Customer ID : " + id);
        System.out.println("Customer Name : " + customer);
    }
}