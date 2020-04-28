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


function showQuestion() {
  document.querySelector('.questio').innerHTML = questions[questionId].Question
  document.querySelector('.title').innerHTML = questions[questionId].title
  const alternatives = questions[questionId].alternatives
  const alternativesView = document.querySelector('.alternatives')
  const answer = questions[questionId].answer

  for (alternativeIndex in alternatives) {
    const item = `<div class="alternatives-item" onclick="answerCorrect(${alternativeIndex})" data-index="${alternativeIndex}">${alternatives[alternativeIndex]}</div>`
    alternativesView.insertAdjacentHTML('beforeend', item)
  
    // click
    const lastItem = alternativesView.querySelector('.alternatives-item:last-child')
    lastItem.addEventListener('click', () => {
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

function choose(){
    document.querySelector('.pla').addEventListener('click', () => {
    document.getElementById('src').setAttribute('src', 'Meio_Ambiente.js')
    console.log('adsf')
  });
}
window.addEventListener('load', choose)
function answerCorrect(x){
  const answer = questions[questionId].answer;
  let time = Number(document.getElementById("tempo").textContent)
    if(x == answer){
      switch (true){
        case time<=5:
          total += 1000;
          break;
        case time<10:
          total += 900;
          break;
        case time<15:
          total += 800;
          break;
        case time<20:
          total += 700;
          break;
        case time<25:
          total += 600;
          break;
        case time<30:
          total += 500;
          break;
        case time<35:
          total += 400;
          break;
        case time<40:
          total += 300;
          break;
        default:
          total += 200;
      }
    //   if (time <= 5) total += 1000

    //   else if (time < 10) total += 900
      
    //   else if (time < 15) total += 800
      
    //   else if (time < 20) total += 700
      
    //   else if (time < 25) total += 600
      
    //   else if (time < 30) total += 500
      
    //   else if (time < 35) total += 400
      
    //   else if (time < 40) total += 300
      
    //   else if (time < 45) total += 200
    }
    else{
      total -= 1;
    }
  document.getElementById("total").innerText = total;
}


document.querySelector('button').addEventListener('click', function() {
  document.querySelector(".green").setAttribute("class", "hidden");
  document.querySelector(".red").setAttribute("class", "hidden");
  document.querySelector(".red").setAttribute("class", "hidden");
  document.querySelector(".red").setAttribute("class", "hidden");
  document.querySelector("button").setAttribute("class","hidden");
  questionId++;
  document.getElementById("tempo").textContent = 0;
  count = 0;
  showQuestion();
})

showQuestion();