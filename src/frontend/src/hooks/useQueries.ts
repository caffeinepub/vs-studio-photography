import { useQuery } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Booking } from '../backend';

export function useGetAllBookings() {
  const { actor, isFetching } = useActor();

  return useQuery<Booking[]>({
    queryKey: ['bookings'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listAllBookings();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetBooking(id: bigint) {
  const { actor, isFetching } = useActor();

  return useQuery<Booking>({
    queryKey: ['booking', id.toString()],
    queryFn: async () => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.getBooking(id);
    },
    enabled: !!actor && !isFetching && id !== undefined,
  });
}
