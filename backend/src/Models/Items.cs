using System;
using System.ComponentModel.DataAnnotations;

namespace usuariosModel.Models
{
    public class Usuarios
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(250)]
        public string? Username { get; set; }

        [Required]
        [MaxLength(250)]
        public string? Clave { get; set; }

        [Required]
        public int role { get; set; }

        [MaxLength(15)]
        public string activo { get; set; } = "activo";

        public DateTime created_at { get; set; } = DateTime.Now;
    }
}