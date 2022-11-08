//package com.wellsfargo.bank.controller;
//import com.wellsfargo.bank.model.Account;
//import com.wellsfargo.bank.service.AccountService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
////api tested
//@RestController
//@CrossOrigin(origins = "http://localhost:3000")
//public class AccountController {
//	@Autowired
//	private AccountService accountService;
//	@PostMapping("/openAccount")
//	public boolean openAccount(@RequestBody Account account)
//	{
//		if(accountService.customerExists(account.getCustomer_number()))
//			return accountService.openAccount(account);
//		else{
//			return false;
//		}
//	}
//    @DeleteMapping("/closeaccount/{aid}")
//    public boolean closeAccount(@PathVariable("aid") String aid)
//    {
//    	return accountService.closeAccount(aid);
//    }
//}
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
		try{
			if(accountService.customerExists(account.getCustomer_number()))
				return new ResponseEntity<>(accountService.openAccount(account),HttpStatus.ACCEPTED);
			else{
				return new ResponseEntity<>(false, HttpStatus.ACCEPTED);
			}
		}catch (Exception e){
			return new ResponseEntity<>(false, HttpStatus.ACCEPTED);
		}
	}
	@GetMapping("/allaccounts")
	public ResponseEntity<List<Account>> listAll(){
		try{
			return new ResponseEntity<>(accountService.getAllaccount(),HttpStatus.ACCEPTED);
		}catch (Exception e){
			return new ResponseEntity<>(null,HttpStatus.ACCEPTED);
		}
	}
	@DeleteMapping("/closeaccount/{aid}")
	public ResponseEntity<Boolean> closeAccount(@PathVariable("aid") String aid) {
		try{
			return new ResponseEntity<>(accountService.closeAccount(aid), HttpStatus.ACCEPTED);
		}catch (Exception e){
			return new ResponseEntity<>(false,HttpStatus.ACCEPTED);
		}
	}

}