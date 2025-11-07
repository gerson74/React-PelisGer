import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../src/api/movies';

type Props = {
  title: string;
  movies: Movie[];
};

export default function MovieCategory({ title, movies }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.name} numberOfLines={1}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 25 },
  title: { fontSize: 20, fontWeight: 'bold', color: '#222', marginBottom: 10, marginLeft: 5 },
  card: { marginRight: 12, width: 120 },
  poster: { width: 120, height: 180, borderRadius: 10 },
  name: { color: '#333', fontSize: 13, marginTop: 5, textAlign: 'center' },
});
