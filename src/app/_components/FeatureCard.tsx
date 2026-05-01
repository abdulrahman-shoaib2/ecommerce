import IconText from "@/components/shared/IconText";
import { IIcon } from "@/interfaces/data/IContactInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type featureType ={
  feature:{
    icon:IIcon;
    title:{
      text:string;
      className:string;
    },
    description:{
      text:string;  
      className:string;
    }  
  };
  itemsWrapper?:{
    className:string;
  };
  iconWrapper?: {
    className: string;
    size: number;
    radius: string;
    bg: number;
    // iconColor: string;
  }
}

export default function FeatureCard({
  feature,
  itemsWrapper ={
    className:'',
  },
  iconWrapper = {
    className: "flex items-center justify-center shrink-0",
    size: 12,
    radius: "rounded-xl",
    bg: 0,
    // iconColor: "text-primary-500"
  },
}:featureType ) {

  const colors = ['primary','blue','green','orange','purple'];



  return (
    <>
      <IconText icon={feature.icon.faName} text={feature.title.text} subText={feature.description.text}
      classNames={{
        innerWrapper:`flex items-center gap-3 ${itemsWrapper.className}`,
        iconWrapper:`${iconWrapper.className} w-${iconWrapper.size} h-${iconWrapper.size} ${iconWrapper.radius} bg-${colors[iconWrapper.bg]}-50 shrink-0`,
        icon:feature.icon.className+" text-"+colors[iconWrapper.bg]+"-500",
        textsWrapper:'grid',
        text:feature.title.className,
        subText:feature.description.className,
      }} />
      {/* <div className={`flex items-center gap-3 ${itemsWrapper.className}`}>
        <div className={`${iconWrapper.className} w-${iconWrapper.size} h-${iconWrapper.size} ${iconWrapper.radius} bg-${colors[iconWrapper.bg]}-50 shrink-0`}>
          <FontAwesomeIcon
            icon={feature.icon.faName}
            className={feature.icon.className+" text-"+colors[iconWrapper.bg]+"-500"}
          />
        </div>
        <div>
          <h4 className={feature.title.className}>
            {feature.title.text}
          </h4>
          <p className={feature.description.className}>
            {feature.description.text}
          </p>
        </div>
      </div> */}
    </>
  );
}
