
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ServiceSelectorProps {
  selectedService: string;
  onServiceChange: (value: string) => void;
}

export const ServiceSelector = ({ selectedService, onServiceChange }: ServiceSelectorProps) => {
  const services = [
    { value: 'alle', label: 'Alle' },
    { value: 'beratung', label: 'IT-Beratung' },
    { value: 'entwicklung', label: 'Software-Entwicklung' },
    { value: 'wartung', label: 'System-Wartung' },
    { value: 'support', label: 'IT-Support' },
    { value: 'hosting', label: 'Hosting-Services' },
  ];

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <label className="block text-white text-sm font-medium mb-3">
        IKT-Dienstleistung auswählen
      </label>
      <Select value={selectedService} onValueChange={onServiceChange}>
        <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
          <SelectValue placeholder="Alle" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 border-slate-600">
          {services.map((service) => (
            <SelectItem 
              key={service.value} 
              value={service.value}
              className="text-white focus:bg-slate-600"
            >
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
