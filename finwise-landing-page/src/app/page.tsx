import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Testimonials from "@/components/Template/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import Logos from "@/components/Template/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Template/Stats";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />

      <Logos />
      {/* <Logos /> as key numbers from thesis */}

      <Container>
        <Benefits />

        <Section
          id="pricing"
          title="Pricing"
          description="Simple, transparent pricing. No surprises."
        >
          <Pricing />
        </Section>

        <Section
          id="testimonials"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          <Testimonials />
        </Section>

        <Stats />
        
      </Container>
    </>
  );
};

export default HomePage;
