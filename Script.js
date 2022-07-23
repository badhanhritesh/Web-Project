
window.onload = () => {
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
  document.querySelector(".hamburger-menu").addEventListener("click", () => {           /*() => arrow function which will be executed after clicking the element */
    document.querySelector(".container").classList.toggle("change");                /*class list returns all the classes that the element has */      

  });   // The in and out sidebar displayed need this property to be used
  
  document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 1000);
  });