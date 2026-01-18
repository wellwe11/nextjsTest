type Params = Promise<{ id: string }>;

const Page = async ({ params }: { params: Params }) => {
  const { id } = await params;
  return <h1>{id}</h1>;
};

export default Page;
