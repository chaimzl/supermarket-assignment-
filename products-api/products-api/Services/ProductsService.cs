
namespace products_api
{
    public class ProductsService : IProductService
    {
        private readonly IProductsRepo _repo;
        public ProductsService(IProductsRepo repo)
        {
            _repo = repo;
        }
        public async Task<List<Product>> GetProductsAsync()
        {
            return await _repo.GetProductsAsync();
        }
    }
}
