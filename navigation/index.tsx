import {
  React,
  createStackNavigator,
  ProfessionScreen,
  ProfessionSubcategoryScreen,
  ExcerciseScreen,
  BackButton,
  styles,
  ProfessionParamList,
} from './imports';

const ProfessionStack = createStackNavigator<ProfessionParamList>();

const Navigation = () => {
  return (
    <ProfessionStack.Navigator initialRouteName="Profession">
      <ProfessionStack.Screen
        options={{headerShown: false}}
        name="Profession"
        component={ProfessionScreen}
      />
      <ProfessionStack.Screen
        options={{
          headerTitle: 'Profession Overview',
          headerBackImage: () => <BackButton />,
          headerTitleStyle: styles.title,
          headerStyle: styles.header,
        }}
        name="ProfessionSubcategory"
        component={ProfessionSubcategoryScreen}
      />
      <ProfessionStack.Screen
        options={{
          headerBackImage: () => <BackButton />,
          headerTitleStyle: styles.title,
          headerStyle: styles.header,
        }}
        name="Excercise"
        component={ExcerciseScreen}
      />
    </ProfessionStack.Navigator>
  );
};

export default Navigation;