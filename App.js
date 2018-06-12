/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph
} from 'react-native-chart-kit'

type Props = {};
export default class App extends Component<Props> {
  render() {
    const chartConfig = {
      backgroundGradientFrom: '#f0f',
      backgroundGradientTo: '#000',
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
    }
    return (
      <View style={{ backgroundColor: 'orange', flex: 1 }}>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
              data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
              ]
            }]
          }}
          width={300}
          height={220}  
          chartConfig={chartConfig}
          style={{ borderRadius: 10 }}
        />
      </View>
    );
  }
}