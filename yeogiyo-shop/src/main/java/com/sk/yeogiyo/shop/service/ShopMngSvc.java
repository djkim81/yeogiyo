package com.sk.yeogiyo.shop.service;

import java.util.Map;

public interface ShopMngSvc {
  public Map<String, Object> getOneShopInfo(String shopId);	
  public void rgst(String shopId, String nm, String desc, String passwd, String email, String addr);
  public void mod(String shopId, String nm, String desc, String passwd, String email, String addr);
  public boolean del(String shopId);
}
