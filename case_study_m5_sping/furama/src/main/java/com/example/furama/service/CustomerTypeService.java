package com.example.furama.service;

import com.example.furama.model.CustomerType;
import com.example.furama.repository.ICustomerTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class CustomerTypeService implements ICustomerTypeService{
    @Autowired
    private ICustomerTypeRepository customerTypeRepository;
    @Override
    public List<CustomerType> getAll() {
        return customerTypeRepository.findAll();
    }
}
