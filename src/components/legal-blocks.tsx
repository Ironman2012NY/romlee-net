import type { LegalBlock } from "@/data/legal";

export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-8 text-sm leading-relaxed text-muted">
      {blocks.map((block, i) => (
        <section key={i}>
          {block.heading ? (
            <h2 className="mb-3 font-display text-2xl tracking-tight text-fg">{block.heading}</h2>
          ) : null}
          {block.sub ? (
            <h3 className="mb-2 text-base font-medium text-fg">{block.sub}</h3>
          ) : null}
          {block.paragraphs.map((p) => (
            <p key={p.slice(0, 48)} className="mb-2 last:mb-0">
              {p}
            </p>
          ))}
          {block.list ? (
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {block.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
