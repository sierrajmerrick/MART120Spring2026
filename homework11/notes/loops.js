var x = 0;
    function setup()
    {
        createCanvas(600,800);
        frameRate(10);
    }
    function draw()
    {
       
        background(255);
        // increase the numbers it prints
        for(var i = 0; i < 5; i++)
        {
          
            textSize(28);
            text(i,x,100);
            x+=100;
          
        }
        x = 0;
      
        // have it print something else
        var i = 5;
        while(i < 10)
        {
            textSize(28);
            text(i,x,200);
            x+=100;
            i++;
        }
        x = 0;
    }