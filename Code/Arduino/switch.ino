int btn_cons_1;
int var_temp;

void setup(){
  pinMode(2, INPUT_PULLUP);
  Serial.begin(9600);
  
  //tutaj wartosc poczatkowa zostaje zadefiniowana
  var_temp = digitalRead(2);
  
}

void loop(){
  //ciagle sprawdza wartosc odczytu z przycisku (0 lub 1)
  btn_cons_1 = digitalRead(2);

  if(btn_cons_1 == 1 && var_temp == 0){
  Serial.println("Wartosc 1");
    var_temp = 1;
    delay(10);
  }
  
  if(btn_cons_1 == 0 && var_temp == 1){
  Serial.println("Wartosc 0");
    var_temp = 0;
    delay(10);
  }
}
