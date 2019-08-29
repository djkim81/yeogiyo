package com.sk.sample.yeogiyo.order.domain.service;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sk.sample.yeogiyo.order.domain.model.*;
import com.sk.sample.yeogiyo.order.domain.repository.OrderRepository;

@Service("orderLogic")
public class OrderLogic implements OrderService {
//	@Autowired
//	private OrderRepository orderRepository;
//
//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findById(Long id) {
//		return orderRepository.findOne(id);
//	}
//
//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findByTableNum(String table_num) {
//		return orderRepository.findByTableNum(table_num);
//	}
	
//
//	@Override
//	@Transactional
//	public Account update(Long id, Account newAccount) {
//		Account oldAccount = accountRepository.findOne(id);
//		if(oldAccount != null) {
//			BeanUtils.copyProperties(newAccount,  oldAccount, "id");
//			return accountRepository.save(oldAccount);
//		} else {
//			return null;
//		}
//	}
//
//	@Override
//	@Transactional
//	public void delete(Long id) {
//		accountRepository.delete(id);
//	}
}
