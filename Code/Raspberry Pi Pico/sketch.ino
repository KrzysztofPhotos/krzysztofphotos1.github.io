
#include <PicoGamepad.h>

PicoGamepad gamepad;

int btn_cons_1;
int btn_temp_1;

void setup(){
  pinMode(0, INPUT_PULLUP);
  Serial.begin(9600);
  
  //tutaj wartosc poczatkowa zostaje zadefiniowana
  btn_temp_1 = digitalRead(0);
  
}

void loop(){
  //ciagle sprawdza wartosc odczytu z przycisku (0 lub 1)
  btn_cons_1 = digitalRead(0);

  if(btn_cons_1 == 1 && btn_temp_1 == 0){
  Serial.println("Wartosc 1");
    btn_temp_1 = 1;
    delay(10);
  }
  
  if(btn_cons_1 == 0 && btn_temp_1 == 1){
  Serial.println("Wartosc 0");
    btn_temp_1 = 0;
    delay(10);
  }


  gamepad.send_update();
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  delay(300);
  
}




//void btn1(){
//gamepad.SetButton(0, 1);
//}
