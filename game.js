$(document).ready(function(){
    var html = $("#root");
    var toggleIcon = $("#toggle-dark");
    var toggleIcon2 = $("#toggle-dark2");
    toggleIcon.click(function(){
        html.toggleClass("dark");
        toggleIcon.toggleClass("fa-toggle-on");
        toggleIcon.toggleClass("fa-toggle-off");
        toggleIcon2.toggleClass("fa-sun");
        toggleIcon2.toggleClass("fa-moon");
    });
    // Dark threme end 
    
    //game coding start 
    function randInt(min,max){
        a = Math.floor(Math.random()*(max-min)) + min;
        return a
    }
    $('#button').click(function(){
        var randLable = randInt(0,100)
        console.log(randLable)
        $('#lable-text').text(randLable+'%');
        $('#fluid').css("height",randLable+'%')
    });
    function autoLable(){
    	var randLable = randInt(0,100)
        console.log(randLable)
        $('#lable-text').text(randLable+'%');
        $('#fluid').css("height",randLable+'%')
    }
	autoLable()
    var counter = 0
    var counter2 = 0
    $('#button2').click(function(){
    a = parseInt($('#lable-text').text())
    b = $('#user-input').val()
    dif = a-b
    if (b==''){
        alert('Invalid input!')
    }
    else{
        if (dif<=3 && dif >= 0){
            if (dif==0){
            	counter2 += 2
                $("#correct").text(counter2)
                alert("Exactly Correct! You got 2 point.")
                setTimeout(autoLable,4000)
            }
            else{
            	counter2 += 1
                $("#correct").text(counter2)
                alert("Nearly Correct.Yet you got 1 point.")
                setTimeout(autoLable,4000)
            }
        }
        else if(dif >= -3 && dif <= 0 ){
            if (dif==0){
            	counter2 += 2
                $("#correct").text(counter2)
                alert("Exactly Correct! You got 2 point.")
                setTimeout(autoLable,4000)
            }
            else{
            	counter2 += 1
                $("#correct").text(counter2)
                alert("Nearly Correct. Yet you got 1 point.")
                setTimeout(autoLable,4000)
            }
        }
        else{
            counter += 1
            $("#incorrect").text(counter)
            if (dif > 3){
                alert("Not Correct! \nGuessed too low. You got -1 point.")
                setTimeout(autoLable,4000)
            }
            else{
                alert("Not Correct! \nGuessed too high. You got -1 point.")
                setTimeout(autoLable,4000)
            }
        }
    }
        $('#score').text(counter2-counter)
    });
    
    $('.open').click(function(){
    	$('.help').slideToggle()
    });
    $('.close').click(function(){
    	$('.help').slideToggle()
    });
});


function runClock() {
    var a = new Date()
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    
    if (hour => 12) {
        hour12 = (hour - 12)
        mrd = "PM"
    }

    if (hour < 12) {
        mrd = "AM"
        hour12 = hour
    }
    if (hour12 == 0) {
        hour12 = 12
    }
    if (min < 10) {
        min0 = "0" + min
    }
    else {
        min0 = min
    }
    var display = hour12 + ":" + min0 + " " + mrd;
    var show = document.getElementById("clock");
    show.innerHTML = display;
    
}
setInterval(runClock, 1000)
window.addEventListener('load', runClock)
