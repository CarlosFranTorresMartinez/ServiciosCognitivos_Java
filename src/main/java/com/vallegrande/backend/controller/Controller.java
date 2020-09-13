package com.vallegrande.backend.controller;

import com.vallegrande.backend.model.Model;
import com.vallegrande.backend.services.Connection;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@CrossOrigin({"*"})
@RestController
public class Controller {

    private final Connection conectar = new Connection();

    @PostMapping("/add")
    public String save(@RequestBody Model model) throws IOException {

        String text = model.getText().get(0).toUpperCase().charAt(0) + model.getText().get(0).substring(1, model.getText().get(0).length()).toLowerCase();

        String json = "{\n" +
                "    \"text\": [\n" +
                "        \"" + text + "\"\n" +
                "    ],\n" +
                "    \"model_id\": \""+model.getModel_id()+"\"\n" +
                "}";

        System.out.println(json);

        return conectar.services(json);
    }
}
