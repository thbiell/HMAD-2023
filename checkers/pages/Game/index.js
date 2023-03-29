import { View, StyleSheet, Text } from "react-native"
import CheckersTable from "../../components/CheckersTable";
import CheckersCell from "../../components/CheckersTable/CheckersCell";

const Game = () => {
    return (
        <View style={styles.container}>
          <Text>
            GAME
          </Text>
          <CheckersTable />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Game;