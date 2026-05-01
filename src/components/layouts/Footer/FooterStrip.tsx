import FeatureCard from "../../../app/_components/FeatureCard";
import { features } from "@/utils/features";

export default function FooterStrip() {
  return (
    <div className="bg-primary-50 border-y border-primary-100">
      <div className="container mx-auto px-4 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard feature={feature} key={"bottom_feature_"+index} />
          ))}
        </div>
      </div>
    </div>
  );
}
