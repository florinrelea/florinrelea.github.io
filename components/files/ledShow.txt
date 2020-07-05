//
//
//      DEVELOPED BY: Relea Florin Iacob
//
//
#include <FastLED.h>

#define NUM_LEDS 30
#define LED_PIN 2
int middleOfStrip = NUM_LEDS/2;
CRGB led[NUM_LEDS];

//funtions
void clearStrip(){
for(int i=0;i<=NUM_LEDS;i++){
    led[i]=CRGB(0,0,0);
    }
    FastLED.show();
}

void rogvaiv(int sleepTime){
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(255,0,0);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(255,140,0);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(255,215,0);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(0,255,0);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(0,0,255);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(75,0,130);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
    FastLED.setBrightness(0);
    FastLED.show();
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]= CRGB(238,130,238);
    }
    FastLED.setBrightness(80);
    FastLED.show();
    FastLED.delay(sleepTime);
  }
void effect1(int wait, int red, int green, int blue){
  // function parameters (delay, redIntensity, greenIntensity, blueIntensity);
    for(int i=0;i<=middleOfStrip;i++){
        led[i]= CRGB(red,green,blue);
        led[NUM_LEDS-i]= CRGB(red,green,blue);
        FastLED.delay(wait);
        led[i]= CRGB(0,0,0);
        led[NUM_LEDS-i]= CRGB(0,0,0);
     } 
}
void effect2(int wait, int red, int green, int blue){
    for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(red,green,blue);
        FastLED.show();
        FastLED.delay(wait);
    }
    for(int l=0;l<=NUM_LEDS;l++){
    led[l]=CRGB(0,0,0);
    }
    FastLED.show();
}
void effect2Backwords(int wait, int red, int green, int blue){
    for(int i=NUM_LEDS;i>=0;i--){
        led[i]= CRGB(red,green,blue);
        FastLED.show();
        FastLED.delay(wait);
    }
    for(int l=0;l<=NUM_LEDS;l++){
    led[l]=CRGB(0,0,0);
    }
    FastLED.show();
}
void runningDot(int wait, int red, int green, int blue){
    for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(red,green,blue);
      FastLED.show();
      FastLED.delay(wait);
      led[i]= CRGB(0,0,0);
      FastLED.show();
      }
}
void runningDotReverse(int wait, int red, int green, int blue){
    for(int y=NUM_LEDS;y>=0;y--){
      led[y]= CRGB(red,green,blue);
      FastLED.show();
      FastLED.delay(wait);
      led[y]= CRGB(0,0,0);
      FastLED.show();
      }
}
void effectShrink(int wait, int red, int green, int blue){
    for(int i=0;i<=middleOfStrip;i++){
      led[i]= CRGB(red,green,blue);
      led[NUM_LEDS-i]= CRGB(red,green,blue);
      FastLED.delay(wait);
      }
}
void jumpEffect(int wait, int red, int green, int blue){
  for(int i=0;i<=NUM_LEDS;i+=2){
        led[i]= CRGB(red,green,blue);
        FastLED.show();
        FastLED.delay(wait);
        led[i]= CRGB(0,0,0);
        FastLED.show();
    }
  }
void jumpTail(int wait, int red, int green, int blue){
    for(int i=0;i<=NUM_LEDS;i+=2){
        led[i]= CRGB(red,green,blue);
        FastLED.show();
        FastLED.delay(wait);
    }
    for(int i=-1;i<=NUM_LEDS;i+=2){
        led[i]= CRGB(green,red,blue);
        FastLED.show();
        FastLED.delay(wait);
    }
  }
void fade(int wait, int red, int green, int blue){
    FastLED.setBrightness(0);
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]=CRGB(red,green,blue);
    }
    for(int i=0;i<=255;i+=15){
    FastLED.setBrightness(i);
    FastLED.show();
    FastLED.delay(wait);
    }
}
void fadeBackwords(int wait, int red, int green, int blue){
    for(int i=0;i<=NUM_LEDS;i++){
    led[i]=CRGB(red,green,blue);
    }
    for(int i=255;i>=0;i-=15){
    FastLED.setBrightness(i);
    FastLED.show();
    FastLED.delay(wait);
    }
}
void randomLeds(int wait, int red, int green, int blue){
    int choosen = random(0,NUM_LEDS);
    led[choosen]=CRGB(red,green,blue);
    FastLED.setBrightness(255);
    FastLED.show();
    FastLED.delay(wait);
    led[choosen]=CRGB(0,0,0);
}
void expandingEffect(int wait, int red, int green, int blue){
    FastLED.setBrightness(100);
    for(int i=0;i<=middleOfStrip;i++){
      for(int l=0;l<=i;l++){
          led[middleOfStrip-l]=CRGB(red,green,blue);
          led[middleOfStrip+l]=CRGB(red,green,blue);
          FastLED.show();
          FastLED.delay(wait);
      }
      for(int k=i;middleOfStrip-k<=middleOfStrip;k--){
          led[middleOfStrip-k]=CRGB(0,0,0);
          led[middleOfStrip+k]=CRGB(0,0,0);
          delay(wait);
          FastLED.show();
      }
      
    }
}
void undertaleStyle(int wait, int red, int green, int blue){
    int i=0;
    led[i]=CRGB(red, green, blue);
    led[i+1]=CRGB(red, green, blue);
    led[i+2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(wait);
    i+=3;
    led[i]=CRGB(red, green, blue);
    led[i+1]=CRGB(red, green, blue);
    led[i+2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(wait-20);
    i+=3;
    led[i]=CRGB(red, green, blue);
    led[i+1]=CRGB(red, green, blue);
    led[i+2]=CRGB(red, green, blue);
    FastLED.show();
    delay(wait+40);
    i+=3;
    for(int stopTime=wait;i<=21;i+=2){
    stopTime+=10;
    led[i]=CRGB(red, green, blue);
    led[i+1]=CRGB(red, green, blue);
    led[i+2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(stopTime);
    }
    for(int stopTime=wait-25;i<=30;i+=3){
      stopTime-=10;
      led[i]=CRGB(red, green, blue);
      led[i+1]=CRGB(red, green, blue);
      led[i+2]=CRGB(red, green, blue);
      FastLED.show();
      delay(stopTime);
    }
    for(int l=0;l<=NUM_LEDS;l++){
    led[l]=CRGB(0,0,0);
    }
    FastLED.show();
}
void undertaleStyleBackwords(int wait, int red, int green, int blue){
    int i=30;
    led[i]=CRGB(red, green, blue);
    led[i-1]=CRGB(red, green, blue);
    led[i-2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(wait);
    i-=3;
    led[i]=CRGB(red, green, blue);
    led[i-1]=CRGB(red, green, blue);
    led[i-2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(wait-20);
    i-=3;
    led[i]=CRGB(red, green, blue);
    led[i-1]=CRGB(red, green, blue);
    led[i-2]=CRGB(red, green, blue);
    FastLED.show();
    delay(wait+40);
    i-=3;
    for(int stopTime=wait;i>=9;i-=3){
    stopTime+=10;
    led[i]=CRGB(red, green, blue);
    led[i-1]=CRGB(red, green, blue);
    led[i-2]=CRGB(red, green, blue);
    FastLED.show();
    FastLED.delay(stopTime);
    }
    for(int stopTime=wait-25;i>=0;i-=3){
      stopTime-=10;
      led[i]=CRGB(red, green, blue);
      led[i-1]=CRGB(red, green, blue);
      led[i-2]=CRGB(red, green, blue);
      FastLED.show();
      delay(stopTime);
    }
    for(int l=0;l<=NUM_LEDS;l++){
    led[l]=CRGB(0,0,0);
    }
    delay(50);
    FastLED.show();
}
  
//functions-finish

//SONGS *****************************************
    //Song 1: Summertime Sadness -> https://www.youtube.com/watch?v=LlBioz0OsAg
    /*
void summertimeSadness(){
  for(int k=0;k<=1;k++){
    for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(255,0,0);
      }
     for(int i=0; i<=50;i++){
       FastLED.setBrightness(i);
       delay(50);
       FastLED.show();
       }
     for(int i=50; i>=0;i--){
       FastLED.setBrightness(i);
       delay(50);
       FastLED.show();
       }
      clearStrip();
     for(int i=0;i<=middleOfStrip;i++){
      led[i]= CRGB(255,140,0);
      }
     for(int i=80; i>=0;i-=2){
       FastLED.setBrightness(i);
       delay(40);
       FastLED.show();
       }
     for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(0,0,0);
      }
     for(int i=middleOfStrip;i<=NUM_LEDS;i++){
      led[i]= CRGB(255,255,0);
      }
     for(int i=0; i<=80;i+=2){
       FastLED.setBrightness(i);
       delay(50);
       FastLED.show();
       }
     for(int i=80; i>=0;i-=2){
       FastLED.setBrightness(i);
       delay(40);
       FastLED.show();
       }
      for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(0,255,0);
      }
      for(int i=0; i<=50;i+=2){
       FastLED.setBrightness(i);
       delay(120);
       FastLED.show();
       }
      for(int i=50; i>=20;i-=2){
       FastLED.setBrightness(i);
       FastLED.delay(250);
       FastLED.show();
       }
      FastLED.setBrightness(255);
      FastLED.show();
      FastLED.delay(1000);
      FastLED.setBrightness(0);
      FastLED.show();
      for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(0,0,255);
      }
      FastLED.setBrightness(255);
      FastLED.show();
      FastLED.delay(1000);
      FastLED.setBrightness(0);
      FastLED.show();
      for(int i=0;i<=NUM_LEDS;i++){
      led[i]= CRGB(75,0,130);
      }
      FastLED.setBrightness(255);
      FastLED.show();
      FastLED.delay(1000);
      FastLED.setBrightness(0);
      FastLED.show();
      rogvaiv(1000);
      rogvaiv(200);
      rogvaiv(600);
      for(int i=0;i<=20;i++){
      rogvaiv(200);
      }
      for(int i=0;i<=17;i++){
      rogvaiv(100);
      }
      for(int i=80; i>=0;i-=5){
       FastLED.setBrightness(i);
       delay(100);
       FastLED.show();
       }
      clearStrip();
      FastLED.setBrightness(80);
      for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(255,0,0);
        FastLED.show();
        FastLED.delay(50);
        led[i]= CRGB(0,0,0);
        FastLED.show();
        }
      for(int i=NUM_LEDS;i>=0;i--){
        led[i]= CRGB(255,0,0);
        FastLED.show();
        FastLED.delay(50);
        led[i]= CRGB(0,0,0);
        FastLED.show();
        }
      FastLED.setBrightness(255);
      for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(0,128,128);
        FastLED.show();
        FastLED.delay(50);
        }
       for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(255,69,0);
        FastLED.show();
        FastLED.delay(50);
        led[i]= CRGB(0,0,0);
        FastLED.show();
        }
       for(int i=NUM_LEDS;i>=0;i--){
        led[i]= CRGB(0,128,128);
        FastLED.show();
        FastLED.delay(50);
        }
       for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(0,255,0);
        FastLED.show();
        FastLED.delay(50);
        led[i]= CRGB(0,0,0);
        FastLED.show();
        }
  
      effect1(50,0,250,154);
      effect1(40,0,250,154);
      effect1(30,0,250,154);
       for(int t=0;t<=6;t++){
          effect1(20,0,250,154);
       }
      runningDot(50,200,55,20);
      runningDotReverse(50,200,55,20);
      runningDot(100,255,0,0);
      runningDotReverse(10,255,0,0);
      effectShrink(50,255,0,0);
      effectShrink(50,0,255,0);
      effectShrink(50,0,0,255);
      clearStrip();
      FastLED.setBrightness(255);
      jumpEffect(100,255,0,0);
      for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(0,0,0);
      }
      FastLED.setBrightness(80);
      jumpTail(100,0,255,0);
      FastLED.setBrightness(255);
      effectShrink(50,0,0,255);
      fade(50,107,155,194);
      fadeBackwords(50, 107, 155, 194);
      FastLED.setBrightness(255);
      runningDot(10,255, 0, 0);
      runningDotReverse(5,255, 0, 0);
      runningDot(10,0, 255, 0);
      runningDotReverse(5,0, 255, 0);
      runningDot(10,0, 0, 255);
      runningDotReverse(5,0, 0, 255);
      runningDot(10,102, 0, 51);
      runningDotReverse(5,102, 0, 51);
      runningDot(10,204, 51, 153);
      runningDotReverse(5,204, 51, 153);
      runningDot(10,204, 51, 153);
      runningDotReverse(5,204, 51, 153);
      runningDot(10,255, 153, 255);
      runningDotReverse(5,255, 153, 255);
      runningDot(10,0, 102, 255);
      runningDotReverse(5,0, 102, 255);
      runningDot(10,0, 255, 255);
      runningDotReverse(5,0, 255, 255);
      runningDot(10,102, 255, 102);
      runningDotReverse(5,102, 255, 102);
      runningDot(10,51, 51, 0);
      runningDotReverse(5,51, 51, 0);
      runningDot(10,255, 255, 0);
      runningDotReverse(5,255, 255, 0);
      runningDot(10,153, 102, 51);
      runningDotReverse(5,153, 102, 51);
      runningDot(10,128, 0, 0);
      runningDotReverse(5,128, 0, 0);
      runningDot(10,0, 51, 102);
      runningDotReverse(5,0, 51, 102);
      runningDot(10,255, 51, 153);
      runningDotReverse(5,255, 51, 153);
      runningDot(10,153, 51, 51);
      runningDotReverse(5,153, 51, 51);
      FastLED.setBrightness(255);
      expandingEffect(40, 102, 0, 102);
      fadeBackwords(100,153, 51, 51);
  }
      for(int i=0;i<=NUM_LEDS;i++){
        led[i]= CRGB(0,0,0);
       }
}
// Song 2: Megalovania Remix -> ...
void megalovania(){
    FastLED.delay(2500);
    for(int p=0;p<=5;p++){
    undertaleStyle(100,255,0,0);
    undertaleStyleBackwords(100,0,255,0);
    undertaleStyle(100,0,0,255);
    undertaleStyleBackwords(100,0,0,255);
    }
    int color2=0;
    int color3=255;
    for(int color1=0;color1<=252;color1+=7){
      color3-=15;
      effect2(20,color1,color2,color3);
      FastLED.delay(20);
      effect2Backwords(10,color1,color2,color3);
    }
for(int a=0;a<=1;a++){
    expandingEffect(20,0,255,0);
    for(int i=0;i<=30;i++){
    randomLeds(60,255,255,255);
    }
    effectShrink(40,0,255,0);
    effectShrink(30,0,0,255);
    clearStrip();
    for(int i=0;i<=15;i++){
      randomLeds(60,255,0,0);
    }
    for(int i=1;i<=25;i++){
      randomLeds(60,0,0,255);
    }
    jumpEffect(70,255,0,0);
    fadeBackwords(50,255,0,0);
    fade(50,0,255,0);
    clearStrip();
    jumpTail(100,0,255,0);
    clearStrip();
    effect1(50,0,0,255);
    for(int k=50;k>=10;k-=5){
      effect1(k,153, 0, 153);
    }
    for(int i=0;i<=35;i++){
      randomLeds(60,255,255,255);
    }
    for(int i=0;i<=8;i++){
      fadeBackwords(50,255,0,0);
      fadeBackwords(30,0,255,0);
      fadeBackwords(20,0,0,255);
    }
    clearStrip();
    for(int i=0;i<=170;i++){
      randomLeds(100,0,0,255);
    }
    for(int k=0;k<=12;k++){
      runningDot(10,0,0,255);
    }
}   
}
*/
  //Song 3: Infinity
void infinity(){
  int timer=70;
  for(int p=0;p<=5;p++){
    timer-=10;
    undertaleStyle(timer+50,255,0,0);
    undertaleStyleBackwords(timer+50,0,255,0);
    fade(timer,0,0,255);
    fadeBackwords(timer,0,0,255);
    clearStrip();
    FastLED.setBrightness(100);
    }
    for(int i=700;i>=300;i-=50){
      rogvaiv(i);
    }
    clearStrip();
    FastLED.setBrightness(255);
    for(int i=50;i>=15;i-=5){
      effectShrink(i,255,255,255);
      clearStrip();
    }
    expandingEffect(10,255,0,0);
    clearStrip();
    for(int i=20;i>=10;i-=2){
      runningDot(i,255,0,0);
      runningDotReverse(i,255,0,0);
    }
    FastLED.setBrightness(255);
    for(int i=0;i<=50;i++){
      randomLeds(30,255,255,255);
    }
    for(int i=0;i<=50;i++){
      randomLeds(30,255,0,0);
    }
    for(int i=0;i<=50;i++){
      randomLeds(30,0,0,255);
    }
    for(int i=0;i<=100;i++){
      randomLeds(30,255,255,255);
    }
    for(int i=0;i<=50;i++){
      randomLeds(30,0,255,0);
    }
    for(int i=0;i<=50;i++){
      randomLeds(30,0,0,255);
    }
    jumpTail(30,255,0,0);
}
//SONGS-FINISH **********************************
void setup() {
  FastLED.addLeds<NEOPIXEL, LED_PIN>(led, NUM_LEDS);
  //summertimeSadness();
  //megalovania();
  //clearStrip();
}
void loop() {
  /*
  for(int i=0;i<=100;i++){
  randomLeds(50,255,255,255);
  }
  effect1(50,0,255,0);
  effect2(20,255,0,0);
  effect2Backwords(20,0,0,255);
  runningDot(30,255,0,0);
  runningDotReverse(30,255,0,0);
  jumpEffect(50,0,255,0);
  jumpTail(50,0,0,255);
  clearStrip();
  fadeBackwords(50,255,0,0);
  fade(50,255,0,0);
  expandingEffect(40,0,255,0);
  */
  infinity();
  clearStrip();
} 
