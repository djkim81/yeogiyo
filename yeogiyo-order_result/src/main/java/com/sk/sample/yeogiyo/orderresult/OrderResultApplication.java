package com.sk.sample.yeogiyo.orderresult;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.config.EnableHypermediaSupport;

import com.sk.sample.yeogiyo.orderresult.domain.model.OrderItem;
import com.sk.sample.yeogiyo.orderresult.domain.model.OrderedMenuItem;
import com.sk.sample.yeogiyo.orderresult.domain.repository.OrderResultRepository;


@SpringBootApplication
@EnableHypermediaSupport(type=EnableHypermediaSupport.HypermediaType.HAL)
public class OrderResultApplication {

	public static void main(String[] args) {
		SpringApplication.run(OrderResultApplication.class, args);
	}
	
	@Bean
	public CommandLineRunner execSampleCode(OrderResultRepository OrderResultRepository) {	
		return (args) -> {
//			insertMenus(OrderResultRepository);
//			displayMenus(OrderResultRepository);
			
//			executeExample2(accountRepository);
//			executeExample3(accountRepository);
//			executeExample4(accountRepository);
//			executeExample5(accountRepository);
//			executeExample6(accountRepository);
//			executeExample7(accountRepository);
		};
	}
	
	public void insertMenus(OrderResultRepository orderResultRepository) {
		
		OrderItem orderItem1 = new OrderItem();
		
		List <OrderedMenuItem> orderedItems = null;
		orderedItems.add( new OrderedMenuItem("201908290001", 1001 , "김치찌개", 2));
		orderedItems.add( new OrderedMenuItem("201908290001", 1002 , "된장찌개", 1));
		

		orderItem1.setOrderId("201908290001");
		orderItem1.setTableNum("13");
		//orderItem1.setOrderedMenuItemList(orderedItems);
		orderItem1.setRegDtm("14:23 19/8/29");
		orderItem1.setOrderStatus(0);		
		orderResultRepository.save(orderItem1);
		
		


	}
	
	public void displayMenus(OrderResultRepository OrderResultRepository) {
//		System.out.println("***************************************************************");
//		
//		Iterable<Menu> menuList = OrderResultRepository.findAll();
//		for(Menu menu : menuList) {
//			System.out.println(menu.toString());	
//		}
//		
//		System.out.println("***************************************************************");
	}
	
//	public void executeExample2(OrderResultRepository productRepository) {
//		Menu product = productRepository.findByName("Iron Man");
//		
//		product.setPrice(new Price(25000));
//		productRepository.save(product);
//		
//		displayProducts(productRepository);
//	}
//	
//	public void executeExample3(OrderResultRepository productRepository) {
//		List<Menu> product = productRepository.findByProductDescriptionSizeType(SizeType.M);
//		System.out.println("Result: " + product.toString());
//	}
//	
//	public void executeExample4(OrderResultRepository productRepository) {
//		List<Menu> product = productRepository.findByProductDescriptionColorType(ColorType.BLUE);
//		System.out.println("Result: " + product.toString());
//	}
//	
//	public void executeExample5(OrderResultRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueGreaterThanEqual(17000);
//		System.out.println("Result: " + product.toString());
//		
//		List<Menu> product2 = productRepository.findAll(QProduct.product.price.value.goe(17000));
//		System.out.println("Result2: " + product2.toString());
//	}
//	
//	public void executeExample6(OrderResultRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueLessThanEqual(21000);
//		System.out.println("Result: " + product.toString());
//		
//		List<Menu> product2 = productRepository.findAll(QProduct.product.price.value.loe(17000));
//		System.out.println("Result2: " + product2.toString());
//	}
//
//	public void executeExample7(OrderResultRepository productRepository) {
//		List<Menu> product = productRepository.findByPriceValueGreaterThanAndPriceValueLessThan(10000, 20000);
//		System.out.println("Result: " + product.toString());
//		
//		Predicate predicate = QProduct.product.price.value.gt(10000).and(
//				              QProduct.product.price.value.lt(20000));
//		List<Menu> product2 = productRepository.findAll(predicate);
//		System.out.println("Result2: " + product2.toString());
//	}
}
