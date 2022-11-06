package com.wellsfargo.bank.controller;
import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//api tested
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
	@Autowired
	private AccountService accountService;
	@PostMapping("/openAccount")
	public boolean openAccount(@RequestBody Account account)
	{
		if(accountService.customerExists(account.getCustomer_number()))
			return accountService.openAccount(account);
		else{
			return false;
		}
	}
    @DeleteMapping("/closeaccount/{aid}")
    public boolean closeAccount(@PathVariable("aid") String aid)
    {
    	return accountService.closeAccount(aid);
    }
}
