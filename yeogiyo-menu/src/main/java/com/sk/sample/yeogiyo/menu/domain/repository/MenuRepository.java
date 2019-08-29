package com.sk.sample.yeogiyo.menu.domain.repository;

import java.util.List;

import org.springframework.data.querydsl.QueryDslPredicateExecutor;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.querydsl.core.types.Predicate;
import com.sk.sample.yeogiyo.menu.domain.model.FoodType;
import com.sk.sample.yeogiyo.menu.domain.model.Menu;;

@RepositoryRestResource
public interface MenuRepository extends PagingAndSortingRepository<Menu, Long>,
                                           QueryDslPredicateExecutor<Menu> {
	List<Menu> findAll(Predicate predicate); 
	
//	Menu findByName(@Param("name") String name);
//	List<Menu> findByMenuDescriptionFoodType(@Param("foodType") FoodType foodType);
//	List<Menu> findByPriceValueGreaterThanEqual(@Param("value") Integer value);
//	List<Menu> findByPriceValueLessThanEqual(@Param("value") Integer value);
//	List<Menu> findByPriceValueGreaterThanAndPriceValueLessThan(@Param("value1") Integer value1, @Param("value2") Integer value2);
}
