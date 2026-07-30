export interface Resource {
  id: string;
  title: string;
  category: "Guides" | "Templates" | "Branding" | "Forms";
  fileType: "PDF" | "DOCX" | "PPTX" | "ZIP";
  sizeKb: number;
  downloads: number;
}

export const resources: Resource[] = [
  { id: "chartering-guide", title: "Student Branch Chartering Guide", category: "Guides", fileType: "PDF", sizeKb: 2400, downloads: 1240 },
  { id: "event-report-template", title: "Event Report Template", category: "Templates", fileType: "DOCX", sizeKb: 180, downloads: 980 },
  { id: "brand-kit", title: "IEEE NKSS Brand Kit", category: "Branding", fileType: "ZIP", sizeKb: 15600, downloads: 610 },
  { id: "sponsorship-deck", title: "Sponsorship Pitch Deck Template", category: "Templates", fileType: "PPTX", sizeKb: 4200, downloads: 730 },
  { id: "reimbursement-form", title: "Expense Reimbursement Form", category: "Forms", fileType: "PDF", sizeKb: 120, downloads: 540 },
  { id: "volunteer-handbook", title: "Volunteer Handbook 2026", category: "Guides", fileType: "PDF", sizeKb: 3100, downloads: 890 },
];
