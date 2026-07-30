export interface Announcement {
  id: string;
  title: string;
  body: string;
  category: "Event" | "General" | "Urgent";
  date: string;
  pinned?: boolean;
}

export const announcements: Announcement[] = [
  { id: "a1", title: "Registrations open for SignalHacks 2026", body: "Team registrations are now open for our flagship 24-hour hackathon on Sept 5-6. Limited to 60 teams.", category: "Event", date: "2026-07-20", pinned: true },
  { id: "a2", title: "Nominations open: Volunteer of the Year", body: "Nominate a fellow volunteer who went above and beyond this year. Deadline Aug 15.", category: "General", date: "2026-07-18" },
  { id: "a3", title: "New resource pack available", body: "The 2026-27 branding and templates pack is now live in the Resources section.", category: "General", date: "2026-07-10" },
  { id: "a4", title: "Venue change for Women in Engineering Summit", body: "The summit has moved to the BEC main auditorium due to expected turnout.", category: "Urgent", date: "2026-07-05" },
];
