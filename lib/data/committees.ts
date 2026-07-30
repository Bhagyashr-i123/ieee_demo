export interface Committee {
  id: string;
  name: string;
  category: "Technical" | "Non-Technical";
  mandate: string;
  members: { name: string; role: string }[];
}

export const committees: Committee[] = [
  {
    id: "tech-events",
    name: "Technical Events",
    category: "Technical",
    mandate: "Plans and runs workshops, hackathons, and technical conferences across the subsection.",
    members: [
      { name: "Rohit Kulkarni", role: "Lead" },
      { name: "Sanjana Iyer", role: "Co-Lead" },
    ],
  },
  {
    id: "publications",
    name: "Publications & Editorial",
    category: "Technical",
    mandate: "Maintains the subsection newsletter, technical blog, and event documentation.",
    members: [{ name: "Aditya Rao", role: "Lead" }],
  },
  {
    id: "wie",
    name: "Women in Engineering",
    category: "Non-Technical",
    mandate: "Runs mentorship programs and the annual Women in Engineering Regional Summit.",
    members: [{ name: "Ananya Hegde", role: "Lead" }],
  },
  {
    id: "membership",
    name: "Membership & Outreach",
    category: "Non-Technical",
    mandate: "Grows branch membership and coordinates outreach with new student chapters.",
    members: [{ name: "Priya Nayak", role: "Lead" }],
  },
  {
    id: "design",
    name: "Design & Media",
    category: "Non-Technical",
    mandate: "Owns branding, the website, and social media presence for the SAC.",
    members: [{ name: "Vikram Joshi", role: "Lead" }],
  },
];
