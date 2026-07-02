const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg"
];

let current = 0;

const img = document.querySelector(".profile");
const msg = document.querySelector(".message");
const btn = document.getElementById("nextBtn");

btn.addEventListener("click", function () {

    current++;

    if(current < images.length){
        img.src = images[current];
    }
    else{
        document.querySelector(".card").innerHTML = `
        <h1 style="color:#8a2be2;">🎉 Happy Birthday Suman 🎂</h1>

        <h2>💜 Wishing You Endless Happiness 💜</h2>

        <p style="font-size:20px;line-height:1.8;color:#555;">
        May every dream of yours come true.<br><br>

        Keep smiling, keep shining,<br>
        and may this year bring you lots of love,
        success and happiness. 🌸✨<br><br>

        <b>Happy Birthday Once Again! 💜</b>
        </p>

        <h1>🎈🎂🎁🎉</h1>
        `;
    }

});
