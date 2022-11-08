package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Loan;

import java.util.List;

public interface LoanService {
    public Loan getloandetail(String cid);
    public boolean closeLoan(String cid);
}
