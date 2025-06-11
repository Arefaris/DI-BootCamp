"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let formEl = document.querySelector(".form");
let heightEl = document.querySelector(".height");
let genderEl = document.querySelector(".gender");
let yearEl = document.querySelector(".year");
let worldEl = document.querySelector(".world");
let nameEl = document.querySelector(".name");
let submitBtnEl = document.querySelector(".submit-input");
let loadingIconEl = document.querySelector(".loading");
let switchDisplay = document.querySelectorAll(".switch");
submitBtnEl.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        switchDisplay.forEach(el => el.style.display = "none");
        loadingIconEl.style.display = "block";
        let char = yield getCharacters();
        loadingIconEl.style.display = "none";
        yield renderDom(char);
        switchDisplay.forEach(el => el.style.display = "block");
    }
    catch (err) {
        console.log(err);
        loadingIconEl.style.display = "none";
        nameEl.style.display = "block";
        nameEl.textContent = "Oh No! That person isnt available";
    }
}));
const getCharacters = () => __awaiter(void 0, void 0, void 0, function* () {
    let rngUID = Math.floor(Math.random() * (82 - 1) + 1);
    let response = yield fetch(`https://www.swapi.tech/api/people/${rngUID}`);
    console.log(response.status);
    if (response.status !== 200) {
        throw new Error(`Something went wrong status code: ${response.status}`);
    }
    let data = yield response.json();
    let char = {
        name: data.result.properties.name,
        birth_year: data.result.properties.birth_year,
        gender: data.result.properties.gender,
        height: data.result.properties.height,
        homeworld: data.result.properties.homeworld,
    };
    return char;
});
const renderDom = (res) => __awaiter(void 0, void 0, void 0, function* () {
    nameEl.textContent = res.name;
    heightEl.textContent = "Height: " + res.height;
    genderEl.textContent = "Gender: " + res.gender;
    yearEl.textContent = "Birth Year: " + res.birth_year;
    worldEl.textContent = "Home World: " + res.homeworld;
});
