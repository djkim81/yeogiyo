package com.sk.yeogiyo.shop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

import com.sk.yeogiyo.shop.service.ShopMngSvc;

@RestController
public class ShopModController {
	@Autowired
	private ShopMngSvc shopMngSvc;

	@RequestMapping(value="/shop_mod", method=RequestMethod.PUT)
  public void shopMod(@RequestParam("shop_id") String shopid,
	  @RequestParam("nm") String nm,
	  @RequestParam("desc") String desc,
	  @RequestParam("passwd") String passwd,
	  @RequestParam("email") String email,
	  @RequestParam("addr") String addr) {
      shopMngSvc.mod(shopid, nm, desc, passwd, email, addr);
  }
}
