using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api_elearning.Migrations
{
    /// <inheritdoc />
    public partial class ModelsProducts : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "usuarios",
                newName: "created_at");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "usuarios",
                newName: "CreatedAt");
        }
    }
}
