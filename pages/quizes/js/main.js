let questionId = 0;
let total = 0;
let coin = 0;
var count= 0;
let alternativeclick = 0;

  function start(){
      if((count + 1) <= 9999999){
          count+=1
          tempo.textContent=count; 
          setTimeout('start();',1000);
      }
  }



var url = window.location;
temaselect = url.toString().split("=")[1];
temas = ["botanica","anatomia","ecologia","zoologia"]
let filterArray = questions[temas.indexOf(temaselect)];

var randomics = [];
while (randomics.length < filterArray.length) {
    var rand = Math.floor(Math.random() * filterArray.length);
    randomics.indexOf(rand) == -1 ? randomics.push(rand) : false;

}
function showQuestion() {
  document.getElementById("trophy").innerHTML = `${questionId + 1}/${filterArray.length}`;
  document.querySelector('.title').innerHTML = filterArray[randomics[questionId]].title
  document.querySelector('.balao').innerHTML = filterArray[randomics[questionId]].wrong  
  const alternatives = filterArray[randomics[questionId]].alternatives;
  const alternativesView = document.querySelector('.alternatives')
  const answer = filterArray[randomics[questionId]].answer
 

  for (alternativeIndex in alternatives){
    const item = `<div class="alternatives-item" onclick="answerCorrect(${alternativeIndex})" data-index="${alternativeIndex}">${alternatives[alternativeIndex]}</div>`
    alternativesView.insertAdjacentHTML('beforeend', item);

    // click
    const lastItem = alternativesView.querySelector('.alternatives-item:last-child')
    lastItem.addEventListener('click', () => {
      document.querySelector("button").style.opacity = 1;
      document.querySelector('button').setAttribute("onclick",'ButtonClick()');
      alternativeclick++;
      if(document.getElementById("clock").textContent == ""){
        document.getElementById("clock").textContent = hora_bonita(count);
        document.getElementById("clockbox").style.opacity = 1;
      }
      const alternativeItems = alternativesView.querySelectorAll('.alternatives-item')
      for (const alternativeItem of alternativeItems) {
        if (answer === Number(alternativeItem.dataset.index)) {
          alternativeItem.setAttribute('class', 'green');
          document.querySelector("button").setAttribute("class", "show");
        } 
        else {
          alternativeItem.setAttribute('class', 'red');          
          document.querySelector("button").setAttribute("class", "show");
        }
      }
    })
  }
}

function AddMedal(x){
  total += x;
  document.getElementById("thor").textContent = total;
}

function AddCoin(x){
  coin += x;
  document.getElementById("loki").textContent = coin;
}

function hora_bonita(s){
	function duas_casas(numero){
		if (numero <= 9){
			numero = "0" + numero;
    }
		return numero;
  }
  minuto = duas_casas(Math.trunc((s%3600)/60));
  segundo = duas_casas((s%3600)%60);
  formatado = minuto+":"+segundo;            
  return formatado;
}

const aAudio = new Audio("./audio/SomDeAcerto.mp3");
const bAudio = new Audio("./audio/SomDeErro.mp3");
function answerCorrect(x){
  const answer = filterArray[randomics[questionId]].answer;
  let time = Number(document.getElementById("tempo").textContent)
    if(x == answer){
      alternativeclick == 0 ? aAudio.play() : false;
      switch (true){
        case time<=5:
          alternativeclick == 0 ? (AddMedal(1000),AddCoin(3)) : false;
          break;
        case time<10:
          alternativeclick == 0 ? (AddMedal(900),AddCoin(2)) : false;
          break;
        case time<15:
          alternativeclick == 0 ? (AddMedal(800),AddCoin(1)) : false;
          break;
        case time<20:
          alternativeclick == 0 ? AddMedal(700) : false;
          break;
        case time<25:
          alternativeclick == 0 ? AddMedal(600) : false;
          break;
        case time<30:
          alternativeclick == 0 ? AddMedal(500) : false;
          break;
        case time<35:
          alternativeclick == 0 ? AddMedal(400) : false;
          break;
        case time<40:
          alternativeclick == 0 ? AddMedal(300) : false;
          break;
        default:
          alternativeclick == 0 ? AddMedal(200) : false;
      }
    }
    else{
      alternativeclick == 0 ? bAudio.play() : false;
      document.querySelector(".balao").style.opacity = 1;
      document.querySelector(".balao:after").style.opacity = 1;      
    }
}

function ButtonClick(){
  // document.querySelector('button').addEventListener('click', function() {    
    document.querySelector('button').removeAttribute("onclick");
    document.getElementById("clock").textContent = "";
    document.getElementById("clockbox").style.opacity = 0;
    document.querySelector(".green").setAttribute("class", "hidden");
    let contred = document.querySelectorAll("div.red");
    for (var x = 1; x <= contred.length; x++){
      document.querySelector(".red").setAttribute("class", "hidden");
    }
    document.querySelector("button").style.opacity = 0;
    document.querySelector(".balao").style.opacity = 0;
    questionId++;
    document.getElementById("tempo").textContent = 0;
    count = 0;
    alternativeclick = 0;
    if(true){
      let temp = url.href.split("/")
      console.log(temp)
      temp[5] = "telaFinal"
      temp[6] = "parabens.html"
      url.href = temp.join("/")
    }
    showQuestion();
  // })
}


showQuestion();

/*
document.querySelector(".balao").setAttribute("class", "show");
document.querySelector(".balao").setAttribute("class", "hidden");*/