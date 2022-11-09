package com.wellsfargo.bank.Branch;

import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.repository.BranchRepository;
import com.wellsfargo.bank.service.BranchService;
import com.wellsfargo.bank.service.BranchServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.ImportAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
class BranchTests {

    @Autowired
    BranchRepository branchRepo;
    @Autowired
    BranchService branchService;

//    @Test
//    void contextLoads() {
//    }

    @Test
    void testCreate(){
        Branch br = new Branch();
        br.setBranch_name("Bellandur");
        br.setBranch_id("b001");
        br.setBranch_city("Banglore");
        branchRepo.save(br);
        assertNotNull(branchRepo.findById("b001").get());
    }

    @Test
    void testAddBranchDetail(){
        Branch br = new Branch();
        br.setBranch_name("UB City");
        br.setBranch_id("b001");
        br.setBranch_city("Banglore");
        boolean a = branchService.addBranchDetails(br);
        assertEquals(a,true);
    }

    @Test
    void testGetAllBranches(){
        List<Branch> list = branchService.getAllBranchDetails();
        Assertions.assertThat(list).size().isGreaterThan(0);
    }

    @Test
    void testDeleteBranch(){
        boolean a = branchService.deleteBranch("b001");
        assertEquals(a,true);
    }

    @Test
    void testAccountExists(){
        boolean a = branchService.accountExists("b001");
        assertEquals(a,true);
    }


    @Test
    @Order(2)
    public void getBranchTest(){

        Branch br2 = branchRepo.findById("b002").get();

        Assertions.assertThat(br2.getBranch_id()).isEqualTo("b002");

    }




}
