const navAnim = () => {
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".header__list")
    const navlinks = document.querySelectorAll(".header__list li")

    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle("toggle")
    });
};

navAnim();

const value = document.querySelector("#value");
const input = document.querySelector("#pi_input");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

const value2 = document.querySelector("#value2");
const input2 = document.querySelector("#pi_input2");
value2.textContent = input2.value;
input2.addEventListener("input", (event) => {
  value2.textContent = event.target.value;
});
