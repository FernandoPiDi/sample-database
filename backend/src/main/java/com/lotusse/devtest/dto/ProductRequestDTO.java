package com.lotusse.devtest.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Schema(description = "Product Request Data Transfer Object")
public class ProductRequestDTO {
    @Schema(description = "Name of the product", example = "iPhone 13")
    @NotNull
    @Size(max = 255)
    private String name;
}
