function myFunctionAlm() {
  var x = document.getElementById("myDIV");
  var city = document.getElementById('almaty');
  var elem = document.querySelector('.elem');
  var elemTwo = document.querySelector('.elem2');
  var elemTree = document.querySelector('.elem3');
  var departed = document.querySelector('.airline__departed-to');
  var from = document.querySelector('.from');
  var fromOne = document.querySelector('.from1');
  var fromTwo = document.querySelector('.from2');
  var fromThree = document.querySelector('.from3')
  var content = city.innerHTML.trim();
    
    elem.innerHTML = content;
    elemTwo.innerHTML = content;
    elemTree.innerHTML = content;
    departed.innerHTML = content;
    from.innerHTML = content;
    fromOne.innerHTML = content;
    fromTwo.innerHTML = content;
    fromThree.innerHTML = content;
    
  if (x.style.display === "block") {
    x.style.display = "none";
    city.classList.remove("active__city");  
    
  } else {
    x.style.display = "block";
    city.classList.add("active__city");
  }   
}

function myFunctionAms() {
  var x = document.getElementById("myDIV");
  var city = document.getElementById('amsterdam');
  var elem = document.querySelector('.elem');
  var elemTwo = document.querySelector('.elem2');
  var elemTree = document.querySelector('.elem3');
  var departed = document.querySelector('.airline__departed-to')
  var content = city.innerHTML.trim();
    
    elem.innerHTML = content;
    elemTwo.innerHTML = content;
    elemTree.innerHTML = content;
    departed.innerHTML = content;
    
  if (x.style.display === "block") {
    x.style.display = "none";
    city.classList.remove("active__city");  
    
  } else {
    x.style.display = "block";
    city.classList.add("active__city");
  }   
}


function myFunctionTwo() {
  var x = document.getElementById("myDIVtwo");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

