'use strict'

function main(){
  var input = document.querySelector('.input-student input')
  
  input.addEventListener("keyup",handleKeyUp);
  
  document.body.addEventListener('click', function (event) {
    event.stopPropagation();
  })

  document.body.addEventListener('click', function () {
    searchResultsElement.innerHTML = '';
  })

  var searchResultsElement = document.querySelector('.search-results');

  function findStudents(searchTerm){
    var results = [];
    if (searchTerm){
      var results = students.filter(function (student) {
        var studentName = student.name.toLowerCase()
        if (studentName.indexOf(input.value)!== -1) {
          return true;
        } 
      })
    } 
    return results; 
  }

  function displayResults(results) { 
    searchResultsElement.innerHTML = [];
    var searchResultsListElement = document.createElement('ul');
    results.forEach(function(result) {
        var resultLink = document.createElement('a');
        resultLink.innerText = result.name;
        resultLink.setAttribute('href', '../' + result.url);
        var resultListItem = document.createElement('li');
        resultListItem.appendChild(resultLink);
        searchResultsListElement.appendChild(resultListItem);
      })
    searchResultsElement.appendChild(searchResultsListElement);   
  }

  function handleKeyUp (event) {
    if (event.key === 'Escape') {
      searchResultsElement.innerHTML='';
    }
    var searchTerm = input.value.toLowerCase();
    var results = findStudents(searchTerm);
    displayResults(results);
  }

  var section = document.querySelector("section.experiments");
  section.classList.add("hidden");
  var button = document.querySelector(".myButton");
  button.addEventListener("click",function(){
    section.classList.toggle("hidden");
  })
  /*---Timer---*/
  var timer = document.querySelector(".timer")
  var startTimer = document.querySelector(".start-timer")

  function handleStartTimer(){
    var counter = 10;
    var intervalID = setInterval(function () {
      timer.innerText=counter;
      counter--;  
      if (counter===0){
        clearInterval(intervalID);
        timer.innerText="Boom!"
      }
    }, 1000)

  }

  startTimer.addEventListener("click",handleStartTimer)
}


window.addEventListener('load',main);

