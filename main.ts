import { Editor, Plugin, Notice } from 'obsidian';

export default class SelectRandomLine extends Plugin {
	async onload() {
		this.addCommand({
			id: 'select-random-line-within-selection',
			name: 'Select Random Line Within Selection',
			icon: 'shuffle',
		editorCallback: (editor: Editor) => {
			// Check if there is a selection
			if (!editor.somethingSelected()) {
				new Notice('Please select some text first');
				return;
			}

			// Get the current selection using the recommended approach
			const selectedText = editor.getSelection();
			const from = editor.getCursor('from');
			const to = editor.getCursor('to');

			if (!selectedText || selectedText.trim() === '') {
				new Notice('No text selected');
				return;
			}

			// Split selected text into lines and find non-empty ones
			const lines = selectedText.split('\n');
			const nonEmptyLineIndices: number[] = [];
			
			for (let i = 0; i < lines.length; i++) {
				if (lines[i].trim().length > 0) {
					nonEmptyLineIndices.push(i);
				}
			}

			if (nonEmptyLineIndices.length === 0) {
				new Notice('No lines with content found in selection');
				return;
			}

			// Pick a random line index from the non-empty lines
			const randomIndex = Math.floor(Math.random() * nonEmptyLineIndices.length);
			const selectedLineIndex = nonEmptyLineIndices[randomIndex];
			const actualLineNumber = from.line + selectedLineIndex;

			// Get the content of the selected line
			const fullLineText = editor.getLine(actualLineNumber);
			
			// Calculate the selection bounds for this line
			let lineStart = 0;
			let lineEnd = fullLineText.length;

			// Set selection to the random line
			editor.setSelection(
				{ line: actualLineNumber, ch: lineStart },
				{ line: actualLineNumber, ch: lineEnd }
			);
		}
		});
	}

	onunload() {}
}