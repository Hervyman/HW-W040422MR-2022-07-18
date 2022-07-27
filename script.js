const inputName = document.getElementById("name");

const inputAge = document.getElementById("age");

const inputColor = document.getElementById("color");

const inputCountry = document.getElementById("country");

const userCard = document.getElementById("card");

const inputMale = document.getElementById("male")

const inputFemale = document.getElementById("female")


function displayUserCard() {
if (inputAge.value < 5 || inputName.value.length < 2) {
  alert("enter correct details"); 
  
  inputAge.value = "" 
  inputName.value = ""
  return 
}


  userCard.innerHTML +=
  `<div class="card-header" style="background-color:${inputColor.value}">${inputName.value}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${inputAge.value}</li>
    <li class="list-group-item">${inputCountry.value}</li>
    <li class="list-group-item">${getGender()}</li>
  </ul>`;
  inputAge.value = "" 
  inputName.value = ""

}

function getGender() {
  
  let gender
  if (inputMale.checked)  { gender = inputMale.value}
  else if (inputFemale.checked) {gender = inputFemale.value}
  return gender
}











