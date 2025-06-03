
import { Label } from '@/components/ui/label';

interface CriticalServiceSelectorProps {
  isCritical: boolean;
  onCriticalChange: (value: boolean) => void;
}

export const CriticalServiceSelector = ({ isCritical, onCriticalChange }: CriticalServiceSelectorProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <label className="block text-gray-700 text-sm font-medium mb-6">
        Handelt es sich um eine kritisch/wichtige IKT Dienstleistung?
      </label>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            id="critical-yes"
            name="critical-service"
            checked={isCritical}
            onChange={() => onCriticalChange(true)}
            className="w-5 h-5 text-blue-600 bg-white border-gray-300 focus:ring-blue-300 focus:ring-2"
          />
          <Label htmlFor="critical-yes" className="text-gray-700 font-medium">
            Ja
          </Label>
        </div>
        
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            id="critical-no"
            name="critical-service"
            checked={!isCritical}
            onChange={() => onCriticalChange(false)}
            className="w-5 h-5 text-gray-400 bg-white border-gray-300 focus:ring-gray-300 focus:ring-2"
          />
          <Label htmlFor="critical-no" className="text-gray-700 font-medium">
            Nein
          </Label>
        </div>
      </div>
    </div>
  );
};
