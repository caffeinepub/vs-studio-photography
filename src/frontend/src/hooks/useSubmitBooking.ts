import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface BookingData {
  name: string;
  phone: string;
  email: string | null;
  eventType: string;
  preferredDate: string;
  message: string | null;
}

export function useSubmitBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (data: BookingData) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }

      const timestamp = BigInt(Date.now());
      
      const bookingId = await actor.submitBooking(
        data.name,
        data.phone,
        data.email,
        data.eventType,
        data.preferredDate,
        data.message,
        timestamp
      );

      return bookingId;
    },
    onSuccess: () => {
      // Invalidate bookings list if we add admin functionality later
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });

  return {
    submitBooking: mutation.mutate,
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
}
