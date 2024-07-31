
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;

namespace products_api
{
    public class ProductsService : IProductService
    {
        private readonly IProductsRepo _repo;
        public ProductsService(IProductsRepo repo)
        {
            _repo = repo;
        }

        public async Task<List<ProductCategory>> GetCategoriesAsync()
        {
            return await _repo.GetCategoriesAsync();
        }

        public async Task<List<Product>> GetProductsAsync(int? categoryID, string? keyword)
        {
            return await _repo.GetProductsAsync( categoryID,  keyword);
        }
    }
}
