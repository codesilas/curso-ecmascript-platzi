// importar desde modulo

import hello from "./module.js";

hello()

// al ejecutar solo así, sale un error porque js no sabe que
// "module.js" es un modulo, hay que editar el archivo de package.json
// hay que agregar, despues de licencia:
// "type":"module"