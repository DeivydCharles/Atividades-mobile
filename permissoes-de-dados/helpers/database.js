import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('locations.db');

export const initDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS locations (id INTEGER PRIMARY KEY AUTOINCREMENT, latitude TEXT, longitude TEXT);'
    );
  });
};

export const insertLocation = (latitude, longitude) => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO locations (latitude, longitude) VALUES (?, ?);',
        [latitude, longitude],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      );
    });
  });
};

export const getLocations = () => {
  return new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM locations;',
        [],
        (_, { rows }) => resolve(rows._array),
        (_, error) => reject(error)
      );
    });
  });
};
