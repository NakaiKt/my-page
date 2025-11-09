type Props = {
  readonly companyName: string;
  readonly period: string;
};

const CompanyTitle = ({ companyName, period }: Props) => {
  return (
    <div className="text-left mb-6">
      <h3 className="text-gray-900 mb-4">{companyName}</h3>
      <p className="text-gray-600">{period}</p>
    </div>
  );
};

export default CompanyTitle;
