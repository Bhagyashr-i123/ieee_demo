export interface Person {
  name: string;
  role: string;
  institution: string;
  group: "Advisory Committee" | "Executive Committee" | "Esteemed Members";
  photo: string;
  linkedin?: string;
}

export const team: Person[] = [
  { name: "Dr. Anand Deshpande", role: "SAC Chair", institution: "KLE Technological University", group: "Executive Committee", photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300" },
  { name: "Priya Nayak", role: "SAC Vice-Chair", institution: "IEEE UVCE SB", group: "Executive Committee", photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300" },
  { name: "Rohit Kulkarni", role: "Secretary", institution: "BEC IEEE SB", group: "Executive Committee", photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300" },
  { name: "Ananya Hegde", role: "Treasurer", institution: "NISB", group: "Executive Committee", photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300" },
  { name: "Dr. Suresh Patil", role: "SAC Advisor", institution: "IEEE Region 10", group: "Advisory Committee", photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300" },
  { name: "Dr. Meera Rao", role: "Faculty Advisor", institution: "VTU Belagavi", group: "Advisory Committee", photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300" },
  { name: "Vikram Joshi", role: "Founding Member", institution: "IEEE NKSS", group: "Esteemed Members", photo: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=300" },
];

export const groupOrder: Person["group"][] = [
  "Advisory Committee",
  "Executive Committee",
  "Esteemed Members",
];
