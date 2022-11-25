const experience = document.getElementById("experience");

const dateStartWorkMonth = 7;
const yearStartWork = 2022;

let calculateYear = (new Date().getFullYear() - yearStartWork);
let calculateMonth = (new Date().getMonth() + 1 - dateStartWorkMonth + 1) / 12;

experience.innerHTML = String((calculateYear + calculateMonth).toFixed(1));
