const PARAGRAPHS = [
  "Every now and then, I would come across a website that simply blows my mind: not with its educational value, not with its immense eloquence, but with its breathtakingly interactive design.",

  "And I'm not alone. In 2012, countless readers experienced the same sense of awe and wonder when the New York Times published a comprehensive online account of <a href=\"https://www.nytimes.com/projects/2012/snow-fall/index.html#/\">the Tunnel Creek avalanche</a>, which led to the tragic deaths of three experienced skiers in a snow-clad windswept mountain range.",

  "What those readers might not have known at the time was that they were witnessing the birth (or at least incipience) of a new narrative medium known as scrollytelling.",

  "A portmanteau of \"scroll\" and \"storytelling\", scrollytelling refers to an online narrative technique where visual elements are revealed, triggered and modified as users scroll through a webpage.",

  "Despite its rarity, it's surprisingly not that difficult to find scrollytelling on the internet.",
  
  "Look, for instance, at the official product page of any modern iPhone model and... it's there: Stunning animations that play only as your mouse wheel turns, key images that intricately lock into place as irrelevant text advances past, and paragraphs that fade in only when they inch into your browser window.",

  "Another masterful demonstration of immersive scrollytelling can be found in the <a href=\"https://pudding.cool/\">The Pudding</a> <i>(as can the proof!)</i>, an excellent online magazine that specialises in data-driven stories that combine rigorous statistical analysis with elegantly illustrated visualisations.",

  "The Pudding is also what inspired this post, which, as you might have guessed, is an example of scrollytelling too, albeit a very basic one.",

  "As it turns out, creating a scrollytelling article from scratch is much easier said than done. Not only does it involve working out the proper positioning of page elements, but it also requires figuring out how graphics should be updated in response to bidirectional scrolling inputs.",

  "And those are just the tip of the iceberg. In a world where web design is becoming increasingly mobile-first, there's the additional question of how to fit everything on a six-inch phone screen without forgoing readability.",

  "As I tackled these design challenges, I can't help but feel a sense of newfound respect for the scrollytellers who make it look so easy. Scrollytelling isn't just a coding exercise, nor is it a solely artistic or creative one. It's all of those at the same time, plus a lot of back and forth between writers and designers.",

  "After all, there has to be a reason why The Pudding sticks to publishing just one or two stories a month.",

  "And as for myself? I think I'll stick with traditional storytelling for now."
];

function createStepDiv(stepID, contents) {
  const stepDiv = document.createElement("div");
  stepDiv.classList.add("step");
  stepDiv.setAttribute("step-id", stepID);
  stepDiv.innerHTML = contents;
  return stepDiv;
}

function addTextToHTML() {
  let nextStepID = 0;

  for (const paragraph of PARAGRAPHS) {
    document.getElementById("step-container").appendChild(
      createStepDiv(nextStepID++, paragraph)
    );
  }
}

function addStickyFunctionality() {
  // Access DOM elements
  const steps = Array.from(document.querySelectorAll(".step"));
  const graphic = document.getElementById("graphic");

  // Set the sticky offset in CSS
  const stickyOffset = "50%";
  graphic.style.top = stickyOffset;

  // Initialise all steps (except the first one) to be hidden (opacity = 0)
  Array.from(document.querySelectorAll("#graphic div")).slice(1).forEach(div => div.hidden = true);

  // Create a Waypoint object that updates the graphic when scrolling past each step
  steps.forEach(step => {
      const stepID = parseInt(step.getAttribute("step-id"));
      return new Waypoint({
          element: step,
          handler: function (direction) {
              const nextStep = direction === 'down' ? stepID : Math.max(0, stepID - 1);
              document.querySelectorAll("#graphic div").forEach(div => div.hidden = true);
              // console.log("graphic" + nextStep.toString());
              document.getElementById("graphic" + nextStep.toString()).hidden = false;
          },
          offset: stickyOffset,
      });
  });
}

function resize() {
  const stepContainer = document.getElementById("step-container");
  const graphicContainer = document.getElementById("graphic-container");

  const breakpoint = '(min-width: 800px)';
  const mobile = !window.matchMedia(breakpoint).matches;

  stepContainer.setAttribute("class", "");
  graphicContainer.setAttribute("class", "");

  stepContainer.classList.add(mobile ? "whole-of-scrolly-container" : "left-of-scrolly-container");
  graphicContainer.classList.add(mobile ? "whole-of-scrolly-container" : "right-of-scrolly-container");
}

addTextToHTML();
addStickyFunctionality();
resize();
addEventListener("resize", resize);