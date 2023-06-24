package com.example.a.c_project.dto.contactUs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ContactUsRequest {

    private String name;

    private String phone;

    private String email;

    private String message;
}
