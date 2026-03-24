### Bitácora de trabajo – Control de versiones con Git

1. Se crea la carpeta de trabajo donde se desarrollará el proyecto.

2. Se inicializa el repositorio local mediante el comando `git init`, con el objetivo de comenzar el control de versiones.

3. Se establece la conexión con el repositorio remoto utilizando `git remote add origin`, vinculando el proyecto local con el repositorio en línea.

4. Se obtiene el contenido del repositorio remoto, específicamente la rama de trabajo del compañero, mediante `git pull`, con el fin de contar con la base del proyecto para iniciar el desarrollo.

5. Se cambia a la rama principal (`main`) para asegurar que se trabajará sobre la versión más actualizada del proyecto.

6. Se crea una nueva rama de trabajo a partir de `main` utilizando `git checkout -b`, permitiendo desarrollar de manera independiente sin afectar la rama principal.

7. Se realiza el desarrollo correspondiente al rol asignado (en este caso, JavaScript), modificando los archivos necesarios del proyecto.

8. Una vez finalizados los cambios, se agregan al área de preparación con `git add` y se registran mediante un commit utilizando `git commit`, documentando los cambios realizados.

9. Se sube la rama creada al repositorio remoto con `git push`, permitiendo compartir los avances con el equipo.

10. Posteriormente, se regresa a la rama `main` y se actualiza con `git pull` para asegurar que se cuenta con los cambios más recientes.

11. Se realiza la integración de la rama de trabajo con la rama principal mediante `git merge`, incorporando los cambios desarrollados al proyecto general.

12. Se ejecuta `git push` sobre la rama `main` para actualizar el reposorio remoto con la versión final del proyecto.

13. Durante el proceso de integración, se presentó un conflicto de merge, el cual fue identificado y resuelto manualmente para garantizar la correcta unificación de los cambios.
