package com.sk.yeogiyo.shop.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sk.yeogiyo.shop.service.ShopMngSvc;

@RestController
public class ShopInfoController {
  @Autowired
  private ShopMngSvc shopMngSvc;
  
  @RequestMapping(value="/shop_info", method=RequestMethod.GET)
  public Map<String, Object> shopInfo(Model model, @RequestParam("shopId") String id) {
    Map<String, Object> shopInfo = null;
    shopInfo = shopMngSvc.getOneShopInfo(id);
    model.addAttribute("nm", shopInfo.get("nm"));
    model.addAttribute("desc", shopInfo.get("desc"));
    model.addAttribute("email", shopInfo.get("email"));
    model.addAttribute("addr", shopInfo.get("addr"));
    return shopInfo;
  }
}