package com.wellsfargo.bank.repository;

import com.wellsfargo.bank.model.Branch;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BranchRepository extends JpaRepository<Branch,String> {
}
