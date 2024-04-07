import React from 'react';

export default ({ history }) => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.userText}> Hello, User!</Text>
            
        </View>
        <StatusBar style="auto" />
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      backgroundColor: '#4ECDC4',
      padding: 20,
    },
    userText: {
      textSize: 20,
      textAlign: 'left',
    },
  });