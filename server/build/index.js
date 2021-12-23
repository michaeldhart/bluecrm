"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inMemoryDb_1 = require("./data/inMemoryDb");
const peopleRoutes_1 = require("./routes/peopleRoutes");
const initRoutes = () => {
    (0, peopleRoutes_1.initPeopleRoutes)(app);
};
(0, inMemoryDb_1.initInMemoryDb)();
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
initRoutes();
app.listen(port);
//# sourceMappingURL=index.js.map