import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Movie } from '../api/movies';

type Props = {
  movie: Movie;
};

export default function MovieCard({ movie }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w200${movie.poster_path}` }}
        style={styles.poster}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.subtitle}>⭐ {movie.vote_average.toFixed(1)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', marginBottom: 15 },
  poster: { width: 100, height: 150, borderRadius: 10 },
  info: { flex: 1, marginLeft: 10, justifyContent: 'center' },
  title: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  subtitle: { fontSize: 14, color: 'gray' },
});
