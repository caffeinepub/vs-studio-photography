import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

export function useDeleteBooking() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (id: bigint) => {
      if (!actor) {
        throw new Error('Backend actor not initialized');
      }
      await actor.deleteBooking(id);
    },
    onSuccess: () => {
      // Invalidate and refetch bookings list
      queryClient.invalidateQueries({ queryKey: ['bookings'] });
    },
  });

  return {
    deleteBooking: mutation.mutate,
    isDeleting: mutation.isPending,
    isSuccess: mutation.isSuccess,
    deleteError: mutation.error,
  };
}
