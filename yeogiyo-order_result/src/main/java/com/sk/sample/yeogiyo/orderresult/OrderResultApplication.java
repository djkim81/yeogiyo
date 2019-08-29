package com.sk.sample.yeogiyo.orderresult;

import java.awt.Menu;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.hateoas.config.EnableHypermediaSupport;

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
	
	public void insertMenus(OrderResultRepository OrderResultRepository) {
//		Menu menu1 = new Menu("김치찌게", new Price(7000), new MenuDescription(FoodType.KOREAN));
//		OrderResultRepository.save(menu1);
//		
//		Menu menu2 = new Menu("짜장면", new Price(6000), new MenuDescription(FoodType.CHINESE));
//		OrderResultRepository.save(menu2);
//		
//		Menu menu3 = new Menu("파스타", new Price(12000), new MenuDescription(FoodType.ITALIAN));
//		OrderResultRepository.save(menu3);
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
