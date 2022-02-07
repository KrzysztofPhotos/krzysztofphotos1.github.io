int btn_cons_1;
int var_temp;

void setup(){
  pinMode(2, INPUT_PULLUP);
  Serial.begin(9600);
  //var_temp = digitalRead(2);
}


void loop(){
  btn_cons_1 = digitalRead(2);

  if(btn_cons_1 == 1){
  Serial.println("Wartosc 1");
  }
  else {
    Serial.println("Wartosc 0");
  }
  
  
  
  
}
