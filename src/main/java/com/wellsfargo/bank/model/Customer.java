package com.wellsfargo.bank.model;
import com.sun.istack.NotNull;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.text.SimpleDateFormat;
import java.util.Date;
@Entity
@Table(name="customer")
public class Customer {
	@Id
	@NotNull
	private String customer_number;
	@NotNull
	private String first_name;
	@NotNull
	private String middlename;
	@NotNull
	private String last_name;
	@NotNull
	private String customer_city;
	@NotNull
	private String customer_contact_no;
	@NotNull
	private String occupation;
	@NotNull
	private Date customer_date_of_birth;

	public Customer() {
	}

	public Customer(String customer_number, String first_name, String middlename, String last_name, String customer_city, String customer_contact_no, String occupation, Date customer_date_of_birth) {
		this.customer_number = customer_number;
		this.first_name = first_name;
		this.middlename = middlename;
		this.last_name = last_name;
		this.customer_city = customer_city;
		this.customer_contact_no = customer_contact_no;
		this.occupation = occupation;
		this.customer_date_of_birth = customer_date_of_birth;
	}

	public String getCustomer_number() {
		return customer_number;
	}

	public void setCustomer_number(String customer_number) {
		this.customer_number = customer_number;
	}

	public String getFirst_name() {
		return first_name;
	}

	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}

	public String getMiddlename() {
		return middlename;
	}

	public void setMiddlename(String middlename) {
		this.middlename = middlename;
	}

	public String getLast_name() {
		return last_name;
	}

	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}

	public String getCustomer_city() {
		return customer_city;
	}

	public void setCustomer_city(String customer_city) {
		this.customer_city = customer_city;
	}

	public String getCustomer_contact_no() {
		return customer_contact_no;
	}

	public void setCustomer_contact_no(String customer_contact_no) {
		this.customer_contact_no = customer_contact_no;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public Date getCustomer_date_of_birth() {
		return customer_date_of_birth;
	}

	public void setCustomer_date_of_birth(Date customer_date_of_birth) {
		this.customer_date_of_birth = customer_date_of_birth;
	}
}
