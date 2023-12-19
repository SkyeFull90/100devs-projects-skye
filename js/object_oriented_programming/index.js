const cirlce = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
}

cirlce.draw();  // Outputs: draw
// Factory Function

// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             console.log('draw');
//         }
//     };
// }

// const circle = createCircle(1);
// circle.draw();  // Outputs: draw
// Constructor Function

// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const another = new Circle(1);
// another.draw();  // Outputs: draw
// Dynamic Nature of Objects
