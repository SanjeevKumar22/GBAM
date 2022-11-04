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
	//@Column(name="customer_number")
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
	private String date;
	
	
 
}
