<template>
  <div
    :id="id"
    :class="className"
    :style="{ width: width, height: height, margin: '0 auto' }"
  ></div>
</template>

<script>
// import echarts from "echarts";
// import resize from "./mixins/resize";
// import "echarts-wordcloud/dist/echarts-wordcloud";
// import "echarts-wordcloud/dist/echarts-wordcloud.min";
// import func from "vue-editor-bridge";
// require("echarts-wordcloud");
// import * as echarts from 'echarts'
// import 'echarts-wordcloud';
let echarts = require("echarts/lib/echarts");
require("echarts-wordcloud");
import "echarts/theme/macarons.js";

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "100%",
    },
    height: {
      type: String,
      default: "400px",
    },
    data: {
      type: Array,
      default: function () {
        return [];
      },
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.initChart();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
      console.log(this.chart);
      const option = {
        title: {
          text: this.title,
          x: "center",
        },
        backgroundColor: "#fff",
        tooltip: {
          //  pointFormat: "{series.name}: <b>{point.percentage:.1f}</b>"
        },
        series: [
          {
            type: "wordCloud",
            
            // 用来调整词之间的距离
            gridSize: 2,

            // set to true to allow word being draw partly outside of the canvas.
            // Allow word bigger than the size of the canvas to be drawn
            drawOutOfBound: false,

            // 如果执行布局动画。注意禁用时，如果有很多单词，则会导致UI阻塞。
            // If perform layout animation.
            // NOTE disable it will lead to UI blocking when there is lots of words.
            layoutAnimation: true,

            // 用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [12, 50],

            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,  90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--表明着没有角度，也就是词为水平方向，须要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [-90, 0, 45, 90],

            // A silhouette image which the white area will be excluded from drawing texts.
            // The shape option will continue to apply as the shape of the cloud to grow.
            // maskImage: maskImage,

            //  形状
            shape: "pentagon",

            // 随机生成字体颜色
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              // Color can be a callback function or a color string
              color: function () {
                // Random color
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(",") +
                  ")"
                );
              },
            },
            emphasis: {
              focus: "self",

              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "600", // 70%
            height: "400",
            // 数据
            data: this.data,
          },
        ],
      };
      this.chart.setOption(option);
    },
  },
};
</script>

<style>
.chartClass {
  padding-left: 1.2rem;
}
</style>