using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using usuariosModel.Models;
using System.Threading.Tasks;

namespace usuariosControllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public AuthController(ApiDbContext context)
        {
            _context = context;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.usuarios
                .FirstOrDefaultAsync(u => u.Username == request.User && u.Clave == request.Clave);

            if (user == null)
            {
                return Unauthorized(new { success = false, message = "Invalid username or password" });
            }

            // Aquí puedes agregar lógica para generar un token JWT si es necesario

            return Ok(new { success = true, message = "Login successful" });
        }
    }

    public class LoginRequest
    {
        public string User { get; set; }
        public string Clave { get; set; }
    }
}