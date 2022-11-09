import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateAttachmentTable1666860907566 implements MigrationInterface {
  name = 'CreateAttachmentTable1666860907566';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`attachment\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`original_name\` varchar(255) NULL,
                \`key\` varchar(255) NULL,
                \`type\` varchar(255) NOT NULL DEFAULT 'other',
                \`author\` bigint NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`attachment\`
        `);
  }
}
