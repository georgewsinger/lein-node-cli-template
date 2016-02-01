require('./out-none/goog/bootstrap/nodejs');
require('./target/{{name}}-none');
require('./out-none/{{sanitized}}/core');
{{sanitized}}.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
