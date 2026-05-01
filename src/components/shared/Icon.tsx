import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconType = {
  icon: IconDefinition;
  classNames?: {
    iconWrapper?: string
    icon?: string
  };
  iconProps?: {
    iconSize?: string;
    iconColor?: string;

  }

}

export default function Icon({icon, classNames, iconProps}:IconType) {
  return (
      <span className={cn(``, classNames?.iconWrapper || '')}>
        <FontAwesomeIcon icon={icon} className={cn(`svg-inline--fa`, iconProps?.iconColor || '', classNames?.icon || '', iconProps?.iconSize || 'text-sm')} />
      </span>
    
  )
}

/*
// import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type IconType = {
  icon: LucideIcon;
  classNames?: {
    iconWrapper?: string
    icon?: string
  };
  iconProps?: {
    iconSize?: number;
    iconColor?: string;
    strokeWidth?: number;
    absoluteStrokeWidth?:boolean;

  }

}

export default function IconWithWrapper({icon:Icon, classNames, iconProps}:IconType) {
  return (
        <span className={cn(``, classNames?.iconWrapper || '')}>
          <Icon className={cn(`svg-inline--fa`, classNames?.icon || '')} size={iconProps?.iconSize || 14} color={iconProps?.iconColor||''} strokeWidth={iconProps?.strokeWidth||0} absoluteStrokeWidth={iconProps?.absoluteStrokeWidth||false} />
        </span>
    
  )
}
// 
//       


*/