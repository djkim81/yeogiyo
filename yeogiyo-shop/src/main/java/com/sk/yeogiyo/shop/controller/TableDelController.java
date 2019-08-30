package com.sk.yeogiyo.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.ShopMngSvc;
import com.sk.yeogiyo.shop.service.TableMngSvc;

@RestController
public class TableDelController {
	  @Autowired
	  private TableMngSvc tableMngSvc;
	  
	  @RequestMapping(value="/table_del", method=RequestMethod.DELETE)
	  public void deltable(@RequestParam("shop_id") String shopId, @RequestParam("tableNum") int tableNum) {
		  tableMngSvc.deltable(shopId, tableNum);
  }
}
