package com.sk.sample.yeogiyo.order.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.sk.sample.yeogiyo.order.domain.model.Order;

@RepositoryRestResource
public interface OrderRepository extends PagingAndSortingRepository<Order, Long> {

}
