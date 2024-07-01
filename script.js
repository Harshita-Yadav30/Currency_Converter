let fromCon = document.querySelector("#from");
let toCon = document.querySelector("#to");

for (code in countryList){
    if (code === "USD")
        fromCon.innerHTML += `<option value=${code} selected>${code}</option>`
    else
        fromCon.innerHTML += `<option value=${code}>${code}</option>`

    if (code === "INR")
        toCon.innerHTML += `<option value=${code} selected>${code}</option>`
    else
        toCon.innerHTML += `<option value=${code}>${code}</option>`
}

fromCon.addEventListener("change", (evt)=>{
    let currCode = evt.target.value;
    let fromFlag = fromCon.parentElement.querySelector("img");
    fromFlag.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`
})

toCon.addEventListener("change", (evt)=>{
    let currCode = evt.target.value;
    let toFlag = toCon.parentElement.querySelector("img");
    toFlag.src = `https://flagsapi.com/${countryList[currCode]}/flat/64.png`
})

let button = document.querySelector("button");
let from = document.querySelector("#from");
let to = document.querySelector("#to");
let res = document.querySelector("#result");

button.addEventListener("click", async () => {
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from.value.toLowerCase()}.json`);
    let exchange = await response.json()
    let rate = exchange[from.value.toLowerCase()][to.value.toLowerCase()];

    let amount = document.querySelector("#amount").value;
    if (amount < 0 || amount === "")
        amount = 1;
    res.innerText = `${amount} ${from.value} = ${amount * rate} ${to.value}`;
})