package com.wellsfargo.bank.controller;
import com.wellsfargo.bank.model.Account;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
//api tested
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
	@Autowired
	private AccountService accountService;
	@PostMapping("/openAccount")
	public ResponseEntity<Boolean> openAccount(@RequestBody Account account)
	{
		if(accountService.customerExists(account.getCustomer_number()))
			return new ResponseEntity<>(accountService.openAccount(account),HttpStatus.ACCEPTED);
		else{
			return new ResponseEntity<>(false, HttpStatus.ACCEPTED);
		}
	}
	@GetMapping("/allaccounts")
	public ResponseEntity<List<Account>> listAll(){
		return new ResponseEntity<>(accountService.getAllaccount(),HttpStatus.ACCEPTED);
	}
	@DeleteMapping("/closeaccount/{aid}")
	public ResponseEntity<Boolean> closeAccount(@PathVariable("aid") String aid)
	{
		return new ResponseEntity<>(accountService.closeAccount(aid),HttpStatus.ACCEPTED);
	}
}