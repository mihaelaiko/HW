// Represent the data, about 5 rectangles with next properties:

//       id: r1, width: 40, height: 20
//       id: r2, width: 30, height: 30
//       id: r3, width: 10, height: 80
//       id: r4, width: 90, height: 2
//       id: r5, width: 20, height: 20

// Write a function which will return the id of the rectangle with biggest area.

// Expected output: r2

let rectangles = [
    {id : "r1",
     width: 40,
     height:20,
     calcArea(){ return this.height*this.width;}
     
    },
      {id : "r2",
     width: 30,
     height:30,
      calcArea(){ return this.height*this.width;}
    }, 
    {id : "r3",
     width: 10,
     height:80,
     calcArea(){ return this.height*this.width;}
    }, 
    {id : "r4",
     width: 90,
     height:2,
     calcArea(){ return this.height*this.width;}
    }, 
    {id : "r5",
     width: 20,
     height:20,
     calcArea(){return this.height*this.width;}
    }  
  ];
  
  const maxArea = function(){
    let max = rectangles[0].calcArea();
   let id = rectangles[0].id;
  
          for (let i = 0; i <rectangles.length; i++) {
            if ( rectangles[i].calcArea()>max){
              max = rectangles[i].calcArea();  
              id = rectangles[i].id;
            } 
          }console.log(id);
  }
  maxArea();
  