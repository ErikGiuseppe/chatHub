using System.Collections.Generic;
using webchat;
using static System.Formats.Asn1.AsnWriter;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});
var app = builder.Build();
app.MapHub<MyHub>("/chat");
app.UseCors();

//app.Start();
//app.MapGet("/", () => "Hello World!");

app.Run();


