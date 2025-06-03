
import { Label } from '@/components/ui/label';

interface CriticalServiceSelectorProps {
  isCritical: boolean;
  onCriticalChange: (value: boolean) => void;
}

export const CriticalServiceSelector = ({ isCritical, onCriticalChange }: CriticalServiceSelectorProps) => {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
      <label className="block text-slate-700 text-sm font-medium mb-6">
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
            className="w-5 h-5 text-red-400 bg-white border-slate-300 focus:ring-red-300 focus:ring-2"
          />
          <Label htmlFor="critical-yes" className="text-slate-700 font-medium">
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
            className="w-5 h-5 text-slate-400 bg-white border-slate-300 focus:ring-slate-300 focus:ring-2"
          />
          <Label htmlFor="critical-no" className="text-slate-700 font-medium">
            Nein
          </Label>
        </div>
      </div>
    </div>
  );
};
