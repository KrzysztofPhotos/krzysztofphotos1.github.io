

void setup()
   {
    Serial.begin(9600);
    pinMode(A0, INPUT);
    
   }

void loop() 
   {
    int a0=analogRead(A0);
    int val=a0;
    if(a0>44 && a0<70)
     {
      //przycisk 1
      val=1;
     }
    if(a0>89 && a0<115)
     {
      //przycisk 2
      val=2;
     }
    if(a0>179 && a0<200)
     { 
      //przycisk 3
      val=3;
     }
    if(a0>224 && a0<241)
     {
      //przycisk 4
      val=4;
     }
    if(a0>259 && a0<272)
     {
      //przycisk 5
      val=5;
     }
    if(a0>274 && a0<284)
     {
      //przycisk 6
      val=6;
     }
    if(a0>293 && a0<301)
     {
      //przycisk 7
      val=7;
     }
    if(a0>319 && a0<336)
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
