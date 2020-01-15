const b = new Array();
const i = new Array();
const n = new Array();
const g = new Array();
const o = new Array();
const numerosUsados = new Array();
const tabla1 = [].concat(b, i, n, g, o);
let total = 0;
iniciar = () => {
  GenerarNumeros();
};
mi_funcion_principal = () => {
  fnRandom = (x, y) => Math.floor(Math.random() * (x - y)) + y;
  while (total < 25) {
    let preparado1 = fnRandom(1, 15);
    let preparado2 = fnRandom(16, 30);
    let preparado3 = fnRandom(31, 45);
    let preparado4 = fnRandom(46, 60);
    let preparado5 = fnRandom(61, 75);

    if (b.includes(preparado1) === false && b.length < 5) {
      b.push(preparado1);
      total += 1;
    }
    if (i.includes(preparado2) === false && i.length < 5) {
      i.push(preparado2);
      total += 1;
    }
    if (n.includes(preparado3) === false && n.length < 5) {
      n.push(preparado3);
      total += 1;
    }
    if (g.includes(preparado4) === false && g.length < 5) {
      g.push(preparado4);
      total += 1;
    }
    if (o.includes(preparado5) === false && o.length < 5) {
      o.push(preparado5);
      total += 1;
    }
  }
};
mi_funcion_principal();
GenerarNumeros = () => {
  for (let i = 0; i < 25; i++) {
    if (i == 12) continue;
    generarCasilla(i);
  }
};

function generarCasilla(num25) {
  let casillaNum = "sq" + num25;
  let numero = tabla1[num25];
  document.getElementById(casillaNum).value = numero;
}

function lanzar() {
  if (numerosUsados.length < 90) {
    let misbolas = Math.floor(Math.random() * 60) + 1;
    if (numerosUsados.includes(misbolas)) lanzar();
    else {
      numerosUsados.push(misbolas);
      console.log(misbolas);
      console.log(numerosUsados);
      console.log(b);
      console.log(i);
      console.log(n);
      console.log(g);
      console.log(o);

      let b1 = JSON.stringify(b);
      let i1 = JSON.stringify(i);
      let n1 = JSON.stringify(n);
      let g1 = JSON.stringify(g);
      let o1 = JSON.stringify(o);
      
      document.getElementById("demo1").innerHTML = b1;
      document.getElementById("demo2").innerHTML = i1;
      document.getElementById("demo3").innerHTML = n1;
      document.getElementById("demo4").innerHTML = g1;
      document.getElementById("demo5").innerHTML = o1;

    }
  }
}

module.exports = {
  lanzar
}