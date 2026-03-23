export interface Recipe {
  id: string;
  productId: string;
  title: string;
  time: string;
  yield: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  tip?: string;
  category: "tradicionais" | "rusticos" | "doces" | "funcionais" | "rapidos";
}

export const recipes: Recipe[] = [];
