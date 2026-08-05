const items = ['Brand systems', 'Launch campaigns', 'Next-gen web apps', 'Interactive storytelling', 'Conversion design'];

export default function TickerSection() {
  return (
    <section className="ticker-wrap" aria-label="Highlights">
      <div className="ticker-track">
        {[...items, ...items].map((item, index) => (
          <div key={`${item}-${index}`} className="ticker-item">{item}</div>
        ))}
      </div>
    </section>
  );
}
