package com.sk.yeogiyo.shop.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Builder;
import lombok.Getter;
import lombok.NonNull;
import lombok.ToString;

@ToString
@Getter
@Entity
@Table(name = "SHOP")
public class ShopEntity {
	@Id
	@NonNull
	@Column(name = "shop_id")
	private String shopId;

	@NonNull
	@Column(name = "nm")
	private String nm;

	@Column(name = "desc")
	private String desc;

	@NonNull
	@Column(name = "passwd")
	private String passwd;

	@NonNull
	@Column(name = "rgst_dtm")
	private String rgstDtm;

	@Column(name = "email")
	private String email;

	@Column(name = "addr")
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

	public String getEmail() {
		return email;
	}

	public String getAddr() {
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

	@Builder
	public ShopEntity(String shopId, String nm, String desc, String rgstDtm, String passwd, String email, String addr) {
		this.shopId = shopId;
		this.nm = nm;
		this.desc = desc;
		this.rgstDtm = rgstDtm;
		this.passwd = passwd;
		this.email = email;
		this.addr = addr;
	}
	  public ShopEntity() {
	  }
}
