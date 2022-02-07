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
  
  

//  if(btn_cons_1 == 1 && var_temp == 0){
//  Serial.println("Wartosc 1");
//    int var_temp = 1
//  }
  
  if(btn_cons_1 == 1){
    //przycisk jest wciesniety (1)
    
    if(btn_cons_1 != var_temp){
      //jesli wartosc wcisnietego przysiku jest rozna od tego poczatkowego to wykonaj:
      
      
     //przycisk zostal przelaczony
      Serial.println("Wartosc 1");
      
      //nadpisuje wartosc "poczatkowa"
      var_temp = 1; 
        }
    }
    
  
//  if(btn_cons_1 == 0 && var_temp == 1){
//  Serial.println("Wartosc 0");
//    int var_temp = 0
//  }
  
  
  
  
 if(btn_cons_1 == 0){
    //przycisk jest wciesniety (1)
    
    if(btn_cons_1 != var_temp){
      //jesli wartosc wcisnietego przysiku jest rozna od tego poczatkowego to wykonaj:
      
      
     //przycisk zostal przelaczony
      Serial.println("Wartosc 0");
      
      //nadpisuje wartosc "poczatkowa"
      var_temp = 0; 
        }
    }
  
}













//void loop(){
//  btn_cons_1 = digitalRead(2);
//
//        if(btn_cons_1 == 1 && btn_cons_1 != var_temp){
//            Serial.println("Wartosc 1");
//        }
//        if(btn_cons_1 == 0 && btn_cons_1 != var_temp){
//            Serial.println("Wartosc 0");
//        }



