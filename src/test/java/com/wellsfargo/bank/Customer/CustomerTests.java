package com.wellsfargo.bank.Customer;
import com.wellsfargo.bank.model.Customer;
import com.wellsfargo.bank.repository.CustomerRepository;
import com.wellsfargo.bank.service.CustomerService;
import net.minidev.json.JSONObject;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import java.util.Date;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class CustomerTests {

    @Autowired
    CustomerRepository custRepo;

    @Autowired
    CustomerService customerService;


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
        List<Customer> list = customerService.getAllCustomerDetails();
        Assertions.assertThat(list).size().isGreaterThan(0);
    }

    @Test
    public void testAddCustomer(){
        Customer c1 = new Customer();
        c1.setCustomer_city("Mumbai");
        c1.setCustomer_number("c001");
        c1.setCustomer_contact_no("999999999");
        c1.setMiddlename("Ram");
        c1.setFirst_name("Ramu");
        c1.setLast_name("Raj");
        c1.setOccupation("painter");
        Date d = new Date(2000,3,29);
        c1.setCustomer_date_of_birth(d);
        boolean a = customerService.addCustomer(c1);
        assertEquals(a,false);

    }

    @Test
    public void testDeleteCustomer(){
        boolean a = customerService.deleteCustomer("c003");
        assertEquals(a,false);
    }

    @Test
    public void testGetCustomerDetails(){
        Customer customer = customerService.getCustomerDetails("c001");
        Assertions.assertThat(customer.getCustomer_number()).isEqualTo("c001");
    }
}
