function calcIMC(peso, altura) {
  return (peso / ((altura / 100) ** 2)).toFixed(2);
}

function getNivelIMC(imc) {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    return 'Sobrepeso';
  } else if (imc >= 30 && imc <= 34.9) {
    return 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 39.9) {
    return 'Obesidade grau II';
  } else {
    return 'Obesidade grau III';
  }
}

function criarParagrafo() {
  return document.createElement('p');
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = '';
  const p = criarParagrafo();
  p.innerHTML = msg;
  if (isValid) {
    p.classList.add('success');
  } else {
    p.classList.add('error');
  }
  resultado.appendChild(p);
}

function calcularIMC() {
  const form = document.querySelector('.form');
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = document.querySelector('#nome').value;
    const sobrenome = document.querySelector('#sobrenome').value;
    const peso = parseFloat(document.querySelector('#kilos').value);
    const altura = parseFloat(document.querySelector('#altura').value);

    if (!nome) {
      setResultado('Por favor, preencha o campo do nome', false);
      return;
    }
    if (!sobrenome) {
      setResultado('Por favor, preencha o campo do sobrenome', false);
      return;
    }
    if (!peso) {
      setResultado('Por favor, preencha o campo do peso', false);
      return;
    }
    if (!altura) {
      setResultado('Por favor, preencha o campo da altura', false);
      return;
    }

    const imc = calcIMC(peso, altura);
    const nivelIMC = getNivelIMC(imc);

    pessoas.push({
      nome,
      sobrenome,
      peso,
      altura,
      imc,
      nivelIMC
    });

    const inputIMC = document.querySelector('#imc');
    inputIMC.value = imc;

    const msg = `Seu IMC é ${imc} (${nivelIMC}).`;

    setResultado(msg, true);

    console.log(pessoas);
  }

  form.addEventListener('submit', recebeEventoForm);
}

calcularIMC();