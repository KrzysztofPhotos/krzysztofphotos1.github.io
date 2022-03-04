
#include <PicoGamepad.h>

PicoGamepad gamepad;

int btn_cons_1;
int btn_temp_1;
int val;
int analog_buttons;

void setup() {
  pinMode(0, INPUT_PULLUP);
  pinMode(A2, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);
  Serial.begin(115200);

  //tutaj wartosc poczatkowa zostaje zadefiniowana
  btn_temp_1 = digitalRead(0);

}

void loop() {
  //ciagle sprawdza wartosc odczytu z przycisku (0 lub 1)
  btn_cons_1 = digitalRead(0);

  if (btn_cons_1 == 1 && btn_temp_1 == 0) {
    Serial.println("[CIRCLE 1] Button switched -> O (1)");
    btn_temp_1 = 1;
    delay(10);
    click_btn_0(); //przycisniecie przycisku
  }

  if (btn_cons_1 == 0 && btn_temp_1 == 1) {
    Serial.println("[CIRCLE 1] Button switched -> I (2)");
    btn_temp_1 = 0;
    delay(10);
    click_btn_1(); //przycisniecie przycisku
  }

  analog_buttons = analogRead(A2);

  if (analog_buttons > 184 && analog_buttons < 202) {
    val = 1;
  }
  if (analog_buttons > 89 && analog_buttons < 106) {
    val = 2;
  }
  if (analog_buttons > 39 && analog_buttons < 61) {
    val = 3;
  }
  if (analog_buttons > 259 && analog_buttons < 274) {
    val = 4;
  }
  if (analog_buttons > 219 && analog_buttons < 241) {
    val = 5;
  }
  if (analog_buttons > 369 && analog_buttons < 396) {
    val = 6;
  }
  if (analog_buttons > 269 && analog_buttons < 287) {
    val = 7;
  }
  if (analog_buttons > 289 && analog_buttons < 307) {
    val = 8;
  }
  if (analog_buttons > 319 && analog_buttons < 341) {
    val = 9;
  }
  if (analog_buttons > 0) {
    val = 0;
  }
  
  Serial.println(val);


  gamepad.send_update();
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  delay(300);

}


void click_btn_0() {
  gamepad.SetButton(0, 1);
  gamepad.send_update();
  delay(450);
  gamepad.SetButton(0, 0);
}

void click_btn_1() {
  gamepad.SetButton(1, 1);
  gamepad.send_update();
  delay(450);
  gamepad.SetButton(1, 0);
}
