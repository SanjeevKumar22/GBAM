package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CustomerController {
//api call tested
    @Autowired
    CustomerService customerService;

    @GetMapping("/allcustomers")
    public List<Customer> listAll(){
        return customerService.getAllCustomerDetails();
    }

    @PostMapping("/addcustomer")
    public boolean addCustomer(@RequestBody Customer customer){
        return customerService.addCustomer(customer);
    }


    @GetMapping("/getcustomer/{cid}")
    public Customer getCustomerDetails(@PathVariable("cid") String cid){
        Customer customer=customerService.getCustomerDetails(cid);
        return customer;
    }

    @DeleteMapping("/deletecustomer/{cid}")
    public boolean deleteCustomer(@PathVariable("cid") String cid){
        return customerService.deleteCustomer(cid);
    }
}
