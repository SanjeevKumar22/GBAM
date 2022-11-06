package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.User;
import com.wellsfargo.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

   //Api call tested

   @Autowired
   UserService userService;
   @PostMapping("/login")
   public Boolean validateUser(@RequestBody User user){
      return userService.validate(user.getUser_name(), user.getPassword());
   }
}
