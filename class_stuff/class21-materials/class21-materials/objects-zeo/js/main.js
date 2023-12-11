//Create a stopwatch object that has four properties and three methods
let stopwatch = {}
stopwatch.time = 0;
stopwatch.interval = 0;
stopwatch.running = false;
stopwatch.start = function() {
    if (!this.running) {
        this.interval = setInterval(() => {
            this.time++;
            console.log(this.time);
        }, 1000);
        this.running = true;
    }
}
stopwatch.stop = function() {
    if (this.running) {
        clearInterval(this.interval);
        this.running = false;
    }
}
stopwatch.reset = function() {
    this.time = 0;
    this.running = false;
}

//stopwatch.start();
// stopwatch.stop();
// stopwatch.start();
// stopwatch.stop();
// stopwatch.reset();
