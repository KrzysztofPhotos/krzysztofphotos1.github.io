void setup()
   {
    Serial.begin(115200);
    pinMode(A0, INPUT);
    
   }

void loop() 
   {
    int a0=analogRead(A0);
    int val=a0;
    
    Serial.println(val);
    delay(1);
   }
