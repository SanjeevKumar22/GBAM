package com.wellsfargo.bank.controller;
import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
public class AccountController {

	@Autowired
	private AccountService accountService;
	
	
	
	@PostMapping(path="/openAccount")
	public void openAccount(@RequestBody Account account)
	{
		if(accountService.customerExists(account.getCustomer_number()))
			accountService.openAccount(account);
	}
    @DeleteMapping(path="/closeaccount/{aid}")
    public void closeAccount(@PathVariable("aid") String aid)
    {
    	accountService.closeAccount(aid);
    }
}
