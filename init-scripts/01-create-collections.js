// Conectar a la base de datos
db = db.getSiblingDB('mydatabase');  // Reemplaza 'mydatabase' con el nombre de tu base de datos

// Crear una colección y agregar documentos de ejemplo
db.createCollection('users');
db.users.insertMany([
  { name: 'John Doe', email: 'john.doe@example.com', age: 30 },
  { name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
  { name: 'Bob Johnson', email: 'bob.johnson@example.com', age: 40 }
]);

print('Inicialización de base de datos completada: colección y documentos agregados.');
