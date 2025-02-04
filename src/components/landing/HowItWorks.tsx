interface ProcessStepProps {
  icon: string;
  title: string;
  description: string;
}

const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <div className="text-center">
    <img
      src={icon}
      alt={title}
      className="w-16 h-16 mx-auto mb-4"
      loading="lazy"
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const HowItWorks = () => {
  const steps = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/1db0bbbb466d62814bd6fb11c3aed4962cea98b9f059c4a7f336dbbd8614c5be",
      title: "Register",
      description: "Sign up with your details and get verified"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/e4cbba9dba23cf13eabf5263d408d029d994240cb6ff1b1a9bf9b26223a36f66",
      title: "List Your Equipment",
      description: "Choose from Prime Movers or Implementers, upload details & images."
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/8e93be44a5b23ade770962b60f65be9a445dbfec90a498a12eaa3635298025cf",
      title: "Connect & Earn",
      description: "Get connected with interested buyers and start earning."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          How listing works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};