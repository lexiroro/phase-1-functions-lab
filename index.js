// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber<42) {
        return 42-blockNumber;
    } else {
      return blockNumber - 42;
    }
}

function distanceFromHqInFeet(feetNumber) {
    distanceFromHqInBlocks(feetNumber);
    if (feetNumber<42) {
        return (42-feetNumber)*264;
    } else {
        return (feetNumber- 42)*264;
    }
}

function distanceTravelledInFeet(start,destination) {
    if (destination>start) {
        return (destination-start)*264;
    }
    else if (start>destination) {
        return (start-destination)*264;
    }
}

function calculatesFarePrice(start,destination) {
    if (distanceTravelledInFeet(start,destination)<400) {
        return (0)
    }
    else if (400<=distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start, destination)<=2000) {
        return ((distanceTravelledInFeet(start,destination)-400)*.02)
    }
    else if (2000<=distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination)<2500) {
        return(25)
    }
    else if (distanceTravelledInFeet(start,destination)>2500) {
        return ('cannot travel that far')
    }
}