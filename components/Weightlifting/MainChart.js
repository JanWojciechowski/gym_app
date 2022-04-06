import {
  Button,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Pressable,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  
const MainChart = ({chartLabel,czartDataset }) => {

  return (
  <BarChart
  data={{
    labels: chartLabel,
    datasets: [
      {
        data: czartDataset,
       
      }
    ]

  }}
  width={Dimensions.get("window").width} // from react-native
  height={220}
  yAxisLabel=""
  yAxisSuffix=""
  yAxisInterval={1} // optional, defaults to 1
  chartConfig={{
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "rgba(12,116,118,0.9)",
    backgroundGradientTo: "rgba(12,116,118,0.9)",
    fillShadowGradient: `gold`,
    fillShadowGradientOpacity: 1,
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "red"
    },
    propsForBackgroundLines: {
      strokeWidth: 1,
      strokeDasharray: "10",
    },
    propsForLabels: {
      fontFamily: "Bogle-Regular",
    },
  }}
  withInnerLines={false}
  showBarTops={false}
  showValuesOnTopOfBars={true}
  fromZero={true}
  style={{
    marginVertical: 8,
    borderRadius: 16
  }}

/>
);
};

export default MainChart