package com.example.furama.service;

import com.example.furama.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ICustomerService {
    List<Customer> getAll();
    Page<Customer> getAllByNameContainingAndCustomerTypeId(Pageable pageable,Integer number, String name, Integer id);
    List<Customer> getAllByNameContainingAndCustomerTypeId(String name, Integer id);
    List<Customer> getAllByNameContaining(String name);
    boolean save(Customer customer);

    boolean delete(Integer id);
    Customer getById(Integer id);
}
