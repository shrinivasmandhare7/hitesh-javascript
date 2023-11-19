//Immediately Invoked Function Expression(IIFE)
//https://developer.mozilla.org/en-US/docs/Glossary/IIFE

(function chai() {
  //named IIFE
  console.log("Immediately Invoked Function Expression");
})();

(() => {
  //unnamed IIFE
  console.log("Immediately Invoked Function Expression");
})();
