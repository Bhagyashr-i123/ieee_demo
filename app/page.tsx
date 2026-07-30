import Hero from "@/components/home/Hero";
import StatBand from "@/components/home/StatBand";
import AnnouncementTicker from "@/components/home/AnnouncementTicker";
import FeaturedEvents from "@/components/home/FeaturedEvents";
import NetworkTeaser from "@/components/home/NetworkTeaser";
import { AchievementsStrip, CtaBand } from "@/components/home/AchievementsCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBand />
      <AnnouncementTicker />
      <FeaturedEvents />
      <NetworkTeaser />
      <AchievementsStrip />
      <CtaBand />
    </>
  );
}
 