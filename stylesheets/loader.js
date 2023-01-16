/*
  Code from https://www.youtube.com/watch?v=-HS9IIuT_Mo

  Once the page has fully loaded,

  document.querySelector(.loader) selects the elements with a class of loader
  loader.classList.add("loader--hidden"); adds the class of loader--hidden, which makes the spinner fade away
  
  Once the transition has finished,

  document.body.removeChild(document.querySelector(".loader")); removes the loader class from the element
*/
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(document.querySelector(".loader"));
  });
});
