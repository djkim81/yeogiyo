package com.sk.yeogiyo.shop.service.impl;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sk.yeogiyo.shop.entity.ShopTableEntity;
import com.sk.yeogiyo.shop.repository.ShopTableRepository;
import com.sk.yeogiyo.shop.service.TableMngSvc;

@Service("tableMngSvc")
public class TableMngSvcImpl implements TableMngSvc{
	@Autowired	
	private ShopTableRepository shopTableRepository;

	public void rgst(String shopId, int tableNum, String desc) {
		ShopTableEntity shopTableEntity = null;
		shopTableEntity = new ShopTableEntity();
		shopTableEntity.setShopId(shopId);
		shopTableEntity.setTableNum(tableNum);
		shopTableEntity.setDesc(desc);
	    shopTableRepository.save(shopTableEntity);
	    }
	
	public Map<String, Object> getOneShopTableInfo(String shopId, int tableNum) {
	    Map<String, Object> retMap = null;
	    ShopTableEntity shopTableEntity = null;
	    shopTableEntity = new ShopTableEntity();
	    //shopTableEntity.setShopId(shopId);
	    shopTableEntity = shopTableRepository.findByShopIdAndTableNum(shopId, tableNum);
	    retMap = new HashMap<String, Object>();
	    retMap.put("tableNum", shopTableEntity.getTableNum());
	    retMap.put("desc", shopTableEntity.getDesc());
	    return retMap;
	  }
	
	public List<ShopTableEntity> findAll() {
	    return shopTableRepository.findAll();
	  }

	
	public void deltable(String shopId, int tableNum) {
	    Map<String, Object> retMap = null;
	    ShopTableEntity shopTableEntity = null;
	    shopTableEntity = new ShopTableEntity();
	    shopTableEntity = shopTableRepository.findByShopIdAndTableNum(shopId, Integer.valueOf(tableNum));
	    int mainNum = shopTableEntity.getMainNum();
	    shopTableRepository.delete(Integer.valueOf(mainNum));
//		int deltableName = (Integer) null;
//		ShopTableEntity deltableName1 = shopTableRepository.findOne(shopId);
//		deltableName = deltableName1.setTableNum("tableNum"); 
//		shopTableRepository.delete("deltableName");
	}

	public List<Map<String, Object>> findByShopId(String shopId) {
		Map<String, Object> retMap = null;
		List<Map<String, Object>> retList = null;
		List<ShopTableEntity> shopTableEntity = null;
		shopTableEntity = shopTableRepository.findByShopId(shopId);
		retList = new ArrayList<Map<String, Object>>();
		for (int i = 0; i < shopTableEntity.size(); i++) {
			retMap = new HashMap<String, Object>();
			retMap.put("table_num", shopTableEntity.get(i).getTableNum());
			retMap.put("desc", shopTableEntity.get(i).getDesc());
			retList.add(retMap);
		}
		return retList;
	}
}
