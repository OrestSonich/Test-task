package com.test.test.cashback;

public class Cashback {
    private String type;
    private double value;

    // Конструкторы, геттеры и сеттеры

    // Конструктор по умолчанию для преобразования JSON
    public Cashback() {}

    public Cashback(String type, double value) {
        this.type = type;
        this.value = value;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }
}
