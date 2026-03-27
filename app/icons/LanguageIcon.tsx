interface LanguageIconProps {
  languageCode?: string;
}

export default function LanguageIcon(props: LanguageIconProps) {
  const { languageCode = "en" } = props;
  return (
    <div className="text-xs bg-white px-2 py-1 rounded-sm text-background font-semibold">
      {languageCode.toUpperCase()}
    </div>
  );
}
