import { Trash2, Calendar, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { useGetAllBookings } from '../hooks/useQueries';
import { useDeleteBooking } from '../hooks/useDeleteBooking';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';

export default function AdminPage() {
  const { data: bookings, isLoading, error } = useGetAllBookings();
  const { deleteBooking, isDeleting, deleteError } = useDeleteBooking();

  // Sort bookings by timestamp descending (newest first)
  const sortedBookings = bookings
    ? [...bookings].sort((a, b) => Number(b.timestamp - a.timestamp))
    : [];

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp));
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleDelete = (id: bigint) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      deleteBooking(id);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-2">
            Booking Management
          </h1>
          <p className="text-muted-foreground">
            View and manage all booking inquiries
          </p>
        </div>

        {deleteError && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>
              Failed to delete booking. Please try again.
            </AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <Card>
            <CardContent className="py-12">
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                <span className="ml-3 text-muted-foreground">Loading bookings...</span>
              </div>
            </CardContent>
          </Card>
        ) : error ? (
          <Alert variant="destructive">
            <AlertDescription>
              Failed to load bookings. Please refresh the page.
            </AlertDescription>
          </Alert>
        ) : sortedBookings.length === 0 ? (
          <Card>
            <CardContent className="py-12">
              <div className="text-center text-muted-foreground">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No bookings yet</p>
                <p className="text-sm mt-1">Booking inquiries will appear here</p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden md:block">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                  <CardDescription>
                    {sortedBookings.length} {sortedBookings.length === 1 ? 'inquiry' : 'inquiries'} total
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Event Type</TableHead>
                        <TableHead>Preferred Date</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {sortedBookings.map((booking) => (
                        <TableRow key={booking.id.toString()}>
                          <TableCell className="font-mono text-xs">
                            #{booking.id.toString()}
                          </TableCell>
                          <TableCell className="font-medium">{booking.name}</TableCell>
                          <TableCell>{booking.phone}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {booking.email || '—'}
                          </TableCell>
                          <TableCell>
                            <Badge variant="secondary">{booking.eventType}</Badge>
                          </TableCell>
                          <TableCell>{booking.preferredDate}</TableCell>
                          <TableCell className="text-sm text-muted-foreground">
                            {formatDate(booking.timestamp)}
                          </TableCell>
                          <TableCell className="text-right">
                            <Button
                              variant="destructive"
                              size="sm"
                              onClick={() => handleDelete(booking.id)}
                              disabled={isDeleting}
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
              <div className="text-sm text-muted-foreground mb-4">
                {sortedBookings.length} {sortedBookings.length === 1 ? 'inquiry' : 'inquiries'} total
              </div>
              {sortedBookings.map((booking) => (
                <Card key={booking.id.toString()}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{booking.name}</CardTitle>
                        <CardDescription className="font-mono text-xs mt-1">
                          ID: #{booking.id.toString()}
                        </CardDescription>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(booking.id)}
                        disabled={isDeleting}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      <span>{booking.phone}</span>
                    </div>
                    {booking.email && (
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-muted-foreground" />
                        <span className="break-all">{booking.email}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2 text-sm">
                      <User className="w-4 h-4 text-muted-foreground" />
                      <Badge variant="secondary">{booking.eventType}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span>{booking.preferredDate}</span>
                    </div>
                    {booking.message && (
                      <div className="flex items-start gap-2 text-sm">
                        <MessageSquare className="w-4 h-4 text-muted-foreground mt-0.5" />
                        <span className="text-muted-foreground">{booking.message}</span>
                      </div>
                    )}
                    <div className="pt-2 border-t text-xs text-muted-foreground">
                      Submitted: {formatDate(booking.timestamp)}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
