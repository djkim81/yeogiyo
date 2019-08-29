package com.sk.yeogiyo.shop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sk.yeogiyo.shop.entity.ShopTableEntity;

@Repository
public interface ShopTableRepository extends JpaRepository<ShopTableEntity, Integer> {

	List<ShopTableEntity> findByShopId(@Param("shopId") String shopId);
	ShopTableEntity findByShopIdAndTableNum(@Param("shopId") String shopId
			, @Param("tableNum") Integer tableNum);

}
