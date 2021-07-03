import React from 'react';

import { 
  View, 
  Text, 
  Image,
  StatusBar,
  Button, 
} from 'react-native';

import IllustrationsImg from '../../../src/assets/illustration.png';
import { ButtonIcon } from '../../components/Button';

import { styles } from './styles';

export function SignIn() {

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image 
        source={IllustrationsImg}
        style={styles.image}
        resizeMode="stretch" 
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {'\n'}
          suas jogatinas {'\n'}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games {'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon />

      </View>
    </View>
  )
}