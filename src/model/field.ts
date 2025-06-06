export class FieldBuilder<T> {
  constructor(public type: T, public meta: Record<string, any> = {}) {}

  primary() {
    this.meta.primary = true;
    return this;
  }

  autoIncrement() {
    this.meta.autoIncrement = true;
    return this;
  }

  unique() {
    this.meta.unique = true;
    return this;
  }
}

export const Field = {
  string: () => new FieldBuilder("string"),
  int: () => new FieldBuilder("int"),
  boolean: () => new FieldBuilder("boolean"),
  relation: (to: string, opts: { many?: boolean } = {}) =>
    new FieldBuilder("relation", { relation: { to, ...opts } }),
};

export type FieldBuilderType = ReturnType<typeof Field.string | typeof Field.int>;
