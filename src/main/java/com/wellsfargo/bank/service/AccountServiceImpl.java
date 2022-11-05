package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.AccountRepository;

import com.wellsfargo.bank.repository.BranchRepository;
import com.wellsfargo.bank.repository.CustomerRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class AccountServiceImpl implements AccountService{
  @Autowired
  private AccountRepository accountRepository;
  @Autowired
  private CustomerRepository customerRepository;
  

@Override
public void openAccount(Account account) {
	// TODO Auto-generated method stub
	accountRepository.save(account);
	
}

@Override
public void closeAccount(String customer_number) {
	// TODO Auto-generated method stub
	accountRepository.deleteById(customer_number);
}

@Override
public boolean customerExists(String customer_number) {
	// TODO Auto-generated method stub
	Optional<Customer> customer=customerRepository.findById(customer_number);
	if(customer.isPresent())
		return true;
	return false;
}

@Override
public boolean accountExists(String customer_number) {
	// TODO Auto-generated method stub
	Optional<Account> account=accountRepository.findById(customer_number);
	if(account.isPresent())
		return true;
	return false;
}

 
}
