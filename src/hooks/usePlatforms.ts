import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client.ts';
import platforms from '../data/platforms.ts';
import ms from 'ms';
import type Platform from '../entities/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms,
  });
};

export default usePlatforms;
