package com.sk.yeogiyo.shop.service.impl;

import java.io.ByteArrayOutputStream;
import java.io.OutputStream;
import java.util.Base64;
import java.util.Base64.Encoder;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.sk.yeogiyo.shop.service.QrMngSvc;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QrMngSvcImplTest {
  @Autowired
  private QrMngSvc qrMngSvc;
  
  @Test
  public void testGetQrImgByte() throws Exception {
    OutputStream os = null;
    byte[] encodedByte = null;
    Encoder encoder = null;
    os = qrMngSvc.getQrImgByte("https://www.naver.com");
    encoder = Base64.getEncoder();
    encodedByte = encoder.encode(((ByteArrayOutputStream)os).toByteArray());
    Assert.assertTrue(encodedByte.length > 100);
    Assert.assertEquals("/9j/4AAQSkZJRgABAgAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAx", new String(encodedByte, "UTF-8").substring(0, 100));
  }
}
