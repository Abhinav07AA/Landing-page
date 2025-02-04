interface BenefitProps {
  title: string;
  description: string;
}

const Benefit = ({ title, description }: BenefitProps) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
      <div className="w-8 h-8 bg-primary rounded-full" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const Benefits = () => {
  const benefits = [
    {
      title: "Secure & Verified Listings",
      description: "Assurance of authenticity through government oversight."
    },
    {
      title: "User-Friendly Interface",
      description: "Easy to list and search."
    },
    {
      title: "Local Support",
      description: "Dedicated support to assist users with any queries."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Benefits
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};