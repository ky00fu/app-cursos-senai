import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriaScreen from './source/screens/categoriaScreen'
import FICScreen from './source/screens/FICScreen'
import CAIScreen from './source/screens/CAIScreen'
import CTScreen from './source/screens/CTScreen'

import FICDetalhesScreen from './source/screens/FICDetalhesScreen'
import CAIDetalhesScreen from './source/screens/CAIDetalhesScreen'
import CTDetalhesScreen from './source/screens/CTDetalhesScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categoria"
          component={CategoriaScreen}
          options={{ title: 'Cursos' }}
        />
        <Stack.Screen
          name="Cursos FIC"
          component={FICScreen}
          options={{ title: 'Cursos FIC' }}
        />
        <Stack.Screen
          name="Cursos CAI"
          component={CAIScreen}
          options={{ title: 'Cursos CAI' }}
        />
        <Stack.Screen
          name="Cursos Técnicos"
          component={CTScreen}
          options={{ title: 'Cursos Técnicos' }}
        />
        <Stack.Screen
          name="FIC Detalhes"
          component={FICDetalhesScreen}
          options={{ title: 'Cursos FIC' }}
        />
        <Stack.Screen
          name="CAI Detalhes"
          component={CAIDetalhesScreen}
          options={{ title: 'Cursos CAI' }}
        />
        <Stack.Screen
          name="CT Detalhes"
          component={CTDetalhesScreen}
          options={{ title: 'Cursos Técnicos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}