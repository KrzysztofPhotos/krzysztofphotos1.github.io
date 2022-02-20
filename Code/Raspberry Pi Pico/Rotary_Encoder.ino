#define outputA 6
#define outputB 7

 int counter = 0; 
 int aState;
 int aLastState;  

 void setup() { 
   pinMode (outputA,INPUT);
   pinMode (outputB,INPUT);
   
   Serial.begin(115200);
   aLastState = digitalRead(outputA);   
 } 

 void loop() { 


  
   aState = digitalRead(outputA); // Reads the "current" state of the outputA
   // If the previous and the current state of the outputA are different, that means a Pulse has occured
   if (aState != aLastState){     
     // If the outputB state is different to the outputA state, that means the encoder is rotating clockwise
     if (digitalRead(outputB) != aState) { 
      //tutaj dodać wcisniecie klawisza
       counter ++;
     } else {
      //tutaj dodac wciesniecie klawisza
       counter --;
     }
   } 
   aLastState = aState; // Updates the previous state of the outputA with the current state


   
   digitalWrite(LED_BUILTIN, HIGH);
 }
