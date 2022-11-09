package com.wellsfargo.bank.User;
import com.wellsfargo.bank.model.User;
import com.wellsfargo.bank.repository.UserRepository;
import com.wellsfargo.bank.service.UserService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class UserTests {

    @Autowired
    UserRepository UserRepo;

    @Autowired
    UserService userService;

    @Test
    void contextLoads() {
    }

    @Test
    public void testCreatenew(){
        User u1 = new User();
        u1.setPassword("pass");
        u1.setUser_name("shivani");
        UserRepo.save(u1);
        assertNotNull(UserRepo.findById("shivani").get());
    }


}
