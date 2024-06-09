
-- Remove the table if it exists
DROP TABLE IF EXISTS products;

-- Create the table
CREATE TABLE products (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    subTitle TEXT,
    rating INTEGER,
    imgSrc TEXT,
    listProcessor TEXT,
    listMemory TEXT,
    listStrength TEXT,
    strikeThrough INTEGER,
    price INTEGER
);

-- Insert data into the table starting from id 25

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (25, 'MacBook Air. Nu med Apple M1-chippet.', 'Apple MacBook Air 256GB M1 chip with 8-core CPU and 7-core GPU ', -113, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/apple-macbook-air-256gb-m1-chip-with-8-core-cpu-and-7-core-gpu-space-grey(1015638)_405111_5_Normal_Large.jpg', 'Apple M1-chip med Ã¥ttakÃ¤rnig processor', '8 GB RAM + 256 GB SSD', '16-kÃ¤rnig Neural Engine', NULL, 9989);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (26, 'Snabb 17,3" laptop med 512 GB SSD & WiFi 6', 'Acer Aspire 3 17', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-17-18-tum/acer-aspire-3-17(1033667)_663226_7_Normal_Large.jpg', 'Intel N-series N100 processor', '512 GB SSD & 8 GB DDR5 RAM', 'WiFi 6 och Bluetooth', NULL, 6490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (27, 'Smidig 15,6" laptop med Intel processor & 512 GB SSD', 'Acer Aspire 3', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/acer-aspire-3(1033663)_663058_1_Normal_Large.jpg', 'IntelÂ® CeleronÂ® N4500 processor', '512 GB SSD & 8 GB RAM', 'Slimmad design', NULL, 5490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (28, '14" Chromebook Plus med Intel Core i3 processor', 'Acer Chromebook Plus 514', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/chromebook/acer-chromebook-plus-514(1033664)_663939_1_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i3 N305 processor', '256 GB SSD & 8 GB LPDDR5 RAM', '14" Full HD-skÃ¤rm (1920 x 1080)', NULL, 6290);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (29, '15,6" laptop med Ryzen 7 processor & 32 GB RAM-minne', 'Acer Aspire 3 15 (NX.KSJED.003)', -18, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/acer-aspire-3-15-nx-ksjed-003(1031132)_615203_1_Normal_Large.jpg', 'AMD Ryzenâ„¢ 7 5700U processor', '1 TB SSD & 32 GB RAM', 'Tunn design & effektiv kylning', 10990, 8490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (30, '17,3" laptop med Intel processor & 512 GB SSD', 'Acer Aspire 3 - A317-33-C1VR', -5, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-17-18-tum/acer-aspire-3-a317-33-c1vr(1031946)_634288_8_Normal_Large.jpg', 'IntelÂ® CeleronÂ® N4500 processor', '512 GB SSD & 8 GB RAM', 'Numeriskt tangentbord', 6499, 5690);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (31, '15,6'' laptop med AMD Ryzen 7 processor & 512 GB SSD', 'HP Pavilion 15-eh3004no', -7, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/hp-hp-pavilion-15-eh3004no(1030242)_612924_7_Normal_Large.jpg', 'AMD Ryzen 7 7730U processor', '512 GB SSD & 16 GB DDR4 RAM', '15,6" Full HD-skÃ¤rm (1920 x 1080)', 7990, 6990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (32, 'Smidig 14" laptop med Intel processor & 512 GB SSD', 'Acer Aspire 3 (NX.A7SED.00R)', -1, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-aspire-3-nx-a7sed-00r(1032811)_635873_3_Normal_Large.jpg', 'IntelÂ® CeleronÂ® N4500 processor', '512 GB SSD & 8 GB RAM', 'Slimmad design', NULL, 5799);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (33, '14" Full HD-laptop med Ryzenâ„¢ 5, Wi-Fi 6 & Windows 11', 'Acer Swift 3 (NX.AB1ED.00E)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-swift-3-nx-ab1ed-00e(1024712)_505552_1_Normal_Large.jpg', 'AMD Ryzenâ„¢ 5 5500U-processor', '512 GB SSD & 16 GB DDR4-RAM', 'Upp till 11.5 timmar batteritid', 6990, 6490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (34, 'Kraftfull 14" laptop med i7 processor & 32 GB DDR5 RAM', 'Acer Aspire 5 14 - A514-56M-75KV', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-aspire-5-14-a514-56m-75kv(1030919)_622664_1_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i7-1355U processor', '1 TB SSD & 32 GB DDR5 RAM', 'Full HD-webbkamera', 10990, 9990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (35, '14" laptop med pekskÃ¤rm & 512 GB SSD-lagring', 'Acer Aspire 3 Spin 14 - A3SP14-31PT-378A', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-aspire-3-spin-14-a3sp14-31pt-378a(1030927)_631759_9_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i3 N305 processor', '512 GB SSD & 8 GB DDR5 RAM', '360Â° gÃ¥ngjÃ¤rn', 6990, 5990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (36, '14" laptop med AMD Ryzen 5 processor & 8 GB RAM', 'HP HP Laptop 14-em0924no', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/hp-hp-laptop-14-em0924no(1033705)_652502_1_Normal_Large.jpg', 'AMD Ryzen 5 7520U processor', '512 GB SSD & 8 GB RAM', '14" HD-skÃ¤rm (1366 x 768)', NULL, 5790);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (37, '14" laptop med AMD Ryzen 5 processor & 16 GB RAM', 'HP Laptop 14-em0926no', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/hp-hp-laptop-14-em0926no(1033709)_652223_1_Normal_Large.jpg', 'AMD Ryzen 5 7520U processor', '512 GB SSD & 16 GB RAM', '14" FHD IPS-skÃ¤rm (1920 x 1080)', NULL, 8090);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (38, '14" Chromebook Plus med AMD Ryzen-processor', 'Acer Chromebook CB514-3H-R4FL', -1, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-cb514-3h-r4fl(1030922)_618912_1_Normal_Large.jpg', 'AMD Ryzen 3 7320C processor', '128 GB SSD & 8 GB DDR5 RAM', 'Upp till 12 timmars batteritid', NULL, 6990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (39, '15,6" Chromebook Plus med Intel Core i5-processor', 'Acer Chromebook Plus 515 15,6" FHD', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/acer-iris-xe-graphics-core-i5-1235u-8-gb-ram-256-gb-ssd-google-chrome-os(1032730)_624623_5_Normal_Large.jpg', 'Intel Core i5-1235U processor', '256 GB SSD & 8 GB DDR5 RAM', 'Upp till 10 timmars batteritid', NULL, 8490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (40, '15,6" laptop med AMD Ryzenâ„¢ 5 Processor & Windows 11', 'HP Pavilion 15-eh3015no', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/hp-hp-pavilion-15-eh3015no(1032893)_639394_1_Normal_Large.jpg', 'AMD Ryzenâ„¢ 5 7530U Processor', '512 GB SSD & 16 GB DDR4-RAM', '15,6" Full HD-skÃ¤rm (1920 x 1080)', 8290, 6990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (41, '15,6" laptop med AMD Ryzen 5 processor & 512 GB SSD', 'Lenovo IdeaPad 1', -5, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/lenovo-ideapad-1(1031215)_616019_7_Normal_Large.jpg', 'AMD Ryzenâ„¢ 5 5500U processor', '512 GB SSD & 8 GB RAM', 'HD-kamera med Privacy Shutter', NULL, 6490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (42, '14" laptop med 12:e Gen. Intel Core i5 & 16 GB DDR5 RAM', 'Lenovo IdeaPad Slim 3', -2, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-ideapad-slim-3(1031225)_622787_1_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i5-12450H processor', '512 GB SSD & 16 GB DDR5 RAM', 'Full HD-webbkamera med skydd', 7990, 6490);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (43, '15,6" laptop med snabb i5-processor & 1 TB SSD-lagring', 'MSI Modern 15 B12MO-864NEU', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/msi-modern-15-b12mo-864neu(1033170)_661696_4_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i5-1235U processor', '1 TB SSD & 16 GB RAM', 'Wi-Fi 6E & 1,5 mm tangenthÃ¶jd', NULL, 8899);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (44, 'LÃ¤tt & smidig 14" laptop med en snabb i5-processor', 'MSI Modern 14 C12MO-1087NEU', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/msi-modern-14-c12mo-1087neu(1033172)_659753_1_Normal_Large.jpg', 'Intel Core i5-1235U processor', '512 GB SSD & 8 GB RAM', 'VÃ¤ger endast 1,4 kg', NULL, 7790);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (45, '15,6" laptop med 12:e Gen. Intel Core i5 & 16 GB DDR5', 'Lenovo IdeaPad Slim 3', -3, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/lenovo-ideapad-slim-3(1031213)_622852_1_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i5-12450H processor', '512 GB SSD & 16 GB DDR5 RAM', 'Full HD-webbkamera med skydd', NULL, 7999);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (46, '14'' laptop med AMD Ryzen 7 processor & 512 GB SSD', 'Lenovo IdeaPad Flex 5', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-ideapad-flex-5(1031226)_629489_4_Normal_Large.jpg', 'AMD Ryzen 7 7730U processor', '512 GB SSD & 16 GB DDR4 RAM', '14" WUXGA-skÃ¤rm med IPS-panel', 10499, 8990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (47, '14" laptop med Full HD-pekskÃ¤rm & AMD Ryzen 7', 'Lenovo Flex 5 (82HU012EMX)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-flex-5-82hu012emx(1030943)_600115_8_Normal_Large.jpg', 'AMD Ryzenâ„¢ 7 5700U processor', '512 GB SSD & 16 GB RAM', '360-graders gÃ¥ngjÃ¤rn', 8799, 7990);

INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (48, '16" laptop med IntelÂ® Coreâ„¢ i5-processor & 512 GB SSD', 'Medion  AKOYA E16423 (MD62558)', -3, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/medion-akoya-e16423-md62558(1031733)_611538_1_Normal_Large.jpg', 'IntelÂ® Coreâ„¢ i5-1155G7 processor', '512 GB SSD & 8 GB RAM', 'WiFi 5 och Bluetooth 5.0', NULL, 5990);
