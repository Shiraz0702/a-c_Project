package com.example.a.c_project.controller;

import com.example.a.c_project.dto.contactUs.ContactUsRequest;
import com.example.a.c_project.service.ContactService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@RestController
@CrossOrigin
public class ContactUsController {

    private final ContactService contactService;

    @PostMapping("/contactUs")
    public ResponseEntity<String> saveContactUs(@RequestBody ContactUsRequest contactUsRequest){
        return ResponseEntity.ok(contactService.saveContactUs(contactUsRequest));
    }
}
