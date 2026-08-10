// Personal setup/config notes. Not linked from nav - reachable only at /notes.
export const notes = [
  {
    title: "Agentic development setup",
    date: "2026-08-09",
    tags: ["agents", "terminal", "setup"],
    // Write in Markdown-ish plain text; NotesPage renders paragraphs, lists, code blocks, and links.
    content: `
A lightweight, terminal-first setup for working with coding agents. Keep this list current so a new machine can feel familiar quickly.

Pi
- [Pi](https://pi.dev) is my primary coding-agent harness. It is minimal by design, but can be adapted with extensions, skills, prompts, themes, and packages.
- I use Pi with my ChatGPT/Codex subscription. Run \`/login\` in Pi and select the OpenAI provider to authenticate.
- I installed [pi-web-access](https://github.com/nicobailon/pi-web-access) to add web search and content-fetching tools - useful capabilities that Pi intentionally does not include in its small default toolset.

Pi preferences
- In \`~/.pi/agent/settings.json\`, set \`hideThinkingBlock\` to \`true\` for a quieter terminal. I do not need to watch the model's private reasoning while it works.
- Set \`steeringMode\` to \`all\` so every steering prompt I queue is sent as soon as the current turn completes.
- Set \`followUpMode\` to \`all\` so queued follow-up prompts are delivered together instead of one at a time.

\`\`\`json
{
  "hideThinkingBlock": true,
  "steeringMode": "all",
  "followUpMode": "all"
}
\`\`\`

Long-running OpenAI tasks
- Install [pi-openai-server-compaction](https://github.com/algal/pi-openai-server-compaction), an experimental Pi extension that recreates Codex-style server-side compaction for supported OpenAI models. It uses OpenAI's Responses compaction protocol alongside Pi's normal portable text summary to preserve continuity across context compactions.
- Prefer a project-local install first, and check the extension README for its current Pi, Node, and model compatibility requirements.

\`\`\`bash
pi install -l git:github.com/algal/pi-openai-server-compaction
\`\`\`

Terminal and agent orchestration
- [WezTerm](https://wezterm.org) is my terminal emulator. Its deep configuration options and cross-platform support help keep the terminal workflow consistent across macOS and Windows.
- My WezTerm configuration lives at \`~/.config/wezterm/wezterm.lua\`. It uses the Rose Pine Moon color scheme, Hack Nerd Font, a translucent blurred macOS window, and dims unfocused windows to make the active terminal immediately clear.

\`\`\`lua
local wezterm = require("wezterm")

local config = wezterm.config_builder()

config.color_scheme = "rose-pine-moon"
config.font = wezterm.font("Hack Nerd Font")
config.font_size = 15.0
config.window_background_opacity = 0.8
config.macos_window_background_blur = 50
config.hide_tab_bar_if_only_one_tab = true
config.window_decorations = "RESIZE"

-- Dim unfocused windows so the focused one is obvious at a glance.
local UNFOCUSED_FOREGROUND_TEXT_HSB = { hue = 1.0, saturation = 0.25, brightness = 0.45 }
local UNFOCUSED_WINDOW_BACKGROUND_OPACITY = 0.62

-- get_config_overrides() hands back a copy, so the current value is never the
-- same table we last stored; compare the fields instead of the identity.
local function same_text_hsb(actual, expected)
    if actual == nil or expected == nil then
        return actual == expected
    end
    return actual.hue == expected.hue
        and actual.saturation == expected.saturation
        and actual.brightness == expected.brightness
end

wezterm.on("window-focus-changed", function(window)
    local overrides = window:get_config_overrides() or {}
    local text_hsb, opacity
    if not window:is_focused() then
        text_hsb = UNFOCUSED_FOREGROUND_TEXT_HSB
        opacity = UNFOCUSED_WINDOW_BACKGROUND_OPACITY
    end

    -- Only write when one of the two values we own actually changes; a redundant
    -- set_config_overrides() call would trigger another config reload.
    if same_text_hsb(overrides.foreground_text_hsb, text_hsb) and overrides.window_background_opacity == opacity then
        return
    end

    overrides.foreground_text_hsb = text_hsb
    overrides.window_background_opacity = opacity
    window:set_config_overrides(overrides)
end)

return config
\`\`\`

Zsh shell enhancements
- My \`~/.zshrc\` puts local user binaries first and enables command suggestions and syntax highlighting for interactive shells.
- \`claude-yolo\` intentionally runs Claude Code without permission prompts. Use it only in a trusted environment, since it permits actions without confirmation.

\`\`\`zsh
export PATH="$HOME/.local/bin:$PATH"
alias claude-yolo='claude --dangerously-skip-permissions'

# Interactive shell enhancements
source /opt/homebrew/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
\`\`\`

- [Herdr](https://herdr.dev) is a terminal-native, tmux-style multiplexer for running and supervising multiple coding agents in parallel. It gives each agent a persistent terminal pane, making parallel work easier to manage.

New-machine checklist
- Install Pi, then sign in with the ChatGPT/Codex subscription.
- Install and configure pi-web-access for web research and fetching.
- Restore the Pi preferences in \`~/.pi/agent/settings.json\`.
- Install pi-openai-server-compaction project-locally for compatible long-running OpenAI tasks.
- Install WezTerm and restore its configuration.
- Install Herdr when running multiple agents in parallel.
- Add any new tools, extensions, plugins, or configuration backups here as the setup evolves.
`,
  },
]
