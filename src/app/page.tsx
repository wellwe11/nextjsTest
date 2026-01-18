import getData from "../functions/getData";

export default async function Home() {
  const data = await getData("HomeData");

  console.log(data);
  return (
    <div className="p-0 m-0 box-border w-full">
      <h1>Home</h1>
    </div>
  );
}
