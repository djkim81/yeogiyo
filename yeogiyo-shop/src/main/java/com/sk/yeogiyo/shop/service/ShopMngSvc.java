package com.sk.yeogiyo.shop.service;

import java.util.Map;

public interface ShopMngSvc {
  public boolean isLogin(String shopId, String passwd);
  public void rgst(String shopId, String nm, String desc, String passwd, String email, String addr);
  public Map<String, Object> getOneShopInfo(String shopId);
  public void mod(String shopId, String nm, String desc, String passwd, String email, String addr);
  public boolean del(String shopId);
}
