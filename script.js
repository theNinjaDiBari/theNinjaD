const valueSamsung = document.getElementById('value-samsung');
const priceSamsung = document.getElementById('price-samsung');
const plusSamsung = document.getElementById('plus-samsung');
const minusSamsung = document.getElementById('minus-samsung');
const sizeMediumSamsung = document.getElementById('size-medium-samsung');
const sizeLargeSamsung = document.getElementById('size-large-samsung');

let quantitySamsung = parseInt(valueSamsung.textContent, 10);
let costSamsung = 1400; 


const updatePriceSamsung = () => {
    priceSamsung.textContent = `${quantitySamsung * costSamsung}$`;
};


plusSamsung.addEventListener('click', () => {
    quantitySamsung += 1;
    valueSamsung.textContent = quantitySamsung;
    updatePriceSamsung();
});
minusSamsung.addEventListener('click', () => {
    if (quantitySamsung > 1) {
        quantitySamsung -= 1;
        valueSamsung.textContent = quantitySamsung;
        updatePriceSamsung();
    }
});

sizeMediumSamsung.addEventListener('click', () => {
    costSamsung = 1400;
    sizeMediumSamsung.classList.add('active');
    sizeLargeSamsung.classList.remove('active');
    updatePriceSamsung();
});
sizeLargeSamsung.addEventListener('click', () => {
    costSamsung = 1699;
    sizeLargeSamsung.classList.add('active');
    sizeMediumSamsung.classList.remove('active');
    updatePriceSamsung();
});





// iPhone 15
const valueIphone = document.getElementById('value-iphone');
const priceIphone = document.getElementById('price-iphone');
const plusIphone = document.getElementById('plus-iphone');
const minusIphone = document.getElementById('minus-iphone');
const sizeMediumIphone = document.getElementById('size-medium-iphone');
const sizeLargeIphone = document.getElementById('size-large-iphone');

let quantityIphone = parseInt(valueIphone.textContent, 10);
let costIphone = 1500; 


const updatePriceIphone = () => {
    priceIphone.textContent = `${quantityIphone * costIphone}$`;
};
plusIphone.addEventListener('click', () => {
    quantityIphone += 1;
    valueIphone.textContent = quantityIphone;
    updatePriceIphone();
});
minusIphone.addEventListener('click', () => {
    if (quantityIphone > 1) {
        quantityIphone -= 1;
        valueIphone.textContent = quantityIphone;
        updatePriceIphone();
    }
});
sizeMediumIphone.addEventListener('click', () => {
    costIphone = 1500;
    sizeMediumIphone.classList.add('active');
    sizeLargeIphone.classList.remove('active');
    updatePriceIphone();
});
sizeLargeIphone.addEventListener('click', () => {
    costIphone = 1700;
    sizeLargeIphone.classList.add('active');
    sizeMediumIphone.classList.remove('active');
    updatePriceIphone();
});



// Xiaomi 12
const valueXiaomi = document.getElementById('value-xiaomi');
const priceXiaomi = document.getElementById('price-xiaomi');
const plusXiaomi = document.getElementById('plus-xiaomi');
const minusXiaomi = document.getElementById('minus-xiaomi');
const sizeMediumXiaomi = document.getElementById('size-medium-xiaomi');
const sizeLargeXiaomi = document.getElementById('size-large-xiaomi');

let quantityXiaomi = parseInt(valueXiaomi.textContent, 10);
let costXiaomi = 1500; 
const updatePriceXiaomi = () => {
    priceXiaomi.textContent = `${quantityXiaomi * costXiaomi}$`;
};
plusXiaomi.addEventListener('click', () => {
    quantityXiaomi += 1;
    valueXiaomi.textContent = quantityXiaomi;
    updatePriceXiaomi();
});
minusXiaomi.addEventListener('click', () => {
    if (quantityXiaomi > 1) {
        quantityXiaomi -= 1;
        valueXiaomi.textContent = quantityXiaomi;
        updatePriceXiaomi();
    }
});
sizeMediumXiaomi.addEventListener('click', () => {
    costXiaomi = 1500;
    sizeMediumXiaomi.classList.add('active');
    sizeLargeXiaomi.classList.remove('active');
    updatePriceXiaomi();
});
sizeLargeXiaomi.addEventListener('click', () => {
    costXiaomi = 1700;
    sizeLargeXiaomi.classList.add('active');
    sizeMediumXiaomi.classList.remove('active');
    updatePriceXiaomi();
});



// Redmi Note 14
const valueRedmi = document.getElementById('value-redmi');
const priceRedmi = document.getElementById('price-redmi');
const plusRedmi = document.getElementById('plus-redmi');
const minusRedmi = document.getElementById('minus-redmi');
const sizeMediumRedmi = document.getElementById('size-medium-redmi');
const sizeLargeRedmi = document.getElementById('size-large-redmi');

let quantityRedmi = parseInt(valueRedmi.textContent, 10);
let costRedmi = 1500; 
const updatePriceRedmi = () => {
    priceRedmi.textContent = `${quantityRedmi * costRedmi}$`;
};
plusRedmi.addEventListener('click', () => {
    quantityRedmi += 1;
    valueRedmi.textContent = quantityRedmi;
    updatePriceRedmi();
});
minusRedmi.addEventListener('click', () => {
    if (quantityRedmi > 1) {
        quantityRedmi -= 1;
        valueRedmi.textContent = quantityRedmi;
        updatePriceRedmi();
    }
});
sizeMediumRedmi.addEventListener('click', () => {
    costRedmi = 1500;
    sizeMediumRedmi.classList.add('active');
    sizeLargeRedmi.classList.remove('active');
    updatePriceRedmi();
});
sizeLargeRedmi.addEventListener('click', () => {
    costRedmi = 1700;
    sizeLargeRedmi.classList.add('active');
    sizeMediumRedmi.classList.remove('active');
    updatePriceRedmi();
});
