public class BuilderPatternTest {

    public static void main(String[] args) {

        // Gaming Computer
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel Core i9")
                .setRAM("32 GB")
                .setStorage("1 TB SSD")
                .setGraphicsCard("NVIDIA RTX 4080")
                .setOperatingSystem("Windows 11")
                .build();

        // Office Computer
        Computer officePC = new Computer.Builder()
                .setCPU("Intel Core i5")
                .setRAM("16 GB")
                .setStorage("512 GB SSD")
                .setOperatingSystem("Windows 10")
                .build();

        // Budget Computer
        Computer budgetPC = new Computer.Builder()
                .setCPU("AMD Ryzen 3")
                .setRAM("8 GB")
                .setStorage("256 GB SSD")
                .build();

        System.out.println("===== Gaming Computer =====");
        gamingPC.showConfiguration();

        System.out.println("===== Office Computer =====");
        officePC.showConfiguration();

        System.out.println("===== Budget Computer =====");
        budgetPC.showConfiguration();
    }
}