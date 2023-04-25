"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omit = exports.trim = void 0;
const trim = (data) => {
    return data.trim();
};
exports.trim = trim;
const omit = (obj, [...props]) => {
    const result = Object.assign({}, obj);
    props.forEach(function (prop) {
        delete result[prop];
    });
    return result;
};
exports.omit = omit;
//# sourceMappingURL=caster.utils.js.map