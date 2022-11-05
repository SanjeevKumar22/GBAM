package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Customer;
import org.springframework.stereotype.Component;

import java.util.List;

public interface CustomerService {
    public List<Customer> getAllCustomerDetails();
    public void addCustomer(Customer customer);
    public Customer getCustomerDetails(String customer_number);
    public void deleteCustomer(String customer_number);
}
