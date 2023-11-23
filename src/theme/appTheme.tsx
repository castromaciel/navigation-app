import { StyleSheet } from 'react-native'

export const globalTheme = StyleSheet.create({
  appMargin: {
    marginHorizontal: 24
  },
  buttonLarge: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'

  },
  title: {
    fontSize: 24,
    marginBottom: 32,
  }
})
