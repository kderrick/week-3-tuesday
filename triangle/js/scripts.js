var triangleType = function(length1, length2, length3) {

    if ((length1 === length2) && (length2 === length3) && (length3 === length1)) {
    return "Equilateral Triangle";
  } else if ((length1 + length2) > length3 && (length1 === length2) ||
            (length2 + length3) > length1 && (length2 === length3) ||
            (length1 + length3) > length2 && (length1 === length3)) {
    return "Isoceles Triangle";
  } else

    return "Not a triangle";

};
