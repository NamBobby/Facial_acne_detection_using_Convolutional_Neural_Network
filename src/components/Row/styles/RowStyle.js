import { StyleSheet } from "react-native";

const RowStyle = StyleSheet.create({
    row: {
        marginTop: 40,
        width: 375,
        height: 55,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        gap: 44,
      },
      backmenu: {
        marginLeft: 10,
        width: 55,
        height: 55,
      },
      rectangleA: {
        width: 55,
        height: 55,
        backgroundColor: "#71ddff",
        padding: 5,
        fontSize: 42,
        marginRight: 220,
        borderRadius: 100,
        cursor: "pointer",
        color: "rgba(255, 255, 255, 0.4)",
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        display: "flex",
      },
});

export default RowStyle;
