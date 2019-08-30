package com.sk.yeogiyo.shop.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.TableMngSvc;

@RestController
public class TableListController {
	  @Autowired
	  private TableMngSvc tableMngSvc;
  
	  @RequestMapping(value="/table_list", method=RequestMethod.GET)
	  public List<Map<String, Object>> findAll(@RequestParam("shopId") String shopId) {
			return tableMngSvc.findByShopId(shopId);
		}
}
