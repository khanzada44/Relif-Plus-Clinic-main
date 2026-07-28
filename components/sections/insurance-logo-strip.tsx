import { insuranceLogoStripProviders } from "@/data/data/insurance-logo-strip";
import Image from "next/image";


export function InsuranceLogoStrip() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
      {insuranceLogoStripProviders.map((provider) => (
        <div key={provider.name} className="relative h-32 w-full">
          <Image
            src={provider.logo}
            alt={provider.name}
            fill
            className="object-contain"
            sizes="(max-width: 640px) 40vw, 260px"
          />
        </div>
      ))}
    </div>
  );
}