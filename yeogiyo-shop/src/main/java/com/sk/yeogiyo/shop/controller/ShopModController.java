package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ShopModController {
  @RequestMapping(value="/shop_mod", method=RequestMethod.PUT)
  public String shopRgst() {
    return "Hello, world";
  }
}
