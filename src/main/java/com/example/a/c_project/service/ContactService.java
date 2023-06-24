package com.example.a.c_project.service;

import com.example.a.c_project.dto.contactUs.ContactUsRequest;
import com.example.a.c_project.entity.ContactUs;
import com.example.a.c_project.repository.ContactUsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactUsRepository contactUsRepository;

    public String saveContactUs(ContactUsRequest contactUsRequest) {
        return contactUsRepository.save(convertToContactUs(contactUsRequest)).toString();

    }

    public ContactUs convertToContactUs(ContactUsRequest contactUsRequest) {
        ContactUs contactUs = ContactUs.builder()
                .phone(contactUsRequest.getPhone())
                .name(contactUsRequest.getName())
                .email(contactUsRequest.getEmail())
                .message(contactUsRequest.getMessage())
                .build();

        return contactUs;
    }
}
