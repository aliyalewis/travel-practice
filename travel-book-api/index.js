const usersUrl = "http://localhost:3000/users";
const travelUrl = "http://localhost:3000/travel_logs";
const countriesUrl = "http://localhost:3000/countries";
const bucketUrl = "http://localhost:3000/bucket_lists";

let activeDropdown = {};
document.getElementById("countries").addEventListener("click", function() {
  if (activeDropdown.id && activeDropdown.id !== event.target.id) {
    activeDropdown.element.style.visibility = "hidden";
  }
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].classList.contains("dropdown-selection")) {
      activeDropdown.id = this.id;
      activeDropdown.element = this.children[i];
      this.children[i].style.visibility = "visible";
    }
  }
});

window.onclick = function(event) {
  if (!event.target.classList.contains("dropdown-button")) {
    activeDropdown.element.style.visibility = "hidden";
  }
};

main();

function main() {
  loginPrompt();
}

function loginPrompt() {
  const form = document.createElement("form");
  const main = document.getElementById("main");

  const p = document.createElement("p");
  p.innerText = "Please login to continue!";
  main.appendChild(p);
  main.appendChild(form);

  const input = document.createElement("input");
  form.appendChild(input);
  input.setAttribute("class", "input-text");
  input.setAttribute("value", "");

  const login = document.createElement("input");
  login.setAttribute("type", "submit");
  login.setAttribute("value", "Login");
  login.setAttribute("class", "submit");
  form.appendChild(login);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    fetchUser(e);
  });
}

function fetchUser(e) {
  let username = e.target[0].value;

  fetch(usersUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: username
    })
  })
    .then(res => res.json())
    .then(json => {
      renderUser(json);
    });
}

function renderUser(user) {
  let form = document.querySelector("form");
  let p = document.querySelector("p");
  p.setAttribute("hidden", "hidden");
  form.setAttribute("hidden", "hidden");
  let userName = user.name;
  let userPic = user.avatar;
  let h1 = document.querySelector("h1");
  const main = document.getElementById("main");
  h1.innerText = "Where to " + userName + "?";
  fetchCountries();
}

function fetchCountries() {
  fetch(countriesUrl)
    .then(res => res.json())
    .then(json => {
      renderCountries(json);
    });
}

function renderCountries(countries) {
  let div = document.getElementById("countries");
  let asiaDiv = document.createElement("div");
  asiaDiv.setAttribute("class", "dropdown-button");
  asiaDiv.innerText = "Asia";
  div.appendChild(asiaDiv);

  let span = document.createElement("span");
  span.setAttribute("class", "triangle");
  // span.innerHTML = "&#9660"
  div.appendChild(span);

  let ul = document.createElement("ul");
  ul.setAttribute("class", "dropdown-selection");
  div.appendChild(ul);

  let li = document.createElement("li");
  ul.appendChild(li);

  countries.forEach(function(country) {
    if (asiaDiv.innerText === country.location) {
      li.innerText = country.name;
    }
  });

  document.getElementById("countries").addEventListener("click", function() {
    for (var i = 0; i < this.children.length; i++) {
      if (this.children[i].classList.contains("dropdown-selection")) {
        this.children[i].style.visibility = "visible";
      }
    }
  });
}
