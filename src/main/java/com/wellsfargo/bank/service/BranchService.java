package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Branch;

import java.util.List;
import java.util.Optional;

public interface BranchService {
    public void addBranchDetails(Branch branch);
    public List<Branch> getAllBranchDetails();
    public void deleteBranch(String branch_id);
}
