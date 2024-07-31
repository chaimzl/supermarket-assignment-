namespace products_api
{
    public static class ProductsRoutings
    {
        public static void AddProductsRouting(this IEndpointRouteBuilder app)
        {
            app.MapGet("/healthcheck", () => Results.Ok())
              .Produces(StatusCodes.Status200OK);
            app.MapGet("/api/products", GetProducts)
                .Produces<ICollection<Product>>(StatusCodes.Status200OK);
            app.MapGet("/api/categories", GetCategories)
               .Produces<ICollection<ProductCategory>>(StatusCodes.Status200OK);
        }

        private static async Task<IResult> GetProducts(int? categoryID, string? keyword,  IProductService service)
        {
            var result = await service.GetProductsAsync(categoryID,  keyword);
            return Results.Ok(result);
        }

        private static async Task<IResult> GetCategories( IProductService service)
        {
            var result = await service.GetCategoriesAsync();
            return Results.Ok(result);
        }
    }
}
