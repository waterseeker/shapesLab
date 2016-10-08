$( document ).ready(function() {
    

// //draw a circle
// function drawCircle() {
//     var c=document.getElementById("drawingSpace");
//     var ctx=c.getContext("2d");
//     ctx.beginPath();
//     ctx.arc(100,75,50,0,2*Math.PI);
//     ctx.stroke();
}//end of drawCircle

 
package shapes {
    public class Shape {
        // puts the shape on the canvas
        public function Draw {   
        }
        //double click event listener to trigger removal 
        this.addEventListener('dblclick'),
        //remove shape from canvas on doubleclick
        public function Remove {
            this.remove()
        }
        
        
        }
    }


package shapes {
    public class Circle extends Shape {
        
        // all circles are purple
        this.color=purple;
        this.radius= inputfield.value;
}

package shapes {
    public class Triangle extends Shape {
        //all triangles are yellow
        this.color=yellow;
        this.height=inputfield.value;
        
        
    }
}

package shapes {
    public class Rectangle extends Shape {
        
        //all rectangles are green
        this.color=green;
        this.width=inputfield.value;
        this.height=inputfield.value;
    }
}

package shapes {
    public class Square extends Shape {
        //all squares are red
        this.color=red;
        this.sideLength=inputfield.value;
        
    }
}

});//end of document.ready