let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

increaseBtn.addEventListener("click", function () {
    count++;
    countDisplay.textContent = count;

    if (count >= 10) {
        increaseBtn.disabled = true;
    }
});

decreaseBtn.addEventListener("click", function () {
    count--;
    countDisplay.textContent = count;

    if (count < 10) {
        increaseBtn.disabled = false;
    }
});
