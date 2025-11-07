import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { Movie } from '../src/api/movies';

const { width } = Dimensions.get('window');

type Props = {
  movies: Movie[];
};

export default function MovieCarousel({ movies }: Props) {
  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={width}
        height={230}
        autoPlay
        data={movies}
        scrollAnimationDuration={1200}
        renderItem={({ item }) => (
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
            style={styles.image}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 14,
  },
});
