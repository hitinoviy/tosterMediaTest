const offerTime = document.querySelector('.offer-time');

export const setupBanner = (oldPrice = '250.00',newPrice = '160.00', deadLine = new Date('2023-09-23T00:00:00')) =>{
    setCounter(deadLine)
    setPrice(oldPrice,newPrice)
}
const setPrice = (oldPrice = '250.00',newPrice='160.00') =>{
    const oldPriceEl = document.querySelector('.old-price');
    const newPriceEl = document.querySelector('.new-price');

    oldPriceEl.textContent = `R ${oldPrice}`;
    newPriceEl.textContent = `R ${newPrice}`;
}
const setCounter = (deadLine = null) =>{
    const currentTime = new Date();
    const currentDay = currentTime.getDate();
    const endDay = deadLine ? deadLine : new Date(`2023-09-${currentDay+1}T00:00:00`);
    updateCounter(endDay)
}

const updateCounter = (endDay) => {
    const currentTime = new Date();
    const currentYear = currentTime.getFullYear();
    const currentMonth = currentTime.getMonth();
    const currentDay = currentTime.getDate();
    const dist = endDay - currentTime;
    let toHours = Math.floor(dist/1000/60/60);
    let toMinutes = Math.floor(dist / 1000 / 60) % 60;
    let toSeconds = Math.floor(dist / 1000) % 60;
    toHours =  toHours < 10 ? '0' + toHours : toHours;
    toMinutes = toMinutes < 10 ? '0' + toMinutes : toMinutes;
    toSeconds = toSeconds < 10 ? '0' + toSeconds : toSeconds;
    offerTime.innerText = `${toHours}:${toMinutes}:${toSeconds}`;
    const dateValue = `${currentYear}-${currentMonth}-${currentDay}T${toHours}:${toMinutes}:${toSeconds}`
    offerTime.setAttribute('datetime', dateValue)
    setTimeout(()=> updateCounter(endDay), 1000)
}

