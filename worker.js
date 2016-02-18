"use strict";

onmessage = () => {
    setInterval(() => {
        fetch("https://api.coindesk.com/v1/bpi/currentprice.json", {
            method: "GET"
        }).then((response) => {
            return response.json();
        }).then((data) => {
            new Notification(`Current Price of BitCoin is ${data.bpi.USD.rate}!`);
        });
    }, 3600000);
};