public class TaskLinkedList {

    Task head = null;

    // Add Task
    public void addTask(int id, String name, String status) {

        Task newTask = new Task(id, name, status);

        if (head == null) {
            head = newTask;
            return;
        }

        Task temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }

        temp.next = newTask;
    }

    // Search Task
    public Task searchTask(int id) {

        Task temp = head;

        while (temp != null) {

            if (temp.taskId == id)
                return temp;

            temp = temp.next;
        }

        return null;
    }

    // Traverse Tasks
    public void traverseTasks() {

        Task temp = head;

        while (temp != null) {
            System.out.println(temp);
            temp = temp.next;
        }
    }

    // Delete Task
    public void deleteTask(int id) {

        if (head == null)
            return;

        if (head.taskId == id) {
            head = head.next;
            System.out.println("Task Deleted.");
            return;
        }

        Task temp = head;

        while (temp.next != null && temp.next.taskId != id) {
            temp = temp.next;
        }

        if (temp.next == null) {
            System.out.println("Task Not Found.");
            return;
        }

        temp.next = temp.next.next;
        System.out.println("Task Deleted.");
    }

    public static void main(String[] args) {

        TaskLinkedList list = new TaskLinkedList();

        list.addTask(101, "Design UI", "Pending");
        list.addTask(102, "Develop Backend", "In Progress");
        list.addTask(103, "Testing", "Pending");

        System.out.println("Task List:");
        list.traverseTasks();

        System.out.println("\nSearch Task:");
        System.out.println(list.searchTask(102));

        list.deleteTask(101);

        System.out.println("\nTask List After Deletion:");
        list.traverseTasks();
    }
}