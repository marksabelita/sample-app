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
var FileLocation_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileLocation = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../../common/database/entities/base.entity");
const book_entity_1 = require("../../book/entities/book.entity");
let FileLocation = FileLocation_1 = class FileLocation extends base_entity_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 255, nullable: false }),
    __metadata("design:type", String)
], FileLocation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => FileLocation_1, (fileLocation) => fileLocation.id, {
        cascade: true,
        eager: false,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'parent_id' }),
    __metadata("design:type", FileLocation)
], FileLocation.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.Book, (book) => book.file_location),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], FileLocation.prototype, "books", void 0);
FileLocation = FileLocation_1 = __decorate([
    (0, typeorm_1.Entity)({ name: 'file_location' })
], FileLocation);
exports.FileLocation = FileLocation;
//# sourceMappingURL=file-location.entity.js.map