import Hero from '@/components/home/Hero'
import ServicesSection from '@/components/home/ServicesSection'
import IndustriesSection from '@/components/home/IndustriesSection'
import HowWeWork from '@/components/home/HowWeWork'
import DifferentiatorsSection from '@/components/home/DifferentiatorsSection'
import FAQAndCTA from '@/components/home/FAQAndCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <IndustriesSection />
      <HowWeWork />
      <DifferentiatorsSection />
      <FAQAndCTA />
    </>
  )
}
