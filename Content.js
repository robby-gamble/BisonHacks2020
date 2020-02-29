var BiasScore = -15; //score set for presentation

function LiberalAdd() {
    //increase score to Liberal side
    BiasScore+= 5;
}

function NeutralAdd() {
    //brings score closer to neutral point
    if(BiasScore < 0) {
        BiasScore+= 5;
    }
    else if(BiasScore > 0 ) {
        BiasScore-= 5;
    }
    
}

function ConservativeAdd() {
    //decreases score to Conservative side
    BiasScore-= 5;
}

function DisplayScore() {
    return BiasScore;
}