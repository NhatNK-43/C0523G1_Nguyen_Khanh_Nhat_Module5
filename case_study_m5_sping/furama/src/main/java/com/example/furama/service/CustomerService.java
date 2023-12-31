package com.example.furama.service;

import com.example.furama.model.Customer;
import com.example.furama.repository.ICustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService{
    @Autowired
    private ICustomerRepository customerRepository;
//    @Override
//    public List<Customer> getAll() {
//        return customerRepository.findAll();
//    }
//
//
//    @Override
//    public List<Customer> getAllByNameContainingAndCustomerTypeId(String name, Integer id) {
//        return customerRepository.findAllByNameContainingAndCustomerTypeId(name,id);
//    }
//
//    @Override
//    public List<Customer> getAllByNameContaining(String name) {
//        return customerRepository.findAllByNameContaining(name);
//    }

    @Override
    public Page<Customer> getAllByNameContainingAndCustomerTypeId(Pageable pageable, String name, Integer id) {
        return customerRepository.findAllByNameContainingAndCustomerTypeId(pageable, name, id);
    }

    @Override
    public Page<Customer> getAllByNameContaining(Pageable pageable, String name) {
        return customerRepository.findAllByNameContaining(pageable, name);
    }

    @Override
    public Page<Customer> getAll(Pageable pageable) {
//        return customerRepository.findAll(pageable);
        return customerRepository.findAll(pageable);
    }


    @Override
    public boolean save(Customer customer) {
        try {
            customerRepository.save(customer);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public boolean delete(Integer id) {
        try {
            customerRepository.deleteById(id);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public Customer getById(Integer id) {
        return customerRepository.findById(id).get();
    }
}
