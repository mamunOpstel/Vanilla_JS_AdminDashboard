// Getting the charts container to add charts inside
const charts_container = document.querySelector(".chart_container");

const salesData = [
  {
    month: "January",
    sales: 15000,
  },
  {
    month: "February",
    sales: 12000,
  },
  {
    month: "March",
    sales: 18000,
  },
  {
    month: "April",
    sales: 20000,
  },
  {
    month: "May",
    sales: 22000,
  },
  {
    month: "June",
    sales: 25000,
  },
  {
    month: "July",
    sales: 30000,
  },
  {
    month: "August",
    sales: 28000,
  },
  {
    month: "September",
    sales: 24000,
  },
  {
    month: "October",
    sales: 26000,
  },
  {
    month: "November",
    sales: 23000,
  },
  {
    month: "December",
    sales: 27000,
  },
];
let chart_count = 0;

const createChart = (data, type) => {
  // counting the charts to create new chart with a new id
  chart_count += 1;
  // creating a "canvas" element to add the chart inside it
  const newChart = document.createElement("canvas");
  newChart.id = chart_count;
  // appending the new chart element inside the charts container
  charts_container.appendChild(newChart);

  // creating the chart inside the new chart element
  new Chart(newChart, {
    type: type,
    data: {
      labels: data.map((sale) => sale.month),
      datasets: [
        {
          label: "# of Sales",
          data: data.map((sale) => sale.sales),
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

createChart(salesData, "polarArea");
createChart(salesData, "doughnut");
createChart(salesData, "line");
createChart(salesData, "bar");
