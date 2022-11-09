import { MigrationInterface, QueryRunner } from 'typeorm';

export class ConfigUser1665549201679 implements MigrationInterface {
  name = 'ConfigUser1665549201679';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`user_config\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`user_id\` bigint NOT NULL,
                \`type\` varchar(255) NOT NULL,
                \`value\` varchar(255) NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`user_config\`
            ADD CONSTRAINT \`FK_8c72fcf81a78b388f0503f67641\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user_config\` DROP FOREIGN KEY \`FK_8c72fcf81a78b388f0503f67641\`
        `);
    await queryRunner.query(`
            DROP TABLE \`user_config\`
        `);
  }
}
