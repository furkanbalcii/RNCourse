import { useState } from "react";
import { Button, StyleSheet, View, TextInput, Modal, Image } from "react-native";


function GoalInput(props){

    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    }

    function addGoalHandler(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }



    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/image/goal.png')}/>
                <TextInput 
                    style={styles.textInput} 
                    placeholder='Your Course Goal!'
                    onChangeText={goalInputHandler}
                    value= {enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal!' onPress={addGoalHandler}/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
        
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
})