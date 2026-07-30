export interface Branch {
  slug: string;
  name: string;
  institution: string;
  district: string;
  members: number;
  counselor: string;
}

export const branches: Branch[] = [
  { slug: "klet", name: "KLE Tech SB", institution: "KLE Technological University", district: "Hubballi-Dharwad", members: 210, counselor: "Dr. A. Deshpande" },
  { slug: "bec", name: "BEC IEEE SB", institution: "Basaveshwar Engineering College", district: "Bagalkot", members: 165, counselor: "Dr. S. Patil" },
  { slug: "uvce", name: "IEEE UVCE SB", institution: "University Visvesvaraya College of Engineering", district: "Bengaluru Urban", members: 180, counselor: "Dr. R. Naik" },
  { slug: "nisb", name: "NISB", institution: "Nitte Institute of Technology", district: "Belagavi", members: 140, counselor: "Dr. M. Hegde" },
  { slug: "vtu-belagavi", name: "VTU IEEE SB", institution: "Visvesvaraya Technological University", district: "Belagavi", members: 120, counselor: "Dr. P. Kulkarni" },
];
