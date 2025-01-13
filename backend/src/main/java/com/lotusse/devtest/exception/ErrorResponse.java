package com.lotusse.devtest.exception;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Schema(description = "Error Response Object")
public class ErrorResponse {
    @Schema(description = "HTTP Status code", example = "4xx")
    private int status;

    @Schema(description = "Error message", example = "Error description")
    private String message;
}
