namespace products_api
{
    public interface IProductsRepo
    {
        Task<List<Product>> GetProductsAsync(int? categoryID, string? keyword);
        Task<List<ProductCategory>> GetCategoriesAsync();
    }
}
