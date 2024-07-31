
using Microsoft.EntityFrameworkCore;
using products_api;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddDbContext<ProductsContext>(options =>
              options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<IProductsRepo, ProductsRepo>();
builder.Services.AddScoped<IProductService, ProductsService>();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "allowCrossDomain", policy =>
    {
        policy.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.AddProductsRouting();
app.UseCors("allowCrossDomain");


app.Run();

