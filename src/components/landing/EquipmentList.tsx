import { Button } from "@/components/ui/button";
import { EquipmentCard } from "@/components/ui/EquipmentCard";

const filters = [
  "Filters",
  "Equipment Type",
  "Brand/Manufacturer",
  "Model & Year",
  "Availability Dates",
  "Near by",
  "Attachments Available"
];

export const EquipmentList = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Rent the Equipment You Need
        </h2>

        <div className="flex flex-wrap gap-4 mb-8">
          {filters.map((filter, index) => (
            <Button
              key={filter}
              variant="outline"
              className="flex items-center gap-2"
            >
              {filter}
              <img
                src={`https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/${index === 0 ? '5959e63d9758d070d69b5efecff31e67bbda0a2a825fbf5ca42d267106a74632' : 'fe50c5876a43d466eaeef0497ff8e78bbfa1389125d6b9fc979a018a1ccf00e5'}`}
                alt=""
                className="w-4 h-4"
              />
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {[1, 2, 3].map((i) => (
            <EquipmentCard
              key={i}
              id="MAH605DI-1234ZY"
              name="Mahindra Arjun Novo 605 DI Tractor"
              location="Agra, Uttar Pradesh"
              type="Prime Mover"
              price="₹2,000/day"
              image="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/607b65df16dbd502551f59371dbe1253dc4d550e065771799dd93d700c38d275?placeholderIfAbsent=true"
              views="1.2k"
              rating="4.1"
              hasOperator={true}
            />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All
          </Button>
        </div>
      </div>
    </section>
  );
};