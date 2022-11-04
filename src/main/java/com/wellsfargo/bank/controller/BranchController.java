package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BranchController {
    @Autowired
    private BranchService branchService;

    @PostMapping(path = "/addbranch")
    public void addBranchDetails(@RequestBody Branch branch){
        branchService.addBranchDetails(branch);
    }

    @DeleteMapping(path = "/deletebranch/{bid}")
    public void deleteBranch(@PathVariable("bid") String bid){
        branchService.deleteBranch(bid);
    }

    @GetMapping(path = "/allbranches")
    public List<Branch> getAllBranchDetails(){
        return branchService.getAllBranchDetails();
    }
}

