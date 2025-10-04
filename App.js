import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [modelIsVisible, setModalIsVisible] = useState(false);
  const [enteredGoalList, setEnteredGoalList] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText){
    setEnteredGoalList((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() }, 
    ]);
    endAddGoalHandler();
  }

  function deleteGoalHandler(id){
    setEnteredGoalList(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id );
    });
  }

  return (
    <View style={styles.appContainers}>
      <Button 
      title='Add New Goal!' 
      color={'#5e0acc'}
      onPress={startAddGoalHandler}
      />
      <GoalInput visible={modelIsVisible} onAddGoal={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
        data={enteredGoalList}
        renderItem={(itemData) => {
          return <GoalItem 
          text={itemData.item.text} 
          id={itemData.item.id} 
          onDeleteItem={deleteGoalHandler}
          />
        }}
        keyExtractor={(item, index) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  appContainers: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5
  }
});
