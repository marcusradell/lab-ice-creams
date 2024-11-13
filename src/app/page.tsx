export default async function Home() {
  const iceCreams = await [];

  return (
    <>
      <h1>Ice creams</h1>
      {!iceCreams.length && (
        <p>No ice creams found. Please add an ice cream.</p>
      )}
    </>
  );
}
