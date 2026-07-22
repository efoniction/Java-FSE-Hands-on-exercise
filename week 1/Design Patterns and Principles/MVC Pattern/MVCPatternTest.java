public class MVCPatternTest {

    public static void main(String[] args) {

        // Create Model
        Student student = new Student("John", 101, "A");

        // Create View
        StudentView view = new StudentView();

        // Create Controller
        StudentController controller = new StudentController(student, view);

        // Display Initial Details
        System.out.println("Initial Student Details:");
        controller.updateView();

        // Update Student Details
        controller.setStudentName("Alice");
        controller.setStudentId(102);
        controller.setStudentGrade("A+");

        System.out.println();

        System.out.println("Updated Student Details:");
        controller.updateView();
    }
}