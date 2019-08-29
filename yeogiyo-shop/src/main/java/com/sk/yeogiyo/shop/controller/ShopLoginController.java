package com.sk.yeogiyo.shop.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.ShopMngSvc;

@RestController
public class ShopLoginController {
  @Autowired
  private ShopMngSvc shopMngSvc;
  
  @RequestMapping(value="/login", method=RequestMethod.GET)
  public Map<String, Object> login(HttpServletRequest request, @RequestParam("shopId") String id, @RequestParam("passwd") String passwd) {
    Map<String, Object> retMap = null;
    retMap = new HashMap<String, Object>();
    if (shopMngSvc.isLogin(id, passwd) == true) {
      retMap.put("is_login", true);
      request.getSession().setAttribute("login_id", id);
    } else {
      retMap.put("is_login", false);
    }
    return retMap;
  }
}
