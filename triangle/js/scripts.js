var triangleType = function(length1, length2, length3) {

    if ((length1 === length2) && (length2 === length3) && (length3 === length1)) {
    return "Equilateral Triangle";
  } else if ((length1 + length2) > length3 && (length1 === length2) ||
            (length2 + length3) > length1 && (length2 === length3) ||
            (length1 + length3) > length2 && (length1 === length3)) {
    return "Isoceles Triangle";
  } else if (((length1 + length2) > length3) && ((length1 + length3) > length2) && ((length2 + length3 > length1)) && (length1 !== length2) && (length1 !== length3) && (length2 !== length3))

             {
    return "Scalene Triangle";
  } else

    return "Not a Triangle";

};


$(document).ready(function() {
  $('form#triangle').submit(function(event) {
    var length1 = parseInt($('input#length1').val());
    var length2 = parseInt($('input#length2').val());
    var length3 = parseInt($('input#length3').val());
    var result = triangleType(length1, length2, length3);

    $(".length1").text(length1);
    $(".length2").text(length2);
    $(".length3").text(length3);

    $('.result').text(result);

    $("#result").show();
    event.preventDefault();
  });

});









// (((lenth1 + length2) >= length3) || ((lenth1 + length3) >= length2) || ((lenth2 + length3) >= length1))
