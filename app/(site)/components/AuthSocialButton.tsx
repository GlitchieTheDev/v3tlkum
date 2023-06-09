import { IconType } from "react-icons";

interface AuthSocialButtonProps {
  icon: IconType
  onClick: () => void;
  label?: string;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({ 
  icon: Icon,
  onClick,
  label
}) => {
  let __id = Math.floor((Math.random() * 100) + 1).toString();

  return ( 
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        w-full 
        justify-center 
        rounded-md 
        bg-white 
        dark:bg-black
        px-4 
        py-2 
        text-gray-500 
        shadow-sm 
        ring-1 
        ring-inset 
        ring-gray-300 
        hover:bg-gray-50 
        dark:ring-gray-700
        dark:hover:bg-gray-950
        focus:outline-offset-0
      "
    >
      <Icon id={__id} />
      
      <label htmlFor={__id} className="sr-only">{label}</label>
    </button>
   );
}
 
export default AuthSocialButton;
