package com.example.furama.controller;

import com.example.furama.model.Customer;
import com.example.furama.model.CustomerType;
import com.example.furama.service.ICustomerService;
import com.example.furama.service.ICustomerTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;
    @Autowired
    private ICustomerTypeService customerTypeService;

    @GetMapping("/customerType")
    public ResponseEntity<List<CustomerType>> getList() {
        List<CustomerType> customerTypeList = customerTypeService.getAll();
        if (customerTypeList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customerTypeList, HttpStatus.OK);
    }
    @GetMapping("")
    public ResponseEntity<List<Customer>> getList(@RequestParam(name = "nameSearch", required = false) String name,
                                                  @RequestParam(name = "customerTypeId", required = false) Integer id) {
        if(name==null&&id==null){
            List<Customer> customerList = customerService.getAll();
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
        else if(id==null){
            List<Customer> customerList = customerService.getAllByNameContaining(name);
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        } else {
            List<Customer> customerList = customerService.getAllByNameContainingAndCustomerTypeId(name,id);
            return new ResponseEntity<>(customerList, HttpStatus.OK);
        }
    }
//
//    @GetMapping("")
//    public ResponseEntity<Page<Customer>> getList(
//            @RequestParam(name = "page", defaultValue = "0", required = false) Integer page,
//            @RequestParam(name = "number", defaultValue = "10", required = false) Integer number,
//            @RequestParam(name = "nameSearch", defaultValue = "", required = false) String name,
//            @RequestParam(name = "customerTypeId", defaultValue = "0", required = false) Integer id)
//             {
//        Pageable pageable = PageRequest.of(page, number);
////        if (name == null && id == null) {
////            List<Customer> customerList = customerService.getAll();
////            return new ResponseEntity<>(customerList, HttpStatus.OK);
////        } else if (id == null) {
////            List<Customer> customerList = customerService.getAllByNameContaining(name);
////            return new ResponseEntity<>(customerList, HttpStatus.OK);
////        } else {
////            List<Customer> customerList = customerService.getAllByNameContainingAndCustomerTypeId(name, id);
////            return new ResponseEntity<>(customerList, HttpStatus.OK);
////        }
//        Page<Customer> customerPage = customerService.getAllByNameContainingAndCustomerTypeId(pageable, number,name, id);
//        return new ResponseEntity<>(customerPage, HttpStatus.OK);
//    }


    @GetMapping("/{id}")
    public ResponseEntity<Customer> getById(@PathVariable Integer id) {
        Customer customer = customerService.getById(id);
//        List<CustomerType> customerTypeList = customerTypeService.getAll();
        if (customer == null) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(customer, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<String> create(@RequestBody Customer customer) {
        boolean status = customerService.save(customer);
        if (!status) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> update(@PathVariable Integer id, @RequestBody Customer customer) {
        customer.setId(id);
        boolean status = customerService.save(customer);
        if (!status) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> delete(@PathVariable Integer id) {
        boolean status = customerService.delete(id);
        if (!status) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
