import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, ActivityIndicator } from 'react-native-paper';

export default function ApiScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {loading ? (
        <ActivityIndicator animating={true} size="large" />
      ) : (
        data.map((post) => (
          <Card key={post.id} style={styles.card}>
            <Card.Title title={`Post #${post.id}`} />
            <Card.Content>
              <Text variant="titleMedium">{post.title}</Text>
              <Text variant="bodyMedium">{post.body}</Text>
            </Card.Content>
          </Card>
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
  },
});
