//DOM
let input = document.querySelector('.input');
let result = document.querySelector('.result');
let inputType = document.querySelector('#inputType');
let resultType = document.querySelector('#resultType');

//Event
input.addEventListener('keyup', lengthCovert);
inputType.addEventListener('change', lengthCovert);
resultType.addEventListener('change', lengthCovert);

function lengthCovert() {
  //Set Value
  let inputTypeValue = inputType.value;
  let resultTypeValue = resultType.value;

  //Millimeter Condition
  if (inputTypeValue === 'millimeter' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value);
  } else if (
    inputTypeValue === 'millimeter' &&
    resultTypeValue === 'centimeter'
  ) {
    result.value = Number(input.value) / 10;
  } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'inch') {
    result.value = Number(input.value) / 25.4;
  } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'foot') {
    result.value = Number(input.value) / 304.8;
  } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'meter') {
    result.value = Number(input.value) / 1000;
  } else if (
    inputTypeValue === 'millimeter' &&
    resultTypeValue === 'kilometer'
  ) {
    result.value = Number(input.value) / 1000000;
  } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 1.609e6;
  } else if (inputTypeValue === 'millimeter' && resultTypeValue === 'yard') {
    result.value = Number(input.value) / 914;
  }

  //Centimeter Condition
  if (inputTypeValue === 'centimeter' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 10;
  } else if (
    inputTypeValue === 'centimeter' &&
    resultTypeValue === 'centimeter'
  ) {
    result.value = Number(input.value);
  } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'inch') {
    result.value = Number(input.value) / 25.4;
  } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'foot') {
    result.value = Number(input.value) / 30.48;
  } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'meter') {
    result.value = Number(input.value) / 100;
  } else if (
    inputTypeValue === 'centimeter' &&
    resultTypeValue === 'kilometer'
  ) {
    result.value = Number(input.value) / 100000;
  } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 160934;
  } else if (inputTypeValue === 'centimeter' && resultTypeValue === 'yard') {
    result.value = Number(input.value) / 91.44;
  }

  //Inch Condition
  if (inputTypeValue === 'inch' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 25.4;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'centimeter') {
    result.value = Number(input.value) * 2.54;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'inch') {
    result.value = Number(input.value);
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'foot') {
    result.value = Number(input.value) / 12;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'meter') {
    result.value = Number(input.value) / 39.37;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'kilometer') {
    result.value = Number(input.value) / 39370;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 63360;
  } else if (inputTypeValue === 'inch' && resultTypeValue === 'yard') {
    result.value = Number(input.value) / 36;
  }

  //Foot Condition
  if (inputTypeValue === 'foot' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 305;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'centimeter') {
    result.value = Number(input.value) * 30.48;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'inch') {
    result.value = Number(input.value) * 12;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'foot') {
    result.value = Number(input.value);
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'meter') {
    result.value = Number(input.value) / 3.281;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'kilometer') {
    result.value = Number(input.value) / 3281;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 5280;
  } else if (inputTypeValue === 'foot' && resultTypeValue === 'yard') {
    result.value = Number(input.value) / 3;
  }

  //Meter Condition
  if (inputTypeValue === 'meter' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 1000;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'centimeter') {
    result.value = Number(input.value) * 100;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'inch') {
    result.value = Number(input.value) * 39.37;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'foot') {
    result.value = Number(input.value) * 3.28084;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'meter') {
    result.value = Number(input.value);
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'kilometer') {
    result.value = Number(input.value) * 0.001;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 1609.344;
  } else if (inputTypeValue === 'meter' && resultTypeValue === 'yard') {
    result.value = Number(input.value) * 1.093613;
  }

  //Kilometer Condition
  if (inputTypeValue === 'kilometer' && resultTypeValue === 'millimeter') {
    result.value = Number(input.value) * 1000000;
  } else if (
    inputTypeValue === 'kilometer' &&
    resultTypeValue === 'centimeter'
  ) {
    result.value = Number(input.value) * 100000;
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'inch') {
    result.value = Number(input.value) * 39370;
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'foot') {
    result.value = Number(input.value) * 3281;
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'meter') {
    result.value = Number(input.value) * 1000;
  } else if (
    inputTypeValue === 'kilometer' &&
    resultTypeValue === 'kilometer'
  ) {
    result.value = Number(input.value);
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'mile') {
    result.value = Number(input.value) / 1.609;
  } else if (inputTypeValue === 'kilometer' && resultTypeValue === 'yard') {
    result.value = Number(input.value) * 1094;
  }
}
