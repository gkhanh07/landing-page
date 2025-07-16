import HeroSection from "@/components/HeroSection/index";
import FeatureSection from "@/components/FeatureSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";

const HomeView = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <section id="features">
                <FeatureSection />
            </section>
            <section id="testimonials">
                <TestimonialsSection />
            </section>
            <section id="pricing">
                <PricingSection />
            </section>
            <section id="contact">
                <ContactSection />
            </section>
        </div>
    );
}
export default HomeView;