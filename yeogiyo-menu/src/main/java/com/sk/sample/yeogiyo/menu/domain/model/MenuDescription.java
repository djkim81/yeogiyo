package com.sk.sample.yeogiyo.menu.domain.model;

import javax.persistence.Embeddable;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Builder;
import lombok.Data;

@Embeddable
@Data
public class MenuDescription implements ValueObject {
	@Enumerated(EnumType.STRING)
	private FoodType foodType;
	
	public MenuDescription(FoodType foodType) {
		this.foodType = foodType;
	}
}

