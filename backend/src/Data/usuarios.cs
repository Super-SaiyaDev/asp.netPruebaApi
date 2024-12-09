using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using UsuariosModel.Models;
using System;
using System.Threading;
using System.Threading.Tasks;
using EstudiantesModel.Models;

namespace usuariosData.Data
{
    public class ApiDbContext : DbContext
    {
        private readonly ILogger<ApiDbContext> _logger;

        public ApiDbContext(DbContextOptions<ApiDbContext> options, ILogger<ApiDbContext> logger)
            : base(options)
        {
            _logger = logger;
        }

        public DbSet<Usuarios> usuarios { get; set; } = null!;

        public DbSet<Estudiantes> estudiantes { get; set; } = null!;

        public override int SaveChanges()
        {
            try
            {
                return base.SaveChanges();
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                _logger.LogError(dbConEx, "A database concurrency error occurred.");
                throw; // Re-throw the exception to be handled by the middleware
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "A database update error occurred.");
                throw; // Re-throw the exception to be handled by the middleware
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while saving changes.");
                throw; // Re-throw the exception to be handled by the middleware
            }
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
            try
            {
                return await base.SaveChangesAsync(cancellationToken);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                _logger.LogError(dbConEx, "A database concurrency error occurred.");
                throw; // Re-throw the exception to be handled by the middleware
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "A database update error occurred.");
                throw; // Re-throw the exception to be handled by the middleware
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while saving changes.");
                throw; // Re-throw the exception to be handled by the middleware
            }
        }
    }
}