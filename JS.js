//calcula o programa
const calcularprograma = document.querySelector("#calcularprograma")

calcularprograma.addEventListener("click",function (a) {
  a.preventDefault();


  let qtdhoras = document.querySelector("#qtdhoras");
  let QTDhoras = parseInt(qtdhoras.value);

  let puto = document.getElementById("putos");
  let Putovalor = parseInt(puto.options[puto.selectedIndex].value);

  let qtdpessoas = document.querySelector("#qtdpessoas");
  let QTDpessoas = parseInt(qtdpessoas.value);

  let planocontingencia = document.querySelector("#planocontingencia");

  let Planocontingencia;
  let valortotal = 0;
  let valorpessoast = 0;
  const valorppessoa = 200;

  if (planocontingencia.value === "true") {
    Planocontingencia = 500;
  } else {
    Planocontingencia = 0;
  }
  if (QTDpessoas > 1) {
    valorpessoast = valorppessoa * (QTDpessoas - 1);
  }

  valortotal = Putovalor * QTDhoras + valorpessoast + Planocontingencia;
  console.log(valortotal);
  var total = document.querySelector("#total");
  total.innerHTML = "Valor Total: " + valortotal;
})

    
    //puxa todos os dados do formulario 
function reserva()
{
  let reserva = confirm('seu pedido será confirmado assim que você clicar no botão ok abaixo e com isso vouce receberá um emial de confirmação em nome  de "BE Restaurantes" ')

  if (reserva == true) {
    let nome = document.querySelector("#nome");
  let Nome = nome.value;

  let email = document.querySelector("#email");
  let Email = email.value;

  let data = document.querySelector("#data");
  let Data = data.value;

  let hora = document.querySelector("#hora");
  let Hora = hora.value;
  
  let qtdhoras = document.querySelector("#qtdhoras");
  let QTDhoras = parseInt(qtdhoras.value);
  
  let puto = document.getElementById("putos");
  let Putonome = puto.options[puto.selectedIndex].text;
  let Putovalor = parseInt(puto.options[puto.selectedIndex].value);
  
  let qtdpessoas = document.querySelector("#qtdpessoas");
  let QTDpessoas = parseInt(qtdpessoas.value);
  
  let planocontingencia = document.querySelector("#planocontingencia");
  let Planocontingencia = planocontingencia.value === "true";
  
  let preferencia = document.querySelector("#preferencia");
  let Preferencia = preferencia.value;

  let demandas = document.querySelector("#demandas");
  let Demandas = demandas.value;
  
  let fpagamento = document.querySelector("#fpagamento");
  let Fpagamento = fpagamento.value;
  
  //document.querySelector("#forms").submit();
  console.log(Nome);
  console.log(Email);
  console.log(Data);
  console.log(Hora);
  console.log(QTDhoras);
  console.log(Putonome);
  console.log(Putovalor);
  console.log(QTDpessoas);
  console.log(Planocontingencia);
  console.log(Preferencia);
  console.log(Demandas);
  console.log(Fpagamento);
  }else{
    alert("você cancelou a reserva")
  }
}
  

  
  /*
  codigo primitivo feito em c++ pro calculo do programa
    const valorppessoa = 200;
    let vh = 900
      qtdpessoas = 1,
      qtdhoras = 1,
      valorpessoast = 0,
      vt = 0;
  
    let planocontingencia = true;
  
    if (qtdpessoas > 1) {
      valorpessoast = valorppessoa * (qtdpessoas - 1);
    }
    if (planocontingencia == true) {
      vt =500 ;
    }
  
    vt += (vh * qtdhoras) + valorpessoast;
    return vt;*/