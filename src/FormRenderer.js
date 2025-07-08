import { useForm } from "react-hook-form";
import { useState } from "react";
import { saveSubmission } from "./WebStore";

export default function FormRenderer({ template }) {
  const { register, handleSubmit, reset, watch } = useForm();
  const [uploadedFiles, setUploadedFiles] = useState({});
  const sec = template.sections[0];

  function onSubmit(data) {
    
    Object.entries(uploadedFiles).forEach(([key, file]) => {
      data[key] = file;
    });

    saveSubmission(template.id, data);
    alert("Submitted!");
    reset();
    setUploadedFiles({});
  }

  const handleFileChange = (fieldId, event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFiles((prev) => ({ ...prev, [fieldId]: file }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-md p-6 space-y-4"
    >
      {sec.fields.map((f) => {
        const k = f.id;
        switch (f.type) {
          case "label":
            const Tag = `h${f.level}`;
            return (
              <Tag key={k} className="text-lg font-semibold">
                {f.label}
              </Tag>
            );
          case "text":
            return (
              <div key={k} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <input required
                  {...register(k)}
                  type="text"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            );
          case "number":
            return (
              <div key={k} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <input
                  {...register(k, { valueAsNumber: true })}
                  type="number"
                  className="w-full border rounded-lg px-3 py-2"
                />
              </div>
            );
          case "boolean":
            return (
              <label key={k} className="inline-flex items-center">
                <input
                  type="checkbox"
                  {...register(k)}
                  className="form-checkbox"
                />
                <span className="ml-2">{f.label}</span>
              </label>
            );
          case "enum":
            return (
              <div key={k} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <select
                  {...register(k)}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">— select —</option>
                  {f.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            );
          case "upload":
            return (
              <div key={k} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <input
                  type="file"
                  accept="*"
                  onChange={(e) => handleFileChange(k, e)}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {uploadedFiles[k] && (
                  <p className="text-xs text-gray-600">
                    Selected: {uploadedFiles[k].name}
                  </p>
                )}
              </div>
            );
          case "image":
            return (
              <div key={k} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(k, e)}
                  className="w-full border rounded-lg px-3 py-2"
                />
                {uploadedFiles[k] && (
                  <img
                    src={URL.createObjectURL(uploadedFiles[k])}
                    alt="Preview"
                    className="mt-2 w-32 h-32 object-cover rounded"
                  />
                )}
              </div>
            );
          default:
            return null;
        }
      })}
      <button
        type="submit"
        className="px-6 py-2 bg-black text-white rounded-lg"
      >
        Submit
      </button>
    </form>
  );
}
