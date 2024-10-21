export const componentsMetadata = {} as const;

// Dynamically create union types based on the properties of the componentsMetadata object
export type ComponentSlug =
  (typeof componentsMetadata)[keyof typeof componentsMetadata]["slug"];
export type ComponentName =
  (typeof componentsMetadata)[keyof typeof componentsMetadata]["name"];
export type ComponentTitle =
  (typeof componentsMetadata)[keyof typeof componentsMetadata]["title"];
export type ComponentDescription =
  (typeof componentsMetadata)[keyof typeof componentsMetadata]["description"];

export type ComponentType = {
  slug: ComponentSlug;
  name: ComponentName;
  title: ComponentTitle;
  description: ComponentDescription;
  codeSnippet: string;
  example: React.ReactNode | object;
  example_2?: React.ReactNode | object;
  example_3?: React.ReactNode | object;
  example_4?: React.ReactNode | object;
  implementation_1: string;
  implementation_1_title?: string;
  implementation_2?: string;
  implementation_2_title?: string;
  implementation_3?: string;
  implementation_3_title?: string;
  implementation_4?: string;
  implementation_4_title?: string;
  addCommand: string;
  type: "component" | "block";
};