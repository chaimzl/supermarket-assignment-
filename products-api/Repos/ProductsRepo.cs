
using Microsoft.EntityFrameworkCore;
using static Microsoft.Extensions.Logging.EventSource.LoggingEventSource;

namespace products_api
{
    public class ProductsRepo : IProductsRepo
    {
        private readonly ProductsContext _context;
        public ProductsRepo(ProductsContext context)
        {
                _context = context;
        }

        public async Task<List<ProductCategory>> GetCategoriesAsync()
        {
           return await _context.ProductCategories.ToListAsync();
        }

        public async Task<List<Product>> GetProductsAsync(int? categoryID, string? keyword)
        {
            var qury=  _context.Products.AsQueryable();
            if(categoryID.HasValue)
            {
                qury = qury.Where(x => x.CategoryID == categoryID);
            }
            if (!string.IsNullOrEmpty( keyword))
            {
                qury = qury.Where(x => x.Title.Contains(keyword));
            }
            return await qury.ToListAsync();
        }
    }
}
