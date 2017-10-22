interface IImage {
    id?: number;
    name: string;
    // minioRef?: string;
    uploaderId: number;
    permissionLvl?: number;
    tagId?: number[];
}