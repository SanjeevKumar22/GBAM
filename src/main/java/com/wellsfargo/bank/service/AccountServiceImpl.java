package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Branch;
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
public boolean openAccount(Account account) {
	// TODO Auto-generated method stub
	Optional<Account> accountData = accountRepository.findById(account.getAccount_number());
	if(!accountData.isPresent()){
		accountRepository.save(account);
		return true;
	}
	return  false;
}

@Override
public boolean closeAccount(String acc_no) {
	// TODO Auto-generated method stub
	if(accountExists(acc_no)){
		accountRepository.deleteById(acc_no);
		return true;
	}
	return false;
}

@Override
public boolean customerExists(String customer_number) {
	// TODO Auto-generated method stub
	Optional<Customer> customer=customerRepository.findById(customer_number);
	return customer.isPresent();
}

@Override
public boolean accountExists(String customer_number) {
	// TODO Auto-generated method stub
	Optional<Account> account=accountRepository.findById(customer_number);
	return account.isPresent();
}
}
