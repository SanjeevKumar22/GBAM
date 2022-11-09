package com.wellsfargo.bank.Loan;

import com.wellsfargo.bank.model.Loan;
import com.wellsfargo.bank.repository.LoanRepository;
import com.wellsfargo.bank.service.LoanServiceImpl;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import com.wellsfargo.bank.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class LoanTests {

    @Autowired
    LoanRepository loanRepo;

    @Autowired
    LoanService loanService;
//
//    @Test
//    void contextLoads() {
//    }

    @Test
    @Order(1)
    public  void testCreate(){
        Loan loan = new Loan();
        loan.setBranch_id("b001");
        loan.setLoan_amount(1000);
        loan.setCustomer_number("c001");
        loanRepo.save(loan);
        assertNotNull(loanRepo.findById("c001").get());
    }

    @Test
    @Order(2)
    public void testGetLoanDetail(){
        Loan loan = loanService.getloandetail("c001");
        Assertions.assertThat(loan.getCustomer_number()).isEqualTo("c001");

    }

    @Test
    @Order(3)
    public void testCloseLoan(){
        boolean a = loanService.closeLoan("c001");
        assertEquals(a,true);
    }



}
