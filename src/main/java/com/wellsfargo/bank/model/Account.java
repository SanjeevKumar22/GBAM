package com.wellsfargo.bank.model;
import com.sun.istack.NotNull;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Date;
@Entity
public class Account {
	@Id
	@NotNull
	private String customer_number;
	private String account_number;
	private String branch_id;
	private String balance;
	private Date  opening_date;
	public Account() {}
	public Account(String customer_number,String account_number,String branch_id,String balance,Date opening_date) {
		this.customer_number=customer_number;
		this.account_number=account_number;
		this.branch_id=branch_id;
		this.balance=balance;
		this.opening_date=opening_date;
	}
	public String getCustomer_number() {
		return customer_number;
	}
	public void setCustomer_number(String customer_number) {
		this.customer_number = customer_number;
	}
	public String getAccount_number() {
		return account_number;
	}
	public void setAccount_number(String account_number) {
		this.account_number = account_number;
	}
	public String getBranch_id() {
		return branch_id;
	}
	public void setBranch_id(String branch_id) {
		this.branch_id = branch_id;
	}
	public String getBalance() {
		return balance;
	}
	public void setBalance(String balance) {
		this.balance = balance;
	}
	public Date getOpening_date() {
		return opening_date;
	}
	public void setOpening_date(Date opening_date) {
		this.opening_date = opening_date;
	} 
	
	
	
	

}
