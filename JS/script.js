let navbar = document.querySelector(".navbar");
window.onscroll = () => {
  // here this is pointing toword the window
  // when we croll more than 20vh in y direction then add sticky in navbar
  this.scrollY > 20
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};

// Skill Bar Animation
const skill_wrap = document.querySelector(".about-skill");
const skill_bar = document.querySelectorAll(".progress-line");
window.addEventListener("scroll", () => {
  // checkScroll(skill_wrap);
  skillsEffect();
});

// every time we scroll checking we exceeded the about skills or not
function checkScroll(ele) {
  // getting the top postion of about skills relative to view port in other word we need to get amount of pixels between about-skill and the top edge of thw window
  let rect = ele.getBoundingClientRect();
  console.log(rect);
  console.log(ele.offsetHeight);
  // after knowing the amount of pixels btween the top edge of about skills and the top edge of window . Now we will check we exceeded the bottom edge of about skill ot not
  if (window.innerHeight >= rect.top + 270) {
    return true;
  }
  return false;
}

function skillsEffect() {
  if (!checkScroll(skill_wrap)) {
    return;
  } else {
    skill_bar.forEach((skills) => {
      skills.style.width = skills.dataset.progress;
    });
  }
}
