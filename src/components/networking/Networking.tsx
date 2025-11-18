import { useTranslation } from "react-i18next"
import { ContactButton } from "./ContactButton";
import github_logo from '../../assets/branches/github.svg';
import linkedin_logo from '../../assets/branches/linkedin.svg';
import mail_icon from '../../assets/mail.svg';
import { SectionHeader } from "../SectionHeader";

export const Networking = () => {
    const { t } = useTranslation();

    const networking_data = [
        {
            link: "https://github.com/diegospinax",
            icon: github_logo,
            label: 'Github'
        },
        {
            link: "https://www.linkedin.com/in/diego-ospinax/",
            icon: linkedin_logo,
            label: 'Linkedin'
        },
        {
            link: "",
            icon: mail_icon,
            label: t('contact.send_email')
        }
    ]

    const logoStyles = "size-6 mx-auto";

    return (
        <div>
            <SectionHeader content={t("contact.title")} />
            <div className="flex gap-2 sm:gap-6 justify-center">
                {networking_data.map((element) =>
                    <ContactButton link={element.link}>
                        <img
                            className={logoStyles}
                            src={element.icon}
                            alt={element.label.toLowerCase().concat("_logo")}
                        />
                        <p className="hidden sm:block">{element.label}</p>
                    </ContactButton>
                )}
            </div>
        </div>
    )
}
