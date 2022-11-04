package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CustomerController {

    @Autowired
    CustomerService customerService;

    @GetMapping(path = "/allcustomers")
    public List<Customer> listAll(){
        return customerService.getAllCustomerDetails();
    }

    @PostMapping("/addcustomer")
    public void addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
    }


    @GetMapping(path = "/getcustomer/{cid}")
    public Customer getCustomerDetails(@PathVariable("cid") String cid){
        return customerService.getCustomerDetails(cid);
    }

    @DeleteMapping(path = "/deletecustomer/{cid}")
    public void deleteCustomer(@PathVariable("cid") String cid){
        customerService.deleteCustomer(cid);
    }
}
