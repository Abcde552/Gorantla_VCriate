import { useState } from "react";
import FieldPalette from "./FieldPalette";

export default function FormBuilder() {
  const [fields, setFields] = useState([]);

  const handleAddField = (type) => {
    const newField = {
      id: Date.now(),
      type,
      label: `${type.charAt(0).toUpperCase() + type.slice(1)} Field`,
      options: type === "enum" ? ["Option 1", "Option 2"] : [],
    };
    setFields([...fields, newField]);
  };

  return (
    <div className="flex p-6 space-x-4 bg-gray-100 min-h-screen">
      <FieldPalette onAddField={handleAddField} />
     
    </div>
  );
}
