package com.sk.sample.yeogiyo.orderresult.domain.model;

import java.util.List;

import javax.persistence.Entity;

import com.sk.sample.yeogiyo.shared.base.AbstractEntity;
import com.sk.sample.yeogiyo.shared.base.AggregateRoot;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
@Entity
public class OrderItem extends AbstractEntity implements AggregateRoot {
	
	private String orderId; 
	private String tableNum;
	private String regDtm;
	//public List<OrderedMenuItem> OrderedMenuItemList;
	private int orderStatus;
	
	
	public OrderItem() {
		
	}
	public OrderItem(String orderId, String tableNum, String regDtm, int orderStatus) {
		this.orderId = orderId;
		this.tableNum = tableNum;
		//this.OrderedMenuItemList = OrderedMenuItemList;
		this.regDtm = regDtm;
		this.orderStatus = orderStatus;
	}
	
	
	
	
	
	
}

