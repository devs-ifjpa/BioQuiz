let questionId = 0;
let total = 0;
var count= 0;

  function start(){
      if((count + 1) <= 9999999){
          count+=1
          tempo.textContent=count; 
          setTimeout('start();',1000);
      }
  }
var url = window.location;
temaselect = url.toString().split("=")[1];
temas = ["botanica","anatomia","meioAmbiente","zoologia"]
// let filterArray = questions[temaselect].filter(x => questions[temaselect][questionId].Categoria === temas[temaselect])
let filterArray = questions[temas.indexOf(temaselect)];
console.log(filterArray);

var randomics = [];
while (randomics.length < filterArray.length) {
    var rand = Math.floor(Math.random() * filterArray.length);
    // if (randomics.indexOf(rand) == -1)
        // randomics.push(rand);
    randomics.indexOf(rand) == -1 ? randomics.push(rand) : false;

}
console.log(randomics);
function showQuestion() {
  document.querySelector('.questio').innerHTML = filterArray[questionId].Question
  document.querySelector('.title').innerHTML = filterArray[randomics[questionId]].title
  const alternatives = filterArray[randomics[questionId]].alternatives;
  const alternativesView = document.querySelector('.alternatives')
  const answer = filterArray[randomics[questionId]].answer

  for (alternativeIndex in alternatives){
    const item = `<div class="alternatives-item" onclick="answerCorrect(${alternativeIndex})" data-index="${alternativeIndex}">${alternatives[alternativeIndex]}</div>`
    alternativesView.insertAdjacentHTML('beforeend', item);

    // click
    const lastItem = alternativesView.querySelector('.alternatives-item:last-child')
    lastItem.addEventListener('click', () => {
      document.getElementById("pointtemp").style.opacity = 1;
      if(document.getElementById("finaltime").textContent == ""){
        document.getElementById("finaltime").textContent = count;
      }
      const alternativeItems = alternativesView.querySelectorAll('.alternatives-item')
      for (const alternativeItem of alternativeItems) {
        if (answer === Number(alternativeItem.dataset.index)) {
          alternativeItem.setAttribute('class', 'green');
          document.querySelector("button").setAttribute("class", "show");
        } else {
          alternativeItem.setAttribute('class', 'red');
          document.querySelector("button").setAttribute("class", "show");
        }
      }
    })
  }
}

const aAudio = new Audio("./audio/SomDeAcerto.mp3");
const bAudio = new Audio("./audio/SomDeErro.mp3");
function answerCorrect(x){
  const answer = filterArray[randomics[questionId]].answer;
  let time = Number(document.getElementById("tempo").textContent)
    if(x == answer){
      document.getElementById("pointtemp").textContent == "" ? aAudio.play() : false;
      switch (true){
        case time<=5:
          if(document.getElementById("pointtemp").textContent == ""){
            total += 1000;
            document.getElementById("pointtemp").textContent = "+1000";
          }
          break;
        case time<10:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 900;
            document.getElementById("pointtemp").textContent = "+900";
          }
          break;
        case time<15:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 800;
            document.getElementById("pointtemp").textContent = "+800";
          }
          break;
        case time<20:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 700;
            document.getElementById("pointtemp").textContent = "+700";
          }
          break;
        case time<25:
          if(document.getElementById("pointtemp").textContent == ""){                    
            total += 600;
            document.getElementById("pointtemp").textContent = "+600";
          }
          break;
        case time<30:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 500;
            document.getElementById("pointtemp").textContent = "+500";
          }
          break;
        case time<35:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 400;
            document.getElementById("pointtemp").textContent = "+400";
          }
          break;
        case time<40:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 300;
            document.getElementById("pointtemp").textContent = "+300";
          }
          break;
        default:
          if(document.getElementById("pointtemp").textContent == ""){          
            total += 200;
            document.getElementById("pointtemp").textContent = "+200";
          }
      }
    }
    else{
      document.getElementById("pointtemp").textContent == "" ? bAudio.play() : false;
      if(document.getElementById("pointtemp").textContent == ""){
        total += 0;
        document.getElementById("pointtemp").textContent = "+0";
      }
    }
  document.getElementById("total").innerText = total;
}


document.querySelector('button').addEventListener('click', function() {
  document.getElementById("finaltime").textContent = "";
  document.getElementById("pointtemp").textContent = "";
  document.getElementById("pointtemp").style.opacity = 0;
  document.querySelector(".green").setAttribute("class", "hidden");
  let contred = document.querySelectorAll("div.red");
  for (var x = 1; x <= contred.length; x++){
    document.querySelector(".red").setAttribute("class", "hidden");
  }
  document.querySelector("button").setAttribute("class","hidden");
  questionId++;
  document.getElementById("tempo").textContent = 0;
  count = 0;
  showQuestion();
})

showQuestion();