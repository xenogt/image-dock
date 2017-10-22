import { Tag } from '../models/tag';

interface ITagService {
    add(tag: Tag): Tag;
    delete(tagId: number): void;
    getAll(): Tag[];
    getAllCategory(): Tag[];
    getAllITag(): Tag[];
    getITagTypes(): string[];
}