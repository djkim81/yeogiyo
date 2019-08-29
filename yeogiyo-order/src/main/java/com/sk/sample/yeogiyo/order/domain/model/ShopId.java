package com.sk.sample.yeogiyo.order.domain.model;

import javax.persistence.Embeddable;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Data;


@Data
@Embeddable
public class ShopId implements ValueObject {
	private String value;
	
	public ShopId(String value) {
		this.value = value;
	}
}

