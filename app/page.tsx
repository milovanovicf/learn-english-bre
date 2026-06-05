import { Hero } from "@/components/landing/hero";
import { FeatureSection } from "@/components/landing/feature-section";
import { ResourcesSection } from "@/components/landing/resources-section";
import { StepsSection } from "@/components/landing/steps-section";
import { PopularCourses } from "@/components/landing/popular-courses";
import { Footer } from "@/components/landing/footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <FeatureSection />
        <ResourcesSection />
        <StepsSection />
        <PopularCourses />
      </main>
      <Footer />
    </div>
  );
}
