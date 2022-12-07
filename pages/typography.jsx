import Head from "next/head";
import styles from "../styles/Typhography.module.css";

function typography() {
  return (
    <div>
      <Head>
        <title>Typhography</title>
      </Head>

      <h1 className="text-xl font-bold">Font Family</h1>
      <p className="font-sans">The quick brown fox jump over the lazy dog</p>
      <p className="font-sans2">The quick brown fox jump over the lazy dog 2</p>

      <h1 className="text-xl font-bold mt-3">Font Size</h1>
      <small>
        text-xs, text-sm, text-large, text-xl, text-2xl, test-3xl, text-4xl,
        text-5xl, text-6xl, text-7xl
      </small>

      <h1 className="text-xl font-bold mt-3">Custom Style</h1>
      <p className={`font-bold ${styles.colorBlue}`}>
        The quick brown fox jump over the lazy dog.
      </p>

      <h1 className="text-xl font-bold mt-3">Font Style</h1>
      <small>italic, not-italic</small>
      <p className="italic hover:not-italic">
        The quick brown fox jump over the lazy dog.
      </p>

      <h1 className="text-xl font-bold mt-3">Font Weight</h1>
      <small>
        font-thin, font-extralight, font-light, font-normal, font-medium,
        font-semibold, font-bold, font-extrabold, font-black{" "}
      </small>
      <p className="font-semibold">
        The quick brown fox jumps over the lazy dog.
      </p>

      <h1 className="text-xl font-bold mt-3">Font Variant Numeric</h1>
      <small>
        normal-nums <br />
        ordinal font <br />
        slashed-zero <br />
        lining-nums <br />
        oldstyle-nums <br />
        proportional-nums <br />
        tabular-nums <br />
        diagonal-fractions <br />
        stacked-fractions
      </small>
      <p className="ordinal">1st</p>
      <p className="tabular-nums">123445</p>
      <p className="mt-5">Good morning</p>

      <h1 className="text-xl font-bold mt-3">Letter Spacing</h1>
      <small>
        tracking-tighter <br />
        tracking-tight <br />
        tracking-normal <br />
        tracking-wide <br />
        tracking-wider <br />
        tracking-widest <br />
      </small>
      <p className="tracking-wider">
        The quick brown fox jumps over the lazy dog.
      </p>

      <div className="overflow-x-auto relative mt-23">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray">
            <tr>
              <th scope="col" className="py-3 px-6">
                Product name
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:border-gray-700">
              <td className="py-4 px-6">Sliver</td>
              <td className="py-4 px-6">Laptop</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default typography;
