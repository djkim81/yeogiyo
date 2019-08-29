package com.sk.sample.yeogiyo.order.domain.model;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sk.sample.yeogiyo.shared.base.AbstractEntity;
import com.sk.sample.yeogiyo.shared.base.AggregateRoot;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
@Entity
public class Ordered extends AbstractEntity implements AggregateRoot {
	//private ShopId shopid;
//	private TableNum tablenum;
	
//	@Enumerated(EnumType.ORDINAL)
//	private OrderType ordertype;

	private String shop_id;
	private String order_st;
	private String table_num;
	private String menu_nm;	
	private String menu_cnt;
	private String rgst_dtm;
	
//	public Ordered(ShopId shopid, TableNum tablenum, OrderType ordertype) {
//		this.shopid = shopid;
//		this.tablenum = tablenum;
//		this.ordertype = ordertype;
//	}

	public Ordered(String shop_id, String table_num, String order_st, String menu_nm, String menu_cnt, String rgst_dtm) {
		this.shop_id = shop_id;
		this.table_num = table_num;
		this.order_st = order_st;
		this.menu_nm = menu_nm;
		this.menu_cnt = menu_cnt;
		this.rgst_dtm = rgst_dtm;
		
		
	}

	
}

