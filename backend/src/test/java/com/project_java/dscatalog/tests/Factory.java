package com.project_java.dscatalog.tests;

import java.time.Instant;

import com.project_java.dscatalog.dto.ProductDTO;
import com.project_java.dscatalog.entities.Category;
import com.project_java.dscatalog.entities.Product;

public class Factory {
    public static Product createProduct() {
        Product product = new Product(1L, "Phone", "Good Phone", 800.0, "https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/25-big.jpg", Instant.parse("2020-07-14T10:00:00Z"));

        product.getCategories().add(new Category(2L, "Electronics"));
        return product;
    }


    public static ProductDTO createProductDTO() {
        Product product = createProduct();
        return new ProductDTO(product, product.getCategories());
    }
}
