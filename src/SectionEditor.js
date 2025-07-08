import {
  DndContext,
  useSensor,
  useSensors,
  PointerSensor,
  closestCenter,
} from "@dnd-kit/core";
import FieldEditor from "./FieldEditor";
import { arrayMove } from "@dnd-kit/sortable";


export default function SectionEditor({ template, onChange }) {
  const section = template.sections[0];
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
      <input
        type="text"
        value={section.title}
        onChange={(e) =>
          onChange({
            ...template,
            sections: [{ ...section, title: e.target.value }],
          })
        }
        className="text-xl font-semibold border-b pb-2 w-full"
      />
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={(evt) => {
          const { active, over } = evt;
          if (active.id !== over.id) {
            const oldIdx = section.fields.findIndex((f) => f.id === active.id);
            const newIdx = section.fields.findIndex((f) => f.id === over.id);
            const newFields = arrayMove(section.fields, oldIdx, newIdx);
            onChange({
              ...template,
              sections: [{ ...section, fields: newFields }],
            });
          }
        }}
      >
        <div className="space-y-2">
          {section.fields.map((f) => (
            <FieldEditor
              key={f.id}
              field={f}
              onUpdate={(upd) => {
                const newFields = section.fields.map((x) =>
                  x.id === f.id ? { ...x, ...upd } : x
                );
                onChange({
                  ...template,
                  sections: [{ ...section, fields: newFields }],
                });
              }}
              onDelete={() => {
                const newFields = section.fields.filter((x) => x.id !== f.id);
                onChange({
                  ...template,
                  sections: [{ ...section, fields: newFields }],
                });
              }}
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
}
