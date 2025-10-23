import { BsBgColorType } from '@/types/bootstrap.type';

type BadgeProps = {
  text: string;
  variant?: BsBgColorType;
};

export const Badge: React.FC<BadgeProps> = ({ text, variant = "success" }) => {
  return (
    <span className={`badge rounded-pill bg-soft-${variant} font-size-12`}>
      {text}
    </span>
  );
};