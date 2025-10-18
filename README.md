# Select Random Line Plugin
*Plugin for the application Obsidian Notes*

[![Created by Freddy Ouellette](https://img.shields.io/badge/Created%20by%20Freddy%20Ouellette-gray)](https://freddyouellette.com) [![GitHub](https://img.shields.io/badge/GitHub-black?logo=github)](https://github.com/freddyouellette/obsidian-select-random-line-plugin)

Adds a new command to the Obsidian Notes Application:
  * `Select Random Line` - Intelligently selects a random line based on your current context

## How to Use

The plugin has two modes of operation:

**Mode 1: With Selection**
1. Select some text in your note that spans multiple lines
2. Run the command `Select Random Line` (you can find it in the Command Palette, assign it to a hotkey, or add it to your toolbar)
3. The plugin will randomly select one line from within your selection that contains text content

**Mode 2: No Selection (Just Cursor)**
1. Simply place your cursor anywhere in the document (no selection needed)
2. Run the command `Select Random Line`
3. The plugin will randomly select any line from the entire file that contains text content

This is useful for:
- Randomly picking items from lists
- Getting random inspiration from brainstorming notes
- Randomly selecting lines for review or processing

## Dev, Debugging, & Contributing
1. Clone this repository to the `.obsidian/plugins` directory of your Obsidian vault.
2. run `npm i && npm run build` to install dependencies and build the plugin.
3. Open Obsidian, go to Settings > Community Plugins, and enable this plugin. You might have to reload Obsidian.
4. If any changes are made, you will need to rebuild and reload Obsidian with the `Reload app without saving` command.

## Problems, Questions, Suggestions? 
* I encourage all issues or suggestions to be submitted through the [**Issues** tab on GitHub](https://github.com/freddyouellette/obsidian-select-random-line-plugin/issues).
* Pull requests are welcome.

## Support Me
[![Donate](https://img.shields.io/badge/Donate-fec133?logo=paypal)](https://www.paypal.com/donate/?hosted_button_id=3PJ9XD363CC5E)

Bitcoin: `bc1qs39glh9cwsef0qv40dny6ajnweqe2le7ynfgr2`

Ethereum: `0x5Baba8708b8676afBFF2974b4af4894Fc12aE242`