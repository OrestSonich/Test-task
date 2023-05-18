package com.test.test.categories;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categories")
public class CategoryConroller {
    private String type;
    private double value;
    private String color;
    private String category;

    @GetMapping
    public ResponseEntity<Category> getCategory() {
        Category category = new Category(type, value, color, this.category);
        return ResponseEntity.ok(category);
    }

    @PutMapping
    public ResponseEntity<Void> setCategory(@RequestBody Category category) {
        this.type = category.getType();
        this.value = category.getValue();
        this.color = category.getColor();
        this.category = category.getCategory();
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping
    public ResponseEntity<Void> deleteCategory() {
        this.type = null;
        this.value = 0;
        this.color = null;
        this.category = null;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/type")
    public ResponseEntity<Void> updateCategoryType(@RequestBody String newType) {
        this.type = newType;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/value")
    public ResponseEntity<Void> updateCategoryValue(@RequestBody double newValue) {
        this.value = newValue;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/color")
    public ResponseEntity<Void> updateCategoryColor(@RequestBody String newColor) {
        this.color = newColor;
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/category")
    public ResponseEntity<Void> updateCategoryName(@RequestBody String newCategory) {
        this.category = newCategory;
        return ResponseEntity.noContent().build();
    }
}
