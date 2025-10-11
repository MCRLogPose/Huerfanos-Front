import { useState } from "react";

const PanelLayout = ({ panels = [] }) => {
  const [activeKey, setActiveKey] = useState(panels[0]?.key || "");

  const activePanel = panels.find((p) => p.key === activeKey);

  return (
    <div className="border border-orange-400 rounded-md p-6">
      {/* Encabezado de pestañas */}
      <div className="flex space-x-2 mb-6">
        {panels.map((panel) => (
          <button
            key={panel.key}
            onClick={() => setActiveKey(panel.key)}
            className={`flex items-center gap-2 px-4 py-2 font-medium rounded-t-md border-b-2 transition-colors duration-200
              ${
                activeKey === panel.key
                  ? "bg-[#092C4C] text-white border-[#092C4C]"
                  : "bg-white text-gray-700 border-transparent hover:bg-gray-100"
              }`}
          >
            {panel.icon && <panel.icon className="w-4 h-4" />}
            {panel.label}
          </button>
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="bg-white p-6 rounded-md border border-orange-400">
        {activePanel ? activePanel.content : <p>No hay panel activo.</p>}
      </div>
    </div>
  );
};

export default PanelLayout;
