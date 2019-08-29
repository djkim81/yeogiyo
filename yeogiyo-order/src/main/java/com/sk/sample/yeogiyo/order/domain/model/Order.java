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
public class Order extends AbstractEntity implements AggregateRoot {
	private ShopId shopid;
	private TableNum tablenum;
	
	@Enumerated(EnumType.ORDINAL)
	private OrderType ordertype;

	
	public Order(ShopId shopid, TableNum tablenum, OrderType ordertype) {
		this.shopid = shopid;
		this.tablenum = tablenum;
		this.ordertype = ordertype;
	}

	public Order(ShopId shopid, TableNum tablenum) {
		this.shopid = shopid;
		this.tablenum = tablenum;
		
	}

	
}

