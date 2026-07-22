public class EmployeeManagement {

    Employee[] employees = new Employee[10];
    int size = 0;

    // Add Employee
    void addEmployee(Employee employee) {
        if (size < employees.length) {
            employees[size++] = employee;
            System.out.println("Employee Added.");
        } else {
            System.out.println("Array is Full.");
        }
    }

    // Search Employee
    Employee searchEmployee(int id) {
        for (int i = 0; i < size; i++) {
            if (employees[i].employeeId == id)
                return employees[i];
        }
        return null;
    }

    // Traverse Employees
    void traverseEmployees() {
        for (int i = 0; i < size; i++) {
            System.out.println(employees[i]);
        }
    }

    // Delete Employee
    void deleteEmployee(int id) {

        int index = -1;

        for (int i = 0; i < size; i++) {
            if (employees[i].employeeId == id) {
                index = i;
                break;
            }
        }

        if (index == -1) {
            System.out.println("Employee Not Found.");
            return;
        }

        for (int i = index; i < size - 1; i++) {
            employees[i] = employees[i + 1];
        }

        employees[size - 1] = null;
        size--;

        System.out.println("Employee Deleted.");
    }

    public static void main(String[] args) {

        EmployeeManagement em = new EmployeeManagement();

        em.addEmployee(new Employee(101, "John", "Manager", 60000));
        em.addEmployee(new Employee(102, "Alice", "Developer", 50000));
        em.addEmployee(new Employee(103, "Bob", "Tester", 45000));

        System.out.println("\nEmployee Records:");
        em.traverseEmployees();

        System.out.println("\nSearch Employee:");
        System.out.println(em.searchEmployee(102));

        em.deleteEmployee(101);

        System.out.println("\nEmployee Records After Deletion:");
        em.traverseEmployees();
    }
}