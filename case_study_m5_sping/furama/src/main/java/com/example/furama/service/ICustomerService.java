package com.example.furama.service;

import com.example.furama.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
//    List<Customer> getAll();
//
//    List<Customer> getAllByNameContainingAndCustomerTypeId(String name, Integer id);
//    List<Customer> getAllByNameContaining(String name);
    Page<Customer> getAllByNameContainingAndCustomerTypeId(Pageable pageable, String name, Integer id);
    Page<Customer> getAllByNameContaining(Pageable pageable, String name);
    Page<Customer> getAll(Pageable pageable);
    boolean save(Customer customer);

    boolean delete(Integer id);
    Customer getById(Integer id);
}
