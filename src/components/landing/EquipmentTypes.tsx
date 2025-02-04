interface EquipmentTypeProps {
  image: string;
  title: string;
  description: string;
}

const EquipmentType = ({ image, title, description }: EquipmentTypeProps) => (
  <div className="bg-white rounded-lg p-6 shadow-sm">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-4"
      loading="lazy"
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const EquipmentTypes = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Equipment Types Section</h2>
          <p className="text-xl text-gray-600">Get started</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <EquipmentType
            image="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/30cd1d50f324798b00d19441a8f1fd02020d12376c22a94d5cd352674b7587ea?placeholderIfAbsent=true"
            title="Prime Movers"
            description="Robust, high-power machines like tractors and harvesters that drive your farming operations."
          />
          <EquipmentType
            image="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a16565c51404892225b0f565331e69b8f5c79438d73598e43308d256b03c8077?placeholderIfAbsent=true"
            title="Implementers"
            description="Specialized tools and attachments designed to perform specific tasks, enhancing the efficiency of your prime movers."
          />
        </div>
      </div>
    </section>
  );
};