package com.sk.sample.yeogiyo.menu.domain.model;

import javax.persistence.Embeddable;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Data;


@Data
@Embeddable
public class Price implements ValueObject {
	private Integer value;
	
	public Price(Integer value) {
		this.value = value;
	}
}

