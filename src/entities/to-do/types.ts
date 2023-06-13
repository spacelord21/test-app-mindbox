export type TTodo = {
  id: string;
  title: string;
  description: string;
  createTime: Date;
  isCompleted: boolean;
  importance: TTodoImportance;
};

export type TTodoImportance = "IMPORTANT" | "USUAL";
