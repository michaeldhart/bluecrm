"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initPeopleRoutes = void 0;
const initPeopleRoutes = (app) => {
    app.route('/people').post(create).get(list).put(update).delete(remove);
    app.get('people/:guid', get);
};
exports.initPeopleRoutes = initPeopleRoutes;
const create = (req, res) => {
    console.log(req.body);
    res.end();
};
const list = (req, res) => {
    console.log(req.body);
    res.end();
};
const get = (req, res) => {
    console.log(req.body);
    res.end();
};
const update = (req, res) => {
    console.log(req.body);
    res.end();
};
const remove = (req, res) => {
    console.log(req.body);
    res.end();
};
//# sourceMappingURL=peopleRoutes.js.map