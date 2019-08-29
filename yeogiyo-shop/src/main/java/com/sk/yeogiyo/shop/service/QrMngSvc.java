package com.sk.yeogiyo.shop.service;

import java.io.ByteArrayOutputStream;

public interface QrMngSvc {
  public ByteArrayOutputStream getQrImgByte(String data) throws Exception;
}
