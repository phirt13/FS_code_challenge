(function() {

  'use strict';

  var employees = [
    {
      name: 'Trinity',
      occupation: 'programmer',
      awesomeIndex: 10
    },

    {
    name: 'Mater',
    occupation: 'tow truck'
    },

    {
    name: 'Number 5',
    occupation: 'programmer',
    awesomeIndex: 7
    },

    {
    name: 'Alice',
    occupation: 'programmer',
    awesomeIndex: 9
    },

    {
    name: 'Zaphod',
    occupation: 'President of the Galaxy'
    },

    {
    name: 'Bob Parr',
    occupation: 'programmer',
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
        employeeCard.setAttribute('class', 'dev');
        employeeCard.innerHTML = '<p><em>Name:</em> ' + employees[i].name + '</p>' +
                                 '<p><em>Occupation:</em> ' + employees[i].occupation + '</p>' +
                                 '<p><em class="dev-index">Awesome Index:</em> ' + employees[i].awesomeIndex + '</p>';
      } else {
        employeeCard.setAttribute('class', 'regular');
        employeeCard.innerHTML = '<p><em>Name:</em> ' + employees[i].name + '</p>' +
                                 '<p><em class"dev-index">Occupation:</em> ' + employees[i].occupation + '</p>';
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

    if(avgDevAwesomeness > 0) {
      awesomeIndex.innerHTML = avgDevAwesomeness;
    } else {
      awesomeIndex.innerHTML = "SUCKS TO SUCK";
    }
  }

  var showItButton = document.getElementById('show-dev-rating');

  showItButton.addEventListener('click', function(e) {

    console.log('Clicked Show');

    rollCall();
    showMeTheMoneyStat();

    e.preventDefault();
  });

  var testAdd = document.getElementById('run-test');

  testAdd.addEventListener('click', function(e) {

    console.log('Clicked Test');

    employees.push({name: 'Bobby May', occupation: 'Programmer', awesomeIndex: 3});

    rollCall();

    e.preventDefault();
  });
}())

