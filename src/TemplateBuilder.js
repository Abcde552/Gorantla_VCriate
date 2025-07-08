import { useState, useEffect } from "react";
import SectionEditor from "./SectionEditor";
import FieldPalette from "./FieldPalette";
import FormRenderer from "./FormRenderer";
import { loadTemplates, saveTemplates } from "./WebStore";

export default function TemplateBuilder() {
  const [templates, setTemplates] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [mode, setMode] = useState("edit");

  useEffect(() => setTemplates(loadTemplates()), []);
  useEffect(() => saveTemplates(templates), [templates]);

  function addTemplate() {
    const id = Date.now().toString();
    const newTemplate = {
      id,
      name: `Template ${templates.length + 1}`,
      sections: [{ id: id + "-1", title: "Section 1", fields: [] }],
    };
    setTemplates([...templates, newTemplate]);
    setActiveId(id);
    setMode("edit");
  }

  const active = templates.find((t) => t.id === activeId);

  return (
    <div className="p-6 grid grid-cols-[1fr] gap-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={addTemplate}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
          disabled={templates.length >= 5}
        >
          + New Template
        </button>
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => setActiveId(t.id)}
            className={t.id === activeId ? "font-bold" : ""}
          >
            {t.name}
          </button>
        ))}
        {active && (
          <button
            onClick={() => setMode((m) => (m === "edit" ? "fill" : "edit"))}
            className="ml-auto px-3 py-1 bg-gray-200 rounded"
          >
            {mode === "edit" ? "Switch to Fill Form" : "Back to Builder"}
          </button>
        )}
      </div>

      {active && (
        <div className="grid grid-cols-[auto_1fr] gap-6">
          <FieldPalette
            onAddField={(field) => {
              const updated = {
                ...active,
                sections: [
                  {
                    ...active.sections[0],
                    fields: [
                      ...active.sections[0].fields,
                      {
                        id: Date.now().toString(),
                        type: field,
                        label: `${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }`,
                        ...(field === "enum"
                          ? { options: ["Option 1", "Option 2"] }
                          : {}),
                        ...(field === "label" ? { level: 2 } : {}),
                      },
                    ],
                  },
                ],
              };
              setTemplates(
                templates.map((t) => (t.id === active.id ? updated : t))
              );
            }}
          />

          {mode === "edit" ? (
            <SectionEditor
              template={active}
              onChange={(updated) =>
                setTemplates(
                  templates.map((t) => (t.id === active.id ? updated : t))
                )
              }
            />
          ) : (
            <FormRenderer template={active} />
          )}
        </div>
      )}
    </div>
  );
}
