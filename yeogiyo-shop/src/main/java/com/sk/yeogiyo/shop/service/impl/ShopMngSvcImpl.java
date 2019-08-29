package com.sk.yeogiyo.shop.service.impl;

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
}
