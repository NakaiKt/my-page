type Props = {
  readonly title: string;
  readonly description?: string;
};

const SectionTitle = ({ title, description }: Props) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-gray-900 mb-4">{title}</h2>
      <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full" />
      {description && <p className="text-gray-600 mt-4">{description}</p>}
    </div>
  );
};

export default SectionTitle;
