// types.ts
export interface TabData {
  id: string;
  label: string;
  color: string;
  width?: string; // Optional custom width for tabs on the same row
}

export interface FolderData {
  id: string;
  tabs: TabData[]; // Allows multiple tabs per row (e.g., Concord Variants + Ink Displacement)
  bodyColor: string;
  content: React.ReactNode;
}