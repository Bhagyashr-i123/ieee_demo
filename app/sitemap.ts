import { MetadataRoute } from "next";
import { events } from "@/lib/data/events";
import { branches } from "@/lib/data/branches";

const BASE_URL = "https://ieeenkss-sac.example.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/team",
    "/committees",
    "/events",
    "/events/calendar",
    "/resources",
    "/gallery",
    "/achievements",
    "/announcements",
    "/branches",
    "/contact",
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const eventRoutes = events.map((e) => ({
    url: `${BASE_URL}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const branchRoutes = branches.map((b) => ({
    url: `${BASE_URL}/branches/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...eventRoutes, ...branchRoutes];
}
