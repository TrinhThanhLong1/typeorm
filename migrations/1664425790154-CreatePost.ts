import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePost1664425790154 implements MigrationInterface {
  name = 'CreatePost1664425790154';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`category\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`name\` varchar(50) NOT NULL,
                \`slug\` varchar(50) NOT NULL,
                \`description\` varchar(50) NOT NULL,
                \`status\` enum ('1', '0') NOT NULL DEFAULT '1',
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            CREATE TABLE \`post\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                \`title\` varchar(255) NOT NULL,
                \`slug\` varchar(255) NOT NULL,
                \`description\` text NOT NULL,
                \`thumbnail\` varchar(100) NOT NULL,
                \`tag\` varchar(50) NULL,
                \`content\` mediumtext NOT NULL,
                \`status\` enum ('1', '0') NOT NULL DEFAULT '1',
                \`author\` bigint NULL,
                \`category_id\` bigint NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD CONSTRAINT \`FK_02ae38efb048ff5201d9bc632e1\` FOREIGN KEY (\`author\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\`
            ADD CONSTRAINT \`FK_388636ba602c312da6026dc9dbc\` FOREIGN KEY (\`category_id\`) REFERENCES \`category\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_388636ba602c312da6026dc9dbc\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_02ae38efb048ff5201d9bc632e1\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_cd1bddce36edc3e766798eab37\` ON \`post\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_e28aa0c4114146bfb1567bfa9a\` ON \`post\`
        `);
    await queryRunner.query(`
            DROP TABLE \`post\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_cb73208f151aa71cdd78f662d7\` ON \`category\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_23c05c292c439d77b0de816b50\` ON \`category\`
        `);
    await queryRunner.query(`
            DROP TABLE \`category\`
        `);
  }
}
