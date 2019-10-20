import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator
} from 'react-native';
import SQLite from "react-native-sqlite-storage";
import MyCarousel from "./src/MyCarousel";


function errorCB(err) {
  console.log("SQL Error: " + err);
}

function successCB() {
  console.log("SQL executed fine");
}

const db = SQLite.openDatabase({ name: "data.db", createFromLocation: "~data.db", location: "Library" }, successCB, errorCB);


const App = () => {
  const func = (a, b) => {
    return 0.5 - Math.random();
  }
  const [state, setstate] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql(
        `select Word,Pronounce,Type,Meaning from English;`,
        [],
        async (_, res) => {
          let temp = [];
          for (let i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i));
          }
          let data = await temp.sort(func);
          await setstate(data);
          await setLoading(false);
          
        }
      );
    }, (err) => console.log(err));
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? <ActivityIndicator size="small" color="#fff" /> : <MyCarousel state={state} />}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#000"
  },
});

export default App;
