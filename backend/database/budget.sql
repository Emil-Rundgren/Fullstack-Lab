-- Ta bort tabellen om den redan finns
DROP TABLE IF EXISTS laptops;

-- Skapa tabellen med de specifika kolumnerna och constraints
CREATE TABLE laptops (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    subTitle TEXT,
    rating INTEGER,
    imgSrc TEXT UNIQUE NOT NULL,
    listProcessor TEXT,
    listMemory TEXT,
    listStrength TEXT,
    price TEXT
);

-- Infoga data i tabellen
INSERT INTO laptops (title, subTitle, rating, imgSrc, listProcessor, listMemory, listStrength, price) VALUES
('14" FHD-Chromebook med IPS & Intel®N4020', 'Acer Chromebook CB314 (NX.AUDED.00E)', 15, 'https://www.netonnet.se/GetFile/ProductImagePrimary/large/227685.jpg', 'Intel Pentium N4020-processor', '64 GB eMMC & 4 GB RAM', 'Upp till 12,5 timmar batteritid', '2 490:-'),
('14" FHD-laptop med mycket prestanda för pengarna', 'Ångström (M1HOME)', 31, 'https://www.netonnet.se/GetFile/ProductImagePrimary/large/223317.jpg', 'Intel® Pentium™ Silver N5030', '64 GB SSD & 4 GB RAM', '14,1" Full HD-skärm', '2 899:-'),
('Lätt 14" Chromebook med 128 GB lagring & 15 h batteritid', 'Acer Chromebook 314 (NX.AWFED.009)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/large/224699.jpg', 'MediaTek MT8183 OctaCore-processor', '128 GB eMMC-lagring & 8 GB RAM', 'Upp till 15 timmars batteritid', '2 690:-'),
('Tunn och enkel 14" Chromebook med lång batteritid', 'Acer Chromebook 314 (NX.AWFED.00Q)', 0, 'https://www.netonnet.se/GetFile/ProductImagePrimary/large/224700.jpg', 'MediaTek MT8183 OctaCore-processor', '32 GB eMMC & 4 GB RAM', 'Upp till 15 timmar batteritid', '2 790:-'),
('14" laptop med 10:e Gen. i3 processor & 8 h batteritid', 'Medion E14409', 16, 'https://www.netonnet.se/GetFile/ProductImagePrimary/large/223318.jpg', 'Intel Core i3 10:e gen. processor', '128 GB SSD & 4 GB RAM', 'Upp till 8 timmar batteritid', '2 990:-');
