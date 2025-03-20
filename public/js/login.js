/*=============== MOSTRAR OCULTAR CONTRASEÑA INICIAR SESIÓN ================*/
const passwordAccess = (loginPass, loginEye) =>{
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () =>{
      // Cambiar contraseña a texto
      input.type === 'password' ? input.type = 'text'
						              : input.type = 'password'

      // cambio de icono
      iconEye.classList.toggle('ri-eye-fill')
      iconEye.classList.toggle('ri-eye-off-fill')
   })
}
passwordAccess('password','loginPassword')



