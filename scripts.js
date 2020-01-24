'use strict';

/**
 * Creates a smooth scroll when using the Nav links
 */
function handleNavScroll() {
  $('nav').find('a').click(event => {
    event.preventDefault();
    let section = $(event.currentTarget).attr('href');
    $('html, body').animate({
      scrollTop: $(section).offset().top
    });
  });
}

/**
 * Opens the navigation menu when the 'Hamburger' is clicked on mobile
 */
function handleHamburgerClick() {
  $('.hamburger').click(event => {
    event.preventDefault();
    $('.menu').toggleClass('hidden');
  });
}

/**
 * Handles the submission of the contact form
 * Form is sent to an external API and then emailed to me
 */
function handleContactForm() {
  $('#contact-form').submit(event => {
    event.preventDefault();
    
    let name = $('#name').val();
    let email = $('#email').val();
    let message = $('#message').val();

    $.ajax({
      url: 'https://formspree.io/myyeqygz',
      method: 'POST',
      data: {
        name,
        email,
        message
      },
      dataType: 'json'
    }).done(() => {
      $('.success').removeClass('hidden');
      $('#contact-form').find('input[type=text], input[type=email], textarea').val('');
      $('#contact-form').addClass('hidden');
    });
  });
}

/**
 * Closes the 'Success' section after submiting the form
 */
function handleCloseButton() {
  $('.close').click(event => {
    event.preventDefault();
    $('.success').addClass('hidden');
    $('#contact-form').removeClass('hidden');
  });
}

/**
 * Main function to handle all event listeners
 */
function main() {
  handleNavScroll();
  handleHamburgerClick();
  handleContactForm();
  handleCloseButton();
}

$(main);