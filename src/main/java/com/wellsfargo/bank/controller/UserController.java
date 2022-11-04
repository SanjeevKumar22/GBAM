package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@ResponseBody
public class UserController {

   @Autowired
   UserService userService;
   @GetMapping("/login")
   public Boolean validateUser(@RequestParam("uname") String userName, @RequestParam("password") String password){
      return userService.validate(userName,password);
   }
}
