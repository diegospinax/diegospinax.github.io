import { useTranslation } from "react-i18next";
import { ContactButton } from "./ContactButton";
import { SectionHeader } from "../SectionHeader";
import { useNetworkingData } from "../../hooks/useNetworkingData";

export const Networking = () => {
    const { t } = useTranslation();
    const { networking_data } = useNetworkingData();

    return (
        <div>
            <SectionHeader content={t("contact.title")} />
            <div className="flex gap-2 sm:gap-6 justify-center">
                {networking_data.map((element, index) =>
                    <ContactButton key={index} link={element.link}>
                        {element.icon}
                        <p className="hidden sm:block">{element.label}</p>
                    </ContactButton>
                )}
            </div>
        </div>
    )
}
