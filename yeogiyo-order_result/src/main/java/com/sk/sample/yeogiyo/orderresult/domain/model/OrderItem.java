package com.sk.sample.yeogiyo.orderresult.domain.model;

import javax.persistence.Entity;

import com.sk.sample.yeogiyo.shared.base.AbstractEntity;
import com.sk.sample.yeogiyo.shared.base.AggregateRoot;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
@Entity
public class OrderItem extends AbstractEntity implements AggregateRoot {
	private String tableNum;
	private String menuName;
	private String regDtm;
	
	
	
	
}

