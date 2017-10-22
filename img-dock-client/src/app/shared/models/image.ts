import { PermissionLvl } from '../enum/permission-lvl.enum';

export class Image {
    constructor(name: string, uploaderId: number, permissionLvl: PermissionLvl = PermissionLvl.restricted, tagId?: number[]) {}
}
