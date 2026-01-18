type Params = Promise<{ id: string }>;

const getStaticProps = async ({ params }: { params: Params }) => {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    data,
  };
};

export default getStaticProps;
