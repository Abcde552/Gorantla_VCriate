export default function FieldEditor({ field, onUpdate, onDelete }) {
  return (
    <div className="flex items-start bg-gray-50 rounded-xl px-4 py-3 shadow-sm">
      <div className="flex-grow space-y-2">
        <input
          value={field.label}
          onChange={(e) => onUpdate({ label: e.target.value })}
          className="w-full border bg-white rounded-lg px-3 py-2 text-sm"
        />
        {field.type === "label" && (
          <select
            value={field.level}
            onChange={(e) => onUpdate({ level: +e.target.value })}
            className="border bg-white rounded-lg px-2 py-1 text-sm"
          >
            {[1, 2, 3].map((l) => (
              <option key={l} value={l}>
                H{l}
              </option>
            ))}
          </select>
        )}
        {field.type === "enum" && (
          <input
            value={field.options.join(",")}
            onChange={(e) => onUpdate({ options: e.target.value.split(",") })}
            className="w-full border bg-white rounded-lg px-3 py-2 text-sm"
            placeholder="Options, comma-separated"
          />
        )}
      </div>
      <button
        onClick={onDelete}
        className="ml-4 text-gray-400 hover:text-red-500"
      >
        🗑️
      </button>
    </div>
  );
}
