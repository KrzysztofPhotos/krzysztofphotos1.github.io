int val_potencjometer_1;
int val_potencjometer_2;
int variable_pot_1;
int variable_pot_2;

void setup() {
  pinMode(A1, INPUT);
  pinMode(A2, INPUT);
  Serial.begin(9600);
  variable_pot_1 = analogRead(A1);
  variable_pot_2 = analogRead(A2);
  
}


void loop() {
  val_potencjometer_1 = analogRead(A1);
  val_potencjometer_2 = analogRead(A2);

  if(variable_pot_1 == val_potencjometer_1){
    //Serial.println("Brak zmian");
    if(variable_pot_2 == val_potencjometer_2){
     //Serial.println("Brak zmian");
    }
    else {
      Serial.println("Zmiany na potencjometrze nr 2");  
      variable_pot_2 = analogRead(A2);
    }

    
  }
  else {
    Serial.println("Zmiany na potencjometrze nr 1");    
    variable_pot_1 = analogRead(A1);
  }


  
  //Serial.println("Potencjometr 1");
  //Serial.println(val_potencjometer_1);
  //Serial.println("Potencjometr 2");
  //Serial.println(val_potencjometer_2);
  delay(100);
}
