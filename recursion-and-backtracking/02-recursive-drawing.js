function drawFigure(n){
    if(n <= 0) {
        return;
    }
    console.log('*'.repeat(n));    
    drawFigure(n - 1);
    console.log('#'.repeat(n));
}

drawFigure(3);
drawFigure(5);