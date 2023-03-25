// code your solution here
function saturdayFun(whatFun) {
    let satString;
    if (typeof whatFun === 'string'){
        satString = `This Saturday, I want to ${whatFun}!`
    }
    else {
        satString = "This Saturday, I want to roller-skate!"
    }
    return satString;
}

function mondayWork(readyToWork){
    let monString;
    if (typeof readyToWork === 'string'){
        monString = `This Monday, I will ${readyToWork}.`
    }
    else {
        monString = "This Monday, I will go to the office."
    }
    return monString;
}

function wrapAdjective(symbol){
    const part1 = "You are";
    let String;
    return function(adj){
        switch (adj){
            case (symbol === "*"):
                adj = "a hard worker"
                break;
            case (symbol === "||"):
                adj = "a dedicated programmer"
                break;
            default:
                adj = adj
        }
        String = (`${part1} ${symbol}${adj}${symbol}!`);
        return String;
    }
}     