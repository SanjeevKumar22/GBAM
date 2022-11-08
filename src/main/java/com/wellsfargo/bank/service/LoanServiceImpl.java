package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Loan;
import com.wellsfargo.bank.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoanServiceImpl implements LoanService {
@Autowired
private LoanRepository loanRepository;
    @Override
    public Loan getloandetail(String customer_number) {
        return loanRepository.findById(customer_number).get();
    }

    @Override
    public boolean closeLoan(String cid) {
        loanRepository.deleteById(cid);
        return true;
    }
}
