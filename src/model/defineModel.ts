import { FieldProperties, InferRow } from "../types/model.t";

export function createModel<TFields extends Record<string, FieldProperties>>(
  name: string,
  fields: TFields
) {
  type Row = InferRow<TFields>;
  const db: Row[] = [];

 const findById =  async (id: number | string) => {
    return db.find((row) => row["id"] === id);
  };

  const findMany = async (query: Record<string, any>) => {
    // Implement find logic here
    return [fields];
  };

  return {
    findById,
    findMany,
  };
}

const a = createModel("User", {
  id: { type: "number", primary: { autoIncrement: true } },
  name: { type: "text", length: 50, unique: true },
});


a.findById(1);