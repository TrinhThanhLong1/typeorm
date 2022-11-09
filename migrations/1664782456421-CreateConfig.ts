import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateConfig1664782456421 implements MigrationInterface {
  name = 'CreateConfig1664782456421';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`config\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`key\` varchar(255) NOT NULL,
                \`type_value\` varchar(255) NOT NULL,
                \`value\` varchar(255),
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            DROP TABLE \`config\`
        `);
  }
}
