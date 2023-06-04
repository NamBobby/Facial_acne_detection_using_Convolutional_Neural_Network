import { StyleSheet } from "react-native";

const ShootingStyle = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
  },
  topinfo: {
    backgroundColor: "#6ea9f7",
    borderRadius: 30,
    width: '100%',
    height: 490,
    display: "flex",
    alignItems: "center",
  },
  info: {
    marginTop: 25,
    width: 375,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  mainphoto: {
    width: 300,
    height: 300,
  },
  content: {
    width: 300,
    height: 300,
  },
  elipse2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    display: "flex",
    width: 300,
    height: 300,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "rgba(255, 255, 255, 0.2)",

  },
  elipse: {
    flexDirection: "column",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    width: 275,
    height: 275,
    borderRadius: 100,
    backgroundColor: "#FFFFFF",
  },
  camera: {
    width: 250,
    height: 250,
    borderRadius: 100,
    overflow: 'hidden',
  },
  selectedImage: {
    width: 250,
    height: 250,
    borderRadius: 100,
  },
  defaultImage: {
    width: 250,
    height: 250,
    borderRadius: 100,
  },
  bottominfo: {
    backgroundColor: "#FFFFFF",
    width: '100%',
    height: 322,
    borderRadius: 30,
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  buttonmenu: {
    marginTop: 50,
    width: '100%',
    height: '100%',
    borderRadius: 30,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  upload: {
    width: '100%',
    height: 75,
    flexDirection: "row",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
    gap: 44,
  },
  rectangleB: {
    width: 75,
    height: 75,
    backgroundColor: "#B7D4FB",
    padding: 30,
    fontSize: 42,
    borderRadius: 30,
    cursor: "pointer",
    alignItems: "center",
    justifyContent: "center",
  },
  test: {
    width: 375,
    height: 70,
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 44,
  },
  rectangleC: {
    width: 150,
    height: 70,
    backgroundColor: "#FFD9E3",
    borderRadius: 20,
    cursor: "pointer",
    justifyContent: "center",
    alignItems: "center",
  }, 
  testText: {
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 17,
    lineHeight: 20,
    display: "flex",
    alignItems: "flex-end",
    color: "#805A63",
    justifyContent: "center",
  },
});

export default ShootingStyle;
