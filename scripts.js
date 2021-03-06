document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('circle-btn').addEventListener('click', createCircle);
    document.getElementById('rectangle-btn').addEventListener('click', createRectangle);
    document.getElementById('square-btn').addEventListener('click', createSquare);
    document.getElementById('triangle-btn').addEventListener('click', createTriangle);
    var canvas = document.getElementById('drawingSpace');
    //gets information from input field in HTML
    var circleRadius = document.getElementById('CircleRadius');
    var rectangleWidth = document.getElementById('recWidth');
    var rectangleHeight = document.getElementById('recHeight');
    var squareSide = document.getElementById('squareSide');
    var triangleHeight = document.getElementById('triangleHeight');

    // // get random position can't get this to work'
    // function getRandomPosition(element) {
	// var x = canvas.offsetHeight-element.clientHeight;
	// var y = canvas.offsetWidth-element.clientWidth;
	// var randomX = Math.floor(Math.random()*x);
	// var randomY = Math.floor(Math.random()*y);
	// return [randomX,randomY];
    // }

    //create generic Shape class
    var Shape = function(width, height) {
        this.width = width;
        this.height = height;
    }
    //draws or creates the shape
    Shape.prototype.drawShape = function() {
        this.div = document.createElement('div');
        this.div.classList.add(this.cssClass);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.addEventListener('dblclick', this.remove.bind(this));
	    // this.div.setAttribute("style", "position:absolute;");
	    // this.div.setAttribute("src", "some-image.jpg");
	    // var xy = getRandomPosition(this.div);
	    // this.div.style.top = xy[0] + 'px';
	    // this.div.style.left = xy[1] + 'px';
        

        document.getElementById('drawingSpace').appendChild(this.div);
    }
    //create specific Circle class
    var Circle = function(radius) {
        Shape.call(this, radius * 2, radius * 2);
        this.cssClass = 'circle';
        this.drawShape();
    }
    //no idea what this does, but we have to have it
    Circle.prototype = Object.create(Shape.prototype);
    Circle.prototype.constructor = Circle;
    //function to create the Circle
    function createCircle() {
        new Circle(circleRadius.value);
    }

    //create specific Rectangle class
    var Rectangle = function(width, height) {
        Shape.call(this, width, height);
        this.cssClass = 'rectangle';
        this.drawShape();
    }
    //have to have these
    Rectangle.prototype = Object.create(Shape.prototype);
    Rectangle.prototype.constructor = Rectangle;
    //function to create the Rectangle
    function createRectangle() {
        new Rectangle(rectangleHeight.value, rectangleWidth.value);
    }

     //create specific Square class
    var Square = function(side) {
        Shape.call(this, side, side);
        this.cssClass = 'square';
        this.drawShape();
    }
    //no idea what this does, but we have to have it
    Square.prototype = Object.create(Shape.prototype);
    Square.prototype.constructor = Square;
    //function to create the Square
    function createSquare() {
        new Square(squareSide.value);
    }

    var Triangle = function(triangleHeight) {
        Shape.call(this, 0, 0);
        this.cssClass = 'triangle';
        this.drawShape();
        // this.cssClass = "triangle"
        var isoPx = triangleHeight + "px";
        this.div.style.borderTopWidth = isoPx;
        this.div.style.borderRightWidth = 0;
        this.div.style.borderBottomWidth = 0;
        this.div.style.borderLeftWidth = isoPx;
    }
    //have to have these
    Triangle.prototype = Object.create(Shape.prototype);
    Triangle.prototype.constructor = Triangle;
    //function to create the Triangle
    function createTriangle() {
        new Triangle(triangleHeight.value);
    }

    //to remove div
    Shape.prototype.remove = function() {
        this.div.remove();
    }

});//end of document.ready