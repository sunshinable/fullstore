
export const revalidate = 5
export default async function Home() {
  return (
      <main className="">
        <div>{Date.now()}</div>
      </main>      
  );
}
