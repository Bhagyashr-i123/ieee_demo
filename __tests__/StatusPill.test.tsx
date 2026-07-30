import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { StatusPill } from "@/components/shared/Badge";

describe("StatusPill", () => {
  it("renders the open label", () => {
    render(<StatusPill status="open" />);
    expect(screen.getByText("Registrations open")).toBeInTheDocument();
  });

  it("renders the closed label", () => {
    render(<StatusPill status="closed" />);
    expect(screen.getByText("Closed")).toBeInTheDocument();
  });
});
