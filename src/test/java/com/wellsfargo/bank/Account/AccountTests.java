package com.wellsfargo.bank.Account;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.repository.AccountRepository;
import com.wellsfargo.bank.service.AccountService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class AccountTests {
    @Autowired
    AccountRepository accRepo;

    @Autowired
    AccountService accountService;

    @Test
    void contextLoads() {
    }

//    @Test
//    void testCreateAcc(){
//        Date d = new Date();
//        Account acc = new Account();
//        acc.setAccount_number("12345");
//        acc.setBranch_id("b011");
//        acc.setCustomer_number("c011");
//        acc.setBalance("10000");
//        acc.setAccount_status("Active");
//        acc.setAccount_type("Savings");
//        accRepo.save(acc);
//        assertNotNull(accRepo.findById("a0001").get());
//    }

    @Test
    void testOpenAccount(){
        Date d = new Date(2022,10,10);
        Account acc = new Account();
        acc.setAccount_number("9876");
        acc.setBranch_id("b011");
        acc.setOpening_date(d);
        acc.setCustomer_number("c011");
        acc.setBalance("10000");
        acc.setAccount_status("Active");
        acc.setAccount_type("Savings");
        boolean a  = accountService.openAccount(acc);
        assertEquals(a,true);
    }

    @Test
    void testCloseAccount(){
        boolean a  =accountService.closeAccount("9876");
        assertEquals(a,true);
    }


    @Test
    void testCustomerExists(){
        boolean a = accountService.customerExists("fuwhohiv");
        assertEquals(a,false);
    }










}
