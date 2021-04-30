let questionId = 0;
let tempTotal = 0;
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
let temaselect = url.toString().split("=")[1];
let temas = ["botanica","anatomia","ecologia","zoologia"]
let filterArray = questions[temas.indexOf(temaselect)];

var randomics = [];



if(localStorage.getItem("questionId" + temaselect))
  questionId = parseInt(localStorage.getItem("questionId" + temaselect));
else
  localStorage.setItem("questionId" + temaselect, questionId);


if(localStorage.getItem("tempTotal" + temaselect)){
  tempTotal = parseInt(localStorage.getItem("tempTotal" + temaselect));
  total += tempTotal;
}else
  localStorage.setItem("tempTotal" + temaselect, tempTotal);


if(localStorage.getItem("random" + temaselect)){
  randomics = localStorage.getItem("random" + temaselect).split(",");
}

while (randomics.length < filterArray.length) {
    var rand = Math.floor(Math.random() * filterArray.length);
    randomics.indexOf(rand) == -1 ? randomics.push(rand) : false;
}

if(!localStorage.getItem("random" + temaselect)){
  localStorage.setItem("random" + temaselect,randomics);
}

function showQuestion() {
  document.getElementById("trophy").innerHTML = `${questionId + 1}/${filterArray.length}`;// trocar por localStorage.getItem("questionId")
  //document.getElementById("trophy").innerHTML = `${Number(localStorage.getItem("questionId")) + 1}/${filterArray.length}`; 
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
  tempTotal += x;
  localStorage.setItem("tempTotal" + temaselect, tempTotal);
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
          alternativeclick == 0 ? (AddMedal(1000)) : false;
          break;
        case time<10:
          alternativeclick == 0 ? (AddMedal(900)) : false;
          break;
        case time<15:
          alternativeclick == 0 ? (AddMedal(800)) : false;
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
      document.querySelector(".balao").classList.remove("hide");     
    }
}

function ButtonClick(){
  questionId++;
  if(questionId > 29){
    FirebaseUpdateMedal();
    const tempData = ['questionId', 'tempTotal', 'random'];
    tempData.map(item => localStorage.removeItem(item + temaselect));
  } else {
    document.documentElement.scrollTop = 0;
    document.querySelector('button').removeAttribute("onclick");
    document.getElementById("clock").textContent = "";
    document.getElementById("clockbox").style.opacity = 0;
    document.querySelector(".green").setAttribute("class", "hidden");
    let contred = document.querySelectorAll("div.red");
    for (var x = 1; x <= contred.length; x++){
      document.querySelector(".red").setAttribute("class", "hidden");
    }
    document.querySelector("button").style.opacity = 0;
    document.querySelector(".balao").classList.add("hide");
    localStorage.setItem("questionId" + temaselect, questionId);
    document.getElementById("tempo").textContent = 0;
    count = 0;
    alternativeclick = 0;

    showQuestion();
  }
}

/*if (!localStorage.getItem("questionId")){
  Visitar pagina: https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem
  localStorage.setItem("questionId" , 0)
  localStorage.setItem("coin" , 0)
}*/
if(questionId > 29){
  document.getElementById("button").classList.add("disable-click")
  const tempData = ['questionId', 'tempTotal', 'random'];
  tempData.map(item => localStorage.removeItem(item + temaselect));
  FirebaseUpdateMedal();
} else {
  showQuestion();
}

/*
document.querySelector(".balao").setAttribute("class", "show");
document.querySelector(".balao").setAttribute("class", "hidden");*/