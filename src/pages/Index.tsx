import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { About } from "@/components/landing/About";
import { EquipmentList } from "@/components/landing/EquipmentList";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { EquipmentTypes } from "@/components/landing/EquipmentTypes";
import { Benefits } from "@/components/landing/Benefits";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <EquipmentList />
        <HowItWorks />
        <EquipmentTypes />
        <Benefits />
      </main>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/24b67d76724b8fb3ad47097453b131362d8403d467cba6fd18d5ecd484a88a23?placeholderIfAbsent=true"
        alt="Footer decoration"
        className="w-full"
        loading="lazy"
      />
    </div>
  );
};

export default Index;