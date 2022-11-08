package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Customer;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.List;

public interface CustomerService {
    public List<Customer> getAllCustomerDetails();
    public boolean addCustomer(Customer customer);
    public Customer getCustomerDetails(String customer_number);
    public boolean deleteCustomer(String customer_number);
    public boolean customerNumberExists(String cust_no);
}
