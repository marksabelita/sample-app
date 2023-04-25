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
exports.FilesLocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const file_location_entity_1 = require("./entities/file-location.entity");
let FilesLocationService = class FilesLocationService {
    constructor(fileLocationRepository, dataSource) {
        this.fileLocationRepository = fileLocationRepository;
        this.dataSource = dataSource;
    }
    async findAll(params) {
        return await this.fileLocationRepository.find({
            where: params,
        });
    }
    async find(params) {
        return await this.fileLocationRepository.findOne({
            relations: ['books'],
            where: params,
        });
    }
    async findCascadeRoot(id) {
        return await this.dataSource.query(`
      WITH RECURSIVE parent_file_location AS (
        SELECT id, name, parent_id
        FROM file_location
        WHERE id = ${id}
        UNION ALL
        SELECT t.id, t.name, t.parent_id
        FROM file_location t
        JOIN parent_file_location p ON t.id = p.parent_id
      )
      SELECT *
      FROM parent_file_location;`);
    }
    async create(createFileLocationDto) {
        return await this.fileLocationRepository.save(createFileLocationDto);
    }
    async update(id, createFileLocationDto) {
        return await this.fileLocationRepository.update({ id }, createFileLocationDto);
    }
    async delete(id) {
        return await this.fileLocationRepository.delete({ id });
    }
};
FilesLocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(file_location_entity_1.FileLocation)),
    __param(1, (0, typeorm_1.InjectDataSource)()),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.DataSource])
], FilesLocationService);
exports.FilesLocationService = FilesLocationService;
//# sourceMappingURL=files-location.service.js.map