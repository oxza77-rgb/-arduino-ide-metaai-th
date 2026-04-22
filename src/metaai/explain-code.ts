import { Command, CommandRegistry } from '@theia/core';

export const ExplainCommand: Command = { id: 'metaai.explain', label: 'AI อธิบายฟังก์ชันนี้' };

export function registerExplain(registry: CommandRegistry, editor: any) {
  registry.registerCommand(ExplainCommand, {
    execute: async () => {
      const selection = editor.document.getText(editor.selection);
      const prompt = `อธิบายโค้ด Arduino นี้เป็นภาษาไทยทีละบรรทัด:
\`\`\`cpp
${selection}
\`\`\``;
      window.open(`https://meta.ai/?q=${encodeURIComponent(prompt)}`);
    }
  });
}