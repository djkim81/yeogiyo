package com.sk.sample.yeogiyo.menu.domain.model;

import javax.persistence.Entity;

import com.sk.sample.yeogiyo.shared.base.AbstractEntity;
import com.sk.sample.yeogiyo.shared.base.AggregateRoot;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(callSuper=true)
@Entity
public class Menu extends AbstractEntity implements AggregateRoot {
	private String name;
	private Price price;
	
	private MenuDescription menuDescription;
	
	public Menu(String name, Price price, MenuDescription menuDescription) {
		this.name = name;
		this.price = price;
		this.menuDescription = menuDescription;
	}
}

