function number(busStops){
    let passengers = 0;
    busStops.forEach(stop => {
      passengers += stop[0];
      passengers -= stop[1];
    });
    return passengers;
  }
    export default number;