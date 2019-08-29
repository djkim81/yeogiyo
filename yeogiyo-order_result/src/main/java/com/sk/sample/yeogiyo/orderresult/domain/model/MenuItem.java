package com.sk.sample.yeogiyo.orderresult.domain.model;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Builder;
import lombok.Data;

@Embeddable
@Data
public class MenuItem implements ValueObject {
	
	
	private int menuId;
	private String menuName;
	private int count;
	
	
	
	
}

