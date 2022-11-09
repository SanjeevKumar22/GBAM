package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.User;
import com.wellsfargo.bank.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public ResponseEntity<Boolean> validate(String userName, String password){
        Optional<User> userData = userRepository.findById(userName);
//        if(userData.isPresent()){
//            return userData.get().getPassword().equals(password);
//        }
//        return  false;
        return new ResponseEntity<>(userData.map(user -> user.getPassword().equals(password)).orElse(false), HttpStatus.ACCEPTED);
    }
}