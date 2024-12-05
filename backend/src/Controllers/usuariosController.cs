using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using UsuariosModel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace usuariosControllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly ILogger<UsuariosController> _logger;

        public UsuariosController(ApiDbContext context, ILogger<UsuariosController> logger)
        {
            _context = context;
            _logger = logger;
        }

        // Acción para manejar solicitudes GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuarios>>> GetUsuarios()
        {
            try
            {
                var usuarios = await _context.usuarios
                    .Where(data => data.activo == "activo")
                    .ToListAsync();

                if (usuarios.Count == 0)
                {
                    return NotFound(new ErrorResponse { Message = "No usuarios found.", Detail = "The usuarios table is empty or no matching records were found." });
                }

                return Ok(usuarios);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new ErrorResponse { Message = "An unexpected error occurred", Detail = ex.Message });
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Usuarios>> GetUsuario(int id)
        {
            try
            {
                var usuario = await _context.usuarios.FindAsync(id);
                if (usuario == null)
                {
                    return NotFound(new ErrorResponse { Message = $"Usuario with ID {id} not found.", Detail = "No matching record found in the usuarios table." });
                }
                return Ok(usuario);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                _logger.LogError(dbConEx, "A database concurrency error occurred while getting usuario with ID {id}.", id);
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "A database update error occurred while getting usuario with ID {id}.", id);
                return StatusCode(500, new ErrorResponse { Message = "Database update error", Detail = dbEx.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting usuario with ID {id}.", id);
                return StatusCode(500, new ErrorResponse { Message = "Internal server error", Detail = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> CreateUsuarios([FromBody] Usuarios user)
        {
            try
            {
                if (user == null)
                {
                    return BadRequest(new ErrorResponse { Message = "Invalid user data", Detail = "The user object is null." });
                }

                // No need to set ID or activo, the database will handle it
                await _context.usuarios.AddAsync(user);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetUsuario), new { id = user.Id }, user);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                _logger.LogError(dbConEx, "A database concurrency error occurred while creating a usuario.");
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "A database update error occurred while creating a usuario.");
                return StatusCode(500, new ErrorResponse { Message = "Database update error", Detail = dbEx.InnerException?.Message ?? dbEx.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while creating a usuario.");
                return StatusCode(500, new ErrorResponse { Message = "Internal server error", Detail = ex.InnerException?.Message ?? ex.Message });
            }
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUsuario(int id, Usuarios item)
        {
            if (id != item.Id)
            {
                return BadRequest(new ErrorResponse { Message = "ID mismatch", Detail = "The ID in the URL does not match the ID of the item." });
            }

            var usuario = await _context.usuarios.FindAsync(id);
            if (usuario == null)
            {
                return NotFound(new ErrorResponse { Message = $"Usuario with ID {id} not found.", Detail = "No matching record found in the usuarios table." });
            }

            // update items
            usuario.Username = item.Username;
            usuario.Clave = item.Clave;
            usuario.role = item.role;
            // Establecer una fecha por defecto si no está definida
            // if (item.created_at == default(DateTime))
            // {
            //     usuario.created_at = DateTime.UtcNow;
            // }
            // else
            // {
            //     usuario.created_at = item.created_at;
            // }

            _context.Entry(usuario).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                Console.WriteLine($"Updated usuario with ID {id}: {item.Username}");
                return Ok(usuario);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
        }

        [HttpDelete("desactivar/{id}")]
        public async Task<IActionResult> DesactivarUsuario(int id)
        {

            var user = await _context.usuarios.FindAsync(id);
            if (user == null)
            {
                return NotFound(new ErrorResponse { Message = $"Usuario with ID {id} not found.", Detail = "No matching record found in the usuarios table." });
            }

            // update items
            user.activo = "inactivo";


            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(user);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
        }

        [HttpPut("activa/{id}")]
        public async Task<IActionResult> ActivarUsuario(int id)
        {

            var user = await _context.usuarios.FindAsync(id);
            if (user == null)
            {
                return NotFound(new ErrorResponse { Message = $"Usuario with ID {id} not found.", Detail = "No matching record found in the usuarios table." });
            }

            // update items
            user.activo = "activo";


            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
                return Ok(user);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
        }




    }

}
//         [HttpGet("{id}")]
//         public async Task<ActionResult<Item>> GetItem(int id)
//         {
//             var item = await _context.Items.FindAsync(id);

//             if (item == null)
//             {
//                 return NotFound();
//             }

//             return item;
//         }

//         [HttpPost]
//         public async Task<ActionResult<Item>> PostItem(Item item)
//         {
//             _context.Items.Add(item);
//             await _context.SaveChangesAsync();

//             return CreatedAtAction(nameof(GetItem), new { id = item.Id }, item);
//         }

//         [HttpPut("{id}")]
//         public async Task<IActionResult> PutItem(int id, Item item)
//         {
//             if (id != item.Id)
//             {
//                 return BadRequest();
//             }

//             _context.Entry(item).State = EntityState.Modified;

//             try
//             {
//                 await _context.SaveChangesAsync();
//             }
//             catch (DbUpdateConcurrencyException)
//             {
//                 if (!ItemExists(id))
//                 {
//                     return NotFound();
//                 }
//                 else
//                 {
//                     throw;
//                 }
//             }

//             return NoContent();
//         }

//         [HttpDelete("{id}")]
//         public async Task<IActionResult> DeleteItem(int id)
//         {
//             var item = await _context.Items.FindAsync(id);
//             if (item == null)
//             {
//                 return NotFound();
//             }

//             _context.Items.Remove(item);
//             await _context.SaveChangesAsync();

//             return NoContent();
//         }

//         private bool ItemExists(int id)
//         {
//             return _context.Items.Any(e => e.Id == id);
//         }
//     }
// }