package com.test.test.notifications;

import java.util.Date;
public class Notification {
    private String descr;
    private double value;
    private Date date;

    public Notification() {}

    public Notification(String descr, double value, Date date) {
        this.descr = descr;
        this.value = value;
        this.date = date;
    }

    public String getDescr() {
        return descr;
    }

    public void setDescr(String descr) {
        this.descr = descr;
    }

    public double getValue() {
        return value;
    }

    public void setValue(double value) {
        this.value = value;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
