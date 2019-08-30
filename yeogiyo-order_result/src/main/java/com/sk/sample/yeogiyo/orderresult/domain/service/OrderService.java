package com.sk.sample.yeogiyo.orderresult.domain.service;

import com.sk.sample.yeogiyo.orderresult.domain.model.Ordered;

public interface OrderService {
//	Ordered findById(Long id);
	Ordered findByTnum(String tnum);
	//Ordered findByShop_id(String shop_id);
	
//	List<Ordered> findAll();
//	Page<Ordered> findAll(Pageable pageable);
//	
//	List<Ordered> findByNameLike(String name);
//	Ordered findByTableNum(String table_num);
//	
//	Ordered register(Ordered order); 
	Ordered update(Long id, Ordered order);
//
//	void delete(Long id);
}
