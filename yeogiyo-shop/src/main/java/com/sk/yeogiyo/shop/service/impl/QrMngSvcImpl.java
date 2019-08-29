package com.sk.yeogiyo.shop.service.impl;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

import javax.imageio.ImageIO;

import org.springframework.stereotype.Service;

import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageConfig;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import com.sk.yeogiyo.shop.service.QrMngSvc;

@Service("qrMngSvc")
public class QrMngSvcImpl implements QrMngSvc {
  private int height = 200;
  private int width = 200;
  public ByteArrayOutputStream getQrImgByte(String data) throws Exception {
    int qrcodeColor = 0;
    int backgroundColor = 0;
    QRCodeWriter qrCodeWriter = null;
    BitMatrix bitMatrix = null;
    MatrixToImageConfig matrixToImageConfig = null;
    BufferedImage bufferedImage = null;
    ByteArrayOutputStream baos = null;
    qrcodeColor = 0xFF2e4e96;
    backgroundColor = 0xFFFFFFFF;
    qrCodeWriter = new QRCodeWriter();
    bitMatrix = qrCodeWriter.encode(data, BarcodeFormat.QR_CODE, width, height);
    matrixToImageConfig = new MatrixToImageConfig(qrcodeColor, backgroundColor);
    bufferedImage = MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig);
    baos = new ByteArrayOutputStream();
    ImageIO.write(bufferedImage, "jpeg", baos);
    return baos;
  }
}
