// Javascriptt file //
console.log('This should be working');

let state = {
    "test": "data"
};


 function doFetch() {
  console.log('Begin Fetching JSON');
    fetch("./data/currencyrate.json")
    .then(response => response.json())
    .then(data => {
        console.log("Seems to be fetching currency-data");
        console.log(data);
//            setState({data: data.rates});
            console.log('test', data[0])

                for (let [key, value] of Object.entries(data.rates)) {
                    console.log('key:', key, 'and the value:', value);
//      for (let [data, value] of Object.entries(data.rates)) {
//        console.log('test:', test, 'currency rates:', data.rates);
        let Chart = document.querySelector("#currency");
        console.log("Accessing the Bar-chart")
        console.log(data);
        let height = 80 / value;
        let bar = document.createElement("div");
        console.log("Attempting to retreive graph")
        bar.classList.add("BarChart");
        bar.style.height = height + "px";
        console.log("Setting height of bar")
        bar.textContent = key;
        chart.appendChild(bar);
      }
//      setState.data = data;
    });
  }

doFetch();
