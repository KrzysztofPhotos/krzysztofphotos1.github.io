
#include <PicoGamepad.h>

PicoGamepad gamepad;

int btn_cons_1;
int btn_temp_1;
int val;
int analog_buttons;
int a2;
int which_button = 0;

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

  a2 = analogRead(A2);
  analog_buttons = a2;

  if (analog_buttons > 184 && analog_buttons < 202) {
    val = 1;
    click_btn_23();

  }
  if (analog_buttons > 89 && analog_buttons < 106) {
    val = 2;
    click_btn_24();

  }
  if (analog_buttons > 39 && analog_buttons < 61) {
    val = 3;
    click_btn_25();

  }
  if (analog_buttons > 259 && analog_buttons < 274) {
    val = 4;
    click_btn_26();

  }
  if (analog_buttons > 219 && analog_buttons < 241) {
    val = 5;
    click_btn_27();

  }
  if (analog_buttons > 369 && analog_buttons < 396) {
    val = 6;
    click_btn_28();

  }
  if (analog_buttons > 274 && analog_buttons < 287) {
    val = 7;
    click_btn_29();

  }
  if (analog_buttons > 289 && analog_buttons < 307) {
    val = 8;
    click_btn_30();

  }
  if (analog_buttons > 319 && analog_buttons < 341) {
    val = 9;
    click_btn_31();

  }
  if (analog_buttons > 395) {
    val = 0;


  }



  Serial.println(val);
  //Serial.println(a2); //temporary code


  gamepad.send_update();
  //digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  delay(50);

}


void click_btn_0() {
  gamepad.SetButton(0, 1);
  gamepad.send_update();
  delay(250);
  gamepad.SetButton(0, 0);
}

void click_btn_1() {
  gamepad.SetButton(1, 1);
  gamepad.send_update();
  delay(250);
  gamepad.SetButton(1, 0);
}

void click_btn_23() {
  gamepad.SetButton(23, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(23, 0);
}

void click_btn_24() {
  gamepad.SetButton(24, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(24, 0);
}

void click_btn_25() {
  gamepad.SetButton(25, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(25, 0);
}

void click_btn_26() {
  gamepad.SetButton(26, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(26, 0);
}

void click_btn_27() {
  gamepad.SetButton(27, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(27, 0);
}

void click_btn_28() {
  gamepad.SetButton(28, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(28, 0);
}

void click_btn_29() {
  gamepad.SetButton(29, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(29, 0);
}

void click_btn_30() {
  gamepad.SetButton(30, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(30, 0);
}

void click_btn_31() {
  gamepad.SetButton(31, 1);
  gamepad.send_update();
  delay(350);
  gamepad.SetButton(31, 0);
}
