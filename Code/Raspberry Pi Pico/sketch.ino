

int val;
int encoder0PinA = 2;
int encoder0PinB = 3;
int encoder0Pos = 0; 
int encoder0PinALast = LOW;
int n = LOW;
int btn;

void setup() {
  pinMode (encoder0PinA, INPUT);
  pinMode (encoder0PinB, INPUT);
  pinMode (1, INPUT);
  Serial.begin (115200);
}

void loop() {
  btn = digitalRead(1);
  Serial.println(btn);
//napierdalają sie jedynki, jeśli bedzie wcisiety - wartosc to 0
  
  n = digitalRead(encoder0PinA);
  if ((encoder0PinALast == LOW) && (n == HIGH)) {
    if (digitalRead(encoder0PinB) == LOW) {
      //encoder0Pos--;
      Serial.println("LEFT");
    } else {
      Serial.println("RIGHT");
      //encoder0Pos++;
    }
    //Serial.println (encoder0Pos);
    
  }
  encoder0PinALast = n;
}
