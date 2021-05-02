// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function enterClicked () {
  // this function gets users firdt name and age and shows it back to user

  // input
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)

  // output
  document.getElementById('address').innerHTML = 'Your info is: ' + firstName + ', age ' + userAge + '.'
}
