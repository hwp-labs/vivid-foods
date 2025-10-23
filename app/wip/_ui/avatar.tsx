type PropsType = {
  src: string;
  alt?: string;
};

export const Avatar: React.FC<PropsType> = ({ src, alt = "" }) => {
  return <img src={src} className="avatar-xs rounded-circle " alt={alt} />;
};
