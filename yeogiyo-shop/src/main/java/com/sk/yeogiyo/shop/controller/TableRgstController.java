package com.sk.yeogiyo.shop.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TableRgstController {
  @RequestMapping(value="/table_rgst", method=RequestMethod.GET)
  public String tableRgst() {
    return "Hello, world";
  }
}
