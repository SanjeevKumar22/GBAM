package com.wellsfargo.bank.service;
import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.List;
@Service
public class CustomerServiceImpl implements CustomerService  {
	@Autowired
	CustomerRepository customerRepository;

	public List<Customer> getAllCustomerDetails(){
		//need to handle null value in frontend if it is null
			return customerRepository.findAll();
	}

	public boolean addCustomer(Customer customer) {
		if(!customerNumberExists(customer.getCustomer_number())){
			customerRepository.save(customer);
			return true;
		}
		return false;

	}

	public Customer getCustomerDetails(String customer_number) {
		//need to handle exception
		return customerRepository.findById(customer_number).get();
	}

	public boolean deleteCustomer(String customer_number) {
		if(customerNumberExists(customer_number)){
			customerRepository.deleteById(customer_number);
			return true;
		}
		return false;
	}
	public boolean customerNumberExists(String cust_no){
		Optional<Customer>  customer_id=customerRepository.findById(cust_no);
		return customer_id.isPresent();
	}
}

