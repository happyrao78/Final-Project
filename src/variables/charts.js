// Daily Traffic Dashboards Default

export const barChartDataDailyTraffic = [
  {
    name: "Topics",
    data: [20, 30, 40, 20, 45, 50, 30],
  },
];

export const barChartOptionsDailyTraffic = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["00", "04", "08", "12", "14", "16", "18"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: true,
      style: {
        colors: "#CBD5E0",
        fontSize: "14px",
      },
    },
  },
  grid: {
    show: false,
    strokeDashArray: 5,
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      type: "horizontal",
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      colorStops: [
        [
          {
            offset: 0,
            color: "#4318FF",
            opacity: 1,
          },
          {
            offset: 100,
            color: "rgba(67, 24, 255, 1)",
            opacity: 0.28,
          },
        ],
      ],
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      columnWidth: "40px",
    },
  },
};

// Consumption Users Reports

export const barChartDataConsumption = [
 
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
  {
    name: "Questions",
    data: [400, 370, 330, 390, 320, 350, 360, 320, 380,550,400, 370, 330, 390, 320, 350, 360, 320, 380,550],
  },
];

export const barChartOptionsConsumption = {
  chart: {
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    style: {
      fontSize: "12px",
      fontFamily: undefined,
    },
    onDatasetHover: {
      style: {
        fontSize: "12px",
        fontFamily: undefined,
      },
    },
    theme: "dark",
  },
  xaxis: {
    categories: ["12","13","14","15","16","17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"],
    show: false,
    labels: {
      show: true,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    color: "black",
    labels: {
      show: false,
      style: {
        colors: "#A3AED0",
        fontSize: "14px",
        fontWeight: "500",
      },
    },
  },
  grid: {
    borderColor: "rgba(15, 174, 208, 0.3)",
    show: true,
    yaxis: {
      lines: {
        show: false,
        opacity: 5,
      },
    },
    row: {
      opacity: 3,
    },
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  fill: {
    type: "solid",
    colors: ["#90EE90"], // Green color scheme
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 10,
      opacityTo: 15,
      stops: [0, 100],
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "80%",
      endingShape: "rounded",
      distributed: false,
      dataLabels: {
        position: "top",
      },
    },
  },
};


export const pieChartOptions = {
  labels: ["Intro 1", "Intro 2","Intro 3"],
  colors: ["#4318FF", "#6AD2FF"],
  chart: {
    width: "50px",
  },
  states: {
    hover: {
      filter: {
        type: "none",
      },
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  hover: { mode: null },
  plotOptions: {
    donut: {
      expandOnClick: false,
      donut: {
        labels: {
          show: false,
        },
      },
    },
  },
  fill: {
    colors: ["#4318FF", "#6AD2FF", "#EFF4FB"],
  },
  tooltip: {
    enabled: true,
    theme: "dark",
  },
};

export const pieChartData = [40, 22, 11];

// Total Spent Default

export const lineChartDataTotalSpent = [
  {
    name: "Chapter 1",
    data: [45, 34, 56, 67, 12, 98],
  },
  {
    name: "Chapter 2",
    data: [30, 40, 24, 46, 20, 46],
  },
  {
    name: "Chapter 3",
    data: [30, 40, 24, 46, 20, 46],
  },
];

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: "#4318FF",
    },
  },
  colors: ["#4318FF", "#39B8FF"],
  markers: {
    size: 0,
    colors: "white",
    strokeColors: "#7551FF",
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: "circle",
    radius: 1,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    type: "line",
  },
  xaxis: {
    type: "numeric",
    categories: [ "2019", "2020", "2021", "2022", "2023","2024"],
    labels: {
      style: {
        colors: "#A3AED0",
        fontSize: "12px",
        fontWeight: "500",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  legend: {
    show: false,
  },
  grid: {
    show: false,
    column: {
      color: ["#7551FF", "#39B8FF"],
      opacity: 0.5,
    },
  },
  color: ["#7551FF", "#39B8FF"],
};
