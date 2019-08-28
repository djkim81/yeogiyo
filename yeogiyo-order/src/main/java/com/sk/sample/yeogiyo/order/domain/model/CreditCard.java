package com.sk.sample.yeogiyo.order.domain.model;

import javax.persistence.Embeddable;

import com.sk.sample.yeogiyo.shared.base.ValueObject;

import lombok.Data;

@Data
@Embeddable
public class CreditCard implements ValueObject {
	private String cardNumber;
	private String validThru;
	
	public CreditCard(String cardNumber, String validThru) {
		this.cardNumber = cardNumber;
		this.validThru = validThru;
	}
}
