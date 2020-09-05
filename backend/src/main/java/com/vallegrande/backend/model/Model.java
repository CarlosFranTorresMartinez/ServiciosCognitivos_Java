package com.vallegrande.backend.model;

import java.util.List;

public class Model {
    private List<String> text;
    private String model_id;

    public List<String> getText() {
        return text;
    }

    public void setText(List<String> text) {
        this.text = text;
    }

    public String getModel_id() {
        return model_id;
    }

    public void setModel_id(String model_id) {
        this.model_id = model_id;
    }

    @Override
    public String toString() {
        return "Model{" +
                "text=" + text +
                ", model_id='" + model_id + '\'' +
                '}';
    }
}
