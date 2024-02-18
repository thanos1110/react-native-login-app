import { Dimensions, StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native';

export default function App() {
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View >
        <Image style={styles.item1} source={require('./assets/2940965.jpg')} />
      </View>
      <View style={styles.item2}>
        <TextInput style={styles.item2_1} placeholder="Enter Email Here" />
        <TextInput style={styles.item2_1} placeholder="Enter Password Here" />
        <TouchableOpacity style={styles.item2_1}>
          <Text style={[styles.item3]}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderColor: 'green',
    borderWidth: 2,
    borderStyle: 'solid',
    height: Dimensions.get('window').height
  },
  item1: {
    height: 150,
    width: 150,

  },
  item2: {
    backgroundColor: 'pink',
    height: 150,
    width: Dimensions.get('window').width - 50
  },
  item2_1: {
    margin: 20
  },
  item3: {
    position: 'relative',
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    paddingVertical: 20,
  }

});
