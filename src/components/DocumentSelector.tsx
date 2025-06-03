
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
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <label className="block text-gray-700 text-sm font-medium mb-4">
        Dokumente zur Verarbeitung auswählen
      </label>
      <Select onValueChange={handleDocumentChange}>
        <SelectTrigger className="w-full bg-white border-gray-300 text-gray-700 rounded-lg shadow-sm hover:border-gray-400 transition-colors">
          <SelectValue placeholder="Option auswählen" />
        </SelectTrigger>
        <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
          {documentTypes.map((doc) => (
            <SelectItem 
              key={doc.value} 
              value={doc.value}
              className="text-gray-700 focus:bg-gray-50 rounded-md"
            >
              {doc.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      {selectedDocuments.length > 0 && (
        <div className="mt-4 space-y-2">
          {selectedDocuments.map((doc) => (
            <div key={doc} className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm border border-gray-200">
              {documentTypes.find(d => d.value === doc)?.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
