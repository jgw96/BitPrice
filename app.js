"use strict";

const getData = () => {
    const currentPrice = document.querySelector("#currentPrice");

    currentPrice.style.display = "none";

    fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
        method: "GET"
    }).then((response) => {
        return response.json();
    }).then((data) => {
        currentPrice.innerHTML = `&dollar;${data.bpi.USD.rate}`;

        currentPrice.style.display = "block";
        document.querySelector("#loading").style.display = "none";
    });
};

getData();

//update data automatically every 10 minutes
setInterval(() => {
    document.querySelector("#loading").style.display = "block";
    getData();
}, 600000);

//manually update data
document.querySelector("#checkButton").addEventListener("click", () => {
    document.querySelector("#loading").style.display = "block";
    getData();
});

//run notifications interval on seperate thread
const worker = new Worker("worker.js");
worker.postMessage("start");
