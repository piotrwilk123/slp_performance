var app = require('./server');
var dataSource = app.dataSources.mssql;

console.log('jajaj');

dataSource.discoverSchema('performance', {
  owner: 'dbo'
}, function(err, schema) {
  console.log(JSON.stringify(schema, null, '  '));
});