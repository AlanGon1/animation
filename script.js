var jog
var vel
var dx
var dy
var px
var py
var anima

function inicia() {
    vel = 3
    dx = 1
    dy = 0
    px = 0
    py = 0
    estado = 1
    jog = document.querySelector("div#jogador")
    jog.addEventListener("click", moverParar)
    document.querySelector("#iniciar").addEventListener("click", mover)
    document.querySelector("#parar").addEventListener("click", parar)
    /*jog.addEventListener("click", function() {
        if(vel>0){
            cancelAnimationFrame(anima)                    
        }
    })*/         
    game()
}

function moverParar(){
    if (estado) {            
        estado=0
        jog.style.backgroundColor="#f00"
        cancelAnimationFrame(anima)
    } else {
        estado=1
        jog.style.backgroundColor="#00f"
        anima=requestAnimationFrame(game)
    }
}        

function mover() {
    if (!estado) {            
        estado=1
        jog.style.backgroundColor="#00f"
        anima=requestAnimationFrame(game)
    }
}

function parar() {
    estado=0
    jog.style.backgroundColor="#f00"
    cancelAnimationFrame(anima)
}

function game() {
    px+=dx*vel
    //py+=dy*vel
    jog.style.left=px+"px"
    //jog.style.top=py+"px"
    if(px>800){
        dx=-1
    } else if(px < 0){
        dx=1
    }
    anima=requestAnimationFrame(game)
}

    

function gira(){
    var obj=document.getElementById("quad")
    let ang=0
    let animaca
    obj.style.transform="rotate("+ang+"deg)"
    ang++
    if(ang>360){
        ang=0
    }
    animaca=requestAnimationFrame(gira)
}
gira()

window.addEventListener('load', inicia)