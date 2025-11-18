import { useTranslation } from "react-i18next"
import { ContactButton } from "./ContactButton";
import github_logo from '../../assets/branches/github.svg';
import linkedin_logo from '../../assets/branches/linkedin.svg';
import mail_icon from '../../assets/mail.svg';

export const Networking = () => {
    const { t } = useTranslation();

    const logoStyles = "size-6"

    return (
        <div>
            <h4 className="text-2xl mb-6">{t("contact.title")}</h4>
            <div className="flex gap-6">
                <ContactButton link="https://github.com/diegospinax">
                <img className={logoStyles} src={github_logo} alt="github_logo" />
                    <p>Github</p>
                </ContactButton>
                <ContactButton link="https://www.linkedin.com/in/diego-ospinax/">
                    <img className={logoStyles} src={linkedin_logo} alt="linkedin_logo" />
                    <p>Linkedin</p>
                </ContactButton>
                <ContactButton link="">
                    <img className={logoStyles} src={mail_icon} alt="mail_icon" />
                    <p>{t('contact.send_email')}</p>
                </ContactButton>
            </div>
        </div>
    )
}
