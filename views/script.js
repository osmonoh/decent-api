const navLinks = document.querySelectorAll(".nav-link");
const methods = document.querySelectorAll(".method");

const btnGetFruits = document.querySelector(".btn-get-fruits");
const btnGetFruit = document.querySelector(".btn-get-fruit");
const btnGetFruitNf = document.querySelector(".btn-get-fruit-nf");
const btnPostFruit = document.querySelector(".btn-post-fruit");
const btnPutFruit = document.querySelector(".btn-put-fruit");
const btnPatchFruit = document.querySelector(".btn-patch-fruit");
const btnDeleteFruit = document.querySelector(".btn-delete-fruit");

const metHeaderType = document.querySelector(".methods-header-type");
const reqHeaderUrl = document.querySelector(".request-header-url");
const resHeaderCode = document.querySelector(".response-header-code");

const resExample = document.querySelector(".response-example");
const reqExample = document.querySelector(".request-example");

const formSupport = document.querySelector(".support-form");
const btnSupport = document.querySelector(".btn-support");

// NAVBAR LINKS - scrolling to sections without changing url(#)
navLinks.forEach((item) => {
  item.addEventListener("click", () => {
    const anchor = document.querySelector(`#${item.id}-anchor`);
    anchor.scrollIntoView(true);
  });
});

// initial fetch for default content of try-section
fetch("/api/fruits")
  .then((res) => res.json())
  .then((data) => {
    resExample.textContent = JSON.stringify(data, null, 2);
  });

// BUTTONS FOR REQUEST METHODS //////////////////////////////
//
// universal click handler function for buttons
const btnClickHandler = (e, url, method, code, body = undefined) => {
  metHeaderType.textContent = method;
  reqHeaderUrl.textContent = "/api" + url;
  resHeaderCode.textContent = code;

  fetch("/api" + url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body, null, 2),
  })
    .then((res) => res.json())
    .then((data) => {
      resExample.textContent = JSON.stringify(data, null, 2);

      reqExample.textContent = JSON.stringify(body, null, 2);
      if (body && reqExample.classList.contains("hidden"))
        reqExample.classList.remove("hidden");
      if (!body && !reqExample.classList.contains("hidden"))
        reqExample.classList.add("hidden");
    });

  methods.forEach((item) => {
    if (item.classList.contains("selected-method")) {
      item.classList.remove("selected-method");
    }
  });
  e.target.parentElement.classList.add("selected-method");
};

// click event listeners for buttons
btnGetFruits.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits", "GET", "200")
);

btnGetFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/15", "GET", "200")
);

btnGetFruitNf.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/89", "GET", "404")
);

btnPostFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits", "POST", "201", {
    genus: "Prunus",
    name: "Plum",
    family: "Rosaceae",
    order: "Rosales",
    nutritions: {},
  })
);

btnPutFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/15", "PUT", "200", {
    genus: "Carica",
    name: "Papaya",
    id: 15,
    family: "Caricaceae",
    order: "Brassicales",
    nutritions: {},
  })
);

btnPatchFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/15", "PATCH", "200", {
    name: "Plum",
    nutritions: {},
  })
);

btnDeleteFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/15", "DELETE", "204")
);
////////////////////////////////////////////////////////////

// preventing form from submitting
formSupport.addEventListener("submit", (e) => {
  e.preventDefault();
});
