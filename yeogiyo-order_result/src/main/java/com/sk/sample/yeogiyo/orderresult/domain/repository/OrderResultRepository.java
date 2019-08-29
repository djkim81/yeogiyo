package com.sk.sample.yeogiyo.orderresult.domain.repository;

import java.util.List;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.querydsl.core.types.Predicate;
import com.sk.sample.yeogiyo.orderresult.domain.model.OrderItem;;

@RepositoryRestResource
public interface OrderResultRepository extends PagingAndSortingRepository<OrderItem, Long>,
                                           QueryDslPredicateExecutor<OrderItem> {
	List<OrderItem> findAll(Predicate predicate); 
	
//	OrderItem findByName(@Param("name") String name);
//	List<OrderItem> findByMenuDescriptionFoodType(@Param("foodType") FoodType foodType);
//	List<OrderItem> findByPriceValueGreaterThanEqual(@Param("value") Integer value);
//	List<OrderItem> findByPriceValueLessThanEqual(@Param("value") Integer value);
//	List<OrderItem> findByPriceValueGreaterThanAndPriceValueLessThan(@Param("value1") Integer value1, @Param("value2") Integer value2);
}
