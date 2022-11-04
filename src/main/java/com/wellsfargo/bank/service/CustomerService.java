package com.wellsfargo.bank.service;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;
@Service
public class CustomerService {
@Autowired
private CustomerRepository customerRepository;
public List<Customer> listAll(){
	return customerRepository.findAll();}
	
public void save(Customer customer) {
	customerRepository.save(customer);
}

public Customer get(String customer_number) {
	return customerRepository.findById(customer_number).get();
}

public void delete(String customer_number) {
	customerRepository.deleteById(customer_number);
}
}

