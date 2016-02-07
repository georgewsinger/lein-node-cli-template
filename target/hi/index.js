require('./out-none/goog/bootstrap/nodejs');
require('./target/hi-none');
require('./out-none/hi/core');
hi.core._main(process.argv[2], process.argv[3], process.argv[4], process.argv[5], process.argv[6]);
