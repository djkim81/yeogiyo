package com.sk.yeogiyo.shop.service.impl;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sk.yeogiyo.shop.entity.ShopEntity;
import com.sk.yeogiyo.shop.repository.ShopRepository;
import com.sk.yeogiyo.shop.service.ShopMngSvc;

@Service("shopMngSvc")
public class ShopMngSvcImpl implements ShopMngSvc {
  @Autowired
  private ShopRepository shopRepository;
  
  public void rgst(String shopId, String nm, String desc, String passwd, String email, String addr) {
    ShopEntity shopEntity = null;
    shopEntity = new ShopEntity();
    shopEntity.setShopId(shopId);
    shopEntity.setNm(nm);
    shopEntity.setDesc(desc);
    shopEntity.setPasswd(passwd);
    shopEntity.setEmail(email);
    shopEntity.setAddr(addr);
    shopRepository.save(shopEntity);
  }
  
  public Map<String, Object> getOneShopInfo(String shopId) {
    Map<String, Object> retMap = null;
    ShopEntity shopEntity = null;
    shopEntity = new ShopEntity();
    shopEntity = shopRepository.findOne(shopId);
    retMap = new HashMap<String, Object>();
    retMap.put("nm", shopEntity.getNm());
    retMap.put("desc", shopEntity.getDesc());
    retMap.put("email", shopEntity.getEmail());
    retMap.put("addr", shopEntity.getAddr());
    return retMap;
  }
  
  public boolean isLogin(String shopId, String passwd) {
    ShopEntity shopEntity = null;
    shopEntity = new ShopEntity();
    shopEntity = shopRepository.findOne(shopId);
    if (passwd != null && shopEntity != null && passwd.equals(shopEntity.getPasswd()) == true) {
      return true;
    } else {
      return false;
    }
  }
  
  public void mod(String shopId, String nm, String desc, String passwd, String email, String addr) {
	    ShopEntity shopEntity = null;
	    shopEntity = shopRepository.findOne(shopId);
	    
	    shopEntity.setShopId(shopId);
	    shopEntity.setNm(nm);
	    shopEntity.setDesc(desc);
	    shopEntity.setPasswd(passwd);
	    shopEntity.setEmail(email);
	    shopEntity.setAddr(addr);
	    shopRepository.save(shopEntity);
	  }

  public boolean del(String shopId) {
	  ShopEntity delShopid = shopRepository.findOne(shopId);
	  if (delShopid == null) {
		  return false;
		} else {
			shopRepository.delete(delShopid);
			return true;
		}
	}

}
