package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Branch;

import java.util.List;
import java.util.Optional;

public interface BranchService {
    public boolean addBranchDetails(Branch branch);
    public List<Branch> getAllBranchDetails();
    public boolean deleteBranch(String branch_id);
    public boolean accountExists(String branch_id);
}
