package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TableDelController {
  @RequestMapping(value="/table_del", method=RequestMethod.DELETE)
  public String tableDel() {
    return "Hello, world";
  }
}
