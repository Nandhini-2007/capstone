interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const InfoCard = ({ title, children, className = "" }: InfoCardProps) => {
  return (
    <div className={`bg-card rounded-xl border p-6 ${className}`}>
      <h3 className="text-base font-semibold text-foreground mb-3">{title}</h3>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
};

export default InfoCard;
