package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Loan;
import com.wellsfargo.bank.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class LoanController {
    @Autowired
    LoanService loanService;

    @GetMapping("/loan_amt/{cid}")
    public ResponseEntity<Loan> getLoan(@PathVariable("cid") String cid){
        try {
            Loan loan=loanService.getloandetail(cid);
            return new ResponseEntity<>(loan, HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(null,HttpStatus.ACCEPTED);
        }
    }
    @DeleteMapping("/deleteloan/{cid}")
    public ResponseEntity<Boolean> delLoan(@PathVariable("cid") String cid){
        try {
            return new ResponseEntity<>(loanService.closeLoan(cid),HttpStatus.ACCEPTED);
        }catch (Exception e){
            return new ResponseEntity<>(false,HttpStatus.ACCEPTED);
        }
    }
}
