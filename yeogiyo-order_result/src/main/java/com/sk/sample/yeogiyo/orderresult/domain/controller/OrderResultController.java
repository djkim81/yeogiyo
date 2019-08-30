package com.sk.sample.yeogiyo.orderresult.domain.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.sample.yeogiyo.orderresult.domain.service.OrderService;

@RestController
public class OrderResultController {
	@Autowired
	private OrderService orderService;   

	@RequestMapping(value="/shop_mod", method=RequestMethod.PUT)
  public void orderChange(@RequestParam("tnum") String tnum) {
	orderService.findByTnum(tnum);
  }
}
