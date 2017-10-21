interface ImageService {
    add(image: Image): Image;
    delete(id: number): void;
    getById(id: number): Image;
    getAll(): Image[];
    getByTag(tagId: number): Image[];
    getByTag(tagName: string): Image[];
    getByTag(tagNames: string[]): Image[];
    getByCategory(catId: number): Image[];
    getByCategory(catName: string): Image[];
    getByCategory(catNames: string[]): Image[];
    getByUser(userid: number): Image[];
    getByUser(userName: string): Image[];
}