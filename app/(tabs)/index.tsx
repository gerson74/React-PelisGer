import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet } from 'react-native';
import MovieCarousel from '../../components/MovieCarousel';
import MovieCategory from '../../components/MovieCategory';
import { getPopularMovies } from '../../src/api/movieService';
import { Movie } from '../../src/api/movies';

export default function MoviesPopularScreen() {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [action, setAction] = useState<Movie[]>([]);
  const [romance, setRomance] = useState<Movie[]>([]);
  const [terror, setTerror] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const data = await getPopularMovies();
        setPopular(data.results);
        setAction(data.results.slice(0, 8));
        setRomance(data.results.slice(8, 16));
        setTerror(data.results.slice(16, 24));
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    loadMovies();
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#e50914" style={{ flex: 1 }} />;

  return (
    <ScrollView style={styles.container}>
      <MovieCarousel movies={popular.slice(0, 5)} />
      <MovieCategory title="🎬 Acción" movies={action} />
      <MovieCategory title="💕 Romance" movies={romance} />
      <MovieCategory title="😱 Terror" movies={terror} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 10, paddingTop: 10 },
});
