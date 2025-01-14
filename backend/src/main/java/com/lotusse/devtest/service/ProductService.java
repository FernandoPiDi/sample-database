package com.lotusse.devtest.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import com.lotusse.devtest.dto.ProductRequestDTO;
import com.lotusse.devtest.dto.ProductResponseDTO;
import com.lotusse.devtest.entity.Product;
import com.lotusse.devtest.repository.ProductRepository;
import com.lotusse.devtest.exception.ProductNotFoundException;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ProductService {

    private final ProductRepository productRepository;
    private final RedisTemplate<String, Product> redisTemplate;
    private static final String REDIS_KEY_PREFIX = "product:";

    public ProductService(ProductRepository productRepository, RedisTemplate<String, Product> redisTemplate) {
        this.productRepository = productRepository;
        this.redisTemplate = redisTemplate;
    }

    public ProductResponseDTO addProduct(ProductRequestDTO productRequest) {
        Product product = new Product();
        product.setName(productRequest.getName());
        Product savedProduct = productRepository.save(product);
        return mapToResponseDTO(savedProduct);
    }

    public List<ProductResponseDTO> getAllProducts() {
        return productRepository.findAll().stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

    public ProductResponseDTO getProduct(Long id) {
        String redisKey = REDIS_KEY_PREFIX + id;
        Product product = redisTemplate.opsForValue().get(redisKey);

        if (product != null) {
            log.info("Product found in Redis: {}", product);
            return mapToResponseDTO(product);
        }

        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            product = productOptional.get();
            redisTemplate.opsForValue().set(redisKey, product);
            log.info("Product found in database: {}", product);
            return mapToResponseDTO(product);
        }

        throw new ProductNotFoundException(id);
    }

    private ProductResponseDTO mapToResponseDTO(Product product) {
        return new ProductResponseDTO(
                product.getId(),
                product.getName(),
                product.getCreatedAt(),
                product.getUpdatedAt());
    }
}
