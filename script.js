function somar() {
  const firstInput = document.getElementById("txt1");
  const secondInput = document.getElementById("txt2");
  const res = document.getElementById("res");
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  res.innerHTML = `a soma de ${firstValue} + ${secondValue} = ${
    secondValue + firstValue
  }`;
}

function sub() {
  const firstInput = document.getElementById("txt1");
  const secondInput = document.getElementById("txt2");
  const res = document.getElementById("res");
  const firstValue = Number(firstInput.value);
  const secondValue = Number(secondInput.value);
  res.innerHTML = `a soma de ${firstValue} - ${secondValue} = ${
    firstValue - secondValue
  }`;
}
