package com.sk.yeogiyo.shop.service;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ShopMngSvcImplTest {
	  @Autowired
	  private ShopMngSvc shopMngSvc;
	  
	  @Test
	  public void testRgst() {
		  shopMngSvc.rgst("test", "test", "test", null, null, null) ;
	  }

}
