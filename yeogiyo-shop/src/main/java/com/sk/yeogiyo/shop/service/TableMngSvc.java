package com.sk.yeogiyo.shop.service;

import java.util.List;
import java.util.Map;

import com.sk.yeogiyo.shop.entity.ShopTableEntity;

public interface TableMngSvc {
	  public void rgst(String shopId, int tableNum, String desc);
	  public Map<String, Object> getOneShopTableInfo(String shopId, int tableNum);
	  public List<Map<String, Object>> findByShopId(String shopId);
	  public void deltable(String shopId, int tableNum);
}
