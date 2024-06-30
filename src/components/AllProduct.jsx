import { useGetAllProductsQuery } from "../app/service/dummyData";

const AllProduct = () => {
  const { data, isError, isLoading } = useGetAllProductsQuery();

  if (isError) return <h1>You get an error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);

  return (
    <div>
      {data?.products.map((p) => (
        <h1 key={p.title}>{p.title}</h1>
      ))}
    </div>
  );
};

export default AllProduct;
