-- CREATE SEQUENCE 

DROP TABLE IF EXISTS UserInfo CASCADE;
CREATE TABLE UserInfo (
    "UserId" serial NOT NULL,
    "Name" text NOT NULL,
    CONSTRAINT "UserInfoPK" PRIMARY KEY ("UserId")
);

DROP TABLE IF EXISTS Image CASCADE;
CREATE TABLE Image (
    "ImageId" serial NOT NULL,
    "UploadUserId" serial NOT NULL,
    "Name" text,
    "MinioRef" varchar(60) NOT NULL,
    CONSTRAINT "ImagePK" PRIMARY KEY ("ImageId"),
    CONSTRAINT "UniqueMinioRef" UNIQUE ("MinioRef"),
    CONSTRAINT "UploaderFK" FOREIGN KEY ("UploadUserId") REFERENCES UserInfo("UserId")
);

DROP TABLE IF EXISTS Tag CASCADE;
CREATE TABLE Tag (
    "TagId" serial NOT NULL,
    "FilterTerm" text NOT NULL,
    "Type" varchar(16) NOT NULL,
    CONSTRAINT "TagPK" PRIMARY KEY ("TagId"),
    CONSTRAINT "UniqueFilterTermType" UNIQUE ("FilterTerm", "Type")
);

DROP TABLE IF EXISTS ImageTag;
CREATE TABLE ImageTag (
    "ImageId" serial,
    "TagId" serial,
    CONSTRAINT "ImageTagTagFK" FOREIGN KEY ("TagId") REFERENCES Tag("TagId"),
    CONSTRAINT "ImageTagImageFK" FOREIGN KEY ("ImageId") REFERENCES Image("ImageId")
);


INSERT INTO UserInfo ("Name") VALUES ('catbug');

-- INSERT INTO Image VALUES ("MinioRef");
INSERT INTO Image ("MinioRef", "UploadUserId") VALUES ('12345', 1);
INSERT INTO Image ("MinioRef", "UploadUserId") VALUES ('12346', 1);

INSERT INTO Tag ("FilterTerm", "Type") VALUES ('xmas', 'TAG');
INSERT INTO Tag ("FilterTerm", "Type") VALUES ('cat1', 'CATEGORY');
INSERT INTO Tag ("FilterTerm", "Type") VALUES ('xmas', 'CATEGORY');
-- INSERT INTO Tag ("FilterTerm", "Type") VALUES ('xmas', 'CATEGORY');

select * from Image;
