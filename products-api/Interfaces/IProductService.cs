namespace products_api
{
    public interface IProductService
    {
        Task<List<Product>> GetProductsAsync();
    }
}
