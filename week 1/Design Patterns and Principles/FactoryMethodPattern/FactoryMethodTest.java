public class FactoryMethodTest {

    public static void main(String[] args) {

        DocumentFactory wordFactory = new WordDocumentFactory();
        DocumentFactory pdfFactory = new PdfDocumentFactory();
        DocumentFactory excelFactory = new ExcelDocumentFactory();

        System.out.println("Creating Documents using Factory Method Pattern\n");

        wordFactory.displayDocument();
        pdfFactory.displayDocument();
        excelFactory.displayDocument();
    }
}