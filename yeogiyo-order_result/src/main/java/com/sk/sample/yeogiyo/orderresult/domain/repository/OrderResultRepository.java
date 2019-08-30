package com.sk.sample.yeogiyo.orderresult.domain.repository;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sk.sample.yeogiyo.orderresult.domain.model.Ordered;

@RepositoryRestResource
public interface OrderResultRepository extends PagingAndSortingRepository<Ordered, Long>,
QueryDslPredicateExecutor<Ordered> {
	//List<Ordered> findAll(Predicate predicate);
	Ordered findByTnum(@Param("tnum") String tnum);
	Ordered orderAgreeByTnum(@Param("tnum") String tnum);
	Ordered orderCancleByTnum(@Param("tnum") String tnum);
	
//	OrderItem findByName(@Param("name") String name);
//	List<OrderItem> findByMenuDescriptionFoodType(@Param("foodType") FoodType foodType);
//	List<OrderItem> findByPriceValueGreaterThanEqual(@Param("value") Integer value);
//	List<OrderItem> findByPriceValueLessThanEqual(@Param("value") Integer value);
//	List<OrderItem> findByPriceValueGreaterThanAndPriceValueLessThan(@Param("value1") Integer value1, @Param("value2") Integer value2);
}
