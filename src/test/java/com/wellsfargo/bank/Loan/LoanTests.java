package com.wellsfargo.bank.Loan;

import com.wellsfargo.bank.model.Loan;
import com.wellsfargo.bank.repository.LoanRepository;
import com.wellsfargo.bank.service.LoanServiceImpl;
import org.junit.jupiter.api.Test;
import com.wellsfargo.bank.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

public class LoanTests {

    @Autowired
    LoanRepository loanRepo;

    @Test
    void contextLoads() {
    }

    @Test
    public  void testCreate(){
        Loan loan = new Loan();
        loan.setBranch_id("b001");
        loan.setLoan_amount(1000);
        loan.setCustomer_number("c001");
        loanRepo.save(loan);
//        assertNotNull(loanRepo.findById("c001").get());
    }

    @Test
    public void CheckDelete(){
        loanRepo.deleteById("c001");
        assertThat(loanRepo.existsById("c001")).isFalse();
    }


}
