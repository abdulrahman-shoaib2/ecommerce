import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils';
import Icon from './Icon';

type IconTextType = {
  icon: IconDefinition;
  text?: string;
  subText?:string;
  classNames?: {
    innerWrapper?: string
    iconWrapper?: string
    icon?: string;
    textsWrapper?:string;
    text?: string;
    subText?:string;
  };
  iconProps?: {
    iconSize?: string;
    iconColor?: string;
  }
  iWProps?: {
    display?: string;
    gap?: string;
  }
  // base: string;
  // innerWrapper: string;
  // iconWrapper: string;
  // textSize: string;

}

export default function IconText({ icon, text, subText, classNames, iconProps, iWProps }: IconTextType) {
   return (
    <div className={cn(``, iWProps?.display || 'flex items-center', iWProps?.gap || 'gap-2', classNames?.innerWrapper || '')}>
      <Icon icon={icon} classNames={{icon:classNames?.icon, iconWrapper:classNames?.iconWrapper}} iconProps={iconProps} />
      {
        text && subText?
        <div className={cn(``, classNames?.textsWrapper || '')}>
          <span className={cn(``, classNames?.text || '')}>{text}</span>
          <span className={cn(``, classNames?.subText || '')}>{subText}</span>
        </div>
        :
        (text && <span className={cn(``, classNames?.text || '')}>{text}</span>)
      }
    </div>
  )
}


/*
import { cn } from '@/lib/utils';
import IconWithWrapper from './IconWithWrapper';
import { LucideIcon } from 'lucide-react';

type IconTextType = {
  icon: LucideIcon;
  text?: string;
  classNames?: {
    innerWrapper?: string
    iconWrapper?: string
    icon?: string
    text?: string;
  };
  iconProps?: {
    iconSize?: number;
    iconColor?: string;
    strokeWidth?: number;
    absoluteStrokeWidth?:boolean;
  }
  iWProps?: {
    display?: string;
    gap?: string;
  }
  // base: string;
  // innerWrapper: string;
  // iconWrapper: string;
  // textSize: string;

}

export default function IconText({ icon, text, classNames, iconProps, iWProps }: IconTextType) {
   return (
    <div className={cn(``, iWProps?.display || 'flex items-center', iWProps?.gap || 'gap-2', classNames?.innerWrapper || '')}>
      {icon && <IconWithWrapper icon={icon} classNames={{icon:classNames?.icon, iconWrapper:classNames?.iconWrapper}} iconProps={iconProps} />}
      {text && <span className={cn(``, classNames?.text || '')}>{text}</span>}
    </div>
  )
}


*/