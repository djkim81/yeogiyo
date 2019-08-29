package com.sk.sample.yeogiyo.order;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.config.EnableHypermediaSupport;

import com.querydsl.core.types.Predicate;

import com.sk.sample.yeogiyo.order.domain.model.OrderType;
import com.sk.sample.yeogiyo.order.domain.model.TableNum;
import com.sk.sample.yeogiyo.order.domain.model.OrderType;

import com.sk.sample.yeogiyo.order.domain.model.Ordered;
import com.sk.sample.yeogiyo.order.domain.model.ShopId;
//import com.sk.sample.yeogiyo.order.domain.model.QOrder;
import com.sk.sample.yeogiyo.order.domain.repository.OrderRepository;


@SpringBootApplication
@EnableHypermediaSupport(type=EnableHypermediaSupport.HypermediaType.HAL)
public class OrderApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner execSampleCode(OrderRepository orderRepository) {	
		return (args) -> {
			insertOrders(orderRepository);
			displayOrders(orderRepository);
			
//			executeExample2(accountRepository);
//			executeExample3(accountRepository);
//			executeExample4(accountRepository);
//			executeExample5(accountRepository);
//			executeExample6(accountRepository);
//			executeExample7(accountRepository);
		};
	}
	
	public void insertOrders(OrderRepository orderRepository) {
		//Order menu1 = new Order("김치찌게", new TableNum(7000), new ShopId(FoodType.KOREAN));
			
//		Order order1 = new Order(new ShopId("1"), new TableNum(7000),OrderType.주문요청);
//		orderRepository.save(order1);
		
		//Order order2 = new Order(new ShopId("1"), new TableNum(7001),OrderType.주문요청);
		//orderRepository.save(order2);
		
		//Order order3 = new Order(new ShopId("1"), new TableNum(7002),OrderType.주문요청);
		//orderRepository.save(order3);
		
		Ordered order1 = new Ordered("shop_1","7001","주문요청","김치찌개","1","2019/08/29 14:25"); //, new TableNum(7000));
		orderRepository.save(order1);
		Ordered order2 = new Ordered("shop_1","7002","주문요청","된장찌개","1","2019/08/29 14:35"); //, new TableNum(7000));
		orderRepository.save(order2);
		Ordered order3 = new Ordered("shop_1","7003","주문요청","돈까스","1","2019/08/29 14:37"); //, new TableNum(7000));
		orderRepository.save(order3);		
	}
	
	public void displayOrders(OrderRepository orderRepository) {
		System.out.println("***************************************************************");
		
		Iterable<Ordered> orderList = orderRepository.findAll();
		for(Ordered order : orderList) {
			System.out.println(order.toString());	
		}
		
		System.out.println("***************************************************************");
	}
	
//	public void executeExample1(OrderRepository orderRepository) {
//		
//		Ordered order = orderRepository.findByTnum("7001");		
//		order.setOrder_st("결제완료");
//		orderRepository.save(order);
//		
//		displayOrders(orderRepository);
//	}	
//	
//	public void executeExample2(orderRepository productRepository) {
//		Menu product = productRepository.findByName("Iron Man");
//		
//		product.setPrice(new Price(25000));
//		productRepository.save(product);
//		
//		displayProducts(productRepository);
//	}
//	
//	public void executeExample3(orderRepository productRepository) {
//		List<Menu> product = productRepository.findByProductDescriptionSizeType(SizeType.M);
//		System.out.println("Result: " + product.toString());
//	}
//	
//	public void executeExample4(orderRepository productRepository) {
//		List<Menu> product = productRepository.findByProductDescriptionColorType(ColorType.BLUE);
//		System.out.println("Result: " + product.toString());
//	}
//	
//	public void executeExample5(orderRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueGreaterThanEqual(17000);
//		System.out.println("Result: " + product.toString());
//		
//		List<Menu> product2 = productRepository.findAll(QProduct.product.price.value.goe(17000));
//		System.out.println("Result2: " + product2.toString());
//	}
//	
//	public void executeExample6(orderRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueLessThanEqual(21000);
//		System.out.println("Result: " + product.toString());
//		
//		List<Menu> product2 = productRepository.findAll(QProduct.product.price.value.loe(17000));
//		System.out.println("Result2: " + product2.toString());
//	}
//
//	public void executeExample7(orderRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueGreaterThanAndPriceValueLessThan(10000, 20000);
//		System.out.println("Result: " + product.toString());
//		
//		Predicate predicate = QProduct.product.price.value.gt(10000).and(
//				              QProduct.product.price.value.lt(20000));
//		List<Menu> product2 = productRepository.findAll(predicate);
//		System.out.println("Result2: " + product2.toString());
//	}
}
