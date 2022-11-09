package com.wellsfargo.bank.Branch;

import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.repository.BranchRepository;
import com.wellsfargo.bank.service.BranchServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class BranchTests {

    @Autowired
    BranchRepository branchRepo;

    @Test
    void contextLoads() {
    }

    @Test
    void testAddBranchDetails(){
        Branch br = new Branch();
        br.setBranch_name("Bellandur");
        br.setBranch_id("b001");
        br.setBranch_city("Banglore");
        branchRepo.save(br);
        assertNotNull(branchRepo.findById("b001").get());
    }

//    @Test
//    void test1(){
//        Branch br = new Branch();
//        br.setBranch_name("UB City");
//        br.setBranch_id("b002");
//        br.setBranch_city("Banglore");
//        boolean a = BranchServiceImpl.addBranchDetails(br);
//        assertEquals(a,true);
//    }




}
