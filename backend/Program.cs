using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using Serilog;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

//! Configure Serilog
Log.Logger = new LoggerConfiguration()
    .ReadFrom.Configuration(builder.Configuration)
    .Enrich.FromLogContext()
    .WriteTo.Console()
    .CreateLogger();

builder.Host.UseSerilog();

//? creating the connection to the database
builder.Services.AddDbContext<ApiDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"))
);

//? creating services for the controllers and enpoints
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

//? Add CORS for policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder
            .WithOrigins("http://localhost:5173") // Reemplaza con el origen de tu frontend
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials());
});

//? Add distributed memory cache
builder.Services.AddDistributedMemoryCache();

//? configure session 
builder.Services.AddSession(serv =>
{
    serv.IdleTimeout = TimeSpan.FromSeconds(60); //? define the time of the session
    serv.Cookie.HttpOnly = true; //? define if can use cookies
    serv.Cookie.IsEssential = true; //? define if is essential
});

//? Configure the JWT
builder.Services.AddAuthentication(jwt =>
{
    jwt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme; //? define the default scheme
    jwt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme; //? define the default scheme
}).AddJwtBearer(jwt =>
{
    jwt.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
    };
});

//? Creating var for execute the app
var app = builder.Build();

//! Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "E-learning API");
        c.RoutePrefix = string.Empty; // Set Swagger UI at the app's root
    });
}

//! Configure and use the HTTP request 

app.UseHttpsRedirection();
app.UseAuthorization();

//?  Use CORS policy
app.UseCors("AllowSpecificOrigin");

//? Use the exception middleware
app.UseMiddleware<ExceptionMiddleware>();

//? execute the controllers
app.MapControllers();

//! run
try
{
    app.Run("http://localhost:5040"); //? Change the port here
}
catch (Exception ex)
{
    Log.Fatal(ex, "An error occurred while starting the application"); //? Log the error
}
finally
{
    Log.CloseAndFlush();
}