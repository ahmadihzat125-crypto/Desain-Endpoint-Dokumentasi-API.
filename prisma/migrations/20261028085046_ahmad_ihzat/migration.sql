-- CreateTable
CREATE TABLE `Produk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaProduk` VARCHAR(191) NOT NULL,
    `harga` DOUBLE NOT NULL,
    `stok` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namaKategori` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
