using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using usuariosModel.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace usuariosControllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public ProductController(ApiDbContext context)
        {
            _context = context;
        }

        // Acción para manejar solicitudes GET
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuarios>>> GetUsuarios()
        {
            try
            {
                var usuarios = await _context.usuarios.ToListAsync();
                return usuarios == null || usuarios.Count == 0
                    ? NotFound("No usuarios found.")
                    : Ok(usuarios);
            }
            catch (Exception ex)
            {
                // Log the exception (you can use a logging framework like Serilog, NLog, etc.)
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Usuarios>> GetUsuario(int id)
        {
            try
            {
                var usuario = await _context.usuarios.FindAsync(id);
                return usuario == null
                    ? NotFound($"Usuario with ID {id} not found.")
                    : Ok(usuario);
            }
            catch (Exception ex)
            {
                // Log the exception (you can use a logging framework like Serilog, NLog, etc.)
                return StatusCode(500, $"Internal server error: {ex.Message}");
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