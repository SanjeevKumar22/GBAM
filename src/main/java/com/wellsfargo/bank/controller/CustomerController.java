package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class CustomerController {
//api call tested
    @Autowired
    CustomerService customerService;

    @GetMapping("/allcustomers")
    public ResponseEntity<List<Customer>> listAll(){
        return new ResponseEntity<>(customerService.getAllCustomerDetails(),HttpStatus.ACCEPTED);
    }

    @PostMapping("/addcustomer")
    public ResponseEntity<Boolean> addCustomer(@RequestBody Customer customer){
        return new ResponseEntity<>(customerService.addCustomer(customer), HttpStatus.ACCEPTED);
    }


    @GetMapping("/getcustomer/{cid}")
    public ResponseEntity<Customer> getCustomerDetails(@PathVariable("cid") String cid){
        Customer customer=customerService.getCustomerDetails(cid);
        return new ResponseEntity<>(customer,HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/deletecustomer/{cid}")
    public ResponseEntity<Boolean> deleteCustomer(@PathVariable("cid") String cid){
        return new ResponseEntity<>(customerService.deleteCustomer(cid),HttpStatus.ACCEPTED);
    }
}
