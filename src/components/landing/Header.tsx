import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=100 100w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=200 200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=400 400w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=800 800w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/e13cc863a392473fa73c120462a205b4/00f05de1567dea6f1dfa1a705eba1330096dd4086f92bcd1a69d22fee2bc1fd4?placeholderIfAbsent=true"
              alt="Logo"
              className="h-12 w-auto"
              loading="lazy"
            />
            <h1 className="text-xl font-semibold text-gray-900">
              Uttar Pradesh Farm Equipment Management Portal
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-gray-900">How it works</Link>
            <Link to="/equipment" className="text-gray-700 hover:text-gray-900">Equipment Types</Link>
            <Link to="/faqs" className="text-gray-700 hover:text-gray-900">FAQs</Link>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline">Start Renting</Button>
            <Button>List Equipment</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};