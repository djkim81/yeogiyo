package com.sk.yeogiyo.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.ToString;

@NoArgsConstructor
@ToString
@Getter
@Entity
@Table(name="SHOP_TABLE")
public class ShopTableEntity {
  @Id
  @GeneratedValue
  @Column(name="main_num")
  private int mainNum;

  @Column(name="shop_id")
  private String shopId;
  
  @Column(name="table_num")
  private int tableNum;

  @Column(name="desc")
  private String desc;

  @Column(name="rgst_dtm")
  private String rgstDtm;
  
  public int getMainNum() {
	  return mainNum;
  }
  public String getShopId() {
    return shopId;
  }

  public int getTableNum() {
    return tableNum;
  }

  public String getDesc() {
    return desc;
  }

  public String getRgstDtm() {
    return rgstDtm;
  }

  public void setShopId(String shopId) {
    this.shopId = shopId;
  }

  public void setTableNum(int tableNum) {
    this.tableNum = tableNum;
  }

  public void setDesc(String desc) {
    this.desc = desc;
  }

  public void setRgstDtm(String rgstDtm) {
    this.rgstDtm = rgstDtm;
  }
  
	@Builder
	public ShopTableEntity(String shopId, int tableNum, String desc, String rgstDtm) {
		this.shopId = shopId;
		this.tableNum = tableNum;
		this.desc = desc;
		this.rgstDtm = rgstDtm;
	}
	
	public ShopTableEntity() {
	  super();
	}
}
