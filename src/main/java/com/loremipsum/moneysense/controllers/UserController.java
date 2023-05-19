package com.loremipsum.moneysense.controllers;

import com.loremipsum.moneysense.pojo.UserModel;
import com.loremipsum.moneysense.repository.UserRepository;
import com.loremipsum.moneysense.service.UserService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/api/v1/")
@AllArgsConstructor
@NoArgsConstructor
public class UserController {
    @Autowired
    UserRepository repository;
    @Autowired
    UserService service;
    @GetMapping("/user/")
    public ResponseEntity getUser(@RequestParam Long id){
         UserModel userModel = service.getOne((long) id);
        System.out.println("Debug1");
        return ResponseEntity.ok(userModel);
    }
    @PostMapping("/test/")
    public void setTest(@RequestBody UserModel model){
        System.out.println(model.getEmail());
        System.out.println(model.getFirstName());
        System.out.println(model.getLastName());
        System.out.println(model.getIncomes());
    }
}
