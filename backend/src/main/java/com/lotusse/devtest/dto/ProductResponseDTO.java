package com.lotusse.devtest.dto;

import java.time.Instant;

import com.fasterxml.jackson.annotation.JsonInclude;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(description = "Product Response Data Transfer Object")
public class ProductResponseDTO {
    @Schema(description = "Unique identifier of the product", example = "1")
    private Long id;

    @Schema(description = "Name of the product", example = "iPhone 13")
    private String name;

    @Schema(description = "Timestamp when the product was created", example = "2024-03-15T10:30:00Z")
    private Instant createdAt;

    @Schema(description = "Timestamp when the product was last updated", example = "2024-03-15T15:45:00Z")
    private Instant updatedAt;
}
