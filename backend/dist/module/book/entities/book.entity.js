"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/database/entities/base.entity");
const file_location_entity_1 = require("../../files-location/entities/file-location.entity");
let Book = class Book extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], Book.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => file_location_entity_1.FileLocation, (fileLocation) => fileLocation.id, {
        cascade: true,
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'file_location_id' }),
    __metadata("design:type", file_location_entity_1.FileLocation)
], Book.prototype, "file_location", void 0);
Book = __decorate([
    (0, typeorm_1.Entity)({ name: 'book' })
], Book);
exports.Book = Book;
//# sourceMappingURL=book.entity.js.map