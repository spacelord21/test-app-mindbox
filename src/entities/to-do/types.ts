export type TTodo = {
  id: number;
  title: string;
  description: string;
  createTime: Date;
  isCompleted: boolean;
  importance: TTodoImportance;
};

export type TTodoImportance = "IMPORTANT" | "UNIMPORTANT" | "SECONDARY";
