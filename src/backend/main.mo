import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Migration "migration";

(with migration = Migration.run)
actor {
  type Booking = {
    id : Nat;
    name : Text;
    phone : Text;
    email : ?Text;
    eventType : Text;
    preferredDate : Text;
    message : ?Text;
    timestamp : Int;
  };

  let bookings = Map.empty<Nat, Booking>();
  var nextBookingId = 0;

  public shared ({ caller }) func submitBooking(
    name : Text,
    phone : Text,
    email : ?Text,
    eventType : Text,
    preferredDate : Text,
    message : ?Text,
    timestamp : Int,
  ) : async Nat {
    if (Text.equal(name, "") or Text.equal(phone, "") or Text.equal(eventType, "") or Text.equal(preferredDate, "")) {
      Runtime.trap("Missing required fields");
    };

    let booking : Booking = {
      id = nextBookingId;
      name;
      phone;
      email;
      eventType;
      preferredDate;
      message;
      timestamp;
    };

    bookings.add(nextBookingId, booking);
    nextBookingId += 1;
    nextBookingId - 1;
  };

  public query ({ caller }) func getBooking(id : Nat) : async Booking {
    switch (bookings.get(id)) {
      case (null) { Runtime.trap("Booking not found") };
      case (?booking) { booking };
    };
  };

  public query ({ caller }) func listAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  public shared ({ caller }) func deleteBooking(id : Nat) : async () {
    if (not bookings.containsKey(id)) {
      Runtime.trap("Booking not found");
    };
    bookings.remove(id);
  };
};
