package com.sk.yeogiyo.shop.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.ShopMngSvc;

@RestController
public class ShopRgstController {
  @Autowired
  private ShopMngSvc shopMngSvc;
  
  @RequestMapping(value="/shop_rgst", method=RequestMethod.POST)
  public Map<String, Object> shopRgst(@RequestParam("shopId") String id,
      @RequestParam("nm") String nm,
      @RequestParam("desc") String desc,
      @RequestParam("passwd") String passwd,
      @RequestParam("email") String email,
      @RequestParam("addr") String addr) {
    shopMngSvc.rgst(id, nm, desc, passwd, email, addr);
    return new HashMap<String, Object>();
  }
}
