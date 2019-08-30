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
	@Autowired
	private OrderRepository orderRepository;

//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findById(Long id) {
//		return orderRepository.findOne(id);
//	}

	@Override
	@Transactional(readOnly=true)
	public Ordered findByTnum(String tnum) {
		return orderRepository.findByTnum(tnum);
		//return null;
	}
	
//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findByTableNum(String table_num) {
//		return orderRepository.findByTableNum(table_num);
//	}
	
//
	@Override
	@Transactional
	public Ordered updateOrdered(Long id) {
		Ordered oldOrder = orderRepository.findOne(id);
		if(oldOrder != null) {
			
			oldOrder.setOrder_st("주문완료");
			return orderRepository.save(oldOrder);

		} else { 
			return null;
		}
	}
//
//	@Override
//	@Transactional
//	public void delete(Long id) {
//		accountRepository.delete(id);
//	}
}
