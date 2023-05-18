package com.test.test.notifications;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@RestController
@RequestMapping("/notifications")
public class NotificationController {
    private String descr;
    private double value;
    private Date date;

    @GetMapping
    public ResponseEntity<Notification> getNotification() {
        Notification notification = new Notification(descr, value, date);
        return ResponseEntity.ok(notification);
    }

    @PutMapping
    public ResponseEntity<Void> setNotification(@RequestBody Notification notification) {
        descr = notification.getDescr();
        value = notification.getValue();
        date = notification.getDate();
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteNotification() {
        descr = null;
        value = 0;
        date = null;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/descr")
    public ResponseEntity<Void> updateNotificationDescription(@RequestBody String newDescr) {
        descr = newDescr;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/value")
    public ResponseEntity<Void> updateNotificationValue(@RequestBody double newValue) {
        value = newValue;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/date")
    public ResponseEntity<Void> updateNotificationDate(@RequestBody @DateTimeFormat(pattern = "yyyy-MM-dd") Date newDate) {
        date = newDate;
        return ResponseEntity.noContent().build();
    }
}
