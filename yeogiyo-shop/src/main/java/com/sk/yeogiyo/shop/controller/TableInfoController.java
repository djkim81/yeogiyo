package com.sk.yeogiyo.shop.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.TableMngSvc;

@RestController
public class TableInfoController {
	@Autowired
	private TableMngSvc tableMngSvc;
	
	@RequestMapping(value="/table_info", method=RequestMethod.GET)
	public Map<String, Object> tableInfo(Model model, @RequestParam("shopId") String id){
		Map<String, Object> tableInfo = null;
		tableInfo = tableMngSvc.getOneShopTableInfo(id);
		model.addAttribute("tableNum", tableInfo.get("tableNum"));
		model.addAttribute("desc", tableInfo.get("desc"));
		return tableInfo;
	}
	
  
}
