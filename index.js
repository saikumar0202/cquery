function c(selector) {
  var element = document.querySelector(selector);
  var data = {
    hide: () => (element.style.display = "none"),
    show: () => (element.style.display = "block"),
    on: (event, callback) => element.addEventListener(event, callback),
    addClass: (classname) => element.classList.add(classname),
    removeClass: (classname) => element.classList.remove(classname),
    attr: (attr, value) => {
      if (value) {
        element.setAttribute(attr, value);
      } else {
        element.getAttribute(attr);
      }
    },
    css: (obj) => {
      for (let key in obj) {
        element.style[key] = obj[key];
      }
    },
    toggleClass: (className) => {
      element.classList.toggleClass(className);
    },
    removeAttr: (attr) =>{
      element.removeAttribute(attr);
    }
  };
  return data;
}
