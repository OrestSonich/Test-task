package com.test.test.cashback;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cashback")
public class CashbackController {
    private String type;
    private double value;

    @GetMapping
    public ResponseEntity<Cashback> getCashback() {
        Cashback cashback = new Cashback(type, value);
        return ResponseEntity.ok(cashback);
    }

    @PutMapping
    public ResponseEntity<Void> setCashback(@RequestBody Cashback cashback) {
        type = cashback.getType();
        value = cashback.getValue();
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCashback() {
        type = null;
        value = 0;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/type")
    public ResponseEntity<Void> updateCashbackType(@RequestBody String newType) {
        type = newType;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/value")
    public ResponseEntity<Void> updateCashbackValue(@RequestBody double newValue) {
        value = newValue;
        return ResponseEntity.noContent().build();
    }
}
