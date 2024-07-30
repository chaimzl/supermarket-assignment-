
using Microsoft.EntityFrameworkCore;

namespace products_api
{
    public class ProductsRepo : IProductsRepo
    {
        private readonly ProductsContext _context;
        public ProductsRepo(ProductsContext context)
        {
                _context = context;
        }
        public async Task<List<Product>> GetProductsAsync()
        {
            return await _context.Products.ToListAsync();
        }
    }
}
