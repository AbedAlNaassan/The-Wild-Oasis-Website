"use client";

import ReservationCard from "./ReservationCard";
import { deleteBooking } from "../_lib/actions";
import { useOptimistic } from "react";

function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (curBookings, bookingId) => {
      // Filter out the deleted booking and return the updated list
      return curBookings.filter((booking) => booking.id !== bookingId);
    }
  );

  async function handleDelete(bookingId) {
    optimisticDelete(bookingId); // Optimistically update UI
    await deleteBooking(bookingId); // Await the actual delete request
  }

  console.log(optimisticBookings);

  return (
    <ul className="space-y-6">
      {optimisticBookings.map((booking) => (
        <ReservationCard
          key={booking.id}
          booking={booking}
          onDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

export default ReservationList;
