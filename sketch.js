var compLogo,gameLogo,pb,
state='login'

function preload(){
    compLogo=loadImage('assets/logo.png')
    gameLogo=loadImage('assets/gameLogo.png')
    pb=loadImage('assets/playButton.png')
}

function setup(){
    createCanvas(innerWidth,innerHeight-1)
    if(state=='login'){
        usernameIn=createInput()
        loginButton=createImg('https://raw.githubusercontent.com/aashman-thakur/aashman/master/NewObject-1-0.png')
    }
}

function draw(){
    background(0)
    image(compLogo,10,10,75,75)
    if(state=='login'){
        image(gameLogo,innerWidth/2-500,100,500,380)
        fill('#ffff00')
        textFont('Georgia')
        push() 
        textSize(60)
        text('The OASIS',innerWidth/2+50,150)
        pop()
        text('Enter Username',innerWidth/2+100,200)
        usernameIn.position(innerWidth/2+100,210)
        usernameIn.size(200)
        usernameIn.style('backgroundColor','#000B98','borderWidth','20','border-color','white')
        loginButton.position(innerWidth/2+150,300)
        loginButton.mousePressed(()=>{state='home'})
    }
    if(state=='home'){
        usernameIn.remove()
        loginButton.remove()
        rect(0,0,innerWidth,100)
        image(compLogo,10,10,75,75)
    }
    drawSprites()
}