import { Button } from "@/components/ui/button";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-4xl font-bold text-primary mb-2">{value}</div>
    <div className="text-gray-600">{label}</div>
  </div>
);

export const Hero = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/6484c29d6edec2351f2c5b6f4da98e6f18ae25cd9f0fcb04b783f5dadc34e1e2"
            alt="Hero"
            className="w-full mb-8 rounded-lg"
            loading="lazy"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Empower Your Farm: Rent Out or List Your Equipment, Connect & Earn
          </h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button size="lg">List Your Equipment</Button>
            <Button size="lg" variant="outline">Rent Equipment</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatItem value="5,000+" label="Equipment Listings" />
            <StatItem value="10" label="Active Engagement" />
            <StatItem value="90%" label="User Satisfaction" />
          </div>
        </div>
      </div>
    </section>
  );
};