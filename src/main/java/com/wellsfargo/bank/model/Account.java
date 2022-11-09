package com.wellsfargo.bank.model;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.sun.istack.NotNull;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.text.SimpleDateFormat;
import java.util.Date;
@Entity
public class Account {

	@NotNull
	private String customer_number;

	@Id
	@NotNull
	private String account_number;

	@NotNull
	private String branch_id;

	@NotNull
	private String balance;
	
	@NotNull
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private Date  opening_date;
	@NotNull
	private String account_type;
	@NotNull
	private String account_status;
	
	public Account() {}

	public void setAccount_status(String account_status) {
		this.account_status = account_status;
	}

	public Account(String customer_number, String account_number, String branch_id, String balance, Date opening_date, String account_type, String account_status) {
		this.customer_number = customer_number;
		this.account_number = account_number;
		this.branch_id = branch_id;
		this.balance = balance;
		this.opening_date = opening_date;
		this.account_type = account_type;
		this.account_status = account_status;
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
		public String getAccount_type() {
		return account_type;
	}

	public void setAccount_type(String account_type) {
		this.account_type = account_type;
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
