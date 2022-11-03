use bank;
show tables;
CREATE TABLE customer_master (
    customer_number varchar(6) NOT NULL,
firstname VARCHAR(30),
middlename VARCHAR(30),
lastname VARCHAR(30),
customer_city VARCHAR(15),
customer_contact_no VARCHAR(10),
occupation VARCHAR(20),
customer_date_of_birth DATE,
PRIMARY KEY(customer_number),
constraint fk_cust_no FOREIGN KEY (customer_number) REFERENCES bank.loan_details(customer_number)
);
CREATE TABLE loan_details (
    customer_number varchar(6) UNIQUE NOT NULL,
    branch_id varchar(6),
    loan_amount INT(7),
PRIMARY KEY( branch_id),
FOREIGN KEY (branch_id) REFERENCES branch_master(branch_id)
    
);
CREATE TABLE account_master (
account_number varchar(6) UNIQUE NOT NULL,
customer_number VARCHAR(6) NOT NULL,
branch_id VARCHAR(6) NOT NULL,
opening_balance INT(7),
account_opening_date DATE,
account_type VARCHAR(10),
account_status VARCHAR(10),
PRIMARY KEY( customer_number),
constraint fk_cust_no1 FOREIGN KEY (customer_number) REFERENCES customer_master(customer_number)
);