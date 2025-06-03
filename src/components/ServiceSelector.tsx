
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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
      <label className="block text-slate-700 text-sm font-medium mb-4">
        IKT-Dienstleistung auswählen
      </label>
      <Select value={selectedService} onValueChange={onServiceChange}>
        <SelectTrigger className="w-full bg-white border-slate-300 text-slate-700 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
          <SelectValue placeholder="Alle" />
        </SelectTrigger>
        <SelectContent className="bg-white border-slate-200 rounded-xl shadow-lg">
          {services.map((service) => (
            <SelectItem 
              key={service.value} 
              value={service.value}
              className="text-slate-700 focus:bg-blue-50 rounded-lg"
            >
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
