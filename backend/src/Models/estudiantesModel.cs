using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EstudiantesModel.Models
{
    [Table("estudiante")] 
    public class Estudiante
    {
        [Key]
        public int Id { get; set; }

        public string? Nombre { get; set; }

        public string? Apellido { get; set; }

        public string? Email { get; set; }

        public string? Username { get; set; }

        public string? Clave { get; set; }

        public string? Genero { get; set; }

        public string? Telefono { get; set; }

        public string? Direccion { get; set; }

        public string? Nacionalidad { get; set; }

        public string? FechaNacimiento { get; set; }

        public string? FechaInicio { get; set; }

        public string? FotoPerfil { get; set; }

        public string? Biografia { get; set; }

        public DateTime UltimaConexion { get; set; } = DateTime.Now;
    }
}