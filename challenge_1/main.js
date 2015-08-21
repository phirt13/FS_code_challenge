(function() {

  'use strict';

  var employees = [
    {
      name: 'Trinity',
      occupation: 'Programmer',
      awesomeIndex: 10
    },

    {
    name: 'Mater',
    occupation: 'Tow Truck'
    },

    {
    name: 'Number 5',
    occupation: 'Programmer',
    awesomeIndex: 7
    },

    {
    name: 'Alice',
    occupation: 'Programmer',
    awesomeIndex: 9
    },

    {
    name: 'Zaphod',
    occupation: 'President of the Galaxy'
    },

    {
    name: 'Bob Parr',
    occupation: 'Programmer',
    awesomeIndex: 6
    }
  ];

  var avgDevAwesomeness;

  function rollCall() {

    var employeeList = document.getElementById('employees');
    employeeList.innerHTML = '';

    var developers = 0;
    var devIndex = 0;

    for(var i = 0; i < employees.length; i++) {
      if(employees[i].awesomeIndex) {
        developers += 1;
        devIndex += employees[i].awesomeIndex;
      }

      var employeeCard = document.createElement('li');

      if(employees[i].occupation.toLowerCase() === 'programmer') {
        employeeCard.setAttribute('class', 'employee-list-card dev');
        employeeCard.innerHTML = '<p><em>Name:</em> ' + employees[i].name + '</p>' +
                                 '<p><em>Occupation:</em> ' + employees[i].occupation + '</p>' +
                                 '<p class="dev-index hidden"><em>Awesome Index:</em> ' + employees[i].awesomeIndex + '</p>';
      } else {
        employeeCard.setAttribute('class', 'employee-list-card');
        employeeCard.innerHTML = '<p><em>Name:</em> ' + employees[i].name + '</p>' +
                                 '<p><em>Occupation:</em> ' + employees[i].occupation + '</p>';
      }

      employeeList.appendChild(employeeCard);
    }

    (function avgDevIndex() {
      return avgDevAwesomeness = Math.floor(devIndex / developers);
    }());

    console.log(developers);
    console.log(devIndex);
    console.log(avgDevAwesomeness);
  }

  rollCall();

  function showMeTheMoneyStat() {

    var awesomeIndex = document.getElementById('awesome-index');
    var devIndex = document.getElementsByClassName('dev-index hidden');

    console.log(devIndex)

    for(var i = devIndex.length - 1; i >= 0; i--) {
      devIndex[i].setAttribute('class', 'dev-index');
    }
    //reverse for loop needed because document.getElementsByClassName returns a HTMLCollection
    //setting class attributes of grabbed items will result in an invalid collection

    if(avgDevAwesomeness > 0) {
      awesomeIndex.innerHTML = '<em class="dev-rating">' + avgDevAwesomeness + '</em>/10';
    } else {
      awesomeIndex.innerHTML = '<em class="dev-rating">' + avgDevAwesomeness + '</em>/10' +
                               '<p class="dev-index">SUCKS TO SUCK...</p>';
    }
  }

  var showItButton = document.getElementById('show-dev-rating');

  showItButton.addEventListener('click', function(e) {

    console.log('Clicked Show');


    showMeTheMoneyStat();

    e.preventDefault();
  });

  var testAdd = document.getElementById('run-test');

  testAdd.addEventListener('click', function(e) {

    console.log('Clicked Test');

    employees.push({name: 'Bobby May', occupation: 'Programmer', awesomeIndex: -700});

    rollCall();

    e.preventDefault();
  });
}())

