import { StyleSheet } from 'react-native'

export const colors = {
  primary: "#008fe7",
  secondary: "#00c9ff",
  accent: "#ff0000",
  neutral: "#19131d",
  white: '#ffffff',
  'base-100': "#232a2a",
  info: "#00819f",
  success: "#2c9400",
  warning: "#ffad00",
  error: "#ff3651",
}

export const globalTheme = StyleSheet.create({
  appMargin: {
    marginHorizontal: 24
  },
  avatarContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 100,
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
  menuContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
    gap: 8
  },
  menuItem: {
    paddingVertical: 4, 
  },
  menuLabel: {
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    marginBottom: 32,
  }
})
