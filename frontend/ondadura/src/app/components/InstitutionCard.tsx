type InstitutionCardProps = {
  name: string;
  address: string;
  phone: string;
};

export function InstitutionCard({ name, address, phone }: InstitutionCardProps) {
  return (
    <div className="institution-card">
      <h3 className="text-md font-bold">{name}</h3>
      <p className="text-sm">{address}</p>
      <p className="text-sm text-blue-600">{phone}</p>
    </div>
  );
}