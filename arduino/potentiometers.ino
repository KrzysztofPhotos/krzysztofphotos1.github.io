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

  if(val_potencjometer_1 > variable_pot_1 + 20 || val_potencjometer_1 < variable_pot_1 - 20){
    variable_pot_1 = analogRead(A1);
    Serial.println("A1");
    //tutaj akcja wcisniecia przycisku po obrocie potencjometru 1
  }
  else {
    Serial.println("Brak zmian na potencjometrze 1");
  }

  if(val_potencjometer_2 > variable_pot_2 + 20 || val_potencjometer_2 < variable_pot_2 - 20){
    variable_pot_2 = analogRead(A2);
    Serial.println("A2");
    //tutaj akcja wcisniecia przycisku po obrocie potencjometru 2
  }
  else {
    Serial.println("Brak zmian na potencjometrze 2");
  }
  
  
}
