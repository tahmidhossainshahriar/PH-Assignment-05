function getElement(id) {
    const element = document.getElementById(id);
    return element;
}

const sidberContainer = getElement("sidberCartContainer");

getElement("card-container").addEventListener("click", function (e) {
    // heart click and heart increment
    if (e.target.className.includes("heart-icon")) {
        const heartCountDisply = getElement("heartCountDisply");
        const heartCountDisplyconvert = parseInt(heartCountDisply.innerText);
        heartCountDisply.innerText = heartCountDisplyconvert + 1;
    }

    // call button alert and show the cart info. decrement coin
    if (e.target.className.includes("callBtn")) {
        const coin = getElement("coinDisplay");
        let coinNumber = parseInt(coin.innerText);
        
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        let ampm = hours >= 12 ? "PM" : "AM";

        if (coinNumber >= 20) {
            const callBtn = e.target;
            const cardElement = callBtn.closest('.bg-white');
            const cardTitle = cardElement.querySelector('h3').innerText;
            const contactNumber = cardElement.querySelector('.font-bold').innerText;

            alert(`${cardTitle} \n 📞 calling ${contactNumber}...`);
            
            coinNumber -= 20;
            coin.innerText = coinNumber;

            const newSidberCard = document.createElement("div");
            newSidberCard.innerHTML = `
                <div class="flex flex-col md:flex-row justify-between p-3 bg-gray-100 rounded-lg mt-2 items-start md:items-center">
                    <div>
                        <h1 class="text-[10px] md:text-sm font-semibold">${cardTitle}</h1>
                        <p class="text-gray-500 text-[10px] md:text-sm">${contactNumber}</p>
                    </div>
                    <div class="text-[10px] md:text-xs text-gray-500 mt-2 md:mt-0">${hours}:${minutes}:${seconds} ${ampm}</div>
                </div>`;
            sidberContainer.appendChild(newSidberCard);
        } else {
            alert("You don't have enough coins! You need at least 20 coins to make a call.");
        }
    }
    
    // Copy button functionality
    if (e.target.className.includes("copy-btn")) {
        const copyBtn = e.target;
        const cardElement = copyBtn.closest('.bg-white');
        const serviceNumber = cardElement.querySelector('.font-bold').innerText;

        navigator.clipboard.writeText(serviceNumber)
            .then(() => {
                alert(`Copied: ${serviceNumber}`);
                const copyCountDisplay = getElement("copyCount");
                let copyCountNumber = parseInt(copyCountDisplay.innerText);
                copyCountDisplay.innerText = copyCountNumber + 1;
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                alert('Failed to copy the number. Please try again.');
            });
    }
});

// clear button functionality
const clearBtn = getElement("clearBtn");
clearBtn.addEventListener("click", function () {
    sidberContainer.innerHTML = "";
});