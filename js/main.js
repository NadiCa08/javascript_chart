// Javascriptt file //
console.log('This should be working');

let data = []

    fetch("./data/currencyrate.json")
    .then(response => response.json())
    .then(data => {
        console.log("Seems to be working!");
        console.log(data.rates);
        data = data.rates;
        console.log(data);
          for (data in dictionary) {
            if (data.hasOwnProperty()) {
                continue;
        console.log(data, dictionary[data]);
    }
};

//    bar.style.height = height + "px";
//    BarChart.appendChild(bar);

  


 function getData() {
  console.log('hello');
    fetch("./data/currencyrate.json")
    .then(response => response.json())
    .then(data => {
        console.log("Seems to be working!");
        console.log(data.rates);
        setState({data:data});
        console.log('test', data[0])
        let BarChart = document.querySelector('#currency');
        console.log('Accessing the Bar-chart')
        console.log(data);
        let height = 70;
        let bar = document.createElement("div");
        bar.style.height = height + "px";
        BarChart.appendChild(bar);;
        });
      }

BarChart();
