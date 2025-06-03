
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
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <label className="block text-gray-700 text-sm font-medium mb-4">
        IKT-Dienstleistung auswählen
      </label>
      <Select value={selectedService} onValueChange={onServiceChange}>
        <SelectTrigger className="w-full bg-white border-gray-300 text-gray-700 rounded-lg shadow-sm hover:border-gray-400 transition-colors">
          <SelectValue placeholder="Alle" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
          {services.map((service) => (
            <SelectItem 
              key={service.value} 
              value={service.value}
              className="text-gray-700 focus:bg-gray-50 rounded-md"
            >
              {service.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
