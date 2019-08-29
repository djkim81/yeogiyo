package com.sk.yeogiyo.shop.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sk.yeogiyo.shop.entity.ShopEntity;

@Repository
public interface ShopRepository extends JpaRepository<ShopEntity, String>{


}
