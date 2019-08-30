package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TableInfoController {
  @RequestMapping(value="/table_info", method=RequestMethod.GET)
  public String tableInfo() {
    return "Hello, world";
  }
}
