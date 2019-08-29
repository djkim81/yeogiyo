package com.sk.yeogiyo.shop.repository;

import java.util.List;

import org.junit.After;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sk.yeogiyo.shop.entity.ShopEntity;

import junit.framework.Assert;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShopRepositoryTest {
  @Autowired
  private ShopRepository shopRepository;
  
  @Test
  public void testShopRepository() {
    ShopEntity shopEntity = null;
    List<ShopEntity> retShopEntity = null;
//    shopEntity = new ShopEntity();
    shopEntity.setShopId("testShopId");
    shopEntity.setNm("testShopId");
    shopEntity.setDesc("testShopId");
    shopEntity.setRgstDtm("testShopId");
    shopEntity.setEmail("testShopId");
    shopEntity.setAddr("testShopId");
    shopRepository.save(shopEntity);
    retShopEntity = shopRepository.findAll();
    Assert.assertEquals(1, retShopEntity.size());
    Assert.assertEquals("testShopId", retShopEntity.get(0).getShopId());
  }
  
  @After
  public void deleteAll() {
    shopRepository.deleteAll();
  }
}
