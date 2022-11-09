package com.wellsfargo.bank.Account;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.repository.AccountRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertNotNull;

public class AccountTests {
    @Autowired
    AccountRepository accRepo;

    @Test
    void contextLoads() {
    }

//    @Test
//    void testCreateAcc(){
//        Account acc = new Account();
//        Date d = new Date();
//        acc.setOpening_date(String.valueOf(d.getDate()));
//        acc.setAccount_number("a001");
//        acc.setBranch_id("b001");
//        acc.setCustomer_number("c001");
//        acc.setBalance("10000");
//        accRepo.save(acc);
//        assertNotNull(accRepo.findById("a0001").get());
//    }




}
