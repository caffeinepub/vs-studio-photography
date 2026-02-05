# Specification

## Summary
**Goal:** Add an in-app Admin dashboard page so the site owner can view and manage stored booking inquiries.

**Planned changes:**
- Add a new Admin page that fetches booking inquiries from the backend using the existing React Query hook pattern and displays them in an easy-to-scan list/table with loading and empty states.
- Display booking fields including: booking id, name, phone, event type, preferred date, and a human-readable submitted timestamp; sort inquiries newest-first.
- Add a Delete action per booking that calls the existing backend delete operation and refreshes the list without a full page reload, showing an English error message on failure.
- Expose navigation to the Admin page from the existing site UI (e.g., header or footer link) and ensure navigation scrolls to top consistent with existing behavior.

**User-visible outcome:** The site owner can open an Admin page from within the site to review booking inquiries (newest first) and delete entries when needed.
