package com.wellsfargo.bank.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Loan {
    @Id
    @NotNull
    private String customer_number;

    @NotNull
    private String branch_id;
public  Loan(){}
    public Loan(String customer_number, String branch_id, int loan_amount) {
        this.customer_number = customer_number;
        this.branch_id = branch_id;
        this.loan_amount = loan_amount;
    }

    @NotNull
    private int loan_amount;

    public String getCustomer_number() {
        return customer_number;
    }

    public void setCustomer_number(String customer_number) {
        this.customer_number = customer_number;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    public int getLoan_amount() {
        return loan_amount;
    }

    public void setLoan_amount(int loan_amount) {
        this.loan_amount = loan_amount;
    }
}
