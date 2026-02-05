import Map "mo:core/Map";

module {
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

  type OldActor = {
    bookings : Map.Map<Nat, Booking>;
    nextBookingId : Nat;
  };

  type NewActor = {
    bookings : Map.Map<Nat, Booking>;
    nextBookingId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    old;
  };
};
