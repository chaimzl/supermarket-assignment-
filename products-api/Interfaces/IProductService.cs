namespace products_api
{
    public interface IProductService
    {
        Task<List<Product>> GetProductsAsync(int? categoryID, string? keyword);
        Task<List<ProductCategory>> GetCategoriesAsync();

    }
}
