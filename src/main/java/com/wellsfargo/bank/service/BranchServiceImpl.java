package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
@Component
public class BranchServiceImpl implements BranchService{
    @Autowired
    BranchRepository branchRepository;

    @Override
    public void addBranchDetails(Branch branch){
        branchRepository.save(branch);
    }

    @Override
    public List<Branch> getAllBranchDetails(){
        return (List)branchRepository.findAll();
    }

    @Override
    public void deleteBranch(String branch_id){
        branchRepository.deleteById(branch_id);
    }
}
