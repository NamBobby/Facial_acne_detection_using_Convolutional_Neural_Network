import { StyleSheet } from 'react-native';

const LoginStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
  },
  topinfo: {
    backgroundColor: '#48cff4',
    borderRadius: 30,
    width: 375,
    height: 441,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    marginTop: 40,
    width: 375,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    backgroundColor: '#71ddff',
    padding: 5,
    fontSize: 42,
    marginRight: 220,
    borderRadius: 100,
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 30,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#48cff4',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleButton: {
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#000000',
    fontSize: 14,
  },
});

export default LoginStyle;
