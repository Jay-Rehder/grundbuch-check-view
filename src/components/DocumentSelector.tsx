
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface DocumentSelectorProps {
  selectedDocuments: string[];
  onDocumentsChange: (documents: string[]) => void;
}

export const DocumentSelector = ({ selectedDocuments, onDocumentsChange }: DocumentSelectorProps) => {
  const documentTypes = [
    { value: 'grundbuch', label: 'Grundbuchauszug' },
    { value: 'kaufvertrag', label: 'Kaufvertrag' },
    { value: 'hypothek', label: 'Hypothekenvertrag' },
    { value: 'baurecht', label: 'Baurechtsvertrag' },
    { value: 'dienstbarkeit', label: 'Dienstbarkeitsvertrag' },
  ];

  const handleDocumentChange = (value: string) => {
    if (!selectedDocuments.includes(value)) {
      onDocumentsChange([...selectedDocuments, value]);
    }
  };

  return (
    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 p-6">
      <label className="block text-white text-sm font-medium mb-3">
        Dokumente zur Verarbeitung auswählen
      </label>
      <Select onValueChange={handleDocumentChange}>
        <SelectTrigger className="w-full bg-slate-700 border-slate-600 text-white">
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent className="bg-slate-700 border-slate-600">
          {documentTypes.map((doc) => (
            <SelectItem 
              key={doc.value} 
              value={doc.value}
              className="text-white focus:bg-slate-600"
            >
              {doc.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedDocuments.length > 0 && (
        <div className="mt-3 space-y-2">
          {selectedDocuments.map((doc) => (
            <div key={doc} className="bg-slate-700 text-white px-3 py-1 rounded text-sm">
              {documentTypes.find(d => d.value === doc)?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
