import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Booking {
    id: bigint;
    name: string;
    email?: string;
    message?: string;
    preferredDate: string;
    timestamp: bigint;
    phone: string;
    eventType: string;
}
export interface backendInterface {
    deleteBooking(id: bigint): Promise<void>;
    getBooking(id: bigint): Promise<Booking>;
    listAllBookings(): Promise<Array<Booking>>;
    submitBooking(name: string, phone: string, email: string | null, eventType: string, preferredDate: string, message: string | null, timestamp: bigint): Promise<bigint>;
}
