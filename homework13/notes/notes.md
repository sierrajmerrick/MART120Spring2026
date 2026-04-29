# what are arrays

an array is a collection of like items 

ex:
    function setup()
        {
            var myNumbers = []; 

            var myApples = ['Fuji','Golden','Macintosh','Pink Lady'];  // this an array of strings
        }

- the first instance is an empty array
- the second array we have added values to it already 

# why use arrays

arrays can be useful for the circle example from last week because we could create arrays instead of having multiple variable per each shape 
- ex:
    - var x = 50;
      var y = 50;
      var diameter = 25;
      var x1 = 150;
      var y1 = 150;
      var diameter1 = 125;

# working with arrays 

solution to example above:
- var myXs = [];
  var myYs = [];
  var myDiameters = [];

  //add values to the arrays
  function setup()
    {
        createCanvas(800,600);
        myXs[0] = 50;
        myYs[0] = 50;
        myDiameters[0] = 25;

        myXs[1] = 150;
        myYs[1] = 150;
        myDiameters[1] = 125;
    }

  //use the values in the arrays
  function draw()
    {
        circle(myXs[0],myYs[0], myDiameters[0]);
        circle(myXs[1],myYs[1], myDiameters[1]);
    }

how could we streamline our function draw()?

- by using a for loop to iteration through the array instead of inputing them one by one:

  function draw()
    {
        for(var i = 0; i < myXs.length; i++)
        {
            circle(myXs[i],myYs[i],myDiameters[i]);
        }
    }

    - this method allows one print multiple indices without having to change any code later
    - note that length is used for the loop instead of 2
        - length is a built in property of the array & it returns how many items are in the array
            - if more items are added to the array, it still prints w/out having to change anything in the for loop

how could we streamline the creation of our array objects?
- by using another for loop
    - ex:
         function setup()
        {
            createCanvas(800,600);
            var x = 50;
            var y = 50;
            var diameter = 25;
            for(var i = 0; i < 3; i++)
            {
                myXs[i] = x;
                myYs[i] = y;
                myDiameters[i] = diameter;
                x += 50;
                y += 50;
                diameter += 25;
            }
        }
        - automated the creation of array objects for 3 different arrays by iterating a set # of times per & incrementing each object by a set value (50, 50, 25)
            - the # of iterations determines the number of objects per array (ie i<3 produces 3 objects per array)