import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topinfo: {
    borderRadius: 30,
    width: 414,
    height: 896,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  khung: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: 300,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    display: "flex",
    alignItems: "flex-end",
    color: "#6495ED",
  },
  buttonmenu: {
    width: 414,
    height: 414,
    display: "flex",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  option: {
    width: 414,
    height: 100,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    gap: 44,
  },
  rectangle: {
    width: 100,
    height: 100,
    backgroundColor: "#71ddff",
    padding: 30,
    fontSize: 45,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    display: "flex",
  },
});

export default styles;
