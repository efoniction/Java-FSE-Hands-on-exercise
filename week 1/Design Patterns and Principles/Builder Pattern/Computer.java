public class Computer {

    // Attributes
    private String CPU;
    private String RAM;
    private String storage;
    private String graphicsCard;
    private String operatingSystem;

    // Private Constructor
    private Computer(Builder builder) {
        this.CPU = builder.CPU;
        this.RAM = builder.RAM;
        this.storage = builder.storage;
        this.graphicsCard = builder.graphicsCard;
        this.operatingSystem = builder.operatingSystem;
    }

    // Display Computer Details
    public void showConfiguration() {
        System.out.println("Computer Configuration");
        System.out.println("----------------------");
        System.out.println("CPU              : " + CPU);
        System.out.println("RAM              : " + RAM);
        System.out.println("Storage          : " + storage);
        System.out.println("Graphics Card    : " + graphicsCard);
        System.out.println("Operating System : " + operatingSystem);
        System.out.println();
    }

    // Static Nested Builder Class
    public static class Builder {

        private String CPU;
        private String RAM;
        private String storage;
        private String graphicsCard;
        private String operatingSystem;

        // Setter methods

        public Builder setCPU(String CPU) {
            this.CPU = CPU;
            return this;
        }

        public Builder setRAM(String RAM) {
            this.RAM = RAM;
            return this;
        }

        public Builder setStorage(String storage) {
            this.storage = storage;
            return this;
        }

        public Builder setGraphicsCard(String graphicsCard) {
            this.graphicsCard = graphicsCard;
            return this;
        }

        public Builder setOperatingSystem(String operatingSystem) {
            this.operatingSystem = operatingSystem;
            return this;
        }

        // Build Method
        public Computer build() {
            return new Computer(this);
        }
    }
}