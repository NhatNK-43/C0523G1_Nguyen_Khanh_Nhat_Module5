package com.example.furama.repository;

import com.example.furama.model.Customer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ICustomerRepository extends JpaRepository<Customer, Integer> {
    //    List<Customer> findAllByNameContainingAndCustomerTypeId(String name, Integer id);
//    List<Customer> findAllByNameContaining(String name);
//    Page<Customer> findAll(Pageable pageable, Integer number);

    Page<Customer> findAllByNameContaining(Pageable pageable, String name);
//    List<Customer> findAllByNameContainingAndCustomerTypeId(String name, Integer id);


    Page<Customer> findAllByNameContainingAndCustomerTypeId(Pageable pageable, String name, Integer id);
}
