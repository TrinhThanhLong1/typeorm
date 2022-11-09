import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateTeam1666237486640 implements MigrationInterface {
  name = 'CreateTeam1666237486640';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            CREATE TABLE \`team\` (
                \`id\` bigint NOT NULL AUTO_INCREMENT,
                \`name\` varchar(255) NOT NULL,
                \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                \`deleted_at\` timestamp(6) NULL,
                UNIQUE INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` (\`name\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE = InnoDB
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`level\` int NULL DEFAULT '4'
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`team_id\` bigint NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`value\` \`value\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD CONSTRAINT \`FK_155dbc144ff2bd4713fdf1f6c77\` FOREIGN KEY (\`team_id\`) REFERENCES \`team\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_155dbc144ff2bd4713fdf1f6c77\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`config\` CHANGE \`value\` \`value\` varchar(255) NULL
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`team_id\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`level\`
        `);
    await queryRunner.query(`
            DROP INDEX \`IDX_cf461f5b40cf1a2b8876011e1e\` ON \`team\`
        `);
    await queryRunner.query(`
            DROP TABLE \`team\`
        `);
  }
}
