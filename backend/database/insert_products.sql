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
    strikeThrough TEXT,
    price TEXT
);

-- Insert data into the table
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (1, '14" FHD-Chromebook med IPS & Intel®N4020', 'Acer Chromebook CB314 (NX.AUDED.00E)', 15, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-cb314-nx-auded-00e(1028065)_639561_9_Normal_Large.jpg', 'Intel Pentium N4020-processor', '64 GB eMMC & 4 GB RAM', 'Upp till 12,5 timmar batteritid', '2 790:-', '2 490:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (2, '14" FHD-laptop med mycket prestanda för pengarna', 'Ångström (M1HOME)', 31, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/angstrom-angstrom-m1home(1028915)_555420_5_Normal_Large.jpg', 'Intel® Pentium™ Silver N5030', '64 GB SSD & 4 GB RAM', '14,1" Full HD-skärm', NULL, '2 899:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (3, 'Lätt 14" Chromebook med 128 GB lagring & 15 h batteritid', 'Acer Chromebook 314 (NX.AWFED.009)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-314-nx-awfed-009(1032684)_623915_1_Normal_Large.jpg', 'MediaTek MT8183 OctaCore-processor', '128 GB eMMC-lagring & 8 GB RAM', 'Upp till 15 timmars batteritid', '3 290:-', '2 690:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (4, 'Tunn och enkel 14" Chromebook med lång batteritid', 'Acer Chromebook 314 (NX.AWFED.00Q)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-314-nx-awfed-00q(1032683)_638882_5_Normal_Large.jpg', 'MediaTek MT8183 OctaCore-processor', '32 GB eMMC & 4 GB RAM', 'Upp till 15 timmar batteritid', '3 299:-', '2 790:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (5, '14" laptop med 10:e Gen. i3 processor & 8 h batteritid', 'Medion E14409', 16, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/medion-e14409(1028245)_547834_1_Normal_Large.jpg', 'Intel Core i3 10:e gen. processor', '128 GB SSD & 4 GB RAM', 'Upp till 8 timmar batteritid', '3 590:-', '2 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (6, '14" Chromebook med lång batteritid & flexibel design', 'HP Chromebook Cx14a-ca0003 H/C4120/4/64/M/CH', 4, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/hp-chromebook-cx14a-ca0003-hc4120464mch(1028611)_573071_3_Normal_Large.jpg', 'Intel® Celeron® N4120-processor', '64 GB eMMC & 4 GB RAM', 'Upp till 13 timmar batteritid', NULL, '3 499:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (7, '14" Chromebook för arbete och underhållning överallt', 'Acer Chromebook 314 (NX.KB4ED.00M)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-314-nx-kb4ed-00m(1032808)_646769_7_Normal_Large.jpg', 'Intel® Celeron® N4500 processor', '64 GB lagring & 8 GB RAM', '14" Full HD-skärm', NULL, '3 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (8, '17,3" laptop med HD-webbkamera & sekretesskydd', 'Lenovo IdeaPad 3 (82H900MWMX)', 4, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-17-18-tum/lenovo-ideapad-3-82h900mwmx(1030086)_595297_3_Normal_Large.jpg', 'Intel® Celeron® 6305 processor', '128 GB SSD & 4 GB RAM', '17,3" HD+ skärm (1600 x 900)', NULL, '4 790:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (9, '14" Chromebook med Celeron®N4500-processor', 'Acer Chromebook Spin 314', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/acer-chromebook-spin-314(1032809)_646608_2_Normal_Large.jpg', 'Intel® Celeron® N4500-processor', '128 GB eMMC & 8 GB RAM', 'Upp till 10 timmars batteritid', NULL, '4 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (10, 'Lätt 14" Chromebook med upp till 15 timmars batteritid', 'Acer Chromebook 314 (NX.AWFED.00G)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/chromebook/acer-acer-chromebook-314-nx-awfed-00g(1027006)_538202_1_Normal_Large.jpg', 'MediaTek MT8183 processor', '64 GB SSD & 4 GB RAM', 'Upp till 15 timmars batteritid', NULL, '3 490:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (11, '15,6" Chromebook för enkel användning på språng', 'Lenovo IdeaPad 3 Chrome', 3, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/lenovo-ideapad-3-chrome(1032867)_643850_1_Normal_Large.jpg', 'Intel® Celeron® N4500 processor', '128 GB lagring & 8 GB RAM', 'Snabb laddning via USB-C', NULL, '3 490:-');
    INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (12, '14" laptop med lång batteritid & 128 GB SSD', 'Lenovo IdeaPad 1', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-ideapad-1(1032865)_641040_1_Normal_Large.jpg', 'Intel® Celeron® N4120-processor', '128 GB eMMC & 4 GB RAM', 'Upp till 11 timmar batteritid', NULL, '2 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (13, '15,6" laptop med AMD processor & snabbladdning', 'HP Laptop 15-fc0017no', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/hp-laptop-15-fc0017no(1033455)_644308_1_Normal_Large.jpg', 'AMD Athlon™ Gold 7220U processor', '256 GB SSD & 8 GB DDR5 RAM', 'Ca. 10 tim & 30 min batteritid', NULL, '4 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (14, 'Refurbished 14" arbetsdator med 256 GB SSD & 16 GB RAM', 'Lenovo ThinkPad T480s (Refurbished) A-grade', 1, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-lenovo-thinkpad-t480s-refurbished-a-grade(1032944)_641917_1_Normal_Large.jpg', 'Intel Core i5-8350U processor', '256 GB SSD & 16 GB RAM', 'Gradering A = Utmärkt skick', NULL, '3 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (15, '14" Chromebook med 13,5 h batteritid & 8 GB RAM', 'Lenovo IdeaPad 3 Chromebook', 4, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/lenovo-ideapad-3-chromebook(1031221)_622675_1_Normal_Large.jpg', 'MediaTek Kompanio 520-processor', '128 GB eMMC & 8 GB RAM', 'Upp till 13,5 timmar batteritid', NULL, '4 490:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (16, '15,6" laptop med Intel processor & 128 GB eMMC', 'ASUS Laptop E510', 1, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/asus-asus-laptop-e510(1032988)_630134_2_Normal_Large.jpg', 'Intel® Celeron® N4500 processor', '128 GB eMMC & 4 GB RAM', 'Fläktlös design', NULL, '3 499:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (17, 'Lätt & smidig 15,6" laptop med 128 GB lagring', 'ASUS Laptop E510 (L510KA-EJ738W)', 3, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/asus-asus-laptop-e510-l510ka-ej738w(1032990)_644682_3_Normal_Large.jpg', 'Intel® Celeron® N4500 processor', '128 GB eMMC & 8 GB RAM', 'Väjer endast 1,57 kg', NULL, '4 499:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (18, '14" Chromebook med lång batteritid & snabbladdning', 'HP HP Chromebook 14a 14a-na0212no', 1, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-12-14-tum/hp-hp-chromebook-14a-14a-na0212no(1031032)_619366_1_Normal_Large.jpg', 'Intel® Celeron® N4120-processor', '128 GB eMMC & 8 GB RAM', 'Upp till 12,5 timmar batteritid', NULL, '4 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (19, 'Refurbished 14" laptop med i5 processor & 256 GB SSD', 'Dell Latitude 7490 (Refurbished) A-grade', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/dator-surfplatta/laptop/laptop-15-16-tum/dell-latitude-7490-refurbished-a-grade(1033404)_641933_1_Normal_Large.jpg', 'Intel® Core™ i5-8350U processor', '256 GB SSD & 8 GB RAM', 'Gradering A = Utmärkt skick', NULL, '3 990:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (20, '14" FHD-laptop med mycket prestanda för pengarna', 'Ångström (M1HOME)', 31, 'https://www.netonnet.se/GetFile/ProductImagePrimary/outlet/dator/angstrom-x-m1home(X1028915)_555420_5_Normal_Large.jpg', 'Intel® Pentium™ Silver N5030', '64 GB SSD & 4 GB RAM', '14,1" Full HD-skärm', NULL, '2 490:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (21, '14" laptop med 10:e Gen. i3 processor & 8 h batteritid', 'Medion E14409', 16, 'https://www.netonnet.se/GetFile/ProductImagePrimary/outlet/dator/medion-x-e14409(X1028245)_547834_1_Normal_Large.jpg', 'Intel Core i3 10:e gen. processor', '128 GB SSD & 4 GB RAM', 'Upp till 8 timmar batteritid', NULL, '2 490:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (22, '14" laptop med 10 timmar batteritid & snabbladdning', 'Lenovo Ideapad 1 (82R00063MX)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/outlet/dator/fyndvaror-laptop/laptop-14-16-tum/lenovo-x-ideapad-1-82r00063mx(X1028436)_572522_3_Normal_Large.jpg', 'AMD 3000 Series 3020E processor', '64 GB eMMC & 4 GB RAM', 'Upp till 10 timmar batteritid', NULL, '3 190:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (23, '17,3" laptop med HD-webbkamera & sekretesskydd', 'Lenovo IdeaPad 3 (82H900MWMX)', 4, 'https://www.netonnet.se/GetFile/ProductImagePrimary/outlet/dator/lenovo-x-ideapad-3-82h900mwmx(X1030086)_595297_3_Normal_Large.jpg', 'Intel® Celeron® 6305 processor', '128 GB SSD & 4 GB RAM', '17,3" HD+ skärm (1600 x 900)', NULL, '4 090:-');
INSERT INTO products (id, title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, strikeThrough, price) VALUES 
    (24, '14" laptop med lång batteritid & 128 GB SSD', 'Lenovo IdeaPad 1', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/outlet/dator/lenovo-x-ideapad-1(X1032865)_641040_1_Normal_Large.jpg', 'Intel® Celeron® N4120-processor', '128 GB eMMC & 4 GB RAM', 'Upp till 11 timmar batteritid', NULL, '2 490:-');