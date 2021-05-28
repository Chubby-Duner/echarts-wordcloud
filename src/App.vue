<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <WordCloudChart
      id="echarts05"
      :title="title"
      :data="wordData"
      :width="width"
      :height="height"
    ></WordCloudChart>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import WordCloudChart from "./components/WordCloudChart.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    WordCloudChart,
  },
  data() {
    return {
      wordData: [
        {
          name: "Sam S Club",
          value: 10000,
          textStyle: {
            normal: {
              color: "black",
            },
            emphasis: {
              color: "red",
            },
          },
        },
        {
          name: "Macys",
          value: 6181,
        },
        {
          name: "Amy Schumer",
          value: 4386,
        },
        {
          name: "Jurassic World",
          value: 4055,
        },
        {
          name: "Charter Communications",
          value: 2467,
        },
        {
          name: "Chick Fil A",
          value: 2244,
        },
        {
          name: "Planet Fitness",
          value: 1898,
        },
        {
          name: "Pitch Perfect",
          value: 1484,
        },
        {
          name: "Express",
          value: 1112,
        },
        {
          name: "Home",
          value: 965,
        },
        {
          name: "Johnny Depp",
          value: 847,
        },
        {
          name: "Lena Dunham",
          value: 582,
        },
        {
          name: "Lewis Hamilton",
          value: 555,
        },
        {
          name: "KXAN",
          value: 550,
        },
        {
          name: "Mary Ellen Mark",
          value: 462,
        },
        {
          name: "Farrah Abraham",
          value: 366,
        },
        {
          name: "Rita Ora",
          value: 360,
        },
        {
          name: "Serena Williams",
          value: 282,
        },
        {
          name: "NCAA baseball tournament",
          value: 273,
        },
        {
          name: "Point Break",
          value: 265,
        },
      ],
      width: "400px",
      height: "400px",
      title: 'WordCloudDemo'
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
