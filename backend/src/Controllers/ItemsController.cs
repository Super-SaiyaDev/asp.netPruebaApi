using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using usuariosModel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace usuariosControllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly ILogger<ProductController> _logger;

        public ProductController(ApiDbContext context, ILogger<ProductController> logger)
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
                var usuarios = await _context.usuarios.ToListAsync();
                if (usuarios == null || usuarios.Count == 0)
                {
                    return NotFound(new ErrorResponse { Message = "No usuarios found.", Detail = "The usuarios table is empty or no matching records were found." });
                }
                return Ok(usuarios);
            }
            catch (DbUpdateConcurrencyException dbConEx)
            {
                _logger.LogError(dbConEx, "A database concurrency error occurred while getting usuarios.");
                return StatusCode(500, new ErrorResponse { Message = "Database concurrency error", Detail = dbConEx.Message });
            }
            catch (DbUpdateException dbEx)
            {
                _logger.LogError(dbEx, "A database update error occurred while getting usuarios.");
                return StatusCode(500, new ErrorResponse { Message = "Database update error", Detail = dbEx.Message });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while getting usuarios.");
                return StatusCode(500, new ErrorResponse { Message = "Internal server error", Detail = ex.Message });
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