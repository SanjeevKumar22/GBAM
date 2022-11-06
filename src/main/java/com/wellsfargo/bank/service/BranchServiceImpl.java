package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.model.User;
import com.wellsfargo.bank.repository.BranchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class BranchServiceImpl implements BranchService{
    @Autowired
    BranchRepository branchRepository;


    @Override
    public boolean addBranchDetails(Branch branch){
        Optional<Branch> branchData = branchRepository.findById(branch.getBranch_id());
        if(!branchData.isPresent()){
            branchRepository.save(branch);
            return true;
        }
        return  false;
    }

    @Override
    public List<Branch> getAllBranchDetails(){
        // need to handle null value in front-end
        return branchRepository.findAll();
    }

    @Override
    public boolean deleteBranch(String branch_id){

        if(accountExists(branch_id)){
            branchRepository.deleteById(branch_id);
            return true;
        }
        return false;
    }

    @Override
    public boolean accountExists(String branch_id) {
        // TODO Auto-generated method stub
        Optional<Branch> acc=branchRepository.findById(branch_id);
        return acc.isPresent();
    }
}
