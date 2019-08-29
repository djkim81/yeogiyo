package com.sk.sample.yeogiyo.orderresult.domain.model;

import javax.persistence.Embeddable;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Data;

@Embeddable
@Data
public class OrderedMenuItem implements ValueObject {
	
	
	private int menuId;
	private String menuName;
	private int count;
	

	public OrderedMenuItem(int menuId, String menuName, int count) {
		this.menuId = menuId;
		this.menuName = menuName;
		this.count = count;
	}
	
}

