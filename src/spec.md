# Specification

## Summary
**Goal:** Build a responsive multi-page marketing website for VS Studio Photography with a gallery and a working Book Now/contact form that stores inquiries in a single Motoko backend actor.

**Planned changes:**
- Create pages/sections: Home (hero + “Book Now” CTA), Services, Gallery, and Contact/Book Now, with navigation between them.
- Display business details prominently (VS Studio Photography, owner Vikky Kumar, phone 7070945104, email vscomputer7070@gmail.com, address Etwarpur Nizamat Chowk, Lalganj, Vaishali, Bihar 844121) in the header/footer and on the contact page.
- Implement a booking inquiry form with fields: Name (required), Phone (required), Email (optional), Event Type (required), Preferred Date (optional), Message/Notes (optional), with client-side validation and clear success/failure states.
- Add backend APIs in a single Motoko actor to create and persist booking inquiries (stable storage) and to list inquiries (e.g., newest first), including timestamps and all submitted fields.
- Apply a consistent photography-studio visual theme (not primarily blue/purple) with clear hover/focus states and accessible contrast.
- Add basic SEO/sharing metadata (title includes “VS Studio Photography”, English meta description) and make phone/email clickable (tel:/mailto:) on the contact page.
- Add generated static images under `frontend/public/assets/generated` for logo, hero/banner, and gallery placeholders, and use them on Home and Gallery.

**User-visible outcome:** Visitors can browse Home/Services/Gallery/Contact pages, see the studio’s contact details, view a placeholder gallery, and submit a booking inquiry via a validated form with confirmation/error feedback.
