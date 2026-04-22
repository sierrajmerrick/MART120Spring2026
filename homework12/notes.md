
# Functions

## What are functions

Functions combine multiple lines of code to perform an action 
- Programming languages which primarily use functions are called functional programming languages
- - example: haskell
- all programming functions have input & output
- - function contains instructions used to create the output from its input
- - it is possible to build entire software applications w/ only functions


## Types of functions

Built in

User defined

with parameters
- parameters are variables that are passed into the function
- ex:   function CircleSquare(circleX, circleY, diameter, squareX, squareY, sideLength)
        {
            circle(circleX, circleY, diameter);
            square(squareX, squareY, sideLength);
        }
- - we can send in parameters to change the location of the circle and the square.

without parameters
- ex:   function CircleSquare()
        {
            circle(100,200,25);
            square(250,350,50);
        }
- - a single circle and square are drawn to the screen in a specific location.

## Why use functions?

functions:
- can be used over & over
- reduces duplicate code
- reduces bugs that can arise

## Using functions

when a function is defined, it starts with a keyyword function, and the body (the part that performs the action) is in between the curly braces

when calling a funciton, the function name is printed, & then the name is followed by parentheses w/ or w/out parameters 