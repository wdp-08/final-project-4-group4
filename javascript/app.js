const cards = document.querySelectorAll(".memory-card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;
let totalCard = 0;

const state = {
    attempt: 0,
    timecount: 0,
    loop: null
}

function flipCard(e) {
    let clickCard = e.target;
    if (clickCard !== cardOne && !disableDeck && !clickCard.classList.contains("flip")) {
        clickCard.classList.add("flip");
        if (!cardOne) {
            return (cardOne = clickCard);
        }
        cardTwo = clickCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view").src,
            cardTwoImg = cardTwo.querySelector(".back-view").src;
        state.attempt++
        matchCards(cardOneImg, cardTwoImg);
    }
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matched++;
        if (matched == totalCard / 2) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}

function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = arrCard;
    arr = [...arr, ...arr];
    arr.sort(() => Math.random() - 0.5);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let backImgTag = card.querySelector(".back-view");
        backImgTag.src = `img/img-${arr[i]}.png`;
        backImgTag.alt = `card-${arr[i]}`;
        card.addEventListener("click", flipCard);
    });
}

const timeloop = () => {
    state.loop = setInterval(() => {
        state.timecount++

        document.querySelector('#attempt').innerHTML = `${state.attempt}`
        document.querySelector('#time').innerHTML = `${state.timecount} sec`

    }, 1000)
}

function easyLevel() {
    totalCard = 24;
    arrCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4];

    cards.forEach((card) => {
        setTimeout(() => {
            card.classList.add("flip");
            setTimeout(() => {
                card.classList.remove("flip");

                const turnCard = document.querySelectorAll(".flip");
                if (turnCard.length === 0) {
                    timeloop();
                }

            }, 4000);
        }, 1000);

        card.addEventListener("click", function (e) {
            if (!disableDeck) {
                flipCard(e);
            }
        });
    });
}

function MediumLevel() {
    totalCard = 32;
    arrCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];

    cards.forEach((card) => {
        setTimeout(() => {
            card.classList.add("flip");
            setTimeout(() => {
                card.classList.remove("flip");

                const turnCard = document.querySelectorAll(".flip");
                if (turnCard.length === 0) {
                    timeloop();
                }

            }, 6000);
        }, 1000);

        card.addEventListener("click", function (e) {
            if (!disableDeck) {
                flipCard(e);
            }
        });
    });
}

function HardLevel() {
    totalCard = 40;
    arrCard = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8, 2, 4, 5, 6];

    cards.forEach((card) => {
        setTimeout(() => {
            card.classList.add("flip");
            setTimeout(() => {
                card.classList.remove("flip");

                const turnCard = document.querySelectorAll(".flip");
                if (turnCard.length === 0) {
                    timeloop();
                }

            }, 8000);
        }, 1000);

        card.addEventListener("click", function (e) {
            if (!disableDeck) {
                flipCard(e);
            }
        });
    });
}