interface Props {
  content: string;
}

export const SectionHeader = ({ content }: Props) => {
  return (
    <h4 className="text-base sm:text-2xl mb-4 sm:mb-6">
      {content}
    </h4>
  );
}
