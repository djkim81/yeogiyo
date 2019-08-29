package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TableListController {
  @RequestMapping(value="/table_list", method=RequestMethod.GET)
  public String tableList() {
    return "Hello, world";
  }
}
