import { IconBrandWhatsapp, IconBrandLinkedin ,IconMail} from "@tabler/icons-react";
import ContenedorIcon from './ContenedorIcon';

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
        <ContenedorIcon href="https://wa.me/17024150982" ><IconBrandWhatsapp size={32}  aria-label="Whatsapp"/></ContenedorIcon>
        <ContenedorIcon href="https://www.linkedin.com/in/yunior-zequeira-246a14216"><IconBrandLinkedin size={32}  aria-label="LinkedIn"/></ContenedorIcon>
        <ContenedorIcon href="mailto:yunizequeira@gmail.com"><IconMail size={32} aria-label="Email" /></ContenedorIcon>
    </div>
  )
}

export default SocialMedia
