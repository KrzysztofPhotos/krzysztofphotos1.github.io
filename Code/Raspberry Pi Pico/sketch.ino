
#include <PicoGamepad.h>

PicoGamepad gamepad;

// 16 bit integer for holding input values
int val;

int btn_circle_1;
int btn_circle_1_temp;

int temp3 = 0;
int temp4 = 0;

void setup() {
  Serial.begin(115200);

  pinMode(LED_BUILTIN, OUTPUT);

  // Button on pin
  pinMode(0, INPUT_PULLUP);

  btn_circle_1_temp = digitalRead(0);
}


void loop() {

  Serial.println(!digitalRead(0));

  btn_circle_1 = digitalRead(0);

  if (temp3 == 1) {
    delay(500);
    gamepad.SetButton(0, 0);
    gamepad.send_update();  //chb nie wymagane sporbowac pozniej usunac
    temp3 = 0;
  }

  if (temp4 == 1) {
    delay(500);
    gamepad.SetButton(1, 0);
    gamepad.send_update();  //chb nie wymagane sporbowac pozniej usunac
    temp4 = 0;
  }

  if (btn_circle_1 == 1 && btn_circle_1_temp == 0) {

    gamepad.SetButton(1, 1);
    delay(10);
    gamepad.send_update();
    temp4 = 1;
    btn_circle_1_temp = 0;
  }

  if (btn_circle_1 == 0 && btn_circle_1_temp == 1) {
    gamepad.SetButton(0, 1);
    delay(10);
    gamepad.send_update();
    temp3 = 1;
    btn_circle_1_temp = 0;
  }




  // Send all inputs via HID
  // Nothing is send to your computer until this is called.
  gamepad.send_update();

  // Flash the LED just for fun
  digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
  delay(300);
}

//void btn1(){
//gamepad.SetButton(0, 1);
//}
