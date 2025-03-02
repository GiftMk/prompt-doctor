import { z } from "zod";

const promptGuidelineSchema = z.object({
  name: z.string().describe("The name of the guideline"),
  summary: z
    .string()
    .describe("A short, 1 - 3 sentence overview of the guideline"),
});

export type PromptGuideline = z.infer<typeof promptGuidelineSchema>;

export const promptGuidelines: PromptGuideline[] = [
  {
    name: "Use the Latest Model",
    summary:
      "For optimal results, it's recommended to use the latest, most capable models as they are generally easier to prompt engineer.",
  },
  {
    name: "Instructions Placement",
    summary:
      'Place instructions at the beginning of the prompt and use separators like ### or """ to distinguish between instructions and context.',
  },
  {
    name: "Be Specific and Detailed",
    summary:
      "Provide specific, descriptive, and detailed information about the desired context, outcome, length, format, and style.",
  },
  {
    name: "Articulate Output Format with Examples",
    summary:
      "Models respond better when shown specific format requirements through examples, facilitating easier parsing of multiple outputs.",
  },
  {
    name: "Start with Zero-shot, then Few-shot, and Fine-tune",
    summary:
      "Begin with zero-shot prompting, then try few-shot with examples, and if needed, proceed to fine-tuning.",
  },
  {
    name: "Reduce Fluffy Descriptions",
    summary:
      "Avoid imprecise and vague descriptions to improve the effectiveness of the prompt.",
  },
  {
    name: "Provide Positive Instructions",
    summary:
      "Instead of only stating what not to do, clearly articulate what should be done.",
  },
  {
    name: "Code Generation Specific - Use Leading Words",
    summary:
      "Use leading words like 'import' or 'SELECT' to guide the model towards a specific coding pattern.",
  },
  {
    name: "Use the Generate Anything Feature",
    summary:
      "Utilize the 'Generate Anything' feature to describe tasks or expected outputs and receive a tailored prompt.",
  },
];
