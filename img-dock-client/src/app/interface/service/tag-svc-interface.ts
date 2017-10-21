interface TagService {
    add(tag: Tag): Tag;
    delete(tagId: number): void;
    getAll(): Tag[];
    getAllCategory(): Tag[];
    getAllTag(): Tag[];
    getTagTypes(): string[];
}