import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateUser1666600814535 implements MigrationInterface {
  name = 'UpdateUser1666600814535';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`position\` varchar(255) NOT NULL DEFAULT 'dev'
        `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
            ALTER TABLE \`user\` DROP COLUMN \`position\`
        `);
    await queryRunner.query(`
            ALTER TABLE \`user\`
            ADD \`position\` int NOT NULL DEFAULT '2'
        `);
  }
}
