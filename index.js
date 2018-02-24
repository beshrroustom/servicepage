import React from 'react';
import { AppRegistry,View} from 'react-native';
import Header from './src/components/Header'; 
import Services from './src/components/Services';
import PhreshLogo from './src/components/PhreshLogo';

const App = () => (
    <View>
    <PhreshLogo />
    <Services />
    </View>
);


AppRegistry.registerComponent ('frontend', () => App);