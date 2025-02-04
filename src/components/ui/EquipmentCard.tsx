import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface EquipmentCardProps {
  id: string;
  name: string;
  location: string;
  type: string;
  price: string;
  image: string;
  views: string;
  rating: string;
  hasOperator?: boolean;
}

export const EquipmentCard = ({
  id,
  name,
  location,
  type,
  price,
  image,
  views,
  rating,
  hasOperator = false,
}: EquipmentCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-2 right-2 bg-white rounded-full px-3 py-1 text-sm flex items-center gap-1">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/a56a6ac3c95239be1f7660093add56c91225951a048258b230488ef181cc876e"
            alt="views"
            className="w-4 h-4"
          />
          <span>{views} views</span>
        </div>
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500">{id}</p>
            <h3 className="font-semibold text-lg">{name}</h3>
          </div>
          <div className="flex items-center gap-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/fffffd9f2f490f286a693cf3333be08347f81d3f590c17e4818637aaefc6fd77"
              alt="rating"
              className="w-4 h-4"
            />
            <span className="text-sm">{rating} reviews</span>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="flex items-center gap-2 mb-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/113872e049d5efb08864e479a239ed92cc18c00aaf19bd6e53212471c8c41541"
            alt="location"
            className="w-4 h-4"
          />
          <span className="text-sm text-gray-600">{location}</span>
        </div>

        <div className="flex gap-2 mb-4">
          <Badge variant="secondary">{type}</Badge>
          {hasOperator && <Badge variant="secondary">Operator Included</Badge>}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <span className="text-lg font-semibold">{price}</span>
        <Button>Rent Now</Button>
      </CardFooter>
    </Card>
  );
};