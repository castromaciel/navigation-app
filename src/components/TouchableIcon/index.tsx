import { FC } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useAuthContext } from '../../context'

interface TouchableIconProps {
  name: string
  size: number
  color: string
}

const TouchableIcon: FC<TouchableIconProps> = ({
  color = 'black',
  name,
  size = 80,
}) => {
  const { changeFavouriteIcon } = useAuthContext()

  const onPress = () => changeFavouriteIcon(name)

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})

export default TouchableIcon
