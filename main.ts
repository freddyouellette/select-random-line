import { Editor, Plugin, Notice } from 'obsidian';

export default class SelectRandomLine extends Plugin {
	onload() {
		this.addCommand({
			id: 'random-line-selection',
			name: 'In selection or file',
			icon: 'shuffle',
			editorCallback: (editor: Editor) => {
				if (editor.somethingSelected()) {
					// Case 1: There is a selection - select random line within selection
					const selectedText = editor.getSelection();
					const from = editor.getCursor('from');

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
					
					// Always select the entire line, regardless of original selection boundaries
					const lineStart = 0;
					const lineEnd = fullLineText.length;

					// Set selection to the entire random line
					editor.setSelection(
						{ line: actualLineNumber, ch: lineStart },
						{ line: actualLineNumber, ch: lineEnd }
					);

					new Notice(`Selected line ${actualLineNumber + 1} from selection`);
				} else {
					// Case 2: No selection - select random line from entire file
					const totalLines = editor.lineCount();
					const nonEmptyLines: number[] = [];

					// Find all non-empty lines in the entire file
					for (let lineNum = 0; lineNum < totalLines; lineNum++) {
						const lineText = editor.getLine(lineNum);
						if (lineText.trim().length > 0) {
							nonEmptyLines.push(lineNum);
						}
					}

					if (nonEmptyLines.length === 0) {
						new Notice('No lines with content found in file');
						return;
					}

					// Pick a random line from all non-empty lines
					const randomIndex = Math.floor(Math.random() * nonEmptyLines.length);
					const randomLineNumber = nonEmptyLines[randomIndex];
					const lineText = editor.getLine(randomLineNumber);

					// Select the entire line
					editor.setSelection(
						{ line: randomLineNumber, ch: 0 },
						{ line: randomLineNumber, ch: lineText.length }
					);
				}
			}
		});
	}

	onunload() {}
}