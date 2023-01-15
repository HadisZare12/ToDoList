var btn = document.getElementById("push");
var input = document.getElementById("mainInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");



function inputLenght(){
    return input.value.length;
}
function createElement(){
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function cross(){
    li.classList.toggle("done");
  }
  li.addEventListener("click",cross);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click",delList);
  function delList(){
    li.classList.add("delete");
  }

}
function addWork(){
  if(inputLenght() > 0){
    createElement();
  }
}
function addKey(event){
    if(inputLenght() > 0 &&event.which === 13){
        createElement();
      }

}
btn.addEventListener("click", addWork);
input.addEventListener("keypress",addKey);
