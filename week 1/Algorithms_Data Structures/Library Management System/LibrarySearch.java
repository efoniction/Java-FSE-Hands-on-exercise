import java.util.Arrays;
import java.util.Comparator;

public class LibrarySearch {

    // Linear Search
    static Book linearSearch(Book[] books, String title) {

        for (Book book : books) {
            if (book.title.equalsIgnoreCase(title))
                return book;
        }

        return null;
    }

    // Binary Search
    static Book binarySearch(Book[] books, String title) {

        int low = 0;
        int high = books.length - 1;

        while (low <= high) {

            int mid = (low + high) / 2;

            int result = books[mid].title.compareToIgnoreCase(title);

            if (result == 0)
                return books[mid];

            else if (result < 0)
                low = mid + 1;

            else
                high = mid - 1;
        }

        return null;
    }

    public static void main(String[] args) {

        Book[] books = {
                new Book(101, "Java Programming", "James"),
                new Book(102, "Data Structures", "Mark"),
                new Book(103, "Python Basics", "John"),
                new Book(104, "Algorithms", "Robert")
        };

        System.out.println("Linear Search:");

        Book result = linearSearch(books, "Python Basics");

        if (result != null)
            System.out.println(result);
        else
            System.out.println("Book Not Found");

        // Sort by title before Binary Search
        Arrays.sort(books, Comparator.comparing(book -> book.title));

        System.out.println("\nBinary Search:");

        result = binarySearch(books, "Python Basics");

        if (result != null)
            System.out.println(result);
        else
            System.out.println("Book Not Found");
    }
}