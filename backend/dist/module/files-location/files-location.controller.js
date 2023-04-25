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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FilesLocationController = void 0;
const common_1 = require("@nestjs/common");
const files_location_service_1 = require("./files-location.service");
const create_file_location_dto_1 = require("./dto/create-file-location.dto");
const update_file_location_dto_1 = require("./dto/update-file-location.dto");
const array_utils_1 = require("../../common/utils/array.utils");
const swagger_1 = require("@nestjs/swagger");
const tags_default_1 = require("../../common/defaults/tags.default");
const typeorm_1 = require("typeorm");
const caster_utils_1 = require("../../common/utils/caster.utils");
const book_service_1 = require("../book/book.service");
let FilesLocationController = class FilesLocationController {
    constructor(fileLocationService, bookService) {
        this.fileLocationService = fileLocationService;
        this.bookService = bookService;
    }
    create(createFileDto) {
        return this.fileLocationService.create(createFileDto);
    }
    async findAll() {
        const filters = {
            parent: { id: (0, typeorm_1.IsNull)() },
        };
        const locations = await this.fileLocationService.findAll(filters);
        const books = await this.bookService.findAll({
            file_location: { id: (0, typeorm_1.IsNull)() },
        });
        const data = [
            ...locations.map((file) => (Object.assign(Object.assign({}, file), { type: 'location' }))),
            ...books.map((file) => (Object.assign(Object.assign({}, file), { type: 'book' }))),
        ];
        return data;
    }
    async findOne(id) {
        const fileLocation = await this.fileLocationService.find({ id });
        const recursiveDetails = await this.fileLocationService.findCascadeRoot(id);
        const childFileLocation = await this.fileLocationService.findAll({
            parent: { id },
        });
        const breadCrumbs = (0, array_utils_1.arrangeData)(recursiveDetails);
        const { books } = fileLocation;
        const collections = [
            ...childFileLocation.map((file) => (Object.assign(Object.assign({}, file), { type: 'location' }))),
            ...books.map((book) => (Object.assign(Object.assign({}, book), { type: 'book' }))),
        ];
        return Object.assign(Object.assign({}, (0, caster_utils_1.omit)(fileLocation, [books])), { collections,
            breadCrumbs });
    }
    update(id, updateFileDto) {
        return this.fileLocationService.update(id, updateFileDto);
    }
    remove(id) {
        return this.fileLocationService.delete(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_file_location_dto_1.CreateFileLocationDto]),
    __metadata("design:returntype", void 0)
], FilesLocationController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FilesLocationController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FilesLocationController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_file_location_dto_1.UpdateFileLocationDto]),
    __metadata("design:returntype", void 0)
], FilesLocationController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FilesLocationController.prototype, "remove", null);
FilesLocationController = __decorate([
    (0, swagger_1.ApiTags)(tags_default_1.DEFAULT_ROUTE_TAGS.FILE_LOCATION),
    (0, common_1.Controller)('file-location'),
    __metadata("design:paramtypes", [files_location_service_1.FilesLocationService,
        book_service_1.BookService])
], FilesLocationController);
exports.FilesLocationController = FilesLocationController;
//# sourceMappingURL=files-location.controller.js.map