package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Branch;
import com.wellsfargo.bank.service.BranchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BranchController {
    //api call tested
    @Autowired
    BranchService branchService;

    @PostMapping("/addbranch")
    public boolean addBranchDetails(@RequestBody Branch branch){
        return branchService.addBranchDetails(branch);
    }

    @DeleteMapping("/deletebranch/{bid}")
    public boolean deleteBranch(@PathVariable("bid") String bid){
        return branchService.deleteBranch(bid);
    }

    @GetMapping("/allbranches")
    public List<Branch> getAllBranchDetails(){
        return branchService.getAllBranchDetails();
    }
}

