import { Injex } from "@injex/node";

Injex.create({ rootDirs: [__dirname], globPattern: "/**/*.ts" }).bootstrap();
