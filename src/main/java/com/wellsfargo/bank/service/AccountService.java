package com.wellsfargo.bank.service;

import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;

public interface AccountService {
   public boolean openAccount(Account account);
   public boolean closeAccount(String acc_no);
   public boolean customerExists(String customer_number);
   public boolean accountExists(String customer_number);
}
