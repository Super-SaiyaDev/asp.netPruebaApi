using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usuariosData.Data;
using EstudiantesModel.Models;
using System.Threading.Tasks;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System;

namespace EstudiantesControllers.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthClientController : ControllerBase
    {
        private readonly ApiDbContext _context;
        private readonly IConfiguration _configuration;

        public AuthClientController(ApiDbContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginEstudiantes request)
        {
            if (request.username == null || request.Clave == null)
            {
                return BadRequest(new { success = false, message = "Username or password is null" });
            }

            var user = await _context.estudiantes
                .FirstOrDefaultAsync(data => data.Username == request.username && data.Clave == request.Clave);

            if (user == null)
            {
                return Unauthorized(new { success = false, message = "Invalid username or password" });
            }

            var token = createToken(user.Username!);

            return Ok(new { success = true, token });
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterEstudiantes req)
        {
            if (req.Username == null || req.Email == null || req.Clave == null)
            {
                return BadRequest(new { success = false, message = "Username, email, or password is null" });
            }

            var user = await _context.estudiantes
                .FirstOrDefaultAsync(data => data.Username == req.Username);

            if (user != null)
            {
                return BadRequest(new { success = false, message = "User already exists" });
            }

            var newEstudiante = new Estudiante
            {
                Username = req.Username,
                Email = req.Email,
                Clave = req.Clave
            };

            _context.estudiantes.Add(newEstudiante);
            await _context.SaveChangesAsync();

            var token = createToken(newEstudiante.Username!);

            return Ok(new { success = true, token });
        }

        private string createToken(string username)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"] ?? throw new ArgumentNullException("Jwt:Key")));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }

    public class LoginEstudiantes
    {
        public string? username { get; set; }
        public string? Clave { get; set; }
    }

    public class RegisterEstudiantes
    {
        public string? Username { get; set; }
        public string? Email { get; set; }
        public string? Clave { get; set; }
    }
}