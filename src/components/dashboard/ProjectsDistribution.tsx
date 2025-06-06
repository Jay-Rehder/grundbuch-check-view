
export const ProjectsDistribution = () => {
  return (
    <div className="pt-6 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Projekte - Verteilung</h3>
      <div className="flex rounded-lg overflow-hidden h-10">
        <div className="bg-green-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '124' }}>
          124
        </div>
        <div className="bg-orange-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '15' }}>
          15
        </div>
        <div className="bg-red-500 flex items-center justify-center text-white text-sm font-medium" style={{ flex: '3' }}>
          3
        </div>
      </div>
    </div>
  );
};
