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
      if(employees[i].awesomeIndex >= 0 && employees[i].awesomeIndex <= 10 || employees[i].awesomeIndex) {
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
      return avgDevAwesomeness = Math.ceil(devIndex / developers);
    }());

    console.log(developers);
    console.log(devIndex);
    console.log(avgDevAwesomeness);
  }

  rollCall();

  //Dashoard Widgets

  //Awesome Index------------------------->>

  var awesomeIndex = document.getElementById('awesome-index');
  var devIndex = document.getElementsByClassName('dev-index hidden');

  function showMeTheMoneyStat() {

    console.log(devIndex);

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

  //Add New Employee Form------------------------->>

  var addNewEmployee = document.getElementById('create-new-employee'); //Employee Add Form
  var employeeName = document.getElementById('employee-name');
  var employeePosition = document.getElementById('employee-position');
  var noRadioButton = document.getElementById('no-radio');
  var yesRadioButton = document.getElementById('yes-radio');
  var employeeDevForm = document.getElementById('dev-index-form');
  var employeeAwesomeIndex = document.getElementById('awesomness-level');

  yesRadioButton.addEventListener('click', function(e) {
    noRadioButton.setAttribute('class', 'radio-input');
    yesRadioButton.setAttribute('class', 'radio-input-active');
    employeeDevForm.setAttribute('class', 'dev-awesome-index');
    employeePosition.value = 'Programmer';
    employeeAwesomeIndex.setAttribute('required', true);
  });

  noRadioButton.addEventListener('click', function(e) {
    noRadioButton.setAttribute('class', 'radio-input-active');
    yesRadioButton.setAttribute('class', 'radio-input');
    employeeDevForm.setAttribute('class', 'dev-awesome-index hidden');
    employeePosition.value = '';
    employeeAwesomeIndex.removeAttribute('required');
  });

  addNewEmployee.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(employeeName.value);
    console.log(employeeName.value.length);
    console.log(typeof(employeeName.value));
    console.log(typeof(employeeAwesomeIndex.value));

    if(employeeAwesomeIndex.value > 10) {
      console.log('Ran index change');
      employeeAwesomeIndex.value = 10;
    }

    if(noRadioButton.checked) {
      console.log('Ran REGULAR employee add')
      employees.push(
        {
          name: employeeName.value,
          occupation: employeePosition.value
        });
    } else if(yesRadioButton.checked) {
      console.log('Ran DEV employee add')
      employees.push(
        {
          name: employeeName.value,
          occupation: employeePosition.value,
          awesomeIndex: parseFloat(employeeAwesomeIndex.value)
        });
    } else {
      console.log("error");
    }

    rollCall();
  });

  var hiddenAdd = document.getElementById('run-test');

  hiddenAdd.addEventListener('click', function(e) {

    console.log('Clicked Test');

    employees.push({name: 'Bobby May', occupation: 'Programmer', awesomeIndex: -700});

    rollCall();

    e.preventDefault();
  });
}());

