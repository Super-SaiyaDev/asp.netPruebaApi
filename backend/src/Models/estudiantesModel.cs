using System;
using System.ComponentModel.DataAnnotations;

namespace EstudiantesModel.Models
{
    public class Estudiantes
    {
        [Key]
        public int Id { get; set; }

        public string? Nombre { get; set; }
        public string? Apellido { get; set; }

        public string? Email { get; set; }

        public string? Username { get; set; }

        public string? Clave { get; set; }

        public string? Genero { get; set; }

        public string? Telefeno { get; set; }

        public string? Direccion { get; set; }

        public string? Nacionalidad{ get; set; }

        public string? FechaNacimiento { get; set; }

        public string? FechaInicio { get; set; }

        public string? FotoPerfil { get; set; }

        public string? BiblioGrafia { get; set; }

        public DateTime UltimaConexion { get; set; } = DateTime.Now;


    }
}