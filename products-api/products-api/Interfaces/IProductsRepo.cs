namespace products_api
{
    public interface IProductsRepo
    {
        Task<List<Product>> GetProductsAsync();
    }
}
