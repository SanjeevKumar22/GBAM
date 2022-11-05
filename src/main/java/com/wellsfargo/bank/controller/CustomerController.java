package com.wellsfargo.bank.controller;

import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@ResponseBody
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
        Customer customer=new Customer();
        customer=customerService.getCustomerDetails(cid);
        return customer;
    }

    @DeleteMapping(path = "/deletecustomer/{cid}")
    public void deleteCustomer(@PathVariable("cid") String cid){
        customerService.deleteCustomer(cid);
    }
}
