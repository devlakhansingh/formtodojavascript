let form = document.querySelector("form")
let name = document.querySelector("#name")
let email = document.querySelector("#email")

let mobile = document.querySelector("#mobile")
let ul = document.querySelector("ul")
let skill = document.querySelector("#skill")
let education = document.querySelector("#education")
let card = document.querySelector("card")
let body = document.querySelector("body")
let savebtn = document.querySelector("#save")
// save form function

function saveform(e) {
  e.preventDefault()
  let li = document.createElement('li')
  let newli = document.createElement('li')
  let textli = document.createElement('li')

  li.innerText = name.value
  newli.innerText = email.value
  textli.innerText = mobile.value

  newli.className = "list-group-item rounded-0"
  let newBtn = document.createElement('button')
  newBtn.innerText = "Contact"
  newBtn.className = "btn btn-success btn-sm rounded-0 "
  newBtn.style.marginBottom = "10px"
  ul.style.listStyle = 'none'
  ul.appendChild(li)
  skill.appendChild(newli)
  education.appendChild(textli)
  let whatsLink = document.createElement("a");
  whatsLink.innerText = "WhatsApp";
  whatsLink.setAttribute("href", `https://wa.me/91${input.value}`);
  card.appendChild(whatsLink);
  card.appendChild(newBtn)
  form.reset()
}
form.addEventListener("submit", saveform)


//  change background of inputs
function changebg(e) {
  e.preventDefault()
  name.style.color = "white"
  name.style.backgroundColor = "rgb(238, 130, 238)"
  email.style.color = "#F7DB6A"
  email.style.backgroundColor = "rgb(238, 130, 238)"
  mobile.style.color = "#F7DB6A"
  mobile.style.backgroundColor = "#3A98B9"
}

name.addEventListener("click", changebg)



// change clic k body

function changewholebody(e) {
  e.preventDefault()
  body.style.backgroundColor = "#FFACAC"
}
save.addEventListener("click", changewholebody)




