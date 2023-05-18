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

import java.util.ArrayList;
import java.util.List;

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
    public ResponseEntity getUser(){
        List<UserModel> modelList = new ArrayList<>();
        modelList.add(service.getOne("sonich.r@gmail.com"));
        modelList.add(service.getOne("sonich1.r@gmail.com"));
        modelList.add(service.getOne("sosat@gmail.com"));
        modelList.add(service.getOne("so@gmail.com"));
//        return ResponseEntity.ok(service.getOne("sosat@gmail.com"));
        return ResponseEntity.ok(modelList);
    }
    @PostMapping("/test/")
    public void setTest(@RequestBody UserModel model){
        System.out.println(model.getEmail());
        System.out.println(model.getFirstName());
        System.out.println(model.getLastName());
        System.out.println(model.getIncomes());
    }
}
