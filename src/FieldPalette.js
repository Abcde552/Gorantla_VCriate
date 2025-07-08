import { useState } from "react";

export default function FieldPalette({ onAddField }) {
  const [search, setSearch] = useState("");

  const groups = [
    { title: "Text Elements", items: ["text", "label"] },
    { title: "Multiple Choice", items: ["enum", "boolean"] },
    { title: "Media Elements", items: ["upload", "image"] },
  ];
  

  const labels = {
    text: "Short Answer",
    label: "Paragraph",
    enum: "Dropdown",
    boolean: "Yes / No",
    upload: "Upload",
    image: "Image",
  };

  const filteredGroups = groups
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        labels[item].toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <div className="w-64 p-4 bg-white rounded-2xl shadow-md space-y-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search element"
        className="w-full border rounded-lg px-3 py-2 text-sm bg-gray-50"
      />
      {filteredGroups.map((g) => (
        <div key={g.title}>
          <h3 className="text-xs font-semibold text-gray-500 mb-2">
            {g.title}
          </h3>
          <div className="grid grid-cols-1 gap-2">
            {g.items.map((item) => (
              <button
                key={item}
                onClick={() => onAddField(item)}
                className="flex items-center justify-center p-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm"
              >
                {labels[item]}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
