import React, { useEffect, useState } from 'react';
import { View, Platform, Text } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { getResults } from "../../../database.js";

import UserInfo from "../../components/UserInfo/UserInfo.js";
import Row from '../../components/Row/RowHome/Row.js';

import TrackingStyle from "./styles/TrackingStyle.js";

const Tracking = () => {
  const navigation = useNavigation();
  const [chartData, setChartData] = useState(null);
  const route = useRoute();
  const { user } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await getResults(user.email);

        const chartData = [];

        const resultsByDate = {};
        results.forEach(result => {
          if (result && result.date && result.result) {
            const date = new Date(result.date);
            const month = date.toLocaleString('default', { month: 'short' });
            const day = date.getDate();

            const formattedDate = `${day} ${month}`;

            if (!resultsByDate[formattedDate]) {
              resultsByDate[formattedDate] = result.result;
              chartData.push({
                date: formattedDate,
                result: result.result
              });
            }
          } else {
            console.error('Dữ liệu không hợp lệ:', result);
          }
        });

        fillMissingLevels(chartData);
        setChartData(chartData.reverse());
        console.log('Đã getResults thành công');
      } catch (error) {
        console.error('Lỗi khi truy vấn dữ liệu:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log('ChartData đã được cập nhật:', chartData);
  }, [chartData]);

  const fillMissingLevels = (data) => {
    const levels = ['level_0', 'level_1', 'level_2', 'level_3'];
    const existingLevels = data.map(item => item.result);
  
    const sortedData = data.filter(item => item.date !== "").sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA - dateB;
    });
  
    levels.reverse().forEach(level => {
      if (!existingLevels.includes(level)) {
        sortedData.push({ date: '', result: level });
      }
    });
  
    data.length = 0; // Xóa hết các phần tử trong mảng data
  
    sortedData.forEach(item => {
      data.push(item); // Thêm lại các phần tử đã được sắp xếp vào mảng data
    });
  };

  const chartConfigure = {
    strokeWidth: 2,
    yLabel: value => `level_${value}`,
    backgroundColor: '#B7AEDF',
    backgroundGradientFrom: '#DBB1D3',
    backgroundGradientTo: '#DBB1D3',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  };
  const graphStyle = {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: 'white',
  };

  const handleSignOut = () => { 
    navigation.navigate("Login");
  };

  const handleHome = () => { 
    navigation.navigate("Home", { user: route.params.user });
  };

  return (
    <View style={TrackingStyle.container}>
      <View style={TrackingStyle.info}>
        <Row handleHome={handleHome}/>
        <UserInfo userName={user.name} handleSignOut={handleSignOut} />
      </View>
      <View style={TrackingStyle.topinfo}>
        <Text style={TrackingStyle.title}>Selfie Tracker</Text>   
        {chartData &&(
          <View style={TrackingStyle.chartContainer}>
            <LineChart
              chartConfig={chartConfigure}
              data={{
                labels: chartData.map((data) => data.date),
                datasets: [
                  {
                    data: chartData.map((data) => {
                      if (data.result === 'level_0') {
                        return 0;
                      } else if (data.result === 'level_1') {
                        return 1;
                      } else if (data.result === 'level_2') {
                        return 2;
                      } else if (data.result === 'level_3') {
                        return 3;
                      } else {
                        return 0; // Giá trị mặc định cho trường hợp không thuộc các giá trị 'level_0', 'level_1', 'level_2' hoặc 'level_3'
                      }
                    }),
                  },
                ],
              }}
              style={graphStyle}
              width={Dimensions.get('window').width - (Platform.OS === 'ios' ? 40 : 80)}
              height={250}
              bezier
              yAxisLabel="level_"
              yLabel={(value) => `level_${value}`}
              verticalLabelRotation={30}
              segments={3}
              formatYLabel={(value) => Math.floor(value)}
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Tracking;
