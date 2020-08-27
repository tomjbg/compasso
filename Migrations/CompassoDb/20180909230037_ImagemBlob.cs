using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace compasso.Migrations.CompassoDb
{
    public partial class ImagemBlob : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Data",
                table: "Imagem",
                type: "longblob",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "blob");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "Data",
                table: "Imagem",
                type: "blob",
                nullable: false,
                oldClrType: typeof(byte[]),
                oldType: "longblob");
        }
    }
}
