import { Right } from '../service/spt-client/types';
import { Section } from '../components/section';

export const RightsSection = ({ rights }: { rights: Right[] }) => {
  return (
    <Section title="rights" description="كيف نضمن حقوقك في SPT بكل احترافية">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {rights.map((right) => (
          <div key={right.id} className="flex items-center">
            <img src={right.image} alt={right.title} className="w-16 h-16" />
            <div className="ml-4">
              <h3 className="text-lg font-semibold">{right.title}</h3>
              <p className="text-sm">{right.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
