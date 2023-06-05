import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#FFFFFF"
  },
  topinfo: {
    width: 375,
    height: 812,
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 20,
    width: '100%',
  },
  inputText: {
    alignItems: 'flex-start'
  },
  text: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    alignItems: 'flex-start'
  },
  textsignUp: {
    color: '#FFB3C6',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    alignItems: 'flex-start'
  },
  textsignIn: {
    color: '#6ea9f7',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    alignItems: 'flex-start'
  },
  texttitle: {
    fontFamily: 'Montserrat-Regular',
    color: '#667085',
    fontSize: 14,
    lineHeight: 24,
    alignItems: 'flex-start'
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D5DD',
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 350
  },
  buttonUp: {
    backgroundColor: '#FFB3C6',
    borderRadius: 5,
    padding: 10,
    width: 350,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 10,
  },
  buttonIn: {
    backgroundColor: '#6ea9f7',
    borderRadius: 5,
    padding: 10,
    width: 350,
    alignItems: 'center',
    display: 'flex',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    alignItems: 'center',
    display: 'flex',
  },
  toggleButtonText: {
    color: '#000000',
    fontSize: 14,
  },
  khung: {
    borderWidth: 3,
    borderColor: '#FFB3C6',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 300,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50
  },
  textkhung: {
    display: "flex",
    alignItems: "flex-end",
    color: "#6ea9f7",
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    lineHeight: 48,
  },
});

export default LoginStyle;
