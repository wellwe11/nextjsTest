const fetchData = async (path: string) => {
  try {
    const req = await fetch(`http://localhost:3000/${path}.json`);

    if (!req.ok) {
      throw new Error("-- fetchData -- Data cannot be fetched");
    }

    return req.json();
  } catch (err) {
    throw new Error(`ERROR: ${err}`);
  }
};

export default fetchData;
