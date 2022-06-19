

/*
    This sketch demonstrates how to set up a simple HTTP-like server.
    The server will set a GPIO pin depending on the request
      http://server_ip/gpio/0 will set the GPIO2 low,
      http://server_ip/gpio/1 will set the GPIO2 high
    server_ip is the IP address of the ESP8266 module, will be
    printed to Serial when the module is connected.
*/

#include <ESP8266WiFi.h>

#ifndef STASSID
#define STASSID "ASUSinternet"
#define STAPSK  "Gt%>SB#sW:EuS@qu_5A$w"
#endif

const char* ssid = STASSID;
const char* password = STAPSK;

// Create an instance of the server
// specify the port to listen on as an argument
WiFiServer server(80);

void setup() {
  Serial.begin(9600);

  // prepare LED
  pinMode(D0, OUTPUT);
  digitalWrite(D0, 0);
  pinMode(D1, OUTPUT);
  digitalWrite(D1, 0);
  pinMode(D2, OUTPUT);
  digitalWrite(D2, 0);
  pinMode(D3, OUTPUT);
  digitalWrite(D3, 0);

  // Connect to WiFi network
  Serial.println();
  Serial.println();
  Serial.print(F("Connecting to "));
  Serial.println(ssid);

  WiFi.mode(WIFI_STA);
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(F("."));
  }
  Serial.println();
  Serial.println(F("WiFi connected"));

  // Start the server
  server.begin();
  Serial.println(F("Server started"));

  // Print the IP address
  Serial.println(WiFi.localIP());
}

void loop() {
  // Check if a client has connected
  WiFiClient client = server.available();
  if (!client) {
    return;
  }
  Serial.println(F("new client"));

  client.setTimeout(5000); // default is 1000

  // Read the first line of the request
  String req = client.readStringUntil('\r');
  Serial.println(F("request: "));
  Serial.println(req);

  // Match the request
  int val;
  if (req.indexOf(F("/gpio/D0/0")) != -1) {
    val = 0;
  } else if (req.indexOf(F("/gpio/D0/1")) != -1) {
    val = 1;
  } else {
    Serial.println(F("invalid request"));
    val = digitalRead(D0);
  }

  int val1;
  if (req.indexOf(F("/gpio/D1/0")) != -1) {
    val1 = 0;
  } else if (req.indexOf(F("/gpio/D1/1")) != -1) {
    val1 = 1;
  } else {
    Serial.println(F("invalid request"));
    val1 = digitalRead(D1);
  }

  int val2;
  if (req.indexOf(F("/gpio/D2/0")) != -1) {
    val2 = 0;
  } else if (req.indexOf(F("/gpio/D2/1")) != -1) {
    val2 = 1;
  } else {
    Serial.println(F("invalid request"));
    val2 = digitalRead(D2);
  }

  int val3;
  if (req.indexOf(F("/gpio/D3/0")) != -1) {
    val3 = 0;
  } else if (req.indexOf(F("/gpio/D3/1")) != -1) {
    val3 = 1;
  } else {
    Serial.println(F("invalid request"));
    val3 = digitalRead(D3);
  }

  // Set LED according to the request
  digitalWrite(D0, val);
  digitalWrite(D1, val1);
  digitalWrite(D2, val2);
  digitalWrite(D3, val3);

  // read/ignore the rest of the request
  // do not client.flush(): it is for output only, see below
  while (client.available()) {
    // byte by byte is not very efficient
    client.read();
  }

  // Send the response to the client
  // it is OK for multiple small client.print/write,
  // because nagle algorithm will group them into one single packet
  client.print(F("HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n\r\n<!DOCTYPE HTML>\r\n<html>\r\n "));
  client.print((val) ? F("[ON] ") : F("[OFF] "));
  //client.print(F("<br><br>D0: <a href='http://"));
  client.print(F("D0: <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D0/1'>TURN ON</a> / <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D0/0'>TURN OFF</a><br>"));
  //client.print(F("<a>textTTTTTTT</a>"));

  client.print((val1) ? F("[ON] ") : F("[OFF] "));
  client.print(F("D1: <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D1/1'>TURN ON</a> / <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D1/0'>TURN OFF</a><br>"));

  client.print((val2) ? F("[ON] ") : F("[OFF] "));
  client.print(F("D2: <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D2/1'>TURN ON</a> / <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D2/0'>TURN OFF</a><br>"));

  client.print((val3) ? F("[ON] ") : F("[OFF] "));
  client.print(F("D3: <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D3/1'>TURN ON</a> / <a href='http://"));
  client.print(WiFi.localIP());
  client.print(F("/gpio/D3/0'>TURN OFF</a><br></html>"));



  // The client will actually be *flushed* then disconnected
  // when the function returns and 'client' object is destroyed (out-of-scope)
  // flush = ensure written data are received by the other side
  Serial.println(F("Disconnecting from client"));
}
