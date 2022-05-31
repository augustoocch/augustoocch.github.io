/*function appear () {
    const options = {
        root: null, //keep this null will point to the viewport
        rootMargin: "0px", //the extra margin arrownd the target
        threshold: 0.1, //10% (percent intersection to run)
    };

    //Create intersection hover
    const observer = new IntersectionObserver(handleIntersect, options);

    const item = document.querySelector(".flexbox-container-1");
    observer.observe(item);

}

window.addEventListener("load", appear); 

function handleIntersect (entries) {
    //entries is an array that we observe
    //it's the item
    entries.forEach(entry => {

        if(entry.intersectionRatio >= 0.1) {
            //if so, entry target to de element
            entry.target.classList.add("active");
        }
        
    });
}*/

const scrollElements = document.querySelectorAll(".js-scroll");

scrollElements.forEach((el) => {
    el.style.opacity = 0
  })

  const elementInView = (el, percentageScroll = 100) => {
    const elementRight = el.getBoundingClientRect().right;
   
    return (
    elementRight <= 
      ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
    );
  };

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};


const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
  };
   
  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
    })
  }

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
