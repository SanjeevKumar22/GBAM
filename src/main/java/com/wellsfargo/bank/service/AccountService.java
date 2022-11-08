package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface AccountService {
   public List<Account> getAllaccount();
   public boolean openAccount(Account account);
   public boolean closeAccount(String acc_no);
   public boolean customerExists(String customer_number);
   public boolean accountExists(String customer_number);
}