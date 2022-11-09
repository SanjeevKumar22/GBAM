package com.wellsfargo.bank.Customer;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.CustomerRepository;
import net.minidev.json.JSONObject;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertNotNull;
public class CustomerTests {

    @Autowired
    CustomerRepository custRepo;

    @Test
    void contextLoads() {
    }

//    @Test
//    public void testCreateCust(){
//        Customer c1 = new Customer();
//        c1.setCustomer_city("Mumbai");
//        c1.setCustomer_number("c001");
//        c1.setCustomer_contact_no("999999999");
//        c1.setMiddlename("Ram");
//        c1.setFirst_name("Ramu");
//        c1.setLast_name("Raj");
//        c1.setOccupation("painter");
////        Date d = new Date();
////        c1.setCustomer_date_of_birth(String.valueOf(d.getDate()));
//        JSONObject json = new JSONObject();
//        json.put("2022-10-10",);
//        c1.setCustomer_date_of_birth(String.valueOf(json));
//        custRepo.save(c1);
//        assertNotNull(custRepo.findById("c001").get());
//    }

    @Test
    public void testGetAllCustomerDetails(){
    }

    @Test
    public void testAddCustomer(){
        boolean a =
    }

    @Test
    public void testDeleteCustomer(){
    }

    @Test
    public void testGetCustomerDetails(){
    }
}
