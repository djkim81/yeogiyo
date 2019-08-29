package com.sk.yeogiyo.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="SHOP")
public class ShopEntity {
  @Id
  @Column(name="shop_id")
  private String shopId;
  
  @Column(name="nm")
  private String nm;

  @Column(name="desc")
  private String desc;

  @Column(name="passwd")
  private String passwd;

  @Column(name="rgst_dtm")
  private String rgstDtm;
  
  @Column(name="email")
  private String email;
  
  @Column(name="addr")
  private String addr;
  
  public String getShopId() {
    return shopId;
  }

  public String getNm() {
    return nm;
  }

  public String getDesc() {
    return desc;
  }

  public String getPasswd() {
    return passwd;
  }

  public String email() {
    return email;
  }

  public String addr() {
    return addr;
  }
  
  public void setShopId(String shopId) {
    this.shopId = shopId;
  }

  public void setNm(String nm) {
    this.nm = nm;
  }

  public void setDesc(String desc) {
    this.desc = desc;
  }

  public void setRgstDtm(String rgstDtm) {
    this.rgstDtm = rgstDtm;
  }
  
  public void setPasswd(String passwd) {
    this.passwd = passwd;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public void setAddr(String addr) {
    this.addr = addr;
  }
}
