package com.sk.sample.yeogiyo.orderresult.domain.model;

import javax.persistence.Embeddable;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Data;


@Data
@Embeddable
public class TableNum implements ValueObject {
	private Integer value;
	
	public TableNum(Integer value) {
		this.value = value;
	}
}

