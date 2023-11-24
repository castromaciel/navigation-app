import { StyleSheet } from 'react-native'

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
