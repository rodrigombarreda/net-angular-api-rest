USE [TarjetaCreditoDb]
GO
/****** Object:  StoredProcedure [dbo].[sp_login]    Script Date: 12/08/2022 12:35:05 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

ALTER PROCEDURE [dbo].[sp_login] 
@usuario varchar(50),
@contrasenia varchar(50),
@es_valido bit output



AS
BEGIN
  DECLARE @usuarioBase varchar(50),
          @contraseniaBase varchar(50)

select @es_valido = 0

  SELECT
    @usuarioBase = tj_usuario,
    @contraseniaBase = tj_contraseña
  FROM Usuario
  WHERE tj_usuario = @usuario

  print @usuarioBase

  IF @usuarioBase = @usuario
  begin
    IF @contraseniaBase = @contrasenia    
	begin
      select @es_valido=1
	  end
	else	
	begin
	print 'contraseña no coincide'
	end
 end
 else
 begin
 print 'usuario no encontrado'
 end


END