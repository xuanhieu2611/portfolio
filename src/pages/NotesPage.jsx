import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { notes } from "../data/notes"

// Minimal renderer for the note content strings: paragraphs, "- " bullet
// lists, ```fenced``` code blocks, and Markdown links. Keeps notes.js writeable as plain text.
function InlineText({ text }) {
  const parts = text.split(/(\[[^\]]+\]\([^\s)]+\))/g)

  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^\s)]+)\)$/)

    if (!match) return part

    return (
      <a
        key={i}
        href={match[2]}
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-2 hover:text-foreground transition-colors"
      >
        {match[1]}
      </a>
    )
  })
}

function NoteBody({ content }) {
  const blocks = content.trim().split(/\n\n+/)

  return (
    <div className="space-y-4">
      {blocks.map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith("```")) {
          const code = trimmed.replace(/^```[\w-]*\n?/, "").replace(/```$/, "")
          return (
            <pre
              key={i}
              className="bg-background-elevated border border-border rounded-md p-3 overflow-x-auto text-xs font-mono text-foreground-muted"
            >
              <code>{code}</code>
            </pre>
          )
        }

        const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean)
        const isList = lines.length > 0 && lines.every((l) => l.startsWith("- "))

        if (isList) {
          return (
            <ul key={i} className="list-disc list-inside space-y-1">
              {lines.map((l, j) => (
                <li key={j} className="text-sm text-foreground-muted leading-relaxed">
                  <InlineText text={l.slice(2)} />
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="text-sm text-foreground-muted leading-relaxed whitespace-pre-line">
            <InlineText text={trimmed} />
          </p>
        )
      })}
    </div>
  )
}

export default function NotesPage() {
  return (
    <div className="py-8 animate-in fade-in duration-500">
      <div className="mb-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-foreground-muted hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          back to home
        </Link>
        <h1 className="text-xl font-medium text-foreground">Notes</h1>
        <p className="text-sm text-foreground-muted mt-2">
          Personal setup notes and config, mostly so future-me can reproduce it on a new machine.
        </p>
      </div>

      <div className="space-y-12">
        {notes.map((note, index) => (
          <div key={index} className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-foreground font-bold text-base">{note.title}</h2>
              <span className="text-[10px] font-mono text-foreground-faint">{note.date}</span>
            </div>

            {note.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-1 mb-2">
                {note.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono text-foreground-faint bg-background-elevated px-1.5 py-0.5 rounded border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="flex gap-3 ml-2 border-l border-border pl-4 pb-2 mt-1 w-full">
              <span className="text-foreground-subtle select-none text-sm leading-tight font-mono mt-[2px]">
                ↳
              </span>
              <div className="w-full">
                <NoteBody content={note.content} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
