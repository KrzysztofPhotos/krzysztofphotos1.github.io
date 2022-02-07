int btn_cons_1;
int var_temp;

void setup(){
  pinMode(2, INPUT_PULLUP);
  Serial.begin(9600);
  var_temp = digitalRead(2);
  
}

Serial.println("var_temp");
Serial.println("var_temp");
Serial.println("var_temp");
delay(5000);


void loop(){
  btn_cons_1 = digitalRead(2);

//  if(btn_cons_1 == 1 && var_temp == 0){
//  Serial.println("Wartosc 1");
//    int var_temp = 1
//  }
  
  if(btn_cons_1 == 1){
    
    if(var_temp != btn_cons_1){
     //przycisk zostal przelaczony
      Serial.println("Wartosc 1");
      
      int var_temp = 1; 
        }
    }
    
  
//  if(btn_cons_1 == 0 && var_temp == 1){
//  Serial.println("Wartosc 0");
//    int var_temp = 0
//  }
  
  
  else {
    
    
    if(var_temp != btn_cons_1){
      //przycisk zostal przelaczony
      Serial.println("Wartosc 0");
      
     int var_temp = 0;
    }
   
  }
  
}













void loop(){
  btn_cons_1 = digitalRead(2);

        if(btn_cons_1 == 1 && btn_cons_1 != var_temp){
            Serial.println("Wartosc 1");
        }
        if(btn_cons_1 == 0 && btn_cons_1 != var_temp){
            Serial.println("Wartosc 0");
        }



