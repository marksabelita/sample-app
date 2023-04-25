"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesLocationModule = void 0;
const common_1 = require("@nestjs/common");
const files_location_service_1 = require("./files-location.service");
const files_location_controller_1 = require("./files-location.controller");
const typeorm_1 = require("@nestjs/typeorm");
const file_location_entity_1 = require("./entities/file-location.entity");
const book_service_1 = require("../book/book.service");
const book_entity_1 = require("../book/entities/book.entity");
let FilesLocationModule = class FilesLocationModule {
};
FilesLocationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([file_location_entity_1.FileLocation, book_entity_1.Book])],
        controllers: [files_location_controller_1.FilesLocationController],
        providers: [files_location_service_1.FilesLocationService, book_service_1.BookService],
    })
], FilesLocationModule);
exports.FilesLocationModule = FilesLocationModule;
//# sourceMappingURL=files-location.module.js.map