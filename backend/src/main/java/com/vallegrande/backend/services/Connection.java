package com.vallegrande.backend.services;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.apache.http.HttpEntity;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.ResponseHandler;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;

import java.io.IOException;

public class Connection {

    public String services(String json) throws IOException {

        /*Credenciales*/
        CredentialsProvider provider = new BasicCredentialsProvider();
        provider.setCredentials(
                AuthScope.ANY,
                new UsernamePasswordCredentials("apikey", "sW0uksQ1xBsOGNn-OvkRJxfJ9t_eidxE_EK6Ol2HRW7X"));


        CloseableHttpClient httpClient = HttpClientBuilder.create()
                .setDefaultCredentialsProvider(provider)
                .build();

        HttpPost httpPost = new HttpPost("https://api.us-south.language-translator.watson.cloud.ibm.com/instances/b235050d-3eed-483d-b905-e4b046919746/v3/translate?version=2018-05-01");
        httpPost.setHeader("Content-type", "application/json");

        StringEntity stringEntity = new StringEntity(json);
        httpPost.setEntity(stringEntity);

        ResponseHandler<String> responseHandler = response -> {
            int status = response.getStatusLine().getStatusCode();
            if (status >= 200 && status < 300) {
                HttpEntity entity = response.getEntity();
                return entity != null ? EntityUtils.toString(entity) : null;
            } else {
                throw new ClientProtocolException("Estado de la respuesta " + status);
            }
        };

        String responseBody = httpClient.execute(httpPost, responseHandler);
        return responseBody;
    }

    public static void main(String[] args) {
        String nombre = "hello world mon";
        String resultado = nombre.toUpperCase().charAt(0) + nombre.substring(1, nombre.length()).toLowerCase();
        System.out.println("resultado : " + resultado );
    }
}
