using Microsoft.EntityFrameworkCore;
using usuariosModel.Models;

namespace usuariosData.Data
{
    public class ApiDbContext : DbContext
    {
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options) { }

        public DbSet<Usuarios> usuarios { get; set; }
    }
}