function Circcle(radius) {
    this.radius = radius
    let defaultlocation = { x: 0, y: 0 }
   
    this.draw = function() {
        computeOptimumLocation(0.1)
        defaultlocation()
        console.log('draw')
    }
}