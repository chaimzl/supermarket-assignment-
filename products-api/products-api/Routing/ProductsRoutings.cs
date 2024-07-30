namespace products_api
{
    public static class ProductsRoutings
    {
        public static void AddProductsRouting(this IEndpointRouteBuilder app)
        {
            app.MapGet("/healthcheck", () => Results.Ok())
              .Produces(StatusCodes.Status200OK);
            app.MapGet("/api/products", GetContentPage)
                .Produces<ICollection<Product>>(StatusCodes.Status200OK);           
        }

        private static async Task<IResult> GetContentPage( IProductService service)
        {
            var result = await service.GetProductsAsync();
            return Results.Ok(result);
        }
    }
}
