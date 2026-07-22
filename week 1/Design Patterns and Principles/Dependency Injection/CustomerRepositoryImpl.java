public class CustomerRepositoryImpl implements CustomerRepository {

    @Override
    public String findCustomerById(int id) {

        if (id == 101) {
            return "John";
        } else if (id == 102) {
            return "Alice";
        } else if (id == 103) {
            return "David";
        } else {
            return "Customer Not Found";
        }
    }
}