package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShopInfoController {
  @RequestMapping(value="/shop_info", method=RequestMethod.GET)
  public String shopInfo() {
    return "Hello, world";
  }
}
