import { useGetProductByIdQuery } from "../app/service/dummyData";

const SpecificProduct = () => {
  const { data, isError, isLoading } = useGetProductByIdQuery(2);
  if (isError) return <h1>You get an error</h1>;
  if (isLoading) return <h1>Loading...</h1>;
  console.log(data);
  return <div>{data?.title}</div>;
};

export default SpecificProduct;
