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

    for(var i = 0; i < employees.length; i++) {
      var employeeCard = '<li class="employee-list-card dev">' +
                         '<p '
    }

    console.log($employeeList);
  }

  rollCall();
});
