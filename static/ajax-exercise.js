"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
      $('#fortune-text').html(response);
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    // TODO: select the zipcode input
    'zipcode': $('#zipcode-field').val()
  };

  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    $('#weather-form').html(`${response.forecast}`);

  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  // TODO: create an object to store key-value pairs that'll be sent to
  // the server
  const formData = {
    'qty': $('#qty-field').val(),
    'melon_type': $('#melon-type-field').val()
  }
  // TODO: make a request to /order-melons
  $.post('/order-melons', formData, (response) => {
    console.log(response.code);
    $('#order-status').html(`${response.code} ${response.msg}`);
  });
  // In the callback function, use the response from the server to
  // update #order-status. IMPORTANT: if the result code is 'ERROR',
  // make it show up in red.
});
