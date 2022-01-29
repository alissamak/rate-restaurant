let cashier = 0 //average score for cashier
let c_tot = 0 //total score for cashier
let c_num = 0 //number of ratings cashier has recieved
let overall = 0 //average score overall
let o_tot = 0 //total score for overall
let o_num = 0 //number of overall ratings has recieved

//recall cashier and overall scores for display ratings button
let cashierScore = document.getElementById('cashierScore')
let overallScore = document.getElementById('overallScore')

//recall cashier and overall buttons for display ratings button
let cashierScoreBtns = document.querySelectorAll('.cashier-button')
let overallScoreBtns = document.querySelectorAll('.overall-button')

//for loop for cashier adn overall score buttons and creating an array from class
for (let i=0; i< cashierScoreBtns.length; i++){
    cashierScoreBtns[i].addEventListener('click', function(e){
        c_tot = c_tot + Number(e.target.textContent) //c_tot += Number(e.target.textContent)
        c_num = c_num + 1 //c_num += 1
        cashier = c_tot / c_num
        cashierScore.textContent = cashier       
    })
}

for (let i=0; i< overallScoreBtns.length; i++){
    overallScoreBtns[i].addEventListener('click', function(e){
        o_tot = o_tot + Number(e.target.textContent) //o_tot += Number(e.target.textContent)
        o_num = o_num + 1 //o_num += o_num
        overall = o_tot / o_num
        overallScore.textContent = overall       
    })
}

//recalling individual cashier buttons
//recalling cashier button 2
/*let cashierScoreBtn1 = document.getElementById('cashier-1')
cashierScoreBtn1.addEventListener("click", function(){
    c_tot = c_tot + 1 //adding 1 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

//recalling cashier button 2
let cashierScoreBtn2 = document.getElementById('cashier-2')
cashierScoreBtn2.addEventListener("click", function(){
    c_tot = c_tot + 2 //adding 2 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

//recalling cashier button 3
let cashierScoreBtn3 = document.getElementById('cashier-3')
cashierScoreBtn3.addEventListener("click", function(){
    c_tot = c_tot + 3 //adding 3 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

//recalling cashier button 4
let cashierScoreBtn4 = document.getElementById('cashier-4')
cashierScoreBtn4.addEventListener("click", function(){
    c_tot = c_tot + 4 //adding 4 to score
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

//recalling overall button 1
let overallScoreBtn1 = document.getElementById('overall-1')
overallScoreBtn1.addEventListener("click", function(){
    o_tot = o_tot + 1 //adding 1 to score
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

//recalling overall button 2
let overallScoreBtn2 = document.getElementById('overall-2')
overallScoreBtn2.addEventListener("click", function(){
    o_tot = o_tot + 2 //adding 2 to score
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

//recalling overall button 3
let overallScoreBtn3 = document.getElementById('overall-3')
overallScoreBtn3.addEventListener("click", function(){
    o_tot = o_tot + 3 //adding 3 to score
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

//recalling overall button 4
let overallScoreBtn4 = document.getElementById('overall-4')
overallScoreBtn4.addEventListener("click", function(){
    o_tot = o_tot + 4 //adding 4 to score
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})*/

//recalling display button
let showHide = document.getElementById('show-hide')

showHide.addEventListener('click', function(){
    let scoresDiv = document.getElementById('show-scores')
    
    cashierScore.textContent = cashier
    overallScore.textContent = overall
    
    let btnText = showHide.textContent
    if(btnText == "Display Ratings"){
        scoresDiv.style.display = 'block'
        showHide.innerHTML = 'Hide Ratings'
    }
    else{
        scoresDiv.style.display = 'none'
        showHide.innerHTML = 'Display Ratings'
    }

})