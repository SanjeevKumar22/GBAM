package com.wellsfargo.bank.service;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;
@Service
@Component
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	CustomerRepository customerRepository;

	public List<Customer> getAllCustomerDetails(){
		return customerRepository.findAll();
	}
	
	public void addCustomer(Customer customer) {
		customerRepository.save(customer);
	}

	public Customer getCustomerDetails(String customer_number) {
		return customerRepository.findById(customer_number).get();
	}

	public void deleteCustomer(String customer_number) {
		customerRepository.deleteById(customer_number);
	}
}

