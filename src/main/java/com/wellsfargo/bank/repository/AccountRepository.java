package com.wellsfargo.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.wellsfargo.bank.model.Account;

public interface AccountRepository extends JpaRepository<Account,String> {

}
