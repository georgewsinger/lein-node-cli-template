require('./out-none/goog/bootstrap/nodejs');
require('./target/hello4-none');
require('./out-none/hello4/core');
hello4.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
