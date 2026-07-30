export type EventStatus = "open" | "closing" | "closed";

export interface EventItem {
  slug: string;
  title: string;
  branch: string;
  type: "Workshop" | "Hackathon" | "Conference" | "Webinar" | "Meetup";
  date: string; // ISO
  status: EventStatus;
  cover: string;
  summary: string;
}

export const events: EventItem[] = [
  {
    slug: "embedded-systems-bootcamp",
    title: "Embedded Systems Bootcamp",
    branch: "KLE Technological University SB",
    type: "Workshop",
    date: "2026-08-14",
    status: "open",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    summary:
      "A two-day hands-on bootcamp covering microcontroller fundamentals, sensor interfacing, and a capstone IoT build.",
  },
  {
    slug: "signalhacks-2026",
    title: "SignalHacks 2026",
    branch: "IEEE NKSS SAC",
    type: "Hackathon",
    date: "2026-09-05",
    status: "open",
    cover: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800",
    summary:
      "A 24-hour subsection-wide hackathon bringing together student branches from across North Karnataka to build for social good.",
  },
  {
    slug: "women-in-engineering-summit",
    title: "Women in Engineering Regional Summit",
    branch: "BEC IEEE Student Branch",
    type: "Conference",
    date: "2026-09-20",
    status: "closing",
    cover: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800",
    summary:
      "A full-day summit featuring keynote talks, panel discussions, and mentorship circles for women in STEM.",
  },
  {
    slug: "intro-to-fpga-webinar",
    title: "Intro to FPGA Design",
    branch: "IEEE UVCE SB",
    type: "Webinar",
    date: "2026-07-30",
    status: "closed",
    cover: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    summary:
      "An introductory session on FPGA architecture and Verilog basics for second-year students.",
  },
];
