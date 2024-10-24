using Microsoft.EntityFrameworkCore;
using usuariosData.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddDbContext<ApiDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "usuarios");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
    });
}

app.UseHttpsRedirection();
app.UseAuthorization();

app.MapControllers();

try
{
    app.Run("http://localhost:5040"); // Change the port here
}
catch (Exception ex)
{
    // Log the exception (you can use a logging framework like Serilog, NLog, etc.)
    Console.WriteLine($"An error occurred while starting the application: {ex.Message}");
}