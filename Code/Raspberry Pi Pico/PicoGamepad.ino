#include <PicoGamepad.h>

PicoGamepad gamepad;

// 16 bit integer for holding input values
int val;

void setup() {  
  Serial.begin(115200);
  
  pinMode(LED_BUILTIN, OUTPUT);

  // Button on pin 
  pinMode(16, INPUT_PULLUP);
  pinMode(17, INPUT_PULLUP);

}

void loop() {


  // Set button 0 of 128 by reading button on digital pin 28
  gamepad.SetButton(0, !digitalRead(16));
  
  gamepad.SetButton(1, !digitalRead(17));

  // Set hat direction, 4 hats available. direction is clockwise 0=N 1=NE 2=E 3=SE 4=S 5=SW 6=W 7=NW 8=CENTER 
  // gamepad.SetHat(0, 8);


  // Send all inputs via HID 
  // Nothing is send to your computer until this is called.
  gamepad.send_update();

  // Flash the LED just for fun
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN)); 
  delay(100);
}
