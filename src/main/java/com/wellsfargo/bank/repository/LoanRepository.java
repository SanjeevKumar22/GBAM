package com.wellsfargo.bank.repository;

import com.wellsfargo.bank.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoanRepository extends JpaRepository<Loan,String> {
}
