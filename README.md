# filters
# chuleta de git
git init
git commit -m "first commit"
git remote add origin https://github.com/pierina27/filters.git
git push -u origin master

#Chuleta Regex
/\d{4}/g     ---  Cada 4 dígitos.
/\w{3}/g     ---  Cada 3 letras en una palabra, sin los espacios
"pierinas".replace(/(.{3})/g, '$1.')   --- Los parentesis son importantes. pie.rin.as
/[^0-9kK]+/g   --- Regex para sólo caracteres del RUT, sirve igual para dígito RUT

