// NAVBAR LINKS - scrolling to sections without changing url(#)
const navLinkAll = document.querySelectorAll(".nav-link");

navLinkAll.forEach((item) => {
  item.addEventListener("click", () => {
    const anchor = document.querySelector(`#${item.id}-anchor`);
    anchor.scrollIntoView(true);
  });
});

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

fetch("/configData")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// initial fetch for default content of try-section
fetch("/fruits")
  .then((res) => res.json())
  .then((data) => {
    resExample.textContent = JSON.stringify(data, null, 2);
  });

// BUTTONS FOR REQUEST METHODS //////////////////////////////
//
// universal click handler for buttons
const btnClickHandler = (e, url, method, code, body = undefined) => {
  metHeaderType.textContent = method;
  reqHeaderUrl.textContent = url;
  resHeaderCode.textContent = code;
  fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: body,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      resExample.textContent = JSON.stringify(data, null, 2);

      reqExample.textContent = body;
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
  btnClickHandler(
    e,
    "/fruits",
    "POST",
    "201",
    JSON.stringify(
      {
        genus: "Prunus",
        name: "Plum",
        family: "Rosaceae",
        order: "Rosales",
        nutritions: {},
      },
      null,
      2
    )
  )
);

btnPutFruit.addEventListener("click", (e) =>
  btnClickHandler(
    e,
    "/fruits/15",
    "PUT",
    "200",
    JSON.stringify(
      {
        genus: "Carica",
        name: "Papaya",
        id: 15,
        family: "Caricaceae",
        order: "Brassicales",
        nutritions: {},
      },
      null,
      2
    )
  )
);

btnPatchFruit.addEventListener("click", (e) =>
  btnClickHandler(
    e,
    "/fruits/15",
    "PATCH",
    "200",
    JSON.stringify(
      {
        name: "Plum",
        nutritions: {},
      },
      null,
      2
    )
  )
);

btnDeleteFruit.addEventListener("click", (e) =>
  btnClickHandler(e, "/fruits/15", "DELETE", "204")
);
////////////////////////////////////////////////////////////
