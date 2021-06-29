var shooter
var invaders = []
var bullets = []
function setup(){
createCanvas(600,400)
shooter = new Shooter()
//noicebullets = new Bullets(width/2,height/2)
for(var i=0; i<5; i++){
    invaders[i] = new Invaders(i*80+150,60)
    }
}
function draw(){
background(51)
shooter.show()
shooter.move()
for(var i=0; i<bullets.length; i++){
    bullets[i].show() 
    bullets[i].move()
    for(var j=0; j<invaders.length; j++){
        if(bullets[i].hits(invaders[j])){
            invaders[j].grow()
            bullets[i].vanish()
       console.log("bulletsHit")     
        }
    }
}
var edge = false
for(var i=0; i<invaders.length; i++){
    invaders[i].show()
    invaders[i].move()
    if(invaders[i].x>width || invaders[i].x<0){
        edge = true
    }
}
    if(edge){
        for(var i=0; i<invaders.length; i++){
            invaders[i].shiftDown()
        }
             
    }
for(var i=bullets.length-1; i>=0; i--){
    if(bullets[i].toDelete){
        bullets.splice(i,1)
    }
}
}
function keyReleased(){
    shooter.setDir(0)
}
function keyPressed(){
    if(key===' '){
        var bullet = new Bullets(shooter.x,height)
        bullets.push(bullet)
    }
    if(keyCode === RIGHT_ARROW)
    {
        shooter.setDir(1)
    }
    else if (keyCode === LEFT_ARROW ){
        shooter.setDir(-1)
    }
}