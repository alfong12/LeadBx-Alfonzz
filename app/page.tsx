import { BannerGrn } from '@/components/BannerGrn';
import CarruselHero from '@/components/Carruseles/CarruselHero';
import FeaturesVehicules from '@/components/Carruseles/FeaturesVehicules';
import FeatureSec from '@/components/features/FeatureSec';

export default function HomePage() {
  return (
    <>
      <CarruselHero />
      <FeaturesVehicules />
      <FeatureSec />
      <BannerGrn />
    </>
  );
}
