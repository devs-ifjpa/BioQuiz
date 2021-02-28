let questionId = 0;
let total = 0;
let coin = 0;
var count= 0;
let alternativeclick = 0;
let questionsSorted = undefined

function start(){
    if((count + 1) <= 9999999){
        count+=1
        tempo.textContent=count; 
        setTimeout('start();',1000);
    }
}

function formatTitle(item){
  itemTitle = ""
  if(item === "anatomia"){
    itemTitle = "anatomia humana"
  }else if(item === "botanica"){
    itemTitle = "botânica"
  }else{
    itemTitle = item;
  }
  return itemTitle
}

function QuestionIndex(index){
  document.getElementById('trophy').innerHTML = `${questionId}/${questionsSorted.length}`
  let question = questionsSorted[index]
  // questions
  document.querySelector('.title').innerHTML = question.title;
  console.log(question);
  for(alt in question.alternatives){
    let content = `<div class="alternatives-item" onclick="answerCorrect(${Number(alt) + 1});QuestionClick(${questionId})">${question.alternatives[alt]}</div>`;
    document.querySelector('.alternatives').insertAdjacentHTML('beforeend',content);
    questionId++;
  }
}

function QuestionClick(index){
  document.querySelector("button").style.opacity = 1;
  document.querySelector('button').setAttribute("onclick",'ButtonClick()');
  alternativeclick++;
  if(document.getElementById("clock").textContent == ""){
    document.getElementById("clock").textContent = hora_bonita(count);
    document.getElementById("clockbox").style.opacity = 1;
  }
  let countLoop = 0;
  document.querySelectorAll('.alternatives-item').forEach(alternative => {
    if (countLoop === Number(questionsSorted[index].answer)){
      alternative.setAttribute('class', 'green');
    }else{
      alternative.setAttribute('class', 'red');
    }
    document.querySelector("button").setAttribute("class", "show");
    countLoop++;
  });
}

if(document.querySelector('.alternatives') != undefined){
  let father = document.querySelector('.alternatives');
  let title = window.location.href.split("?")[1].split("=")[1];
  randomics = [];
  while(randomics.length != 30){
    var rand = Math.floor(Math.random() * 30 + 1);
    randomics.indexOf(rand) == -1 ? randomics.push(rand) : false;
  }
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
      firebase.firestore().collection(title).get().then(function(querySnapshot) {
          questions = []
          querySnapshot.forEach(function(doc) {
              let data = doc.data();
              data.id = doc.id;
              questions.push(data);
          });
          questionsSorted = randomics.map(rand => {
            return questions.filter(item => {
              if(Number(item.id) === rand){
                return item;
              }
            })[0];
          })
          questionId++;
          QuestionIndex(1);
      });
    }
  });
}

// var url = window.location;
// temaselect = url.toString().split("=")[1];
// temas = ["botanica","anatomia","ecologia","zoologia"]
// let filterArray = questions[temas.indexOf(temaselect)];
// 
// var randomics = [];
// while (randomics.length < filterArray.length) {
    // var rand = Math.floor(Math.random() * filterArray.length);
    // randomics.indexOf(rand) == -1 ? randomics.push(rand) : false;
// 
// }
// function showQuestion() {
  // document.getElementById("trophy").innerHTML = `${questionId + 1}/${filterArray.length}`;
  // document.querySelector('.title').innerHTML = filterArray[randomics[questionId]].title
  // const alternatives = filterArray[randomics[questionId]].alternatives;
  // const alternativesView = document.querySelector('.alternatives')
  // const answer = filterArray[randomics[questionId]].answer
// 
  // for (alternativeIndex in alternatives){
    // const item = `<div class="alternatives-item" onclick="answerCorrect(${alternativeIndex})" data-index="${alternativeIndex}">${alternatives[alternativeIndex]}</div>`
    // alternativesView.insertAdjacentHTML('beforeend', item);
// 
    // click
    // const lastItem = alternativesView.querySelector('.alternatives-item:last-child')
    // lastItem.addEventListener('click', () => {
      // document.querySelector("button").style.opacity = 1;
      // document.querySelector('button').setAttribute("onclick",'ButtonClick()');
      // alternativeclick++;
      // if(document.getElementById("clock").textContent == ""){
        // document.getElementById("clock").textContent = hora_bonita(count);
        // document.getElementById("clockbox").style.opacity = 1;
      // }
      // const alternativeItems = alternativesView.querySelectorAll('.alternatives-item')
      // for (const alternativeItem of alternativeItems) {
        // if (answer === Number(alternativeItem.dataset.index)) {
          // alternativeItem.setAttribute('class', 'green');
          // document.querySelector("button").setAttribute("class", "show");
        // } else {
          // alternativeItem.setAttribute('class', 'red');
          // document.querySelector("button").setAttribute("class", "show");
        // }
      // }
    // })
  // }
// }

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
  const answer = questionsSorted[questionId].answer;
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
    }
}

function ButtonClick(){
  // document.querySelector('button').addEventListener('click', function() {
    document.querySelector('button').removeAttribute("onclick");
    document.getElementById("clock").textContent = "";
    document.getElementById("clockbox").style.opacity = 0;
    document.querySelector(".green").setAttribute("class", "hidden");
    document.querySelectorAll("div.red").forEach(item => {
      item.setAttribute('class','hidden')
    });
    document.querySelector("button").style.opacity = 0;
    questionId++;
    document.getElementById("tempo").textContent = 0;
    count = 0;
    alternativeclick = 0;
    QuestionIndex(questionId);
  // })
}


// showQuestion();