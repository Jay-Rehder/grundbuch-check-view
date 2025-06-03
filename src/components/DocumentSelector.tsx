
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
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 p-6 shadow-lg">
      <label className="block text-slate-700 text-sm font-medium mb-4">
        Dokumente zur Verarbeitung auswählen
      </label>
      <Select onValueChange={handleDocumentChange}>
        <SelectTrigger className="w-full bg-white border-slate-300 text-slate-700 rounded-xl shadow-sm hover:border-blue-300 transition-colors">
          <SelectValue placeholder="Option auswählen" />
        </SelectTrigger>
        <SelectContent className="bg-white border-slate-200 rounded-xl shadow-lg">
          {documentTypes.map((doc) => (
            <SelectItem 
              key={doc.value} 
              value={doc.value}
              className="text-slate-700 focus:bg-blue-50 rounded-lg"
            >
              {doc.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedDocuments.length > 0 && (
        <div className="mt-4 space-y-2">
          {selectedDocuments.map((doc) => (
            <div key={doc} className="bg-gradient-to-r from-blue-100 to-purple-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-medium shadow-sm">
              {documentTypes.find(d => d.value === doc)?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
