// var leapYear = function(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if
//     (year % 100 === 0) {
//     return false;
//   } else if
//     (year % 4 === 0) {
//       return true;
//     } else {
//       return false;
//     }
//   };

var leapYear = function(year) {

  if (year % 4 === 0 && year % 100 !==0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }

};

$(document).ready(function() {
  $('form#leap-year').submit(function(event) {
    var year = parseInt($('input#year').val());
    var result = leapYear(year);


    if (year === false) {
      alert("Lkajd;lfj");
    }



    $(".year").text(year);



     if (result) {
      $('.not').text('')
    } else {
      $('.not').text('not')
    }

    $("#result").show();

    event.preventDefault();



  })

});
