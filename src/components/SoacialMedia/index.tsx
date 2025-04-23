import { IconBrandWhatsapp, IconBrandLinkedin ,IconMail} from "@tabler/icons-react";
import ContenedorIcon from './ContenedorIcon';

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
        <ContenedorIcon href="https://github.com/YuniorZequeira"><IconBrandWhatsapp size={32}  aria-label="Whatsapp"/></ContenedorIcon>
        <ContenedorIcon href="https://github.com/YuniorZequeira"><IconBrandLinkedin size={32}  aria-label="LinkedIn"/></ContenedorIcon>
        <ContenedorIcon href="https://github.com/YuniorZequeira"><IconMail size={32} aria-label="Email" /></ContenedorIcon>
    </div>
  )
}

export default SocialMedia
