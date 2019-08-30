package com.sk.yeogiyo.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.TableMngSvc;

@RestController
public class TableRgstController {
  @Autowired
  private TableMngSvc tableMngSvc;
	
  @RequestMapping(value="/table_rgst", method=RequestMethod.POST)
  public void tableRgst(@RequestParam("shopId") String id,
		  @RequestParam("tableNum") int tableNum,
		  @RequestParam("desc") String desc
		  ) {
	  tableMngSvc.rgst(id, tableNum, desc);
  
  }
}
