$(function() {

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

    var $employeeList = $('#employees');
    $employeeList.empty()

    var developers = 0;
    var devIndex = 0;

    // var devArray = _.filter(employees, {occupation : 'Programmer'});
    //use later for showing highest rated employee and lowest rated employee

    _.forEach(employees, function(employee) {
      if(employee.awesomeIndex >= 0 && employee.awesomeIndex <= 10 || employee.awesomeIndex) {
        developers += 1;
        devIndex += employee.awesomeIndex;
      }

      var devEmployeeCard = '<li class="employee-list-card dev">' +
                            '<p><em>Name:</em> ' + employee.name + '</p>' +
                            '<p><em>Occupation:</em> ' + employee.occupation + '</p>' +
                            '<p class="dev-index hidden"><em>Awesome Index:</em> ' + employee.awesomeIndex + '</p>';

      var employeeCard = '<li class="employee-list-card dev">' +
                         '<p><em>Name:</em> ' + employee.name + '</p>' +
                         '<p><em>Occupation:</em> ' + employee.occupation + '</p>';

      if(employee.occupation.toLowerCase() === 'programmer') {
        $employeeList.append(devEmployeeCard);
      } else {
        $employeeList.append(employeeCard);
      }
    });

    (function() {
      return avgDevAwesomeness = Math.ceil(_.sum(employees, 'awesomeIndex') / developers);
    }());

  }

  rollCall();

  //Dashoard Widgets

  //Awesome Index------------------------->>

  var $awesomeIndex = $('#awesome-index');
  var $devIndex = document.getElementsByClassName('dev-index hidden');

  function showMeTheMoneyStat() {

    _.forEachRight($devIndex, function(element) {
      element.setAttribute('class', 'dev-index')
    });
    //reverse iteration needed because document.getElementsByClassName returns a HTMLCollection
    //setting class attributes of grabbed items will result in an invalid collection

    if(avgDevAwesomeness > 0) {
      $awesomeIndex.empty();
      $awesomeIndex.append('<em class="dev-rating">' + avgDevAwesomeness + '</em>/10');
    } else {
      $awesomeIndex.empty();
      $awesomeIndex.append('<em class="dev-rating">' + avgDevAwesomeness + '</em>/10' +
                               '<p class="dev-index">SUCKS TO SUCK...</p>');
    }
  }

  var $showItButton = $('#show-dev-rating');

  $showItButton.click(function(e) {

    console.log('clicked show');

    showMeTheMoneyStat();

    e.preventDefault();
  })

  //Add New Employee Form------------------------->>

  var $addNewEmployee = $('#create-new-employee');
  var $employeeName = $('#employee-name');
  var $employeePosition = $('#employee-position');
  var $noRadioButton = $('#no-radio');
  var $yesRadioButton = $('#yes-radio');
  var $employeeDevForm = $('#dev-index-form');
  var $employeeAwesomeIndex = $('#awesomness-level');

  $yesRadioButton.click(function(e) {
    $noRadioButton.attr('class', 'radio-input');
    $yesRadioButton.attr('class', 'radio-input-active');
    $employeeDevForm.attr('class', 'dev-awesome-index');
    $employeePosition.val('Programmer');
    $employeeAwesomeIndex.attr('required', true);
  });

  $noRadioButton.click(function(e) {
    $noRadioButton.attr('class', 'radio-input-active');
    $yesRadioButton.attr('class', 'radio-input');
    $employeeDevForm.attr('class', 'dev-awesome-index hidden');
    $employeePosition.val('');
    $employeeAwesomeIndex.removeAttr('required');
  });

  $addNewEmployee.submit(function(e) {
    e.preventDefault();

    console.log($employeeName.val());
    console.log($employeeName.val());
    console.log(typeof($employeeName.val()));
    console.log(typeof($employeeAwesomeIndex.val()));

    if($noRadioButton.prop('checked')) {
      console.log('Ran REGULAR employee add')
      employees.push(
        {
          name: $employeeName.val(),
          occupation: $employeePosition.val()
        });
    } else if($yesRadioButton.prop('checked')) {
      console.log('Ran DEV employee add')
      employees.push(
        {
          name: $employeeName.val(),
          occupation: $employeePosition.val(),
          awesomeIndex: parseFloat($employeeAwesomeIndex.val())
        });
    } else {
      console.log("error");
    }

    $employeeName.val('');
    $employeePosition.val('');
    $employeeAwesomeIndex.val('');

    rollCall();
  });

  var $hiddenAdd = $('#run-test');

  $hiddenAdd.click(function(e) {

    console.log('Clicked Test');

    employees.push({name: 'Bobby May', occupation: 'Programmer', awesomeIndex: -700});

    rollCall();

    e.preventDefault();
  });
});


