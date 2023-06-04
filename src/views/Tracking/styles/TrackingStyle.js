import { StyleSheet } from 'react-native';

const TrackingStyle = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
    },
    topinfo: {
      marginTop: 50,
      backgroundColor: "#6ea9f7",
      borderRadius: 30,
      width: 375,
      height: 427,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    info: {
      marginTop: 25,
      width: 375,
      height: 100,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    title: {
      display: "flex",
      alignItems: "flex-end",
      color: "#37557C",
      fontFamily: 'Montserrat-Bold',
      fontSize: 24,
      lineHeight: 28,
    },
    chartContainer: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TrackingStyle;
