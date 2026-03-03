import type Platform from './Platform';
import type Genre from './Genre';
import type Publisher from './Publisher';

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  genres: Genre[];
  publishers: Publisher[];
  metacritic: number;
  rating_top: number;
  rating: number;
  slug: string;
  description_raw: string;
}
