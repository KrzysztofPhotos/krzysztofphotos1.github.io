#include <PicoGamepad.h>

PicoGamepad gamepad;

///////////// rotary encoder //////////
#define outputA 20
#define outputB 21

 int counter = 0; 
 int aState;
 int aLastState; 
///////////////////////////////////////


int btn_cons_1;
int btn_cons_2;
int btn_cons_3;
int btn_temp_1;
int btn_temp_2;
int btn_temp_3;
int val;
int analog_buttons;
int a2;
int which_button = 0;
int btn_temp_red;
int btn_temp_key;
int btn_cons_red;
int btn_cons_key;

void setup() {



pinMode (outputA,INPUT);
   pinMode (outputB,INPUT);
aLastState = digitalRead(outputA);  
   
  pinMode(A2, INPUT);
  pinMode(LED_BUILTIN, OUTPUT);

  pinMode(0, INPUT_PULLUP);
  pinMode(1, INPUT_PULLUP);
  pinMode(2, INPUT_PULLUP);
  pinMode(3, INPUT_PULLUP);
  pinMode(4, INPUT_PULLUP);
  pinMode(5, INPUT_PULLUP);
  pinMode(6, INPUT_PULLUP);
  pinMode(7, INPUT_PULLUP);
  pinMode(8, INPUT_PULLUP);
  pinMode(9, INPUT_PULLUP);
  pinMode(10, INPUT_PULLUP);
  pinMode(11, INPUT_PULLUP);
  pinMode(12, INPUT_PULLUP);
  pinMode(13, INPUT_PULLUP);
  pinMode(14, INPUT_PULLUP);
  pinMode(15, INPUT_PULLUP);
  pinMode(16, INPUT_PULLUP);
  pinMode(17, INPUT_PULLUP);
  pinMode(18, INPUT_PULLUP);
  pinMode(19, INPUT_PULLUP);






  Serial.begin(115200);

  //tutaj wartosc poczatkowa zostaje zadefiniowana
  btn_temp_1 = digitalRead(0);
  btn_temp_2 = digitalRead(1);
  btn_temp_3 = digitalRead(2);
  btn_temp_red = digitalRead(14);
  btn_temp_key = digitalRead(15);

}

void loop() {
  btn_cons_1 = digitalRead(0);
  btn_cons_2 = digitalRead(1);
  btn_cons_3 = digitalRead(2);
  btn_cons_red = digitalRead(14);
  btn_cons_key = digitalRead(15);

  //Serial.println(digitalRead(14));

  gamepad.SetButton(3, !digitalRead(3));
  gamepad.SetButton(4, !digitalRead(4));
  gamepad.SetButton(5, !digitalRead(5));
  gamepad.SetButton(6, !digitalRead(6));
  gamepad.SetButton(7, !digitalRead(7));
  gamepad.SetButton(8, !digitalRead(8));
  gamepad.SetButton(9, !digitalRead(9));
  gamepad.SetButton(10, !digitalRead(10));
  gamepad.SetButton(11, !digitalRead(11));
  gamepad.SetButton(12, !digitalRead(12));
  gamepad.SetButton(13, !digitalRead(13));
  //gamepad.SetButton(14, !digitalRead(14)); // red
  //gamepad.SetButton(15, !digitalRead(15)); // key
  gamepad.SetButton(16, !digitalRead(16));
  gamepad.SetButton(17, !digitalRead(17));
  gamepad.SetButton(18, !digitalRead(18));
  gamepad.SetButton(19, !digitalRead(19));


aState = digitalRead(outputA); // Reads the "current" state of the outputA
   // If the previous and the current state of the outputA are different, that means a Pulse has occured
   if (aState != aLastState){     
     // If the outputB state is different to the outputA state, that means the encoder is rotating clockwise
     if (digitalRead(outputB) != aState) { 
      //tutaj dodać wcisniecie klawisza
      click_btn_21()
       counter ++;
     } else {
      click_btn_20()
      //tutaj dodac wciesniecie klawisza
       counter --;
     }
   } 
   aLastState = aState; // Updates the previous state of the outputA with the current state


  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  if (btn_cons_key == 1 && btn_temp_key == 0) {
    Serial.println("[CIRCLE 1] Button switched -> O (1)");
    btn_temp_key = 1;
    delay(10);
    //click_btn_15(); //przycisniecie przycisku
  }

  if (btn_cons_key == 0 && btn_temp_key == 1) {
    Serial.println("[CIRCLE 1] Button switched -> I (2)");
    btn_temp_key = 0;
    delay(10);
    click_btn_15(); //przycisniecie przycisku
  }

  if (btn_cons_red == 1 && btn_temp_red == 0) {
    Serial.println("[CIRCLE 1] Button switched -> O (1)");
    btn_temp_red = 1;
    delay(10);
    //click_btn_14(); //przycisniecie przycisku
  }

  if (btn_cons_red == 0 && btn_temp_red == 1) {
    Serial.println("[CIRCLE 1] Button switched -> I (2)");
    btn_temp_red = 0;
    delay(10);
    click_btn_14(); //przycisniecie przycisku
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
    click_btn_0(); //przycisniecie przycisku
  }

  if (btn_cons_2 == 1 && btn_temp_2 == 0) {
    Serial.println("[CIRCLE 2] Button switched -> O (1)");
    btn_temp_2 = 1;
    delay(10);
    click_btn_1(); //przycisniecie przycisku
  }

  if (btn_cons_2 == 0 && btn_temp_2 == 1) {
    Serial.println("[CIRCLE 2] Button switched -> I (2)");
    btn_temp_2 = 0;
    delay(10);
    click_btn_1(); //przycisniecie przycisku
  }
  if (btn_cons_3 == 1 && btn_temp_3 == 0) {
    Serial.println("[CIRCLE 3] Button switched -> O (1)");
    btn_temp_3 = 1;
    delay(10);
    click_btn_2(); //przycisniecie przycisku
  }

  if (btn_cons_3 == 0 && btn_temp_3 == 1) {
    Serial.println("[CIRCLE 3] Button switched -> I (2)");
    btn_temp_3 = 0;
    delay(10);
    click_btn_2(); //przycisniecie przycisku
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



  //Serial.println(val);   drukuej wartosci z analoga
  //Serial.println(a2); //temporary code


  gamepad.send_update();
  digitalWrite(LED_BUILTIN, HIGH);
  delay(40);

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

void click_btn_2() {
  gamepad.SetButton(2, 1);
  gamepad.send_update();
  delay(250);
  gamepad.SetButton(2, 0);
}

void click_btn_14() {
  gamepad.SetButton(14, 1);
  gamepad.send_update();
  delay(250);
  gamepad.SetButton(14, 0);
}

void click_btn_15() {
  gamepad.SetButton(15, 1);
  gamepad.send_update();
  delay(250);
  gamepad.SetButton(15, 0);
}

void click_btn_20() {
  gamepad.SetButton(20, 1);
  gamepad.send_update();
  delay(25);
  gamepad.SetButton(20, 0);
}

void click_btn_21() {
  gamepad.SetButton(21, 1);
  gamepad.send_update();
  delay(25);
  gamepad.SetButton(21, 0);
}

void click_btn_22() {
  gamepad.SetButton(22, 1);
  gamepad.send_update();
  delay(25);
  gamepad.SetButton(22, 0);
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
