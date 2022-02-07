

void setup()
   {
    Serial.begin(9600);
    pinMode(2, OUTPUT);
   }

void loop() 
   {
    int a0=analogRead(A0);
    int val=a0;
    if(a0==47)
     {
      //przycisk 1
      val=1;
     }
    if(a0==85)
     {
      //przycisk 2
      val=2;
     }
    if(a0==146)
     { 
      //przycisk 3
      val=3;
     }
    if(a0==227)
     {
      //przycisk 4
      val=4;
     }
    if(a0==268)
     {
      //przycisk 5
      val=5;
     }
    if(a0==279)
     {
      //przycisk 6
      val=6;
     }
    if(a0==298)
     {
      //przycisk 7
      val=7;
     }
    if(a0==329) 
     {
      //przycisk 8
      val=8;
     }
    if(a0>=500) 
     {
      //brak wcisniecia przycisku
      val=0;
     }
    Serial.println(val);
    delay(1);
   }
