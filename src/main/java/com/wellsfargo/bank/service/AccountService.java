package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;

public interface AccountService {
   public void openAccount(Account account);
   public void closeAccount(String customer_number);
   public boolean customerExists(String customer_number);
   public boolean accountExists(String customer_number);
}
