"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initInMemoryDb = void 0;
const fs_1 = __importDefault(require("fs"));
const inMemoryDb = {
    people: [],
};
const initInMemoryDb = () => {
    fs_1.default.readFile('seedData/people.json', (err, data) => {
        console.log(err);
        inMemoryDb.people = JSON.parse(data.toString());
        console.log(inMemoryDb.people);
    });
};
exports.initInMemoryDb = initInMemoryDb;
//# sourceMappingURL=inMemoryDb.js.map