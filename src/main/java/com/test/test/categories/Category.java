package com.test.test.categories;

class Category {
    private String type;
    private double value;
    private String color;
    private String category;

    public Category() {}

    public Category(String type, double value, String color, String category) {
        this.type = type;
        this.value = value;
        this.color = color;
        this.category = category;
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

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
