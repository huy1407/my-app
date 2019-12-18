#define BLYNK_PRINT Serial

int pin1        = D1;
int pin2        = D2;
int pin3        = D3;
int pin4        =D4;
//#include <WiFi.h>
//#include <WiFiClient.h>
//#include <BlynkSimpleEsp32.h>
#include <ESP8266WiFi.h>
//#include <ESP8266WiFiMulti.h>
#include <BlynkSimpleEsp8266.h>
//ESP8266WiFiMulti WiFiMulti;
// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "iWTnOxjisNpK5xVj2n23gzyVEBKYaVn4";

// Your WiFi credentials.
// Set password to "" for open networks.
char ssid[] = "CAM PHUONG";
char pass[] = "20081970";

void setup() {  
  pinMode(pin1, OUTPUT); 
  pinMode(pin1, HIGH);
  delay(10);
  pinMode(pin2, OUTPUT); 
  pinMode(pin2, HIGH);
  delay(10);
  pinMode(pin3, OUTPUT); 
  pinMode(pin3, HIGH);
  delay(10);
  pinMode(pin4, OUTPUT); 
  pinMode(pin4, HIGH);
  delay(10);
  Serial.begin(115200);
  Serial.print("Connecting to ");
  Serial.println(ssid);

  WiFi.begin(ssid, pass);
  int wifi_ctr = 0;
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("WiFi connected");  

  Blynk.begin(auth, ssid, pass);

}

void loop(){
    Blynk.run();
}
