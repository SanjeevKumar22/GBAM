package com.wellsfargo.bank.model;

import com.sun.istack.NotNull;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Branch {
    @Id
   @NotNull
    private String branch_id;
    @NotNull
    private String branch_name;
    @NotNull
    private String branch_city;

    public Branch() {
    }

    public Branch(String branch_id, String branch_name, String branch_city) {
        this.branch_id = branch_id;
        this.branch_name = branch_name;
        this.branch_city = branch_city;
    }

    public String getBranch_id() {
        return branch_id;
    }

    public void setBranch_id(String branch_id) {
        this.branch_id = branch_id;
    }

    public String getBranch_name() {
        return branch_name;
    }

    public void setBranch_name(String branch_name) {
        this.branch_name = branch_name;
    }

    public String getBranch_city() {
        return branch_city;
    }

    public void setBranch_city(String branch_city) {
        this.branch_city = branch_city;
    }
}
