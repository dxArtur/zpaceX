//functions created

var bttn = document.querySelector('.bttnabout');
var aboutm = document.querySelector('.aboutm');
var selctwhat = document.getElementById('what');
var selctmssn = document.getElementById('mission');
var selctwho = document.getElementById('who');
bttn.addEventListener('click', function(){
   
    
});




function tospace(){
    var name = document.querySelectorAll('.name');
    let input = document.createElement("input");
    input.value = name;
}


var name = querySelectorall('.')




function showwhat(){
    if(aboutm.style.display === 'block'){
        what.style.display = 'none';
    } else {
        what.style.display = 'block';
        mission.style.display = 'none';
        who.style.display = 'none'
    }
}


function showmission(){
    if(mission.style.display === 'block'){
        mission.style.display = 'none';
    } else {
        what.style.display = 'none';
        mission.style.display = 'block';
        who.style.display = 'none'
    }
}


function showwho(){
    if(who.style.display === 'block'){
        who.style.display = 'none';
    } else {
        what.style.display = 'none';
        mission.style.display = 'none';
        who.style.display = 'block';
    }
}
