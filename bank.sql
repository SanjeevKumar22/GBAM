CREATE DATABASE bank;
USE bank;
CREATE TABLE branch_master (
    branch_id varchar(6),
    branch_name varchar(30),
    branch_city varchar(30),
PRIMARY KEY( branch_id)
    
);
CREATE TABLE loan_details (
    customer_number varchar(6),
    branch_id varchar(6) UNIQUE NOT NULL,
    loan_amount INT(7),
	PRIMARY KEY( branch_id),
	FOREIGN KEY (branch_id) REFERENCES branch_master(branch_id)
		
);

CREATE TABLE customer_master (
customer_number varchar(6),
firstname VARCHAR(30),
middlename VARCHAR(30),
lastname VARCHAR(30),
customer_city VARCHAR(15),
customer_contact_no VARCHAR(10),
occupation VARCHAR(20),
customer_date_of_birth DATE,
PRIMARY KEY( customer_number)
-- FOREIGN KEY (customer_number) REFERENCES loan_details(customer_number)
);

CREATE TABLE account_master (
account_number varchar(6) UNIQUE NOT NULL,
customer_number VARCHAR(6) NOT NULL,
branch_id VARCHAR(6) NOT NULL,
opening_balance INT(7),
account_opening_date DATE,
account_type VARCHAR(10),
account_status VARCHAR(10),
PRIMARY KEY( customer_number)
);

CREATE TABLE transaction_details (
transaction_number varchar(6) UNIQUE NOT NULL,
account_number VARCHAR(6),
date_of_transaction DATE,
medium_of_transaction VARCHAR(20),
transaction_type VARCHAR(20),
transaction_amount INT(7),
PRIMARY KEY( account_number),
FOREIGN KEY (account_number) REFERENCES account_master(account_number)
);

alter table account_master
add constraint fk_cust_no1 FOREIGN KEY (customer_number) REFERENCES customer_master(customer_number);

alter table transaction_details
add FOREIGN KEY fk_acc_no (account_number) REFERENCES account_master(account_number);

alter table loan_details
add constraint fk_cust_no  FOREIGN KEY (customer_number) REFERENCES customer_master(customer_number);

