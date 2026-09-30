/**
 * Reusable server component that renders a JSON-LD structured data
 * script tag. Pass any schema.org-compatible object.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
