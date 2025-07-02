// src/ai/flows/suggest-combos.ts
'use server';

/**
 * @fileOverview A combo suggestion AI agent.
 *
 * - suggestCombos - A function that handles the combo suggestion process.
 * - SuggestCombosInput - The input type for the suggestCombos function.
 * - SuggestCombosOutput - The return type for the suggestCombos function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCombosInputSchema = z.object({
  menuItems: z
    .array(z.object({
      name: z.string(),
      category: z.string(),
      description: z.string().optional(),
      price: z.number(),
    }))
    .describe('The list of available menu items with their details.'),
});
export type SuggestCombosInput = z.infer<typeof SuggestCombosInputSchema>;

const SuggestCombosOutputSchema = z.array(z.object({
  name: z.string().describe('The name of the suggested combo.'),
  description: z.string().describe('A description of the combo.'),
  items: z.array(z.string()).describe('The names of the menu items included in the combo.'),
  price: z.number().describe('The special price for the combo.'),
}));
export type SuggestCombosOutput = z.infer<typeof SuggestCombosOutputSchema>;

export async function suggestCombos(input: SuggestCombosInput): Promise<SuggestCombosOutput> {
  return suggestCombosFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCombosPrompt',
  input: {schema: SuggestCombosInputSchema},
  output: {schema: SuggestCombosOutputSchema},
  prompt: `You are a menu expert at "El Orquídeario", a coffee shop known for its elegant ambiance and over 500 types of orchids.
  Suggest enticing package/combo deals by smartly grouping existing menu items based on co-occurrence and semantic relationships.
  Offer each combo at a special, single, attractive price.

  The current menu items are:
  {{#each menuItems}}
  - {{name}} ({{category}}): {{description}} Price: {{price}}
  {{/each}}

  Suggest a few combos (3-5), with unique names, descriptions, the items included, and a special price for each combo.
  The price should be lower than the sum of the individual prices of the items.
  Be creative and consider combinations that would be appealing to customers.
  The "items" field should contain just the names of the items. Do not include the category or price in the item names.
  Remember to respect the specified output schema.
  `,
});

const suggestCombosFlow = ai.defineFlow(
  {
    name: 'suggestCombosFlow',
    inputSchema: SuggestCombosInputSchema,
    outputSchema: SuggestCombosOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
