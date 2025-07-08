import { useState } from "react";

export default function RenderField({ field }) {
  if (!field) return null;

  const { type, label = "", options = [] } = field;
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  switch (type) {
    case "label":
      return <h3 className="text-lg font-semibold">{label || "Label"}</h3>;
    case "text":
      return (
        <input
          type="text"
          placeholder={label || "Enter text"}
          className="w-full border px-3 py-2 rounded-md"
        />
      );
    case "number":
      return (
        <input
          type="number"
          placeholder={label || "Enter number"}
          className="w-full border px-3 py-2 rounded-md"
        />
      );
    case "boolean":
      return (
        <label className="inline-flex items-center gap-2">
          <input type="checkbox" />
          {label || "Yes / No"}
        </label>
      );
    case "enum":
      return (
        <select className="w-full border px-3 py-2 rounded-md">
          <option value="">Select...</option>
          {options.map((opt, i) => (
            <option key={i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    case "upload":
      return (
        <input type="file" className="w-full text-sm border p-2 rounded-md" />
      );
    case "image":
      return (
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full border p-2 text-sm rounded-md"
          />
          {previewImage && (
            <img
              src={previewImage}
              alt="preview"
              className="mt-2 max-w-full h-auto rounded-md"
            />
          )}
        </div>
      );
    default:
      return null;
  }
}
