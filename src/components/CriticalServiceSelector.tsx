
import { Label } from '@/components/ui/label';

interface CriticalServiceSelectorProps {
  isCritical: boolean;
  onCriticalChange: (value: boolean) => void;
}

export const CriticalServiceSelector = ({ isCritical, onCriticalChange }: CriticalServiceSelectorProps) => {
  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <label className="block text-white text-sm font-medium mb-4">
        Handelt es sich um eine kritisch/wichtige IKT Dienstleistung?
      </label>
      
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <input
            type="radio"
            id="critical-yes"
            name="critical-service"
            checked={isCritical}
            onChange={() => onCriticalChange(true)}
            className="w-4 h-4 text-red-500 bg-slate-700 border-slate-600 focus:ring-red-500"
          />
          <Label htmlFor="critical-yes" className="text-white">
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
            className="w-4 h-4 text-slate-400 bg-slate-700 border-slate-600 focus:ring-slate-500"
          />
          <Label htmlFor="critical-no" className="text-white">
            Nein
          </Label>
        </div>
      </div>
    </div>
  );
};
