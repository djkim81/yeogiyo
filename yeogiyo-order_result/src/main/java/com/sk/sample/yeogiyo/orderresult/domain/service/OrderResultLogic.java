package com.sk.sample.yeogiyo.orderresult.domain.service;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sk.sample.yeogiyo.orderresult.domain.model.Ordered;
import com.sk.sample.yeogiyo.orderresult.domain.repository.OrderResultRepository;

@Service("OrderResultLogic")
public class OrderResultLogic implements OrderService {
	@Autowired
	private OrderResultRepository OrderResultRepository;

	@Override
	@Transactional(readOnly=true)
	public Ordered findByTnum(String tnum) {
		return OrderResultRepository.findByTnum(tnum);
		//return null;
	}
	
//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findByTableNum(String table_num) {
//		return orderRepository.findByTableNum(table_num);
//	}
	
//
	/*
	 * @Override
	 * 
	 * @Transactional public Ordered update(Long id, Ordered newOrder) { Ordered
	 * oldOrder = OrderResultRepository.findOne(id); if(oldOrder != null) {
	 * BeanUtils.copyProperties(newOrder, oldOrder, "id"); return
	 * OrderResultRepository.save(oldOrder); } else { return null; } }
	 */

	
//	@Override
//	@Transactional(readOnly=true)
//	public Ordered findByTableNum(String table_num) {
//		return OrderResultRepository.findByTableNum(table_num);
//	}
	
//
//	@Override
//	@Transactional
//	public Ordered update(Long id, Ordered newOrder) {
//		Ordered oldOrder = OrderResultRepository.findOne(id);
//		if(oldOrder != null) {
//			BeanUtils.copyProperties(newOrder,  oldOrder, "id");
//			return OrderResultRepository.save(oldOrder);
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
