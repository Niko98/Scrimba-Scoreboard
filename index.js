let homeScore = 0
let guestScore = 0

let homeScoreEl = document.getElementById("homeScore")
let guestScoreEl = document.getElementById("guestScore")

function incrementHomeScoreByOne(){
    incrementHomeScore(1)
}

function incrementHomeScoreByTwo(){
    incrementHomeScore(2)
}

function incrementHomeScoreByThree(){
    incrementHomeScore(3)
}

function incrementGuestScoreByOne(){
    incrementGuestScore(1)
}

function incrementGuestScoreByTwo(){
    incrementGuestScore(2)
}

function incrementGuestScoreByThree(){
    incrementGuestScore(3)
}

function incrementHomeScore(points){
    console.log("Home added " + points)
    homeScore += points
    
    homeScoreEl.textContent = homeScore
}

function incrementGuestScore(points){
    console.log("Guest added " + points)
    guestScore += points
    
    guestScoreEl.textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}