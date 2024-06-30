import { useAddNewProductMutation } from "../app/service/dummyData";

const AddNewProduct = () => {
  const [addNewProduct, { data, isError, isLoading }] =
    useAddNewProductMutation();
  if (isError) return <h1>You get an error</h1>;
  if (isLoading) return <h1>Loading...</h1>;

  const handleAddProduct = async () => {
    try {
      const addNewProductData = {
        id: 1,
        title: "Product",
        description: "Product description",
      };
      await addNewProduct(addNewProductData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{data?.title}</h1>
      <h1>{data?.id}</h1>
      <h1>{data?.description}</h1>

      <button onClick={handleAddProduct} disabled={isLoading}>
        Add new product
      </button>
    </div>
  );
};

export default AddNewProduct;
