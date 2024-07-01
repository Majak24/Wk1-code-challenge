function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const pointsPer5Km = 1;
    let demeritPoints = 0;
    
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const excessSpeed = speed - speedLimit;
        demeritPoints = Math.floor(excessSpeed / 5);
        
        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

// Example usage:
let speed = 80;
calculateDemeritPoints(speed);

speed = 65;
calculateDemeritPoints(speed);

speed = 120;
calculateDemeritPoints(speed);
