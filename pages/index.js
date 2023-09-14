import Link from "next/link";

export default function Home({ animal }) {
  return (
    <>
      {animal && <h1>Your animal is a {animal}</h1>}
      <br/>
      <h2>Select your animal</h2>
      <br/>
      <ul>
        {["cat", "dog", "snake"].map((a) => (
          <li key={a}>
            <Link
              href={{ pathname: "/",  query: { animal: a} }}
              legacyBehavior
            >
              <a>{a}</a>
            </Link>
          </li>
        ))}
      </ul>
      {new Array(1000).fill(0).map((_, idx) => (
        <div key={idx}>Dummy Div {idx}</div>
      ))}
    </>
  )
}

Home.getInitialProps = (ctx) => {
  return { animal: ctx.query?.animal };
};
