using Microsoft.EntityFrameworkCore.Migrations;

namespace compasso.Migrations.CompassoDb
{
    public partial class ImagemLength : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<int>(
                name: "Length",
                table: "Imagem",
                type: "int",
                nullable: false,
                oldClrType: typeof(long),
                oldType: "long");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<long>(
                name: "Length",
                table: "Imagem",
                type: "long",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");
        }
    }
}
