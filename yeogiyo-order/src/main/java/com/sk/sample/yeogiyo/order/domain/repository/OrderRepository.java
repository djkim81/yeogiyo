package com.sk.sample.yeogiyo.order.domain.repository;

import java.util.List;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.querydsl.core.types.Predicate;
import com.sk.sample.yeogiyo.order.domain.model.Ordered;

@RepositoryRestResource
public interface OrderRepository extends PagingAndSortingRepository<Ordered, Long>,
                                           QueryDslPredicateExecutor<Ordered> {
	//List<Ordered> findAll(Predicate predicate); 
	
	Ordered findByTnum(@Param("tnum") String tnum);
	
	//Ordered updateOrdered(@Param("id") String id);
	
	//Ordered findByShop_id(@Param("shop_id") String shop_id);
	
	//Order findByShopId(@Param("shopid") ShopId shopid);
	
	//List<Order> findByShopid(ShopId shopid);
	
	//List<Order> findByMenuDescriptionFoodType(@Param("foodType") FoodType foodType);
//	List<Order> findByPriceValueGreaterThanEqual(@Param("value") Integer value);
//	List<Order> findByPriceValueLessThanEqual(@Param("value") Integer value);
//	List<Order> findByPriceValueGreaterThanAndPriceValueLessThan(@Param("value1") Integer value1, @Param("value2") Integer value2);


	
	
//	Account findByEmail(@Param("email") String email);
//	List<Account> findByNameLike(@Param("name") String name);
//	List<Account> findAll();
//	
//	List<Account> findByAddressZipCode(@Param("zipCode") Integer zipCode);
//	
//	@Query("select a from Account a where a.address.homeAddress like %?1%")
//	List<Account> findByAddressHomeAddressLike(@Param("homeAddress") String homeAddress);
//	
//
//	List<Account> findAll(Predicate predicate); 	
	

}
