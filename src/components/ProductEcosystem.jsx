export default function ProductEcosystem() {
  const products = [
    "AyurPulse",
    "ShareFood",
    "FARM Shop",
    "GlobalBuy India",
    "Any Goods Exchange",
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12 text-center">
          Product Ecosystem
        </h2>

        <div className="grid md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product}
              className="glass rounded-3xl p-6 text-center"
            >
              <h3 className="font-bold">
                {product}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}