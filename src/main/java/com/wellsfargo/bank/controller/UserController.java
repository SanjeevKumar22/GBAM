package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@ResponseBody
public class UserController {

   UserService userService = new UserService();
   @GetMapping("/login")
   @CrossOrigin(origins = "http://localhost:8080")
   public Boolean validateUser(String userName, String password){
   return userService.validate(userName,password);
   }
}
