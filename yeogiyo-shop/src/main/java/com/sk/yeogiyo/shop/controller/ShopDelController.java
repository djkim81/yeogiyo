package com.sk.yeogiyo.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.ShopMngSvc;

@RestController
public class ShopDelController {
  @Autowired
  private ShopMngSvc shopMngSvc;
	  
  @RequestMapping(value="/shop_id", method=RequestMethod.DELETE)
  public ResponseEntity<Void> shopDel(@RequestParam("shop_id") String shopid) {
	  Boolean deleteResult = shopMngSvc.del(shopid);
	  System.out.println("=======================delete 시작 ============");
	  System.out.println(shopid);
	  if (deleteResult == null || !deleteResult) {
		  System.out.println(deleteResult);
		return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
	  }
	  return new ResponseEntity<Void>(HttpStatus.OK);
  }
}
